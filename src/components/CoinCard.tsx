import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Sparkle, Play, FilmSlate, Tree, MapPin, Cookie, ForkKnife, Diamond, Coins, VideoCamera } from '@phosphor-icons/react'
import { AlienCoin, Song, Movie, Tree as TreeType, PlantingLocation, TreatIdea, Meal, Gemstone, Coin } from '@/lib/types'
import { getCoinEntity } from '@/lib/alienCoinGenerator'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { useKV } from '@github/spark/hooks'

interface CoinCardProps {
  coin: AlienCoin
  onValueUpdate?: () => void
}

export function CoinCard({ coin, onValueUpdate }: CoinCardProps) {
  const [isVerifying, setIsVerifying] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')
  const [allCoins, setAllCoins] = useKV<AlienCoin[]>('alien-coins-wallet', [])
  
  const song = getCoinEntity('song', coin.items.find(i => i.category === 'song')?.entityId || '') as Song | undefined
  const movie = getCoinEntity('movie', coin.items.find(i => i.category === 'movie')?.entityId || '') as Movie | undefined
  const tree = getCoinEntity('tree', coin.items.find(i => i.category === 'tree')?.entityId || '') as TreeType | undefined
  const location = getCoinEntity('location', coin.items.find(i => i.category === 'location')?.entityId || '') as PlantingLocation | undefined
  const treat = getCoinEntity('treat', coin.items.find(i => i.category === 'treat')?.entityId || '') as TreatIdea | undefined
  const meal = getCoinEntity('meal', coin.items.find(i => i.category === 'meal')?.entityId || '') as Meal | undefined
  const gemstone = getCoinEntity('gemstone', coin.items.find(i => i.category === 'gemstone')?.entityId || '') as Gemstone | undefined
  const collectibleCoin = getCoinEntity('coin', coin.items.find(i => i.category === 'coin')?.entityId || '') as Coin | undefined

  const rarityColors = {
    standard: 'bg-secondary/20 text-secondary border-secondary/30',
    premium: 'bg-accent/20 text-accent border-accent/30',
    rare: 'bg-primary/20 text-primary border-primary/30',
    legendary: 'bg-gradient-to-r from-accent to-primary text-foreground border-accent',
  }

  const handleVerifyPlanting = async () => {
    if (!videoUrl.trim()) {
      toast.error('Please provide a video URL')
      return
    }

    setIsVerifying(true)

    try {
      const prompt = window.spark.llmPrompt`You are verifying a tree planting video. The user provided this URL: ${videoUrl}

Analyze if this appears to be a legitimate tree planting video URL (YouTube, social media, cloud storage, etc.).

Respond with ONLY a JSON object in this exact format:
{
  "verified": true or false,
  "reason": "Brief explanation"
}

If the URL looks like a valid video link related to tree planting, set verified to true. Otherwise false.`

      const response = await window.spark.llm(prompt, 'gpt-4o-mini', true)
      const result = JSON.parse(response)

      if (result.verified) {
        const valueBoost = 1.55
        const newTotalValue = coin.totalValue + valueBoost

        setAllCoins((currentCoins = []) => 
          currentCoins.map(c => 
            c.id === coin.id
              ? {
                  ...c,
                  totalValue: newTotalValue,
                  treePlanted: {
                    coinId: coin.id,
                    treeId: tree?.id || '',
                    plantedDate: new Date().toISOString(),
                    videoUrl,
                    verified: true,
                    valueBoost,
                  },
                }
              : c
          )
        )

        toast.success('Tree Planting Verified! 🌳', {
          description: `+$${valueBoost.toFixed(2)} added to coin value. Total now: $${newTotalValue.toFixed(2)}`,
        })

        setVideoUrl('')
        onValueUpdate?.()
      } else {
        toast.error('Verification Failed', {
          description: result.reason || 'Could not verify tree planting from this video',
        })
      }
    } catch (error) {
      toast.error('Verification error. Please try again.')
    } finally {
      setIsVerifying(false)
    }
  }

  const currentValue = coin.treePlanted ? coin.totalValue : coin.totalValue
  const hasPlantingBonus = !!coin.treePlanted

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 border-2 border-primary/20 bg-gradient-to-br from-card to-card/50 backdrop-blur overflow-hidden group">
          {coin.imageUrl && (
            <div className="h-48 overflow-hidden relative">
              <img 
                src={coin.imageUrl} 
                alt={coin.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              {hasPlantingBonus && (
                <div className="absolute top-2 right-2 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Tree size={14} weight="fill" />
                  TREE PLANTED
                </div>
              )}
            </div>
          )}
          <CardHeader className="relative z-10">
            <div className="flex items-start justify-between gap-2 mb-2">
              <Badge className={`${rarityColors[coin.rarity]} uppercase text-xs font-[family-name:var(--font-orbitron)] font-bold border`}>
                {coin.rarity}
              </Badge>
              <div className="text-right">
                <div className="text-2xl font-bold text-accent font-[family-name:var(--font-orbitron)]">
                  ${currentValue.toFixed(2)}
                </div>
                {hasPlantingBonus && (
                  <div className="text-xs text-accent">+$1.55 boost!</div>
                )}
              </div>
            </div>
            <CardTitle className="font-[family-name:var(--font-orbitron)] text-lg leading-tight">
              {coin.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-2 font-[family-name:var(--font-inter)]">
              {coin.summary}
            </p>
            <div className="flex gap-2 mt-3 flex-wrap">
              <Badge variant="outline" className="text-xs"><Play size={12} className="mr-1" weight="fill" />Song</Badge>
              <Badge variant="outline" className="text-xs"><FilmSlate size={12} className="mr-1" weight="fill" />Movie</Badge>
              <Badge variant="outline" className="text-xs"><Tree size={12} className="mr-1" weight="fill" />Tree</Badge>
              <Badge variant="outline" className="text-xs"><ForkKnife size={12} className="mr-1" weight="fill" />Meal</Badge>
              <Badge variant="outline" className="text-xs"><Gem size={12} className="mr-1" weight="fill" />Gem</Badge>
              <Badge variant="outline" className="text-xs"><Coins size={12} className="mr-1" weight="fill" />Coin</Badge>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-card border-2 border-primary/30">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <Badge className={`${rarityColors[coin.rarity]} uppercase text-xs font-[family-name:var(--font-orbitron)] font-bold border mb-2`}>
                {coin.rarity}
              </Badge>
              <DialogTitle className="font-[family-name:var(--font-orbitron)] text-3xl mb-2">
                {coin.title}
              </DialogTitle>
              <p className="text-muted-foreground font-[family-name:var(--font-inter)]">
                {coin.summary}
              </p>
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground uppercase font-[family-name:var(--font-orbitron)]">
                Total Value
              </div>
              <div className="text-5xl font-bold text-accent font-[family-name:var(--font-orbitron)]">
                ${currentValue.toFixed(2)}
              </div>
              {hasPlantingBonus && (
                <Badge className="mt-2 bg-accent/20 text-accent border-accent">
                  <Tree size={14} className="mr-1" weight="fill" />
                  +$1.55 Tree Bonus
                </Badge>
              )}
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">All Content</TabsTrigger>
            <TabsTrigger value="plant-tree">
              <Tree className="mr-2" size={16} weight="fill" />
              Plant Tree
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {song && (
                <Card className="bg-secondary/10 border-secondary/30">
                  <CardContent className="p-4 text-center">
                    <Play size={32} className="mx-auto mb-2 text-secondary" weight="fill" />
                    <div className="text-sm font-bold font-[family-name:var(--font-orbitron)]">{song.title}</div>
                    <div className="text-xs text-muted-foreground">{song.artist}</div>
                    <div className="text-xs font-bold text-secondary mt-2">+${song.value.toFixed(2)}</div>
                  </CardContent>
                </Card>
              )}
              {movie && (
                <Card className="bg-accent/10 border-accent/30">
                  <CardContent className="p-4 text-center">
                    <FilmSlate size={32} className="mx-auto mb-2 text-accent" weight="fill" />
                    <div className="text-sm font-bold font-[family-name:var(--font-orbitron)]">{movie.title}</div>
                    <div className="text-xs text-muted-foreground">{movie.year}</div>
                    <div className="text-xs font-bold text-accent mt-2">+${movie.value.toFixed(2)}</div>
                  </CardContent>
                </Card>
              )}
              {tree && (
                <Card className="bg-primary/10 border-primary/30">
                  <CardContent className="p-4 text-center">
                    <Tree size={32} className="mx-auto mb-2 text-primary" weight="fill" />
                    <div className="text-sm font-bold font-[family-name:var(--font-orbitron)]">{tree.commonName}</div>
                    <div className="text-xs text-muted-foreground">Native Tree</div>
                    <div className="text-xs font-bold text-primary mt-2">+$0.10</div>
                  </CardContent>
                </Card>
              )}
              {meal && (
                <Card className="bg-secondary/10 border-secondary/30">
                  <CardContent className="p-4 text-center">
                    <ForkKnife size={32} className="mx-auto mb-2 text-secondary" weight="fill" />
                    <div className="text-sm font-bold font-[family-name:var(--font-orbitron)]">{meal.mealName}</div>
                    <div className="text-xs text-muted-foreground">{meal.cuisineRegion}</div>
                    <div className="text-xs font-bold text-secondary mt-2">+$0.15</div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Play size={16} weight="fill" className="text-secondary" />
                    <span className="font-bold">Premium Music</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <FilmSlate size={16} weight="fill" className="text-accent" />
                    <span className="font-bold">Full Feature Film</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Tree size={16} weight="fill" className="text-primary" />
                    <span className="font-bold">Tree Planting Guide</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Cookie size={16} weight="fill" className="text-accent" />
                    <span className="font-bold">Rare Treat Intel</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ForkKnife size={16} weight="fill" className="text-secondary" />
                    <span className="font-bold">Regional Recipe</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Gem size={16} weight="fill" className="text-primary" />
                    <span className="font-bold">Gemstone History</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Coins size={16} weight="fill" className="text-accent" />
                    <span className="font-bold">Collectible Coin Info</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} weight="fill" className="text-secondary" />
                    <span className="font-bold">Planting Location</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6 mt-6">
            {song && (
              <Card className="bg-secondary/10 border-secondary/30">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Play size={20} className="text-secondary" weight="fill" />
                    <Badge variant="outline" className="font-[family-name:var(--font-orbitron)] text-xs">
                      MUSIC · ${song.value.toFixed(2)}
                    </Badge>
                  </div>
                  <CardTitle className="font-[family-name:var(--font-inter)] text-xl">
                    {song.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    by {song.artist} ({song.year})
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {song.imageUrl && (
                    <img 
                      src={song.imageUrl} 
                      alt={song.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  )}
                  {song.context && (
                    <p className="text-sm text-foreground/80">
                      {song.context}
                    </p>
                  )}
                  <div className="flex gap-2 flex-wrap">
                    {song.genreTags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {song.youtubeUrl && (
                    <a 
                      href={song.youtubeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                    >
                      <Sparkle size={16} />
                      Listen on YouTube
                    </a>
                  )}
                </CardContent>
              </Card>
            )}

            {movie && (
              <Card className="bg-accent/10 border-accent/30">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <FilmSlate size={20} className="text-accent" weight="fill" />
                    <Badge variant="outline" className="font-[family-name:var(--font-orbitron)] text-xs">
                      CINEMA · ${movie.value.toFixed(2)}
                    </Badge>
                  </div>
                  <CardTitle className="font-[family-name:var(--font-inter)] text-xl">
                    {movie.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {movie.year} • {movie.runtimeMin} min • {movie.rating}
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {movie.imageUrl && (
                    <img 
                      src={movie.imageUrl} 
                      alt={movie.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  )}
                  {movie.synopsis && (
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {movie.synopsis}
                    </p>
                  )}
                  {movie.youtubeUrl && (
                    <a 
                      href={movie.youtubeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                    >
                      <Sparkle size={16} />
                      Watch on YouTube
                    </a>
                  )}
                </CardContent>
              </Card>
            )}

            {tree && location && (
              <Card className="bg-primary/10 border-primary/30">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Tree size={20} className="text-primary" weight="fill" />
                    <Badge variant="outline" className="font-[family-name:var(--font-orbitron)] text-xs">
                      TREE PLANTING · $0.10
                    </Badge>
                  </div>
                  <CardTitle className="font-[family-name:var(--font-inter)] text-xl">
                    {tree.commonName}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground italic">
                    {tree.scientificName}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-bold text-sm mb-2">Care Instructions</h4>
                    <p className="text-sm">{tree.careNotes}</p>
                  </div>
                  {tree.ecologicalValue && (
                    <div>
                      <h4 className="font-bold text-sm mb-2">Ecological Value</h4>
                      <p className="text-sm">{tree.ecologicalValue}</p>
                    </div>
                  )}
                  <div className="bg-muted/50 p-4 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={16} weight="fill" />
                      <h4 className="font-bold text-sm">Plant Location: {location.name}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{location.region} • {location.climateTags.join(', ')}</p>
                    <p className="text-sm">{location.permitNotes}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {gemstone && (
              <Card className="bg-primary/10 border-primary/30">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Gem size={20} className="text-primary" weight="fill" />
                    <Badge variant="outline" className="font-[family-name:var(--font-orbitron)] text-xs">
                      GEMSTONE · $0.10
                    </Badge>
                  </div>
                  <CardTitle className="font-[family-name:var(--font-inter)] text-xl">
                    {gemstone.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm">{gemstone.formation}</p>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Ethical Collecting</h4>
                    <p className="text-sm">{gemstone.ethicalCollectingNotes}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Where to Buy</h4>
                    <p className="text-sm">{gemstone.whereToBuyNotes}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {treat && (
              <Card className="bg-accent/10 border-accent/30">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Cookie size={20} className="text-accent" weight="fill" />
                    <Badge variant="outline" className="font-[family-name:var(--font-orbitron)] text-xs">
                      RARE TREAT · $0.12
                    </Badge>
                  </div>
                  <CardTitle className="font-[family-name:var(--font-inter)] text-xl">
                    {treat.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {treat.flavorProfile && <p className="text-sm">{treat.flavorProfile}</p>}
                  <div>
                    <h4 className="font-bold text-sm mb-1">Where to Find</h4>
                    <p className="text-sm">{treat.whereToBuyNotes}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {meal && (
              <Card className="bg-secondary/10 border-secondary/30">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <ForkKnife size={20} className="text-secondary" weight="fill" />
                    <Badge variant="outline" className="font-[family-name:var(--font-orbitron)] text-xs">
                      RECIPE · $0.15
                    </Badge>
                  </div>
                  <CardTitle className="font-[family-name:var(--font-inter)] text-xl">
                    {meal.mealName}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{meal.cuisineRegion}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-bold text-sm mb-1">Recipe</h4>
                    <p className="text-sm">{meal.recipeText}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Historical Notes</h4>
                    <p className="text-sm">{meal.historyNotes}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {collectibleCoin && (
              <Card className="bg-accent/10 border-accent/30">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Coins size={20} className="text-accent" weight="fill" />
                    <Badge variant="outline" className="font-[family-name:var(--font-orbitron)] text-xs">
                      NUMISMATICS · $0.20
                    </Badge>
                  </div>
                  <CardTitle className="font-[family-name:var(--font-inter)] text-xl">
                    {collectibleCoin.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-bold">Year:</span> {collectibleCoin.year}
                    </div>
                    <div>
                      <span className="font-bold">Mint:</span> {collectibleCoin.mint}
                    </div>
                    <div>
                      <span className="font-bold">Mintage:</span> {collectibleCoin.mintage.toLocaleString()}
                    </div>
                    <div>
                      <span className="font-bold">Composition:</span> {collectibleCoin.composition}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">History</h4>
                    <p className="text-sm">{collectibleCoin.historyText}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Collector Notes</h4>
                    <p className="text-sm">{collectibleCoin.collectorNotes}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="plant-tree" className="space-y-6 mt-6">
            {hasPlantingBonus ? (
              <Card className="bg-accent/10 border-accent/30">
                <CardContent className="py-16 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-accent/20 p-6 rounded-full">
                      <Tree size={64} className="text-accent" weight="fill" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-[family-name:var(--font-orbitron)] text-accent">
                    Tree Already Planted! 🌳
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    You've earned the $1.55 value boost for planting this tree
                  </p>
                  <div className="bg-muted/50 p-4 rounded max-w-md mx-auto">
                    <p className="text-sm text-left">
                      <strong>Planted:</strong> {new Date(coin.treePlanted.plantedDate).toLocaleDateString()}<br />
                      <strong>Tree:</strong> {tree?.commonName}<br />
                      <strong>Value Boost:</strong> +${coin.treePlanted.valueBoost.toFixed(2)}
                    </p>
                    {coin.treePlanted.videoUrl && (
                      <a 
                        href={coin.treePlanted.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 text-sm text-accent hover:underline"
                      >
                        <VideoCamera size={16} />
                        View Verification Video
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-primary/10 border-primary/30">
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-orbitron)] text-2xl flex items-center gap-3">
                    <Tree size={32} className="text-primary" weight="fill" />
                    Plant Your Tree & Boost Value
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Plant the {tree?.commonName} from this coin and verify with video to add <span className="font-bold text-accent">+$1.55</span> to its value!
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                      Plant Your Tree
                    </h4>
                    <p className="text-sm mb-4">
                      Follow the care instructions for <strong>{tree?.commonName}</strong>. Plant at {location?.name} or similar location in your area.
                    </p>
                    
                    <h4 className="font-bold mb-3 flex items-center gap-2 mt-6">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                      Record Video Proof
                    </h4>
                    <p className="text-sm mb-4">
                      Film yourself planting the tree. Show the sapling, location, and planting process. Upload to YouTube, social media, or cloud storage.
                    </p>

                    <h4 className="font-bold mb-3 flex items-center gap-2 mt-6">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
                      Submit for Verification
                    </h4>
                    <p className="text-sm mb-4">
                      Paste your video URL below. Our AI will verify the planting and add $1.55 to your coin's value instantly.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-bold mb-2 block">Video URL</label>
                      <Input
                        type="url"
                        placeholder="https://youtube.com/watch?v=... or https://drive.google.com/..."
                        value={videoUrl}
                        onChange={(e) => setVideoUrl(e.target.value)}
                        className="font-[family-name:var(--font-inter)]"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        YouTube, Vimeo, Google Drive, Dropbox, or any public video link
                      </p>
                    </div>

                    <Button
                      onClick={handleVerifyPlanting}
                      disabled={isVerifying || !videoUrl.trim()}
                      size="lg"
                      className="w-full text-lg font-[family-name:var(--font-orbitron)] bg-gradient-to-r from-primary to-accent"
                    >
                      {isVerifying ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <VideoCamera size={24} />
                          </motion.div>
                          <span className="ml-2">VERIFYING...</span>
                        </>
                      ) : (
                        <>
                          <VideoCamera size={24} />
                          <span className="ml-2">VERIFY & ADD $1.55</span>
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="bg-accent/10 p-4 rounded border border-accent/30">
                    <h4 className="font-bold text-sm mb-2 text-accent">💰 Value Breakdown</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Current Value:</span>
                        <span className="font-bold">${coin.totalValue.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-accent">
                        <span>Tree Planting Bonus:</span>
                        <span className="font-bold">+$1.55</span>
                      </div>
                      <div className="border-t border-accent/30 pt-1 mt-1 flex justify-between">
                        <span className="font-bold">New Total:</span>
                        <span className="font-bold text-lg">${(coin.totalValue + 1.55).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-xs text-muted-foreground uppercase font-[family-name:var(--font-orbitron)] mb-1">
                Coin ID
              </div>
              <div className="font-mono text-xs break-all">
                {coin.id}
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase font-[family-name:var(--font-orbitron)] mb-1">
                Minted
              </div>
              <div className="font-[family-name:var(--font-inter)] text-xs">
                {new Date(coin.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
