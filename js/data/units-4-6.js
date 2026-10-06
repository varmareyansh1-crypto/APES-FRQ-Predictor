/*
 * APES knowledge base — Units 4-6. See units-1-3.js for field meanings.
 */
(function (root) {
  const units = [
    {
      id: 4,
      name: "Earth Systems and Resources",
      examWeight: "10-15%",
      bigIdea: "Earth's geology, soil, atmosphere, and climate shape where life and resources exist.",
      topics: [
        {
          id: "4.1", name: "Plate Tectonics", w: 3,
          kw: ["plate tectonics", "plate boundary", "convergent", "divergent", "transform", "subduction", "earthquake", "volcano", "ring of fire", "hot spot", "mid-ocean ridge", "tectonic"],
          concepts: [
            "Convergent (subduction, mountains, volcanoes), divergent (ridges, rift valleys), transform (earthquakes)",
            "Ring of Fire around the Pacific; hot spots (Hawaii)",
            "Read maps of plate boundaries and predict geologic features",
            "Tectonics also creates geothermal energy resources and mineral deposits"
          ],
          scenario: "A map shows the boundary between the Nazca Plate and the South American Plate along the west coast of South America.",
          parts: [
            "Identify the type of plate boundary shown and justify your answer.",
            "Describe one geologic feature that forms at a convergent boundary.",
            "Explain why earthquakes are common along transform boundaries.",
            "Describe how plate tectonics can influence the location of geothermal energy resources.",
            "Propose one way a city located near a plate boundary could reduce the risk to people from earthquakes or volcanoes, and explain how it would work."
          ]
        },
        {
          id: "4.2", name: "Soil Formation and Erosion", w: 4,
          kw: ["soil formation", "soil horizon", "o horizon", "a horizon", "b horizon", "c horizon", "topsoil", "parent material", "humus", "erosion", "weathering", "leaching"],
          concepts: [
            "Horizons: O (organic/humus), A (topsoil), E (leaching), B (subsoil), C (parent material), R (bedrock)",
            "Soil formation: weathering of parent material + organic matter; very slow",
            "Erosion by wind and water; worsened by tilling, overgrazing, deforestation",
            "Conservation: contour plowing, terracing, windbreaks, no-till, cover crops"
          ],
          scenario: "A farmer notices that topsoil is being washed away from a sloped field after heavy rains.",
          parts: [
            "Identify the soil horizon that contains the most organic matter.",
            "Describe one natural process involved in soil formation.",
            "Explain how tilling increases soil erosion.",
            "Propose one agricultural practice that would reduce soil erosion on the sloped field and explain how it works."
          ]
        },
        {
          id: "4.3", name: "Soil Composition and Properties", w: 4,
          kw: ["soil texture", "soil triangle", "sand", "silt", "clay", "loam", "porosity", "permeability", "water holding capacity", "soil fertility", "soil ph"],
          concepts: [
            "Texture triangle: % sand, silt, clay (loam is ideal for agriculture)",
            "Sand: high permeability, low water-holding; clay: low permeability, high water-holding",
            "Soil fertility depends on organic matter, nutrients, pH, CEC",
            "Lab: measure permeability/porosity, percolation rate"
          ],
          scenario: "A soil sample is found to contain 40 percent sand, 40 percent silt, and 20 percent clay.",
          parts: [
            "Using the soil texture triangle, identify the soil type of the sample.",
            "Explain why sandy soils have low water-holding capacity.",
            "Describe one characteristic that makes loam ideal for growing crops.",
            "Design a simple experiment to compare the permeability of two soil samples. Identify the independent and dependent variables.",
            "Propose one way a farmer could improve the water-holding capacity of a sandy soil, and explain how it would work."
          ]
        },
        {
          id: "4.4", name: "Earth's Atmosphere", w: 3,
          kw: ["atmosphere", "troposphere", "stratosphere", "mesosphere", "thermosphere", "exosphere", "atmospheric layer", "atmospheric composition"],
          concepts: [
            "Composition: ~78% N2, 21% O2, ~0.9% Ar, ~0.04% CO2",
            "Troposphere: weather, temperature decreases with altitude",
            "Stratosphere: ozone layer, temperature increases with altitude",
            "Layers defined by temperature gradient"
          ],
          scenario: "A graph shows how temperature changes with altitude through Earth's atmosphere.",
          parts: [
            "Identify the most abundant gas in Earth's atmosphere.",
            "Identify the layer of the atmosphere where weather occurs.",
            "Explain why temperature increases with altitude in the stratosphere.",
            "Describe the importance of the ozone layer to life on Earth.",
            "Propose one action to protect the composition of the atmosphere from human activity, and explain how it would work."
          ]
        },
        {
          id: "4.5", name: "Global Wind Patterns", w: 2,
          kw: ["wind pattern", "coriolis", "hadley cell", "trade winds", "westerlies", "jet stream", "convection cell", "atmospheric circulation"],
          concepts: [
            "Uneven solar heating + Earth's rotation (Coriolis effect) drive global winds",
            "Hadley cells: rising air at equator (rain), sinking at 30 degrees (deserts)",
            "Trade winds, westerlies, polar easterlies",
            "Explains distribution of rainforests and deserts"
          ],
          scenario: "Most of the world's large deserts are located near 30 degrees N and 30 degrees S latitude.",
          parts: [
            "Explain why air rises at the equator.",
            "Explain why many deserts are located near 30 degrees latitude.",
            "Describe the Coriolis effect and its impact on global wind patterns.",
            "Identify the prevailing wind direction in the mid-latitudes of the Northern Hemisphere.",
            "Propose one way global wind patterns could be considered when siting a wind farm, and explain your reasoning."
          ]
        },
        {
          id: "4.6", name: "Watersheds", w: 3,
          kw: ["watershed", "drainage basin", "riparian", "headwaters", "river basin", "stream"],
          concepts: [
            "A watershed is all land that drains into a particular body of water",
            "Characteristics: area, slope, soil, vegetation",
            "Human activities upstream (agriculture, development) affect water quality downstream",
            "Riparian buffers protect stream water quality"
          ],
          scenario: "A city's drinking water comes from a reservoir located in a forested watershed that is being considered for logging.",
          parts: [
            "Define a watershed.",
            "Describe one human activity in a watershed that could reduce water quality downstream.",
            "Explain how vegetation within a watershed affects the amount of runoff.",
            "Propose a strategy to protect water quality in the watershed."
          ]
        },
        {
          id: "4.7", name: "Solar Radiation and Earth's Seasons", w: 2,
          kw: ["solar radiation", "insolation", "seasons", "axial tilt", "albedo", "angle of incidence", "equinox", "solstice"],
          concepts: [
            "Seasons are caused by Earth's 23.5 degree axial tilt, not distance from the sun",
            "Insolation is greatest at the equator (most direct angle)",
            "Albedo: reflectivity; ice/snow high, dark surfaces low",
            "Albedo feedback: melting ice lowers albedo and amplifies warming"
          ],
          scenario: "Arctic sea ice has been decreasing in extent over the past four decades.",
          parts: [
            "Explain what causes Earth's seasons.",
            "Explain why the equator receives more solar radiation per unit area than the poles.",
            "Define albedo and identify a surface with high albedo.",
            "Explain how melting sea ice creates a positive feedback loop that increases warming.",
            "Propose one way to reduce the urban heat island effect by changing surface albedo, and explain how it would work."
          ]
        },
        {
          id: "4.8", name: "Earth's Geography and Climate", w: 2,
          kw: ["rain shadow", "orographic", "windward", "leeward", "mountain", "geography", "climate", "ocean current"],
          concepts: [
            "Rain shadow effect: windward side wet, leeward side dry",
            "Proximity to oceans moderates temperature",
            "Ocean currents redistribute heat (Gulf Stream)",
            "Elevation affects temperature and precipitation"
          ],
          scenario: "The western slopes of the Sierra Nevada receive heavy precipitation while the eastern side is desert.",
          parts: [
            "Explain the rain shadow effect.",
            "Identify which side of the mountain range is the leeward side.",
            "Describe how ocean currents influence climate in coastal regions.",
            "Explain why coastal areas generally have milder temperatures than inland areas.",
            "Propose one water-management strategy for a community located in a rain shadow, and explain how it would work."
          ]
        },
        {
          id: "4.9", name: "El Nino and La Nina", w: 2,
          kw: ["el nino", "la nina", "enso", "upwelling", "southern oscillation", "el niño", "la niña", "walker circulation"],
          concepts: [
            "El Nino: weakened trade winds, warm water shifts east, reduced upwelling off South America",
            "La Nina: stronger trade winds, cooler eastern Pacific",
            "Reduced upwelling lowers nutrients and fish populations (anchovy fishery)",
            "Global effects on precipitation and storms"
          ],
          scenario: "Fishermen off the coast of Peru notice a dramatic drop in anchovy catch during a warm year.",
          parts: [
            "Describe the changes in trade winds that occur during an El Nino event.",
            "Explain how El Nino reduces fish populations off the coast of Peru.",
            "Describe one effect of El Nino on weather in the southern United States.",
            "Compare ocean conditions during La Nina with those during El Nino.",
            "Propose one way fishing communities could reduce the economic impact of El Nino events, and explain how it would work."
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Land and Water Use",
      examWeight: "10-15%",
      bigIdea: "Human land and water use has consequences that sustainable practices can reduce.",
      topics: [
        {
          id: "5.1", name: "The Tragedy of the Commons", w: 3,
          kw: ["tragedy of the commons", "commons", "common resource", "shared resource", "overexploitation", "overgrazing", "garrett hardin"],
          concepts: [
            "Individuals acting in self-interest deplete shared resources",
            "Examples: overfishing, overgrazing, air/water pollution, groundwater depletion",
            "Solutions: regulation, quotas, privatization, permits",
            "Free-rider problem"
          ],
          scenario: "Several ranchers graze cattle on a shared public pasture with no limits on herd size.",
          parts: [
            "Explain how this scenario is an example of the tragedy of the commons.",
            "Identify another example of the tragedy of the commons.",
            "Propose one solution to the tragedy of the commons and explain how it works.",
            "Describe one environmental consequence of overgrazing."
          ]
        },
        {
          id: "5.2", name: "Clearcutting", w: 3,
          kw: ["clearcutting", "clear-cutting", "clearcut", "deforestation", "logging", "timber", "slash and burn"],
          concepts: [
            "Clearcutting is economical but causes erosion, habitat loss, increased runoff and stream temperature",
            "Releases stored carbon; reduces carbon sequestration",
            "Alternatives: selective cutting, shelterwood, strip cutting",
            "Effects on soil nutrients and stream sedimentation"
          ],
          scenario: "A timber company plans to clearcut a 500-hectare forest on a hillside next to a trout stream.",
          parts: [
            "Describe one economic benefit of clearcutting.",
            "Explain how clearcutting could affect water quality in the nearby stream.",
            "Describe how clearcutting contributes to climate change.",
            "Propose an alternative forestry practice and explain how it reduces environmental impact."
          ]
        },
        {
          id: "5.3", name: "The Green Revolution", w: 3,
          kw: ["green revolution", "high-yield", "high yield", "monoculture", "mechanization", "gmo", "genetically modified", "synthetic fertilizer"],
          concepts: [
            "Mechanization, high-yield varieties, fertilizer, irrigation, pesticides increased yields",
            "GMOs: pros (yield, drought/pest resistance) and cons (loss of genetic diversity, resistance)",
            "Monocultures reduce biodiversity and increase vulnerability to pests",
            "Increased fossil fuel dependence in agriculture"
          ],
          scenario: "Between 1950 and 1990, global grain production nearly tripled while farmland area increased only slightly.",
          parts: [
            "Identify two practices of the Green Revolution that increased crop yields.",
            "Explain one environmental consequence of growing crops in monocultures.",
            "Describe one benefit and one drawback of genetically modified crops.",
            "Explain how the Green Revolution increased agriculture's dependence on fossil fuels.",
            "Propose one practice that keeps Green Revolution yields high while reducing environmental harm, and explain how it works."
          ]
        },
        {
          id: "5.4", name: "Impacts of Agricultural Practices", w: 4,
          kw: ["agricultural practice", "tilling", "slash-and-burn", "fertilizer", "salinization", "desertification", "soil degradation", "tillage"],
          concepts: [
            "Tilling increases erosion and loss of organic matter",
            "Slash-and-burn releases CO2 and depletes soil nutrients",
            "Synthetic fertilizer runoff causes eutrophication",
            "Desertification from overgrazing, overcultivation, drought"
          ],
          scenario: "Farmers in a semi-arid region have tilled and irrigated land intensively for decades and yields are now falling.",
          parts: [
            "Describe one environmental impact of slash-and-burn agriculture.",
            "Explain how excessive use of synthetic fertilizers affects aquatic ecosystems.",
            "Describe one cause of desertification.",
            "Compare organic fertilizer with synthetic fertilizer, describing one advantage of each.",
            "Propose one way to reduce soil degradation on farmland, and explain how it would work."
          ]
        },
        {
          id: "5.5", name: "Irrigation Methods", w: 3,
          kw: ["irrigation", "drip irrigation", "flood irrigation", "furrow irrigation", "spray irrigation", "salinization", "waterlogging", "center pivot"],
          concepts: [
            "Drip (~95% efficient), spray (~75-95%), furrow (~65%), flood (~80% but waterlogging)",
            "Salinization: salts left behind as irrigation water evaporates",
            "Waterlogging raises water table and suffocates roots",
            "Agriculture is the largest global user of freshwater"
          ],
          scenario: "A farm uses furrow irrigation in a hot, dry climate and is experiencing declining yields and white crust on the soil.",
          parts: [
            "Identify the most efficient irrigation method and explain why it uses less water.",
            "Explain how irrigation can lead to soil salinization.",
            "Describe one disadvantage of flood irrigation.",
            "Calculate the volume of water saved per year if the farm switches from furrow (65% efficient) to drip (95% efficient) irrigation to deliver 2,000,000 liters to crops. Show your work.",
            "Propose one way to reduce soil salinization from irrigation, and explain how it would work."
          ],
          calc: "Water applied = water needed / efficiency"
        },
        {
          id: "5.6", name: "Pest Control Methods", w: 3,
          kw: ["pesticide", "pest control", "herbicide", "insecticide", "pesticide resistance", "pesticide treadmill", "ddt", "neonicotinoid"],
          concepts: [
            "Pesticides increase yields but kill non-target species and pollinators",
            "Pests evolve resistance (pesticide treadmill) — natural selection",
            "Persistent pesticides biomagnify (DDT)",
            "GM crops engineered for pest/herbicide resistance"
          ],
          scenario: "A farmer finds that the same pesticide is becoming less effective at controlling corn rootworms each year.",
          parts: [
            "Explain how pests become resistant to pesticides through natural selection.",
            "Describe one environmental impact of pesticide use on non-target organisms.",
            "Describe the 'pesticide treadmill.'",
            "Identify one alternative to chemical pesticides.",
            "Propose one way to slow the development of pesticide resistance, and explain how it would work."
          ]
        },
        {
          id: "5.7", name: "Meat Production Methods", w: 3,
          kw: ["meat production", "cafo", "feedlot", "concentrated animal feeding", "free range", "livestock", "manure lagoon", "rotational grazing", "beef"],
          concepts: [
            "CAFOs: efficient but produce concentrated waste, antibiotics use, methane",
            "Manure runoff causes eutrophication and fecal coliform contamination",
            "Free-range/rotational grazing: less waste concentration but more land; overgrazing risk",
            "Meat production requires more land, water, and energy per calorie (10% rule)"
          ],
          scenario: "A concentrated animal feeding operation (CAFO) houses 10,000 cattle near a river.",
          parts: [
            "Describe one economic advantage of CAFOs.",
            "Explain how waste from CAFOs can affect nearby surface water.",
            "Explain why antibiotic use in CAFOs is a public health concern.",
            "Propose one way to reduce the environmental impact of meat production."
          ]
        },
        {
          id: "5.8", name: "Impacts of Overfishing", w: 3,
          kw: ["overfishing", "fishery", "bycatch", "trawling", "bottom trawling", "fishery collapse", "drift net", "longline", "fish stock"],
          concepts: [
            "Overfishing leads to fishery collapse (Atlantic cod)",
            "Bottom trawling destroys benthic habitat; bycatch kills non-target species",
            "Solutions: quotas, marine protected areas, gear restrictions, size limits",
            "Fishing down the food web"
          ],
          scenario: "The Atlantic cod fishery off Newfoundland collapsed in 1992 after decades of intensive fishing.",
          parts: [
            "Describe one fishing practice that causes high levels of bycatch.",
            "Explain how bottom trawling affects marine ecosystems.",
            "Propose one solution to overfishing and explain how it would allow the fishery to recover.",
            "Explain how overfishing of a top predator can affect lower trophic levels."
          ]
        },
        {
          id: "5.9", name: "Impacts of Mining", w: 3,
          kw: ["mining", "surface mining", "strip mining", "mountaintop removal", "subsurface mining", "acid mine drainage", "tailings", "overburden", "ore", "reclamation"],
          concepts: [
            "Surface (strip, open-pit, mountaintop removal) vs. subsurface mining",
            "Acid mine drainage: sulfides react with water/oxygen, lowering pH and mobilizing metals",
            "Tailings, habitat destruction, worker health (black lung)",
            "Reclamation and the Surface Mining Control and Reclamation Act"
          ],
          scenario: "A coal company proposes mountaintop removal mining in a forested region of Appalachia.",
          parts: [
            "Describe one environmental impact of mountaintop removal mining.",
            "Explain how acid mine drainage forms and how it affects aquatic organisms.",
            "Describe one human health risk associated with subsurface mining.",
            "Describe one method of reclaiming land after surface mining.",
            "Propose one way to reduce the environmental impact of mining, and explain how it would work."
          ]
        },
        {
          id: "5.10", name: "Impacts of Urbanization", w: 3,
          kw: ["urbanization", "urban sprawl", "impervious surface", "urban heat island", "saltwater intrusion", "suburb", "city"],
          concepts: [
            "Impervious surfaces increase runoff and flooding, decrease groundwater recharge",
            "Urban heat island effect",
            "Saltwater intrusion from groundwater over-pumping in coastal cities",
            "Urban sprawl increases car dependence and habitat loss"
          ],
          scenario: "A rapidly growing coastal city is replacing farmland and forests with roads, parking lots, and housing.",
          parts: [
            "Explain how impervious surfaces affect the hydrologic cycle.",
            "Describe the urban heat island effect and one cause of it.",
            "Explain how excessive groundwater withdrawal in coastal cities can lead to saltwater intrusion.",
            "Describe one environmental consequence of urban sprawl.",
            "Propose one urban planning strategy to reduce the impacts of urban sprawl, and explain how it would work."
          ]
        },
        {
          id: "5.11", name: "Ecological Footprints", w: 2,
          kw: ["ecological footprint", "carbon footprint", "footprint", "biocapacity", "global hectare"],
          concepts: [
            "Ecological footprint: land/water area needed to support a person's consumption and waste",
            "Carbon footprint: total greenhouse gas emissions from activities",
            "Developed nations have much larger per-capita footprints",
            "Ways to reduce footprints: diet, transportation, energy use"
          ],
          scenario: "The average ecological footprint of a person in the United States is about 8 global hectares, compared with 1.2 in India.",
          parts: [
            "Define ecological footprint.",
            "Explain why per-capita ecological footprints are larger in developed countries.",
            "Describe two actions an individual could take to reduce their carbon footprint.",
            "Calculate how many Earths would be needed if everyone lived like the average U.S. resident, given 1.6 global hectares of biocapacity per person. Show your work.",
            "Propose one community-level change that would reduce residents' ecological footprint, and explain how it would work."
          ],
          calc: "Earths needed = footprint / biocapacity per person"
        },
        {
          id: "5.12", name: "Introduction to Sustainability", w: 2,
          kw: ["sustainability", "sustainable yield", "maximum sustainable yield", "environmental indicator", "sustainable"],
          concepts: [
            "Sustainability: meeting present needs without compromising future generations",
            "Sustainable yield: amount of a renewable resource that can be harvested without depletion",
            "Environmental indicators: biodiversity, food production, temperature, CO2, ozone, population",
            "Maximum sustainable yield is about half of carrying capacity"
          ],
          scenario: "A forest manager wants to harvest timber at a rate that allows the forest to provide timber indefinitely.",
          parts: [
            "Define sustainable yield.",
            "Identify one environmental indicator that can be used to assess sustainability.",
            "Explain why harvesting above the maximum sustainable yield will deplete a resource.",
            "Describe one practice that increases the sustainability of resource use.",
            "Propose one policy that would keep a fishery or forest harvest at a sustainable yield, and explain how it would work."
          ]
        },
        {
          id: "5.13", name: "Methods to Reduce Urban Runoff", w: 4,
          kw: ["urban runoff", "stormwater", "permeable pavement", "green roof", "rain garden", "bioswale", "retention pond"],
          concepts: [
            "Permeable pavement, green roofs, rain gardens, bioswales increase infiltration",
            "Public transit, building up not out, reduce runoff and sprawl",
            "Benefits: less flooding, less pollution in waterways, groundwater recharge",
            "Know a method AND the mechanism by which it reduces runoff"
          ],
          scenario: "After a heavy storm, a city's streets flood and oil and fertilizer wash into a nearby river.",
          parts: [
            "Propose one method to reduce urban runoff and explain how it works.",
            "Describe one benefit of green roofs other than reducing runoff.",
            "Identify one pollutant commonly found in urban stormwater runoff.",
            "Explain how reducing urban runoff could improve water quality in the river."
          ]
        },
        {
          id: "5.14", name: "Integrated Pest Management", w: 3,
          kw: ["integrated pest management", "ipm", "biological control", "crop rotation", "intercropping", "natural predator", "pheromone trap"],
          concepts: [
            "IPM combines biological, physical, and limited chemical controls",
            "Methods: crop rotation, intercropping, biocontrol (ladybugs), traps, monitoring",
            "Benefits: less pesticide, less resistance, protects pollinators",
            "Drawbacks: more time, knowledge, and cost; biocontrols can become invasive"
          ],
          scenario: "An orchard owner wants to reduce pesticide use while still controlling an aphid infestation.",
          parts: [
            "Describe one method used in integrated pest management.",
            "Explain one advantage of IPM over relying solely on chemical pesticides.",
            "Describe one disadvantage of using biological controls.",
            "Explain how crop rotation reduces pest populations.",
            "Propose an integrated pest management plan for a crop, describing two methods and explaining how each controls pests."
          ]
        },
        {
          id: "5.15", name: "Sustainable Agriculture", w: 4,
          kw: ["sustainable agriculture", "contour plowing", "terracing", "windbreak", "no-till", "cover crop", "perennial crop", "strip cropping", "green manure", "rotational grazing", "agroforestry"],
          concepts: [
            "Soil conservation: contour plowing, terracing, windbreaks, no-till, perennial crops, strip cropping",
            "Improving soil fertility: crop rotation (legumes), green manure, limestone",
            "Rotational grazing prevents overgrazing",
            "Explain HOW each practice reduces erosion or improves fertility"
          ],
          scenario: "A farming cooperative wants to maintain soil fertility and reduce erosion without relying on synthetic inputs.",
          parts: [
            "Describe one soil conservation technique and explain how it reduces erosion.",
            "Explain how crop rotation with legumes improves soil fertility.",
            "Describe how rotational grazing prevents overgrazing.",
            "Propose one sustainable practice to increase soil organic matter."
          ]
        },
        {
          id: "5.16", name: "Aquaculture", w: 2,
          kw: ["aquaculture", "fish farm", "fish farming", "mariculture", "farmed salmon"],
          concepts: [
            "Benefits: less land/fuel, high yield, reduces pressure on wild fish",
            "Drawbacks: concentrated waste, disease spread to wild fish, escapees, antibiotics",
            "Farmed carnivorous fish (salmon) require wild-caught fishmeal",
            "Open net pens vs. closed systems"
          ],
          scenario: "A company proposes building open net-pen salmon farms in a coastal bay.",
          parts: [
            "Describe one benefit of aquaculture compared with wild-caught fishing.",
            "Explain how open net-pen aquaculture can harm wild fish populations.",
            "Describe how waste from fish farms can affect water quality.",
            "Explain why farming carnivorous fish may not reduce pressure on wild fisheries.",
            "Propose one way to reduce the environmental impact of fish farming, and explain how it would work."
          ]
        },
        {
          id: "5.17", name: "Sustainable Forestry", w: 2,
          kw: ["sustainable forestry", "selective cutting", "selective logging", "reforestation", "ecologically sustainable forestry", "prescribed burn", "controlled burn", "fsc", "tree plantation"],
          concepts: [
            "Selective cutting, reforestation, using recycled wood, protecting old growth",
            "Prescribed burns reduce fuel load and catastrophic wildfire risk",
            "Removing diseased trees; integrated pest management for forest pests",
            "Tree plantations: monocultures with low biodiversity"
          ],
          scenario: "A national forest has dense undergrowth after decades of fire suppression.",
          parts: [
            "Explain how prescribed burns reduce the risk of catastrophic wildfires.",
            "Describe one sustainable forestry practice.",
            "Explain why tree plantations support less biodiversity than natural forests.",
            "Describe one benefit of reforestation.",
            "Propose one sustainable forestry practice for a logging company, and explain how it protects the forest ecosystem."
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Energy Resources and Consumption",
      examWeight: "10-15%",
      bigIdea: "Energy choices affect the environment; conservation and renewables reduce impacts.",
      topics: [
        {
          id: "6.1", name: "Renewable and Nonrenewable Resources", w: 2,
          kw: ["renewable", "nonrenewable", "non-renewable", "depletable", "nondepletable", "finite resource"],
          concepts: [
            "Nonrenewable: fossil fuels, uranium (finite)",
            "Renewable: depletable (biomass) vs. nondepletable (solar, wind, geothermal)",
            "Renewables can become depleted if used faster than replenished",
            "Classify energy sources correctly"
          ],
          scenario: "A state's energy plan lists coal, natural gas, uranium, wood, solar, and wind as energy sources.",
          parts: [
            "Classify each source as renewable or nonrenewable.",
            "Explain how a renewable resource like timber can become depleted.",
            "Identify one nondepletable energy source.",
            "Explain why nuclear power is classified as nonrenewable.",
            "Propose one way a state could increase its use of nondepletable energy sources, and explain how it would work."
          ]
        },
        {
          id: "6.2", name: "Global Energy Consumption", w: 2,
          kw: ["energy consumption", "per capita energy", "developed countries", "developing countries", "energy demand"],
          concepts: [
            "Developed countries use far more energy per capita",
            "Fossil fuels are the most-used energy source globally",
            "Energy use rises with industrialization",
            "Availability, price, and government policy drive energy choices"
          ],
          scenario: "A graph shows per capita energy consumption in several countries over 50 years.",
          parts: [
            "Identify the most widely used energy source in the world today.",
            "Explain why per capita energy consumption is higher in developed countries.",
            "Describe one factor that influences a country's choice of energy sources.",
            "Predict how energy consumption will change in developing countries as they industrialize.",
            "Propose one policy to reduce per capita energy consumption in a developed country, and explain how it would work."
          ]
        },
        {
          id: "6.3", name: "Fuel Types and Uses", w: 2,
          kw: ["fuel type", "wood", "charcoal", "peat", "lignite", "bituminous", "anthracite", "subbituminous", "cogeneration", "fuel"],
          concepts: [
            "Coal types: peat, lignite, sub-bituminous, bituminous, anthracite (increasing energy density)",
            "Wood and charcoal in developing countries (deforestation, indoor air pollution)",
            "Natural gas: cleanest fossil fuel (least CO2 per unit energy)",
            "Cogeneration uses waste heat"
          ],
          scenario: "Many households in rural areas of developing countries cook with wood and charcoal.",
          parts: [
            "Identify the type of coal with the highest energy content.",
            "Explain why natural gas produces less CO2 per unit of energy than coal.",
            "Describe one environmental effect of using wood as a primary fuel.",
            "Describe how cogeneration increases energy efficiency.",
            "Propose one alternative to cooking with wood or charcoal in developing countries, and explain how it would reduce environmental harm."
          ]
        },
        {
          id: "6.4", name: "Distribution of Natural Energy Resources", w: 1,
          kw: ["distribution of energy", "energy reserves", "oil reserves", "geopolitics"],
          concepts: [
            "Fossil fuel reserves are unevenly distributed",
            "Solar, wind, geothermal potential depends on location",
            "Energy dependence and geopolitics",
            "Read maps of resource potential"
          ],
          scenario: "A map shows solar energy potential across the United States.",
          parts: [
            "Identify a region of the U.S. with high solar energy potential and explain why.",
            "Explain why geothermal energy is available only in certain locations.",
            "Describe one consequence of uneven distribution of fossil fuel reserves.",
            "Identify a factor that determines whether a location is suitable for wind energy.",
            "Propose one way a country with few fossil fuel reserves could meet its energy needs, and explain how it would work."
          ]
        },
        {
          id: "6.5", name: "Fossil Fuels", w: 5,
          kw: ["fossil fuel", "coal", "oil", "petroleum", "natural gas", "fracking", "hydraulic fracturing", "tar sands", "oil sands", "crude oil", "coal-fired", "power plant", "combustion", "methane leak", "steam turbine"],
          concepts: [
            "Power plant: fuel burned to heat water, steam turns turbine, turbine spins generator",
            "Fracking: pros (natural gas, less CO2 than coal) and cons (groundwater contamination, methane leaks, earthquakes, water use)",
            "Coal combustion: CO2, SO2, NOx, PM, mercury, fly ash",
            "Oil spills, tar sands extraction impacts"
          ],
          scenario: "A utility company is debating whether to replace an old coal-fired power plant with a natural gas plant supplied by hydraulic fracturing.",
          parts: [
            "Describe how electricity is generated in a coal-fired power plant.",
            "Identify one environmental advantage of natural gas compared with coal.",
            "Describe one environmental concern associated with hydraulic fracturing.",
            "Identify one air pollutant released by burning coal and describe its effect on human health or the environment.",
            "Propose one solution to reduce the environmental impacts of fossil fuel use, and explain how it would work."
          ]
        },
        {
          id: "6.6", name: "Nuclear Power", w: 4,
          kw: ["nuclear", "uranium", "fission", "radioactive", "half-life", "half life", "nuclear waste", "chernobyl", "fukushima", "three mile island", "meltdown", "control rod", "radiation"],
          concepts: [
            "Fission of U-235 releases heat to make steam; no CO2 emitted during operation",
            "Drawbacks: radioactive waste storage, thermal pollution, meltdown risk, mining impacts",
            "Half-life calculations",
            "Accidents: Three Mile Island, Chernobyl, Fukushima"
          ],
          scenario: "A country is considering building nuclear power plants to reduce its greenhouse gas emissions.",
          parts: [
            "Describe how electricity is generated in a nuclear power plant.",
            "Identify one environmental advantage of nuclear power over coal.",
            "Describe one challenge associated with long-term storage of nuclear waste.",
            "A radioactive isotope has a half-life of 30 years. Calculate how much of a 1,000 kg sample remains after 120 years. Show your work.",
            "Propose one solution for the long-term storage of nuclear waste, and explain how it would protect people and the environment."
          ],
          calc: "Remaining = initial x (1/2)^(time/half-life)"
        },
        {
          id: "6.7", name: "Energy from Biomass", w: 3,
          kw: ["biomass", "biofuel", "ethanol", "biodiesel", "methane digester", "biogas", "wood burning", "carbon neutral"],
          concepts: [
            "Biomass: wood, charcoal, animal waste; biofuels: ethanol (corn, sugarcane), biodiesel",
            "Often called carbon neutral, but land clearing and production emit CO2",
            "Corn ethanol competes with food crops and requires fertilizer, water",
            "Burning biomass releases particulates, CO, NOx"
          ],
          scenario: "The U.S. requires gasoline to be blended with corn-based ethanol.",
          parts: [
            "Explain why biofuels are sometimes described as carbon neutral.",
            "Describe one environmental drawback of producing ethanol from corn.",
            "Identify one air pollutant released by burning biomass.",
            "Explain how a methane digester can provide energy from animal waste.",
            "Propose one way to produce biofuels with less environmental impact than corn ethanol, and explain how it would work."
          ]
        },
        {
          id: "6.8", name: "Solar Energy", w: 4,
          kw: ["solar", "photovoltaic", "pv", "solar panel", "solar cell", "active solar", "passive solar", "concentrated solar", "solar farm"],
          concepts: [
            "Photovoltaic cells convert light directly to electricity",
            "Passive (building design) vs. active (pumps/fans) solar heating",
            "Concentrated solar uses mirrors to heat fluid and generate steam",
            "Drawbacks: intermittency, mining of metals for panels, land use for solar farms"
          ],
          scenario: "A homeowner is considering installing photovoltaic solar panels that cost $15,000 and save $1,200 per year in electricity.",
          parts: [
            "Describe how photovoltaic cells generate electricity.",
            "Calculate the payback period for the solar panels. Show your work.",
            "Identify one environmental disadvantage of large-scale solar farms.",
            "Describe one passive solar design feature that reduces a home's heating needs.",
            "Propose one solution to the intermittency of solar energy, and explain how it would work."
          ],
          calc: "Payback = cost / savings per year"
        },
        {
          id: "6.9", name: "Hydroelectric Power", w: 3,
          kw: ["hydroelectric", "dam", "reservoir", "run-of-the-river", "tidal", "hydropower", "fish ladder", "sediment"],
          concepts: [
            "Moving water turns turbines; dams create reservoirs",
            "Benefits: no air pollution during operation, flood control, reliable",
            "Drawbacks: habitat flooding, blocks fish migration, sediment trapping, methane from reservoirs",
            "Run-of-the-river and tidal alternatives"
          ],
          scenario: "A government plans to build a large hydroelectric dam on a river used by migrating salmon.",
          parts: [
            "Describe how a hydroelectric dam generates electricity.",
            "Explain how dams affect migrating fish populations.",
            "Describe one effect of a dam on sediment downstream.",
            "Identify one benefit of hydroelectric power other than electricity generation.",
            "Propose one way to reduce the impact of a hydroelectric dam on migrating fish, and explain how it would work."
          ]
        },
        {
          id: "6.10", name: "Geothermal Energy", w: 2,
          kw: ["geothermal", "ground-source heat pump", "heat pump", "magma", "hot spring", "geyser"],
          concepts: [
            "Heat from Earth's interior (radioactive decay) creates steam to turn turbines",
            "Only practical near plate boundaries/hot spots (Iceland)",
            "Drawbacks: can release H2S, may deplete heat locally, expensive",
            "Ground-source heat pumps work almost anywhere for heating/cooling"
          ],
          scenario: "Iceland generates much of its electricity and heating from geothermal energy.",
          parts: [
            "Describe how geothermal energy is used to produce electricity.",
            "Explain why geothermal power plants are common in Iceland.",
            "Describe one environmental drawback of geothermal energy.",
            "Explain how a ground-source heat pump can reduce energy use for heating a home.",
            "Propose one way a homeowner could use geothermal energy even in a region without volcanic activity, and explain how it would work."
          ]
        },
        {
          id: "6.11", name: "Hydrogen Fuel Cell", w: 2,
          kw: ["hydrogen", "fuel cell", "electrolysis", "hydrogen fuel"],
          concepts: [
            "Fuel cell combines H2 and O2 to make electricity; only byproduct is water",
            "Hydrogen production often uses natural gas or electricity (energy source matters)",
            "Drawbacks: storage, infrastructure, cost",
            "Electrolysis using renewable electricity produces 'green' hydrogen"
          ],
          scenario: "A city is considering replacing its diesel buses with hydrogen fuel cell buses.",
          parts: [
            "Describe how a hydrogen fuel cell produces electricity.",
            "Identify the byproduct of a hydrogen fuel cell.",
            "Explain why hydrogen fuel cells may not reduce greenhouse gas emissions depending on how hydrogen is produced.",
            "Describe one challenge to widespread use of hydrogen fuel cells.",
            "Propose one way to produce hydrogen fuel without generating greenhouse gas emissions, and explain how it would work."
          ]
        },
        {
          id: "6.12", name: "Wind Energy", w: 3,
          kw: ["wind energy", "wind turbine", "wind farm", "offshore wind", "wind power"],
          concepts: [
            "Kinetic energy of wind turns turbine blades and a generator",
            "Benefits: no emissions during operation, land below can be farmed",
            "Drawbacks: intermittency, bird/bat deaths, noise, visual impact",
            "Offshore wind is stronger and more consistent"
          ],
          scenario: "A rural county is considering leasing farmland for a 100-turbine wind farm.",
          parts: [
            "Describe how wind turbines generate electricity.",
            "Identify one environmental drawback of wind farms.",
            "Explain one economic benefit of wind farms to rural landowners.",
            "Explain why wind energy must be paired with energy storage or other sources.",
            "Propose one way to reduce bird and bat deaths at wind farms, and explain how it would work."
          ]
        },
        {
          id: "6.13", name: "Energy Conservation", w: 3,
          kw: ["energy conservation", "energy efficiency", "led", "cfl", "insulation", "cafe standards", "fuel economy", "hybrid", "electric vehicle", "kwh", "kilowatt", "programmable thermostat"],
          concepts: [
            "Individual: LEDs, programmable thermostats, insulation, efficient appliances",
            "Transportation: hybrids/EVs, CAFE standards, public transit",
            "Energy calculations: watts x hours = Wh; kWh x cost",
            "Energy efficiency reduces fossil fuel use and emissions"
          ],
          scenario: "A school replaces 500 incandescent bulbs (60 W) with LED bulbs (10 W). Each bulb is on 8 hours per day for 180 school days.",
          parts: [
            "Calculate the kilowatt-hours of electricity saved per year. Show your work.",
            "If electricity costs $0.12 per kWh, calculate the money saved per year. Show your work.",
            "Describe one other way the school could conserve energy.",
            "Explain how energy conservation reduces air pollution.",
            "Propose one policy that would increase energy conservation in transportation, and explain how it would work."
          ],
          calc: "kWh = watts x hours / 1000"
        }
      ]
    }
  ];

  root.APES_KB = (root.APES_KB || []).concat(units);
  if (typeof module !== "undefined" && module.exports) module.exports = units;
})(typeof globalThis !== "undefined" ? globalThis : this);
