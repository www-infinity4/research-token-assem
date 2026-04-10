export interface Source {
  title: string
  url: string
  retrievedAt: string
}

export interface Song {
  id: string
  title: string
  artist: string
  year: number
  youtubeUrl?: string
  imageUrl?: string
  genreTags: string[]
  durationSec: number
  sources: Source[]
  context?: string
  value: number
}

export interface Movie {
  id: string
  title: string
  year: number
  youtubeUrl?: string
  imageUrl?: string
  runtimeMin: number
  rating: string
  sources: Source[]
  synopsis?: string
  value: number
}

export interface Tree {
  id: string
  commonName: string
  scientificName: string
  hardinessZones: string[]
  nativeRegions: string[]
  careNotes: string
  sources: Source[]
  ecologicalValue?: string
}

export interface PlantingLocation {
  id: string
  name: string
  region: string
  climateTags: string[]
  permitNotes: string
  sources: Source[]
  coordinates?: { lat: number; lng: number }
}

export interface TreatIdea {
  id: string
  name: string
  type: 'fruit' | 'vegetable' | 'dessert'
  originCountry: string
  seasonality: string
  whereToBuyNotes: string
  sources: Source[]
  flavorProfile?: string
}

export interface GreekGod {
  id: string
  name: string
  domain: string
  storyTitle: string
  storyText: string
  primarySourcesRefs: string
  secondarySources: Source[]
}

export interface Coin {
  id: string
  name: string
  issuerCountry: string
  denomination: string
  year: number
  mint: string
  mintage: number
  composition: string
  diameterMm: number
  coinTypeTags: string[]
  historyText: string
  collectorNotes: string
  whereToFindLinks: string[]
  sources: Source[]
}

export interface Quote {
  id: string
  speaker: string
  date: string
  quote: string
  context: string
  sourceUrl: string
}

export interface Gemstone {
  id: string
  name: string
  type: 'crystal' | 'gem'
  mohs: number
  colors: string[]
  formation: string
  whereFoundRegions: string[]
  ethicalCollectingNotes: string
  whereToBuyNotes: string
  sources: Source[]
}

export interface Meal {
  id: string
  mealName: string
  cuisineRegion: string
  components: string[]
  recipeText: string
  historyNotes: string
  variants: string[]
  sources: Source[]
}

export interface RadioStation {
  id: string
  name: string
  country: string
  city: string
  genre: string
  language: string
  streamUrl: string
  website?: string
  description: string
  frequency?: string
  established?: number
}

export interface AncientCivilization {
  id: string
  name: string
  period: string
  region: string
  storyTitle: string
  storyText: string
  significance: string
  artifacts: string[]
  sources: Source[]
}

export interface Poetry {
  id: string
  title: string
  poet: string
  year: number
  era: string
  text: string
  analysis: string
  significance: string
  sources: Source[]
}

export interface Equation {
  id: string
  name: string
  field: 'physics' | 'chemistry' | 'mathematics'
  formula: string
  description: string
  discoverer: string
  year: number
  applications: string[]
  significance: string
  sources: Source[]
}

export interface RareProp {
  id: string
  name: string
  category: string
  description: string
  movieAppearances: string[]
  historicalSignificance: string
  estimatedValue: string
  ebaySearchUrl: string
  lastRefreshed: string
  identificationTips: string
  sources: Source[]
}

export interface ChemistryEpisode {
  id: string
  title: string
  series: string
  season: number
  episode: number
  chemicalConcept: string
  description: string
  educationalValue: string
  youtubeUrl?: string
  sources: Source[]
}

export interface TokenItem {
  category: 'song' | 'movie' | 'tree' | 'location' | 'treat' | 'god' | 'coin' | 'quote' | 'gemstone' | 'meal' | 'radio' | 'civilization' | 'poetry' | 'equation' | 'prop' | 'chemistry'
  entityId: string
  displayOrder: number
}

export interface ResearchToken {
  id: string
  createdAt: string
  seed: string
  version: string
  title: string
  summary: string
  items: TokenItem[]
  reportHash: string
}

export interface Citation {
  section: string
  sourceTitle: string
  sourceUrl: string
  retrievedAt: string
  snippet?: string
}

export interface AlienCoin {
  id: string
  createdAt: string
  seed: string
  version: string
  title: string
  summary: string
  items: TokenItem[]
  reportHash: string
  totalValue: number
  imageUrl?: string
  rarity: 'standard' | 'premium' | 'rare' | 'legendary'
  ownerId: string
  treePlanted?: TreePlanting
}

export interface TreePlanting {
  coinId: string
  treeId: string
  plantedDate: string
  videoUrl?: string
  verified: boolean
  valueBoost: number
}

export interface MarketplaceListing {
  id: string
  coinId: string
  sellerId: string
  price: number
  isBlindTrade: boolean
  isPremium: boolean
  premiumJustification?: string
  listedAt: string
}

export interface UserWallet {
  userId: string
  balance: number
  coins: AlienCoin[]
  transactions: Transaction[]
}

export interface Transaction {
  id: string
  type: 'mint' | 'buy' | 'sell'
  coinId: string
  amount: number
  timestamp: string
  fromUserId?: string
  toUserId?: string
}
