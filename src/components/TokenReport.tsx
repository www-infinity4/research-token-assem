import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Link } from '@phosphor-icons/react'
import type { ResearchToken, Song, Movie, Tree, PlantingLocation, TreatIdea, GreekGod, Coin, Quote, Gemstone, Meal } from '@/lib/types'
import { getEntityById } from '@/lib/tokenGenerator'

interface TokenReportProps {
  token: ResearchToken
}

export function TokenReport({ token }: TokenReportProps) {
  const song = getEntityById('song', token.items.find(i => i.category === 'song')?.entityId || '') as Song | undefined
  const movie = getEntityById('movie', token.items.find(i => i.category === 'movie')?.entityId || '') as Movie | undefined
  const tree = getEntityById('tree', token.items.find(i => i.category === 'tree')?.entityId || '') as Tree | undefined
  const location = getEntityById('location', token.items.find(i => i.category === 'location')?.entityId || '') as PlantingLocation | undefined
  const treat = getEntityById('treat', token.items.find(i => i.category === 'treat')?.entityId || '') as TreatIdea | undefined
  const god = getEntityById('god', token.items.find(i => i.category === 'god')?.entityId || '') as GreekGod | undefined
  const coin = getEntityById('coin', token.items.find(i => i.category === 'coin')?.entityId || '') as Coin | undefined
  const quote = getEntityById('quote', token.items.find(i => i.category === 'quote')?.entityId || '') as Quote | undefined
  const gemstone = getEntityById('gemstone', token.items.find(i => i.category === 'gemstone')?.entityId || '') as Gemstone | undefined
  const meal = getEntityById('meal', token.items.find(i => i.category === 'meal')?.entityId || '') as Meal | undefined

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="font-[family-name:var(--font-newsreader)] text-2xl font-bold mb-2">
          Full Research Report
        </h2>
        <p className="text-sm text-muted-foreground font-[family-name:var(--font-space)]">
          Expand sections to explore curated content with full citations and provenance
        </p>
      </div>

      <Accordion type="multiple" className="space-y-4">
        {song && (
          <AccordionItem value="song" className="border-2 border-border rounded-lg bg-card px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <Badge variant="secondary" className="font-[family-name:var(--font-space)] text-xs">
                  MUSIC
                </Badge>
                <span className="font-[family-name:var(--font-newsreader)] text-lg font-semibold">
                  {song.title} <span className="text-muted-foreground">by {song.artist}</span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Year</div>
                    <div className="font-[family-name:var(--font-newsreader)]">{song.year}</div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Duration</div>
                    <div className="font-[family-name:var(--font-newsreader)]">{Math.floor(song.durationSec / 60)}:{(song.durationSec % 60).toString().padStart(2, '0')}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Genre</div>
                    <div className="flex gap-2 flex-wrap">
                      {song.genreTags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                {song.context && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Context & Significance</h4>
                      <p className="font-[family-name:var(--font-newsreader)] leading-relaxed">{song.context}</p>
                    </div>
                  </>
                )}

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-3">Sources</h4>
                  <div className="space-y-2">
                    {song.archiveUrl && (
                      <a href={song.archiveUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-accent hover:underline">
                        <Link className="mt-0.5 flex-shrink-0" size={16} />
                        <span className="font-[family-name:var(--font-newsreader)]">Listen on Internet Archive</span>
                      </a>
                    )}
                    {song.sources.map((source, idx) => (
                      <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-accent hover:underline">
                        <Link className="mt-0.5 flex-shrink-0" size={16} />
                        <span className="font-[family-name:var(--font-newsreader)]">{source.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {movie && (
          <AccordionItem value="movie" className="border-2 border-border rounded-lg bg-card px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <Badge variant="secondary" className="font-[family-name:var(--font-space)] text-xs">
                  CINEMA
                </Badge>
                <span className="font-[family-name:var(--font-newsreader)] text-lg font-semibold">
                  {movie.title} <span className="text-muted-foreground">({movie.year})</span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Runtime</div>
                    <div className="font-[family-name:var(--font-newsreader)]">{movie.runtimeMin} minutes</div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Rating</div>
                    <div className="font-[family-name:var(--font-newsreader)]">{movie.rating}</div>
                  </div>
                </div>
                
                {movie.synopsis && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Synopsis</h4>
                      <p className="font-[family-name:var(--font-newsreader)] leading-relaxed">{movie.synopsis}</p>
                    </div>
                  </>
                )}

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-3">Watch & Learn</h4>
                  <div className="space-y-2">
                    {movie.archiveUrl && (
                      <a href={movie.archiveUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-accent hover:underline">
                        <Link className="mt-0.5 flex-shrink-0" size={16} />
                        <span className="font-[family-name:var(--font-newsreader)]">Watch on Internet Archive</span>
                      </a>
                    )}
                    {movie.sources.map((source, idx) => (
                      <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-accent hover:underline">
                        <Link className="mt-0.5 flex-shrink-0" size={16} />
                        <span className="font-[family-name:var(--font-newsreader)]">{source.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {tree && location && (
          <AccordionItem value="tree" className="border-2 border-border rounded-lg bg-card px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <Badge variant="secondary" className="font-[family-name:var(--font-space)] text-xs">
                  BOTANY
                </Badge>
                <span className="font-[family-name:var(--font-newsreader)] text-lg font-semibold">
                  {tree.commonName} <span className="text-muted-foreground">at {location.name}</span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Scientific Name</h4>
                  <p className="font-[family-name:var(--font-newsreader)] italic">{tree.scientificName}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Hardiness Zones</div>
                    <div className="flex gap-1 flex-wrap">
                      {tree.hardinessZones.map(zone => (
                        <Badge key={zone} variant="outline" className="text-xs">{zone}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Native Regions</div>
                    <div className="font-[family-name:var(--font-newsreader)]">{tree.nativeRegions.join(', ')}</div>
                  </div>
                </div>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Care Instructions</h4>
                  <p className="font-[family-name:var(--font-newsreader)] leading-relaxed">{tree.careNotes}</p>
                </div>

                {tree.ecologicalValue && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Ecological Value</h4>
                      <p className="font-[family-name:var(--font-newsreader)] leading-relaxed">{tree.ecologicalValue}</p>
                    </div>
                  </>
                )}

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Planting Location: {location.name}</h4>
                  <p className="font-[family-name:var(--font-newsreader)] text-sm mb-2"><strong>Region:</strong> {location.region}</p>
                  <p className="font-[family-name:var(--font-newsreader)] text-sm mb-3"><strong>Climate:</strong> {location.climateTags.join(', ')}</p>
                  <div className="bg-muted p-3 rounded text-sm">
                    <p className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Permit Notes</p>
                    <p className="font-[family-name:var(--font-newsreader)]">{location.permitNotes}</p>
                  </div>
                </div>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-3">Sources</h4>
                  <div className="space-y-2">
                    {[...tree.sources, ...location.sources].map((source, idx) => (
                      <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-accent hover:underline">
                        <Link className="mt-0.5 flex-shrink-0" size={16} />
                        <span className="font-[family-name:var(--font-newsreader)]">{source.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {treat && (
          <AccordionItem value="treat" className="border-2 border-border rounded-lg bg-card px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <Badge variant="secondary" className="font-[family-name:var(--font-space)] text-xs">
                  RARE TREAT
                </Badge>
                <span className="font-[family-name:var(--font-newsreader)] text-lg font-semibold">
                  {treat.name}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Type</div>
                    <div className="font-[family-name:var(--font-newsreader)] capitalize">{treat.type}</div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Origin</div>
                    <div className="font-[family-name:var(--font-newsreader)]">{treat.originCountry}</div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Seasonality</div>
                    <div className="font-[family-name:var(--font-newsreader)]">{treat.seasonality}</div>
                  </div>
                </div>

                {treat.flavorProfile && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Flavor Profile</h4>
                      <p className="font-[family-name:var(--font-newsreader)] leading-relaxed">{treat.flavorProfile}</p>
                    </div>
                  </>
                )}

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Where to Find</h4>
                  <p className="font-[family-name:var(--font-newsreader)] leading-relaxed">{treat.whereToBuyNotes}</p>
                </div>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-3">Sources</h4>
                  <div className="space-y-2">
                    {treat.sources.map((source, idx) => (
                      <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-accent hover:underline">
                        <Link className="mt-0.5 flex-shrink-0" size={16} />
                        <span className="font-[family-name:var(--font-newsreader)]">{source.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {god && (
          <AccordionItem value="god" className="border-2 border-border rounded-lg bg-card px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <Badge variant="secondary" className="font-[family-name:var(--font-space)] text-xs">
                  MYTHOLOGY
                </Badge>
                <span className="font-[family-name:var(--font-newsreader)] text-lg font-semibold">
                  {god.name} <span className="text-muted-foreground">· {god.domain}</span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-[family-name:var(--font-newsreader)] text-xl font-semibold mb-3">{god.storyTitle}</h4>
                  <p className="font-[family-name:var(--font-newsreader)] leading-relaxed">{god.storyText}</p>
                </div>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Primary Ancient Sources</h4>
                  <p className="font-[family-name:var(--font-newsreader)] text-sm italic">{god.primarySourcesRefs}</p>
                </div>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-3">Secondary Sources</h4>
                  <div className="space-y-2">
                    {god.secondarySources.map((source, idx) => (
                      <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-accent hover:underline">
                        <Link className="mt-0.5 flex-shrink-0" size={16} />
                        <span className="font-[family-name:var(--font-newsreader)]">{source.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {coin && (
          <AccordionItem value="coin" className="border-2 border-border rounded-lg bg-card px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <Badge variant="secondary" className="font-[family-name:var(--font-space)] text-xs">
                  NUMISMATICS
                </Badge>
                <span className="font-[family-name:var(--font-newsreader)] text-lg font-semibold">
                  {coin.name}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Denomination</div>
                    <div className="font-[family-name:var(--font-newsreader)]">{coin.denomination}</div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Year</div>
                    <div className="font-[family-name:var(--font-newsreader)]">{coin.year}</div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Mint</div>
                    <div className="font-[family-name:var(--font-newsreader)]">{coin.mint}</div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Mintage</div>
                    <div className="font-[family-name:var(--font-newsreader)]">{coin.mintage.toLocaleString()}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Composition</div>
                    <div className="font-[family-name:var(--font-newsreader)]">{coin.composition}</div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Diameter</div>
                    <div className="font-[family-name:var(--font-newsreader)]">{coin.diameterMm}mm</div>
                  </div>
                </div>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Historical Context</h4>
                  <p className="font-[family-name:var(--font-newsreader)] leading-relaxed">{coin.historyText}</p>
                </div>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Collector Notes</h4>
                  <p className="font-[family-name:var(--font-newsreader)] leading-relaxed">{coin.collectorNotes}</p>
                </div>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-3">Resources</h4>
                  <div className="space-y-2">
                    {coin.whereToFindLinks.map((link, idx) => (
                      <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-accent hover:underline">
                        <Link className="mt-0.5 flex-shrink-0" size={16} />
                        <span className="font-[family-name:var(--font-newsreader)]">{link}</span>
                      </a>
                    ))}
                    {coin.sources.map((source, idx) => (
                      <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-accent hover:underline">
                        <Link className="mt-0.5 flex-shrink-0" size={16} />
                        <span className="font-[family-name:var(--font-newsreader)]">{source.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {quote && (
          <AccordionItem value="quote" className="border-2 border-border rounded-lg bg-card px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <Badge variant="secondary" className="font-[family-name:var(--font-space)] text-xs">
                  PRESIDENTIAL QUOTE
                </Badge>
                <span className="font-[family-name:var(--font-newsreader)] text-lg font-semibold">
                  {quote.speaker} <span className="text-muted-foreground">· {quote.date}</span>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="space-y-4">
                <blockquote className="border-l-4 border-accent pl-4 italic font-[family-name:var(--font-newsreader)] text-lg leading-relaxed">
                  "{quote.quote}"
                </blockquote>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Historical Context</h4>
                  <p className="font-[family-name:var(--font-newsreader)] leading-relaxed">{quote.context}</p>
                </div>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-3">Source</h4>
                  <a href={quote.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-accent hover:underline">
                    <Link className="mt-0.5 flex-shrink-0" size={16} />
                    <span className="font-[family-name:var(--font-newsreader)]">{quote.sourceUrl}</span>
                  </a>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {gemstone && (
          <AccordionItem value="gemstone" className="border-2 border-border rounded-lg bg-card px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <Badge variant="secondary" className="font-[family-name:var(--font-space)] text-xs">
                  MINERALOGY
                </Badge>
                <span className="font-[family-name:var(--font-newsreader)] text-lg font-semibold">
                  {gemstone.name}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Type</div>
                    <div className="font-[family-name:var(--font-newsreader)] capitalize">{gemstone.type}</div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Mohs Hardness</div>
                    <div className="font-[family-name:var(--font-newsreader)]">{gemstone.mohs}</div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Colors</div>
                    <div className="font-[family-name:var(--font-newsreader)]">{gemstone.colors.join(', ')}</div>
                  </div>
                </div>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Formation</h4>
                  <p className="font-[family-name:var(--font-newsreader)] leading-relaxed">{gemstone.formation}</p>
                </div>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Where Found</h4>
                  <p className="font-[family-name:var(--font-newsreader)]">{gemstone.whereFoundRegions.join(', ')}</p>
                </div>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Ethical Collecting</h4>
                  <p className="font-[family-name:var(--font-newsreader)] leading-relaxed">{gemstone.ethicalCollectingNotes}</p>
                </div>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Where to Buy</h4>
                  <p className="font-[family-name:var(--font-newsreader)] leading-relaxed">{gemstone.whereToBuyNotes}</p>
                </div>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-3">Sources</h4>
                  <div className="space-y-2">
                    {gemstone.sources.map((source, idx) => (
                      <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-accent hover:underline">
                        <Link className="mt-0.5 flex-shrink-0" size={16} />
                        <span className="font-[family-name:var(--font-newsreader)]">{source.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        {meal && (
          <AccordionItem value="meal" className="border-2 border-border rounded-lg bg-card px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <Badge variant="secondary" className="font-[family-name:var(--font-space)] text-xs">
                  CULINARY HERITAGE
                </Badge>
                <span className="font-[family-name:var(--font-newsreader)] text-lg font-semibold">
                  {meal.mealName}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="space-y-4">
                <div>
                  <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-1">Region</div>
                  <div className="font-[family-name:var(--font-newsreader)]">{meal.cuisineRegion}</div>
                </div>

                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Components</h4>
                  <div className="flex gap-2 flex-wrap">
                    {meal.components.map(comp => (
                      <Badge key={comp} variant="outline">{comp}</Badge>
                    ))}
                  </div>
                </div>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Recipe</h4>
                  <p className="font-[family-name:var(--font-newsreader)] leading-relaxed">{meal.recipeText}</p>
                </div>

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Historical Notes</h4>
                  <p className="font-[family-name:var(--font-newsreader)] leading-relaxed">{meal.historyNotes}</p>
                </div>

                {meal.variants.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-2">Variants</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {meal.variants.map((variant, idx) => (
                          <li key={idx} className="font-[family-name:var(--font-newsreader)]">{variant}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                <Separator />
                <div>
                  <h4 className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground mb-3">Sources</h4>
                  <div className="space-y-2">
                    {meal.sources.map((source, idx) => (
                      <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-accent hover:underline">
                        <Link className="mt-0.5 flex-shrink-0" size={16} />
                        <span className="font-[family-name:var(--font-newsreader)]">{source.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>
    </div>
  )
}
