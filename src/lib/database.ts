import type {
  Song,
  Movie,
  Tree,
  PlantingLocation,
  TreatIdea,
  GreekGod,
  Coin,
  Quote,
  Gemstone,
  Meal,
} from './types'

export const songs: Song[] = [
  {
    id: 'song-001',
    title: 'The Rite of Spring',
    artist: 'Igor Stravinsky',
    year: 1913,
    archiveUrl: 'https://archive.org/details/78_the-rite-of-spring-part-1_igor-stravinsky-orchestre-de-la-suisse-romande_gbia0000119a',
    genreTags: ['classical', 'modernist', 'ballet'],
    durationSec: 2040,
    context: 'Revolutionary ballet score that caused a riot at its Paris premiere. Marked a seismic shift in 20th-century music with its primal rhythms and dissonant harmonies.',
    sources: [
      {
        title: 'Internet Archive - The Rite of Spring Recording',
        url: 'https://archive.org/details/78_the-rite-of-spring-part-1_igor-stravinsky-orchestre-de-la-suisse-romande_gbia0000119a',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'song-002',
    title: 'Strange Fruit',
    artist: 'Billie Holiday',
    year: 1939,
    archiveUrl: 'https://archive.org/details/78_strange-fruit_billie-holiday-commodore-records_gbia0001493b',
    genreTags: ['jazz', 'protest', 'blues'],
    durationSec: 178,
    context: 'Haunting protest song against lynching in the American South. Considered one of the first great protest songs of the civil rights movement.',
    sources: [
      {
        title: 'Internet Archive - Strange Fruit Recording',
        url: 'https://archive.org/details/78_strange-fruit_billie-holiday-commodore-records_gbia0001493b',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'song-003',
    title: 'In the Hall of the Mountain King',
    artist: 'Edvard Grieg',
    year: 1875,
    archiveUrl: 'https://archive.org/details/PeerGynt-InTheHallOfTheMountainKing',
    genreTags: ['classical', 'romantic', 'theatrical'],
    durationSec: 145,
    context: 'From the Peer Gynt suite. Depicts a frantic chase through a troll mountain hall with accelerating tempo that builds relentless tension.',
    sources: [
      {
        title: 'Internet Archive - In the Hall of the Mountain King',
        url: 'https://archive.org/details/PeerGynt-InTheHallOfTheMountainKing',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'song-004',
    title: 'Clair de Lune',
    artist: 'Claude Debussy',
    year: 1905,
    archiveUrl: 'https://archive.org/details/ClairDeLune_201801',
    genreTags: ['classical', 'impressionist', 'piano'],
    durationSec: 300,
    context: 'Luminous piano piece meaning "moonlight." Exemplifies musical impressionism with flowing arpeggios that evoke shimmering light on water.',
    sources: [
      {
        title: 'Internet Archive - Clair de Lune Recording',
        url: 'https://archive.org/details/ClairDeLune_201801',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'song-005',
    title: 'When the Saints Go Marching In',
    artist: 'Louis Armstrong',
    year: 1938,
    archiveUrl: 'https://archive.org/details/78_when-the-saints-go-marching-in_louis-armstrong-and-his-orchestra-louis-armstro_gbia0056261a',
    genreTags: ['jazz', 'traditional', 'gospel'],
    durationSec: 195,
    context: 'New Orleans jazz standard transformed by Armstrong into a jubilant celebration. Became synonymous with the city\'s musical heritage.',
    sources: [
      {
        title: 'Internet Archive - When the Saints Recording',
        url: 'https://archive.org/details/78_when-the-saints-go-marching-in_louis-armstrong-and-his-orchestra-louis-armstro_gbia0056261a',
        retrievedAt: '2024-01-15',
      },
    ],
  },
]

export const movies: Movie[] = [
  {
    id: 'movie-001',
    title: 'Metropolis',
    year: 1927,
    archiveUrl: 'https://archive.org/details/Metropolis_19271',
    runtimeMin: 153,
    rating: 'Not Rated',
    synopsis: 'In a futuristic city sharply divided between working class and city planners, the son of the city\'s mastermind falls in love with a working-class prophet who predicts the coming of a savior to mediate their differences. German expressionist masterpiece exploring class conflict and industrialization.',
    sources: [
      {
        title: 'Internet Archive - Metropolis (1927)',
        url: 'https://archive.org/details/Metropolis_19271',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'movie-002',
    title: 'Night of the Living Dead',
    year: 1968,
    archiveUrl: 'https://archive.org/details/night_of_the_living_dead',
    runtimeMin: 96,
    rating: 'Not Rated',
    synopsis: 'A group of people trapped in a farmhouse must defend themselves against flesh-eating ghouls. Revolutionary independent horror film that redefined the zombie genre and offered social commentary on 1960s America.',
    sources: [
      {
        title: 'Internet Archive - Night of the Living Dead',
        url: 'https://archive.org/details/night_of_the_living_dead',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'movie-003',
    title: 'The Cabinet of Dr. Caligari',
    year: 1920,
    archiveUrl: 'https://archive.org/details/TheCabinetOfDr.Caligari',
    runtimeMin: 76,
    rating: 'Not Rated',
    synopsis: 'A hypnotist uses a somnambulist to commit murders. Landmark of German expressionist cinema known for its stark, distorted sets and twist ending that influenced horror and film noir for decades.',
    sources: [
      {
        title: 'Internet Archive - The Cabinet of Dr. Caligari',
        url: 'https://archive.org/details/TheCabinetOfDr.Caligari',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'movie-004',
    title: 'His Girl Friday',
    year: 1940,
    archiveUrl: 'https://archive.org/details/His_Girl_Friday',
    runtimeMin: 92,
    rating: 'Not Rated',
    synopsis: 'A newspaper editor uses every trick in the book to keep his ace reporter ex-wife from remarrying. Screwball comedy masterpiece famous for rapid-fire overlapping dialogue and Rosalind Russell\'s groundbreaking portrayal of a career woman.',
    sources: [
      {
        title: 'Internet Archive - His Girl Friday',
        url: 'https://archive.org/details/His_Girl_Friday',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'movie-005',
    title: 'The General',
    year: 1926,
    archiveUrl: 'https://archive.org/details/the_general_buster_keaton',
    runtimeMin: 107,
    rating: 'Not Rated',
    synopsis: 'A Confederate train engineer pursues stolen locomotive during the Civil War. Buster Keaton\'s magnum opus featuring some of cinema\'s most dangerous and elaborate physical stunts, all performed without special effects.',
    sources: [
      {
        title: 'Internet Archive - The General',
        url: 'https://archive.org/details/the_general_buster_keaton',
        retrievedAt: '2024-01-15',
      },
    ],
  },
]

export const trees: Tree[] = [
  {
    id: 'tree-001',
    commonName: 'Eastern Redbud',
    scientificName: 'Cercis canadensis',
    hardinessZones: ['4', '5', '6', '7', '8', '9'],
    nativeRegions: ['Eastern United States', 'Southeastern Canada'],
    careNotes: 'Prefers well-drained soil in partial shade to full sun. Drought-tolerant once established. Prune after flowering if needed. Relatively low maintenance.',
    ecologicalValue: 'Early spring blooms provide critical nectar for native bees. Seeds eaten by birds. Host plant for Henry\'s Elfin butterfly.',
    sources: [
      {
        title: 'USDA Forest Service - Cercis canadensis',
        url: 'https://www.fs.usda.gov/database/feis/plants/tree/cercan/all.html',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'tree-002',
    commonName: 'White Oak',
    scientificName: 'Quercus alba',
    hardinessZones: ['3', '4', '5', '6', '7', '8', '9'],
    nativeRegions: ['Eastern and Central United States'],
    careNotes: 'Needs deep, well-drained soil and full sun. Slow-growing but extremely long-lived (200-300 years). Minimal pruning required. Deep taproot makes transplanting difficult after first year.',
    ecologicalValue: 'Supports over 500 species of butterflies and moths. Acorns critical food for wildlife. State tree of Connecticut, Illinois, and Maryland.',
    sources: [
      {
        title: 'Arbor Day Foundation - White Oak',
        url: 'https://www.arborday.org/trees/treeguide/TreeDetail.cfm?ItemID=1017',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'tree-003',
    commonName: 'Douglas Fir',
    scientificName: 'Pseudotsuga menziesii',
    hardinessZones: ['4', '5', '6', '7'],
    nativeRegions: ['Western North America', 'Pacific Coast'],
    careNotes: 'Thrives in cool, moist climates with acidic, well-drained soil. Full sun required. Can reach 200+ feet in native habitat. Susceptible to root rot in poorly drained soils.',
    ecologicalValue: 'Critical habitat tree for spotted owls and marbled murrelets. Seeds feed squirrels and birds. Dense foliage provides winter shelter.',
    sources: [
      {
        title: 'USDA NRCS - Douglas Fir Plant Guide',
        url: 'https://plants.usda.gov/plantguide/pdf/cs_psme.pdf',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'tree-004',
    commonName: 'Sugar Maple',
    scientificName: 'Acer saccharum',
    hardinessZones: ['3', '4', '5', '6', '7', '8'],
    nativeRegions: ['Northeastern North America', 'Appalachian Mountains'],
    careNotes: 'Prefers moist, well-drained soil. Moderate growth rate. Stunning fall color. Sensitive to road salt and compacted soils. Benefits from mulching.',
    ecologicalValue: 'Sap source for maple syrup industry. Seeds eaten by birds and small mammals. Leaves decompose to enrich soil. State tree of New York, Vermont, West Virginia, and Wisconsin.',
    sources: [
      {
        title: 'USDA Forest Service - Acer saccharum',
        url: 'https://www.fs.fed.us/database/feis/plants/tree/acesac/all.html',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'tree-005',
    commonName: 'Live Oak',
    scientificName: 'Quercus virginiana',
    hardinessZones: ['7', '8', '9', '10'],
    nativeRegions: ['Southeastern United States', 'Gulf Coast'],
    careNotes: 'Extremely hardy and adaptable. Tolerates salt spray and drought once established. Wide-spreading canopy requires ample space. Minimal pruning needed.',
    ecologicalValue: 'Iconic Southern tree providing year-round shade and wildlife habitat. Acorns support diverse wildlife. Exceptionally long-lived (300+ years).',
    sources: [
      {
        title: 'University of Florida IFAS - Live Oak',
        url: 'https://edis.ifas.ufl.edu/publication/ST428',
        retrievedAt: '2024-01-15',
      },
    ],
  },
]

export const plantingLocations: PlantingLocation[] = [
  {
    id: 'location-001',
    name: 'Community Garden Plot - Riverside Park',
    region: 'Northeast Urban',
    climateTags: ['humid-continental', 'cold-winter', 'warm-summer'],
    permitNotes: 'Contact local parks department for community garden plot waitlist. Annual fee required. Organic practices encouraged.',
    sources: [
      {
        title: 'NYC Parks - GreenThumb Community Gardens',
        url: 'https://www.greenthumbnyc.org/',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'location-002',
    name: 'Backyard Native Restoration - Suburban Lot',
    region: 'Midwest Suburban',
    climateTags: ['humid-continental', 'temperate', 'four-seasons'],
    permitNotes: 'No permit required for residential property. Check HOA restrictions if applicable. Consider utility line locations before digging.',
    sources: [
      {
        title: 'Wild Ones - Native Plant Landscaping',
        url: 'https://www.wildones.org/',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'location-003',
    name: 'Street Tree Program - Urban Sidewalk',
    region: 'Pacific Northwest Urban',
    climateTags: ['oceanic', 'mild-winter', 'dry-summer'],
    permitNotes: 'Apply through city forestry department. Trees provided free or subsidized. Must maintain tree for 2 years. Limited species selection based on site conditions.',
    sources: [
      {
        title: 'Seattle Trees for Neighborhoods',
        url: 'https://www.seattle.gov/trees/planting-and-care/trees-for-neighborhoods',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'location-004',
    name: 'School Grounds Enhancement - Public Elementary',
    region: 'Southeast Suburban',
    climateTags: ['humid-subtropical', 'hot-summer', 'mild-winter'],
    permitNotes: 'Coordinate with school principal and district facilities. Parent-teacher organization may fund. Great educational opportunity. Fall or spring planting recommended.',
    sources: [
      {
        title: 'National Wildlife Federation - Schoolyard Habitats',
        url: 'https://www.nwf.org/Garden-for-Wildlife/Create/Schoolyards',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'location-005',
    name: 'Conservation Easement - Private Woodland',
    region: 'Appalachian Rural',
    climateTags: ['humid-continental', 'mountainous', 'temperate-forest'],
    permitNotes: 'Work with land trust for conservation easement guidelines. May qualify for tax benefits. Focus on native species restoration. Professional forestry consultation recommended.',
    sources: [
      {
        title: 'Land Trust Alliance',
        url: 'https://www.landtrustalliance.org/',
        retrievedAt: '2024-01-15',
      },
    ],
  },
]

export const treats: TreatIdea[] = [
  {
    id: 'treat-001',
    name: 'Persimmon',
    type: 'fruit',
    originCountry: 'China',
    seasonality: 'Late Fall (October-December)',
    whereToBuyNotes: 'Asian grocery stores, farmers markets in fall, specialty produce sections. Look for Fuyu (crisp, can eat firm) or Hachiya (must be very soft).',
    flavorProfile: 'Sweet, honey-like with subtle spice notes. Texture ranges from crisp like apple (Fuyu) to custard-like (Hachiya). Astringent when unripe.',
    sources: [
      {
        title: 'Specialty Produce - Persimmon',
        url: 'https://specialtyproduce.com/produce/Persimmons_144.php',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'treat-002',
    name: 'Romanesco',
    type: 'vegetable',
    originCountry: 'Italy',
    seasonality: 'Fall-Winter (September-February)',
    whereToBuyNotes: 'Farmers markets, upscale grocery stores, sometimes standard supermarkets. Peak season late fall.',
    flavorProfile: 'Mild, nutty, slightly sweeter than cauliflower. Delicate texture when properly cooked. Visually stunning with fractal spiral patterns.',
    sources: [
      {
        title: 'USDA FoodData Central - Romanesco',
        url: 'https://fdc.nal.usda.gov/',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'treat-003',
    name: 'Turkish Delight',
    type: 'dessert',
    originCountry: 'Turkey',
    seasonality: 'Year-round',
    whereToBuyNotes: 'Middle Eastern markets, specialty candy shops, online importers. Fresh is vastly superior to mass-produced versions. Look for lokum from reputable Turkish sources.',
    flavorProfile: 'Delicate, floral gel candy dusted in powdered sugar. Varieties include rosewater, lemon, orange, pomegranate, and pistachio. Soft, yielding texture.',
    sources: [
      {
        title: 'Cultural History of Turkish Delight',
        url: 'https://www.atlasobscura.com/foods/turkish-delight-lokum',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'treat-004',
    name: 'Loquat',
    type: 'fruit',
    originCountry: 'China',
    seasonality: 'Spring (March-May)',
    whereToBuyNotes: 'Asian markets, California farmers markets in spring. Often found in home gardens in warm climates. Very perishable, rarely shipped long distances.',
    flavorProfile: 'Sweet-tart with notes of peach, citrus, and mango. Juicy but delicate. Seeds are large relative to fruit size.',
    sources: [
      {
        title: 'California Rare Fruit Growers - Loquat',
        url: 'https://crfg.org/wiki/loquat/',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'treat-005',
    name: 'Honeycrisp Apple',
    type: 'fruit',
    originCountry: 'United States',
    seasonality: 'Fall (September-November)',
    whereToBuyNotes: 'Widely available in supermarkets during fall. Farmers markets offer best flavor. Developed by University of Minnesota in 1960s, released 1991.',
    flavorProfile: 'Explosively crisp texture with balanced sweet-tart flavor. Exceptionally juicy. Each bite shatters rather than yields.',
    sources: [
      {
        title: 'University of Minnesota - Honeycrisp History',
        url: 'https://www.extension.umn.edu/news/honeycrisp-apple-history',
        retrievedAt: '2024-01-15',
      },
    ],
  },
]

export const greekGods: GreekGod[] = [
  {
    id: 'god-001',
    name: 'Athena',
    domain: 'Wisdom, Warfare, Crafts',
    storyTitle: 'The Contest for Athens',
    storyText: 'Athena and Poseidon both desired to be patron of the same city. The citizens declared they would choose whoever gave them the better gift. Poseidon struck the ground with his trident and produced a saltwater spring. Athena planted an olive tree—offering wood, oil, and food. The people chose Athena, and the city was named Athens in her honor. The olive tree she planted was said to still stand on the Acropolis in classical times.',
    primarySourcesRefs: 'Herodotus, Histories 8.55; Apollodorus, Bibliotheca 3.14.1',
    secondarySources: [
      {
        title: 'Theoi Project - Athena',
        url: 'https://www.theoi.com/Olympios/Athena.html',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'god-002',
    name: 'Prometheus',
    domain: 'Forethought, Fire, Craft',
    storyTitle: 'The Theft of Fire',
    storyText: 'After Zeus hid fire from humanity in anger, Prometheus defied him by stealing fire from the workshop of Hephaestus and returning it to mortals in a hollow fennel stalk. This gift enabled civilization—cooking, metalworking, and warmth. Zeus punished Prometheus by chaining him to a rock where an eagle ate his liver daily; it regrew each night. Prometheus endured this torment for ages until Heracles eventually freed him.',
    primarySourcesRefs: 'Hesiod, Works and Days 42-105; Aeschylus, Prometheus Bound',
    secondarySources: [
      {
        title: 'Theoi Project - Prometheus',
        url: 'https://www.theoi.com/Titan/TitanPrometheus.html',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'god-003',
    name: 'Demeter',
    domain: 'Agriculture, Harvest, Seasons',
    storyTitle: 'The Abduction of Persephone',
    storyText: 'Hades abducted Demeter\'s daughter Persephone to the underworld. In her grief, Demeter neglected the earth, causing all crops to wither and die. Zeus intervened, but because Persephone had eaten pomegranate seeds in the underworld, she was bound to return there for part of each year. When Persephone descends, Demeter mourns and winter comes; when she returns, spring blooms again. This myth explained the seasons.',
    primarySourcesRefs: 'Homeric Hymn to Demeter; Ovid, Metamorphoses 5.341-571',
    secondarySources: [
      {
        title: 'Theoi Project - Demeter',
        url: 'https://www.theoi.com/Olympios/Demeter.html',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'god-004',
    name: 'Hermes',
    domain: 'Messengers, Travel, Commerce, Thieves',
    storyTitle: 'Hermes and the Cattle of Apollo',
    storyText: 'On the day he was born, Hermes escaped his cradle and stole Apollo\'s sacred cattle, cleverly making them walk backward to confuse trackers. He also invented the lyre from a tortoise shell. When Apollo discovered the theft, he was furious, but Hermes charmed him by playing the lyre. Apollo was so enchanted by the music that he traded his cattle for the instrument and made Hermes the herald of the gods.',
    primarySourcesRefs: 'Homeric Hymn to Hermes; Apollodorus, Bibliotheca 3.10.2',
    secondarySources: [
      {
        title: 'Theoi Project - Hermes',
        url: 'https://www.theoi.com/Olympios/Hermes.html',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'god-005',
    name: 'Hephaestus',
    domain: 'Metalworking, Fire, Craftsmanship',
    storyTitle: 'The Trap for Ares and Aphrodite',
    storyText: 'Hephaestus was married to Aphrodite, who conducted an affair with Ares, god of war. When Helios informed Hephaestus of the adultery, the smith god crafted an invisible net of unbreakable chains. He placed it over his marriage bed, then pretended to leave. When the lovers met, the net ensnared them. Hephaestus called all the gods to witness their humiliation. Though embarrassed, Aphrodite and Ares were eventually released after Poseidon vouched for them.',
    primarySourcesRefs: 'Homer, Odyssey 8.266-366',
    secondarySources: [
      {
        title: 'Theoi Project - Hephaestus',
        url: 'https://www.theoi.com/Olympios/Hephaistos.html',
        retrievedAt: '2024-01-15',
      },
    ],
  },
]

export const coins: Coin[] = [
  {
    id: 'coin-001',
    name: '1909-S VDB Lincoln Cent',
    issuerCountry: 'United States',
    denomination: 'One Cent',
    year: 1909,
    mint: 'San Francisco',
    mintage: 484000,
    composition: '95% Copper, 5% Tin and Zinc',
    diameterMm: 19,
    coinTypeTags: ['lincoln-cent', 'key-date', 'designer-initials'],
    historyText: 'First year of the Lincoln cent design. The designer Victor David Brenner\'s initials (VDB) prominently appeared on the reverse, causing public controversy. The Mint removed them mid-year. The San Francisco mint produced only 484,000 with the initials, making it the most famous key date in American numismatics.',
    collectorNotes: 'Heavily counterfeited. Authenticate through weight (3.11g), specific die markers, and reputable grading services (PCGS, NGC). Even worn examples command significant premiums.',
    whereToFindLinks: [
      'https://www.pcgs.com/coinfacts/coin/1909-s-vdb-1c/2426',
      'https://www.ngccoin.com/coin-explorer/lincoln-cents-wheat-reverse-1909-1958/2426/1909-s-vdb-1c-ms/',
    ],
    sources: [
      {
        title: 'PCGS CoinFacts - 1909-S VDB Lincoln Cent',
        url: 'https://www.pcgs.com/coinfacts/coin/1909-s-vdb-1c/2426',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'coin-002',
    name: '1916-D Mercury Dime',
    issuerCountry: 'United States',
    denomination: 'Ten Cents',
    year: 1916,
    mint: 'Denver',
    mintage: 264000,
    composition: '90% Silver, 10% Copper',
    diameterMm: 17.9,
    coinTypeTags: ['mercury-dime', 'key-date', 'silver'],
    historyText: 'The first year of the Mercury dime (actually depicting Liberty with a winged cap, not Mercury). The Denver mint struck only 264,000—the lowest mintage of the entire series. Highly sought by collectors.',
    collectorNotes: 'The "D" mintmark must be clearly visible. Full split bands (FSB) on the reverse fasces command substantial premiums. Many circulated examples show heavy wear on Liberty\'s hair.',
    whereToFindLinks: [
      'https://www.pcgs.com/coinfacts/coin/1916-d-10c/4906',
    ],
    sources: [
      {
        title: 'PCGS CoinFacts - 1916-D Mercury Dime',
        url: 'https://www.pcgs.com/coinfacts/coin/1916-d-10c/4906',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'coin-003',
    name: '1804 Silver Dollar (Class I)',
    issuerCountry: 'United States',
    denomination: 'One Dollar',
    year: 1834,
    mint: 'Philadelphia',
    mintage: 8,
    composition: '89.24% Silver, 10.76% Copper',
    diameterMm: 39.5,
    coinTypeTags: ['draped-bust', 'king-of-coins', 'presentation'],
    historyText: 'Despite bearing the date 1804, these coins were actually struck in 1834-1835 for diplomatic presentation sets. Only 8 Class I specimens are known. Called the "King of American Coins." One sold for over $10 million in 2016.',
    collectorNotes: 'No original 1804 dollars were struck in 1804. These are diplomatic presentation pieces. All known specimens are documented and museum-held or in elite collections.',
    whereToFindLinks: [
      'https://www.usmint.gov/learn/history/collection-highlights/1804-silver-dollar',
    ],
    sources: [
      {
        title: 'U.S. Mint - 1804 Silver Dollar',
        url: 'https://www.usmint.gov/learn/history/collection-highlights/1804-silver-dollar',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'coin-004',
    name: '1933 Saint-Gaudens Double Eagle',
    issuerCountry: 'United States',
    denomination: 'Twenty Dollars',
    year: 1933,
    mint: 'Philadelphia',
    mintage: 445500,
    composition: '90% Gold, 10% Copper',
    diameterMm: 34,
    coinTypeTags: ['gold', 'double-eagle', 'prohibited'],
    historyText: 'Minted but never officially released due to FDR\'s 1933 Gold Reserve Act. Nearly all were melted. A handful escaped, leading to decades of legal battles. Only one is legal to own privately, selling for $18.9 million in 2021.',
    collectorNotes: 'Ownership is illegal except for the single specimen sold by the U.S. government in 2002. All others are subject to seizure.',
    whereToFindLinks: [
      'https://www.pcgs.com/coinfacts/coin/1933-20/9207',
    ],
    sources: [
      {
        title: 'PCGS CoinFacts - 1933 Double Eagle',
        url: 'https://www.pcgs.com/coinfacts/coin/1933-20/9207',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'coin-005',
    name: '1943 Copper Penny',
    issuerCountry: 'United States',
    denomination: 'One Cent',
    year: 1943,
    mint: 'Philadelphia',
    mintage: 20,
    composition: '95% Copper, 5% Tin and Zinc (error)',
    diameterMm: 19,
    coinTypeTags: ['lincoln-cent', 'mint-error', 'war-time'],
    historyText: 'In 1943, all pennies were supposed to be zinc-coated steel to conserve copper for WWII. A few copper planchets from 1942 remained in the press, creating error coins. Approximately 20 are known. Highly valuable and heavily counterfeited.',
    collectorNotes: 'Authenticate with magnet test (copper is non-magnetic), weight (3.11g vs. 2.7g for steel), and professional grading. Many fakes exist made by copper-plating steel cents.',
    whereToFindLinks: [
      'https://www.pcgs.com/coinfacts/coin/1943-1c-bn/2713',
    ],
    sources: [
      {
        title: 'PCGS CoinFacts - 1943 Copper Cent',
        url: 'https://www.pcgs.com/coinfacts/coin/1943-1c-bn/2713',
        retrievedAt: '2024-01-15',
      },
    ],
  },
]

export const quotes: Quote[] = [
  {
    id: 'quote-001',
    speaker: 'Abraham Lincoln',
    date: 'November 19, 1863',
    quote: 'Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.',
    context: 'Opening of the Gettysburg Address, delivered at the dedication of the Soldiers\' National Cemetery during the Civil War. Reframed the war as a test of whether democracy could survive.',
    sourceUrl: 'https://www.loc.gov/item/mamcol000021/',
  },
  {
    id: 'quote-002',
    speaker: 'Franklin D. Roosevelt',
    date: 'March 4, 1933',
    quote: 'The only thing we have to fear is fear itself—nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance.',
    context: 'First inaugural address during the depths of the Great Depression. Aimed to restore confidence and signal decisive government action to address economic collapse.',
    sourceUrl: 'https://www.archives.gov/milestone-documents/president-franklin-roosevelts-first-inaugural-address',
  },
  {
    id: 'quote-003',
    speaker: 'John F. Kennedy',
    date: 'January 20, 1961',
    quote: 'Ask not what your country can do for you—ask what you can do for your country.',
    context: 'Inaugural address. Called for civic responsibility and public service during the Cold War. Became one of the most famous presidential quotes in American history.',
    sourceUrl: 'https://www.jfklibrary.org/learn/about-jfk/historic-speeches/inaugural-address',
  },
  {
    id: 'quote-004',
    speaker: 'Theodore Roosevelt',
    date: 'April 23, 1910',
    quote: 'It is not the critic who counts... The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood.',
    context: 'From "Citizenship in a Republic" speech at the Sorbonne, Paris. Known as "The Man in the Arena." Celebrated effort and courage over passive criticism.',
    sourceUrl: 'https://www.theodorerooseveltcenter.org/Learn-About-TR/TR-Encyclopedia/Culture-and-Society/Man-in-the-Arena.aspx',
  },
  {
    id: 'quote-005',
    speaker: 'Thomas Jefferson',
    date: 'July 4, 1776',
    quote: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.',
    context: 'From the Declaration of Independence. Foundational statement of American political philosophy asserting natural rights and government legitimacy through consent.',
    sourceUrl: 'https://www.archives.gov/founding-docs/declaration-transcript',
  },
]

export const gemstones: Gemstone[] = [
  {
    id: 'gemstone-001',
    name: 'Amethyst',
    type: 'crystal',
    mohs: 7,
    colors: ['Purple', 'Violet', 'Lilac'],
    formation: 'Hydrothermal: forms in gas cavities of volcanic rock when silica-rich water deposits quartz crystals with iron impurities.',
    whereFoundRegions: ['Brazil', 'Uruguay', 'Zambia', 'Arizona', 'North Carolina'],
    ethicalCollectingNotes: 'Ensure specimens are from legal claims. Many commercial mines offer ethical sourcing. Avoid removing from protected lands or Native sacred sites.',
    whereToBuyNotes: 'Reputable rock shops, gem shows, verified online dealers. Ask for origin and collection method. Ethical miners often provide documentation.',
    sources: [
      {
        title: 'Gemological Institute of America - Amethyst',
        url: 'https://www.gia.edu/amethyst',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'gemstone-002',
    name: 'Malachite',
    type: 'gem',
    mohs: 3.5,
    colors: ['Green', 'Banded'],
    formation: 'Secondary copper mineral formed in oxidation zones of copper deposits. Distinctive banding from rhythmic precipitation.',
    whereFoundRegions: ['Democratic Republic of Congo', 'Zambia', 'Arizona', 'Russia'],
    ethicalCollectingNotes: 'DRC malachite has significant ethical concerns around labor and conflict minerals. Seek suppliers with Responsible Minerals Initiative certification.',
    whereToBuyNotes: 'Verify source country. Arizona and Russian sources typically have clearer provenance. Contains copper, so avoid dust when cutting.',
    sources: [
      {
        title: 'Mindat - Malachite Localities',
        url: 'https://www.mindat.org/min-2550.html',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'gemstone-003',
    name: 'Labradorite',
    type: 'gem',
    mohs: 6,
    colors: ['Gray', 'Blue Flash', 'Gold Flash', 'Rainbow'],
    formation: 'Plagioclase feldspar formed in igneous rocks. Labradorescence (color flash) caused by light diffraction in internal lamellae.',
    whereFoundRegions: ['Labrador (Canada)', 'Madagascar', 'Finland', 'Oregon'],
    ethicalCollectingNotes: 'Most labradorite is commercially mined with minimal environmental impact. Madagascan sources support local economies.',
    whereToBuyNotes: 'Quality judged by strength and variety of flash. Best specimens show multiple colors. Often tumbled or carved into decorative objects.',
    sources: [
      {
        title: 'Gemological Institute of America - Labradorite',
        url: 'https://www.gia.edu/labradorite-description',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'gemstone-004',
    name: 'Quartz (Clear)',
    type: 'crystal',
    mohs: 7,
    colors: ['Clear', 'Colorless'],
    formation: 'Silicon dioxide crystallized from cooling magma or hydrothermal fluids. One of Earth\'s most common minerals.',
    whereFoundRegions: ['Arkansas', 'Brazil', 'Madagascar', 'Alps', 'Himalayas'],
    ethicalCollectingNotes: 'Abundant and widely available. Arkansas crystals can be legally collected at fee-dig mines. Respect private property and protected areas.',
    whereToBuyNotes: 'Crater of Diamonds State Park (Arkansas) allows visitors to keep finds. High-quality points valued for clarity and terminations.',
    sources: [
      {
        title: 'USGS - Quartz Mineral Summary',
        url: 'https://www.usgs.gov/centers/national-minerals-information-center/quartz',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'gemstone-005',
    name: 'Turquoise',
    type: 'gem',
    mohs: 5,
    colors: ['Blue', 'Green', 'Blue-Green'],
    formation: 'Hydrated copper aluminum phosphate formed in arid regions through weathering of copper deposits.',
    whereFoundRegions: ['Arizona', 'Nevada', 'New Mexico', 'Iran', 'China'],
    ethicalCollectingNotes: 'Many Southwest deposits are on tribal lands. Purchase only from Native-owned sources or verified ethical suppliers. Treated turquoise is common.',
    whereToBuyNotes: 'Natural, untreated turquoise is rare and valuable. Verify treatment status. Support Native artisans directly when possible.',
    sources: [
      {
        title: 'Gemological Institute of America - Turquoise',
        url: 'https://www.gia.edu/turquoise',
        retrievedAt: '2024-01-15',
      },
    ],
  },
]

export const meals: Meal[] = [
  {
    id: 'meal-001',
    mealName: 'Sunday Pot Roast',
    cuisineRegion: 'American Midwest',
    components: ['Chuck roast', 'Potatoes', 'Carrots', 'Onions', 'Beef gravy'],
    recipeText: 'Season 3-4 lb chuck roast with salt and pepper. Sear all sides in Dutch oven. Add quartered potatoes, large carrot chunks, and onion wedges. Add 2 cups beef stock. Cover and roast at 300°F for 3-4 hours until fork-tender. Make gravy from pan drippings.',
    historyNotes: 'Traditional Sunday dinner in farming communities. Slow cooking made tough, affordable cuts tender. Cooked while family attended church. Leftovers provided meals through the week.',
    variants: ['Add parsnips or turnips', 'Mississippi pot roast (pepperoncini + ranch)', 'Red wine braised version'],
    sources: [
      {
        title: 'Smithsonian - American Food History',
        url: 'https://www.si.edu/spotlight/american-food-history',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'meal-002',
    mealName: 'Chicken and Dumplings',
    cuisineRegion: 'Southern United States',
    components: ['Stewed chicken', 'Flat dumplings', 'Chicken stock', 'Vegetables', 'Cream sauce'],
    recipeText: 'Simmer whole chicken with celery, onion, and carrots until tender. Remove chicken, shred meat. Bring stock to boil. Drop in flat dumpling dough rectangles. Simmer 15-20 min. Add chicken back with cream.',
    historyNotes: 'Depression-era comfort food that stretched one chicken to feed many. Dumplings added substance. Southern style uses flat dumplings vs. Northern fluffy biscuit-style.',
    variants: ['Fluffy drop dumplings', 'Add peas', 'Use biscuit dough'],
    sources: [
      {
        title: 'Southern Foodways Alliance',
        url: 'https://www.southernfoodways.org/',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'meal-003',
    mealName: 'New England Clam Chowder',
    cuisineRegion: 'New England',
    components: ['Clams', 'Potatoes', 'Salt pork', 'Onions', 'Cream'],
    recipeText: 'Render diced salt pork. Sauté onions. Add diced potatoes and clam juice. Simmer until tender. Add chopped clams and heavy cream. Season with thyme, bay leaf. Never let boil after adding cream.',
    historyNotes: 'Colonial-era staple of coastal communities. Name from French "chaudière" (cauldron). Cream-based distinguishes from Manhattan (tomato) version. Oyster crackers traditional accompaniment.',
    variants: ['Manhattan clam chowder (tomato-based)', 'Rhode Island clear broth', 'Add corn'],
    sources: [
      {
        title: 'Library of Congress - American Regional Cooking',
        url: 'https://www.loc.gov/collections/american-folklife-center/',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'meal-004',
    mealName: 'Hoppin\' John',
    cuisineRegion: 'Lowcountry South Carolina',
    components: ['Black-eyed peas', 'Rice', 'Salt pork', 'Onions', 'Collard greens (side)'],
    recipeText: 'Cook black-eyed peas with ham hock or salt pork until tender. Sauté onions, add cooked rice and peas with cooking liquid. Simmer together. Traditionally served with collard greens and cornbread on New Year\'s Day for luck.',
    historyNotes: 'West African origins brought through enslaved people. Peas represent coins, greens represent dollars—eating on New Year\'s brings prosperity. Name origin debated: possibly from "hop in, John" or from pois à pigeon.',
    variants: ['Vegetarian with smoked paprika', 'Add bell peppers', 'Substitute field peas'],
    sources: [
      {
        title: 'Charleston Museum - Lowcountry Foodways',
        url: 'https://www.charlestonmuseum.org/',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'meal-005',
    mealName: 'Cornbread and Buttermilk',
    cuisineRegion: 'Appalachian',
    components: ['Cornbread', 'Buttermilk'],
    recipeText: 'Bake traditional cornbread in cast iron skillet: cornmeal, buttermilk, eggs, baking soda, salt. No sugar. Crumble warm cornbread into glass, pour cold buttermilk over. Eat with spoon. Simple, filling supper.',
    historyNotes: 'Staple meal when other food was scarce. Corn was reliable crop in mountain regions. Buttermilk byproduct of butter-making. Combination provides complete protein. Often eaten as light supper or breakfast.',
    variants: ['Add bacon grease to cornbread', 'Use sweet milk instead', 'Add honey'],
    sources: [
      {
        title: 'Appalachian Food Traditions',
        url: 'https://appalachianhistory.net/food/',
        retrievedAt: '2024-01-15',
      },
    ],
  },
]
