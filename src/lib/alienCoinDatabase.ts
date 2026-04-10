import type {
  Song,
  Movie,
  Tree,
  PlantingLocation,
  TreatIdea,
  Meal,
  Gemstone,
  Coin,
} from './types'

export const modernSongs: Song[] = [
  {
    id: 'song-001',
    title: 'Take On Me',
    artist: 'a-ha',
    year: 1985,
    youtubeUrl: 'https://www.youtube.com/watch?v=djV11Xbc914',
    imageUrl: 'https://i.ytimg.com/vi/djV11Xbc914/maxresdefault.jpg',
    genreTags: ['synth-pop', '80s', 'new wave'],
    durationSec: 225,
    value: 0.35,
    context: 'Iconic 80s synth-pop hit with groundbreaking rotoscope animation music video.',
    sources: [
      {
        title: 'a-ha - Take On Me (Official Video)',
        url: 'https://www.youtube.com/watch?v=djV11Xbc914',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'song-002',
    title: 'Sweet Child O\' Mine',
    artist: 'Guns N\' Roses',
    year: 1987,
    youtubeUrl: 'https://www.youtube.com/watch?v=1w7OgIMMRc4',
    imageUrl: 'https://i.ytimg.com/vi/1w7OgIMMRc4/maxresdefault.jpg',
    genreTags: ['rock', 'hard rock', '80s'],
    durationSec: 356,
    value: 0.40,
    context: 'Epic rock ballad with one of the most recognizable guitar riffs in history.',
    sources: [
      {
        title: 'Guns N\' Roses - Sweet Child O\' Mine (Official Music Video)',
        url: 'https://www.youtube.com/watch?v=1w7OgIMMRc4',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'song-003',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    year: 1983,
    youtubeUrl: 'https://www.youtube.com/watch?v=Zi_XLOBDo_Y',
    imageUrl: 'https://i.ytimg.com/vi/Zi_XLOBDo_Y/maxresdefault.jpg',
    genreTags: ['pop', 'funk', '80s'],
    durationSec: 294,
    value: 0.45,
    context: 'Legendary pop track that defined a generation with its moonwalk debut.',
    sources: [
      {
        title: 'Michael Jackson - Billie Jean (Official Video)',
        url: 'https://www.youtube.com/watch?v=Zi_XLOBDo_Y',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'song-004',
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    year: 1991,
    youtubeUrl: 'https://www.youtube.com/watch?v=hTWKbfoikeg',
    imageUrl: 'https://i.ytimg.com/vi/hTWKbfoikeg/maxresdefault.jpg',
    genreTags: ['grunge', 'rock', '90s'],
    durationSec: 301,
    value: 0.38,
    context: 'Generation-defining grunge anthem that revolutionized rock music in the 90s.',
    sources: [
      {
        title: 'Nirvana - Smells Like Teen Spirit (Official Music Video)',
        url: 'https://www.youtube.com/watch?v=hTWKbfoikeg',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'song-005',
    title: 'Thriller',
    artist: 'Michael Jackson',
    year: 1982,
    youtubeUrl: 'https://www.youtube.com/watch?v=sOnqjkJTMaA',
    imageUrl: 'https://i.ytimg.com/vi/sOnqjkJTMaA/maxresdefault.jpg',
    genreTags: ['pop', 'funk', '80s', 'horror'],
    durationSec: 357,
    value: 0.50,
    context: 'Most iconic music video ever made, transformed MTV and popular music.',
    sources: [
      {
        title: 'Michael Jackson - Thriller (Official 4K Video)',
        url: 'https://www.youtube.com/watch?v=sOnqjkJTMaA',
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
    nativeRegions: ['Eastern North America'],
    careNotes: 'Plant in full sun to partial shade. Tolerates various soil types but prefers well-drained soil. Water regularly until established. Blooms profuse pink-purple flowers in early spring before leaves emerge.',
    ecologicalValue: 'Excellent early spring nectar source for pollinators. Provides food for birds and butterflies. Nitrogen-fixing properties improve soil health.',
    sources: [
      { title: 'USDA Plant Database', url: 'https://plants.usda.gov/', retrievedAt: '2024-01-15' },
    ],
  },
  {
    id: 'tree-002',
    commonName: 'Flowering Dogwood',
    scientificName: 'Cornus florida',
    hardinessZones: ['5', '6', '7', '8', '9'],
    nativeRegions: ['Eastern United States'],
    careNotes: 'Prefers partial shade and acidic, well-drained soil. Mulch to keep roots cool. Four-season interest with spring flowers, summer foliage, fall color, and winter berries.',
    ecologicalValue: 'Critical food source for over 75 bird species. Berries high in fat content for migrating birds. Supports native butterflies and moths.',
    sources: [
      { title: 'Arbor Day Foundation', url: 'https://www.arborday.org/', retrievedAt: '2024-01-15' },
    ],
  },
  {
    id: 'tree-003',
    commonName: 'American Persimmon',
    scientificName: 'Diospyros virginiana',
    hardinessZones: ['4', '5', '6', '7', '8', '9'],
    nativeRegions: ['Southeastern United States'],
    careNotes: 'Adaptable to various soils. Drought-tolerant once established. Produces sweet, edible fruit after first frost. Plant both male and female trees for fruit production.',
    ecologicalValue: 'Fruit provides food for wildlife including deer, raccoons, and birds. Deep taproot prevents erosion and improves soil structure.',
    sources: [
      { title: 'Native Plant Society', url: 'https://www.wildflower.org/', retrievedAt: '2024-01-15' },
    ],
  },
]

export const plantingLocations: PlantingLocation[] = [
  {
    id: 'location-001',
    name: 'Community Park',
    region: 'Urban Green Space',
    climateTags: ['temperate', 'four-season'],
    permitNotes: 'Contact local parks department. Most municipalities encourage native tree planting in designated areas. Apply for free tree program or community planting events.',
    sources: [
      { title: 'TreeFolks Community Planting', url: 'https://www.treefolks.org/', retrievedAt: '2024-01-15' },
    ],
  },
  {
    id: 'location-002',
    name: 'Backyard Habitat',
    region: 'Private Residential',
    climateTags: ['varies-by-region'],
    permitNotes: 'No permit required for private property in most areas. Check HOA restrictions and utility line locations (call 811 before digging). Maintain 10ft clearance from structures.',
    sources: [
      { title: 'National Wildlife Federation Habitat', url: 'https://www.nwf.org/garden', retrievedAt: '2024-01-15' },
    ],
  },
]

export const treats: TreatIdea[] = [
  {
    id: 'treat-001',
    name: 'Pawpaw Fruit',
    type: 'fruit',
    originCountry: 'United States',
    seasonality: 'Late Summer to Early Fall',
    flavorProfile: 'Tropical banana-mango custard flavor with creamy texture. North America\'s largest native edible fruit, often called "poor man\'s banana."',
    whereToBuyNotes: 'Find at specialty farmers markets in September. Or forage from native trees in Eastern US forests (with permission). Can order online from specialty fruit suppliers.',
    sources: [
      { title: 'Kentucky State University Pawpaw Research', url: 'https://www.kysu.edu/', retrievedAt: '2024-01-15' },
    ],
  },
  {
    id: 'treat-002',
    name: 'Mayhaw Jelly',
    type: 'dessert',
    originCountry: 'United States',
    seasonality: 'Spring (berries May)',
    flavorProfile: 'Tart, cranberry-like flavor made into premium jelly. Southern delicacy from wetland hawthorn trees. Prized for unique flavor and limited availability.',
    whereToBuyNotes: 'Purchase from Southern artisan producers, especially Louisiana and Texas. Check specialty food shops or order from regional producers online.',
    sources: [
      { title: 'Southern Foodways Alliance', url: 'https://www.southernfoodways.org/', retrievedAt: '2024-01-15' },
    ],
  },
]

export const meals: Meal[] = [
  {
    id: 'meal-001',
    mealName: 'Country-Style Pot Roast with Vegetables',
    cuisineRegion: 'American Heartland',
    components: ['Chuck roast', 'Carrots', 'Potatoes', 'Onions', 'Beef gravy'],
    recipeText: 'Season 3-4lb chuck roast with salt and pepper. Sear all sides in Dutch oven. Add quartered potatoes, carrots, and onions. Pour in 2 cups beef broth. Cover and braise at 325°F for 3 hours until fork-tender. Make gravy from pan drippings.',
    historyNotes: 'Classic Sunday dinner tradition dating to homestead era. Slow-cooking tough cuts made affordable meat tender. One-pot meal conserved fuel and fed large families.',
    variants: ['Mississippi Pot Roast (add pepperoncini)', 'Yankee Pot Roast (add turnips)', 'French-style (with red wine)'],
    sources: [
      { title: 'Fannie Farmer Cookbook Archive', url: 'https://archive.org/', retrievedAt: '2024-01-15' },
    ],
  },
  {
    id: 'meal-002',
    mealName: 'Chicken and Dumplings',
    cuisineRegion: 'Southern United States',
    components: ['Whole chicken', 'Flour dumplings', 'Chicken stock', 'Vegetables', 'Cream'],
    recipeText: 'Simmer whole chicken with celery, onion, carrot until tender (90 min). Remove chicken, strain broth. Shred meat. Return broth to simmer. Drop spoonfuls of dumpling dough (flour, baking powder, milk, salt). Cover and steam 15 minutes. Add chicken back. Finish with cream.',
    historyNotes: 'Depression-era comfort food that stretched one chicken into hearty meal for families. Dumplings added bulk. Regional variations include rolled vs dropped dumplings.',
    variants: ['Rolled flat dumplings (Pennsylvania Dutch)', 'Drop biscuit style (Deep South)', 'Herb-infused (modern)'],
    sources: [
      { title: 'Southern Living Recipe Archive', url: 'https://www.southernliving.com/', retrievedAt: '2024-01-15' },
    ],
  },
]

export const gemstones: Gemstone[] = [
  {
    id: 'gem-001',
    name: 'Arkansas Quartz Crystal',
    type: 'crystal',
    mohs: 7,
    colors: ['Clear', 'White', 'Smoky'],
    formation: 'Hydrothermal crystals formed 300 million years ago in Ouachita Mountains. Recognized as Arkansas state mineral.',
    whereFoundRegions: ['Arkansas (Ouachita Mountains)', 'Hot Springs area'],
    ethicalCollectingNotes: 'Visit fee-dig crystal mines where you keep what you find. Mines like Wegner Crystal Mines and Ron Coleman Mining allow ethical collecting. Never collect from protected land without permission.',
    whereToBuyNotes: 'Purchase from Arkansas crystal mines directly, or reputable mineral shows. Expect $10-50 for nice specimens. Ensure sourced from legal dig sites.',
    sources: [
      { title: 'Arkansas Geological Survey', url: 'https://www.geology.arkansas.gov/', retrievedAt: '2024-01-15' },
    ],
  },
  {
    id: 'gem-002',
    name: 'Lake Superior Agate',
    type: 'gem',
    mohs: 6.5,
    colors: ['Red', 'Orange', 'Yellow', 'Brown banding'],
    formation: 'Volcanic activity 1.1 billion years ago. Iron oxidation creates striking red bands. Glaciers distributed them across Great Lakes region.',
    whereFoundRegions: ['Minnesota', 'Wisconsin', 'Michigan (Lake Superior shores)'],
    ethicalCollectingNotes: 'Collect from public beaches and gravel pits with permission. Minnesota state gemstone. Best hunting after storms expose new material.',
    whereToBuyNotes: 'Find at rock shops in Minnesota/Wisconsin. Prices range $5-100+ depending on size and banding. Look for authentic Great Lakes origin certification.',
    sources: [
      { title: 'Minnesota DNR Mineral Resources', url: 'https://www.dnr.state.mn.us/', retrievedAt: '2024-01-15' },
    ],
  },
]

export const coins: Coin[] = [
  {
    id: 'coin-001',
    name: '1916-D Mercury Dime',
    issuerCountry: 'United States',
    denomination: '10 cents',
    year: 1916,
    mint: 'Denver',
    mintage: 264000,
    composition: '90% Silver, 10% Copper',
    diameterMm: 17.9,
    coinTypeTags: ['key-date', 'low-mintage', 'mercury-dime'],
    historyText: 'First year of Mercury dime series designed by Adolph Weinman. Denver mint produced only 264,000 making it the key date of the series. Liberty wears winged cap symbolizing freedom of thought.',
    collectorNotes: 'Most valuable coin in Mercury dime series. Even well-worn examples valuable. Beware of counterfeits. Authenticate before purchasing. Values range from $1,000+ in Good condition to $30,000+ in Mint State.',
    whereToFindLinks: [
      'https://www.pcgs.com/coinfacts/coin/1916-d-10c/4906',
      'https://www.ngccoin.com/coin-explorer/mercury-dimes-1916-1945/',
    ],
    sources: [
      { title: 'PCGS CoinFacts', url: 'https://www.pcgs.com/', retrievedAt: '2024-01-15' },
    ],
  },
  {
    id: 'coin-002',
    name: '1909-S VDB Lincoln Cent',
    issuerCountry: 'United States',
    denomination: '1 cent',
    year: 1909,
    mint: 'San Francisco',
    mintage: 484000,
    composition: '95% Copper, 5% Tin and Zinc',
    diameterMm: 19,
    coinTypeTags: ['key-date', 'lincoln-cent', 'vdb', 'low-mintage'],
    historyText: 'First year of Lincoln cent. Designer Victor David Brenner\'s initials (VDB) on reverse caused controversy, leading to removal mid-year. San Francisco mint produced limited quantity before change.',
    collectorNotes: 'Holy grail for Lincoln cent collectors. Lowest mintage of VDB varieties. Check reverse for clear VDB initials at bottom. Values $700+ circulated, $1,500+ uncirculated. Most common date in search for valuable pennies.',
    whereToFindLinks: [
      'https://www.pcgs.com/coinfacts/coin/1909-s-vdb-1c/2426',
    ],
    sources: [
      { title: 'NGC Coin Explorer', url: 'https://www.ngccoin.com/', retrievedAt: '2024-01-15' },
    ],
  },
]

export const modernMovies: Movie[] = [
  {
    id: 'movie-001',
    title: 'Back to the Future',
    year: 1985,
    youtubeUrl: 'https://www.youtube.com/watch?v=qvsgGtivCgs',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    runtimeMin: 116,
    rating: 'PG',
    value: 0.40,
    synopsis: 'Marty McFly accidentally travels back to 1955 in a time-traveling DeLorean and must ensure his parents fall in love or he\'ll cease to exist. Quintessential 80s adventure that defined time-travel movies.',
    sources: [
      {
        title: 'Back to the Future - Trailer',
        url: 'https://www.youtube.com/watch?v=qvsgGtivCgs',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'movie-002',
    title: 'The Terminator',
    year: 1984,
    youtubeUrl: 'https://www.youtube.com/watch?v=k64P4l2Wmeg',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    runtimeMin: 107,
    rating: 'R',
    value: 0.38,
    synopsis: 'A cybor assassin is sent back in time to kill Sarah Connor, whose unborn son will lead humanity against machines. Revolutionary sci-fi action that launched a franchise.',
    sources: [
      {
        title: 'The Terminator - Trailer',
        url: 'https://www.youtube.com/watch?v=k64P4l2Wmeg',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'movie-003',
    title: 'The Matrix',
    year: 1999,
    youtubeUrl: 'https://www.youtube.com/watch?v=vKQi3bBA1y8',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
    runtimeMin: 136,
    rating: 'R',
    value: 0.45,
    synopsis: 'A hacker discovers reality is a simulation and joins a rebellion against machines. Groundbreaking action that revolutionized visual effects and philosophical sci-fi.',
    sources: [
      {
        title: 'The Matrix - Trailer',
        url: 'https://www.youtube.com/watch?v=vKQi3bBA1y8',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'movie-004',
    title: 'Blade Runner',
    year: 1982,
    youtubeUrl: 'https://www.youtube.com/watch?v=eogpIG53Cis',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    runtimeMin: 117,
    rating: 'R',
    value: 0.42,
    synopsis: 'A blade runner must pursue and terminate four replicants in dystopian Los Angeles. Visually stunning neo-noir that defined cyberpunk aesthetics.',
    sources: [
      {
        title: 'Blade Runner - Trailer',
        url: 'https://www.youtube.com/watch?v=eogpIG53Cis',
        retrievedAt: '2024-01-15',
      },
    ],
  },
  {
    id: 'movie-005',
    title: 'The Shining',
    year: 1980,
    youtubeUrl: 'https://www.youtube.com/watch?v=5Cb3ik6zP2I',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    runtimeMin: 146,
    rating: 'R',
    value: 0.40,
    synopsis: 'A family heads to an isolated hotel where an evil presence drives the father toward violence. Kubrick\'s masterpiece of psychological horror.',
    sources: [
      {
        title: 'The Shining - Trailer',
        url: 'https://www.youtube.com/watch?v=5Cb3ik6zP2I',
        retrievedAt: '2024-01-15',
      },
    ],
  },
]
