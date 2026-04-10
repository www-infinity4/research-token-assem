import type { AlienCoin, TokenItem } from './types'
import { modernSongs, modernMovies, trees, plantingLocations, treats, meals, gemstones, coins } from './alienCoinDatabase'

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

function determineRarity(totalValue: number): 'standard' | 'premium' | 'rare' | 'legendary' {
  if (totalValue >= 2.00) return 'legendary'
  if (totalValue >= 1.50) return 'rare'
  if (totalValue >= 1.20) return 'premium'
  return 'standard'
}

export async function mintAlienCoin(userId: string): Promise<AlienCoin> {
  const timestamp = new Date().toISOString()
  const seedBase = `${userId}-${Date.now()}-alien`
  const seed = simpleHash(seedBase)

  const selectedSong = selectFromArray(modernSongs, seed, 0)
  const selectedMovie = selectFromArray(modernMovies, seed, 1)
  const selectedTree = selectFromArray(trees, seed, 2)
  const selectedLocation = selectFromArray(plantingLocations, seed, 3)
  const selectedTreat = selectFromArray(treats, seed, 4)
  const selectedMeal = selectFromArray(meals, seed, 5)
  const selectedGemstone = selectFromArray(gemstones, seed, 6)
  const selectedCoin = selectFromArray(coins, seed, 7)

  const items: TokenItem[] = [
    { category: 'song', entityId: selectedSong.id, displayOrder: 1 },
    { category: 'movie', entityId: selectedMovie.id, displayOrder: 2 },
    { category: 'tree', entityId: selectedTree.id, displayOrder: 3 },
    { category: 'location', entityId: selectedLocation.id, displayOrder: 4 },
    { category: 'treat', entityId: selectedTreat.id, displayOrder: 5 },
    { category: 'meal', entityId: selectedMeal.id, displayOrder: 6 },
    { category: 'gemstone', entityId: selectedGemstone.id, displayOrder: 7 },
    { category: 'coin', entityId: selectedCoin.id, displayOrder: 8 },
  ]

  const totalValue = 
    selectedSong.value + 
    selectedMovie.value + 
    0.10 + 
    0.08 + 
    0.12 + 
    0.15 + 
    0.10 + 
    0.20

  const rarity = determineRarity(totalValue)

  const title = `${selectedMovie.title} × ${selectedSong.artist} Experience Bundle`
  const summary = `Full movie, hit song, tree planting guide, rare gemstone intel, collectible coin history, regional recipe, and exotic treat - a complete cultural experience package worth $${totalValue.toFixed(2)}+`

  const reportContent = JSON.stringify({ items, timestamp, title })
  const reportHash = simpleHash(reportContent)

  const imageUrl = selectedMovie.imageUrl || selectedSong.imageUrl

  const coin: AlienCoin = {
    id: `alien-coin-${seed}`,
    createdAt: timestamp,
    seed,
    version: '2.0',
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
      return modernMovies.find((m) => m.id === entityId)
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
    default:
      return undefined
  }
}
