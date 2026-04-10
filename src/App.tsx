import { useState, useEffect } from 'react'
import { useKV } from '@github/spark/hooks'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Alien, Wallet, Storefront, Sparkle } from '@phosphor-icons/react'
import { AlienCoin } from '@/lib/types'
import { mintAlienCoin } from '@/lib/alienCoinGenerator'
import { CoinCard } from '@/components/CoinCard'
import { toast } from 'sonner'
import { motion } from 'framer-motion'

interface UserInfo {
  login: string
  avatarUrl: string
  email: string
  id: string
  isOwner: boolean
}

function App() {
  const [user, setUser] = useState<UserInfo | null>(null)
  const [walletCoins, setWalletCoins] = useKV<AlienCoin[]>('alien-coins-wallet', [])
  const [balance, setBalance] = useKV<number>('user-balance', 10.00)
  const [isMinting, setIsMinting] = useState(false)

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    try {
      const userData = await window.spark.user()
      if (userData) {
        setUser({ ...userData, id: String(userData.id) })
      }
    } catch (e) {
      console.error('Failed to load user', e)
    }
  }

  const handleMintCoin = async () => {
    if (!user) {
      toast.error('Please connect wallet to mint coins')
      return
    }

    setIsMinting(true)
    await new Promise(resolve => setTimeout(resolve, 1200))

    const newCoin = await mintAlienCoin(user.id)
    
    setWalletCoins((currentCoins = []) => [...currentCoins, newCoin])
    setBalance((currentBalance = 10) => currentBalance + newCoin.totalValue)
    
    setIsMinting(false)

    toast.success(`Alien Coin Minted! 🛸`, {
      description: `${newCoin.title} • $${newCoin.totalValue.toFixed(2)} value added`,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, oklch(0.65 0.18 200) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, oklch(0.75 0.22 320) 0%, transparent 50%)
          `
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto p-6">
        <header className="flex items-center justify-between mb-12 mt-8">
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Alien size={56} weight="duotone" className="text-primary" />
            </motion.div>
            <div>
              <h1 className="text-5xl font-bold text-foreground font-[family-name:var(--font-orbitron)] tracking-wider">
                ALIEN COIN
              </h1>
              <p className="text-sm text-muted-foreground font-[family-name:var(--font-inter)] mt-1">
                Quantum-Connected Cultural Currency
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {user && (
              <>
                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Wallet size={24} className="text-accent" />
                    <div>
                      <div className="text-xs text-muted-foreground font-[family-name:var(--font-inter)]">
                        Balance
                      </div>
                      <div className="text-2xl font-bold text-accent font-[family-name:var(--font-orbitron)]">
                        ${balance.toFixed(2)}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-primary/20">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={user.avatarUrl} />
                      <AvatarFallback>{user.login[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-semibold text-foreground font-[family-name:var(--font-inter)]">
                        {user.login}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {walletCoins.length} Coins
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </header>

        <Tabs defaultValue="mint" className="space-y-8">
          <TabsList className="bg-card/30 border border-border">
            <TabsTrigger value="mint" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-[family-name:var(--font-orbitron)]">
              <Sparkle className="mr-2" size={16} />
              MINT
            </TabsTrigger>
            <TabsTrigger value="wallet" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-[family-name:var(--font-orbitron)]">
              <Wallet className="mr-2" size={16} />
              WALLET
            </TabsTrigger>
            <TabsTrigger value="marketplace" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-[family-name:var(--font-orbitron)]">
              <Storefront className="mr-2" size={16} />
              MARKETPLACE
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mint" className="space-y-6">
            <Card className="bg-gradient-to-br from-card via-card to-primary/10 border-2 border-primary/30 shadow-2xl">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-orbitron)] text-3xl flex items-center gap-3">
                  <Sparkle size={32} className="text-accent" weight="duotone" />
                  Mint Alien Coin
                </CardTitle>
                <CardDescription className="font-[family-name:var(--font-inter)] text-base">
                  Create a unique coin backed by real cultural value. Each coin contains songs, movies, and experiences worth $1+ that you can keep or trade.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-secondary/20 p-4 rounded-lg border border-secondary/30">
                    <div className="text-2xl font-bold text-secondary font-[family-name:var(--font-orbitron)] mb-1">
                      $1.00+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Minimum Value
                    </div>
                  </div>
                  <div className="bg-accent/20 p-4 rounded-lg border border-accent/30">
                    <div className="text-2xl font-bold text-accent font-[family-name:var(--font-orbitron)] mb-1">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Real Content
                    </div>
                  </div>
                  <div className="bg-primary/20 p-4 rounded-lg border border-primary/30">
                    <div className="text-2xl font-bold text-primary font-[family-name:var(--font-orbitron)] mb-1">
                      ∞
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Unique Combos
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleMintCoin}
                  disabled={isMinting || !user}
                  size="lg"
                  className="w-full text-lg font-[family-name:var(--font-orbitron)] tracking-wider h-14 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80"
                >
                  {isMinting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Alien weight="duotone" size={24} />
                      </motion.div>
                      <span className="ml-2">MINTING...</span>
                    </>
                  ) : (
                    <>
                      <Alien weight="duotone" size={24} />
                      <span className="ml-2">MINT NEW COIN</span>
                    </>
                  )}
                </Button>

                {!user && (
                  <p className="text-center text-sm text-muted-foreground">
                    Wallet connected automatically via GitHub
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wallet" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-orbitron)]">
                  Your Collection
                </h2>
                <p className="text-muted-foreground font-[family-name:var(--font-inter)]">
                  {walletCoins.length} Alien Coins • ${balance.toFixed(2)} Total Value
                </p>
              </div>
              <Badge variant="outline" className="text-lg px-4 py-2 font-[family-name:var(--font-orbitron)]">
                {walletCoins.length} COINS
              </Badge>
            </div>

            {walletCoins.length === 0 ? (
              <Card className="bg-card/50 border-dashed border-2 border-muted-foreground/30">
                <CardContent className="py-16 text-center">
                  <Alien size={64} className="mx-auto mb-4 text-muted-foreground" weight="thin" />
                  <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-orbitron)]">
                    No Coins Yet
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Mint your first Alien Coin to start building your collection
                  </p>
                  <Button onClick={() => document.querySelector<HTMLButtonElement>('[value="mint"]')?.click()}>
                    <Sparkle className="mr-2" />
                    Go to Mint
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {walletCoins.map((coin, index) => (
                  <motion.div
                    key={coin.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CoinCard coin={coin} />
                  </motion.div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="marketplace" className="space-y-6">
            <Card className="bg-card/50 border-dashed border-2 border-muted-foreground/30">
              <CardContent className="py-16 text-center">
                <Storefront size={64} className="mx-auto mb-4 text-muted-foreground" weight="thin" />
                <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-orbitron)]">
                  Marketplace Coming Soon
                </h3>
                <p className="text-muted-foreground">
                  Trade coins with other collectors. Blind trade at $1 or set premium prices for rare finds.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App
