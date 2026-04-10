import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { ArrowsClockwise, DownloadSimple, Seal, BookOpen } from '@phosphor-icons/react'
import { generateToken } from '@/lib/tokenGenerator'
import type { ResearchToken } from '@/lib/types'
import { TokenReport } from '@/components/TokenReport'
import { toast } from 'sonner'

function App() {
  const [currentToken, setCurrentToken] = useKV<ResearchToken | null>('current-token', null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateToken = async () => {
    setIsGenerating(true)
    
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const user = await spark.user()
    const newToken = generateToken(user.id, 'general')
    setCurrentToken(newToken)
    setIsGenerating(false)
    
    toast.success('Research token generated', {
      description: 'Your unique knowledge bundle is ready.',
    })
  }

  const handleExportJSON = () => {
    if (!currentToken) return
    
    const json = JSON.stringify(currentToken, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `research-token-${currentToken.id}.json`
    a.click()
    URL.revokeObjectURL(url)
    
    toast.success('Token JSON exported', {
      description: 'Download started.',
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-6 md:p-8">
        <header className="text-center mb-12 mt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Seal size={48} weight="duotone" className="text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-[family-name:var(--font-newsreader)] tracking-tight">
              Research Token Archive
            </h1>
          </div>
          <p className="text-lg text-muted-foreground font-[family-name:var(--font-space)] uppercase tracking-wide text-sm">
            Content-Assembly Pipeline for Curated Knowledge
          </p>
        </header>

        {!currentToken ? (
          <Card className="bg-card border-2 border-border shadow-lg">
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-newsreader)] text-2xl">
                Generate Your Research Token
              </CardTitle>
              <CardDescription className="font-[family-name:var(--font-space)]">
                Create a unique, deterministic knowledge bundle assembled from nine curated categories: 
                music, cinema, botany, rare treats, mythology, numismatics, presidential quotes, mineralogy, and culinary heritage.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={handleGenerateToken} 
                disabled={isGenerating}
                size="lg"
                className="w-full md:w-auto font-[family-name:var(--font-space)] uppercase tracking-wider"
              >
                {isGenerating ? (
                  <>
                    <ArrowsClockwise className="animate-spin" />
                    Assembling...
                  </>
                ) : (
                  <>
                    <BookOpen />
                    Generate Research Token
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <Card className="bg-card border-2 border-border shadow-lg">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="font-[family-name:var(--font-space)] text-xs">
                        TOKEN
                      </Badge>
                      <span className="font-mono text-xs text-muted-foreground">
                        {currentToken.id}
                      </span>
                    </div>
                    <CardTitle className="font-[family-name:var(--font-newsreader)] text-3xl mb-2">
                      {currentToken.title}
                    </CardTitle>
                    <CardDescription className="font-[family-name:var(--font-newsreader)] text-base leading-relaxed">
                      {currentToken.summary}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      onClick={handleExportJSON}
                      variant="outline"
                      size="sm"
                      className="font-[family-name:var(--font-space)] uppercase tracking-wide text-xs"
                    >
                      <DownloadSimple />
                      Export JSON
                    </Button>
                    <Button 
                      onClick={handleGenerateToken}
                      variant="outline"
                      size="sm"
                      className="font-[family-name:var(--font-space)] uppercase tracking-wide text-xs"
                    >
                      <ArrowsClockwise />
                      Regenerate
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground tracking-wider mb-1">
                      Created
                    </div>
                    <div className="font-[family-name:var(--font-newsreader)]">
                      {new Date(currentToken.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground tracking-wider mb-1">
                      Version
                    </div>
                    <div className="font-[family-name:var(--font-newsreader)]">
                      {currentToken.version}
                    </div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space)] uppercase text-xs text-muted-foreground tracking-wider mb-1">
                      Report Hash
                    </div>
                    <div className="font-mono text-xs">
                      {currentToken.reportHash}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator className="my-8" />

            <TokenReport token={currentToken} />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
