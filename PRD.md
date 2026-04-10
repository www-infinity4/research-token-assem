# Planning Guide

A content-assembly pipeline that generates unique research tokens by curating knowledge from multiple databases, producing fully-expanded reports that serve as reading/experience bundles with verifiable provenance and citations.

**Experience Qualities**:
1. **Scholarly** - Every piece of information is sourced, cited, and verifiable through authoritative references
2. **Serendipitous** - Deterministic randomness creates unexpected but coherent combinations of content that spark curiosity
3. **Tangible** - Research feels like a physical artifact you can hold, export, and return to as reference material

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
This is a data-intensive application requiring sophisticated content assembly logic, multiple database simulations, citation management, deterministic token generation, and multi-format output (JSON + HTML report rendering). The system needs to handle cross-referencing between disparate knowledge domains while maintaining scholarly rigor.

## Essential Features

### Token Generation Engine
- **Functionality**: Assembles a unique research token by selecting one item from each curated category (song, movie, tree, planting location, treat, Greek god, coin, quote, gemstone, meal) using deterministic seed-based selection
- **Purpose**: Creates reproducible yet unique knowledge bundles that feel personally curated
- **Trigger**: User clicks "Generate Research Token" button with optional theme preference
- **Progression**: User selects theme → System generates deterministic seed → Algorithm selects items from each category → Token metadata created → Full report assembled → User sees preview
- **Success criteria**: Each token has unique ID, reproducible from seed, contains exactly one item per category, all items have valid citations

### Expandable Research Report Viewer
- **Functionality**: Displays full research report with collapsible sections for each content category, showing expanded information, historical context, care instructions, and citations
- **Purpose**: Transforms raw data into engaging narrative that educates and inspires action
- **Trigger**: Token generation completes or user views existing token
- **Progression**: Report loads → User sees summary card → Sections expand on click → Citations reveal on hover → External links open in new tabs
- **Success criteria**: All sections load with complete data, citations are accessible, external links work, content is formatted for readability

### Citation & Provenance System
- **Functionality**: Tracks and displays source attribution for every piece of information, linking to Internet Archive, academic sources, museum catalogs, and authoritative databases
- **Purpose**: Maintains scholarly integrity and allows users to verify information independently
- **Trigger**: User hovers over citation markers or scrolls to citations appendix
- **Progression**: User encounters content → Citation indicators visible → Click/hover shows source → External link opens reference
- **Success criteria**: Every factual claim has attributed source, links are functional, retrieval dates are shown

### Token JSON Export
- **Functionality**: Generates compact JSON file containing token metadata, selected item IDs, seed, creation timestamp, and report hash
- **Purpose**: Provides portable, machine-readable format for token ownership and verification
- **Trigger**: User clicks "Export Token JSON" button
- **Progression**: User views token → Clicks export → JSON downloads → File contains all metadata and hashes
- **Success criteria**: JSON is valid, contains all required fields, report hash matches generated content

### Multi-Category Content Database
- **Functionality**: Maintains curated datasets across 9+ categories with rich metadata, provenance, and cross-referencing capabilities
- **Purpose**: Provides the raw knowledge base from which tokens are assembled
- **Trigger**: System initialization and periodic updates
- **Progression**: App loads → Databases initialize → Content validated → Selection algorithms can query
- **Success criteria**: All categories have minimum 5+ items, metadata is complete, sources are documented

### Deterministic Selection Algorithm
- **Functionality**: Uses seed-based randomness with constraint checking to select compatible items across categories (e.g., tree hardiness matches planting location climate)
- **Purpose**: Creates coherent, meaningful combinations rather than random chaos
- **Trigger**: Token generation begins
- **Progression**: Seed generated → Each category evaluated with constraints → Compatible items selected → Validation checks run → Token finalized
- **Success criteria**: Selections are reproducible from same seed, constraints are honored, diversity is maintained

## Edge Case Handling

- **Missing Citations**: System flags incomplete sources and uses placeholder with "Citation Pending" note rather than omitting
- **Broken External Links**: Periodic validation checks links; dead links get archived alternatives or "Link Unavailable" notice
- **Incompatible Selections**: Constraint solver falls back to next best match if primary selection violates rules (e.g., tropical tree with arctic location)
- **Duplicate Token Seeds**: Hash collision detector ensures seeds are unique or appends salt
- **Empty Categories**: System requires minimum dataset before token generation is enabled; warns user if categories are under-populated
- **Invalid JSON Export**: Pre-validation ensures JSON structure before download; catches serialization errors
- **Report Rendering Failures**: Graceful degradation shows raw data if templating fails; error boundaries prevent total crash

## Design Direction

The design should evoke a rare book archive or natural history museum collection—scholarly, refined, and artifact-like. Users should feel they're handling something precious and meticulously researched, not consuming disposable digital content. The aesthetic balances academic seriousness with visual warmth, using archival tones and specimen-card layouts.

## Color Selection

A scholarly palette inspired by archival materials, aged parchment, and museum specimen displays.

- **Primary Color**: Deep Archive Ink `oklch(0.25 0.04 260)` - Rich navy-blue-black that communicates authority and permanence
- **Secondary Colors**: 
  - Aged Parchment `oklch(0.92 0.025 85)` - Warm off-white background suggesting old paper
  - Specimen Tag `oklch(0.78 0.04 75)` - Muted khaki-tan for secondary surfaces like cards
- **Accent Color**: Research Highlight `oklch(0.65 0.15 45)` - Warm amber-gold for citations and interactive elements, like highlighting in old texts
- **Foreground/Background Pairings**:
  - Primary on Parchment (Deep Archive Ink #2A2F45 on Aged Parchment #EEEBE5) - Ratio 12.8:1 ✓
  - Accent on Card (Research Highlight #C99950 on Specimen Tag #D5C9AE) - Ratio 4.9:1 ✓
  - Card Foreground (Dark Archive #3A3528 on Specimen Tag #D5C9AE) - Ratio 9.1:1 ✓

## Font Selection

Typography should feel like archival catalog cards and natural history publications—precise but human, academic but accessible.

- **Primary Typeface**: Newsreader (serif) - Elegant, highly legible book face with scholarly character for body text and headings
- **Secondary Typeface**: Space Grotesk (sans-serif) - Technical precision for metadata, IDs, and interface labels

**Typographic Hierarchy**:
- H1 (Token Title): Newsreader Bold/36px/tight letter-spacing/-0.02em
- H2 (Section Headers): Newsreader SemiBold/24px/normal letter-spacing
- H3 (Subsections): Space Grotesk Medium/16px/0.01em letter-spacing/uppercase
- Body Text: Newsreader Regular/16px/1.6 line-height
- Metadata Labels: Space Grotesk Regular/13px/0.05em letter-spacing/uppercase
- Citations: Newsreader Italic/14px/1.5 line-height

## Animations

Animations should feel like turning pages in a rare book or pulling open archival drawers—deliberate, weighty, and satisfying. Use spring physics with realistic resistance for interactive elements. Section expansions should unfold smoothly like accordions (300ms ease-out). Citation popovers should materialize with subtle scale and fade (200ms). The token generation process should show progressive reveal with staggered animations (100ms stagger per category). Avoid frivolous motion; every animation serves wayfinding or feedback.

## Component Selection

- **Components**:
  - `Card` with custom styling for artifact-like presentation (aged paper effect, subtle shadow)
  - `Accordion` for expandable report sections with custom chevron icons
  - `Button` with pressed states mimicking stamped labels
  - `Badge` for category tags and metadata chips
  - `Separator` for dividing content sections
  - `ScrollArea` for long report content
  - `Tooltip` for citation previews and metadata hints
  - `Dialog` for token JSON export preview
  - `Skeleton` for loading states during generation
  
- **Customizations**:
  - Custom citation marker component (superscript numbers with hover tooltips)
  - Specimen-card layout for individual content items (border, padding, subtle texture)
  - Token ID display with monospace treatment
  - Progress indicator for generation pipeline
  - Export button with download icon
  
- **States**:
  - Buttons: default (soft shadow), hover (slight elevation), active (pressed inset), disabled (faded)
  - Accordions: collapsed (chevron right), expanded (chevron down), animated transition
  - Citations: dormant (subtle superscript), hover (tooltip appears), active (external link highlight)
  - Cards: resting (flat), hover (slight elevation for interactive cards)
  
- **Icon Selection**:
  - `ArrowsClockwise` for regenerate token
  - `DownloadSimple` for export JSON
  - `BookOpen` for view report
  - `Seal` for provenance/authenticity
  - `CaretDown`/`CaretRight` for accordion states
  - `Link` for external citations
  - `MapPin` for planting locations
  - `TreeEvergreen` for tree section
  - `Coin` for numismatic section
  - `Sparkle` for gemstone section
  
- **Spacing**:
  - Section padding: `p-6` (24px) for card interiors
  - Section gaps: `gap-8` (32px) between major sections
  - Inline spacing: `gap-2` (8px) for badges and chips
  - Report margins: `mx-auto max-w-4xl` for optimal reading width
  
- **Mobile**:
  - Single column layout for all content
  - Reduced font sizes (H1: 28px, body: 15px)
  - Touch-friendly accordion headers (min-height 44px)
  - Sticky header with token ID and export button
  - Reduced spacing (`p-4`, `gap-4`) to maximize screen real estate
  - Stack metadata horizontally on mobile, vertically on desktop
