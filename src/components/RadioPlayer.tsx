import { useState, useRef, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Play, Pause, SpeakerHigh, SpeakerSlash, Globe } from '@phosphor-icons/react'
import type { RadioStation } from '@/lib/types'

interface RadioPlayerProps {
  station: RadioStation
}

export function RadioPlayer({ station }: RadioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState([75])
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100
    }
  }, [volume])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    audioRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <Card className="bg-primary/10 border-primary/30">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Globe size={20} className="text-primary" weight="fill" />
              <Badge variant="outline" className="font-[family-name:var(--font-orbitron)] text-xs">
                LIVE RADIO STREAM
              </Badge>
            </div>
            <h4 className="font-[family-name:var(--font-orbitron)] text-xl font-bold mb-1">
              {station.name}
            </h4>
            <p className="text-sm text-muted-foreground mb-2">
              {station.city}, {station.country} • {station.genre}
            </p>
            {station.frequency && (
              <p className="text-xs text-muted-foreground">
                {station.frequency} {station.established && `• Est. ${station.established}`}
              </p>
            )}
          </div>
        </div>

        <p className="text-sm leading-relaxed">{station.description}</p>

        <div className="flex items-center gap-4">
          <Button
            size="lg"
            onClick={togglePlay}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
          >
            {isPlaying ? (
              <>
                <Pause size={20} weight="fill" />
                <span className="ml-2 font-[family-name:var(--font-orbitron)]">PAUSE</span>
              </>
            ) : (
              <>
                <Play size={20} weight="fill" />
                <span className="ml-2 font-[family-name:var(--font-orbitron)]">PLAY LIVE</span>
              </>
            )}
          </Button>

          <div className="flex items-center gap-2 flex-1">
            <Button
              size="sm"
              variant="ghost"
              onClick={toggleMute}
              className="px-2"
            >
              {isMuted ? (
                <SpeakerSlash size={20} />
              ) : (
                <SpeakerHigh size={20} />
              )}
            </Button>
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="flex-1"
              disabled={isMuted}
            />
            <span className="text-xs text-muted-foreground font-[family-name:var(--font-orbitron)] w-8">
              {volume[0]}%
            </span>
          </div>
        </div>

        {station.website && (
          <div className="pt-2 border-t border-border">
            <a
              href={station.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:underline font-[family-name:var(--font-inter)]"
            >
              Visit {station.name} Website →
            </a>
          </div>
        )}

        <audio
          ref={audioRef}
          src={station.streamUrl}
          preload="none"
          onError={() => {
            setIsPlaying(false)
          }}
        />
      </CardContent>
    </Card>
  )
}
