# Extraction batch 04 — yk:ref/0159 … yk:ref/0211

- ref: yk:ref/0159
  kind: layout
  name: bracketed-three-tier-diagram
  what: vertical diagram split into three numbered tiers (01/02/03) by square corner brackets running the full height on both sides
  build: brackets are thin 1px corner strokes, not full rules · tier number sits mid-height at far left, outside the bracket · each tier gets a short caption block at far right (label + arrow-bulleted list) · generous vertical whitespace between tiers
  zone: graphic
  use: technical / product architecture pages that need to narrate a vertical process
  style: HUD technical

- ref: yk:ref/0159
  kind: object
  name: isometric-diamond-mesh-plane
  what: a flat diamond-shaped plane rendered as an isometric wireframe grid, several stacked with slight offset and a top-to-bottom colour fade (grey to white)
  build: ~20x20 grid lines per plane · 4-5 planes stacked with ~24px vertical offset, each slightly more opaque toward the top · rendered on pure black
  zone: graphic
  use: "your data platform" / "infrastructure" hero graphics, layered systems metaphor
  style: HUD technical

- ref: yk:ref/0159
  kind: object
  name: wireframe-hourglass-funnel
  what: two flared wireframe rings connected by a pinched waist, like an hourglass silhouette, floating between two diamond planes
  build: white 1px stroke on black, no fill · small dot markers at ring intersections mark data-flow nodes · an upward arrow icon pierces the centre axis
  zone: graphic
  use: metaphor for a routing/transform layer between raw sources and a unified platform
  style: HUD technical

- ref: yk:ref/0159
  kind: copy
  name: arrow-led-eyebrow-headline
  what: a small right-pointing arrow glyph preceding a two-line sentence-case headline, with a tiny superscript index number after it
  build: arrow glyph 12px, headline 20px regular, superscript number 10px raised — reads as "→ Fuels your data platform ⁰¹"
  zone: graphic
  use: section headers in technical decks
  style: HUD technical

- ref: yk:ref/0159
  kind: object
  name: tiny-cube-particle-cluster
  what: a scattered field of small isometric cubes/hexagons of varying grey values beneath a funnel, implying raw disorganised data
  build: 15-30 tiny extruded shapes, random scatter, sizes 6-14px, some lit from top-left
  zone: graphic
  use: "your operational systems" / raw-input visual shorthand
  style: HUD technical

- ref: yk:ref/0160
  kind: pattern
  name: alarm-clock-phone-screen
  what: iOS-style alarm/timer screen inside a phone frame: title, circular progress ring with tick marks, a big time readout, and a dot-matrix progress row
  build: phone chrome with notch and status bar · title two-weight (bold word + regular word) stacked · thin circular dial ~200px with radial ticks and a Y-shaped centre glyph · time shown as two big numerals with small labels above (start/duration under it) · below, a grid of ~7x2 filled/unfilled dark dots forming a loose digit shape
  zone: graphic
  use: alarm, timer, focus-session mobile screens
  style: soft product UI

- ref: yk:ref/0160
  kind: chart
  name: dot-matrix-glyph-progress
  what: a low-res digit or icon "drawn" out of a grid of filled vs. unfilled dots, functioning as a decorative progress/identity marker
  build: circular dots ~14px, 2px gutter, filled = solid dark, unfilled = 15% opacity grey; the filled dots trace a numeral shape
  zone: graphic
  use: playful data/progress display distinct from a bar or ring
  style: soft product UI

- ref: yk:ref/0160
  kind: type
  name: mixed-weight-two-line-hero
  what: a large left-aligned hero headline where two lines are bold black and two lines are the same size but light grey, creating a legibility hierarchy without changing size
  build: same font size across all 4 lines (~34px), weight/colour alone signal emphasis: bold #111 vs regular #b8b3ad
  zone: graphic
  use: marketing / case-study covers
  style: soft product UI

- ref: yk:ref/0160
  kind: layout
  name: phone-center-annotation-columns
  what: device mockup centred, with two thin label columns flanking it (left: big headline block; right: small "Info" and "Guidels" annotation stacks with tiny paragraph copy)
  build: phone ~40% width centred, side columns ~20% each, labels are 11px uppercase caption + 12px body, generous top margin before first label
  zone: graphic
  use: product-shot marketing slides, app-store style social posts
  style: soft product UI

- ref: yk:ref/0161
  kind: material
  name: neumorphic-soft-panel
  what: a rounded rectangle that looks pressed into a pale blue-grey background using a pair of opposite-direction soft shadows
  build: ground colour #CDD5E0-ish · light shadow: white, 16px blur, offset -9,-9, 60% opacity · dark shadow: #A3B1C6, 16px blur, offset 9,9, 60% opacity · optional 2pt white stroke at 60% or a 5pt stroke at 20% for a "pressed" outline variant
  zone: graphic
  use: soft-UI dashboards, wellness apps, calculators
  style: soft relief

- ref: yk:ref/0161
  kind: object
  name: nested-soft-cards
  what: two smaller rounded cards embedded inside one larger rounded panel, all sharing the same neumorphic light source
  build: outer card corner radius > inner cards' · consistent 24-32px radius scale · ~16px gutter between nested elements
  zone: graphic
  use: dashboard tiles, settings groups
  style: soft relief

- ref: yk:ref/0161
  kind: copy
  name: annotated-spec-callouts
  what: small leader-lines running from a design element out to a tiny label block giving exact hex/blur/offset values
  build: 1px thin connector line with a small dot at the anchor point; label text 10-11px, two-line stacked key:value pairs
  zone: graphic
  use: internal style-guide / spec documentation pages
  style: soft relief

- ref: yk:ref/0161
  kind: icon
  name: venn-overlap-brand-mark
  what: three circles (two filled solid, one outlined) shown in an equation-like row: solid = solid + outline, illustrating a blend concept
  build: circles ~28px, consistent stroke weight matching the outlined one, "=" and "+" as thin plus/equals glyphs between them
  zone: graphic
  use: brand/style-guide title mark for a "soft UI" or "blend" concept page
  style: soft relief

- ref: yk:ref/0162
  kind: pattern
  name: dark-product-hunt-hero
  what: a product-launch style hero: eyebrow tag, big two-line headline, a bullet checklist, an isometric infrastructure diagram, and a bottom CTA bar
  build: near-black background · eyebrow chip top-left with a "+" icon · headline ~32px bold white on two lines · checklist rows use small checkbox glyphs + 13px text · CTA card bottom-right white pill "Get Started"
  zone: graphic
  use: dev-tool / infra product landing pages
  style: HUD technical

- ref: yk:ref/0162
  kind: object
  name: layered-isometric-node-stack
  what: a diamond isometric platform with small server/app icon blocks sitting on top and around it, one node highlighted orange with a latency callout
  build: base diamond dark grey with subtle grid texture · icon nodes are small rounded squares ~40px with a glyph centred · highlighted node gets an orange glow ring and a "127ms startup" tag connected by a thin leader line
  zone: graphic
  use: infrastructure/runtime diagrams needing one "hero" data point
  style: HUD technical

- ref: yk:ref/0162
  kind: copy
  name: metric-callout-tag
  what: a small pill/tag with a lightning icon and a bold metric plus unit, connected to a diagram element by a line
  build: icon + "127ms" bold + "startup" regular below, orange accent colour reserved only for this callout
  zone: graphic
  use: highlighting one standout number in an otherwise monochrome diagram
  style: HUD technical

- ref: yk:ref/0162
  kind: type
  name: dot-matrix-wordmark
  what: a wide logotype rendered entirely from a dot-grid (LED sign style) at the bottom of the hero
  build: dots ~4px on a tight grid, letterforms blocky/squared, full word spans hero width, low contrast (dark grey on black)
  zone: graphic
  use: dev-tool brand wordmark, footer or hero baseline device
  style: HUD technical

- ref: yk:ref/0163
  kind: effect
  name: spotlight-beam-over-particles
  what: a soft vertical cone of light falls from the top of frame onto a small cluster of glowing coloured dots stacked above isometric platform outlines
  build: near-black ground · beam: white radial gradient, very low opacity, wide at top narrowing down · particle dots 2-6px in magenta/blue/pink, most concentrated at beam centre, sparse falloff · platform: three stacked thin-stroke diamond outlines beneath, with a soft reflection under the lowest one
  zone: graphic
  use: "your data, focused" hero moments; case-study cover slides
  style: HUD technical

- ref: yk:ref/0163
  kind: copy
  name: challenge-eyebrow-paragraph
  what: a small coloured eyebrow label ("Challenge") above a 4-line explanatory paragraph, left-aligned in the lower third
  build: eyebrow 11px accent-coloured (soft violet), paragraph ~15px light grey, generous 1.5 line-height, max-width ~40% of frame
  zone: graphic
  use: case-study slide structure: problem statement under a hero visual
  style: HUD technical

- ref: yk:ref/0164
  kind: type
  name: geometric-shape-monogram-row
  what: two rows of five abstract glyph-like marks built purely from circle/rectangle/rounded-corner primitives, functioning as a constructed alphabet or logotype set
  build: each glyph fits a fixed square module, built from 2-4 primitive shapes (full circle, half-circle, straight-edged block, rounded corner) · solid near-black fill, subtle print-grain texture over the fill · consistent stroke-free flat shapes
  zone: graphic
  use: custom lettering systems, geometric wordmarks, icon-as-letterform sets
  style: brutalist mono

- ref: yk:ref/0164
  kind: material
  name: fine-grain-flat-fill
  what: a flat dark shape filled with a subtle halftone/grain texture instead of a pure flat colour, giving it a printed poster feel
  build: near-black fill overlaid with fine irregular noise at low contrast, uniform across all shapes
  zone: graphic
  use: adding tactility to otherwise geometric flat-colour compositions
  style: brutalist mono

- ref: yk:ref/0164
  kind: copy
  name: file-metadata-corner-stamp
  what: tiny two-line "Created / Modified" timestamp stamped in the top-left corner, styled like raw export metadata left visible on purpose
  build: 10px monospace-ish grey text, two lines, no border, sits flush to the corner
  zone: graphic
  use: portfolio/process shots that want an "unedited working file" authenticity cue
  style: brutalist mono

- ref: yk:ref/0165
  kind: object
  name: radial-segmented-wheel-menu
  what: a circular menu divided into pie-slice sectors by two crossing arcs, each sector numbered, with one sector highlighted as the active/hovered selection
  build: dark ground, sector dividers are two intersecting curved bands (not straight lines) at low opacity · numbers 1-6 placed near each sector's outer edge, ~13px, muted grey except inside the active slice where it's white · active slice fill is a lighter grey triangle wedge overlaying the wheel
  zone: graphic
  use: dashboard/home-screen circular navigation, alternative to a tab bar
  style: soft relief

- ref: yk:ref/0165
  kind: object
  name: floating-corner-fab-button
  what: a small circular icon button (house glyph) pinned to the top-right corner of a rounded dark panel, sitting slightly outside/overlapping the panel edge
  build: white filled circle ~36px, icon centred, drop shadow lifting it off the panel beneath
  zone: graphic
  use: "home" or "back" affordance floating over a full-bleed graphic panel
  style: soft relief

- ref: yk:ref/0166
  kind: pattern
  name: xray-nature-glitch-poster
  what: a poster overlaying x-ray-style translucent botanical/insect photography with terminal-style glitch text boxes and thin leader-line callouts
  build: near-black ground · photography rendered in high-key white-on-black x-ray treatment · monospace ASCII-glitch text blocks (mixed symbols +#=-) scattered as texture in the negative space · each "object" gets a numbered label + filename + short broken sentence, connected to its subject by a thin line and bracket corner marks
  zone: graphic
  use: fashion/beauty or research-themed editorial posters mixing organic and technical registers
  style: NieR menu

- ref: yk:ref/0166
  kind: copy
  name: broken-file-caption
  what: fake filesystem caption ("bee.png / honey / not founded") used as poetic, slightly malfunctioning interface text
  build: monospace, lower-case, short 3-4 word fragments stacked on separate lines, deliberately ambiguous grammar
  zone: text
  use: interface copy that wants a glitchy, semi-broken machine voice
  style: NieR menu

- ref: yk:ref/0166
  kind: layout
  name: corner-pinned-poster-frame
  what: classic four-corner poster layout — small caps label top-left, wordmark top-right, credit line bottom-left, author name bottom-right, all pinned to the frame edges around a full-bleed central image
  build: labels ~11-12px tracked-out uppercase, generous margin (~40px) from edge
  zone: graphic
  use: any print-style poster needing a formal frame
  style: NieR menu

- ref: yk:ref/0167
  kind: effect
  name: halftone-radial-glow-sphere
  what: a dot-halftone gradient forms a glowing sphere (bright core, dot density increasing outward into a dark ring, then fading to noise) against a starfield
  build: dot size and spacing increase with distance from centre to fake a radial gradient in print-safe halftone · a solid black circle sits inside as the "eclipse" core · fine film-grain noise over the whole background
  zone: graphic
  use: concept posters about opposites (memory/oblivion, presence/absence)
  style: print halftone

- ref: yk:ref/0167
  kind: copy
  name: two-word-polarity-labels
  what: two single-word labels (top and centre) in tracked-out small caps naming the two poles of a concept, e.g. "MEMORY" / "OBLIVION"
  build: ~14px letter-spaced caps, centred, generous vertical distance between them so the graphic does the connecting
  zone: graphic
  use: concept/thesis poster titling
  style: print halftone

- ref: yk:ref/0167
  kind: pattern
  name: dotted-path-annotation-diagram
  what: four short aphoristic lines connected by a dotted zig-zag path with small circle nodes at each point, reading like a walked argument/timeline
  build: dotted 1px line, small hollow-dot markers, text blocks 11px sitting beside each node, path zig-zags left-right down the lower third
  zone: graphic
  use: presenting a short sequence of ideas/theses under a hero visual
  style: print halftone

- ref: yk:ref/0168
  kind: object
  name: frosted-invite-card
  what: a vertical glassmorphic card on a dark ground with a stat row header, a centred code display, and a footer brand lockup, backed by a radiating linework halo
  build: card: dark translucent glass ~16px radius, subtle inner highlight edge · header row: three key/value pairs (TYPE, PTS, PWR) in caps label + bold value · body: sparkle icon + "INVITE CODE" caption + large monospace code string · violet-to-magenta radiating arc lines behind the card, symmetric
  zone: graphic
  use: NFT/web3 invite or ticket cards, gated-access reveals
  style: glass product UI

- ref: yk:ref/0168
  kind: copy
  name: label-value-stat-triplet
  what: three compact stat pairs shown side by side, each a small grey caption directly followed by a bold value, no separators needed because of spacing alone
  build: caption 10px grey uppercase, value 13px bold white, ~24px gap between triplets
  zone: graphic
  use: card headers needing 3 short facts without a table
  style: glass product UI

- ref: yk:ref/0169
  kind: layout
  name: asymmetric-photo-quote-bento
  what: a 2x2-ish grid of rounded-corner panels of different sizes/shapes mixing a full-bleed photo, a solid colour panel, an italic pull-quote panel, and a second photo, all sharing one rounded-corner language
  build: each panel independent radius but consistent (~48px) large single corner rounded, others square — creates a "torn card" feel · thin corner tick marks (small L-shaped brackets) mark panel edges
  zone: graphic
  use: moodboards, café/product social carousels
  style: lo-fi warm

- ref: yk:ref/0169
  kind: type
  name: italic-script-accent-in-serif-pullquote
  what: a short pull-quote where one word is set in italic serif for emphasis inside an otherwise regular serif line, bracketed by small "<" ">" arrows
  build: base serif ~20px, emphasised word italic same size, arrow glyphs 14px flanking with generous spacing
  zone: graphic
  use: café/lifestyle brand taglines
  style: lo-fi warm

- ref: yk:ref/0169
  kind: icon
  name: quatrefoil-badge-mark
  what: a four-lobed flower/clover outline icon used as a decorative brand mark, echoed again as a solid tan circle badge elsewhere in the set
  build: thin stroke quatrefoil ~40px, also appears filled as a small circular badge with four dot-petals inside a ring
  zone: graphic
  use: café/wellness brand mark, recurring motif across a card set
  style: lo-fi warm

- ref: yk:ref/0169
  kind: copy
  name: vertical-edge-label
  what: a tiny caption rotated 90° and run up the left edge of a photo panel, plus a matching "REQUIREMENT"-style label on another panel's edge
  build: 9-10px tracked caps, rotated -90°, sits flush ~12px from the panel edge
  zone: graphic
  use: editorial photo panels wanting a printed-tag feel
  style: lo-fi warm

- ref: yk:ref/0170
  kind: object
  name: dark-modal-radio-option-rows
  what: a centred modal with a title/close row, a description line, and two selectable option rows (icon + title + subtitle + radio dot), one visibly selected with an accent border
  build: modal ~500px, 16px radius, dark grey #1c1c1c · unselected row: flat dark fill, grey icon, plain radio outline · selected row: 1.5px accent-orange border, accent icon tint, filled orange radio dot · footer right-aligned Cancel (ghost) + Next (solid orange) button pair
  zone: graphic
  use: onboarding choice modals, "pick a path" dialogs
  style: glass product UI

- ref: yk:ref/0170
  kind: material
  name: dotted-noise-modal-backdrop
  what: the area behind a modal is covered in a faint regular dot grid rather than a plain dim overlay
  build: small dots ~2px, wide spacing ~14px, very low opacity, uniform field behind the dimmed modal
  zone: graphic
  use: giving a dark modal background texture without a photo
  style: glass product UI

- ref: yk:ref/0170
  kind: copy
  name: type-tag-corner-label
  what: small two-line right-aligned label in the far corner stating the artifact type ("TYPE / ADD RESUME MODAL")
  build: caption grey 10px over bold white 11px, tracked-out caps, tiny footprint
  zone: graphic
  use: annotating UI-kit screenshots with a component/type tag for a portfolio grid
  style: glass product UI

- ref: yk:ref/0171
  kind: effect
  name: concentric-orbit-hud-rings
  what: several offset, partially-drawn circular arcs of varying radii and stroke weight overlapping to suggest an orbital/astronomical instrument, with small tick marks and code-like tags along some arcs
  build: arcs at low opacity white on near-black, weights vary 1-3px, some solid some gradient-fading along their length · small dot nodes mark key points on arcs · short alphanumeric tags (e.g. "FN3", "VB2") sit beside specific arcs like measurement labels
  zone: graphic
  use: technical/scientific brand marks, "precision instrument" aesthetic covers
  style: HUD technical

- ref: yk:ref/0171
  kind: layout
  name: drafting-grid-underlay
  what: a faint rectilinear grid of guide lines, corner crosses, and tick dashes underlying the whole composition like a blueprint/drafting sheet
  build: hairline grey lines at ~5% opacity, small plus/cross marks at grid intersections, a couple of small square swatches (unlabelled) parked in corners
  zone: graphic
  use: any "engineering precision" background texture
  style: HUD technical

- ref: yk:ref/0171
  kind: icon
  name: striped-diamond-corner-mark
  what: a small diagonal-striped diamond/lozenge glyph used as a signature/logo mark in the bottom-right corner
  build: 4-5 parallel diagonal bars inside a diamond outline, ~24px, white on black
  zone: graphic
  use: studio or project signature mark on technical compositions
  style: HUD technical

- ref: yk:ref/0172
  kind: chart
  name: stacked-hex-swatch-card
  what: a vertical stack of five rounded-rectangle bands, each a different tint/shade of one hue plus pure white and pure black, each printed with its hex code and (for the top two) a transparency percentage
  build: bands overlap slightly like a fan of cards, each with its own rounded top corners peeking above the one below · hex in monospace ~20px, transparency note smaller and right-aligned, colour proceeds dark→saturated→white→black top to bottom
  zone: graphic
  use: palette presentation cards, brand colour reveals
  style: brutalist mono

- ref: yk:ref/0172
  kind: type
  name: condensed-block-wordmark
  what: a short bold condensed sans wordmark in all-caps sitting above the palette stack, paired with a light italic-less body typeface name as a caption
  build: wordmark ~44px heavy condensed, letter-spacing near zero; caption "Open Sans" 18px regular beside it
  zone: graphic
  use: naming a colour system / typeface pairing on the same card
  style: brutalist mono

- ref: yk:ref/0173
  kind: layout
  name: quad-panel-glass-photo-split
  what: a 2x2 composition where each quadrant has an independently large corner radius (all curving toward the centre), mixing a solid dark panel, a glass panel over a sky photo, an architecture photo, and a dark panel with a rotated diamond badge
  build: each panel's rounded corner faces the centre only, other three corners stay square, so the whole grid reads as one continuous curved seam · one panel gets a frosted-glass overlay with a soft halo blur · a diamond badge with a small centred wordmark sits at the exact centre crossing of all four panels
  zone: graphic
  use: architecture/agency "work in progress" case study cover
  style: glass product UI

- ref: yk:ref/0173
  kind: object
  name: corner-tick-navigation-arrows
  what: small triangular play/arrow glyphs pinned to all four outer corners of the frame, doubled (like a scrub/seek control), implying a carousel or video-like navigation
  build: two stacked triangle glyphs per corner, ~10px, low-opacity white
  zone: graphic
  use: signalling "more content"/carousel navigation on a static image
  style: glass product UI

- ref: yk:ref/0173
  kind: chart
  name: thin-loading-progress-bar
  what: a full-width hairline progress bar with a bold filled leading segment, paired with a "LOADING" caption and a big number
  build: bar height ~2px, filled portion pure white ~25% length, remainder low-opacity grey; big number (e.g. "142") sits above-left at ~28px bold
  zone: graphic
  use: WIP/percentage-complete indicators on project reveal pages
  style: glass product UI

- ref: yk:ref/0174
  kind: type
  name: blob-letterform-construction
  what: hand-drawn organic "metaball" letterforms (rounded blob shapes fused together with pinched waists) shown over a drafting grid with construction circles marking each blob's radius
  build: dark grain-textured fill, waist pinches created by two overlapping circles' negative space · dotted construction circles and grid lines left visible in a lighter tone to show the drawing method · page numbers in small brackets down the left margin
  zone: graphic
  use: custom experimental typeface/logotype design process pages
  style: swiss editorial

- ref: yk:ref/0174
  kind: material
  name: paper-grain-ink-fill
  what: the blob shapes are filled with visible paper-grain/ink texture rather than a flat vector fill, giving a hand-inked look
  build: subtle mottled grain, uneven edge darkness, consistent across all shapes
  zone: graphic
  use: type specimens, hand-craft brand marks
  style: swiss editorial

- ref: yk:ref/0175
  kind: pattern
  name: dark-map-warning-dashboard
  what: a full-bleed dark map with a search bar, small warning-triangle markers scattered along a coastline, and a focused radial heat glow around the active alert
  build: map rendered in muted blue-grey line art on near-black · search field: pill shape, magnifier icon, placeholder location text, small colour-dot status row above it · warning triangles ~16px at multiple map points, one enlarged and glowing orange-red with a "Low -82%" percentage tag beside it
  zone: graphic
  use: environmental/logistics monitoring dashboards, hazard maps
  style: HUD technical

- ref: yk:ref/0175
  kind: object
  name: bottom-sheet-alert-card
  what: a lower-left info card with a warning icon, bold title, subtitle coordinates, and a labelled on/off toggle, docked to the map's edge
  build: no card background — sits directly on the map, big triangle icon ~40px, title 18px bold, coordinates 10px monospace-grey, toggle row with "on/off" text either side of a small switch
  zone: graphic
  use: selected-item detail panel on a map or list dashboard
  style: HUD technical

- ref: yk:ref/0175
  kind: icon
  name: compass-rose-north-marker
  what: a minimal circular compass marker (N label, triangle pointer, centre dot) placed in open map space
  build: thin circle ~30px, small upward triangle above it, "N" label above that
  zone: graphic
  use: map/orientation UI furniture
  style: HUD technical

- ref: yk:ref/0176
  kind: object
  name: diamond-crosshair-reticle-hud
  what: a full weapon/targeting-style HUD: a rotated square (diamond) reticle at centre with a smaller tilted square inside it, flanked by distance readouts, tick marks along top/bottom edges, and a mode-select row of diamond icons at the bottom
  build: pure white thin strokes on black-to-grey vertical gradient · left/right text blocks give two named distances with a big bold metre value under each · bottom centre: a row of small diamond glyphs, one enlarged/highlighted as the active mode, plus a coordinate/status line beneath
  zone: graphic
  use: game HUD, weapon-cam, targeting overlays
  style: HUD technical

- ref: yk:ref/0176
  kind: copy
  name: bracketed-status-readout
  what: small monospace status strings like "READY 0.28.1" or coordinate pairs, tucked at the bottom edge as diegetic system text
  build: 9-10px monospace, very low-key grey, sits below the main HUD furniture
  zone: text
  use: game UI status lines, technical overlay chrome
  style: HUD technical

- ref: yk:ref/0177
  kind: pattern
  name: red-frosted-app-preview
  what: a phone-shaped translucent red-tinted panel with rounded top corners and simple line-art content, shown inside a browser/social-post preview frame beside metadata
  build: panel uses a soft red gradient glass, subtle noise texture over it, content is minimal white line glyphs · sits inside a square social-media post frame with a title/date/engagement-stat sidebar
  zone: graphic
  use: red/glass "notification" or "alert" app screen concepts, social preview mockups
  style: glass product UI

- ref: yk:ref/0177
  kind: type
  name: distressed-glitch-caps-title
  what: a bold condensed all-caps two-word title rendered with broken/glitched letterforms (missing strokes, offset fragments) over a frosted glass texture
  build: heavy geometric sans, letters intentionally cut/misaligned for a glitch effect, white on a translucent grey-glass photographic ground
  zone: graphic
  use: streetwear/tech-glitch poster titling
  style: brutalist mono

- ref: yk:ref/0178
  kind: layout
  name: dense-swiss-text-column-grid
  what: a strict multi-column grid of small justified body text with rule lines between rows, a barcode, and a QR-like square block, sitting above a graphic band
  build: 7-8 narrow columns, hairline horizontal rules under each line of text (ledger style), consistent baseline grid, barcode bottom-right of the text block
  zone: text
  use: annual-report/index pages, dense editorial front matter
  style: swiss editorial

- ref: yk:ref/0178
  kind: object
  name: liquid-drop-cutout-cards
  what: a row/grid of rounded-rectangle card outlines whose bottom edge dissolves into an organic liquid-drip silhouette, alternating which cards are solid-filled vs. outline-only, with small droplet shapes falling free below some
  build: card outline ~2px, corner radius large (~40%), the drip is a bezier "melt" merging into a teardrop, colour is binary black/white with no midtones, drips repeat at different scales as a rhythm device
  zone: graphic
  use: rebranding/dissolve motifs, liquid identity systems, editorial dividers
  style: swiss editorial

- ref: yk:ref/0179
  kind: type
  name: paper-cutout-extruded-headline
  what: an all-caps headline where each letter looks physically cut out and lifted off a white paper surface, casting soft directional shadows and showing bevel highlights
  build: pure white-on-white palette, depth conveyed entirely by soft drop shadows (bottom-right) and a thin top-edge highlight per letter · letters overlap their own shadows slightly for a "peeled paper" feel · 3-4 stacked lines, left-aligned but each line nudges right progressively
  zone: graphic
  use: minimal monochrome brand/manifesto covers
  style: swiss editorial

- ref: yk:ref/0180
  kind: object
  name: vertical-pill-toolbar
  what: a tall rounded-pill floating toolbar containing icon buttons grouped in sections (a light/dark pair, a divider, then 3 more tool icons), plus a separate pill button label floating beside it
  build: pill ~64px wide, buttons ~48px circular within it, a thin full-width divider rule between groups · one button state shown "active" with a solid dark fill vs others translucent grey-glass · adjacent standalone pill button ("render") in white with black label, no icon
  zone: graphic
  use: creative-tool floating toolbars (3D/design apps), theme + tool switchers
  style: glass product UI

- ref: yk:ref/0180
  kind: material
  name: glossy-planet-sphere-texture
  what: two large glossy black spheres with cratered/wet-rock surface texture, mirrored top and bottom, framing the toolbar
  build: high-contrast specular highlights, fine craggy bump texture, symmetric vertical mirroring creates a figure-eight negative space where the toolbar sits
  zone: graphic
  use: 3D-render tool branding, dramatic dark hero backgrounds
  style: HUD technical

- ref: yk:ref/0181
  kind: material
  name: liquid-marbling-duotone-wash
  what: a full-bleed abstract fluid/ink-marbling texture in a cyan-and-coral duotone, heavily blurred, used as an atmospheric background behind sharper foreground panels
  build: high blur radius on the base texture so it reads as colour-field rather than detail, foreground elements kept in sharp focus for contrast
  zone: graphic
  use: anime/visual-novel key art, mood-driven landing sections
  style: lo-fi warm

- ref: yk:ref/0181
  kind: layout
  name: dual-vertical-frame-story-split
  what: two tall rectangular framed panels (each with its own cropped marbling detail and a corner logotype) flanking a centred vertical body-copy block, over the blurred background
  build: thin white frame stroke ~1px around each panel, small caps logotype in the panel corner, centre text block uses small tracked-out caps title + short justified paragraph
  zone: graphic
  use: two-character or two-path narrative landing sections
  style: lo-fi warm

- ref: yk:ref/0181
  kind: object
  name: dot-pagination-row
  what: a horizontal row of small circular dots indicating carousel position, one filled/active among several outlined
  build: dots ~8px, ~12px gutter, active dot solid white, inactive hollow-outline
  zone: graphic
  use: carousel/slideshow position indicator
  style: glass product UI

- ref: yk:ref/0182
  kind: object
  name: pill-slider-with-tick-dots
  what: a wide rounded-pill slider row where the fill level is shown by a row of small dots plus a vertical handle marker, with the label on the left and the numeric value on the right
  build: pill ~56px tall, dark translucent glass fill, dots ~4px spaced evenly across the middle third, a taller white handle bar marks the exact position, label 14px left, value 14px right
  zone: graphic
  use: audio/meditation app volume and setting controls
  style: glass product UI

- ref: yk:ref/0182
  kind: object
  name: three-button-transport-cluster
  what: a horizontal cluster of three circular buttons — skip-back-10, big centred play, skip-forward-10 — the outer two smaller and dimmer than the centre one
  build: outer buttons ~64px dark glass with a curved arrow + "10" glyph, centre button ~80px solid white with a play triangle, all three overlapping slightly in a connected capsule silhouette
  zone: graphic
  use: audio/podcast/meditation player controls
  style: glass product UI

- ref: yk:ref/0182
  kind: chart
  name: vertical-progress-rule-with-time-labels
  what: a thin vertical line at the frame's right edge with a time label at top and bottom (elapsed/total), and a short bright segment marking current position
  build: 1px line, ~200px tall, bright white segment near the top marking progress, small 10px time labels at both ends
  zone: graphic
  use: alternative to a horizontal scrubber for portrait media players
  style: glass product UI

- ref: yk:ref/0182
  kind: copy
  name: countdown-tagline-pairing
  what: a bold instructional line ("Take a deep breath…") directly above a small typographic countdown ("5…4…3…2…"), both in the same left-aligned block
  build: instruction ~28px medium, countdown ~13px grey directly beneath with loose letter spacing
  zone: text
  use: guided wellness/breathing app copy pattern
  style: glass product UI

- ref: yk:ref/0183
  kind: pattern
  name: dark-bento-analytics-grid
  what: a 4-column, 3-row bento grid of dark rounded cards, each showing a different micro-widget (metric ring, radial icon menu, line chart with tooltip, progress path with a callout bubble, list rows, browser-window chrome)
  build: consistent dark card fill (#161616-ish), consistent 20px radius across all cells regardless of internal content, uniform ~12px gutter, browser-chrome cards use 3 dots top-left as the only "frame" cue
  zone: graphic
  use: UI-kit / component showcase grids, portfolio bento sections
  style: glass product UI

- ref: yk:ref/0183
  kind: chart
  name: annotated-line-chart-with-hover-tooltip
  what: a smooth line chart with a vertical dashed guide, a highlighted data point, and a floating pill tooltip naming the series (e.g. "Chrome") plus a cursor glyph
  build: line ~2px light grey/white, dashed vertical guide at the hovered x, dot marker at intersection, tooltip pill offset up-right with small "+" affordance, big metric number top-left of the card
  zone: graphic
  use: analytics dashboards, "hover state" documentation shots
  style: glass product UI

- ref: yk:ref/0183
  kind: chart
  name: radial-icon-cluster-menu
  what: a circular dark disc with 4 small icon buttons arranged evenly around a centre "+" button, plus a pill handle below
  build: outer disc subtly darker ring, icons ~32px evenly spaced on the circle's circumference at consistent radius, centre button larger and higher-contrast
  zone: graphic
  use: radial app-switcher or quick-action menu
  style: glass product UI

- ref: yk:ref/0183
  kind: chart
  name: milestone-path-with-callout-bubble
  what: a jagged ascending line-path connecting small square waypoint markers, with a "40% Faster" pill bubble floating near the top and a cursor icon beside it
  build: path uses straight angled segments (not curved), square nodes ~8px at each vertex, bubble pill with a small "+" tag, muted grey line on dark card
  zone: graphic
  use: growth/performance storytelling widgets
  style: glass product UI

- ref: yk:ref/0184
  kind: pattern
  name: split-arc-photo-window
  what: a large circular window is bisected — the left half a plain rounded panel with dotted texture, the right half a white curved band forming a "C" shape hugging the circle, with a dark faceted rock object placed in the seam
  build: circle radius ~fills 60% of frame height, white band ~15% of circle width, dotted-texture fill inside the darker half at low density
  zone: graphic
  use: brand/visual-system title spreads combining geometry and a hero object
  style: brutalist mono

- ref: yk:ref/0184
  kind: material
  name: faceted-rock-object
  what: a dark low-poly/faceted mineral-like solid rendered with directional top-left light, sitting centred at the seam of a circular composition
  build: irregular polygon facets, each facet a slightly different grey value for shading, consistent single light source
  zone: graphic
  use: "meteorite"/mineral hero objects for geology or premium-material brand concepts
  style: brutalist mono

- ref: yk:ref/0184
  kind: copy
  name: vertical-rotated-index-tab
  what: a narrow bracketed tab label rotated 90° running down the right edge, naming a section (e.g. "METEORITES") like a book-spine index
  build: thin bracket "[ ]" framing tracked-out caps text, rotated -90°, positioned flush to the frame's right margin
  zone: graphic
  use: editorial section markers, spine-style navigation on wide layouts
  style: brutalist mono

- ref: yk:ref/0185
  kind: chart
  name: heatmap-contribution-tile
  what: a small square grid of tiny coloured cells (green intensity) inside a rounded card, alongside a percentage-change badge and a CTA button
  build: grid ~10x6 tiny squares 6-8px, colour intensity implies activity level, card also carries a headline stat ("+3.45%") with a small arrow-up glyph and a dark pill CTA below
  zone: graphic
  use: performance/streak summaries in productivity dashboards
  style: soft product UI

- ref: yk:ref/0185
  kind: object
  name: mini-progress-project-card
  what: a small card pairing a compact radial or bar chart with a bold percentage, a short title, and a one-line description
  build: chart occupies the top ~half of the card at small scale (a bar-cluster chart in one variant, an emoji-tile chart in another), title 14px bold, description 11px grey two-line clamp
  zone: graphic
  use: project/task summary tiles in a dashboard list
  style: soft product UI

- ref: yk:ref/0185
  kind: pattern
  name: weekly-calendar-agenda-view
  what: a day-by-day mini calendar strip (Mon-Sun with dates) above a vertical hour-by-hour agenda list where the current column's events are expanded into full detail cards and other days show only compact dots/avatars
  build: date strip: 7 equal columns, active day gets a filled dark pill behind the number · agenda rows: hour label left column, event cards right, each with title, status tag ("Upcoming"/"In Progress"/"Complete"), avatar-stack, and a time range; one expanded card shows extra body text (meeting notes)
  zone: graphic
  use: scheduling apps, team calendar mobile screens
  style: soft product UI

- ref: yk:ref/0185
  kind: object
  name: avatar-overlap-stack
  what: 2-3 small circular avatar thumbnails overlapping in a row with a thin white ring separating them, used to show assignees on a task/event
  build: avatars ~20px, overlapped by ~40% width, consistent 1.5px white border stroke per avatar for separation
  zone: graphic
  use: showing multiple assignees/participants compactly
  style: soft product UI

- ref: yk:ref/0186
  kind: layout
  name: geometric-layout-thumbnail-grid
  what: a 5x3 grid of small black-and-white abstract compositions, each built from the same limited vocabulary of rectangles, half-circles, and full circles arranged into a distinct silhouette — functioning as a layout/grid-idea reference sheet
  build: each thumbnail sits in its own square module, pure black shapes on white (or reverse), no colour, no text inside the tiles; a bold banner title ("LAYOUTS VOL.01") plus small credit sits above the grid
  zone: graphic
  use: rapid-fire layout ideation sheets, poster/grid composition references
  style: brutalist mono

- ref: yk:ref/0187
  kind: pattern
  name: smart-home-greeting-dashboard
  what: a light mobile home screen: profile avatar + greeting + weather chip at top, a "performance" heatmap-preview card, then a 2x2 grid of device tiles each with an icon, name, subtitle, and a toggle or thumbnail
  build: greeting "Good morning!" bold 22px + subtitle grey 13px · weather pill top-right with icon + temp + high/low · device tiles: rounded card, icon top-left, name bold, subtitle grey, orange toggle switch bottom-right when applicable
  zone: graphic
  use: smart-home/IoT control app home screens
  style: soft product UI

- ref: yk:ref/0187
  kind: object
  name: circular-temperature-dial
  what: a large ring dial with tick marks and min/max labels at the ends, a bold centred temperature reading, and a small draggable handle dot on the ring
  build: ring ~220px diameter, thick stroke with a lighter background track and a darker filled arc showing current value, handle a small circle with a orange dot indicator, big number centred ~48px
  zone: graphic
  use: thermostat/climate control primary control
  style: soft product UI

- ref: yk:ref/0187
  kind: object
  name: three-way-segmented-pill-tabs
  what: a rounded pill containing three tab options (Cool/Dry/Fan) with the active one filled dark and the others plain text
  build: pill ~40px tall, active segment fully filled rounded rect matching pill's corner radius, inactive segments plain text with no background
  zone: graphic
  use: mode-select controls, view switchers
  style: soft product UI

- ref: yk:ref/0188
  kind: pattern
  name: medical-patient-record-card
  what: a dark patient profile card with avatar, ID, and a labelled key-value grid (date, sex/age, exposure index), plus an edit-pencil badge on the avatar
  build: avatar circle ~56px with a small circular accent-coloured edit badge overlapping its edge, name bold 16px + ID grey 12px beneath, field grid two-column with label 10px grey / value 12px white
  zone: graphic
  use: healthcare/clinical dashboard patient headers
  style: soft product UI

- ref: yk:ref/0188
  kind: chart
  name: with-without-comparison-bars
  what: two vertical bars side by side (a light "with AI" bar and a tall accent-coloured "without AI" bar) with hour labels above each and a headline stat card overlapping them
  build: bars flat-top rounded, one neutral-light fill, one bold orange fill, value labels centred above each bar, a glass card with the headline metric ("1h10 saved") floats diagonally across both bars
  zone: graphic
  use: before/after or efficacy comparison widgets
  style: soft product UI

- ref: yk:ref/0188
  kind: object
  name: labelled-scan-thumbnail-row
  what: a pair of small square document/scan thumbnails in a row, each with a filename caption underneath (Report.pdf, Bill.pdf)
  build: thumbnails ~64px with a subtle preview render inside, caption 10px centred below each
  zone: graphic
  use: attachment/document lists in records or case files
  style: soft product UI

- ref: yk:ref/0188
  kind: object
  name: chat-notification-card
  what: a compact card mimicking an incoming chat message: small avatar, sender name + role, a one-line message, and a pair of thumbnail attachments below
  build: avatar 24px, name bold 12px + role grey 10px beside it, message 12px, thumbnails ~50px square row beneath with 6px gutter
  zone: graphic
  use: activity feeds, collaboration notification previews
  style: soft product UI

- ref: yk:ref/0189
  kind: object
  name: icon-list-dropdown-menu
  what: a rounded dark dropdown menu with icon-plus-label rows, a highlighted/active first row with a left accent bar, a thin divider before the destructive/utility group, and consistent row height throughout
  build: rows ~48px tall, icon 20px + label 15px, ~16px left padding, active row gets a subtle lighter fill and a 2px accent bar flush to the menu's left edge, divider is a full-width 1px line at low opacity separating account items from utility items (shortcuts, help, logout)
  zone: graphic
  use: user account / settings dropdown menus
  style: glass product UI

- ref: yk:ref/0189
  kind: object
  name: pill-plus-avatar-header-pair
  what: a compact header combo — a solid pill button with a "+" icon and label, next to a separate circular avatar/icon button — both same height, sitting top-right of a screen
  build: pill button ~40px tall, white fill, black text/icon; avatar button same height, circular, dark fill
  zone: graphic
  use: primary-action + account-menu pairing in app headers
  style: glass product UI

- ref: yk:ref/0190
  kind: pattern
  name: dual-glass-card-over-portrait
  what: two frosted glass cards side by side over a warm dramatic photo (a lit hand), each with a small caption label and short body copy; one card shows a loading state with a shimmering skeleton line
  build: cards ~16px radius, heavy blur + slight tint matching the warm photo behind them, caption 10px tracked caps, heading bold 14-15px, body 12px two-line
  zone: graphic
  use: onboarding/feature-highlight overlays on cinematic photography
  style: glass product UI

- ref: yk:ref/0190
  kind: object
  name: skeleton-loading-lines
  what: 2-3 horizontal rounded bars of decreasing width standing in for not-yet-loaded text, inside a glass card
  build: bar height ~8px, rounded ends, low-opacity white, widths staggered (100%/70%/50%) to mimic paragraph shape
  zone: graphic
  use: loading-state placeholders in any card
  style: glass product UI

- ref: yk:ref/0190
  kind: chart
  name: three-node-flow-with-checkmark
  what: three short vertical labels (BRAINSTORMING / PUBLISHING / GUESSWORK) each connected by a thin diagonal line down to a single circular node marked with a checkmark
  build: labels rotated vertically, thin 1px converging lines, terminal node a small circle with a check glyph and subtle glow
  zone: graphic
  use: illustrating a converging process/pipeline in a feature callout
  style: glass product UI

- ref: yk:ref/0191
  kind: material
  name: glass-lens-over-color-field
  what: a large glass sphere/lens sits over a soft abstract colour-blob background, refracting and inverting the colours seen through it (warping the blobs, flipping light/dark)
  build: background: 3-4 large soft-edged blurred organic blobs in olive/orange/cream · lens: circular, subtle rim highlight, visibly distorts and partially inverts the blob pattern inside it, casts a soft shadow beneath
  zone: graphic
  use: abstract app icons, brand hero imagery, "focus/lens" metaphors
  style: lo-fi warm

- ref: yk:ref/0191
  kind: object
  name: rounded-square-blob-accent
  what: a small squircle (rounded-square-ish blob) shape with slightly concave sides, in a single saturated accent colour, placed centrally inside the lens as a focal object
  build: shape drawn with concave-curved sides rather than straight edges, flat single-colour fill, high enough contrast to read as the "subject" of the composition
  zone: graphic
  use: single-accent focal shapes inside larger soft compositions
  style: lo-fi warm

- ref: yk:ref/0192
  kind: layout
  name: radiating-node-grid-diagram
  what: a very dark card with a centre icon node connected by thin lines radiating out symmetrically (up-left, up-right, down-left, down-right) to four outer icon nodes, over a subtle grid backdrop
  build: near-invisible dark-on-dark palette (monochrome, barely-there contrast) · connecting lines have small diamond tick marks at intervals · centre node slightly larger/lighter to read as the hub · faint dot-grid texture fills the card background
  zone: graphic
  use: automation/integration feature diagrams, "everything connects" hero graphics
  style: HUD technical

- ref: yk:ref/0192
  kind: copy
  name: benefit-tag-pill-row
  what: a row of small rounded pills each with an icon and a short benefit phrase, sitting at the base of a feature card as supporting proof points
  build: pills ~28px tall, icon + 11px label, tight padding, low-contrast dark fill matching the card
  zone: graphic
  use: feature-card footers summarising benefits in a scannable row
  style: HUD technical

- ref: yk:ref/0193
  kind: pattern
  name: moody-photo-collage-poster
  what: a horizontally-split poster: a soft focal photo/video-still panel with a handwritten-style script logotype on the left, dense small caption/index text lower-left, and floating vertical Japanese/kanji labels with thin arch frames on the right, over a hazy blurred floral photograph background
  build: left panel: rounded rectangle photo with a thin border, large script wordmark overlaid · right side: two vertical kanji labels each capped with a thin arch/orbit line shape and a small circle-cropped photo chip · numbered index "07" oversized and semi-transparent at far left edge
  zone: graphic
  use: visual-novel / anime key art, mystery-drama landing pages
  style: lo-fi warm

- ref: yk:ref/0193
  kind: type
  name: handwritten-script-overlay-wordmark
  what: a loose cursive/brush script logotype laid directly over a photo panel as the dominant title mark
  build: thin uneven stroke weight mimicking pen/brush, white ink colour, placed diagonally across the photo rather than aligned to a grid
  zone: graphic
  use: intimate/personal narrative branding, diary or story-driven titles
  style: lo-fi warm

- ref: yk:ref/0193
  kind: object
  name: arch-topped-vertical-label-chip
  what: a small vertical text label whose top is capped by a thin arching line (like a rainbow/orbit sliver) with a tiny circular photo chip nested at the arch's centre
  build: arch stroke ~1px, label text small vertical kanji/caps beneath it, circular chip ~24px sitting in the arch's dip
  zone: graphic
  use: decorative index/chapter markers in editorial or game-key-art layouts
  style: lo-fi warm

- ref: yk:ref/0194
  kind: pattern
  name: dark-app-icon-showcase-grid
  what: a 3x3 grid of dark rounded-square app icons, each with a distinct internal illustration (isometric card, dollar/link diagram, download glyph, avatar cluster, dollar hexagon cluster with rainbow rim, folder stack, bar-chart cluster, dotted globe, fingerprint), one icon visually promoted with a bright gradient border
  build: icons uniform ~180px squircle, consistent dark near-black fill and subtle inner glow/linework per icon, the "hero" icon in the centre gets a saturated pink-orange-purple gradient ring border making it pop from the otherwise monochrome grid
  zone: graphic
  use: fintech/crypto app icon systems, icon-set presentation sheets
  style: HUD technical

- ref: yk:ref/0194
  kind: icon
  name: dotted-globe-glyph
  what: a sphere built entirely from small dots of varying density/size to suggest latitude/longitude lines and shading, used as a "global/network" icon
  build: dot size and spacing vary to fake curvature shading, no outline, monochrome
  zone: graphic
  use: "global reach"/network icons in fintech or infra products
  style: HUD technical

- ref: yk:ref/0195
  kind: object
  name: pixel-dash-digit-clock-widget
  what: a wide glass pill widget over a photo showing time in a segmented/dashed pixel-style numeral font, plus a small circular sun icon and a secondary smaller time value
  build: main time ~40px using a dashed/incomplete-stroke digital font (deliberately looks like a low-res LED readout), small sun icon in a circle to the left, secondary time + AM/PM stacked small text to the right
  zone: graphic
  use: lock-screen/widget clock faces with a retro-digital feel
  style: glass product UI

- ref: yk:ref/0195
  kind: type
  name: dashed-segment-numeral-font
  what: a numeral typeface where each digit is built from dashed/dotted segment strokes rather than solid ones, giving a scanline or thermal-printer feel
  build: consistent dash length and gap, no solid strokes at all, works best large
  zone: graphic
  use: clock widgets, playful "retro tech" numeral displays
  style: glass product UI

- ref: yk:ref/0196
  kind: material
  name: diagonal-glass-plate-stack
  what: three thin translucent glass parallelograms (rhombus/diamond-tilted plates) stacked diagonally, each supporting a solid white extruded block with a square notch cut into its top face
  build: plates rendered as very thin translucent slabs with soft edge highlights, consistent diagonal offset between the three, single raking studio light producing soft shadows and a bright highlighted edge on each block, dotted diagonal line + small dot accents in the background
  zone: graphic
  use: abstract 3D product/brand hero renders, "layered value" metaphors
  style: glass product UI

- ref: yk:ref/0197
  kind: object
  name: nested-outline-rounded-squares-isometric
  what: three offset, overlapping rounded-square outline frames in isometric perspective, with a noise-textured sphere and a dashed circular progress arc floating beside them
  build: outlines white 1.5px stroke on black, each frame offset diagonally to suggest depth/stacking, partial dashed segments along some edges act as "loading" ticks, one small sphere rendered with fine grain/noise texture and a short arc progress indicator beside it
  zone: graphic
  use: web3/NFT collectible icon concepts, isometric brand marks
  style: HUD technical

- ref: yk:ref/0197
  kind: object
  name: dual-pill-tag-header
  what: two small rounded-outline pill tags side by side at the top of a frame, one naming the project and one naming the variant/option
  build: pill ~28px tall, thin 1px outline, 11-12px text, ~8px gutter between the two
  zone: graphic
  use: labelling a concept/variant on exploration sheets
  style: HUD technical

- ref: yk:ref/0198
  kind: pattern
  name: blurred-hero-object-with-index-nav
  what: a light minimal product page: a large soft-focus metallic dome/orb as hero on the left, and on the right a title block, index number, short description, an italicised pull-quote, and a numbered tab column
  build: hero object heavily blurred/glossy for a premium abstract feel · title bold ~32px + small caps meta line beneath (internship/duration) · thin accent-coloured rule under the meta line · italic quote in quotation marks below body copy · right edge: small vertical stack of index numbers (01-04) with one bolded as current
  zone: graphic
  use: portfolio case-study cover/landing pages
  style: swiss editorial

- ref: yk:ref/0198
  kind: copy
  name: bold-italic-mission-quote
  what: a short italicised statement in quotation marks, set apart from body copy as the project's guiding thesis
  build: italic serif or humanist sans ~15-16px, quotation marks literal, sits directly under a paragraph with slightly more line-height before it
  zone: text
  use: portfolio/case-study "why we built this" statement
  style: swiss editorial

- ref: yk:ref/0199
  kind: pattern
  name: oversized-type-photo-overlap-hero
  what: a huge bold two-line wordmark ("PORT/FOLIO") filling most of the frame, overlapped by a photographic subject (a goldfish) that breaks across both lines, inside a glowing red-bordered rounded frame
  build: frame: rounded corners, 2-3px gradient red-to-transparent border glow, dark near-black background · wordmark ~90-110px heavy sans, tightly kerned, white with a subtle top-lit gradient · photo cutout placed with no clipping mask, allowed to overlap type freely for depth · small ring/dot decorative accents near the photo edges
  zone: graphic
  use: personal portfolio hero covers, bold identity landing pages
  style: brutalist mono

- ref: yk:ref/0199
  kind: layout
  name: side-dot-progress-nav
  what: a vertical column of small circular indicators on the right edge, one filled solid and coloured as "active" among hollow siblings, functioning as section/page progress
  build: dots ~10px, ~16px gutter, active dot filled accent colour, others thin outline only
  zone: graphic
  use: single-page scroll progress or section navigation indicator
  style: brutalist mono

- ref: yk:ref/0199
  kind: copy
  name: tracked-caps-author-footer
  what: a wide-tracked, small all-caps name line centred at the very bottom of a hero frame, bookended by tiny dot glyphs
  build: ~11px, heavy letter-spacing (~4px), small centred dot "•" on each side of the name
  zone: graphic
  use: personal-brand credit lines under a portfolio hero
  style: brutalist mono

- ref: yk:ref/0200
  kind: pattern
  name: nine-tile-emotional-app-grid
  what: a 3x3 grid of small app-screen concept tiles exploring one emotional-wellness theme across many form factors — a clock dial, a bar-chart card, a chat message card, a file-share card, a radar/dot chart, a body-outline stress gauge, a stored-card widget, a mood-status card, and a lifestyle photo
  build: consistent rounded-corner card module across all 9 tiles despite very different content, alternating warm cream/orange and cool grey/blue backgrounds to signal mood polarity across the grid
  zone: graphic
  use: concept-exploration sheets for a single app across many screen ideas
  style: soft product UI

- ref: yk:ref/0200
  kind: chart
  name: three-axis-dot-radar-mini-chart
  what: a small cluster of dots scattered inside a crosshair axis, with a legend of three labelled percentages (Assertive/Neutral/Passive) beside it
  build: dots vary in size/position to plot a fuzzy distribution rather than precise points, thin crosshair axis lines, legend rows each pairing a small coloured dot swatch with a bold percentage
  zone: graphic
  use: personality/tone visualisation widgets
  style: soft product UI

- ref: yk:ref/0200
  kind: chart
  name: vertical-pill-gauge-with-waveform
  what: a tall pill-shaped gauge with a soft radial glow at top (indicating intensity level), a wavy sine-line drawn through its centre, a numeric readout, and a status pill label at the bottom
  build: pill fully rounded both ends, glow concentrated at the top third and fading down, single smooth wave line crossing horizontally, small numeric value floating mid-pill, status pill ("High") anchored at the very bottom
  zone: graphic
  use: stress/energy-level gauges in wellness apps
  style: soft product UI

- ref: yk:ref/0201
  kind: object
  name: layered-chip-supervisor-diagram
  what: an isometric architecture diagram of stacked flat "chip" trays (Supervisor / Service RPC on top, an accent-highlighted "Input Interpreter" layer beneath, more trays below), fed by a row of labelled language-source blocks connected by orange routing lines
  build: dark near-black ground, trays are thin flat isometric rectangles with soft edge glow, one tray is fully lit in saturated orange with a bloom/glow effect naming its function · left-side input blocks (Java, Go, C++, Rust, …) are small elongated isometric bars each with a tiny orange accent dash, connected via right-angled orange lines converging on the highlighted tray
  zone: graphic
  use: compiler/runtime/agent architecture explainer diagrams
  style: HUD technical

- ref: yk:ref/0201
  kind: copy
  name: language-source-tag-list
  what: a vertical list of short language/tool names, each in its own small isometric bar, ending in an ellipsis to imply "and more"
  build: 12px label centred in each bar, consistent bar size, ellipsis as the final list item
  zone: graphic
  use: showing broad language/format support in a technical diagram
  style: HUD technical

- ref: yk:ref/0202
  kind: type
  name: brush-ink-symbol-mark
  what: two thick vertical brush-ink strokes (with visible dry-brush texture and paint spatter) forming an abstract character/torii-gate-like symbol, sitting above a small-caps wordmark
  build: strokes uneven-edged with heavy grain/spatter texture at the tips, asymmetric spacing between the two strokes, on a warm off-white kraft-paper ground
  zone: graphic
  use: Japanese restaurant/izakaya branding, ink-brush logo marks
  style: lo-fi warm

- ref: yk:ref/0202
  kind: copy
  name: dot-bracketed-wordmark
  what: a tracked-out small-caps wordmark flanked by tiny square bullet dots, with a smaller subtitle line beneath giving the category
  build: wordmark ~16px letter-spaced caps with "·" dividers before/after, subtitle ~11px grey below, both centred
  zone: text
  use: restaurant/café logotype lockups with a category tagline
  style: lo-fi warm

- ref: yk:ref/0203
  kind: pattern
  name: triptych-portfolio-cover-recolour
  what: the same "Reality by Design" portfolio-cover layout (moss rock + flower hero, HUD annotation boxes, sidebar bio card, skill-icon grid) rendered three times in three completely different colourways/materials: warm paper-and-photo, black cyberpunk-teal, and pale blueprint-blue
  build: shared skeleton across all three — top nav bar with brand + toggle + local-time readout, central hero image with leader-line callouts to small labelled tag boxes, "core threads" icon-grid bottom-left, bio/contact card bottom-right · only palette, hero imagery (real photo / glowing x-ray flower / particle-cloud illustration) and rule-weight change between versions
  zone: graphic
  use: demonstrating one layout across multiple mood/material variants — palette-swap case study
  style: HUD technical

- ref: yk:ref/0203
  kind: object
  name: leader-line-annotation-box
  what: a small bracketed label box connected to a point on a hero image by a thin straight leader line with a square node at the anchor
  build: box border thin 1px, label text 9-10px uppercase, leader line terminates in a small hollow or filled square marker at the image
  zone: graphic
  use: scientific/technical annotation of a hero visual across many disciplines
  style: HUD technical

- ref: yk:ref/0203
  kind: object
  name: bio-card-with-social-row
  what: a small boxed card giving a short first-person bio paragraph and a row of social-platform text links along the bottom edge
  build: box thin-bordered, 9-10px body text, bottom row of link labels separated by pipe "|" characters or small gaps, right-aligned "not a studio - just me" style personal framing line
  zone: text
  use: personal portfolio "about" sidebar card
  style: HUD technical

- ref: yk:ref/0203
  kind: chart
  name: skill-icon-threads-grid
  what: a small 2-column grid pairing a tiny icon/glyph with a short label naming a skill or focus area ("perceptual interfaces", "embodiment", "IA & AI", "system and tools")
  build: icon ~16px monochrome glyph, label 9px uppercase beside it, rows stacked tightly under a "[ CORE THREADS OF MY WORK ]" bracketed heading
  zone: text
  use: compact skills/focus-area listing on a personal site
  style: HUD technical

- ref: yk:ref/0204
  kind: object
  name: chromatic-glow-toggle-pair
  what: a minimal light-mode toggle switch shown "off" (small circle) and a separate pill shown "on" (elongated capsule), both rendered as glossy 3D soft-plastic forms with a faint rainbow/chromatic-aberration glow fringe around their edges
  build: pure white/very-light-grey base material with soft ambient occlusion shadow beneath, thin coloured light fringe (blue-violet on one side, orange-pink on the other) simulating a prism/glass edge effect, no visible icon or label — form alone communicates state
  zone: graphic
  use: premium/minimal toggle switch component, hero shots for a UI kit
  style: glass product UI

- ref: yk:ref/0205
  kind: material
  name: minimal-two-tone-can-label
  what: a beverage can split cleanly into two flat colour bands (pale blue top, white bottom) with a single bold red circle and bold Japanese wordmark as the only graphic elements
  build: hard horizontal colour split roughly at the can's midpoint, red circle ~15% of can width, logotype in thick brush-style Japanese characters directly below the circle, small Latin subtitle beneath in a plain sans, tiny dot-grid texture accent to one side
  zone: graphic
  use: minimalist beverage/CPG packaging, flag-inspired brand marks
  style: swiss editorial

- ref: yk:ref/0206
  kind: pattern
  name: glass-metric-card-over-blurred-hand
  what: a frosted glass card with a title, a ring/orbit micro-chart, a big bold score, and a small legend column, floating over a warm soft-focus photo of a hand wearing a smart ring
  build: card ~16px radius, heavy blur + slight warm tint, title 16px, ring-chart ~90px with 4-5 concentric thin arcs suggesting layered sleep stages, big score number ~36px bold with a small "Optimal" qualifier beside it, legend: 4 rows each a small coloured dot + label (Awake/REM/Light/Deep)
  zone: graphic
  use: wearable/health app primary metric card
  style: glass product UI

- ref: yk:ref/0206
  kind: chart
  name: dual-stat-mini-cards-with-dot-scale
  what: two small glass cards side by side, each showing a short label, a value, and a tiny horizontal indicator — one a dot-on-a-line scale, one a bracket/arc icon
  build: card ~16px radius matching the parent, label 10px, value 16-18px bold, mini scale uses 3 dots on a thin line with the current one enlarged/filled
  zone: graphic
  use: secondary metrics beside a hero stat card
  style: glass product UI

- ref: yk:ref/0206
  kind: object
  name: step-counter-corner-badge
  what: a small pill badge in the top-right corner showing "current/total" step progress (e.g. "1/14") for a guided tutorial sequence
  build: dark translucent pill, 12px medium text, fixed corner position regardless of underlying content
  zone: graphic
  use: onboarding/tutorial step indicators
  style: glass product UI

- ref: yk:ref/0207
  kind: layout
  name: pill-frame-photo-with-satellite-circles
  what: a tall pill-shaped (fully rounded top and bottom) photo crop with small floating circle callouts connected to points in the image by thin curved lines, plus a smaller mirrored pill shape below with a sparkle glyph
  build: pill photo frame very tall aspect ratio, circles ~50-70px labelled simply ("Circle"), thin bezier connector lines with a dot at the image-side terminus · below the photo, a wordmark set on a horizontally rotated pill (running sideways text) with a small badge medallion overlapping its top edge
  zone: graphic
  use: minimal typography/photography archive covers, Pinterest-style moodboard headers
  style: lo-fi warm

- ref: yk:ref/0207
  kind: type
  name: rotated-pill-sideways-wordmark
  what: a wordmark set vertically (reading bottom-to-top) inside a tall narrow pill shape, used as a decorative title element rather than a horizontal headline
  build: text rotated 90°, small tracked caps, centred within the pill's width, small metadata chip near its top edge
  zone: graphic
  use: archive/index title treatments needing a vertical accent
  style: lo-fi warm

- ref: yk:ref/0207
  kind: object
  name: asterisk-and-plus-accent-glyphs
  what: small decorative glyphs (a six-point asterisk, a plus/sparkle) scattered as punctuation-like accents near text blocks rather than as functional icons
  build: thin-stroke, ~16-24px, placed at natural reading-flow pause points (end of a paragraph, beside a badge)
  zone: text
  use: soft decorative accenting in editorial/archive layouts
  style: lo-fi warm

- ref: yk:ref/0208
  kind: pattern
  name: circle-cropped-classical-painting-hero
  what: a half-circle crop of a dense, dark Flemish-style still-life painting (fruit, flowers, grapes) occupying the left half of the frame, with a bold vertical glitch-styled CJK title stamped across it
  build: circle crop bleeds off the left edge, painting kept in its full rich colour/detail (unlike the flattened UI elsewhere), title uses a rough distressed/brush-stencil CJK typeface in bright red-orange, small thin-outline tag/rule box above the title
  zone: graphic
  use: horror/mystery visual-novel or game key art blending classical art with a punk title treatment
  style: brutalist mono

- ref: yk:ref/0208
  kind: object
  name: gradient-capsule-cjk-tabs
  what: two tall rounded-capsule shapes with a top-to-bottom colour gradient (dark to bright orange), each containing small vertical CJK text and a small caption chip at the base
  build: capsule fully rounded, gradient transitions from near-black at top to saturated orange at bottom, vertical text sits in the upper portion, small rounded rectangle caption tag anchored at the bottom edge
  zone: graphic
  use: chapter/category selector tabs in a dark editorial game site
  style: brutalist mono

- ref: yk:ref/0208
  kind: object
  name: top-nav-pill-tag-row
  what: a row of small rounded-outline text tags in the header acting as a primary nav (category names), with one first tag styled as a bordered "brand" chip distinct from the plain-text nav items after it
  build: first tag has a full rectangular border, subsequent items are plain uppercase text with generous letter-spacing and no border, evenly spaced across the header
  zone: graphic
  use: minimal top navigation for editorial/game microsites
  style: brutalist mono

- ref: yk:ref/0209
  kind: pattern
  name: macos-finder-two-pane-window
  what: a recreated macOS Finder window: traffic-light window controls, a left sidebar with Favourites/Locations sections and icon-labelled rows, and a right content pane showing back/forward nav, a section title, and a grid of folder icons grouped by date heading
  build: sidebar rows: icon 16px + label 13px, one row shown selected with a soft rounded highlight fill · content pane: bold section title 20px, date-group headers ("Today", "Yesterday", "Previous 7 Days") in 12px grey, folder icons ~48px with item-count caption beneath each, folders in a uniform blue gradient icon style
  zone: graphic
  use: OS-chrome mockups for app/file-management product shots, developer portfolio backgrounds
  style: glass product UI

- ref: yk:ref/0209
  kind: object
  name: date-grouped-icon-grid
  what: a file/folder icon grid subdivided into labelled date-range sections, each section a simple heading followed by a evenly-spaced row of icons
  build: heading 12px grey uppercase-ish, icon grid 3+ per row with consistent ~64px column width, caption two-line (name + item count) under each icon
  zone: graphic
  use: file browsers, downloads/asset managers grouped by recency
  style: glass product UI

- ref: yk:ref/0210
  kind: object
  name: sidebar-favourite-row-active-state
  what: a sidebar list row shown in its "active/hovered" state with a soft rounded rectangle highlight behind the icon+label and a cursor arrow visibly hovering over it
  build: highlight fill low-contrast grey rounded rect matching row height, cursor rendered as a literal pointer graphic to stage the interaction for a screenshot/demo
  zone: graphic
  use: documenting hover/active states in UI-kit or tutorial screenshots
  style: glass product UI

- ref: yk:ref/0210
  kind: layout
  name: blurred-photo-window-chrome-frame
  what: an OS window rendered sharp and in-focus while the surrounding desktop wallpaper (a tree photo) is heavily blurred, isolating full attention on the window content
  build: background blur very heavy (bokeh-like), window drop shadow soft and wide, a tiny greyed-out URL/caption sits centred above the window at very low opacity
  zone: graphic
  use: product-shot staging for OS-level app screenshots
  style: glass product UI

- ref: yk:ref/0211
  kind: object
  name: floating-stat-pill-row-over-photo
  what: a wide rounded pill bar with 4 evenly-spaced label/value stat pairs, floating semi-transparently over a blurred glossy product photo (an alloy wheel)
  build: pill very light near-white translucent fill, heavy blur showing the photo through it, 4 columns each: bold label 14px + small bullet + value 11px grey, thin vertical dividers implied by spacing alone (no rule lines)
  zone: graphic
  use: trading/analytics summary bars, stat headers over hero photography
  style: soft product UI

- ref: yk:ref/0211
  kind: chart
  name: color-coded-calendar-heatmap-grid
  what: a full month calendar grid where each day cell is tinted by outcome (green-tinted = good/win, red-tinted = loss, plain grey = no activity/weekend), with a small count badge in the corner of active cells
  build: 7-column week grid, day number top-left of each cell, tint fills the whole cell at low saturation, small circular count badge with an icon glyph pinned to the bottom-right of active cells, month/year title large and bold above the grid
  zone: graphic
  use: trading journals, habit trackers, any day-outcome calendar visualisation
  style: soft product UI

- ref: yk:ref/0211
  kind: material
  name: glossy-metal-object-blur-backdrop
  what: a glossy dark metallic object (wheel/rim) rendered with strong specular highlights and heavy blur, used purely as atmospheric texture behind flat UI cards rather than as a legible subject
  build: high specular contrast, motion-blur-like softness, desaturated toward the card overlap areas so UI text stays legible
  zone: graphic
  use: adding premium material texture behind dashboard cards without competing with UI legibility
  style: soft product UI

## Stylistic registers in this batch

- HUD technical: 0159, 0162, 0163, 0171, 0175, 0176, 0180, 0192, 0194, 0197, 0201, 0203
- soft product UI / soft relief: 0160, 0161, 0165, 0183 (soft-relief menu), 0185, 0187, 0188, 0200, 0211
- glass product UI: 0168, 0170, 0173, 0177 (panel), 0181 (pagination), 0182, 0183, 0189, 0190, 0195, 0196, 0197 (tag pair), 0204, 0206, 0209, 0210
- NieR menu: 0166
- print halftone: 0167
- lo-fi warm: 0169, 0181, 0191, 0193, 0202, 0207
- brutalist mono: 0164, 0172, 0177 (title), 0184, 0186, 0194 (glyph, cross-listed), 0199, 0208
- swiss editorial: 0174, 0178, 0179, 0198, 0205
