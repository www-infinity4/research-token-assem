import type { ResearchToken, TokenItem } from './types'
import { songs, movies, trees, plantingLocations, treats, greekGods, coins, quotes, gemstones, meals } from './database'

function simpleHash(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return Math.abs(hash).toString(16)
}

function seededRandom(seed: string, index: number): number {
  const combined = seed + index.toString()
  let hash = 0
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  const x = Math.sin(Math.abs(hash)) * 10000
  return x - Math.floor(x)
}

function selectFromArray<T>(array: T[], seed: string, categoryIndex: number): T {
  const randomValue = seededRandom(seed, categoryIndex)
  const index = Math.floor(randomValue * array.length)
  return array[index]
}

function checkTreeLocationCompatibility(treeHardiness: string[], locationClimate: string[]): boolean {
  const climateMap: Record<string, string[]> = {
    'humid-continental': ['3', '4', '5', '6', '7'],
    'oceanic': ['5', '6', '7', '8', '9'],
    'humid-subtropical': ['6', '7', '8', '9', '10'],
    'temperate': ['4', '5', '6', '7', '8'],
  }

  for (const climate of locationClimate) {
    const zones = climateMap[climate]
    if (zones) {
      const hasMatch = treeHardiness.some(zone => zones.includes(zone))
      if (hasMatch) return true
    }
  }
  
  return treeHardiness.some(zone => 
    locationClimate.some(climate => climate.includes(zone))
  )
}

export function generateToken(userId?: string, theme?: string): ResearchToken {
  const timestamp = new Date().toISOString()
  const seedBase = `${userId || 'anonymous'}-${Date.now()}-${theme || 'general'}`
  const seed = simpleHash(seedBase)

  const selectedSong = selectFromArray(songs, seed, 0)
  const selectedMovie = selectFromArray(movies, seed, 1)
  const selectedTree = selectFromArray(trees, seed, 2)
  
  let selectedLocation = selectFromArray(plantingLocations, seed, 3)
  let locationAttempt = 0
  while (!checkTreeLocationCompatibility(selectedTree.hardinessZones, selectedLocation.climateTags) && locationAttempt < 10) {
    locationAttempt++
    selectedLocation = selectFromArray(plantingLocations, seed + locationAttempt, 3)
  }

  const selectedTreat = selectFromArray(treats, seed, 4)
  const selectedGod = selectFromArray(greekGods, seed, 5)
  const selectedCoin = selectFromArray(coins, seed, 6)
  const selectedQuote = selectFromArray(quotes, seed, 7)
  const selectedGemstone = selectFromArray(gemstones, seed, 8)
  const selectedMeal = selectFromArray(meals, seed, 9)

  const items: TokenItem[] = [
    { category: 'song', entityId: selectedSong.id, displayOrder: 1 },
    { category: 'movie', entityId: selectedMovie.id, displayOrder: 2 },
    { category: 'tree', entityId: selectedTree.id, displayOrder: 3 },
    { category: 'location', entityId: selectedLocation.id, displayOrder: 4 },
    { category: 'treat', entityId: selectedTreat.id, displayOrder: 5 },
    { category: 'god', entityId: selectedGod.id, displayOrder: 6 },
    { category: 'coin', entityId: selectedCoin.id, displayOrder: 7 },
    { category: 'quote', entityId: selectedQuote.id, displayOrder: 8 },
    { category: 'gemstone', entityId: selectedGemstone.id, displayOrder: 9 },
    { category: 'meal', entityId: selectedMeal.id, displayOrder: 10 },
  ]

  const title = `${selectedGod.name}'s ${selectedGemstone.name} Anthology`
  const summary = `A curated research bundle exploring ${selectedSong.title}, ${selectedMovie.title}, ${selectedTree.commonName} trees, ${selectedCoin.name}, and the wisdom of ${selectedQuote.speaker}.`

  const reportContent = JSON.stringify({ items, timestamp, title })
  const reportHash = simpleHash(reportContent)

  const token: ResearchToken = {
    id: `token-${seed}`,
    createdAt: timestamp,
    seed,
    version: '1.0',
    title,
    summary,
    items,
    reportHash,
  }

  return token
}

export function getEntityById(category: string, id: string) {
  switch (category) {
    case 'song':
      return songs.find(s => s.id === id)
    case 'movie':
      return movies.find(m => m.id === id)
    case 'tree':
      return trees.find(t => t.id === id)
    case 'location':
      return plantingLocations.find(l => l.id === id)
    case 'treat':
      return treats.find(t => t.id === id)
    case 'god':
      return greekGods.find(g => g.id === id)
    case 'coin':
      return coins.find(c => c.id === id)
    case 'quote':
      return quotes.find(q => q.id === id)
    case 'gemstone':
      return gemstones.find(g => g.id === id)
    case 'meal':
      return meals.find(m => m.id === id)
    default:
      return undefined
  }
}
