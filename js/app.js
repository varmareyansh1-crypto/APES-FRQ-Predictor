/* UI wiring for the APES FRQ Predictor. */
(function () {
  "use strict";

  const engine = APESEngine.createPredictor(window.APES_KB, window.APES_RESOURCES);
  const BANK_KEY = "apesFrqBank.v1";
  const PREFS_KEY = "apesFrqPrefs.v1";

  const $ = id => document.getElementById(id);
  const els = {
    unit: $("unit"), numFRQs: $("numFRQs"), reuse: $("reuse"), reuseLabel: $("reuseLabel"),
    input: $("frqInput"), stats: $("inputStats"), status: $("status"), results: $("results"),
    summary: $("summary")
  };

  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- storage (browser-only, may be unavailable) ----------

  function readJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch (e) { return fallback; }
  }
  function writeJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
  }

  function setStatus(msg) {
    els.status.textContent = msg;
    clearTimeout(setStatus.t);
    setStatus.t = setTimeout(() => { els.status.textContent = ""; }, 5000);
  }

  // ---------- setup ----------

  for (const u of engine.units) {
    const o = document.createElement("option");
    o.value = u.id;
    o.textContent = "Unit " + u.id + ": " + u.name + " (" + u.examWeight + ")";
    els.unit.appendChild(o);
  }

  const prefs = readJSON(PREFS_KEY, {});
  if (prefs.unit) els.unit.value = prefs.unit;
  if (prefs.numFRQs) els.numFRQs.value = prefs.numFRQs;
  if (prefs.reuse != null) els.reuse.value = prefs.reuse;

  function savePrefs() {
    writeJSON(PREFS_KEY, { unit: els.unit.value, numFRQs: els.numFRQs.value, reuse: els.reuse.value });
  }

  function updateReuseLabel() {
    const v = Number(els.reuse.value);
    els.reuseLabel.textContent = v < 30 ? "Rotates to new topics" : v < 45 ? "Leans toward new topics"
      : v <= 55 ? "Balanced" : v <= 75 ? "Mostly reuses topics" : "Reuses the same questions";
  }
  updateReuseLabel();

  function updateStats() {
    const n = engine.splitFRQs(els.input.value).length;
    els.stats.textContent = n
      ? n + " FRQ" + (n === 1 ? "" : "s") + " detected."
      : "No FRQs yet — you can still predict from AP exam trends.";
  }

  // ---------- rendering ----------

  function tierClass(tier) {
    return tier === "Must know" ? "must" : tier === "Should know" ? "should" : "review";
  }

  function renderSummary(r) {
    const top3 = r.topics.slice(0, 3).map(t => esc(t.topic.id + " " + t.topic.name)).join(", ");
    let basis;
    if (!r.frqs.length) {
      basis = "No FRQs pasted, so this prediction uses AP exam topic frequencies and the CED only. Paste Mrs. Davis's FRQs for a sharper prediction.";
    } else if (!r.hasTeacherData) {
      basis = "None of the " + r.frqs.length + " pasted FRQ(s) matched Unit " + r.unit.id + " topics, so this prediction leans on AP exam trends. Her question style (" +
        r.style.avgParts + " parts, " + (r.style.topVerbs.slice(0, 3).join("/") || "mixed verbs") + ") was still applied.";
    } else {
      basis = "Based on " + r.frqs.length + " pasted FRQ(s) (" + r.relevantCount + " touch Unit " + r.unit.id +
        "), AP exam topic frequencies, and her style: about " + r.style.avgParts + " parts per FRQ, favorite verbs " +
        (r.style.topVerbs.slice(0, 3).map(v => "<b>" + esc(v) + "</b>").join(", ") || "n/a") +
        ", calculations in " + Math.round(r.style.calcRate * 100) + "% of FRQs.";
    }
    let off = "";
    if (r.offUnit.length) {
      off = "<p class='hint'>Heads up: FRQ " + r.offUnit.map(o => "#" + o.index + " (looks like Unit " + o.unitId + ")").join(", ") +
        " mostly match a different unit. Cross-unit topics still count, and every FRQ teaches the engine her style.</p>";
    }
    els.summary.innerHTML =
      "<p><b>Unit " + r.unit.id + ": " + esc(r.unit.name) + "</b> — " + esc(r.unit.bigIdea) + "</p>" +
      "<p>Top topics to expect: " + top3 + ".</p>" +
      "<p class='hint'>" + basis + "</p>" + off;
  }

  function renderPredicted(r) {
    const core = r.predicted.filter(p => p.isCore);
    const backup = r.predicted.filter(p => !p.isCore);
    const card = p => {
      const parts = p.parts.map(part =>
        "<li><span class='letter'>(" + part.letter + ")</span><span>" +
        (part.context ? "<span class='context'>" + esc(part.context) + "</span>" : "") +
        esc(part.text) + "</span></li>").join("");
      const resembles = p.resembles
        ? " Closest to your FRQ #" + p.resembles.index + " (" + p.resembles.similarity + "% similar)."
        : "";
      return "<article class='frq" + (p.isCore ? "" : " backup") + "'>" +
        "<div class='frq-head'><div><h3>Predicted FRQ " + p.rank + ": " + esc(p.anchor.name) + "</h3>" +
        "<p class='meta'>" + esc(p.typeLabel) + " · Topic " + esc(p.anchor.id) +
        (p.partner ? " + " + esc(p.partner.id) + " " + esc(p.partner.name) : "") + "</p></div>" +
        "<span class='pill'>" + p.likelihood + "% likely</span></div>" +
        "<p class='scenario'>" + esc(p.scenario) + "</p><ol>" + parts + "</ol>" +
        "<p class='why'>Why: " + esc(p.reasons.join("; ") || "core CED topic") + "." + esc(resembles) + "</p></article>";
    };
    $("tab-predicted").innerHTML =
      "<p class='hint'>Practice these timed (~20 min each). Likelihood = chance this topic shows up on the test, not that the wording will match exactly.</p>" +
      core.map(card).join("") +
      (backup.length ? "<h3>Backup predictions (also worth practicing)</h3>" + backup.map(card).join("") : "");
  }

  function renderStudy(r) {
    const plan = r.studyPlan;
    const topics = plan.tiers.map(t =>
      "<div class='topic'><div class='topic-head'><h4>" + esc(t.id + " " + t.name) + "</h4>" +
      "<span><span class='pill " + tierClass(t.tier) + "'>" + esc(t.tier) + "</span> <b>" + t.probability + "%</b></span></div>" +
      "<div class='bar' aria-hidden='true'><span style='width:" + t.probability + "%'></span></div>" +
      "<ul>" + t.concepts.map(c => "<li>" + esc(c) + "</li>").join("") +
      (t.calc ? "<li><b>Math:</b> " + esc(t.calc) + "</li>" : "") + "</ul>" +
      "<div class='vocab'>" + t.vocab.map(v => "<span>" + esc(v) + "</span>").join("") + "</div></div>").join("");

    const cross = plan.cross.length
      ? "<div class='box'><h3>Cross-unit links she uses</h3><ul>" +
        plan.cross.map(c => "<li>" + esc(c.id + " " + c.name) + " (Unit " + c.unitId + ")</li>").join("") + "</ul></div>"
      : "";

    $("tab-study").innerHTML =
      "<div class='grid2'>" +
      "<div class='box'><h3>4-day study plan</h3><ol>" + plan.schedule.map(s => "<li>" + esc(s) + "</li>").join("") + "</ol></div>" +
      "<div class='box'><h3>Math to practice</h3><ul>" + plan.math.map(m => "<li>" + esc(m) + "</li>").join("") + "</ul></div>" +
      "<div class='box'><h3>How to answer (based on her verbs)</h3><ul>" +
      r.tips.verbTips.map(t => "<li><b>" + esc(t.verb) + ":</b> " + esc(t.tip.replace(/^[A-Za-z ]+= /, "")) + "</li>").join("") + "</ul></div>" +
      cross + "</div>" +
      "<h3>Topics ranked by likelihood</h3>" + topics +
      "<div class='box'><h3>FRQ scoring tips</h3><ul>" + r.tips.general.map(t => "<li>" + esc(t) + "</li>").join("") + "</ul></div>";
  }

  function renderSources(r) {
    const link = l => "<a href='" + esc(l.url) + "' target='_blank' rel='noopener noreferrer'>" + esc(l.title) + "</a>";
    $("tab-sources").innerHTML =
      "<div class='box sources'><h3>Best overall sources</h3><ul>" +
      r.sources.general.map(s => "<li>" + link(s) + "<span class='why-src'>" + esc(s.why) + "</span></li>").join("") + "</ul></div>" +
      "<div class='box sources' style='margin-top:16px'><h3>For your top topics</h3><ul>" +
      r.sources.topicLinks.map(t => "<li><b>" + esc(t.topic) + "</b><div class='link-row'>" + t.links.map(link).join(" · ") + "</div></li>").join("") +
      "</ul></div>" +
      "<p class='hint'>Also use your class notes, textbook chapter for Unit " + r.unit.id + ", and any review sheets Mrs. Davis posts — teachers often build FRQs from their own slides.</p>";
  }

  function renderAnalysis(r) {
    if (!r.frqs.length) {
      $("tab-analysis").innerHTML = "<p>No FRQs pasted yet. Paste past FRQs above to see which topics, verbs, and question types she uses.</p>";
      return;
    }
    const unitName = id => { const u = engine.getUnit(id); return u ? "Unit " + u.id : "—"; };
    const rows = r.frqs.map(f => {
      const topics = f.hits.slice(0, 3).map(h => h.topicId + " " + engine.getUnit(h.unitId).topics.find(t => t.id === h.topicId).name).join("; ");
      return "<tr><td>#" + f.index + "</td><td>" + esc(f.title) + "</td><td>" + esc(unitName(f.bestUnit)) + "</td><td>" +
        esc(topics || "no match") + "</td><td>" + esc(APESEngine.FRQ_TYPES[f.type]) + "</td><td>" + (f.parts || "?") + "</td><td>" +
        esc(Object.keys(f.verbs).join(", ")) + "</td></tr>";
    }).join("");
    $("tab-analysis").innerHTML =
      "<div class='table-scroll'><table><thead><tr><th>#</th><th>Starts with</th><th>Unit</th><th>Topics detected</th><th>Type</th><th>Parts</th><th>Verbs</th></tr></thead>" +
      "<tbody>" + rows + "</tbody></table></div>" +
      "<p class='hint'>If a question is split wrong, put a line with <code>---</code> between FRQs and predict again.</p>";
  }

  function showTab(name) {
    document.querySelectorAll(".tabs button").forEach(b => b.setAttribute("aria-selected", String(b.dataset.tab === name)));
    document.querySelectorAll(".tab-panel").forEach(p => { p.hidden = p.id !== "tab-" + name; });
  }

  // ---------- actions ----------

  // A backup pasted into the text box restores the saved bank.
  function restoreBackup(text) {
    let data = null;
    try { data = JSON.parse(text); } catch (err) { return false; }
    if (!data || data.app !== "apes-frq-predictor" || !data.bank) return false;
    const bank = Object.assign(readJSON(BANK_KEY, {}), data.bank);
    writeJSON(BANK_KEY, bank);
    els.input.value = bank[els.unit.value] || "";
    updateStats();
    setStatus("Restored saved FRQs for units: " + Object.keys(data.bank).join(", ") + ".");
    return true;
  }

  function runPrediction(scroll) {
    if (restoreBackup(els.input.value.trim())) return;
    savePrefs();
    const r = engine.predict(els.input.value, {
      unitId: Number(els.unit.value),
      numFRQs: Number(els.numFRQs.value),
      reuse: Number(els.reuse.value) / 100
    });
    renderSummary(r);
    renderPredicted(r);
    renderStudy(r);
    renderSources(r);
    renderAnalysis(r);
    els.results.hidden = false;
    showTab("predicted");
    if (scroll !== false) els.results.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const SAMPLE = [
    "FRQ 1",
    "A farmer in the Midwest applies synthetic nitrogen fertilizer to a corn field next to a lake. Each summer, algal blooms appear in the lake and fish die-offs occur.",
    "(a) Describe the process of nitrogen fixation.",
    "(b) Explain how excess nitrate from the fertilizer leads to eutrophication and low dissolved oxygen.",
    "(c) Identify one way the farmer could reduce nutrient runoff.",
    "(d) Propose a solution the town could use to reduce algal blooms and explain how it works.",
    "---",
    "FRQ 2",
    "Producers in a grassland ecosystem capture 20,000 kcal/m2/yr. Grasshoppers eat the grass and are eaten by mice, which are eaten by snakes.",
    "(a) Calculate the energy available to the snakes using the 10% rule. Show your work.",
    "(b) Explain why energy decreases at each trophic level.",
    "(c) Identify the trophic level of the mice.",
    "(d) Describe how the removal of snakes could cause a trophic cascade.",
    "---",
    "FRQ 3",
    "Researchers measured GPP of 15,000 kcal/m2/yr and respiration of 6,000 kcal/m2/yr in a wetland.",
    "(a) Calculate the net primary productivity. Show your work.",
    "(b) Explain why wetlands have high primary productivity.",
    "(c) Describe how deforestation affects the carbon cycle.",
    "(d) Identify one carbon sink."
  ].join("\n");

  function bankFor(unit) {
    return readJSON(BANK_KEY, {})[unit] || "";
  }

  $("predictBtn").addEventListener("click", () => runPrediction());
  $("sampleBtn").addEventListener("click", () => {
    els.input.value = SAMPLE;
    els.unit.value = "1";
    updateStats();
    setStatus("Loaded an example set of Unit 1 FRQs. Replace it with Mrs. Davis's real FRQs for real predictions.");
  });
  $("saveBtn").addEventListener("click", () => {
    if (!els.input.value.trim()) return setStatus("Nothing to save yet.");
    const bank = readJSON(BANK_KEY, {});
    bank[els.unit.value] = els.input.value;
    setStatus(writeJSON(BANK_KEY, bank)
      ? "Saved in this browser under Unit " + els.unit.value + ". Use Export to back it up."
      : "Couldn't save (browser storage is blocked). Use Export instead.");
  });
  $("loadBtn").addEventListener("click", () => {
    const saved = bankFor(els.unit.value);
    if (!saved) return setStatus("No saved FRQs for Unit " + els.unit.value + " yet.");
    els.input.value = saved;
    updateStats();
    setStatus("Loaded your saved Unit " + els.unit.value + " FRQs.");
  });
  // The hosted (embedded) version can't download files, so Export copies the bank instead.
  const EMBEDDED = window.APES_EMBEDDED === true;
  if (EMBEDDED) {
    $("printBtn").hidden = true;
    $("exportBtn").textContent = "Copy backup";
    $("exportBtn").title = "Copy every saved FRQ so you can paste it somewhere safe";
  }

  $("exportBtn").addEventListener("click", () => {
    const bank = readJSON(BANK_KEY, {});
    if (els.input.value.trim()) bank[els.unit.value] = els.input.value;
    if (EMBEDDED) {
      const json = JSON.stringify({ app: "apes-frq-predictor", version: 1, bank });
      const fallback = () => {
        els.input.value = json;
        els.input.select();
        updateStats();
        setStatus("Copying was blocked, so the backup is in the text box. Copy it from there.");
      };
      try {
        navigator.clipboard.writeText(json).then(() => setStatus("Backup copied. Paste it into Notes or an email to keep it."), fallback);
      } catch (err) { fallback(); }
      return;
    }
    const blob = new Blob([JSON.stringify({ app: "apes-frq-predictor", version: 1, bank }, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "apes-frq-bank.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    setStatus("Exported your FRQ bank.");
  });
  $("importFile").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    file.text().then(text => {
      let data = null;
      try { data = JSON.parse(text); } catch (err) { /* plain text file */ }
      if (data && data.bank) {
        const bank = Object.assign(readJSON(BANK_KEY, {}), data.bank);
        writeJSON(BANK_KEY, bank);
        els.input.value = bank[els.unit.value] || els.input.value;
        setStatus("Imported FRQs for units: " + Object.keys(data.bank).join(", ") + ".");
      } else {
        els.input.value = text;
        setStatus("Loaded " + file.name + " into the text box.");
      }
      updateStats();
      e.target.value = "";
    });
  });
  $("clearBtn").addEventListener("click", () => { els.input.value = ""; updateStats(); els.results.hidden = true; });
  $("printBtn").addEventListener("click", () => window.print());

  els.reuse.addEventListener("input", updateReuseLabel);
  els.input.addEventListener("input", updateStats);
  els.unit.addEventListener("change", () => { savePrefs(); if (!els.results.hidden) runPrediction(); });
  els.numFRQs.addEventListener("change", () => { savePrefs(); if (!els.results.hidden) runPrediction(); });
  els.reuse.addEventListener("change", () => { savePrefs(); if (!els.results.hidden) runPrediction(); });
  document.querySelectorAll(".tabs button").forEach(b => b.addEventListener("click", () => showTab(b.dataset.tab)));
  els.input.addEventListener("keydown", e => { if ((e.ctrlKey || e.metaKey) && e.key === "Enter") runPrediction(); });

  updateStats();

  // The hosted version opens on a worked example so the first screen shows what the app does.
  if (EMBEDDED && !els.input.value.trim()) {
    const saved = bankFor(els.unit.value);
    els.input.value = saved || SAMPLE;
    if (!saved) els.unit.value = "1";
    updateStats();
    runPrediction(false);
    setStatus(saved ? "Loaded your saved Unit " + els.unit.value + " FRQs." : "Showing an example. Tap Clear and paste Mrs. Davis's FRQs to make your own prediction.");
    clearTimeout(setStatus.t);
  }
})();
