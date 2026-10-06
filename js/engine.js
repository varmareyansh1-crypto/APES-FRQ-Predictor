/*
 * APES FRQ prediction engine.
 *
 * How a prediction is made for the chosen unit:
 *   1. Parse the pasted FRQs into individual questions and parts.
 *   2. Map each question onto CED topics by keyword matching, and record the
 *      teacher's style (task verbs, number of parts, calculations, FRQ type).
 *   3. Score every topic in the unit by blending
 *        - prior:   how often the topic shows up on AP / teacher FRQs (KB `w`)
 *        - teacher: how heavily the teacher's own FRQs hit the topic
 *        - gap:     topics the teacher has NOT tested yet (rotation)
 *      The "reuse vs. rotate" setting shifts weight between teacher and gap.
 *   4. Convert scores into a chance each topic appears on the test, then build
 *      full predicted FRQs in the teacher's style anchored on the top topics.
 */
(function (root) {
  "use strict";

  const STOPWORDS = new Set(("a an and are as at be by can for from has have how in is it its of on or " +
    "that the their this to was were what when which who why will with your you one two each " +
    "describe explain identify justify calculate propose using use shown show work part based").split(" "));

  const VERBS = ["identify", "describe", "explain", "justify", "calculate", "propose", "compare", "predict", "design"];

  const FRQ_TYPES = {
    design: "Design an Investigation",
    problem: "Analyze a Problem & Propose a Solution",
    calc: "Analyze a Problem with Calculations"
  };

  // ---------- small utilities ----------

  function normalize(text) {
    return (" " + String(text || "").toLowerCase()
      .replace(/[‘’]/g, "'")
      .replace(/ñ/g, "n")
      .replace(/[^a-z0-9.%'+\- ]+/g, " ")
      .replace(/\s+/g, " ") + " ");
  }

  function stem(word) {
    if (word.length > 5 && word.endsWith("ing")) return word.slice(0, -3);
    if (word.length > 4 && word.endsWith("ies")) return word.slice(0, -3) + "y";
    if (word.length > 4 && word.endsWith("es") && !word.endsWith("ses")) return word.slice(0, -2);
    if (word.length > 3 && word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
    if (word.length > 5 && word.endsWith("ed")) return word.slice(0, -2);
    return word;
  }

  function tokens(text) {
    return normalize(text).split(" ")
      .map(w => w.replace(/^[.'+\-]+|[.'+\-]+$/g, ""))
      .filter(w => w.length > 2 && !STOPWORDS.has(w))
      .map(stem);
  }

  // Deterministic PRNG so the same input always yields the same prediction.
  function hashString(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function rng(seed) {
    let a = seed || 1;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function cosine(a, b) {
    let dot = 0, na = 0, nb = 0;
    for (const k in a) { na += a[k] * a[k]; if (b[k]) dot += a[k] * b[k]; }
    for (const k in b) nb += b[k] * b[k];
    return na && nb ? dot / Math.sqrt(na * nb) : 0;
  }

  function vector(text) {
    const v = {};
    for (const t of tokens(text)) v[t] = (v[t] || 0) + 1;
    return v;
  }

  function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }

  // ---------- parsing ----------

  const QUESTION_START = /^\s*(?:(?:frq|question|q|problem)\s*#?\s*\d+\b|\d{1,2}\s*[.)]\s+\S|-{3,}\s*$|={3,}\s*$)/i;
  const PART_LINE = /^\s*\(?([a-hA-H]|i{1,3}|iv|v|vi{0,3})\s*[).:]\s+\S/;
  const INLINE_PART = /(?:^|\s)\(([a-h])\)\s/g;

  /** Split pasted text into separate FRQs. */
  function splitFRQs(text) {
    const lines = String(text || "").replace(/\r/g, "").split("\n");
    const blocks = [];
    let current = [];
    for (const line of lines) {
      if (QUESTION_START.test(line) && current.join("").trim()) {
        blocks.push(current.join("\n"));
        current = [];
      }
      if (/^\s*(?:-{3,}|={3,})\s*$/.test(line)) continue;
      current.push(line);
    }
    if (current.join("").trim()) blocks.push(current.join("\n"));

    // No explicit numbering: fall back to splitting on 2+ blank lines.
    if (blocks.length === 1) {
      const byBlank = blocks[0].split(/\n\s*\n\s*\n+/).filter(b => b.trim().length > 40);
      if (byBlank.length > 1) return byBlank.map(b => b.trim());
    }
    return blocks.map(b => b.trim()).filter(b => b.length > 15);
  }

  function countParts(text) {
    const lines = text.split("\n");
    let n = 0;
    const seen = new Set();
    for (const l of lines) {
      const m = l.match(PART_LINE);
      if (m && /^[a-h]$/i.test(m[1])) { seen.add(m[1].toLowerCase()); n++; }
    }
    let m;
    INLINE_PART.lastIndex = 0;
    while ((m = INLINE_PART.exec(text))) seen.add(m[1]);
    return Math.max(seen.size, n ? seen.size : 0);
  }

  function detectVerbs(text) {
    const t = normalize(text);
    const counts = {};
    for (const v of VERBS) {
      const re = new RegExp("\\b" + v + "(?:s|d|ed|ing)?\\b", "g");
      const c = (t.match(re) || []).length;
      if (c) counts[v] = c;
    }
    if (/\b(propose|suggest|recommend)\b.{0,40}\bsolution/.test(t)) counts.propose = (counts.propose || 0) + 1;
    if (/\bshow (?:your|all) work\b/.test(t)) counts.calculate = (counts.calculate || 0) + 1;
    return counts;
  }

  function detectCalc(text) {
    const t = normalize(text);
    const numbers = (t.match(/\b\d[\d,]*(?:\.\d+)?\b/g) || []).length;
    const calcWords = /\b(calculate|show your work|show all work|percent change|per capita|kwh|kilowatt|doubling time|half-life|half life|ppm|mg\/kg|how many|how much)\b/.test(t);
    return calcWords || numbers >= 4;
  }

  function detectType(text, hasCalc) {
    const t = normalize(text);
    if (/\b(hypothesis|independent variable|dependent variable|control group|controlled variable|experiment|investigation|design)\b/.test(t)) return "design";
    if (hasCalc && /\b(calculate|show your work|show all work)\b/.test(t)) return "calc";
    return "problem";
  }

  // ---------- engine ----------

  function createPredictor(kb, resources) {
    kb = kb || root.APES_KB || [];
    resources = resources || root.APES_RESOURCES || { general: [], verbTips: {}, generalTips: [], mathByUnit: {} };

    // Pre-compute keyword data for every topic.
    const topicIndex = [];
    for (const unit of kb) {
      for (const topic of unit.topics) {
        const phrases = topic.kw.map(k => normalize(k).trim()).filter(Boolean);
        const nameTokens = tokens(topic.name);
        topicIndex.push({ unit, topic, phrases, nameTokens });
      }
    }

    function getUnit(id) {
      return kb.find(u => String(u.id) === String(id));
    }

    /** Score how strongly a piece of text is about each topic. */
    function topicHits(text) {
      const norm = normalize(text);
      const toks = new Set(tokens(text));
      const hits = [];
      for (const entry of topicIndex) {
        let score = 0;
        const matched = [];
        for (const p of entry.phrases) {
          const re = new RegExp("(^|[^a-z0-9])" + p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(s|es)?(?=[^a-z0-9]|$)", "g");
          const c = (norm.match(re) || []).length;
          if (c) {
            const wordCount = p.split(" ").length;
            score += Math.min(c, 3) * (1 + 0.6 * (wordCount - 1));
            matched.push(p);
          }
        }
        // Words from the topic name only strengthen a topic that already matched a keyword.
        if (score > 0) for (const nt of entry.nameTokens) if (toks.has(nt) && nt.length > 4) score += 0.3;
        if (score > 0) hits.push({ unitId: entry.unit.id, topicId: entry.topic.id, score, matched });
      }
      return hits.sort((a, b) => b.score - a.score);
    }

    /** Analyze each FRQ the student pasted. */
    function analyze(text) {
      const blocks = splitFRQs(text);
      return blocks.map((body, i) => {
        const hits = topicHits(body);
        const unitScores = {};
        for (const h of hits) unitScores[h.unitId] = (unitScores[h.unitId] || 0) + h.score;
        const bestUnit = Object.keys(unitScores).sort((a, b) => unitScores[b] - unitScores[a])[0];
        const hasCalc = detectCalc(body);
        const firstLine = body.split("\n").find(l => l.trim()) || "";
        return {
          index: i + 1,
          text: body,
          title: firstLine.trim().slice(0, 110),
          hits,
          unitScores,
          bestUnit: bestUnit ? Number(bestUnit) : null,
          verbs: detectVerbs(body),
          parts: countParts(body),
          hasCalc,
          type: detectType(body, hasCalc),
          vec: vector(body)
        };
      });
    }

    /** Summarize the teacher's FRQ-writing style across all pasted FRQs. */
    function teacherStyle(frqs) {
      const verbTotals = {};
      let parts = 0, partsN = 0, calcN = 0;
      const typeCounts = { design: 0, problem: 0, calc: 0 };
      for (const f of frqs) {
        for (const v in f.verbs) verbTotals[v] = (verbTotals[v] || 0) + f.verbs[v];
        if (f.parts) { parts += f.parts; partsN++; }
        if (f.hasCalc) calcN++;
        typeCounts[f.type]++;
      }
      const topVerbs = Object.keys(verbTotals).sort((a, b) => verbTotals[b] - verbTotals[a]);
      return {
        verbTotals,
        topVerbs,
        avgParts: partsN ? Math.round(parts / partsN) : 4,
        calcRate: frqs.length ? calcN / frqs.length : 0.5,
        typeCounts,
        n: frqs.length
      };
    }

    /**
     * Main entry point.
     * options: { unitId, numFRQs (questions on the test), reuse (0..1: 0 = teacher
     * rotates to new topics, 1 = teacher reuses topics), extraCandidates }
     */
    function predict(text, options) {
      options = options || {};
      const unit = getUnit(options.unitId);
      if (!unit) throw new Error("Unknown unit: " + options.unitId);

      const numFRQs = clamp(Number(options.numFRQs) || 3, 1, 6);
      const reuse = options.reuse == null ? 0.6 : clamp(Number(options.reuse), 0, 1);
      const frqs = analyze(text);
      const style = teacherStyle(frqs);
      const random = rng(hashString(String(text) + "|" + unit.id + "|" + numFRQs + "|" + reuse));

      // Which pasted FRQs relate to this unit?
      const relevant = frqs.filter(f => f.unitScores[unit.id] > 0);
      const offUnit = frqs.filter(f => f.bestUnit && f.bestUnit !== unit.id);

      // Teacher signal per topic (only counting hits within this unit).
      const teacherRaw = {};
      for (const f of frqs) {
        const unitHits = f.hits.filter(h => h.unitId === unit.id);
        const total = unitHits.reduce((s, h) => s + h.score, 0) || 1;
        for (const h of unitHits) teacherRaw[h.topicId] = (teacherRaw[h.topicId] || 0) + h.score / total;
      }
      const teacherMax = Math.max(0, ...Object.values(teacherRaw));
      const hasTeacherData = teacherMax > 0;

      // Cross-unit connections: topics from other units the teacher mixes in.
      const crossRaw = {};
      for (const f of relevant) {
        for (const h of f.hits) {
          if (h.unitId !== unit.id) crossRaw[h.topicId] = (crossRaw[h.topicId] || 0) + h.score;
        }
      }

      const wSum = unit.topics.reduce((s, t) => s + t.w, 0);
      const wMax = Math.max(...unit.topics.map(t => t.w));

      // Blend weights. With no teacher data, rely on the prior entirely.
      const W = hasTeacherData
        ? { prior: 0.40, teacher: 0.60 * reuse, gap: 0.60 * (1 - reuse) * 0.55 }
        : { prior: 1, teacher: 0, gap: 0 };

      const scored = unit.topics.map(topic => {
        const prior = (topic.w + (topic.calc ? 0.25 : 0)) / (wMax + 0.25);
        const teacher = hasTeacherData ? (teacherRaw[topic.id] || 0) / teacherMax : 0;
        const gap = hasTeacherData && !teacherRaw[topic.id] ? prior : 0;
        const score = W.prior * prior + W.teacher * teacher + W.gap * gap;
        const reasons = [];
        if (topic.w >= 4) reasons.push("frequently tested on AP FRQs");
        else if (topic.w === 3) reasons.push("regularly tested on AP FRQs");
        if (teacher >= 0.5) reasons.push("heavily featured in your teacher's FRQs");
        else if (teacher > 0) reasons.push("appears in your teacher's FRQs");
        if (gap && reuse < 0.5 && topic.w >= 3) reasons.push("core topic not yet tested — likely rotation pick");
        if (topic.calc) reasons.push("has a standard calculation (" + topic.calc + ")");
        return { topic, prior, teacher, gap, score, reasons };
      });

      // Convert to probability of appearing in at least one FRQ part.
      // Each FRQ touches ~2-3 topics, so the test samples roughly numFRQs*2.5 topic slots.
      const scoreSum = scored.reduce((s, x) => s + x.score, 0) || 1;
      const slots = numFRQs * 2.5;
      for (const s of scored) {
        const share = s.score / scoreSum;
        s.probability = Math.round(clamp(1 - Math.pow(1 - share, slots), 0.03, 0.97) * 100);
      }
      scored.sort((a, b) => b.score - a.score || b.topic.w - a.topic.w);

      const predicted = buildPredictedFRQs(unit, scored, style, frqs, numFRQs, options.extraCandidates == null ? 2 : options.extraCandidates, random);
      const studyPlan = buildStudyPlan(unit, scored, style, crossRaw);

      return {
        unit,
        numFRQs,
        reuse,
        frqs,
        relevantCount: relevant.length,
        offUnit: offUnit.map(f => ({ index: f.index, unitId: f.bestUnit, title: f.title })),
        style,
        hasTeacherData,
        topics: scored,
        predicted,
        studyPlan,
        sources: buildSources(unit, scored),
        tips: buildTips(style)
      };
    }

    function pickParts(topic, style, count, random) {
      // Prefer prompts that use the teacher's favorite task verbs.
      const verbRank = {};
      style.topVerbs.forEach((v, i) => { verbRank[v] = style.topVerbs.length - i; });
      const ranked = topic.parts.map((p, i) => {
        const first = normalize(p).trim().split(" ")[0];
        const verb = VERBS.find(v => first.startsWith(v)) || "";
        return { p, i, score: (verbRank[verb] || 0) + random() * 1.5 };
      }).sort((a, b) => b.score - a.score);
      return ranked.slice(0, count).sort((a, b) => a.i - b.i).map(x => x.p);
    }

    // First part in `candidates` (topic order) matching `re`, skipping texts already used on the test.
    function borrowPart(anchor, candidates, re, used) {
      for (const c of [anchor].concat(candidates)) {
        if (!c) continue;
        const text = c.topic.parts.find(p => re.test(p) && !used.has(p));
        if (text) return { text, context: c === anchor ? null : c.topic.scenario };
      }
      return null;
    }

    function designPart(topic) {
      return "Design an experiment to investigate a factor related to " + topic.name.toLowerCase() +
        ". Identify the hypothesis, the independent variable, the dependent variable, a control, and one variable that should be held constant.";
    }

    function buildPredictedFRQs(unit, scored, style, frqs, numFRQs, extra, random) {
      const total = numFRQs + extra;
      const anchors = scored.slice(0, total);

      // Mirror the teacher's mix of FRQ types; default to the AP exam pattern.
      const typeOrder = [];
      if (style.n) {
        const tc = style.typeCounts;
        const order = Object.keys(tc).filter(k => tc[k] > 0).sort((a, b) => tc[b] - tc[a]);
        for (let i = 0; i < total; i++) typeOrder.push(order[i % order.length]);
      } else {
        const ap = ["problem", "calc", "design"];
        for (let i = 0; i < total; i++) typeOrder.push(ap[i % ap.length]);
      }

      const partsWanted = clamp(style.avgParts || 4, 3, 6);
      const letters = "abcdefgh";

      const usedParts = new Set();
      const partnerUses = {};
      return anchors.map((anchor, i) => {
        // Pair the anchor with a related topic for a multi-concept FRQ (like the AP exam),
        // preferring partners that haven't been used yet so the set covers more topics.
        const pool = scored.filter(s => s !== anchor).slice(0, 6);
        pool.sort((x, y) => (partnerUses[x.topic.id] || 0) - (partnerUses[y.topic.id] || 0) || random() - 0.5);
        const partner = pool[0] || null;
        if (partner) partnerUses[partner.topic.id] = (partnerUses[partner.topic.id] || 0) + 1;

        // The part that makes this FRQ its type (calculation, design, or solution).
        let type = typeOrder[i];
        let required = null;
        if (type === "calc") {
          required = borrowPart(anchor, [partner].concat(scored), /calculate/i, usedParts);
          if (!required) type = "problem";
        }
        if (type === "design") required = { text: designPart(anchor.topic), context: null };
        if (type === "problem") {
          required = borrowPart(anchor, [partner].concat(scored), /propose/i, usedParts) || {
            text: "Propose one solution to an environmental or human problem described in this scenario, and explain how the solution would work.",
            context: null
          };
        }

        const parts = [];
        const has = text => parts.some(p => p.text === text) || (required && required.text === text);
        const room = partsWanted - (required ? 1 : 0);
        for (const text of pickParts(anchor.topic, style, Math.max(2, room - (partner ? 1 : 0)), random)) {
          if (!has(text)) parts.push({ text, context: null });
        }
        if (partner) {
          const options = pickParts(partner.topic, style, partner.topic.parts.length, random).filter(t => !has(t) && !/propose/i.test(t));
          const extra = options.find(t => !usedParts.has(t) && !/calculate/i.test(t)) || options.find(t => !usedParts.has(t)) || options[0];
          if (extra) parts.push({ text: extra, context: partner.topic.scenario });
        }
        // Top up from the anchor topic so every FRQ has a full set of parts.
        for (const text of anchor.topic.parts) {
          if (parts.length >= room) break;
          if (!has(text)) parts.push({ text, context: null });
        }
        if (required) {
          if (type === "design") parts.unshift(required);
          else if (type === "calc") parts.splice(Math.min(1, parts.length), 0, required);
          else parts.push(required);
        }
        for (const p of parts) usedParts.add(p.text);

        // Only show a borrowed scenario once.
        const shown = new Set([anchor.topic.scenario]);
        for (const p of parts) {
          if (p.context && shown.has(p.context)) p.context = null;
          else if (p.context) shown.add(p.context);
        }

        const frqText = anchor.topic.scenario + "\n" + parts.map(p => (p.context || "") + " " + p.text).join("\n");
        let resembles = null;
        if (frqs.length) {
          const v = vector(frqText);
          const best = frqs.map(f => ({ f, sim: cosine(v, f.vec) })).sort((a, b) => b.sim - a.sim)[0];
          if (best && best.sim > 0.12) resembles = { index: best.f.index, title: best.f.title, similarity: Math.round(best.sim * 100) };
        }

        const likelihood = Math.round(clamp(anchor.probability * (i < numFRQs ? 1 : 0.8), 5, 95));
        return {
          rank: i + 1,
          isCore: i < numFRQs,
          type,
          typeLabel: FRQ_TYPES[type],
          anchor: { id: anchor.topic.id, name: anchor.topic.name },
          partner: partner ? { id: partner.topic.id, name: partner.topic.name } : null,
          scenario: anchor.topic.scenario,
          parts: parts.map((p, j) => ({ letter: letters[j], text: p.text, context: p.context })),
          likelihood,
          reasons: anchor.reasons,
          resembles
        };
      });
    }

    function buildStudyPlan(unit, scored, style, crossRaw) {
      const tiers = scored.map((s, i) => {
        let tier;
        if (s.probability >= 60 || i < 3) tier = "Must know";
        else if (s.probability >= 35) tier = "Should know";
        else tier = "Quick review";
        return {
          id: s.topic.id,
          name: s.topic.name,
          tier,
          probability: s.probability,
          concepts: s.topic.concepts,
          vocab: s.topic.kw.slice(0, 8),
          calc: s.topic.calc || null,
          reasons: s.reasons
        };
      });

      const cross = Object.keys(crossRaw).sort((a, b) => crossRaw[b] - crossRaw[a]).slice(0, 4).map(id => {
        const entry = topicIndex.find(e => e.topic.id === id);
        return { id, name: entry.topic.name, unitId: entry.unit.id };
      });

      const mustCount = tiers.filter(t => t.tier === "Must know").length;
      const schedule = [
        "Day 1: Learn the " + mustCount + " 'Must know' topics — read the concepts, then write each vocab term in a sentence.",
        "Day 2: Do the predicted FRQs (Most likely FRQs tab) under timed conditions (about 20 min each) without notes.",
        "Day 3: Grade yourself against the College Board scoring guidelines for similar past FRQs; redo any part you missed.",
        "Day 4: Drill the unit math (" + (resources.mathByUnit[unit.id] || []).slice(0, 2).join("; ") + ") and the 'Should know' topics.",
        "Night before: Skim 'Quick review' topics and re-read your corrected FRQs."
      ];
      return { tiers, math: resources.mathByUnit[unit.id] || [], cross, schedule };
    }

    function buildSources(unit, scored) {
      const q = s => encodeURIComponent(s);
      const topicLinks = scored.slice(0, 6).map(s => ({
        topic: s.topic.id + " " + s.topic.name,
        links: [
          { title: "YouTube review", url: "https://www.youtube.com/results?search_query=" + q("APES " + s.topic.id + " " + s.topic.name) },
          { title: "Khan Academy", url: "https://www.khanacademy.org/search?page_search_query=" + q(s.topic.name) },
          { title: "Past AP FRQs on this topic", url: "https://www.google.com/search?q=" + q("AP Environmental Science FRQ \"" + s.topic.name + "\" site:apcentral.collegeboard.org") }
        ]
      }));
      return { general: resources.general, topicLinks };
    }

    function buildTips(style) {
      const verbs = style.topVerbs.length ? style.topVerbs : ["identify", "describe", "explain", "propose", "calculate"];
      const verbTips = verbs.filter(v => resources.verbTips[v]).slice(0, 6).map(v => ({ verb: v, tip: resources.verbTips[v] }));
      return { verbTips, general: resources.generalTips };
    }

    return { predict, analyze, splitFRQs, topicHits, getUnit, units: kb };
  }

  const api = { createPredictor, splitFRQs, normalize, tokens, FRQ_TYPES };
  root.APESEngine = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
