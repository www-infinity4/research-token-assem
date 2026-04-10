# Planning Guide

An Alien Coin minting platform where each coin is backed by $1+ of real cultural value (songs, movies, live radio, ancient wisdom, poetry, physics equations, rare collectible props, chemistry episodes, and more experiences) that users can collect, trade, and spend. Think channel-surfing through quantum-connected content where every coin is a curated bundle worth real dollars.

**Experience Qualities**:
1. **Valuable** - Every coin is worth at least $1+ backed by genuine cultural treasures across 14+ categories
2. **Tradeable** - Users can blind-trade at $1 or flag content to sell at premium prices based on rarity
3. **Magical** - Like quantum-welding TV channels, radio stations, ancient civilizations, and scientific knowledge into collectible currency

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
A marketplace-driven application with user authentication, wallet management, coin minting with 14+ content categories, live radio streaming, trading system, pricing mechanisms, tree planting verification with video AI, and visual content displays. Requires persistent storage for user wallets, transaction history, marketplace listings, and verified tree plantings.

## Essential Features

### User Wallet & Authentication
- **Functionality**: GitHub login with personal wallet showing coin balance, minting history, and marketplace activity
- **Purpose**: Track ownership and enable trading between users
- **Trigger**: User clicks "Connect Wallet" or app loads with existing session
- **Progression**: User authenticates → Wallet loads from KV storage → Balance displays → Transaction history shown
- **Success criteria**: Persistent login, accurate balance tracking, transaction logs stored

### Alien Coin Minting Engine v3.0
- **Functionality**: Creates unique $1+ coins backed by 14 content categories: songs, movies, live radio streams, ancient civilization stories, rare poetry, physics/chemistry equations, rare movie props with eBay links, chemistry TV episodes, tree planting guides, gemstones, meals, treats, collectible coins, and locations
- **Purpose**: Turn channel-surfing and knowledge discovery into collectible currency
- **Trigger**: User clicks "Mint New Alien Coin" 
- **Progression**: User mints → Deterministic selection from 14 premium content categories → Coin value calculated ($1.40+ base) → Visual card generated with images → Live radio player embedded → eBay links auto-refresh → Added to wallet
- **Success criteria**: Each coin worth min $1.40+, has unique visual identity, backed by real viewable/streamable/discoverable content

### Live Radio Integration
- **Functionality**: Each coin includes a live streaming radio station from around the world (BBC Radio 1, KEXP, FIP Paris, NTS London, Triple J, WFMU, etc.)
- **Purpose**: Provide continuous live entertainment value that never expires
- **Trigger**: User views coin details and clicks "Play Live" on radio player
- **Progression**: User opens coin → Sees radio station → Clicks play → Audio streams in browser → Volume controls → Station info displayed
- **Success criteria**: Radio streams work, volume controls responsive, no buffering issues, graceful error handling

### Ancient Civilization Stories
- **Functionality**: Each coin contains a unique story from ancient civilizations (Egypt, Mesopotamia, Maya, Indus Valley, China) with full historical context
- **Purpose**: Educational value and cultural enrichment
- **Trigger**: Viewing coin content tab
- **Progression**: User explores coin → Reads ancient story → Sees artifacts → Citations to museums/sources
- **Success criteria**: Stories are engaging, historically accurate, properly sourced

### Rare Poetry & Literature
- **Functionality**: Curated rare poetry from masters (William Carlos Williams, Ezra Pound, Mary Oliver, T.S. Eliot, Maya Angelou)
- **Purpose**: Literary value and artistic enrichment
- **Trigger**: Viewing coin content
- **Progression**: User reads poem → Analysis provided → Significance explained → Sources cited
- **Success criteria**: Poetry properly attributed, analysis insightful, sources academic

### Physics & Chemistry Equations
- **Functionality**: Famous equations (E=mc², Schrödinger, Ideal Gas Law, Maxwell's Equations, Nernst) with full explanations
- **Purpose**: Scientific education and intellectual value
- **Trigger**: Viewing coin content
- **Progression**: User sees equation → Reads description → Understands applications → Explores significance
- **Success criteria**: Equations accurate, explanations clear, applications relevant

### Rare Movie Props with eBay Integration
- **Functionality**: Collectible props from famous movies (Flux Capacitor, DeLorean clocks, vintage lab equipment, film cameras, Geiger counters) with auto-refreshing eBay search links
- **Purpose**: Collectible hunting and real-world acquisition paths
- **Trigger**: User views prop section
- **Progression**: User sees prop → Reads about movie appearances → Clicks eBay link → Fresh listings load → Can purchase if desired
- **Success criteria**: eBay links work, refresh timestamps current, identification tips helpful

### Chemistry & Physics TV Episodes
- **Functionality**: Educational episodes from Breaking Bad, Friends, Big Bang Theory showcasing real chemistry/physics concepts
- **Purpose**: Edutainment and science communication value
- **Trigger**: Viewing coin content
- **Progression**: User sees episode → Reads chemical concept → Understands educational value → Can watch via YouTube link
- **Success criteria**: Concepts explained accurately, entertainment value preserved, links functional

### Tree Planting Value Boost System
- **Functionality**: Users can plant the tree from their coin and verify with video to add $1.55 to coin value
- **Purpose**: Real-world environmental impact tied to digital value
- **Trigger**: User selects "Plant Tree" tab in coin details
- **Progression**: User plants tree → Records video → Submits URL → AI verifies planting → $1.55 added to coin → Total value updated → Transaction logged
- **Success criteria**: AI verification works, value updates persist, videos stored, fraudulent attempts rejected

### Marketplace Trading System
- **Functionality**: Users can list coins for sale, blind-trade at $1, or flag premium content for higher prices
- **Purpose**: Create liquid market where value emerges from content quality
- **Trigger**: User selects coin from wallet and chooses "Trade" or "List for Sale"
- **Progression**: User selects coin → Chooses blind trade ($1) or premium listing → Sets price if premium → Listing appears in marketplace → Other users can purchase
- **Success criteria**: Trades execute instantly, wallet balances update, transaction history logged

### Content Value Display
- **Functionality**: Each coin shows rich media - YouTube embeds, movie posters, album art, radio players, equation formulas, poetry text, eBay listings
- **Purpose**: Transparency about what backs the $1.40+ value
- **Trigger**: User views coin details
- **Progression**: Coin selected → Images load → YouTube players embed → Radio streams → eBay links clickable → Poetry readable → Equations displayed
- **Success criteria**: Visual content loads quickly, YouTube links work, radio streams play, eBay fresh

### Coin Rarity & Premium Pricing
- **Functionality**: Rarity determined by total value - Standard ($1.40-1.99), Premium ($2.00-2.49), Rare ($2.50-2.99), Legendary ($3.00+)
- **Purpose**: Market determines value beyond $1 floor based on content richness
- **Trigger**: Coin minting and tree planting verification
- **Progression**: Coin minted → Base value calculated → User plants tree → Value boosted → Rarity tier updated
- **Success criteria**: Rarity tiers accurate, visual distinction clear, value calculations correct

## Edge Case Handling

- **Missing Citations**: System flags incomplete sources and uses placeholder with "Citation Pending" note rather than omitting
- **Broken External Links**: Periodic validation checks links; dead links get archived alternatives or "Link Unavailable" notice
- **Radio Stream Failures**: Graceful error handling with retry logic and fallback to alternative streams when available
- **eBay Link Expiration**: Auto-refresh mechanism updates search URLs daily to ensure fresh listings
- **Tree Planting Fraud**: AI video verification rejects invalid submissions; manual review for edge cases
- **Incompatible Selections**: Constraint solver falls back to next best match if primary selection violates rules
- **Duplicate Token Seeds**: Hash collision detector ensures seeds are unique or appends salt
- **Empty Categories**: System requires minimum dataset (5+ items per category) before token generation is enabled
- **Invalid JSON Export**: Pre-validation ensures JSON structure before download
- **Report Rendering Failures**: Graceful degradation shows raw data if templating fails

## Design Direction

A vibrant, futuristic marketplace that feels like a cosmic bazaar where alien artifacts (coins) are traded. Visual richness with neon accents, holographic effects, and sci-fi aesthetics. Each coin should feel like a portal to another world of entertainment, knowledge, and culture. Bold, energetic, and valuable - not stuffy or archival. Radio players should feel like cosmic transmitters. Ancient stories should feel like archaeological discoveries. Equations should feel like universal secrets revealed.

## Color Selection

A futuristic cosmic palette with electric energy and depth.

- **Primary Color**: Deep Space `oklch(0.15 0.08 280)` - Rich purple-black suggesting alien mystery
- **Secondary Colors**: 
  - Neon Plasma `oklch(0.75 0.22 320)` - Bright electric magenta for interactive elements and radio players
  - Cosmic Teal `oklch(0.65 0.18 200)` - Cool cyan-teal for accents, ancient wisdom, and scientific content
- **Accent Color**: Alien Gold `oklch(0.78 0.18 85)` - Warm golden-yellow for premium coins, value indicators, and rare discoveries
- **Foreground/Background Pairings**:
  - Neon Plasma on Deep Space - Ratio 7.2:1 ✓
  - Alien Gold on Deep Space - Ratio 8.5:1 ✓
  - White text on Neon Plasma - Ratio 5.1:1 ✓

## Font Selection

Bold, futuristic typefaces that communicate value and cosmic energy.

- **Primary Typeface**: Orbitron (display) - Geometric, sci-fi character for headings, coin names, and radio station titles
- **Secondary Typeface**: Inter (sans-serif) - Clean, modern readability for body text, poetry, stories, and interface

**Typographic Hierarchy**:
- H1 (App Title): Orbitron Bold/48px/wide letter-spacing/0.05em
- H2 (Coin Names): Orbitron SemiBold/32px/normal letter-spacing
- H3 (Section Headers): Inter Bold/20px/0.01em letter-spacing
- H4 (Content Categories): Orbitron Medium/18px
- Body Text: Inter Regular/16px/1.5 line-height
- Poetry Text: Inter Regular/16px/1.7 line-height/italic
- Equations: Orbitron Regular/20px (for formulas)
- Coin Values: Orbitron Medium/24px (for $ amounts)
- Radio Info: Inter Medium/14px
- Metadata: Inter Medium/14px

## Animations

High-energy, cosmic animations that make interactions feel valuable and exciting. Coin minting should have a "materialization" effect with particles and glow (500ms). Marketplace listings should float in with staggered reveals (150ms stagger). Hover states should have subtle 3D lift with glow effects. Value counters should animate upward when balance changes. Premium coins should have a subtle pulsing glow. Radio play buttons should have a ripple effect. Tree planting verification should have a growth animation. All interactions should feel weighty and premium. eBay links should shimmer on hover to indicate freshness.

## Component Selection

- **Components**:
  - `Card` with gradient borders and glow effects for coins
  - `Dialog` for full coin details with tabbed content sections
  - `Tabs` for organizing 14 content categories (Overview, All Content, Plant Tree, Radio, etc.)
  - `Badge` for rarity tiers with gradient backgrounds for legendary items
  - `Button` with gradient fills for primary actions (Mint, Play Radio, Verify Planting)
  - `Slider` for radio volume controls with neon styling
  - Custom `RadioPlayer` component with live streaming and controls
  - `Accordion` for expandable content sections in research reports
  - `Input` for video URL submission with URL validation
  - `Separator` with glow effect between content sections
  - `Avatar` for user profiles in wallet
  - `Scroll Area` for long poetry and stories
  - Custom audio player with HTML5 audio element
- **Customizations**: 
  - Cards have animated backgrounds with radial gradients pulsing
  - Radio players have waveform visualizations (future enhancement)
  - Tree planting has progress indicators
  - eBay links have refresh timestamps
  - Coin cards show category count badges
- **States**: 
  - Buttons: hover glow, active press, disabled opacity, loading spinner
  - Radio: playing/paused states with icon swap, muted visual feedback
  - Inputs: focus ring with primary color, error state for invalid URLs
  - Cards: hover elevation, selected border glow
- **Icon Selection**: 
  - Phosphor Icons throughout (duotone weight for visual richness)
  - Radio = live broadcast, Play/Pause for controls
  - Tree = planting feature, VideoCamera = verification
  - Book/Scroll = ancient stories and poetry
  - MathOperations/Flask = equations and chemistry
  - ShoppingCart = eBay collectibles
  - Diamond/Coins = existing categories
- **Spacing**: 
  - Consistent 4px base unit
  - Card padding: 24px
  - Section gaps: 16px
  - Content margins: 24px vertical, 16px horizontal
- **Mobile**: 
  - Stacked layouts below 768px
  - Radio player controls simplified
  - Tabs become dropdown selector
  - Coin grid becomes single column
  - Dialog full-screen on mobile
  - Touch-friendly 44px minimum tap targets
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
