/*
 * Study sources and FRQ skill tips.
 * General sources apply to every unit; topic-specific links are generated
 * by the engine as search links so they never go stale.
 */
(function (root) {
  const resources = {
    general: [
      {
        title: "College Board — AP Environmental Science Past FRQs (with scoring guidelines)",
        url: "https://apcentral.collegeboard.org/courses/ap-environmental-science/exam/past-exam-questions",
        why: "Real AP FRQs and rubrics. Teachers write unit-test FRQs modeled on these — practice with the scoring guidelines open."
      },
      {
        title: "AP Classroom (Topic Questions & Progress Checks)",
        url: "https://myap.collegeboard.org/",
        why: "Unit Progress Check FRQs are often reused or adapted for unit tests. Ask Mrs. Davis which ones are unlocked."
      },
      {
        title: "AP Environmental Science Course and Exam Description (CED)",
        url: "https://apcentral.collegeboard.org/courses/ap-environmental-science",
        why: "The official list of every topic and learning objective — what's in it can be tested."
      },
      {
        title: "Khan Academy — AP/College Environmental Science",
        url: "https://www.khanacademy.org/science/ap-college-environmental-science",
        why: "Free videos and practice organized by the same 9 CED units."
      },
      {
        title: "Bozeman Science — AP Environmental Science videos",
        url: "https://www.bozemanscience.com/ap-environmental-science",
        why: "Short concept videos by an experienced AP science teacher."
      },
      {
        title: "AP Environmental Science YouTube review (Jordan Dickinson)",
        url: "https://www.youtube.com/results?search_query=Jordan+Dickinson+APES",
        why: "Topic-by-topic CED review videos with FRQ practice walkthroughs."
      }
    ],

    // Skill tips matched to the FRQ task verbs the College Board uses.
    verbTips: {
      identify: "Identify = a short, specific answer (a word or phrase). No explanation needed, but don't list several — only the first answer is scored.",
      describe: "Describe = give the relevant characteristics. One or two complete sentences with specifics, not just a term.",
      explain: "Explain = HOW or WHY. Use a cause -> effect chain: 'X happens, which causes Y, which leads to Z.'",
      justify: "Justify = back your claim with evidence from the data or stimulus. Quote the number or trend.",
      calculate: "Calculate = show the setup with units on every number, then box the final answer with units.",
      propose: "Propose a solution = name a specific solution AND explain how it reduces the problem. Vague answers ('regulate it') lose points.",
      compare: "Compare = state how both things are similar or different in the same sentence ('A has more ___ than B because...').",
      predict: "Predict = state the outcome AND give a reason (often 'because...').",
      design: "Design an investigation = state hypothesis, independent variable, dependent variable, control group, and a constant (controlled variable)."
    },

    generalTips: [
      "Answer in the order asked and label each part (a), (b)(i), etc. — graders look for the label.",
      "Never say 'pollution' alone — name the pollutant (e.g., 'NOx', 'nitrate runoff').",
      "Don't use 'it' or 'they' — name the thing. Graders can't award points for vague pronouns.",
      "If a question asks for ONE, give exactly one. Extra answers that are wrong can cancel a right one.",
      "For environmental problems, always connect to an effect on an organism, ecosystem, or human health.",
      "Calculator rules: show every step and include units. Partial credit lives in the setup.",
      "No calculator on some sections in class — practice moving decimals and scientific notation by hand."
    ],

    // Typical APES math for each unit, used in the study plan.
    mathByUnit: {
      1: ["10% rule energy transfer between trophic levels", "NPP = GPP - respiration", "Percent change"],
      2: ["Species richness / evenness from data tables", "Percent change in population or habitat area"],
      3: ["Growth rate % = (CBR - CDR) / 10", "Rule of 70 doubling time", "Population change = (B + I) - (D + E)"],
      4: ["Soil texture triangle percentages", "Rate = distance / time (plate movement)", "Percent composition"],
      5: ["Irrigation efficiency (water applied = need / efficiency)", "Ecological footprint ratios", "Unit conversions (gallons, liters, acres, hectares)"],
      6: ["kWh = W x h / 1000 and cost per kWh", "Payback period = cost / annual savings", "Half-life", "Efficiency % = useful output / input x 100"],
      7: ["Percent reduction in emissions", "Converting ppm and ppb", "Emissions per unit of energy"],
      8: ["LD50 dose = mg/kg x body mass", "Biomagnification factor", "Landfill volume and waste per capita"],
      9: ["Percent change in CO2 (ppm)", "Rate of sea level rise", "Carbon footprint / emissions totals"]
    }
  };

  root.APES_RESOURCES = resources;
  if (typeof module !== "undefined" && module.exports) module.exports = resources;
})(typeof globalThis !== "undefined" ? globalThis : this);
