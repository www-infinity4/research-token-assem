import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Sparkle, Play, FilmSlate } from '@phosphor-icons/react'
import { AlienCoin, Song, Movie } from '@/lib/types'
import { getCoinEntity } from '@/lib/alienCoinGenerator'

interface CoinCardProps {
  coin: AlienCoin
}

export function CoinCard({ coin }: CoinCardProps) {
  const song = getCoinEntity('song', coin.items.find(i => i.category === 'song')?.entityId || '') as Song | undefined
  const movie = getCoinEntity('movie', coin.items.find(i => i.category === 'movie')?.entityId || '') as Movie | undefined

  const rarityColors = {
    standard: 'bg-secondary/20 text-secondary border-secondary/30',
    premium: 'bg-accent/20 text-accent border-accent/30',
    rare: 'bg-primary/20 text-primary border-primary/30',
    legendary: 'bg-gradient-to-r from-accent to-primary text-foreground border-accent',
  }

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
            </div>
          )}
          <CardHeader className="relative z-10">
            <div className="flex items-start justify-between gap-2 mb-2">
              <Badge className={`${rarityColors[coin.rarity]} uppercase text-xs font-[family-name:var(--font-orbitron)] font-bold border`}>
                {coin.rarity}
              </Badge>
              <div className="text-right">
                <div className="text-2xl font-bold text-accent font-[family-name:var(--font-orbitron)]">
                  ${coin.totalValue.toFixed(2)}
                </div>
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
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-2 border-primary/30">
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
                Value
              </div>
              <div className="text-4xl font-bold text-accent font-[family-name:var(--font-orbitron)]">
                ${coin.totalValue.toFixed(2)}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {song && (
            <Card className="bg-secondary/10 border-secondary/30">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Play size={20} className="text-secondary" weight="fill" />
                  <Badge variant="outline" className="font-[family-name:var(--font-orbitron)] text-xs">
                    MUSIC
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
                    Watch on YouTube
                  </a>
                )}
                <div className="text-right text-sm font-bold text-secondary font-[family-name:var(--font-orbitron)]">
                  +${song.value.toFixed(2)}
                </div>
              </CardContent>
            </Card>
          )}

          {movie && (
            <Card className="bg-accent/10 border-accent/30">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FilmSlate size={20} className="text-accent" weight="fill" />
                  <Badge variant="outline" className="font-[family-name:var(--font-orbitron)] text-xs">
                    CINEMA
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
                    Watch Trailer on YouTube
                  </a>
                )}
                <div className="text-right text-sm font-bold text-accent font-[family-name:var(--font-orbitron)]">
                  +${movie.value.toFixed(2)}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

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
