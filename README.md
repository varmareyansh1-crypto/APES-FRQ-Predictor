# APES FRQ Predictor

A study app for AP Environmental Science at CAMS. Paste Mrs. Davis's past FRQs,
pick a unit, and it predicts the FRQs most likely to be on that unit test. It also
tells you what to study and where to study it.

## How to use it

1. **Open the app.** Double-click `index.html`, or run `npm start` and go to
   <http://localhost:8000>. Nothing needs to be installed, and it works offline
   (except the study links).
2. **Pick the unit** your test covers (Units 1–9 from the College Board CED).
3. **Paste past FRQs** into the text box. Use FRQs from any unit; more is better.
   Start each question with a line like `FRQ 1`, `Question 2`, or `1.`, or put a
   `---` line between questions.
4. Set **FRQs on the test** and **Teacher style**:
   - Slide right if Mrs. Davis tends to reuse the same topics or questions.
   - Slide left if she rotates to new topics on each test.
5. Click **Predict FRQs** (or press Ctrl/Cmd + Enter).

The results have four tabs:

| Tab | What you get |
| --- | --- |
| **Most likely FRQs** | Full multi-part FRQs written in her style, ranked by likelihood. You also get backup FRQs and the reason each one was predicted. |
| **What to study** | Every topic in the unit, ranked and marked *Must know*, *Should know*, or *Quick review*. Each has key concepts and vocabulary. You also get a 4-day plan, the unit's math, and answer tips based on the task verbs she uses. |
| **Sources** | College Board past FRQs and scoring guidelines, AP Classroom, the CED, Khan Academy, Bozeman Science, and review videos. Each top topic gets its own links. |
| **Your FRQs analyzed** | For each FRQ you pasted: the unit and topics it was matched to, its FRQ type, the number of parts, and the task verbs. |

**Save to my bank** keeps your pasted FRQs in your browser, sorted by unit.
**Export** and **Import** move them to a file, so you can back them up or share
them with classmates. **Print / save as PDF** turns the prediction into a study sheet.

## Use it on your phone

The app is hosted at <https://claude.ai/artifact/FKmZoM1A8pSp548bZY6r8B>. It opens on
a worked example. Tap **Clear**, paste the FRQs, and tap **Predict FRQs**. The hosted
version can't print or download files, so **Copy backup** copies your saved FRQs
instead. Paste that backup into the text box and tap **Predict FRQs** to restore it.

To rebuild the hosted page after changing the code, run `npm run build`. That writes
`dist/apes-frq-predictor.html`, which can then be republished.

## How the prediction works

The engine (`js/engine.js`) runs entirely in the browser.

1. **Parse.** It splits the pasted text into separate FRQs. For each one it detects
   the parts (a), (b), …, the task verbs (identify, describe, explain, justify,
   calculate, propose…), whether there is a calculation, and the AP FRQ type
   (design an investigation, analyze a problem and propose a solution, or analyze
   with calculations).
2. **Map to topics.** Keyword matching against a knowledge base of all 99 CED
   topics (`js/data/`) shows which topics each FRQ tests, including topics from
   other units.
3. **Score each topic in the chosen unit** by blending three things:
   - **Prior:** how often the topic appears on AP and teacher FRQs (a 1–5 estimate
     from past AP exams).
   - **Teacher signal:** how heavily her FRQs hit the topic.
   - **Rotation gap:** core topics she hasn't tested yet.
   The *Teacher style* slider shifts weight between the teacher signal and the
   rotation gap. If you paste no FRQs, the prediction uses the AP prior alone.
4. **Estimate likelihood.** The scores become the chance each topic shows up,
   given how many FRQs are on the test.
5. **Write FRQs.** Each predicted FRQ is built around a top topic and paired with
   a related topic, the way AP FRQs mix concepts. It matches her usual number of
   parts, her favorite verbs, and her mix of FRQ types, and it never reuses the
   same calculation twice. The same input always gives the same prediction.

> These are educated predictions, not leaked questions. If you master the
> *Must know* topics and practice the predicted FRQs under timed conditions, you'll
> be ready even if her wording is different.

## Project layout

```
index.html            App UI
css/styles.css        Styles (light/dark, mobile-friendly, print)
js/app.js             UI logic, saved bank, import/export
js/engine.js          Prediction engine (works in the browser and in Node)
js/data/units-*.js    APES knowledge base: 9 units, 99 topics
js/data/resources.js  Study sources, answer tips, unit math
tests/                Engine tests (npm test)
```

## Development

```
npm test     # runs the engine tests with Node's built-in test runner
npm start    # serves the app at http://localhost:8000
npm run build  # bundles everything into dist/apes-frq-predictor.html
```

To change how often a topic is predicted, edit its `w` value in `js/data/`. To
add question styles, add more prompts to the topic's `parts` list.
