/*
 * APES knowledge base — Units 7-9. See units-1-3.js for field meanings.
 */
(function (root) {
  const units = [
    {
      id: 7,
      name: "Atmospheric Pollution",
      examWeight: "7-10%",
      bigIdea: "Air pollutants come from human and natural sources and can be reduced with technology and policy.",
      topics: [
        {
          id: "7.1", name: "Introduction to Air Pollution", w: 3,
          kw: ["air pollution", "air pollutant", "primary pollutant", "secondary pollutant", "clean air act", "criteria pollutant", "sulfur dioxide", "so2", "nitrogen oxide", "nox", "carbon monoxide", "lead", "particulate"],
          concepts: [
            "Primary pollutants are emitted directly (CO, SO2, NOx, PM); secondary form in the atmosphere (ozone, acid rain)",
            "Clean Air Act criteria pollutants: SO2, NOx, CO, PM, tropospheric O3, lead",
            "Coal combustion releases SO2, mercury, PM; vehicles release NOx and CO",
            "Natural sources: volcanoes, wildfires, lightning"
          ],
          scenario: "Air quality monitors in a large city record high levels of nitrogen oxides during rush hour.",
          parts: [
            "Distinguish between primary and secondary air pollutants, giving an example of each.",
            "Identify one criteria pollutant regulated under the Clean Air Act and its major source.",
            "Describe one human health effect of exposure to particulate matter.",
            "Identify one natural source of air pollution.",
            "Propose one regulation that would reduce emissions of a criteria air pollutant, and explain how it would work."
          ]
        },
        {
          id: "7.2", name: "Photochemical Smog", w: 4,
          kw: ["photochemical smog", "smog", "tropospheric ozone", "ground-level ozone", "ground level ozone", "volatile organic compound", "voc", "sunlight", "brown smog"],
          concepts: [
            "NOx + VOCs + sunlight produce tropospheric ozone (photochemical smog)",
            "Ozone peaks in the afternoon on hot, sunny days; NO2 peaks after morning rush hour",
            "Health effects: respiratory irritation, asthma; damages plants",
            "Reduction: fewer vehicles, catalytic converters, VOC limits"
          ],
          scenario: "A graph shows concentrations of NO, NO2, and ozone over a 24-hour period in Los Angeles.",
          parts: [
            "Identify the two primary pollutants needed to form photochemical smog.",
            "Explain why ozone concentrations peak in the afternoon.",
            "Describe one human health effect of tropospheric ozone.",
            "Propose one method to reduce photochemical smog in urban areas."
          ]
        },
        {
          id: "7.3", name: "Thermal Inversion", w: 2,
          kw: ["thermal inversion", "temperature inversion", "inversion layer", "warm air layer"],
          concepts: [
            "A warm layer of air traps cooler air (and pollutants) near the surface",
            "Common in valleys and cities surrounded by mountains",
            "Worsens smog and respiratory illness (London 1952, Donora 1948)",
            "Normally temperature decreases with altitude in the troposphere"
          ],
          scenario: "A city located in a mountain valley experiences several days of severe air pollution during calm winter weather.",
          parts: [
            "Describe the atmospheric conditions that create a thermal inversion.",
            "Explain how thermal inversions increase pollutant concentrations near the ground.",
            "Explain why cities in valleys are more likely to experience thermal inversions.",
            "Describe one human health effect associated with thermal inversion events.",
            "Propose one action a valley city could take to reduce health impacts during thermal inversions, and explain how it would work."
          ]
        },
        {
          id: "7.4", name: "Atmospheric CO2 and Particulates", w: 2,
          kw: ["particulate matter", "pm2.5", "pm10", "pm 2.5", "haze", "soot", "keeling curve"],
          concepts: [
            "PM2.5 penetrates deep into lungs; sources: combustion, construction, dust",
            "Particulates scatter/absorb sunlight, causing haze",
            "CO2 rising from fossil fuel combustion (Keeling Curve)",
            "Natural vs. anthropogenic sources"
          ],
          scenario: "Wildfire smoke drifts hundreds of miles and causes hazy skies and poor air quality.",
          parts: [
            "Explain why PM2.5 is more harmful to human health than larger particles.",
            "Identify one anthropogenic source of particulate matter.",
            "Describe how particulates affect visibility and the amount of sunlight reaching Earth's surface.",
            "Describe the trend shown by the Keeling Curve and explain its cause.",
            "Propose one way to reduce particulate matter emissions in a city, and explain how it would work."
          ]
        },
        {
          id: "7.5", name: "Indoor Air Pollutants", w: 3,
          kw: ["indoor air", "radon", "asbestos", "formaldehyde", "carbon monoxide", "mold", "sick building", "secondhand smoke"],
          concepts: [
            "Radon: from uranium decay in rock; causes lung cancer; test and ventilate",
            "Developing countries: CO and PM from cooking with wood/dung/charcoal",
            "Asbestos, formaldehyde (furniture/carpet), lead paint, mold, VOCs",
            "Remediation: ventilation, detectors, removal"
          ],
          scenario: "A family in a newly built, well-insulated home develops headaches, and a test reveals elevated radon in the basement.",
          parts: [
            "Identify the natural source of radon gas.",
            "Describe one human health effect of long-term radon exposure.",
            "Identify one indoor air pollutant common in developing countries and its source.",
            "Propose one method to reduce indoor air pollution in the home."
          ]
        },
        {
          id: "7.6", name: "Reduction of Air Pollutants", w: 4,
          kw: ["catalytic converter", "scrubber", "electrostatic precipitator", "baghouse", "vapor recovery nozzle", "fluidized bed", "emission reduction", "low sulfur"],
          concepts: [
            "Catalytic converters reduce NOx, CO, and hydrocarbons from vehicles",
            "Wet/dry scrubbers remove SO2; electrostatic precipitators and baghouse filters remove PM",
            "Vapor recovery nozzles reduce VOCs; fluidized bed combustion lowers NOx/SO2",
            "Policy: Clean Air Act, cap-and-trade, carpooling, mass transit"
          ],
          scenario: "A coal-fired power plant must reduce its emissions of sulfur dioxide and particulate matter to meet new regulations.",
          parts: [
            "Describe how a scrubber reduces sulfur dioxide emissions.",
            "Describe one technology used to remove particulate matter from smokestack emissions.",
            "Explain how a catalytic converter reduces air pollution from vehicles.",
            "Describe one policy that could reduce air pollution from vehicles.",
            "Propose one technology or policy to reduce air pollution from coal-fired power plants, and explain how it works."
          ]
        },
        {
          id: "7.7", name: "Acid Rain", w: 4,
          kw: ["acid rain", "acid deposition", "sulfuric acid", "nitric acid", "acidification", "limestone", "buffer", "ph"],
          concepts: [
            "SO2 and NOx react with water to form sulfuric and nitric acid",
            "Effects: lowers pH of lakes/soil, leaches nutrients, mobilizes aluminum, damages buildings",
            "Limestone (CaCO3) bedrock buffers acidity",
            "Clean Air Act and scrubbers have reduced acid rain in the U.S."
          ],
          scenario: "Lakes in the Adirondack Mountains downwind of Midwest coal plants have seen declines in fish populations.",
          parts: [
            "Identify one pollutant that contributes to acid deposition and its source.",
            "Explain how acid rain affects aquatic organisms.",
            "Explain why lakes on limestone bedrock are less affected by acid rain.",
            "Propose one solution to reduce acid deposition and explain how it works."
          ]
        },
        {
          id: "7.8", name: "Noise Pollution", w: 1,
          kw: ["noise pollution", "noise", "decibel", "sonar", "sound"],
          concepts: [
            "Noise causes physiological stress, hearing loss, disrupted communication",
            "Wildlife: disrupts mating calls and migration; ship noise affects whales",
            "Sources: transportation, construction, industry",
            "Mitigation: barriers, regulations, quieter technology"
          ],
          scenario: "Increasing ship traffic in a coastal area overlaps with a whale migration route.",
          parts: [
            "Describe one effect of noise pollution on wildlife.",
            "Identify one source of noise pollution in urban areas.",
            "Describe one human health effect of chronic noise exposure.",
            "Propose one method to reduce noise pollution."
          ]
        }
      ]
    },
    {
      id: 8,
      name: "Aquatic and Terrestrial Pollution",
      examWeight: "7-10%",
      bigIdea: "Pollutants affect ecosystems and human health; waste can be reduced and treated.",
      topics: [
        {
          id: "8.1", name: "Sources of Pollution", w: 2,
          kw: ["point source", "nonpoint source", "non-point source", "pipe", "outfall"],
          concepts: [
            "Point source: single identifiable source (pipe, smokestack)",
            "Nonpoint source: diffuse (agricultural and urban runoff) — harder to regulate",
            "Clean Water Act and Safe Drinking Water Act",
            "Classify sources correctly in a scenario"
          ],
          scenario: "A river receives discharge from a factory pipe and runoff from surrounding farms and suburbs.",
          parts: [
            "Distinguish between point and nonpoint source pollution, giving an example of each.",
            "Explain why nonpoint source pollution is more difficult to regulate.",
            "Identify one federal law that regulates water pollution in the United States.",
            "Propose one method to reduce nonpoint source pollution from farms."
          ]
        },
        {
          id: "8.2", name: "Human Impacts on Ecosystems", w: 3,
          kw: ["oil spill", "coral bleaching", "ocean dumping", "plastic", "microplastic", "dissolved oxygen", "dead zone", "pollution"],
          concepts: [
            "Organisms have ranges of tolerance for pollutants",
            "Oil spills: coat feathers/fur, toxic to marine life; cleanup methods",
            "Coral reefs harmed by sediment, warming, pollution",
            "Plastics/microplastics are ingested by marine organisms"
          ],
          scenario: "An offshore oil rig explosion releases millions of barrels of oil into the Gulf of Mexico.",
          parts: [
            "Describe one effect of an oil spill on marine organisms.",
            "Describe one method used to clean up oil spills.",
            "Explain how plastic pollution affects marine wildlife.",
            "Explain how increased sediment from runoff harms coral reefs.",
            "Propose one solution to reduce plastic pollution in the ocean, and explain how it would work."
          ]
        },
        {
          id: "8.3", name: "Endocrine Disruptors", w: 2,
          kw: ["endocrine disruptor", "endocrine", "hormone", "atrazine", "bpa", "bisphenol", "feminization"],
          concepts: [
            "Chemicals that mimic or block hormones (atrazine, BPA, DDT, some pharmaceuticals)",
            "Effects: reproductive abnormalities, feminization of male fish/amphibians",
            "Sources: pesticides, plastics, wastewater containing pharmaceuticals",
            "Not removed by most sewage treatment plants"
          ],
          scenario: "Biologists find male frogs with female characteristics in ponds near cornfields treated with atrazine.",
          parts: [
            "Define an endocrine disruptor.",
            "Describe one effect of endocrine disruptors on wildlife.",
            "Identify one source of endocrine-disrupting chemicals in waterways.",
            "Explain why endocrine disruptors can affect organisms at very low concentrations.",
            "Propose one way to reduce the amount of endocrine disruptors entering waterways, and explain how it would work."
          ]
        },
        {
          id: "8.4", name: "Human Impacts on Wetlands and Mangroves", w: 2,
          kw: ["mangrove", "wetland loss", "wetland", "marsh", "swamp", "storm surge"],
          concepts: [
            "Wetlands: water filtration, flood control, habitat, carbon storage",
            "Threats: draining for development/agriculture, pollution, sea level rise",
            "Mangroves protect coastlines from storm surge and erosion",
            "Mangroves are cleared for shrimp aquaculture and development"
          ],
          scenario: "Mangrove forests along a tropical coastline are being cleared for shrimp farms.",
          parts: [
            "Describe one ecosystem service provided by mangrove forests.",
            "Explain how the loss of coastal wetlands increases damage from storms.",
            "Identify one human activity that destroys wetlands.",
            "Explain how wetlands improve water quality.",
            "Propose one strategy to protect or restore coastal wetlands or mangroves, and explain how it would work."
          ]
        },
        {
          id: "8.5", name: "Eutrophication", w: 5,
          kw: ["eutrophication", "algal bloom", "algae bloom", "hypoxia", "hypoxic", "dead zone", "dissolved oxygen", "oligotrophic", "eutrophic", "cultural eutrophication", "nutrient runoff"],
          concepts: [
            "Nutrient (N, P) input -> algal bloom -> algae die -> decomposition by bacteria uses up DO -> hypoxia -> fish die-offs",
            "Sources: fertilizer runoff, sewage, CAFO waste, detergents",
            "Gulf of Mexico dead zone from Mississippi River watershed",
            "Solutions: buffer strips, reduce fertilizer, wastewater treatment, wetlands restoration"
          ],
          scenario: "Each summer a large hypoxic dead zone forms in the Gulf of Mexico near the mouth of the Mississippi River.",
          parts: [
            "Describe the sequence of events that leads from nutrient runoff to a hypoxic dead zone.",
            "Identify one source of the nutrients that cause cultural eutrophication.",
            "Explain why dissolved oxygen levels drop after an algal bloom dies off.",
            "Propose one solution to reduce eutrophication and explain how it works."
          ]
        },
        {
          id: "8.6", name: "Thermal Pollution", w: 3,
          kw: ["thermal pollution", "thermal shock", "cooling water", "warm water discharge", "water temperature"],
          concepts: [
            "Heated water from power plants/industry lowers dissolved oxygen",
            "Warm water holds less dissolved oxygen; increases metabolism and O2 demand",
            "Thermal shock can kill organisms",
            "Solutions: cooling towers, cooling ponds"
          ],
          scenario: "A nuclear power plant discharges warm water used for cooling into a nearby river.",
          parts: [
            "Explain why warmer water holds less dissolved oxygen.",
            "Describe one effect of thermal pollution on aquatic organisms.",
            "Identify one source of thermal pollution.",
            "Propose one method power plants could use to reduce thermal pollution."
          ]
        },
        {
          id: "8.7", name: "Persistent Organic Pollutants (POPs)", w: 2,
          kw: ["persistent organic pollutant", "pops", "pcb", "dioxin", "fat-soluble", "fat soluble", "stockholm convention"],
          concepts: [
            "Synthetic, carbon-based, fat-soluble, resist breakdown",
            "Travel long distances via wind/water; accumulate in Arctic",
            "Examples: DDT, PCBs, dioxins",
            "Stockholm Convention bans/restricts POPs"
          ],
          scenario: "High concentrations of PCBs are found in Inuit people living in the Arctic, far from industrial sources.",
          parts: [
            "Identify two characteristics of persistent organic pollutants.",
            "Explain how POPs can be found in regions far from where they were produced.",
            "Explain why fat-soluble pollutants accumulate in organisms.",
            "Describe one human health effect of exposure to POPs.",
            "Propose one way to reduce human exposure to persistent organic pollutants, and explain how it would work."
          ]
        },
        {
          id: "8.8", name: "Bioaccumulation and Biomagnification", w: 4,
          kw: ["bioaccumulation", "biomagnification", "mercury", "methylmercury", "ddt", "eggshell thinning", "ppm", "top predator", "bald eagle"],
          concepts: [
            "Bioaccumulation: buildup in an individual over its lifetime",
            "Biomagnification: concentration increases at each higher trophic level",
            "DDT caused eggshell thinning in raptors (bald eagle, osprey, peregrine)",
            "Mercury from coal combustion -> methylmercury in fish (limit tuna/swordfish consumption)"
          ],
          scenario: "Mercury concentrations were measured in water (0.000003 ppm), zooplankton (0.04 ppm), small fish (0.5 ppm), and largemouth bass (2.5 ppm).",
          parts: [
            "Distinguish between bioaccumulation and biomagnification.",
            "Calculate the factor by which mercury concentration increases from small fish to bass. Show your work.",
            "Identify the primary anthropogenic source of mercury in aquatic ecosystems.",
            "Explain how DDT affected populations of birds of prey.",
            "Propose one action to reduce mercury in fish consumed by humans, and explain how it would work."
          ],
          calc: "Magnification factor = higher concentration / lower concentration"
        },
        {
          id: "8.9", name: "Solid Waste Disposal", w: 4,
          kw: ["solid waste", "landfill", "sanitary landfill", "leachate", "incineration", "incinerator", "e-waste", "municipal solid waste", "open dump", "ocean dumping"],
          concepts: [
            "Sanitary landfill: clay/plastic liner, leachate collection, methane capture, daily soil cover",
            "Leachate can contaminate groundwater; landfills emit methane",
            "Incineration reduces volume, generates energy, but releases air pollutants and toxic ash",
            "E-waste contains heavy metals (lead, mercury, cadmium)"
          ],
          scenario: "A county's landfill will reach capacity in five years and officials are evaluating alternatives.",
          parts: [
            "Describe one design feature of a sanitary landfill and explain how it protects the environment.",
            "Explain how landfills contribute to climate change.",
            "Describe one advantage and one disadvantage of waste incineration.",
            "Explain why electronic waste requires special disposal.",
            "Propose one alternative to sending municipal solid waste to a landfill, and explain how it would work."
          ]
        },
        {
          id: "8.10", name: "Waste Reduction Methods", w: 3,
          kw: ["recycling", "reduce reuse recycle", "composting", "compost", "waste reduction", "source reduction", "landfill mitigation", "waste-to-energy"],
          concepts: [
            "Reduce > reuse > recycle (waste hierarchy)",
            "Composting reduces landfill volume and methane; produces soil amendment",
            "Recycling saves energy and resources but requires energy and markets",
            "Landfill methane can be captured for energy"
          ],
          scenario: "A high school produces large amounts of cafeteria food waste and single-use plastic every day.",
          parts: [
            "Explain why reducing waste is preferred over recycling.",
            "Describe one benefit of composting food waste.",
            "Describe one drawback of recycling.",
            "Propose a plan for the school to reduce the volume of waste sent to the landfill."
          ]
        },
        {
          id: "8.11", name: "Sewage Treatment", w: 4,
          kw: ["sewage treatment", "wastewater treatment", "primary treatment", "secondary treatment", "tertiary treatment", "septic", "sludge", "chlorination", "uv disinfection", "combined sewer overflow"],
          concepts: [
            "Primary: physical removal of solids (screens, settling)",
            "Secondary: biological — bacteria break down organic matter (aeration)",
            "Tertiary: chemical/ecological removal of N and P; disinfection with chlorine, UV, or ozone",
            "Combined sewer overflows during storms; sludge disposal"
          ],
          scenario: "A city's aging wastewater treatment plant only performs primary treatment before discharging into a lake.",
          parts: [
            "Describe what occurs during primary sewage treatment.",
            "Explain the role of bacteria in secondary treatment.",
            "Explain why tertiary treatment is needed to prevent eutrophication.",
            "Identify one method used to disinfect wastewater before release.",
            "Propose one way to prevent untreated sewage from entering waterways during heavy storms, and explain how it would work."
          ]
        },
        {
          id: "8.12", name: "Lethal Dose 50% (LD50)", w: 3,
          kw: ["ld50", "ld 50", "lethal dose", "toxicity", "toxic", "mg/kg"],
          concepts: [
            "LD50: dose that kills 50% of a test population",
            "Lower LD50 = more toxic",
            "Expressed in mg of substance per kg of body mass",
            "Calculate lethal dose for a given body mass"
          ],
          scenario: "A pesticide has an LD50 of 50 mg/kg in rats.",
          parts: [
            "Define LD50.",
            "Calculate the dose of the pesticide that would be lethal to 50 percent of a population of 0.25 kg rats. Show your work.",
            "Identify which of two substances is more toxic based on their LD50 values and justify your answer.",
            "Explain one limitation of using animal LD50 data to estimate toxicity in humans.",
            "Propose one way to reduce the risk of accidental poisoning from a highly toxic pesticide, and explain how it would work."
          ],
          calc: "Dose = LD50 (mg/kg) x body mass (kg)"
        },
        {
          id: "8.13", name: "Dose Response Curve", w: 3,
          kw: ["dose response", "dose-response", "threshold", "ed50", "no observable effect", "toxicology"],
          concepts: [
            "Dose-response curve: x-axis dose, y-axis % population responding",
            "Threshold dose: lowest dose with an observable effect",
            "ED50: dose producing an effect in 50% of population",
            "Read LD50/ED50 from a graph"
          ],
          scenario: "A dose-response curve shows the percentage of a test population of fish that died at different concentrations of a chemical.",
          parts: [
            "Using the graph, identify the LD50 of the chemical.",
            "Identify the threshold dose and explain its meaning.",
            "Describe the difference between ED50 and LD50.",
            "Explain why results of dose-response studies may vary among individuals.",
            "Propose one way regulators could use dose-response data to set safe exposure limits, and explain your reasoning."
          ]
        },
        {
          id: "8.14", name: "Pollution and Human Health", w: 2,
          kw: ["human health", "dysentery", "mesothelioma", "respiratory", "asthma", "lead poisoning", "arsenic", "synergism"],
          concepts: [
            "Difficult to establish cause and effect (many variables)",
            "Dysentery from untreated sewage; mesothelioma from asbestos",
            "Lead exposure (old pipes, paint) causes neurological damage — Flint, MI",
            "Synergism: combined effects greater than separate effects"
          ],
          scenario: "Residents of a city with aging lead pipes report elevated blood lead levels in children.",
          parts: [
            "Describe one human health effect of lead exposure.",
            "Explain why it is difficult to establish a cause-and-effect relationship between a pollutant and a disease.",
            "Identify the disease caused by inhaling asbestos fibers.",
            "Propose one action a city could take to reduce lead exposure in drinking water."
          ]
        },
        {
          id: "8.15", name: "Pathogens and Infectious Diseases", w: 3,
          kw: ["pathogen", "infectious disease", "malaria", "cholera", "tuberculosis", "west nile", "zika", "vector", "plague", "sars", "mers", "covid"],
          concepts: [
            "Pathogens: bacteria, viruses, parasites; vectors (mosquitoes) spread disease",
            "Climate change expands vector ranges (malaria, dengue, West Nile, Zika)",
            "Poverty, poor sanitation, and crowding increase disease (cholera, TB)",
            "Know disease name + cause + transmission"
          ],
          scenario: "As temperatures rise, mosquitoes carrying malaria are found at higher elevations in East Africa.",
          parts: [
            "Explain how climate change can increase the spread of vector-borne diseases.",
            "Identify one disease spread by contaminated water.",
            "Describe one factor that makes developing countries more vulnerable to infectious disease.",
            "Propose one method to reduce the spread of malaria."
          ]
        }
      ]
    },
    {
      id: 9,
      name: "Global Change",
      examWeight: "15-20%",
      bigIdea: "Human activities are changing Earth's climate, atmosphere, oceans, and biodiversity.",
      topics: [
        {
          id: "9.1", name: "Stratospheric Ozone Depletion", w: 3,
          kw: ["ozone depletion", "ozone hole", "stratospheric ozone", "cfc", "cfcs", "chlorofluorocarbon", "uv radiation", "ultraviolet", "chlorine"],
          concepts: [
            "Stratospheric ozone absorbs UV-B and UV-C",
            "CFCs release chlorine (UV breaks C-Cl bond); one Cl atom destroys many O3 molecules",
            "Ozone hole over Antarctica (polar stratospheric clouds)",
            "Effects: skin cancer, cataracts, crop damage, phytoplankton decline"
          ],
          scenario: "Satellite data show a large seasonal thinning of the ozone layer over Antarctica each spring.",
          parts: [
            "Identify the class of chemicals primarily responsible for stratospheric ozone depletion.",
            "Describe how chlorine atoms destroy ozone molecules.",
            "Describe one human health effect of increased UV radiation.",
            "Explain why ozone depletion is most severe over Antarctica.",
            "Propose one action individuals can take to protect themselves from increased UV radiation, and explain how it works."
          ]
        },
        {
          id: "9.2", name: "Reducing Ozone Depletion", w: 2,
          kw: ["montreal protocol", "hcfc", "hfc", "ozone-depleting", "ozone recovery"],
          concepts: [
            "Montreal Protocol (1987) phased out CFCs — most successful environmental treaty",
            "Replacements: HCFCs, HFCs (HFCs are potent greenhouse gases)",
            "Ozone layer is slowly recovering",
            "Kigali Amendment addresses HFCs"
          ],
          scenario: "Since the Montreal Protocol was signed, atmospheric CFC levels have declined.",
          parts: [
            "Identify the international agreement that phased out CFCs.",
            "Explain why the ozone layer is recovering slowly even after CFCs were banned.",
            "Describe one drawback of replacing CFCs with HFCs.",
            "Identify one product that historically contained CFCs.",
            "Propose one replacement for ozone-depleting chemicals that also limits climate impacts, and explain why it is better."
          ]
        },
        {
          id: "9.3", name: "The Greenhouse Effect", w: 4,
          kw: ["greenhouse effect", "infrared", "greenhouse gas", "global warming potential", "gwp", "longwave", "heat trapping"],
          concepts: [
            "Sunlight (short-wave) passes through; Earth re-emits infrared (long-wave) absorbed by GHGs",
            "Natural greenhouse effect keeps Earth habitable",
            "Major GHGs: water vapor, CO2, CH4, N2O, CFCs/HFCs",
            "Global warming potential: CH4 ~25x, N2O ~300x, CFCs thousands x CO2"
          ],
          scenario: "Without the natural greenhouse effect, Earth's average surface temperature would be about -18 degrees C.",
          parts: [
            "Describe how greenhouse gases trap heat in Earth's atmosphere.",
            "Identify the greenhouse gas with the highest global warming potential among CO2, CH4, and N2O.",
            "Explain why the natural greenhouse effect is necessary for life on Earth.",
            "Identify one source of methane emissions.",
            "Propose one way to reduce emissions of a greenhouse gas other than carbon dioxide, and explain how it would work."
          ]
        },
        {
          id: "9.4", name: "Increases in the Greenhouse Gases", w: 4,
          kw: ["methane", "nitrous oxide", "co2 emissions", "carbon emissions", "anthropogenic", "ice core", "rice paddies", "ruminant", "permafrost melt"],
          concepts: [
            "CO2: fossil fuels, deforestation, cement; CH4: livestock, rice paddies, landfills, natural gas leaks, permafrost",
            "N2O: fertilizer, manure, combustion",
            "Ice cores show CO2 and temperature correlation over 800,000 years",
            "Percent change calculations from CO2 data"
          ],
          scenario: "Atmospheric CO2 has risen from about 280 ppm before the Industrial Revolution to about 420 ppm today.",
          parts: [
            "Calculate the percent increase in atmospheric CO2 since pre-industrial times. Show your work.",
            "Identify one agricultural source of methane.",
            "Describe how ice cores are used to determine past atmospheric CO2 concentrations.",
            "Identify one anthropogenic source of nitrous oxide.",
            "Propose one agricultural practice that reduces methane or nitrous oxide emissions, and explain how it works."
          ],
          calc: "% change = (new - old) / old x 100"
        },
        {
          id: "9.5", name: "Global Climate Change", w: 5,
          kw: ["climate change", "global warming", "sea level rise", "sea-level rise", "glacier", "polar ice", "feedback loop", "positive feedback", "paris agreement", "kyoto", "carbon tax", "cap and trade", "carbon sequestration"],
          concepts: [
            "Effects: sea level rise (thermal expansion + melting land ice), glacier loss, extreme weather, shifting ranges",
            "Positive feedbacks: albedo loss, permafrost methane release",
            "Solutions: renewables, efficiency, carbon tax, cap-and-trade, reforestation, carbon capture",
            "Paris Agreement and international efforts"
          ],
          scenario: "Average global surface temperature has increased by more than 1 degree C since 1880.",
          parts: [
            "Describe two causes of sea level rise associated with climate change.",
            "Explain how melting permafrost creates a positive feedback loop.",
            "Describe one effect of climate change on species distribution.",
            "Propose one policy to reduce greenhouse gas emissions and explain how it would work."
          ]
        },
        {
          id: "9.6", name: "Ocean Warming", w: 3,
          kw: ["ocean warming", "coral bleaching", "zooxanthellae", "warming ocean", "marine heatwave", "thermal expansion"],
          concepts: [
            "Oceans absorb most excess heat from global warming",
            "Coral bleaching: corals expel zooxanthellae under heat stress",
            "Species migrate poleward/deeper; habitat loss",
            "Thermal expansion contributes to sea level rise"
          ],
          scenario: "Large sections of the Great Barrier Reef experienced mass bleaching during recent marine heatwaves.",
          parts: [
            "Describe the process of coral bleaching.",
            "Explain how ocean warming contributes to sea level rise.",
            "Describe one effect of ocean warming on marine species distribution.",
            "Identify one ecosystem service lost when coral reefs die.",
            "Propose one action to help coral reefs survive ocean warming, and explain how it would work."
          ]
        },
        {
          id: "9.7", name: "Ocean Acidification", w: 4,
          kw: ["ocean acidification", "carbonic acid", "calcium carbonate", "shell", "carbonate", "acidification", "pteropod"],
          concepts: [
            "CO2 + H2O -> carbonic acid; lowers ocean pH",
            "Less carbonate ion available for shell/skeleton building (calcium carbonate)",
            "Harms corals, mollusks, plankton (base of food web)",
            "Ocean pH has dropped from ~8.2 to ~8.1 (~30% increase in acidity, log scale)"
          ],
          scenario: "Oyster farmers in the Pacific Northwest report high mortality of oyster larvae.",
          parts: [
            "Describe the chemical process by which increased atmospheric CO2 lowers ocean pH.",
            "Explain how ocean acidification affects organisms that build calcium carbonate shells.",
            "Explain how a decline in shelled plankton could affect marine food webs.",
            "Explain why a decrease of 0.1 pH units is significant.",
            "Propose one solution to reduce ocean acidification, and explain how it would work."
          ]
        },
        {
          id: "9.8", name: "Invasive Species", w: 4,
          kw: ["invasive species", "invasive", "non-native", "nonnative", "exotic species", "zebra mussel", "kudzu", "cane toad", "burmese python", "asian carp", "ballast water", "emerald ash borer", "lionfish"],
          concepts: [
            "Invasives are often generalists/r-selected with no natural predators",
            "Outcompete natives, reduce biodiversity, cause economic damage",
            "Examples: zebra mussels (ballast water), kudzu, cane toads, Burmese pythons, Asian carp, lionfish",
            "Control: prevention (ballast rules), removal, biological control"
          ],
          scenario: "Zebra mussels, introduced to the Great Lakes in ship ballast water, have spread throughout the region.",
          parts: [
            "Describe one characteristic that allows invasive species to outcompete native species.",
            "Explain how zebra mussels were introduced to the Great Lakes.",
            "Describe one ecological or economic impact of an invasive species.",
            "Propose one method to control the spread of invasive species."
          ]
        },
        {
          id: "9.9", name: "Endangered Species", w: 3,
          kw: ["endangered species", "endangered", "threatened", "endangered species act", "cites", "poaching", "extinction", "wildlife refuge", "captive breeding"],
          concepts: [
            "Traits of vulnerable species: K-selected, specialists, small range, low genetic diversity",
            "Endangered Species Act (1973) and CITES",
            "Protection: habitat preservation, captive breeding, hunting bans, corridors",
            "Causes: habitat loss, poaching, invasive species, climate change"
          ],
          scenario: "The population of a large cat species has declined by 90 percent due to habitat loss and poaching.",
          parts: [
            "Describe two characteristics that make a species more vulnerable to extinction.",
            "Identify one law or treaty that protects endangered species.",
            "Describe one strategy to protect an endangered species and explain how it helps.",
            "Explain how habitat loss leads to population decline.",
            "Propose one strategy to protect an endangered species, and explain how it would help the population recover."
          ]
        },
        {
          id: "9.10", name: "Human Impacts on Biodiversity", w: 4,
          kw: ["hippco", "habitat loss", "habitat destruction", "biodiversity loss", "mass extinction", "sixth extinction", "wildlife corridor", "overharvesting", "fragmentation"],
          concepts: [
            "HIPPCO: Habitat loss, Invasive species, Population growth, Pollution, Climate change, Overexploitation",
            "Habitat loss is the #1 cause of biodiversity loss",
            "Solutions: protected areas, corridors, sustainable harvest, restoration",
            "Current extinction rate far exceeds background rate"
          ],
          scenario: "Tropical rainforests are being converted to palm oil plantations in Southeast Asia, threatening orangutans.",
          parts: [
            "Identify the leading cause of biodiversity loss worldwide.",
            "Explain how converting rainforest to palm oil plantations reduces biodiversity.",
            "Describe how wildlife corridors help maintain biodiversity in fragmented habitats.",
            "Propose one solution to reduce the loss of biodiversity and explain how it works."
          ]
        }
      ]
    }
  ];

  root.APES_KB = (root.APES_KB || []).concat(units);
  if (typeof module !== "undefined" && module.exports) module.exports = units;
})(typeof globalThis !== "undefined" ? globalThis : this);
