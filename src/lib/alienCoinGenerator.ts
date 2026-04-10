import type { AlienCoin, TokenItem } from './types'
import { modernSongs, modernMovies } from './alienCoinDatabase'

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
  if (totalValue >= 1.50) return 'legendary'
  if (totalValue >= 1.20) return 'rare'
  if (totalValue >= 1.05) return 'premium'
  return 'standard'
}

export async function mintAlienCoin(userId: string): Promise<AlienCoin> {
  const timestamp = new Date().toISOString()
  const seedBase = `${userId}-${Date.now()}-alien`
  const seed = simpleHash(seedBase)

  const selectedSong = selectFromArray(modernSongs, seed, 0)
  const selectedMovie = selectFromArray(modernMovies, seed, 1)

  const items: TokenItem[] = [
    { category: 'song', entityId: selectedSong.id, displayOrder: 1 },
    { category: 'movie', entityId: selectedMovie.id, displayOrder: 2 },
  ]

  const totalValue = selectedSong.value + selectedMovie.value + 0.25
  const rarity = determineRarity(totalValue)

  const title = `${selectedSong.artist} × ${selectedMovie.title.split(' ')[0]} Coin`
  const summary = `Contains "${selectedSong.title}" by ${selectedSong.artist} and ${selectedMovie.title} (${selectedMovie.year})`

  const reportContent = JSON.stringify({ items, timestamp, title })
  const reportHash = simpleHash(reportContent)

  const imageUrl = selectedMovie.imageUrl || selectedSong.imageUrl

  const coin: AlienCoin = {
    id: `alien-coin-${seed}`,
    createdAt: timestamp,
    seed,
    version: '1.0',
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
  if (category === 'song') {
    return modernSongs.find((s) => s.id === entityId)
  }
  if (category === 'movie') {
    return modernMovies.find((m) => m.id === entityId)
  }
  return undefined
}
