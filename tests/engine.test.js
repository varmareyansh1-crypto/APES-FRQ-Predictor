const test = require("node:test");
const assert = require("node:assert");
require("../js/data/units-1-3.js");
require("../js/data/units-4-6.js");
require("../js/data/units-7-9.js");
require("../js/data/resources.js");
const { createPredictor, splitFRQs } = require("../js/engine.js");

const engine = createPredictor();

test("knowledge base covers all 9 CED units with complete topics", () => {
  assert.deepStrictEqual(engine.units.map(u => u.id), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const ids = new Set();
  for (const u of engine.units) {
    for (const t of u.topics) {
      assert.ok(t.id.startsWith(u.id + "."), t.id);
      assert.ok(!ids.has(t.id), "duplicate " + t.id);
      ids.add(t.id);
      assert.ok(t.w >= 1 && t.w <= 5, t.id);
      assert.ok(t.kw.length && t.concepts.length && t.parts.length >= 3 && t.scenario, t.id);
    }
  }
  assert.strictEqual(ids.size, 99);
});

test("splits FRQs on headings, numbers, and --- separators", () => {
  assert.strictEqual(splitFRQs("FRQ 1\nfoo bar baz qux quux\nFRQ 2\nmore text here please").length, 2);
  assert.strictEqual(splitFRQs("Explain the carbon cycle in detail.\n---\nDescribe nitrogen fixation please.").length, 2);
  assert.strictEqual(splitFRQs("").length, 0);
});

test("classifies FRQs into the right unit", () => {
  const cases = {
    1: "Describe nitrogen fixation and nitrification. Use the 10% rule to calculate energy at the tertiary consumer level.",
    3: "Using the age structure diagram, calculate the doubling time with the rule of 70 and explain the demographic transition.",
    6: "Describe how hydraulic fracturing extracts natural gas. Calculate the payback period for photovoltaic solar panels.",
    7: "Explain how NOx and VOCs form photochemical smog. Describe how a catalytic converter and scrubber reduce air pollution.",
    8: "Describe how eutrophication causes hypoxia. Explain primary and secondary sewage treatment.",
    9: "Explain how CFCs cause ozone depletion and how ocean acidification affects calcium carbonate shells."
  };
  for (const [unit, text] of Object.entries(cases)) {
    assert.strictEqual(engine.analyze(text)[0].bestUnit, Number(unit), text);
  }
});

test("teacher FRQs raise the probability of the topics she tests", () => {
  const base = engine.predict("", { unitId: 8 });
  const teacher = "FRQ 1\n(a) Define LD50.\n(b) Calculate the lethal dose for a 70 kg person if the LD50 is 5 mg/kg.\n(c) Explain the dose-response curve threshold.";
  const withData = engine.predict(teacher, { unitId: 8, reuse: 0.9 });
  const p = (r, id) => r.topics.find(t => t.topic.id === id).probability;
  assert.ok(p(withData, "8.12") > p(base, "8.12"));
  assert.strictEqual(withData.topics[0].topic.id, "8.12");
});

test("rotation setting favors untested core topics", () => {
  const teacher = "FRQ 1\n(a) Describe eutrophication and algal blooms.\n(b) Explain hypoxia and dissolved oxygen.";
  const reuse = engine.predict(teacher, { unitId: 8, reuse: 1 });
  const rotate = engine.predict(teacher, { unitId: 8, reuse: 0 });
  const p = (r, id) => r.topics.find(t => t.topic.id === id).probability;
  assert.ok(p(reuse, "8.5") > p(rotate, "8.5"));
  assert.ok(p(rotate, "8.11") > p(reuse, "8.11"));
});

test("produces complete predictions for every unit, deterministically", () => {
  for (const u of engine.units) {
    const r1 = engine.predict("Explain the effects. (a) Identify one cause.", { unitId: u.id, numFRQs: 3 });
    const r2 = engine.predict("Explain the effects. (a) Identify one cause.", { unitId: u.id, numFRQs: 3 });
    assert.deepStrictEqual(r1.predicted, r2.predicted);
    assert.strictEqual(r1.predicted.filter(p => p.isCore).length, 3);
    for (const p of r1.predicted) {
      assert.ok(p.parts.length >= 3, "unit " + u.id);
      assert.ok(p.likelihood >= 5 && p.likelihood <= 95);
      assert.ok(u.topics.some(t => t.id === p.anchor.id));
    }
    assert.ok(r1.studyPlan.tiers.some(t => t.tier === "Must know"));
    assert.ok(r1.sources.general.length && r1.sources.topicLinks.length);
  }
});

test("calculation-heavy teachers get calculation FRQs", () => {
  const teacher = "FRQ 1\n(a) Calculate NPP if GPP is 900 and R is 300. Show your work.\n(b) Calculate energy at level 3 with the 10% rule. Show your work.\nFRQ 2\n(a) Calculate the percent change. Show your work.";
  const r = engine.predict(teacher, { unitId: 1, numFRQs: 2 });
  assert.ok(r.predicted.filter(p => p.isCore).every(p => p.parts.some(x => /calculate/i.test(x.text))));
});

test("labels each predicted FRQ as math or no math", () => {
  const r = engine.predict("", { unitId: 1, numFRQs: 3 });
  for (const p of r.predicted) {
    const needsMath = p.parts.some(x => /calculate|show your work/i.test(x.text));
    assert.strictEqual(p.math.hasMath, needsMath, "FRQ " + p.rank);
  }
  assert.ok(r.predicted.some(p => p.math.hasMath));
  assert.ok(r.predicted.some(p => p.math.hasMath && p.math.kinds.length));
});

test("math outlook follows the teacher's FRQs", () => {
  const mathy = "FRQ 1\n(a) Calculate NPP. Show your work.\nFRQ 2\n(a) Calculate the energy at level 3. Show your work.\nFRQ 3\n(a) Calculate the percent change. Show your work.";
  const wordy = "FRQ 1\n(a) Describe nitrogen fixation.\nFRQ 2\n(a) Explain the carbon cycle.\nFRQ 3\n(a) Identify a keystone species.";
  const a = engine.predict(mathy, { unitId: 1, numFRQs: 2 }).mathOutlook;
  const b = engine.predict(wordy, { unitId: 1, numFRQs: 2 }).mathOutlook;
  assert.strictEqual(a.teacherWithMath, 3);
  assert.strictEqual(b.teacherWithMath, 0);
  assert.ok(a.chance > b.chance);
  assert.strictEqual(a.level, "Likely");
  assert.strictEqual(engine.predict("", { unitId: 2 }).mathOutlook.level, "Unlikely");
});

test("years and counts alone do not count as math", () => {
  const f = engine.analyze("In 1992 the cod fishery collapsed after 1950s and 1970s growth; by 2000 and 2010 it had not recovered. Explain why.")[0];
  assert.strictEqual(f.hasCalc, false);
});

test("reads a teacher's list of AP FRQ citations", () => {
  const list = [
    "1. 2022 Set 2 # 3 Coal ash and population change",
    "2. 2008 #4 TFR & Human Population Graphing",
    "3. 2000 #4 Age Pyramid",
    "4. ***HUG 2008 #3 Increase in Female Education in LDC causes",
    "5. APB 2019 #2 Competitive Exclusion Experimental Design and Graphing"
  ].join("\n");
  const r = engine.predict(list, { unitId: 3, numFRQs: 3 });
  assert.strictEqual(r.frqs.length, 5);
  assert.strictEqual(r.frqs[0].hasCalc, true, "2020+ APES Question 3 has math");
  assert.strictEqual(r.frqs[3].starred, true);
  assert.strictEqual(r.frqs[4].type, "design");
  assert.strictEqual(r.style.graphN, 2);
  assert.ok(r.topics[0].reasons.some(x => x.includes("starred")) || r.topics.some(t => t.reasons.some(x => x.includes("starred"))));
  for (const p of r.predicted.filter(p => p.type === "design")) {
    assert.ok(!r.unit.topics.find(t => t.id === p.anchor.id).noLab, "design FRQs use lab-suitable topics");
    assert.ok(p.graphing);
  }
});
