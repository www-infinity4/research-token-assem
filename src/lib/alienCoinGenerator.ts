import type { AlienCoin, TokenItem, Movie } from './types'
import {
  modernSongs,
  movies,
  trees,
  plantingLocations,
  treats,
  meals,
  gemstones,
  coins,
  radioStations,
  ancientCivilizations,
  poetry,
  equations,
  rareProps,
  chemistryEpisodes,
  presidentialQuotes,
} from './alienCoinDatabase'

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

async function getUsedItemIds(userId: string): Promise<Set<string>> {
  const allUsed = await window.spark.kv.get<string[]>(`used-items-${userId}`) || []
  return new Set(allUsed)
}

async function markItemsUsed(userId: string, itemIds: string[]): Promise<void> {
  const currentUsed = await window.spark.kv.get<string[]>(`used-items-${userId}`) || []
  const updated = [...new Set([...currentUsed, ...itemIds])]
  await window.spark.kv.set(`used-items-${userId}`, updated)
}

function selectFromArray<T extends { id: string }>(
  array: T[], 
  seed: string, 
  categoryIndex: number,
  usedIds: Set<string>
): T {
  const available = array.filter(item => !usedIds.has(item.id))
  
  if (available.length === 0) {
    const randomValue = seededRandom(seed, categoryIndex)
    const index = Math.floor(randomValue * array.length)
    return array[index]
  }
  
  const randomValue = seededRandom(seed, categoryIndex)
  const index = Math.floor(randomValue * available.length)
  return available[index]
}

function determineRarity(totalValue: number): 'standard' | 'premium' | 'rare' | 'legendary' {
  if (totalValue >= 2.50) return 'legendary'
  if (totalValue >= 2.00) return 'rare'
  if (totalValue >= 1.50) return 'premium'
  return 'standard'
}

export async function mintAlienCoin(userId: string): Promise<AlienCoin> {
  const timestamp = new Date().toISOString()
  const seedBase = `${userId}-${Date.now()}-alien`
  const seed = simpleHash(seedBase)

  const usedIds = await getUsedItemIds(userId)

  const selectedSong = selectFromArray(modernSongs, seed, 0, usedIds)
  const selectedMovie = selectFromArray(movies, seed, 1, usedIds)
  const selectedTree = selectFromArray(trees, seed, 2, usedIds)
  const selectedLocation = selectFromArray(plantingLocations, seed, 3, usedIds)
  const selectedTreat = selectFromArray(treats, seed, 4, usedIds)
  const selectedMeal = selectFromArray(meals, seed, 5, usedIds)
  const selectedGemstone = selectFromArray(gemstones, seed, 6, usedIds)
  const selectedCoin = selectFromArray(coins, seed, 7, usedIds)
  const selectedRadio = selectFromArray(radioStations, seed, 8, usedIds)
  const selectedCivilization = selectFromArray(ancientCivilizations, seed, 9, usedIds)
  const selectedPoetry = selectFromArray(poetry, seed, 10, usedIds)
  const selectedEquation = selectFromArray(equations, seed, 11, usedIds)
  const selectedProp = selectFromArray(rareProps, seed, 12, usedIds)
  const selectedChemistry = selectFromArray(chemistryEpisodes, seed, 13, usedIds)
  const selectedQuote = selectFromArray(presidentialQuotes, seed, 14, usedIds)

  await markItemsUsed(userId, [
    selectedSong.id,
    selectedMovie.id,
    selectedRadio.id,
    selectedTree.id,
    selectedLocation.id,
    selectedTreat.id,
    selectedMeal.id,
    selectedGemstone.id,
    selectedCoin.id,
    selectedCivilization.id,
    selectedPoetry.id,
    selectedEquation.id,
    selectedProp.id,
    selectedChemistry.id,
    selectedQuote.id,
  ])

  const items: TokenItem[] = [
    { category: 'song', entityId: selectedSong.id, displayOrder: 1 },
    { category: 'movie', entityId: selectedMovie.id, displayOrder: 2 },
    { category: 'radio', entityId: selectedRadio.id, displayOrder: 3 },
    { category: 'tree', entityId: selectedTree.id, displayOrder: 4 },
    { category: 'location', entityId: selectedLocation.id, displayOrder: 5 },
    { category: 'treat', entityId: selectedTreat.id, displayOrder: 6 },
    { category: 'meal', entityId: selectedMeal.id, displayOrder: 7 },
    { category: 'gemstone', entityId: selectedGemstone.id, displayOrder: 8 },
    { category: 'coin', entityId: selectedCoin.id, displayOrder: 9 },
    { category: 'civilization', entityId: selectedCivilization.id, displayOrder: 10 },
    { category: 'poetry', entityId: selectedPoetry.id, displayOrder: 11 },
    { category: 'equation', entityId: selectedEquation.id, displayOrder: 12 },
    { category: 'prop', entityId: selectedProp.id, displayOrder: 13 },
    { category: 'chemistry', entityId: selectedChemistry.id, displayOrder: 14 },
    { category: 'quote', entityId: selectedQuote.id, displayOrder: 15 },
  ]

  const totalValue = 
    selectedSong.value + 
    selectedMovie.value + 
    0.10 + 
    0.10 + 
    0.08 + 
    0.12 + 
    0.15 + 
    0.10 + 
    0.20 + 
    0.12 + 
    0.08 + 
    0.10 + 
    0.15 + 
    0.10

  const rarity = determineRarity(totalValue)

  const title = `${selectedMovie.title} × ${selectedSong.artist} Quantum Bundle`
  const summary = `Movie, music, live radio, ancient wisdom, rare poetry, presidential quote, physics/chemistry, collectible props, tree planting, gemstones, recipes & more - complete cultural quantum package worth $${totalValue.toFixed(2)}+`

  const reportContent = JSON.stringify({ items, timestamp, title })
  const reportHash = simpleHash(reportContent)

  const imageUrl = selectedMovie.imageUrl || selectedSong.imageUrl

  const coin: AlienCoin = {
    id: `alien-coin-${seed}`,
    createdAt: timestamp,
    seed,
    version: '3.0',
    title,
    summary,
    items,
    reportHash,
    totalValue: Number(totalValue.toFixed(2)),
    imageUrl,
    rarity,
    ownerId: userId,
  }

  return coin
}

export function getCoinEntity(category: string, entityId: string) {
  switch (category) {
    case 'song':
      return modernSongs.find((s) => s.id === entityId)
    case 'movie':
      return movies.find((m: Movie) => m.id === entityId)
    case 'tree':
      return trees.find((t) => t.id === entityId)
    case 'location':
      return plantingLocations.find((l) => l.id === entityId)
    case 'treat':
      return treats.find((t) => t.id === entityId)
    case 'meal':
      return meals.find((m) => m.id === entityId)
    case 'gemstone':
      return gemstones.find((g) => g.id === entityId)
    case 'coin':
      return coins.find((c) => c.id === entityId)
    case 'radio':
      return radioStations.find((r) => r.id === entityId)
    case 'civilization':
      return ancientCivilizations.find((c) => c.id === entityId)
    case 'poetry':
      return poetry.find((p) => p.id === entityId)
    case 'equation':
      return equations.find((e) => e.id === entityId)
    case 'prop':
      return rareProps.find((p) => p.id === entityId)
    case 'chemistry':
      return chemistryEpisodes.find((c) => c.id === entityId)
    case 'quote':
      return presidentialQuotes.find((q) => q.id === entityId)
    default:
      return undefined
  }
}
