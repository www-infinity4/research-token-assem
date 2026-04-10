# Planning Guide

An Alien Coin minting platform where each coin is backed by $1+ of real cultural value (songs, movies, books, experiences) that users can collect, trade, and spend. Think channel-surfing through quantum-connected content where every coin is a curated bundle worth real dollars.

**Experience Qualities**:
1. **Valuable** - Every coin is worth at least $1 backed by genuine cultural treasures (not 1920s forced content, but real gems)
2. **Tradeable** - Users can blind-trade at $1 or flag content to sell at premium prices based on rarity
3. **Magical** - Like quantum-welding TV channels and radio stations into collectible currency

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
A marketplace-driven application with user authentication, wallet management, coin minting, trading system, pricing mechanisms, and visual content displays. Requires persistent storage for user wallets, transaction history, and marketplace listings.

## Essential Features

### User Wallet & Authentication
- **Functionality**: GitHub login with personal wallet showing coin balance, minting history, and marketplace activity
- **Purpose**: Track ownership and enable trading between users
- **Trigger**: User clicks "Connect Wallet" or app loads with existing session
- **Progression**: User authenticates → Wallet loads from KV storage → Balance displays → Transaction history shown
- **Success criteria**: Persistent login, accurate balance tracking, transaction logs stored

### Alien Coin Minting Engine
- **Functionality**: Creates unique $1+ coins backed by real cultural value (songs, movies, books, experiences) with visual thumbnails and YouTube links
- **Purpose**: Turn channel-surfing into collectible currency
- **Trigger**: User clicks "Mint New Alien Coin" 
- **Progression**: User mints → Deterministic selection of premium content → Coin value calculated ($1 base) → Visual card generated with images → Added to wallet
- **Success criteria**: Each coin worth min $1, has unique visual identity, backed by real viewable content (1980s+ movies/music)

### Marketplace Trading System
- **Functionality**: Users can list coins for sale, blind-trade at $1, or flag premium content for higher prices
- **Purpose**: Create liquid market where value emerges from content quality
- **Trigger**: User selects coin from wallet and chooses "Trade" or "List for Sale"
- **Progression**: User selects coin → Chooses blind trade ($1) or premium listing → Sets price if premium → Listing appears in marketplace → Other users can purchase
- **Success criteria**: Trades execute instantly, wallet balances update, transaction history logged

### Content Value Display
- **Functionality**: Each coin shows rich media - YouTube embeds, movie posters, album art, book covers - so users see what they're getting
- **Purpose**: Transparency about what backs the $1+ value
- **Trigger**: User views coin details
- **Progression**: Coin selected → Images load → YouTube players embed → Links to sources provided
- **Success criteria**: Visual content loads quickly, YouTube links work, no forced 1920s content

### Coin Rarity & Premium Pricing
- **Functionality**: Users can flag coins as rare/premium and justify higher prices based on content quality
- **Purpose**: Market determines value beyond $1 floor
- **Trigger**: User creating marketplace listing
- **Progression**: User selects coin → Flags as premium → Writes justification → Sets price → Marketplace shows premium badge
- **Success criteria**: Premium coins visually distinct, pricing justified, buyers can see rationale

## Edge Case Handling

- **Missing Citations**: System flags incomplete sources and uses placeholder with "Citation Pending" note rather than omitting
- **Broken External Links**: Periodic validation checks links; dead links get archived alternatives or "Link Unavailable" notice
- **Incompatible Selections**: Constraint solver falls back to next best match if primary selection violates rules (e.g., tropical tree with arctic location)
- **Duplicate Token Seeds**: Hash collision detector ensures seeds are unique or appends salt
- **Empty Categories**: System requires minimum dataset before token generation is enabled; warns user if categories are under-populated
- **Invalid JSON Export**: Pre-validation ensures JSON structure before download; catches serialization errors
- **Report Rendering Failures**: Graceful degradation shows raw data if templating fails; error boundaries prevent total crash

## Design Direction

A vibrant, futuristic marketplace that feels like a cosmic bazaar where alien artifacts (coins) are traded. Visual richness with neon accents, holographic effects, and sci-fi aesthetics. Each coin should feel like a portal to another world of entertainment. Bold, energetic, and valuable - not stuffy or archival.

## Color Selection

A futuristic cosmic palette with electric energy and depth.

- **Primary Color**: Deep Space `oklch(0.15 0.08 280)` - Rich purple-black suggesting alien mystery
- **Secondary Colors**: 
  - Neon Plasma `oklch(0.75 0.22 320)` - Bright electric magenta for interactive elements
  - Cosmic Teal `oklch(0.65 0.18 200)` - Cool cyan-teal for accents and highlights
- **Accent Color**: Alien Gold `oklch(0.78 0.18 85)` - Warm golden-yellow for premium coins and value indicators
- **Foreground/Background Pairings**:
  - Neon Plasma on Deep Space - Ratio 7.2:1 ✓
  - Alien Gold on Deep Space - Ratio 8.5:1 ✓
  - White text on Neon Plasma - Ratio 5.1:1 ✓

## Font Selection

Bold, futuristic typefaces that communicate value and cosmic energy.

- **Primary Typeface**: Orbitron (display) - Geometric, sci-fi character for headings and coin names
- **Secondary Typeface**: Inter (sans-serif) - Clean, modern readability for body text and interface

**Typographic Hierarchy**:
- H1 (App Title): Orbitron Bold/48px/wide letter-spacing/0.05em
- H2 (Coin Names): Orbitron SemiBold/32px/normal letter-spacing
- H3 (Section Headers): Inter Bold/20px/0.01em letter-spacing
- Body Text: Inter Regular/16px/1.5 line-height
- Coin Values: Orbitron Medium/24px (for $ amounts)
- Metadata: Inter Medium/14px

## Animations

High-energy, cosmic animations that make interactions feel valuable and exciting. Coin minting should have a "materialization" effect with particles and glow (500ms). Marketplace listings should float in with staggered reveals (150ms stagger). Hover states should have subtle 3D lift with glow effects. Value counters should animate upward when balance changes. Premium coins should have a subtle pulsing glow. All interactions should feel weighty and premium.

## Component Selection

- **Components**:
  - `Card` with gradient borders and glow effects for coins
  - `Avatar` for user profile display
  - `Badge` for coin rarity indicators (Standard/$1, Premium, Rare, etc.)
  - `Button` with neon glow hover states
  - `Dialog` for coin detail views and trading
  - `Tabs` for wallet/marketplace navigation
  - `ScrollArea` for coin galleries
  - `Separator` with gradient treatment
  
- **Customizations**:
  - Coin card with image thumbnails, holographic border effect
  - Wallet balance display with animated counter
  - Marketplace grid with hover lift effects
  - Premium badge with pulsing glow animation
  - Trade confirmation dialog with value breakdown
  
- **States**:
  - Buttons: default (gradient), hover (glow elevation), active (pressed), disabled (dimmed)
  - Coin cards: resting (flat), hover (lift + glow), selected (border highlight)
  - Premium badges: pulsing glow animation on loop
  
- **Icon Selection**:
  - `Alien` (Phosphor) for coin/brand identity
  - `Wallet` for wallet view
  - `Storefront` for marketplace
  - `Lightning` for premium/rare coins
  - `Coins` for minting action
  - `ArrowsLeftRight` for trading
  - `Star` for featured/favorite coins
  
- **Spacing**:
  - Card padding: `p-6`
  - Grid gaps: `gap-6` for coin galleries
  - Section spacing: `space-y-8`
  
- **Mobile**:
  - Single column coin grid
  - Bottom navigation for wallet/marketplace tabs
  - Touch-optimized card sizes (min 160px height)
  - Simplified coin details view
