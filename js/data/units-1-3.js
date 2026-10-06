/*
 * APES knowledge base — Units 1-3.
 * Topic numbering follows the College Board AP Environmental Science
 * Course and Exam Description (CED). `w` is a 1-5 estimate of how often the
 * topic shows up on AP/teacher FRQs (5 = shows up almost every year).
 */
(function (root) {
  const units = [
    {
      id: 1,
      name: "The Living World: Ecosystems",
      examWeight: "6-8%",
      bigIdea: "Energy flows and matter cycles through ecosystems.",
      topics: [
        {
          id: "1.1", name: "Introduction to Ecosystems", w: 3,
          kw: ["ecosystem", "predation", "predator", "prey", "mutualism", "commensalism", "parasitism", "symbiosis", "competition", "resource partitioning", "niche", "interspecific"],
          concepts: [
            "Species interactions: predation, parasitism, mutualism, commensalism, competition",
            "Resource partitioning (temporal, spatial, morphological) reduces competition",
            "Competitive exclusion: two species cannot occupy the exact same niche",
            "Biotic vs. abiotic factors in an ecosystem"
          ],
          scenario: "Two species of warblers feed in the same spruce trees in a northern forest, but each feeds in a different part of the tree.",
          parts: [
            "Identify the type of species interaction described in the scenario.",
            "Describe one form of resource partitioning and explain how it reduces competition between the two species.",
            "Explain how a mutualistic relationship differs from a commensal relationship, using an example of each.",
            "Predict what would happen to the prey population if the predator population were removed, and justify your prediction.",
            "Propose one way to reduce competition between a native species and a newly introduced competitor, and explain how it would work."
          ]
        },
        {
          id: "1.2", name: "Terrestrial Biomes", w: 3,
          kw: ["biome", "tundra", "taiga", "boreal", "desert", "grassland", "savanna", "tropical rainforest", "temperate deciduous", "chaparral", "shrubland", "permafrost", "climatograph"],
          concepts: [
            "Biomes are defined by average temperature and precipitation (read climatographs)",
            "Tropical rainforest: high NPP, nutrient-poor soil; tundra: permafrost, low NPP",
            "Plant/animal adaptations to each biome (e.g., succulents, deciduous leaves, fire-adapted grasses)",
            "Biome shifts as climate changes (poleward / upslope movement)"
          ],
          scenario: "A climatograph shows a location with average monthly temperatures between 20 and 28 degrees C and annual precipitation of 250 cm.",
          parts: [
            "Identify the biome represented by the climatograph and justify your answer using the data.",
            "Describe one adaptation of plants found in this biome.",
            "Explain why soils in tropical rainforests are typically nutrient-poor despite high productivity.",
            "Describe how climate change could cause the boundaries of a biome to shift.",
            "Propose one strategy to protect a biome threatened by human development, and explain how it would preserve biodiversity."
          ]
        },
        {
          id: "1.3", name: "Aquatic Biomes", w: 2,
          kw: ["aquatic", "estuary", "wetland", "coral reef", "intertidal", "salinity", "freshwater", "marine", "open ocean", "kelp", "salt marsh", "mangrove", "littoral", "photic"],
          concepts: [
            "Aquatic biomes are classified by salinity, depth, flow, temperature, and dissolved oxygen",
            "Estuaries and wetlands are highly productive and provide nursery habitat",
            "Coral reefs: mutualism between coral and zooxanthellae algae; high biodiversity",
            "Wetlands filter pollutants and reduce flooding"
          ],
          scenario: "An estuary forms where a river meets the ocean along a developed coastline.",
          parts: [
            "Describe one abiotic characteristic that distinguishes an estuary from a freshwater lake.",
            "Explain why estuaries are among the most productive ecosystems on Earth.",
            "Identify one ecosystem service provided by wetlands.",
            "Describe the mutualistic relationship between corals and zooxanthellae.",
            "Propose one action to protect a coastal estuary from pollution, and explain how it would improve water quality."
          ]
        },
        {
          id: "1.4", name: "The Carbon Cycle", w: 4,
          kw: ["carbon cycle", "carbon sink", "carbon source", "photosynthesis", "cellular respiration", "decomposition", "sedimentation", "combustion", "carbon reservoir", "carbon dioxide", "co2", "carbon"],
          concepts: [
            "Processes: photosynthesis, respiration, decomposition, combustion, sedimentation, burial",
            "Largest reservoir: sedimentary rock; ocean is a major sink",
            "Fast vs. slow parts of the cycle; burning fossil fuels moves C from slow to fast",
            "Deforestation removes a carbon sink and releases stored carbon"
          ],
          scenario: "Scientists are measuring how carbon moves between the atmosphere, forests, oceans, and fossil fuel reserves.",
          parts: [
            "Identify one natural process that removes carbon dioxide from the atmosphere.",
            "Describe how the combustion of fossil fuels alters the carbon cycle.",
            "Explain how deforestation affects the amount of carbon dioxide in the atmosphere.",
            "Identify the largest reservoir of carbon on Earth and describe how carbon enters it.",
            "Propose one solution to reduce the amount of carbon dioxide entering the atmosphere, and explain how it would work."
          ]
        },
        {
          id: "1.5", name: "The Nitrogen Cycle", w: 4,
          kw: ["nitrogen cycle", "nitrogen fixation", "nitrification", "denitrification", "ammonification", "assimilation", "ammonia", "ammonium", "nitrate", "nitrite", "legume", "rhizobium", "nitrogen"],
          concepts: [
            "Fixation (N2 to NH3) by bacteria/lightning/Haber-Bosch; nitrification (NH4+ to NO2- to NO3-)",
            "Assimilation by plants; ammonification by decomposers; denitrification returns N2",
            "Atmosphere is the largest N reservoir but N2 is unusable by most organisms",
            "Human impacts: synthetic fertilizer runoff causes eutrophication; NOx from combustion"
          ],
          scenario: "A farmer is deciding whether to plant soybeans or apply synthetic nitrogen fertilizer to a corn field.",
          parts: [
            "Describe the process of nitrogen fixation, including the organisms involved.",
            "Explain why planting legumes can reduce the need for synthetic fertilizer.",
            "Identify the step of the nitrogen cycle that returns nitrogen gas to the atmosphere.",
            "Describe one environmental consequence of excess nitrogen fertilizer entering nearby waterways.",
            "Propose one farming practice that reduces nitrogen runoff into waterways, and explain how it works."
          ]
        },
        {
          id: "1.6", name: "The Phosphorus Cycle", w: 3,
          kw: ["phosphorus cycle", "phosphorus", "phosphate", "weathering", "limiting nutrient", "guano", "uplift"],
          concepts: [
            "No atmospheric component; major reservoir is rock and sediment",
            "Weathering of rock releases phosphate slowly, so P is often a limiting nutrient",
            "Human sources: fertilizer, detergents, animal waste — lead to eutrophication",
            "Geologic uplift returns ocean sediments to land"
          ],
          scenario: "A lake that historically had clear water now experiences algal blooms each summer after a new subdivision was built nearby.",
          parts: [
            "Identify the major reservoir of phosphorus.",
            "Explain why phosphorus is often a limiting nutrient in aquatic ecosystems.",
            "Describe one human activity that adds phosphorus to aquatic ecosystems.",
            "Explain why the phosphorus cycle is much slower than the carbon or nitrogen cycles.",
            "Propose one solution to reduce phosphorus pollution in a lake, and explain how it would work."
          ]
        },
        {
          id: "1.7", name: "The Hydrologic (Water) Cycle", w: 3,
          kw: ["water cycle", "hydrologic", "evaporation", "transpiration", "evapotranspiration", "condensation", "precipitation", "infiltration", "runoff", "groundwater", "aquifer"],
          concepts: [
            "Processes: evaporation, transpiration, condensation, precipitation, infiltration, runoff",
            "Ocean is the largest reservoir; most freshwater is in ice caps and glaciers",
            "Solar energy drives the water cycle",
            "Impervious surfaces increase runoff and decrease infiltration/groundwater recharge"
          ],
          scenario: "A forested hillside is cleared and paved for a shopping center.",
          parts: [
            "Identify the process by which plants release water vapor into the atmosphere.",
            "Explain how replacing forest with pavement affects infiltration and runoff.",
            "Identify the primary source of energy that drives the hydrologic cycle.",
            "Describe one way that groundwater is recharged.",
            "Propose one method to increase groundwater recharge in an urban area, and explain how it would work."
          ]
        },
        {
          id: "1.8", name: "Primary Productivity", w: 3,
          kw: ["primary productivity", "gross primary productivity", "net primary productivity", "gpp", "npp", "productivity", "photosynthetic", "biomass production"],
          concepts: [
            "NPP = GPP - respiration (R); NPP is energy available to consumers",
            "Most productive: tropical rainforest, estuaries, wetlands, coral reefs; least: deserts, open ocean",
            "Productivity limited by light, water, temperature, nutrients",
            "Measuring productivity via light/dark bottle dissolved oxygen method"
          ],
          scenario: "Researchers measured gross primary productivity of 25,000 kcal/m2/yr and respiration of 13,000 kcal/m2/yr in a tropical forest plot.",
          parts: [
            "Calculate the net primary productivity of the forest plot. Show your work.",
            "Explain why NPP is a better measure than GPP of the energy available to primary consumers.",
            "Identify one ecosystem with low net primary productivity and explain why productivity is limited there.",
            "Describe a method scientists could use to measure primary productivity in an aquatic ecosystem.",
            "Propose one human action that could restore primary productivity in a degraded ecosystem, and explain how it would work."
          ],
          calc: "NPP = GPP - R"
        },
        {
          id: "1.9", name: "Trophic Levels", w: 3,
          kw: ["trophic level", "producer", "primary consumer", "secondary consumer", "tertiary consumer", "herbivore", "carnivore", "omnivore", "decomposer", "detritivore", "autotroph", "heterotroph"],
          concepts: [
            "Producers to primary, secondary, tertiary consumers; decomposers recycle nutrients",
            "Autotrophs vs. heterotrophs",
            "Decomposers/detritivores return nutrients to the soil",
            "Top predators are most vulnerable to biomagnification"
          ],
          scenario: "In a grassland food web, grasses are eaten by grasshoppers and rabbits, which are eaten by snakes and hawks.",
          parts: [
            "Identify the trophic level of the snake in this food web.",
            "Describe the role of decomposers in the grassland ecosystem.",
            "Explain why there are fewer organisms at higher trophic levels.",
            "Predict how a decline in the grasshopper population would affect another organism in the food web.",
            "Propose one way to reduce human impacts on top predators in a food web, and explain how it would protect them."
          ]
        },
        {
          id: "1.10", name: "Energy Flow and the 10% Rule", w: 4,
          kw: ["10% rule", "ten percent", "energy pyramid", "energy flow", "energy transfer", "kcal", "thermodynamics", "biomass pyramid", "trophic efficiency"],
          concepts: [
            "Only ~10% of energy transfers to the next trophic level; ~90% lost as heat (2nd law of thermodynamics)",
            "Energy flows (one direction), matter cycles",
            "Energy pyramids explain why food chains rarely exceed 4-5 levels",
            "Eating lower on the food chain feeds more people per unit of land"
          ],
          scenario: "Producers in a lake ecosystem capture 50,000 kcal of energy per square meter per year.",
          parts: [
            "Calculate the amount of energy available to the tertiary consumers using the 10% rule. Show your work.",
            "Explain why only about 10 percent of the energy is transferred from one trophic level to the next.",
            "Explain why a vegetarian diet can feed more people per acre than a meat-based diet.",
            "Identify the law of thermodynamics that explains the energy loss between trophic levels.",
            "Propose one change to the human food supply that would use energy more efficiently, and explain your reasoning using the 10% rule."
          ],
          calc: "Energy at next level = energy x 0.10"
        },
        {
          id: "1.11", name: "Food Chains and Food Webs", w: 3,
          kw: ["food web", "food chain", "keystone", "trophic cascade", "interconnected"],
          concepts: [
            "Food webs show multiple interconnected feeding relationships",
            "Removing a species can cause a trophic cascade (e.g., wolves in Yellowstone)",
            "Keystone species have disproportionate effects on their ecosystem",
            "Interpret arrows: they point in the direction energy flows"
          ],
          scenario: "Sea otters eat sea urchins, which graze on kelp forests along the Pacific coast.",
          parts: [
            "Describe what the arrows in a food web represent.",
            "Explain how the removal of sea otters could lead to a trophic cascade.",
            "Identify a keystone species and justify your choice.",
            "Explain why a food web gives a more complete picture of an ecosystem than a food chain.",
            "Propose one management action to prevent a trophic cascade after the loss of a keystone species, and explain how it would work."
          ]
        }
      ]
    },
    {
      id: 2,
      name: "The Living World: Biodiversity",
      examWeight: "6-8%",
      bigIdea: "Biodiversity supports ecosystem resilience and services.",
      topics: [
        {
          id: "2.1", name: "Introduction to Biodiversity", w: 3,
          kw: ["biodiversity", "species richness", "species evenness", "genetic diversity", "ecosystem diversity", "habitat diversity", "bottleneck", "simpson", "diversity index"],
          concepts: [
            "Levels: genetic, species (richness and evenness), ecosystem/habitat diversity",
            "Higher biodiversity means greater resilience to disturbance",
            "Population bottlenecks reduce genetic diversity",
            "Compare richness vs. evenness from data tables"
          ],
          scenario: "Students sampled two forest plots and recorded the number of individuals of each tree species.",
          parts: [
            "Using data from the two plots, identify which plot has greater species richness.",
            "Explain the difference between species richness and species evenness.",
            "Explain why ecosystems with higher biodiversity are generally more resilient to disturbance.",
            "Describe how a population bottleneck affects genetic diversity and the population's ability to adapt.",
            "Propose one strategy to increase the genetic diversity of a small, isolated population, and explain how it would work."
          ]
        },
        {
          id: "2.2", name: "Ecosystem Services", w: 4,
          kw: ["ecosystem service", "provisioning", "regulating", "supporting", "cultural service", "pollination", "water purification", "erosion control"],
          concepts: [
            "Four categories: provisioning, regulating, cultural, supporting",
            "Examples: pollination, water filtration, flood control, carbon storage, recreation",
            "Human activities disrupt services and have economic costs",
            "Be able to name a service AND explain how it is disrupted"
          ],
          scenario: "A county is considering draining a large wetland to build a housing development.",
          parts: [
            "Identify one regulating ecosystem service provided by the wetland.",
            "Describe one provisioning ecosystem service provided by forests.",
            "Explain how draining the wetland could have an economic cost to the community.",
            "Describe how the loss of pollinators would affect agricultural production.",
            "Propose one way to protect an ecosystem service threatened by development, and explain how it would work."
          ]
        },
        {
          id: "2.3", name: "Island Biogeography", w: 3,
          kw: ["island biogeography", "island", "habitat fragmentation", "habitat island", "distance from mainland", "colonization", "corridor"],
          concepts: [
            "Larger islands and islands closer to the mainland support more species",
            "Habitat fragments act like islands; wildlife corridors connect them",
            "Island species are prone to extinction and vulnerable to invasive species",
            "Interpret species-area graphs"
          ],
          scenario: "A highway is built through a large forest, splitting it into several smaller forest patches.",
          parts: [
            "Explain how island size affects the number of species an island can support.",
            "Describe how distance from the mainland affects the rate of colonization.",
            "Explain how habitat fragmentation is similar to the theory of island biogeography.",
            "Propose one solution to reduce the impact of habitat fragmentation on wildlife."
          ]
        },
        {
          id: "2.4", name: "Ecological Tolerance", w: 2,
          kw: ["ecological tolerance", "range of tolerance", "zone of physiological stress", "zone of intolerance", "optimal range", "tolerance"],
          concepts: [
            "Optimal range, zones of physiological stress, zones of intolerance",
            "Tolerance limits apply to temperature, pH, salinity, dissolved oxygen, etc.",
            "Organisms outside their tolerance range migrate, suffer, or die",
            "Coral bleaching is a classic example of exceeding thermal tolerance"
          ],
          scenario: "A trout population lives in a stream where water temperature is rising due to removal of streamside trees.",
          parts: [
            "Describe what is meant by an organism's range of tolerance.",
            "Explain what happens to an organism in the zone of physiological stress.",
            "Explain how rising water temperatures could affect the trout population.",
            "Identify an abiotic factor other than temperature that could limit the trout population.",
            "Propose one action to keep an aquatic habitat within the range of tolerance of its organisms, and explain how it would work."
          ]
        },
        {
          id: "2.5", name: "Natural Disruptions to Ecosystems", w: 2,
          kw: ["natural disruption", "disturbance", "wildfire", "hurricane", "volcanic eruption", "drought", "flood", "periodic", "episodic"],
          concepts: [
            "Disruptions can be periodic, episodic, or random",
            "Natural disruptions can cause migration, population decline, or new habitat",
            "Earth's climate has changed naturally over geologic time (ice cores)",
            "Some ecosystems depend on disturbance (fire-adapted pines)"
          ],
          scenario: "A hurricane destroys much of a coastal forest and floods nearby wetlands with saltwater.",
          parts: [
            "Distinguish between periodic and episodic disruptions, giving an example of each.",
            "Describe one effect of a natural disruption on wildlife populations.",
            "Explain how some ecosystems depend on periodic fire.",
            "Describe one type of evidence scientists use to determine past climate conditions.",
            "Propose one way a community could reduce the impact of a natural disruption such as wildfire or flooding, and explain how it would work."
          ]
        },
        {
          id: "2.6", name: "Adaptations", w: 2,
          kw: ["adaptation", "natural selection", "evolution", "fitness", "selective pressure", "adapt"],
          concepts: [
            "Natural selection: variation, overproduction, competition, differential survival",
            "Adaptations increase fitness in a specific environment",
            "Rapid environmental change can outpace a species' ability to adapt",
            "Generalists tend to adapt better than specialists"
          ],
          scenario: "Arctic foxes have small ears and thick fur, while desert foxes have very large ears.",
          parts: [
            "Explain how natural selection leads to adaptations in a population.",
            "Describe one adaptation of the desert fox and explain how it increases survival.",
            "Explain why rapid environmental changes can lead to extinction.",
            "Describe why species with short generation times can adapt more quickly.",
            "Propose one conservation strategy to help species adapt to rapid climate change, and explain how it would work."
          ]
        },
        {
          id: "2.7", name: "Ecological Succession", w: 3,
          kw: ["succession", "primary succession", "secondary succession", "pioneer species", "climax community", "lichen", "moss", "bare rock"],
          concepts: [
            "Primary succession starts on bare rock (lichens/moss pioneers); secondary starts with soil",
            "Pioneer species build soil; biodiversity and biomass increase over time",
            "Secondary succession is faster because soil and seeds remain",
            "Indicator of ecosystem health and recovery after disturbance"
          ],
          scenario: "An abandoned farm field is left undisturbed for 100 years.",
          parts: [
            "Identify whether this is an example of primary or secondary succession and justify your answer.",
            "Describe the role of pioneer species in primary succession.",
            "Explain why secondary succession happens faster than primary succession.",
            "Describe how biodiversity changes over the course of succession.",
            "Propose one method to speed the recovery of an ecosystem after disturbance, and explain how it would work."
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Populations",
      examWeight: "10-15%",
      bigIdea: "Populations change in response to resources, reproduction strategies, and human factors.",
      topics: [
        {
          id: "3.1", name: "Generalist and Specialist Species", w: 2,
          kw: ["generalist", "specialist", "broad niche", "narrow niche"],
          concepts: [
            "Generalists: broad niche, tolerate varied conditions (raccoons, cockroaches)",
            "Specialists: narrow niche, specific diet/habitat (pandas, koalas)",
            "Specialists are more prone to extinction when habitats change",
            "Generalists are often successful invasive species"
          ],
          scenario: "Giant pandas eat almost exclusively bamboo, while raccoons eat almost anything.",
          parts: [
            "Identify which species is a specialist and justify your answer.",
            "Explain why specialist species are more vulnerable to extinction.",
            "Explain why generalist species tend to become successful invasive species.",
            "Describe an environmental change that would favor generalists over specialists.",
            "Propose one strategy to protect a specialist species from habitat loss, and explain how it would work."
          ]
        },
        {
          id: "3.2", name: "K-Selected and r-Selected Species", w: 3,
          kw: ["k-selected", "r-selected", "k selected", "r selected", "reproductive strategy", "parental care", "many offspring"],
          concepts: [
            "r-selected: many offspring, little parental care, short lifespan, early maturity",
            "K-selected: few offspring, high parental care, long lifespan, near carrying capacity",
            "K-selected species are more vulnerable to extinction and slower to recover",
            "Invasive species are often r-selected"
          ],
          scenario: "Elephants produce one calf every 4-5 years, while mosquitoes lay hundreds of eggs at a time.",
          parts: [
            "Identify two characteristics of r-selected species.",
            "Explain why K-selected species are more susceptible to population decline from habitat loss.",
            "Explain why many invasive species are r-selected.",
            "Describe how the population of an r-selected species responds to a sudden increase in resources.",
            "Propose one way to help a declining K-selected species recover, and explain how it would work."
          ]
        },
        {
          id: "3.3", name: "Survivorship Curves", w: 3,
          kw: ["survivorship curve", "survivorship", "type i", "type ii", "type iii", "mortality"],
          concepts: [
            "Type I: high survival until old age (humans, K-selected)",
            "Type II: constant mortality (birds, some reptiles)",
            "Type III: high early mortality (fish, insects, r-selected)",
            "Survivorship curves are drawn on a log scale"
          ],
          scenario: "A graph shows the percentage of individuals surviving at each age for three different species.",
          parts: [
            "Identify the type of survivorship curve shown for oysters and describe its shape.",
            "Explain how survivorship curves relate to r- and K-selected reproductive strategies.",
            "Describe how improvements in health care have changed the human survivorship curve.",
            "Identify an organism that would exhibit a Type II survivorship curve.",
            "Propose one action to increase the survival of juveniles in a species with a Type III survivorship curve, and explain how it would work."
          ]
        },
        {
          id: "3.4", name: "Carrying Capacity", w: 3,
          kw: ["carrying capacity", "overshoot", "die-off", "dieoff", "limiting factor", "density-dependent", "density-independent"],
          concepts: [
            "Carrying capacity (K) is the max population the environment can sustain",
            "Overshoot leads to resource depletion and die-off",
            "Density-dependent factors (disease, competition) vs. density-independent (weather, fire)",
            "Human carrying capacity is debated; technology has expanded it"
          ],
          scenario: "Reindeer were introduced to St. Matthew Island with no predators. The population grew to 6,000 and then crashed to 42.",
          parts: [
            "Define carrying capacity.",
            "Explain why the reindeer population crashed after exceeding carrying capacity.",
            "Identify one density-dependent factor and one density-independent factor that could limit a population.",
            "Describe how the carrying capacity of an ecosystem can change over time.",
            "Propose one way to keep a wildlife population from overshooting its carrying capacity, and explain how it would work."
          ]
        },
        {
          id: "3.5", name: "Population Growth and Resource Availability", w: 3,
          kw: ["exponential growth", "logistic growth", "j-curve", "s-curve", "j curve", "s curve", "biotic potential", "population growth"],
          concepts: [
            "Exponential growth (J-curve) occurs with unlimited resources",
            "Logistic growth (S-curve) levels off at carrying capacity",
            "Resource availability and environmental resistance limit growth",
            "Rule of 70: doubling time = 70 / percent growth rate"
          ],
          scenario: "A population of rabbits grows rapidly after introduction to a new habitat, then levels off.",
          parts: [
            "Identify the type of growth curve shown and describe its shape.",
            "Explain what causes a population to shift from exponential growth to logistic growth.",
            "Calculate the doubling time of a population growing at 3.5 percent per year. Show your work.",
            "Describe one factor that could cause the population to exceed carrying capacity.",
            "Propose one method to limit the exponential growth of an introduced species, and explain how it would work."
          ],
          calc: "Doubling time = 70 / growth rate (%)"
        },
        {
          id: "3.6", name: "Age Structure Diagrams", w: 4,
          kw: ["age structure", "population pyramid", "age-structure", "prereproductive", "postreproductive", "reproductive age", "cohort"],
          concepts: [
            "Pyramid (wide base) = rapid growth; column = stable; inverted/narrow base = declining",
            "Read cohorts: pre-reproductive (0-14), reproductive (15-44), post-reproductive (45+)",
            "Population momentum: a large young cohort keeps growing even after TFR drops",
            "Link diagram shape to demographic transition stage"
          ],
          scenario: "Age structure diagrams are given for Nigeria, the United States, and Japan.",
          parts: [
            "Identify which country's age structure diagram indicates rapid population growth and justify your answer.",
            "Describe one economic challenge faced by a country with an age structure like Japan's.",
            "Explain the concept of population momentum.",
            "Predict how the age structure of a rapidly growing country will change as it industrializes.",
            "Propose one policy a country with a rapidly aging population could adopt, and explain how it would address the problem."
          ]
        },
        {
          id: "3.7", name: "Total Fertility Rate", w: 3,
          kw: ["total fertility rate", "tfr", "replacement level", "replacement fertility", "fertility", "infant mortality"],
          concepts: [
            "TFR = average number of children per woman in her lifetime",
            "Replacement-level fertility ~2.1 (higher in developing countries due to infant mortality)",
            "Factors lowering TFR: education of women, access to family planning, urbanization, higher age at marriage",
            "High infant mortality is associated with high TFR"
          ],
          scenario: "A developing country has a total fertility rate of 5.2 and high infant mortality.",
          parts: [
            "Define total fertility rate.",
            "Explain why replacement-level fertility is slightly higher than 2.0.",
            "Describe two factors that could lower the total fertility rate in a developing country.",
            "Explain the relationship between infant mortality and total fertility rate.",
            "Propose one policy that would reduce the total fertility rate in a developing country, and explain how it would work."
          ]
        },
        {
          id: "3.8", name: "Human Population Dynamics", w: 4,
          kw: ["birth rate", "death rate", "crude birth rate", "crude death rate", "immigration", "emigration", "growth rate", "malthus", "doubling time", "rule of 70", "human population"],
          concepts: [
            "Growth rate (%) = (CBR - CDR) / 10 when rates are per 1,000",
            "Population change = (births + immigration) - (deaths + emigration)",
            "Rule of 70 for doubling time",
            "Malthusian theory; factors affecting human carrying capacity"
          ],
          scenario: "A country has a crude birth rate of 32 per 1,000 and a crude death rate of 8 per 1,000.",
          parts: [
            "Calculate the population growth rate as a percentage. Show your work.",
            "Using your answer, calculate the doubling time of the population. Show your work.",
            "Identify one factor that has caused global death rates to decline over the past century.",
            "Describe one environmental impact of rapid human population growth.",
            "Propose one solution to reduce the environmental impact of rapid human population growth, and explain how it would work."
          ],
          calc: "Growth rate % = (CBR - CDR)/10; doubling = 70/rate"
        },
        {
          id: "3.9", name: "Demographic Transition", w: 4,
          kw: ["demographic transition", "preindustrial", "pre-industrial", "transitional", "industrial", "postindustrial", "post-industrial", "stage 1", "stage 2", "stage 3", "stage 4"],
          concepts: [
            "Stage 1 (pre-industrial): high CBR and CDR; Stage 2: CDR drops (fastest growth)",
            "Stage 3 (industrial): CBR drops; Stage 4 (post-industrial): low CBR and CDR",
            "CDR falls first due to improved sanitation, medicine, food supply",
            "Know which stage has the highest growth rate and why"
          ],
          scenario: "A graph shows birth and death rates of a country over 200 years as it develops.",
          parts: [
            "Identify the stage of the demographic transition in which population growth is highest and explain why.",
            "Describe one factor that causes death rates to fall during stage 2.",
            "Explain why birth rates decline during the industrial stage.",
            "Describe the age structure of a country in the post-industrial stage.",
            "Propose one action a stage 2 country could take to move more quickly to stage 3 of the demographic transition, and explain how it would work."
          ]
        }
      ]
    }
  ];

  root.APES_KB = (root.APES_KB || []).concat(units);
  if (typeof module !== "undefined" && module.exports) module.exports = units;
})(typeof globalThis !== "undefined" ? globalThis : this);
