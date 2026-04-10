# Alien Coin Database Expansion Status

## Overview
The application currently has limited database entries, causing repeated content. This document tracks what exists and what needs expansion.

## Current Status (as of latest update)

### ✅ COMPLETED EXPANSIONS

#### Songs (20+ entries)
- Mix of 60s-2000s iconic hits
- Michael Jackson, Queen, Beatles, Nirvana, etc.
- **STATUS:** Good variety, could add 50+ more

#### Movies (25+ entries)
- YouTube Free Movies (There Will Be Blood, Terminator, Back to the Future, etc.)
- Classic and modern films
- **STATUS:** Decent variety, works well

#### Rare Coins (12 entries)
- Created expandedCoins.ts with top 10 rare U.S. coins
- 1933 Double Eagle, 1794 Silver Dollar, 1913 Liberty Nickel, etc.
- **NEEDS:** 200+ MORE COINS (see expansion plan below)

#### Radio Stations (6 entries)
- BBC Radio 1, KEXP, NTS Radio, Worldwide FM, etc.
- **NEEDS:** 30-50 MORE STATIONS from different countries/genres

#### Ancient Civilizations (3 entries)
- Egypt, Mesopotamia, Indus Valley
- **NEEDS:** 20+ MORE (Maya, Aztec, Rome, Greece, China, etc.)

#### Poetry (3 entries)
- Robert Frost, Maya Angelou, Dylan Thomas
- **NEEDS:** 30+ MORE POEMS (Dickinson, Whitman, Poe, etc.)

#### Equations (4 entries)
- E=mc², Schrödinger, Navier-Stokes, Ideal Gas Law
- **NEEDS:** 20+ MORE equations (Maxwell's, Newton's Laws, etc.)

#### Rare Props (3 entries)
- Flux Capacitor, Hill Valley Clock, Vintage LED clocks
- **NEEDS:** 30+ MORE (lightsabers, Indy's whip, etc.)

#### Chemistry Episodes (5 entries)
- Breaking Bad, Julius Sumner Miller, Cosmos, Bill Nye
- **STATUS:** Good start, could add 10+ more

#### Presidential Quotes (10 entries)
- Roosevelt, Lincoln, FDR, JFK, etc.
- **STATUS:** Decent, could add 20+ more

### ❌ STILL NEED

1. **RARE GEMSTONES**: Currently only 2 - need 50+
   - Add rare minerals, crystals from different regions
   - Moldavite, Painite, Benitoite, Tanzanite, etc.

2. **MORE COINS**: Currently 12 - user wants 300+
   - See detailed expansion plan below

3. **MORE RADIO STATIONS**: Currently 6 - need global coverage
   - Add stations from Africa, Asia, South America
   - Jazz, Classical, World Music, Talk Radio

4. **MEALS DATABASE**: Currently 2 - user wants country-style cooking
   - Need 100+ regional American meals
   - Appalachian, Cajun, Southwestern, New England, etc.

5. **TREES**: Currently 3 - need 20+ native species
   - Add more native trees for different regions

6. **TREATS**: Currently 2 - need 30+ rare treats
   - Exotic fruits, regional specialties

## 🎯 PRIORITY: RARE COINS EXPANSION PLAN

### Target: 300 Rare Coins

#### Categories to Cover:

**U.S. Coins (150 coins)**
- Key Date Pennies: 1909-S VDB, 1914-D, 1922 No D, 1931-S, etc. (30 coins)
- Mercury Dimes: 1916-D, 1921, 1921-D, 1942/1, etc. (20 coins)
- Buffalo Nickels: 1913-S Type 2, 1918/7-D, 1937-D 3-Leg, etc. (15 coins)
- Washington Quarters: 1932-D, 1932-S, 1936-D, etc. (20 coins)
- Morgan Dollars: 1893-S, 1895, 1889-CC, etc. (30 coins)
- Peace Dollars: 1921, 1928, 1934-S, etc. (10 coins)
- Gold Coins: St. Gaudens, Indian Head, Liberty, etc. (15 coins)
- Modern Errors: 2004 Wisconsin Extra Leaf, 2005 Speared Bison, etc. (10 coins)

**World Coins (100 coins)**
- British: Sovereign, Penny Black era, etc. (20 coins)
- Canadian: 1911 Silver Dollar, etc. (10 coins)
- Mexican: 8 Reales, Libertad, etc. (10 coins)
- Roman: Denarius, Aureus, etc. (15 coins)
- Ancient Greek: Tetradrachm, Stater, etc. (15 coins)
- Chinese: Cash coins, Pandas, etc. (10 coins)
- Japanese: Yen, Mon, etc. (10 coins)
- European: Various rare editions (10 coins)

**Commemoratives & Special Issues (50 coins)**
- Olympics, Expos, Royal events, etc.

## Implementation Priority

1. **URGENT**: Add 50-100 more rare coins immediately
2. **HIGH**: Add 20+ more radio stations
3. **HIGH**: Add 30+ more gemstones
4. **MEDIUM**: Expand ancient civilizations to 20+
5. **MEDIUM**: Add 50+ more meals
6. **LOW**: Continue expanding all other categories

## How to Add Content

1. Edit `/src/lib/alienCoinDatabase.ts` - main database
2. Or create new expansion files like `/src/lib/expandedCoins.ts`
3. Import and merge in alienCoinGenerator.ts

## Notes

- All content needs YouTube URLs or Archive.org links where applicable
- eBay search URLs must be current (they auto-refresh in prop descriptions)
- Keep source citations accurate
- Ensure variety - no repeated artists/topics in close proximity
