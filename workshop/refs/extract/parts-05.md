# Extraction batch 05 — yk:ref/0212 … yk:ref/0264

- ref: yk:ref/0212
  kind: pattern
  name: specimen-label-poster
  what: sci-fi "recovered artifact" poster — bio-mechanical bone/mesh render with a data-sheet header and brand sign-off
  build: top-left monospace tech header (ID line, MATERIAL:, ORIGIN: rows) · asterisk glyph + one-line annotation mid-frame ·
         three plus-crosshair marks in a row lower third · brand handle small caps · huge tracked-condensed title word ·
         one-line italic subtitle beneath title
  zone: graphic
  use: product drop pages, generative-art collection covers, artifact/lore screens
  style: HUD technical
- ref: yk:ref/0212
  kind: material
  name: bone-mesh-fusion
  what: organic bone surface half-dissolved into a glowing dot-mesh lattice, as if synthetic fabric is growing through it
  build: matte cream bone texture retains ambient occlusion in crevices · overlaid hex/dot particle mesh in cool white-violet,
         denser where "infected", fading to nothing at bone edges
  zone: graphic
  use: sci-fi material studies, "corruption" or "upgrade" visual metaphors, loading/transform states
  style: HUD technical
- ref: yk:ref/0212
  kind: object
  name: crosshair-triplet
  what: three small plus-shaped crosshair marks placed in a straight row as a measurement/scan device
  build: 1px thin cross strokes, extend slightly past their own center gap · evenly spaced, ignoring underlying artwork
  zone: graphic
  use: technical overlays, camera/scan HUDs, annotation rhythm across a poster
  style: HUD technical
- ref: yk:ref/0212
  kind: type
  name: monospace-data-header
  what: three-line technical caption block reading like a spec sheet
  build: all-caps monospace, tight leading, label:value pairs on each line, left-aligned, small size relative to canvas
  zone: text
  use: any "system readout" framing device, terminal banners, artifact cards
  style: HUD technical

- ref: yk:ref/0213
  kind: pattern
  name: changelog-card
  what: a floating white card listing recent product updates, over a glossy abstract photo background
  build: rounded-24 white card, generous inner padding · icon-in-circle (pastel tint) + date caption + one-line body per row ·
         thin 1px divider between rows · full-width pill button at the bottom, outline style, centered label
  zone: graphic
  use: what's-new panels, release notes, onboarding recap
  style: glass product UI
- ref: yk:ref/0213
  kind: object
  name: icon-date-row
  what: a list row combining a tinted icon chip, a date stamp, and a two-line description
  build: 32px circle icon chip at 10% tint of its icon color · date in small caps grey above the body text · body text in
         regular weight, two lines max
  zone: graphic
  use: changelog rows, activity feeds, notification lists
  style: glass product UI
- ref: yk:ref/0213
  kind: material
  name: liquid-holographic-backdrop
  what: an oil-slick / liquid-metal photographic texture behind a UI card, iridescent blue-violet-pink
  build: high-gloss fluid photography, dark pooled shadow bottom-left, specular streaks; a faint dotted grid overlaid on top
         signals "design canvas" rather than a real photo
  zone: graphic
  use: hero backdrops for UI showcases, dreamy fintech/beauty brand grounds
  style: glass product UI
- ref: yk:ref/0213
  kind: layout
  name: card-over-photo-with-grid
  what: a dashed alignment grid visible through/around a floating card, signalling this is a design-file crop not a live screen
  build: sparse dashed guide lines at wide intervals, some running through the card, some only in the photo margin
  zone: graphic
  use: portfolio presentation frames, Figma-style shot staging
  style: glass product UI

- ref: yk:ref/0214
  kind: object
  name: neumorphic-add-remove-pair
  what: two soft circular buttons, one embossed (raised, "add") and one debossed (pressed, "remove")
  build: identical light-grey ground colour · raised circle: light shadow top-left, dark shadow bottom-right, centered plus glyph
         at 40% opacity · pressed circle: shadows inverted (dark top-left, light bottom-right) inside the circle, x glyph
  zone: graphic
  use: quantity steppers, item add/remove controls, list-row actions
  style: soft relief
- ref: yk:ref/0214
  kind: effect
  name: dual-direction-soft-shadow
  what: the core neumorphism trick — same-colour shadow pair (light + dark) at opposite corners to fake extrusion or intrusion
  build: light shadow ~8px blur offset up-left, dark shadow ~8px blur offset down-right for raised; swap offsets and use inset
         for pressed
  zone: graphic
  use: any soft-UI button, toggle, or card state
  style: soft relief

- ref: yk:ref/0215
  kind: pattern
  name: dark-style-board-collage
  what: a moodboard/style-sheet composing UI fragments, photos and metadata into one loose grid on black
  build: mixed corner-radii cards overlapping at slight offsets · thin vertical guide lines full-bleed in the background ·
         small caption "STYLE BOARD" bottom-right in tracked caps
  zone: graphic
  use: pitch decks, design-system cover slides, concept boards
  style: dark moodboard collage
- ref: yk:ref/0215
  kind: object
  name: checklist-panel-fading
  what: a task list panel ("Planner") whose rows fade to transparency toward the bottom, implying more content below
  build: dark card, bold title + small counter badge · each row: label + subtext + trailing state circle (check / ring /
         empty) · opacity of rows decreases stepwise down the stack
  zone: graphic
  use: itinerary apps, checklists, "peek" list previews
  style: dark moodboard collage
- ref: yk:ref/0215
  kind: chart
  name: dot-matrix-calendar
  what: a small calendar rendered purely as a grid of dots, some highlighted in accent yellow to mark active days
  build: date numeral + month label header · dense square grid of small dots, uniform grey, a sparse few recoloured accent
         to mark specific days — no gridlines, no numerals inside the grid
  zone: graphic
  use: habit trackers, activity heatmaps, minimalist calendar widgets
  style: dark moodboard collage
- ref: yk:ref/0215
  kind: object
  name: stacked-time-readout
  what: a large digital clock readout split into big time, small running-timer, and AM/PM stacked as its own column
  build: huge tracked numerals for the time · small elapsed-timer text with dot bullet to its left · AM/PM stacked vertically
         in a tiny two-line column at far right, on a frosted dark pill
  zone: graphic
  use: lock-screen widgets, workout timers, live-activity chips
  style: dark moodboard collage
- ref: yk:ref/0215
  kind: object
  name: tag-chip-on-photo
  what: a small pill label overlaid at the base of a photo card, naming its category
  build: rounded-full chip, translucent dark fill, accent-yellow text, sits half-on/half-off the card edge
  zone: graphic
  use: labelling photo cards in a grid, category tags on thumbnails
  style: dark moodboard collage

- ref: yk:ref/0216
  kind: layout
  name: circle-mask-photo-with-orbit
  what: a photograph cropped hard into a large circle, with a second thin ring drawn slightly offset from it like an orbit
  build: full photo bleeds only within the circular mask · a free-standing 1-2px ring (partial or full) overlaps the circle
         boundary, offset up-right, painted in a metallic accent line
  zone: graphic
  use: dramatic hero crops, "moon/eclipse" framing devices, luxury product shots
  style: romantic dark editorial
- ref: yk:ref/0216
  kind: material
  name: selective-desaturation
  what: one element (the flowers) kept in full saturated colour while the rest of the same photo (leaves/stems) is pushed
        to near-monochrome grey
  build: colour keying by subject rather than by area — red stays vivid red, foliage drops to charcoal grey with only a hint
         of green
  zone: graphic
  use: drawing the eye to a single motif inside a busy photo, "in memoriam" or luxury beauty moods
  style: romantic dark editorial
- ref: yk:ref/0216
  kind: effect
  name: escaping-petals
  what: loose petals and gold thread-lines drift outside the frame's main circular boundary, breaking containment
  build: a few detached petal shapes and thin curling gold lines placed past the circle's edge, implying motion/wind
  zone: graphic
  use: adding life to an otherwise static centered composition, seasonal/romantic campaigns
  style: romantic dark editorial

- ref: yk:ref/0217
  kind: icon
  name: quatrefoil-mask-shape
  what: a distinctive four-lobed flower/clover silhouette used as a photo mask and icon frame instead of a circle or square
  build: four overlapping rounded lobes meeting at a pinched center, consistent radius per lobe, used at multiple sizes for
         photos, blurred thumbnails and solid icon tiles
  zone: graphic
  use: a signature avatar/tile shape for a brand system, standing in for the usual circle avatar
  style: dark moodboard collage
- ref: yk:ref/0217
  kind: object
  name: timer-chip-with-dot
  what: a small pill chip showing a running duration next to a status dot
  build: rounded-full dark chip, small filled dot (state colour) + monospace time value, sits top-right of its group
  zone: graphic
  use: session/recording timers, live status chips
  style: dark moodboard collage
- ref: yk:ref/0217
  kind: object
  name: outline-pill-cta
  what: a ghost/outline button with rounded-full shape and generous horizontal padding
  build: 1px light stroke, transparent fill, centered label, no icon — reads as a secondary action next to filled tiles
  zone: graphic
  use: "start", "continue" or secondary CTAs beside bolder primary tiles
  style: dark moodboard collage
- ref: yk:ref/0217
  kind: layout
  name: color-block-divider-bars
  what: tall solid-colour vertical bars of varying widths used as a background rhythm behind floating tiles
  build: two or three flat-colour rounded-rectangle bars of different widths/heights placed behind smaller foreground tiles,
         acting as colour accents rather than containers
  zone: graphic
  use: breaking a busy moodboard into colour zones, adding a graphic backbone to a loose collage
  style: dark moodboard collage
- ref: yk:ref/0217
  kind: object
  name: numbered-annotation-system
  what: small numeral tags (01, 02, 03…) placed beside each tile to catalogue a style sheet
  build: 2-digit numerals, tiny size, low-contrast grey, positioned consistently at one corner of each tagged element
  zone: graphic
  use: style guides, moodboards, teaching/critique decks that need a reference index
  style: dark moodboard collage
- ref: yk:ref/0217
  kind: copy
  name: name-plus-trait-caption
  what: a caption pairing a person's name with a short descriptive trait beneath their photo
  build: bold name line, small muted trait line directly below, tiny status dot after the name
  zone: graphic
  use: character/profile cards, casting boards, team directories with personality
  style: dark moodboard collage

- ref: yk:ref/0218
  kind: object
  name: skeuo-folder-with-cover-art
  what: a macOS-style folder icon whose front face is filled edge-to-edge with a gradient/photo texture instead of flat colour
  build: folder silhouette (tab notch top-left) · photo/gradient clipped to the folder shape, slight gloss · label text in
         bottom-left safe zone · small dark rounded badge (add / more icon) inset bottom-right corner
  zone: graphic
  use: file browsers, project/collection icons, media library covers
  style: skeuomorphic folder icons
- ref: yk:ref/0218
  kind: object
  name: folder-peek-with-content
  what: a folder rendered slightly open, with a white "document" sheet peeking out above the fold line
  build: folder back-flap at full opacity, a lighter rectangle (the "file") overlapping the top edge, folder front in front
         of the file's bottom portion — implies depth via z-order alone
  zone: graphic
  use: "recently added" folder states, empty vs full folder distinction
  style: skeuomorphic folder icons
- ref: yk:ref/0218
  kind: object
  name: folder-metadata-footer
  what: a folder icon whose label area carries a secondary metadata line (date) under the title
  build: bold label line, smaller muted date line directly beneath, both left-aligned inside the folder's flap area
  zone: graphic
  use: file cards that need a timestamp without a separate list view
  style: skeuomorphic folder icons
- ref: yk:ref/0218
  kind: material
  name: dot-grid-ground
  what: a faint evenly-spaced dot grid used as a neutral background for icon/asset presentation
  build: small grey dots on off-white, wide uniform spacing, no lines — reads as graph paper without the rigidity
  zone: graphic
  use: icon sheets, component libraries, "on grid" presentation shots
  style: skeuomorphic folder icons

- ref: yk:ref/0219
  kind: pattern
  name: color-palette-template-sheet
  what: a branded one-page template presenting a curated colour palette with textured swatches, codes and type tests
  build: dark ground · top kicker line + centered serif-ish title ("Green Color Palettes") · four tall tombstone-shaped
         swatches with baked-in hex labels · rotated micro-copy running up each side edge · small branded thumbnail card
         lower-right
  zone: graphic
  use: palette decks, brand colour documentation, social carousel templates
  style: brand palette template
- ref: yk:ref/0219
  kind: object
  name: grain-texture-swatch
  what: a colour swatch rendered with visible painterly/paper grain instead of a flat fill
  build: rounded-top capsule shape, mottled tonal variation within one hue, hex code set in small caps at the base in
         high-contrast text
  zone: graphic
  use: giving a palette warmth/material feel instead of flat digital colour chips
  style: brand palette template
- ref: yk:ref/0219
  kind: object
  name: two-tone-gradient-chip
  what: a small rounded-full chip showing a smooth gradient between two named colours from the palette
  build: pill shape, left-to-right gradient, the two hex values set as plain text to the chip's left
  zone: graphic
  use: showing colour pairings/gradients derived from a palette
  style: brand palette template
- ref: yk:ref/0219
  kind: type
  name: script-wordmark-test
  what: the same word ("Colorful") repeated four times in a flowing script typeface, each instance recoloured from the palette
  build: identical script glyphs, varying only fill colour and opacity, arranged in a row for side-by-side comparison
  zone: graphic
  use: testing how a palette performs on a decorative typeface, palette documentation
  style: brand palette template
- ref: yk:ref/0219
  kind: object
  name: monochrome-tint-quad
  what: four small labelled circles (A/B/C/D) each showing a different tint/shade step of one palette colour
  build: uniform small circle size, single letter label above each, values ranging light-to-dark or split half/half between
         two hues
  zone: graphic
  use: quick tonal-range reference for a chosen colour
  style: brand palette template
- ref: yk:ref/0219
  kind: material
  name: dither-gradient-strip
  what: a horizontal bar transitioning through the palette using a visible dither/pixelation instead of a smooth blend
  build: coarse pixel-dither pattern blending one swatch colour into the next, full-bleed width, thin strip height
  zone: graphic
  use: retro/lo-fi palette previews, texture accents on brand sheets
  style: brand palette template

- ref: yk:ref/0220
  kind: object
  name: floating-glass-toolbar
  what: a horizontal formatting toolbar rendered as a chrome/glass capsule floating on pure black
  build: rounded-full metallic-bevel outline (light rim top, dark rim bottom) · icon groups separated by subtle vertical
         dividers: undo/redo, "123" numeral toggle, bold/italic, alignment triplet · one icon isolated at the far end inside
         its own bordered square with a brighter highlighted state
  zone: graphic
  use: rich-text editor toolbars, floating context menus, command bars
  style: glass product UI
- ref: yk:ref/0220
  kind: effect
  name: metallic-bevel-rim-light
  what: a thin light-catching highlight run along the top edge of a dark rounded shape, dark falloff along the bottom edge
  build: 1-2px gradient stroke, near-white at top arc fading to near-black at bottom arc, applied to the whole toolbar outline
  zone: graphic
  use: giving flat dark UI chrome/hardware weight, skeuomorphic toolbar and dial edges
  style: glass product UI
- ref: yk:ref/0220
  kind: object
  name: numeral-toggle-chip
  what: a small chip labelled "123" acting as a distinct control from the surrounding text-formatting icons
  build: rounded-rect chip, slightly inset/darker than its neighbours to read as its own group, bold monospace-leaning digits
  zone: graphic
  use: number-format toggles, list/ordered-list switches in editors
  style: glass product UI

- ref: yk:ref/0221
  kind: object
  name: neumorphic-icon-quad
  what: four blank app-icon tiles differentiated only by subtle bevel direction, in one flat off-white colourway
  build: rounded-square tiles, each with a slightly different combination of outer/inner shadow to read as convex, concave,
         flat or glossy — no colour or iconography needed to tell them apart
  zone: graphic
  use: teaching/demonstrating neumorphic bevel variants, icon-style guides
  style: soft relief

- ref: yk:ref/0222
  kind: pattern
  name: project-stage-mobile-screen
  what: a mobile screen showing one stage of a multi-step project ("Planning") with a soft gradient hero and a progress card
  build: frosted square back-button top-left · soft orange-pink gradient blob filling the top third like ambient light ·
         small tinted phase chip ("Week 1-2") · large serif headline · body paragraph · white stat card (label, subtext,
         big percentage, thin progress bar) · bottom tab bar with icon+label, active item bold
  zone: graphic
  use: onboarding/roadmap apps, project-phase trackers
  style: soft product UI
- ref: yk:ref/0222
  kind: object
  name: phase-chip
  what: a small tinted pill naming the current phase/week of a process
  build: pale tint background matching the accent hue, small dark text, sits directly above the headline
  zone: graphic
  use: step indicators, sprint/phase labels
  style: soft product UI
- ref: yk:ref/0222
  kind: object
  name: stat-card-with-thin-bar
  what: a card pairing a bold headline label with a giant percentage number and a hairline progress bar beneath
  build: label + subtext stacked left, oversized percentage numeral right-aligned, full-width 2px progress track under both,
         filled portion in the accent colour
  zone: graphic
  use: progress summaries, completion widgets, dashboard KPI tiles
  style: soft product UI

- ref: yk:ref/0223
  kind: pattern
  name: color-palette-template-sheet-red
  what: the same branded palette-sheet template as the green version, recoloured for a red palette on navy ground
  build: identical structure — kicker, title, four tombstone swatches, hex codes, split-colour duo chips, monochrome dot
         set, script type test, branded thumbnail, dither strip — proving the template is a reusable system, not one-off art
  zone: graphic
  use: confirming a palette-presentation template can be swapped across colourways
  style: brand palette template
- ref: yk:ref/0223
  kind: object
  name: split-color-duo-chip
  what: a small circle split exactly in half between two palette colours, for showing direct pairings
  build: hard vertical split down the middle of a circle, no gradient, two flat halves
  zone: graphic
  use: quick "these two go together" colour pairing reference
  style: brand palette template

- ref: yk:ref/0224
  kind: pattern
  name: case-study-tile-grid
  what: a two-row grid of portfolio tiles for one branding project, each tile a different artifact type (type specimen,
        photo, poster mockup, CTA tile, ad, app screen, logo lockup, stat tile)
  build: consistent tile corner radius and gutter across all cells · a thin breadcrumb strip of pill tags above the grid
         (service / category / client / year) separated by vertical rules
  zone: graphic
  use: agency/portfolio case-study pages, Behance/Dribbble project covers
  style: swiss editorial
- ref: yk:ref/0224
  kind: object
  name: type-specimen-tile
  what: a small tile showing a typeface's name and a 2x2 grid of letterform samples
  build: family name + "Typography" label top/bottom, four rounded chips each with a different case/ligature sample (Aa,
         BbCc, DdEe, Ff)
  zone: graphic
  use: brand-guideline pages, type-pairing documentation
  style: swiss editorial
- ref: yk:ref/0224
  kind: object
  name: process-status-tile
  what: a tile combining a soft gradient texture, a small circular avatar-badge, and a status caption ("processing…")
  build: gradient/marble texture fills the tile, avatar+status chip anchored bottom-left, headline text top-left
  zone: graphic
  use: AI/verification product screenshots, "working" states in case studies
  style: swiss editorial
- ref: yk:ref/0224
  kind: object
  name: outdoor-ad-mockup-tile
  what: a small photo of a printed poster mounted on a real bus-shelter/street ad frame, used inside a digital grid
  build: environmental photo with the campaign artwork composited flat onto the ad panel, slight perspective kept
  zone: graphic
  use: proving a digital design "in the wild", campaign case studies
  style: swiss editorial
- ref: yk:ref/0224
  kind: object
  name: stat-proof-tile
  what: a tile stating a growth metric next to a small fanned stack of user photos
  build: bold stat headline ("50K+ users"), muted subtext line, 2-3 overlapping rounded photo cards fanned bottom-right
  zone: graphic
  use: social-proof sections, "join X users" tiles
  style: swiss editorial

- ref: yk:ref/0225
  kind: pattern
  name: two-column-diagram-slide
  what: a dark slide pairing a short bold title on the left with an explanatory paragraph on the right, divided by a
        vertical rule, above a network diagram
  build: equal-width two columns separated by a 1px full-height rule · title in caps sans, body in regular weight small size
  zone: graphic
  use: concept-definition slides, glossary/explainer decks
  style: HUD technical
- ref: yk:ref/0225
  kind: chart
  name: radiating-hub-node-diagram
  what: a network diagram of a dot grid where one central node connects outward to a ring of neighbours via straight lines
  build: uniform dot grid as background context · central node rendered largest and brightest · 8-12 straight connector
         lines to selected dots one ring out, those dots enlarged slightly to show "connected" state
  zone: graphic
  use: networking/relationship-building metaphors, "hub and spoke" system diagrams
  style: HUD technical

- ref: yk:ref/0226
  kind: object
  name: folder-tab-stat-card
  what: a dark card shaped like a folder tab (notch top-left) combining a blurred photo header with stat numbers below
  build: blurred bokeh photo band across the top with small caption text top-right · folder-notch divider into a dark body ·
         bold title + muted subtitle · two stat pairs bottom row (big numeral+label left, plain label+count right)
  zone: graphic
  use: notes/document app cards, "N items" summary tiles
  style: glass product UI
- ref: yk:ref/0226
  kind: type
  name: numeral-plus-small-label
  what: a big bold numeral immediately followed by a small regular-weight unit label on the same baseline
  build: numeral roughly 3x the label's size, label sits at the numeral's baseline not centered, tight kerning between them
  zone: graphic
  use: stat displays, dashboard KPIs, "05 Doc" style counters
  style: glass product UI

- ref: yk:ref/0227
  kind: pattern
  name: brew-control-screen
  what: a dark coffee-app screen combining a circular percentage dial with a cream info card and stepper/CTA row
  build: top bar: back chevron + "Pro" toggle chip · large ring dial with tick marks all around, big numeral+unit centered,
         label below · cream rounded card breaking the dark background, two stats side by side (value+unit, label below
         each) · stepper (round qty chip with -/+) beside a filled pill CTA
  zone: graphic
  use: brewing/dosage apps, any "dial + recipe card" control screen
  style: soft product UI
- ref: yk:ref/0227
  kind: chart
  name: tick-ring-dial
  what: a circular gauge made of radial tick marks around the rim instead of a filled arc
  build: evenly spaced short radial lines forming a full or partial ring, a subset near the "value" highlighted brighter,
         big numeral + % + label centered inside
  zone: graphic
  use: extraction/brew percentage, battery-style radial meters, "effort" dials
  style: soft product UI
- ref: yk:ref/0227
  kind: chart
  name: teardrop-taste-map
  what: a blob/teardrop-shaped 2D slider mapping a value against two opposing axis pairs (weak/strong, underdeveloped/bitter)
  build: organic teardrop shape filled with a radial gradient, axis labels placed at top/bottom/left/right of the shape,
         a single draggable dot marks the current position
  zone: graphic
  use: taste/flavour profiles, mood mapping, any 2-axis qualitative slider
  style: soft product UI
- ref: yk:ref/0227
  kind: object
  name: stepper-plus-cta-row
  what: a quantity stepper and a primary action button placed side by side as one control row
  build: rounded dark pill stepper ("1x" + minus + plus) directly followed by a separate filled pill CTA of equal height
  zone: graphic
  use: order/brew/purchase screens needing quantity + confirm in one row
  style: soft product UI

- ref: yk:ref/0228
  kind: material
  name: fisheye-dot-grid-mark
  what: a small dot-grid patch with one large solid circle overlapping its center, reading as a lens/bulge distortion
  build: sparse regular dot grid, one oversized filled circle placed concentrically over the grid's middle, both on flat
         light ground
  zone: graphic
  use: negative-space logo devices, "focus point" markers, minimal background motifs
  style: swiss editorial

- ref: yk:ref/0229
  kind: object
  name: glow-blur-toggle
  what: an ON/OFF switch rendered with heavy motion-blur glow instead of a crisp mechanical toggle
  build: pill track half dark/"OFF" half warm-glow "ON" · knob rendered as a frosted glass disc with a fine dot-texture
         grip pattern · the whole knob has a bright orange bloom radiating outward, blurring its own edges
  zone: graphic
  use: hero/marketing shots of a toggle component, "power on" moments, glassmorphic switches
  style: glass product UI
- ref: yk:ref/0229
  kind: copy
  name: challenge-progress-header
  what: a header line pairing a challenge name with a day-count fraction, right-aligned
  build: left: challenge title in host language; right: "N / total" counter in the same weight, opposite ends of one row
  zone: text
  use: daily-challenge trackers, "day X of Y" banners
  style: glass product UI

- ref: yk:ref/0230
  kind: type
  name: distressed-splatter-display
  what: an oversized condensed display wordmark with a paint-spray/distressed bottom edge instead of a clean baseline
  build: bold ultra-condensed caps, red fill, bottom third of each letter breaks into speckled spray particles fading to
         nothing
  zone: graphic
  use: music/rave branding, aggressive event posters, glitch-adjacent titling
  style: industrial rave HUD poster
- ref: yk:ref/0230
  kind: object
  name: targeting-reticle
  what: a concentric-ring crosshair with an X mark at its exact center, used as a poster's focal anchor
  build: two or three thin concentric circles, dashed outer ring, bold X glyph dead-center, small arrow glyphs flanking
         left/right
  zone: graphic
  use: HUD/targeting motifs, "focus here" anchors on dense posters
  style: industrial rave HUD poster
- ref: yk:ref/0230
  kind: icon
  name: pixel-glyph-icon-set
  what: a small family of 8-bit/pixel-art glyphs (arrows, bird/creature marks) scattered as iconography
  build: chunky square-pixel construction, 1-bit black/white or red, no anti-aliasing, mixed with fine-line technical marks
  zone: graphic
  use: retro-tech/rave branding, terminal-adjacent iconography, easter-egg marks
  style: industrial rave HUD poster
- ref: yk:ref/0230
  kind: layout
  name: dense-hud-margin-annotations
  what: a poster margin filled with tiny scattered codes, coordinates and corner brackets treating the whole canvas like an
        instrument panel
  build: small monospace fragments (IDs, plus/minus marks, tiny squares) placed irregularly along all four edges, low
         visual weight individually but dense in aggregate
  zone: graphic
  use: album art, tech/military-inspired posters, building a "system telemetry" atmosphere
  style: industrial rave HUD poster

- ref: yk:ref/0231
  kind: motion
  name: halftone-diamond-assembly
  what: a diamond/rhombus burst built from a halftone dot field, dot size grading from large at the center to pinpoints at
        the tips — implies the shape is assembling or dissolving
  build: radial dot-size gradient along both diagonals, pure black/white, symmetric on both axes
  zone: graphic
  use: loading/transition animations, logo reveal/dissolve effects, halftone brand marks
  style: print halftone

- ref: yk:ref/0232
  kind: pattern
  name: warm-lifestyle-moodboard
  what: a two-panel product board pairing a spec/index panel with a photo-plus-app-preview panel, in warm terracotta tones
  build: left panel: concentric target-ring icon, big index numeral, two pill tags · right panel: interior photo with an
         arch-shaped cut-out revealing a phone screen preview beneath, vertical microcopy along the edge, ornate rule
         flanking a script+serif wordmark at the base
  zone: graphic
  use: furniture/lifestyle app landing sections, "spec meets lifestyle photo" hybrids
  style: warm editorial moodboard
- ref: yk:ref/0232
  kind: icon
  name: concentric-ring-target-mark
  what: a simple icon made of several evenly spaced concentric circle outlines, no center dot
  build: 4-5 thin rings, consistent gap, monochrome line on tint background
  zone: graphic
  use: "focus/relax" iconography, radar-style brand marks
  style: warm editorial moodboard
- ref: yk:ref/0232
  kind: layout
  name: arch-cutout-reveal
  what: a photo card with an arch-shaped negative-space cutout revealing a second layer (an app screen) underneath
  build: photo card top layer, a rounded-arch hole cut from its lower half, a phone-shaped screen preview sits exactly
         behind the hole so it reads through cleanly
  zone: graphic
  use: layered hero compositions mixing lifestyle photography with product screens
  style: warm editorial moodboard
- ref: yk:ref/0232
  kind: type
  name: ornate-rule-wordmark
  what: a small wordmark flanked by delicate double-line ornamental rules on both sides, with a bullet dot separator
  build: script or italic word + regular word paired, thin nested-line ornaments extending left and right, centered
  zone: graphic
  use: boutique/lifestyle brand footers, section closers needing a decorative full stop
  style: warm editorial moodboard

- ref: yk:ref/0233
  kind: pattern
  name: vertical-system-stack-diagram
  what: a centered serif headline over a vertically stacked isometric diagram explaining a layered system (org / infra /
        models), with curved lines converging from the edges into the top and bottom
  build: kicker + serif headline top-center · symmetric curved guide lines sweeping in from top corners and out to bottom
         corners · stacked isometric modules connected by chevron shapes, bracket + label at each tier on the right
  zone: graphic
  use: platform/architecture explainer slides, "how it all fits together" hero sections
  style: HUD technical
- ref: yk:ref/0233
  kind: object
  name: bracket-tier-label
  what: a square bracket spanning a vertical range of a diagram, with a rotated label naming that tier
  build: thin bracket line hugging the height of the relevant diagram section, small caps label rotated 90° alongside it
  zone: graphic
  use: annotating stacked/layered diagrams without cluttering the artwork itself
  style: HUD technical
- ref: yk:ref/0233
  kind: effect
  name: orbit-ellipse-highlight
  what: one module in a technical diagram singled out with red elliptical orbit rings and a small "core" icon inside
  build: two overlapping red ellipses at odd angles around one module, thin red accent lines to small satellite icons,
         rest of the diagram stays monochrome
  zone: graphic
  use: drawing attention to "this is the important part" node in a system diagram
  style: HUD technical

- ref: yk:ref/0234
  kind: layout
  name: tilted-glass-panel-grid
  what: a perspective-skewed grid of glass/metal panels held together by visible clip hardware, each panel a separate
        graphic tile
  build: panels rendered at a raking angle (perspective distortion), thin chrome frame lines running panel to panel,
         red pinch-clip hardware marking the joints
  zone: graphic
  use: fragmented/exploded-view compositions, industrial or cyber album art
  style: industrial rave HUD poster
- ref: yk:ref/0234
  kind: effect
  name: glowing-halftone-burst
  what: an organic flower/burst shape rendered entirely from a glowing halftone dot texture, in both white and red variants
  build: dot density and size varying to build the burst's silhouette and shading, strong bloom/glow on the brightest dots
  zone: graphic
  use: energy/impact motifs, "hit" or "signal" moments in motion or print design
  style: industrial rave HUD poster
- ref: yk:ref/0234
  kind: object
  name: numbered-black-swatch-tile
  what: a small solid black square with a plus-corner mark and a two-digit index number beside it
  build: flat black square, thin plus/crosshair mark at one inner corner, small numeral label just outside the tile
  zone: graphic
  use: cataloguing/indexing tiles across a dense collage, "figure 01/02/03" markers
  style: industrial rave HUD poster

- ref: yk:ref/0235
  kind: pattern
  name: light-kpi-dashboard
  what: a light SaaS dashboard combining a greeting header, three stat cards, a checklist, kanban-style task cards and a
        project list
  build: top bar: logo, greeting, search/notif/avatar, filled "+Create" pill · stat row: numeric tile, line-chart tile,
         radial-progress tile with dot legend · checklist card with mixed checked/unchecked/greyed rows · task cards with a
         context-menu popover (Pin/Edit/Delete) · project row cards with status pill + round thumbnail
  zone: graphic
  use: general-purpose admin/productivity dashboards
  style: glass product UI
- ref: yk:ref/0235
  kind: object
  name: radial-progress-with-legend
  what: a small donut/radial chart paired with a bullet-point legend and a percentage-change caption
  build: thin-stroke radial ring, percentage/label inside, 2-3 legend rows below each with a coloured dot + text,
         "+20% vs last month" caption above the chart
  zone: graphic
  use: monthly/period comparison widgets, category-share visualisations
  style: glass product UI
- ref: yk:ref/0235
  kind: object
  name: task-card-context-menu
  what: a small floating menu popover (Pin/Edit/Delete) anchored to a task card's corner
  build: compact white rounded rect, icon+label rows stacked tightly, appears overlapping the card it belongs to rather
         than pushing content
  zone: graphic
  use: kanban/task-card quick actions, any list-item overflow menu
  style: glass product UI
- ref: yk:ref/0235
  kind: layout
  name: grouped-sidebar-sections
  what: a sidebar nav split into labelled groups (e.g. INTEGRATIONS, TEAMS) via small caps section headers
  build: icon+label nav rows grouped under a tiny tracked-caps header, consistent indent, extra vertical gap between groups
  zone: graphic
  use: any nav with more than ~6 items that benefits from grouping
  style: glass product UI

- ref: yk:ref/0236
  kind: pattern
  name: oled-fitness-summary-screen
  what: a pure-black fitness app screen combining a glowing heatmap calendar and an annotated trend chart
  build: status-bar mimic at top · segmented pill tab switcher · heatmap grid (day columns, week rows) with glow intensity
         per session · plain-language summary caption below (metric bullets separated by dots) · second card: label+value+
         delta header, annotated line chart with start/end glow dots and a callout label, closing narrative sentence
  zone: graphic
  use: OLED dark-mode fitness/health apps, "black backgrounds save battery" designs
  style: dark moodboard collage
- ref: yk:ref/0236
  kind: chart
  name: glow-intensity-heatmap
  what: a calendar heatmap where activity level is shown by a soft glow/blur intensity per cell, not just fill opacity
  build: rounded-square cells per day, day-of-week header row, cell brightness plus an actual glow/bloom radius scaling
         with the day's intensity, empty days rendered as flat dark tiles with a thin outline
  zone: graphic
  use: activity/streak trackers on dark backgrounds
  style: dark moodboard collage
- ref: yk:ref/0236
  kind: copy
  name: plain-language-chart-caption
  what: a short conversational sentence explaining what a chart means, placed directly under the chart instead of a legend
  build: 2-3 sentence casual paragraph, regular weight, muted colour, no jargon — reads like a coach's note rather than a
         data label
  zone: text
  use: humanising data/trend charts, health and finance apps that want to feel less clinical
  style: dark moodboard collage

- ref: yk:ref/0237
  kind: material
  name: translucent-fabric-petals
  what: a flower rendered as flowing, wind-blown translucent silk/fabric instead of solid petals
  build: layered semi-transparent ribbon shapes with fine coloured rim-lines (blue fading to red) tracing each fold's edge,
         long single stem line, pure white ground
  zone: graphic
  use: beauty/fragrance brand photography, ethereal hero imagery, glass-material studies
  style: romantic dark editorial

- ref: yk:ref/0238
  kind: material
  name: bulging-lens-dot-grid
  what: a grid of rounded squares that grow into full circles toward the center, simulating a fisheye/lens-bulge illusion
        in pure geometry
  build: uniform grid module, corner radius (or circle-ness) increasing continuously from edges to center, thin white
         grout lines throughout, solid black fills
  zone: graphic
  use: op-art backgrounds, "screen under magnification" textures, loading/focus animations
  style: op-art pattern

- ref: yk:ref/0239
  kind: pattern
  name: industrial-ticket-label
  what: a two-column technical "ticket" card combining a logo/index block with a lab-style data readout block
  build: coloured vertical sidebar tab with rotated caps label · left column: index code, wordmark + full-name subtitle,
         date, dotted progress bar, big title in two lines · right column: small-caps label + big value pairs stacked,
         barcode strip at the bottom · thin rule separates the two columns
  zone: graphic
  use: access passes, lab/prototype documentation cards, sci-fi terminal readouts
  style: HUD technical
- ref: yk:ref/0239
  kind: object
  name: rotated-sidebar-tab
  what: a narrow coloured strip running the full height of a card, carrying a 90°-rotated label
  build: solid tint block, thin vertical rule separating it from the body, label reads bottom-to-top in tracked caps
  zone: graphic
  use: category tabs on tickets/cards, print-style spine labels
  style: HUD technical
- ref: yk:ref/0239
  kind: object
  name: label-value-stat-pair
  what: a tiny small-caps label directly above a very large value, repeated as a stack of independent stats
  build: label at ~20% the size of its value, tight leading between the two, no shared baseline grid forcing alignment
         across pairs
  zone: text
  use: dashboards, spec sheets, any place several unrelated big numbers need a caption each
  style: HUD technical

- ref: yk:ref/0240
  kind: pattern
  name: glass-over-illustration-dashboard
  what: a light glassmorphic dashboard laid over a full-bleed pastel anime-style illustration, with a character bleeding
        out of one card's frame
  build: frosted-white cards at ~85% opacity over the illustration · greeting headline broken into three separate pill-
         wrapped phrase chips stacked vertically · sidebar icon rail · stat tile row each with numeral, label, small chip ·
         performance card combining a horizontal gauge and two related numbers (35/82)
  zone: graphic
  use: youth/lifestyle apps wanting personality art without losing dashboard legibility
  style: glass product UI
- ref: yk:ref/0240
  kind: type
  name: stacked-phrase-pill-headline
  what: a headline broken across 2-3 separate pill-shaped chips stacked vertically instead of one flowing line
  build: each phrase fragment gets its own rounded-full outline chip, left-aligned, small vertical gap between chips,
         reads top-to-bottom as one sentence
  zone: graphic
  use: playful greeting headers, gamified onboarding copy
  style: glass product UI
- ref: yk:ref/0240
  kind: effect
  name: bleeding-character-illustration
  what: an illustrated character deliberately overflows past its containing card's edge into the surrounding page
  build: card clips the illustration on most sides but one edge (e.g. the head/shoulders) is left unclipped, breaking the
         card boundary intentionally
  zone: graphic
  use: adding energy/personality to an otherwise rigid card grid
  style: glass product UI

- ref: yk:ref/0241
  kind: pattern
  name: neumorphic-music-widget-stack
  what: a stack of soft-relief cards forming a mini "now playing" widget with clock, project info and album art
  build: large date/time readout top card · secondary row inside: "last project" label + code + favourite chip + two icon
         buttons · analog clock face (minimal ticks only at two positions) beside a square album-art tile with heart icon
         and caption · playback prev/next capsule below · separate bottom bar split into an "upload" pill and a round icon
         button
  zone: graphic
  use: soft-UI widget stacks, music/production dashboard modules
  style: soft relief
- ref: yk:ref/0241
  kind: chart
  name: minimal-tick-only-clock
  what: an analog clock face marked with ticks at only two opposite positions instead of a full 12-hour ring
  build: two short tick marks (e.g. at 9 and 3 o'clock), thin hour/minute hands, otherwise bare embossed circle
  zone: graphic
  use: minimalist widgets where a full clock face would feel too busy
  style: soft relief
- ref: yk:ref/0241
  kind: object
  name: split-footer-bar
  what: a bottom bar divided into two unequal soft-relief pills — a wide labelled action and a small icon-only button
  build: long pill (icon + "upload" label) on the left, separate small circular button on the right, both raised with the
         same soft-shadow language as the cards above
  zone: graphic
  use: primary+secondary action pairing at the bottom of a widget or sheet
  style: soft relief

- ref: yk:ref/0242
  kind: layout
  name: hard-split-duotone-hero
  what: a hero split down the middle into a light half and a dark half, with a giant serif wordmark and a photo crossing
        the seam to visually stitch the two halves together
  build: vertical hard edge dividing light-grey and near-black backgrounds · huge serif display word breaking across the
         seam, casting a soft shadow only on the dark side · a photo (rock formation) also crosses the seam, its tones
         shifting subtly to match each side
  zone: graphic
  use: two-brand or two-concept comparisons, dramatic studio/agency hero sections
  style: swiss editorial
- ref: yk:ref/0242
  kind: object
  name: overlapping-thin-circles
  what: two large thin-stroke circles overlapping like a Venn diagram, used purely as a graphic device with no fill
  build: 1px stroke circles, generous diameter relative to canvas, overlap positioned off-center rather than symmetric
  zone: graphic
  use: abstract backdrop geometry, "union of two things" visual metaphors
  style: swiss editorial
- ref: yk:ref/0242
  kind: icon
  name: interlocked-quatrefoil-outline
  what: a thin-line abstract mark of two overlapping rounded-diamond shapes, used as a minimal logomark
  build: two identical rounded-lozenge outlines crossing at their centers, uniform thin stroke, no fill
  zone: graphic
  use: minimalist studio/agency logomarks
  style: swiss editorial

- ref: yk:ref/0243
  kind: pattern
  name: eco-feature-column-hero
  what: a light hero with a huge centered wordmark above a three-column feature row, each column a rock-texture photo card
        with a glass label and bold caption
  build: top nav: segmented pill (menu icon + tagline text) plus a separate rounded button with a status dot · giant black
         wordmark centered · three equal columns, each: small pill label near top, custom line-icon centered, bold caption
         headline below, shared rock-texture photo running continuously behind all three
  zone: graphic
  use: sustainability/nature brand landing pages, three-pillar feature sections
  style: swiss editorial
- ref: yk:ref/0243
  kind: icon
  name: consistent-geometric-icon-family
  what: a small set of custom line icons (plus/cross, spiral arrow, quad-arrow burst) sharing the same stroke weight and
        geometric construction so they read as one family
  build: bold consistent stroke width, built from straight/curved primitives at 90°/45° angles, no naturalistic detail
  zone: graphic
  use: feature-column icons, custom icon systems that need to feel bespoke not generic
  style: swiss editorial
- ref: yk:ref/0243
  kind: object
  name: glassy-blur-label-over-photo
  what: a small pill label sitting on a photographic background, blurred/frosted just enough to stay legible without a
        solid backing
  build: light blur + slight opacity lift behind the label text only, rounded-rect shape, no hard edge or border
  zone: graphic
  use: labelling photo-heavy cards without adding a heavy solid chip
  style: swiss editorial

- ref: yk:ref/0244
  kind: pattern
  name: glyph-mosaic-hero-image
  what: a photographic subject (a flower) rebuilt entirely out of tiny halftone/ASCII-like character glyphs instead of
        continuous-tone pixels
  build: dense field of small monospace-ish marks whose size/weight vary to reconstruct light and shadow, warm highlight
         colour surviving only at the brightest points, pure black canvas around it
  zone: graphic
  use: "built from data" AI-brand imagery, generative/ASCII-art hero visuals
  style: HUD technical
- ref: yk:ref/0244
  kind: copy
  name: contrarian-tagline-pair
  what: a two-line headline stating a belief, then immediately applying it as a rule ("Nature doesn't guess. Neither
        should AI.")
  build: two short declarative sentences, line break between them, second line slightly smaller/lighter than the first
  zone: text
  use: confident AI/tech product headlines, manifesto-style hero copy
  style: HUD technical

- ref: yk:ref/0245
  kind: material
  name: plus-glyph-block-motif
  what: a background dot-grid overlaid with a cluster of chunky rounded-cross ("plus") tiles arranged into an abstract
        rune-like shape
  build: repeating rounded-cross module in one accent colour, tiles interlock edge-to-edge to build a larger irregular
         silhouette, sparse dot grid visible behind/around the cluster
  zone: graphic
  use: modular icon-building-block systems, generative logo/pattern kits
  style: op-art pattern

- ref: yk:ref/0246
  kind: pattern
  name: particle-iceberg-infographic
  what: a data poster comparing "surface web" and "deep web" using a particle-mesh iceberg shape, most of it submerged/
        larger below a labelled waterline
  build: dense particle-point mesh forming a jagged iceberg silhouette, red highlight tag + callout box on the largest
         section, monospace stat blocks (big numeral, label, fine-print detail) flanking left and right, thin ruled tick
         scale down the right margin
  zone: graphic
  use: "hidden scale" data stories, big-number comparison infographics
  style: HUD technical
- ref: yk:ref/0246
  kind: object
  name: red-tag-callout-box
  what: a small solid-red rectangle used to flag the single most important label on an otherwise monochrome infographic
  build: flat red fill, white bold caps text, no border — reads as an alert/highlight against a wireframe visual
  zone: graphic
  use: drawing attention to one stat/claim on a dense data visual
  style: HUD technical

- ref: yk:ref/0247
  kind: pattern
  name: glass-login-on-satin
  what: a frosted glass login card and a companion feature card floating over a macro photo of satin fabric with metallic
        beads
  build: barcode strip + tracked wordmark + copyright-style superscript on the card · underline-only form fields (no boxes)
         with tiny label micro-copy above each · text-link style primary action ("LOG IN") instead of a filled button ·
         second card: icon+headline+body+pill CTA ("Run a test")
  zone: graphic
  use: premium security/finance product logins, luxury-material product UI
  style: glass product UI
- ref: yk:ref/0247
  kind: object
  name: underline-only-input
  what: a form field with no box or fill, just a label above and a thin baseline rule below the typed value
  build: small caps label, generous line-height gap, 1px rule spanning the field width, placeholder/value sits just above
         the rule
  zone: graphic
  use: minimalist forms, luxury/editorial product UI wanting to avoid boxy inputs
  style: glass product UI
- ref: yk:ref/0247
  kind: object
  name: loading-card-with-echo-numeral
  what: a loading state pairing a thin progress bar and small percentage with a second, much larger echo of the same
        number lower on the card
  build: small "N% · LOADING" label+bar near the top, then the bare numeral repeated at 4-5x size near the bottom as a
         graphic anchor, plus a small diagonal arrow glyph
  zone: graphic
  use: making a loading screen feel designed rather than a bare spinner
  style: glass product UI
- ref: yk:ref/0247
  kind: object
  name: photo-swatch-stat-card
  what: a small dark card pairing a circular photo crop with a stat headline and big percentage
  build: square dark card, small circular photo insert with a center target-dot overlay, two-line caption, oversized
         percentage bottom
  zone: graphic
  use: "customer satisfaction" style trust stats, testimonial-adjacent metrics
  style: glass product UI

- ref: yk:ref/0248
  kind: pattern
  name: connected-ring-lattice-print
  what: a fine-art print of a grid of open ring outlines, where a contiguous subset is redrawn bold and filled to form an
        irregular connected path through the grid
  build: uniform light-grey ring grid as the base field, a subset of rings bold black and touching/overlapping each other
         to read as one continuous linked chain, cream paper ground, hand-signed corner
  zone: graphic
  use: op-art/kinetic-art references, "path through a system" visual metaphors, gallery-print aesthetics
  style: print halftone
- ref: yk:ref/0248
  kind: material
  name: screenprint-paper-ground
  what: an off-white, slightly warm paper texture used as the ground for a geometric print, with visible edge/registration
        marks
  build: subtle paper grain, warm cream tone (not pure white), faint pencil signature/edition number bottom-right
  zone: graphic
  use: giving digital geometric art a fine-art/gallery-print authenticity
  style: print halftone

- ref: yk:ref/0249
  kind: pattern
  name: 3d-orb-over-bleeding-wordmark
  what: a dark ad-tech hero where a huge wordmark bleeds off both edges of the frame, partially obscured by a 3D textured
        planet/orb with floating channel-label tags around it
  build: display wordmark sized larger than the canvas, cropped left and right · glossy 3D sphere with spiky particle
         "foliage" texture layered on top of the type · small dark square tags (channel names) scattered at irregular
         positions, one connected to the orb by a thin labelled line
  zone: graphic
  use: marketing/ad-platform hero sections, "everything connects here" central-object compositions
  style: HUD technical
- ref: yk:ref/0249
  kind: object
  name: floating-channel-tag
  what: a small dark square label naming one channel/platform, scattered loosely rather than in a grid
  build: flat dark square, centered short label text, drop shadow to lift it off the busy background, sizes vary slightly
  zone: graphic
  use: showing "many integrations/channels" without a formal list
  style: HUD technical

- ref: yk:ref/0250
  kind: pattern
  name: particle-cloud-hero-with-line-nav
  what: a cinematic dark hero with a red particle-cloud 3D formation, hexagon annotation markers, and a distinctive
        branching vertical line replacing a normal scroll indicator
  build: dotted floor plane for depth · particle-point 3D shape in red, hexagon outline markers pinned to specific points
         with connector lines · left side: vertical line that branches partway down like a subway map, paired with a
         section label and title · vertical "SCROLL FOR MORE" microcopy with a short tick line
  zone: graphic
  use: cinematic product/film landing heroes, "discovery" narrative openers
  style: HUD technical
- ref: yk:ref/0250
  kind: object
  name: branching-scroll-indicator
  what: a thin vertical line that splits into an angled branch partway down, standing in for a plain straight scroll cue
  build: single vertical stroke from a hollow dot, bending at one point into a diagonal segment ending near the section
         copy, small filled dot at the bend
  zone: graphic
  use: giving a scroll/progress indicator narrative character instead of a generic arrow
  style: HUD technical
- ref: yk:ref/0250
  kind: object
  name: hexagon-annotation-pin
  what: a small hexagon outline used as a point-of-interest marker pinned onto a 3D particle formation
  build: thin-stroke hexagon, positioned exactly on a cluster of particles, sometimes with a tiny arrow/dot inside
  zone: graphic
  use: annotating specific points on abstract 3D or particle visuals
  style: HUD technical

- ref: yk:ref/0251
  kind: pattern
  name: problem-solution-circle-cards
  what: a case-study slide presenting "Problem" and "Solution" as two large overlapping circles, one solid black, one
        light gradient, instead of side-by-side rectangular cards
  build: kicker row with arrow bullets flanking a label · numbered progress rule ("05 —— 13") top-right · two-weight
         headline mixing regular and bold spans · circles overlap slightly, each containing a bold sub-heading and a short
         paragraph, positioned off-grid rather than perfectly aligned
  zone: graphic
  use: before/after or problem/solution slides wanting a softer shape than rectangles
  style: swiss editorial
- ref: yk:ref/0251
  kind: object
  name: numbered-progress-rule
  what: a thin horizontal rule with a start and end number, and a small marker showing current position along it
  build: two numerals bookending a hairline, a short accent-coloured segment near the start marking "you are here"
  zone: graphic
  use: slide-position indicators in a deck, "page N of M" without literal pagination text
  style: swiss editorial
- ref: yk:ref/0251
  kind: layout
  name: circle-as-card
  what: using a large circle instead of a rounded rectangle as a content container for a heading + paragraph
  build: circle sized to comfortably fit the text block near its vertical center, text left-aligned within an implied
         safe-rectangle inside the circle rather than centered to the circle
  zone: graphic
  use: any comparison layout wanting to avoid the default rounded-rectangle card look
  style: swiss editorial

- ref: yk:ref/0252
  kind: chart
  name: stacked-isometric-plate-diagram
  what: a vertical technical diagram showing data flowing from many operational systems, through a funnel, up into stacked
        "data platform" plates
  build: several isometric diamond/grid planes stacked with slight vertical offset (depth via repetition) · a wireframe
         hyperboloid (pinched-waist mesh) connecting the lower systems to the upper stack, small floating cube particles
         as data-unit icons flowing upward through it
  zone: graphic
  use: data-pipeline/platform architecture explainers, "many inputs, one clean output" diagrams
  style: HUD technical
- ref: yk:ref/0252
  kind: layout
  name: bracket-index-rail
  what: a vertical rail of numbered brackets (01/02/03) each spanning one tier of a diagram, with an arrow-bulleted list
        of named systems beside each
  build: bracket + 2-digit index number at far left, tier label + arrow-prefixed list items at far right, diagram itself
         occupies the center column between them
  zone: graphic
  use: enterprise architecture diagrams needing both a visual and a literal system inventory
  style: HUD technical

- ref: yk:ref/0253
  kind: pattern
  name: wireframe-sphere-portfolio-hero
  what: a dark portfolio hero built around a triangulated wireframe sphere with a glowing photo core, plus a segmented
        top nav and roman-numeral title
  build: constellation-style mesh sphere, straight connector lines radiating out to distant unconnected nodes for depth ·
         top nav: three pill tabs (one active, filled) · kicker + big title ending in a roman numeral · small tagged
         "MATERIALS" chip with icon · bottom: pagination arrows + dot indicators, credit names in opposite corners
  zone: graphic
  use: 3D/creative-coding portfolio covers, "concept exploration" landing pages
  style: HUD technical
- ref: yk:ref/0253
  kind: object
  name: three-tab-pill-nav-single-fill
  what: a top nav of three text tabs inside a shared pill container, where only the active tab gets a filled background
  build: shared rounded-full outline for the whole group, active tab's background filled solid, inactive tabs plain text
         with generous horizontal padding on all three
  zone: graphic
  use: 2-4 option view switchers wanting a lighter footprint than a fully segmented control
  style: HUD technical

- ref: yk:ref/0254
  kind: pattern
  name: memory-oblivion-halftone-poster
  what: a conceptual poster contrasting "Memory" (a comet streaking into a bright halftone glow) and "Oblivion" (a dark
        halftone disc at that glow's center), tied together by a constellation of dotted captions below
  build: starfield/grain texture ground · comet mark + tracked label at top · radial halftone glow (dots sparse-to-dense
         outward) surrounding an inverted halftone disc (dots dense-to-sparse inward) at the center · label under each ·
         dotted lines connecting small caption nodes below like a constellation, with deliberately irregular letter-
         spacing in the captions
  zone: graphic
  use: conceptual/editorial posters exploring a duality, philosophical brand campaigns
  style: print halftone
- ref: yk:ref/0254
  kind: effect
  name: inverted-halftone-eclipse
  what: pairing a normal halftone glow (dense at center, sparse at edges) with its inverse (sparse at center, dense at
        edges) nested inside it, like an eclipse
  build: outer field: dot size/density increasing toward center; inner disc: dot size/density decreasing toward its own
         center — the boundary between the two reads as a sharp ring
  zone: graphic
  use: light/dark duality imagery, eclipse or portal motifs
  style: print halftone
- ref: yk:ref/0254
  kind: copy
  name: dotted-constellation-captions
  what: several short aphoristic lines connected by thin dotted lines into a loose constellation/path across the bottom
        of a poster
  build: small dot markers before each line of text, dotted connector lines linking the dots in a wandering path, lines
         positioned at irregular heights rather than a grid
  zone: text
  use: poetic/philosophical copy that wants to feel discovered rather than listed
  style: print halftone

- ref: yk:ref/0255
  kind: pattern
  name: low-poly-scroll-narrative
  what: a long dark scrolling page alternating labelled sections (About/Mission/Vision/Team) with faceted low-poly 3D
        shapes and a connecting vertical rule with milestone dots
  build: small-caps section label + body paragraph per section · a different low-poly polyhedron/crystal cluster
         illustrating each section, scaled and rotated uniquely · thin vertical rule linking sections top to bottom, a
         red dot marking each milestone · oversized faint wireframe shapes bleeding off-canvas in the background
  zone: graphic
  use: long-form "about us" scrollytelling pages, agency narrative sites
  style: HUD technical
- ref: yk:ref/0255
  kind: object
  name: team-grid-greyscale-avatars
  what: a 3x3 team grid using uniform greyscale circular photos with name + placeholder role text
  build: identical circle crop and size across all avatars, consistent desaturation, bold name directly under photo,
         muted small caption beneath the name
  zone: graphic
  use: about/team pages wanting a cohesive, non-corporate photography treatment
  style: HUD technical

- ref: yk:ref/0256
  kind: pattern
  name: warm-photo-lifestyle-dashboard
  what: a personal lifestyle dashboard (habits, expenses, study, notes) laid over a full-bleed warm sky/cloud photograph
  build: frosted sidebar icon rail with an active pill state · serif greeting + date line · weather chip · quick-log pill
         input with a round filled + button · quote card with a quotation-mark glyph and small footer icon row (shuffle/
         like/share) · mixed card row: expense sparkline, calorie donut with legend, study progress (fraction + bar + CTA
         pill) · article and podcast cards with thumbnail imagery · bottom shortcut pill row
  zone: graphic
  use: personal life-tracking apps wanting warmth over clinical dashboard chrome
  style: soft product UI
- ref: yk:ref/0256
  kind: object
  name: quote-card-with-footer-actions
  what: a card presenting a short quote with an attribution line and a row of small utility icons at its base
  build: large opening quotation-mark glyph, italic or regular quote text, attribution line right-aligned or below,
         footer row of 3 small icon buttons (shuffle/like/share) separated by generous spacing
  zone: graphic
  use: daily-quote widgets, inspirational content cards
  style: soft product UI
- ref: yk:ref/0256
  kind: chart
  name: donut-with-inline-legend-rows
  what: a small ring/donut chart paired with a vertical legend listing each segment's exact numeric breakdown
  build: thin-stroke ring with a bold percentage/value centered, legend as small label+value row pairs stacked beside it,
         each row's label colour matching its ring segment
  zone: graphic
  use: nutrition/calorie tracking, category-share breakdowns needing exact figures not just visual share
  style: soft product UI

- ref: yk:ref/0257
  kind: pattern
  name: technique-comparison-teaching-slide
  what: a minimal dark teaching slide comparing three variants of one effect (shadow/glow types) side by side with plain
        captions
  build: small logo + "Visual Tutorial" title top-center · three identical blank rounded squares, each demonstrating a
         different shadow technique · bold technique name + short explanatory paragraph under each · small credit chip
         bottom-center
  zone: graphic
  use: design-tutorial content, UI-technique comparison decks
  style: dark moodboard collage
- ref: yk:ref/0257
  kind: effect
  name: labelled-shadow-technique-trio
  what: three named approaches to shadow rendering shown as a direct side-by-side reference: glow-only, shadow-only, and
        a hybrid of both
  build: identical base shape and colour for all three, only the shadow treatment differs — light glow only, dark shadow
         only, or both combined with an implied light source
  zone: graphic
  use: teaching or documenting a design system's elevation/depth rules
  style: dark moodboard collage

- ref: yk:ref/0258
  kind: pattern
  name: engineering-spec-overlay
  what: a technical product poster overlaying dimension lines, angle call-outs and a spec-copy block onto a glowing 3D
        render of a mechanism
  build: crosshair/plus-mark grid texture full-bleed · dashed measurement circles at key points, straight dimension lines
         with numeric labels (mm, degrees) · dense spec-copy list top-left (label: value rows) · kicker/title pair top
         nav-style · cyan/teal glow on the render against black
  zone: graphic
  use: product-engineering marketing, "precision" positioning for hardware/tools
  style: HUD technical
- ref: yk:ref/0258
  kind: object
  name: angle-dimension-callout
  what: a dimension-line device pairing a straight leader line, a small circle at the measured point, and a numeric
        angle/distance label
  build: thin white line from a reference point to the feature, small hollow or filled dot at the anchor, label set just
         off the line rather than on top of it
  zone: graphic
  use: any "precision engineered" visual language, CAD-style annotation on renders
  style: HUD technical

- ref: yk:ref/0259
  kind: type
  name: pixel-block-display-face
  what: a display wordmark built entirely from square pixel blocks instead of smooth letterforms
  build: each glyph constructed on a coarse pixel grid, sharp stair-stepped curves, mixed with one small conventional-font
         word for contrast ("STUDIO" plain, "RÉGINE" pixelated)
  zone: graphic
  use: studio/agency identities wanting a digital-craft signature typeface moment
  style: pixel-glitch studio hero
- ref: yk:ref/0259
  kind: object
  name: two-tone-segmented-pill-nav
  what: a nav pill where each segment uses a different accent-dot colour and shape to distinguish otherwise similar links
  build: shared rounded-full container, first segment: filled dark with an orange dot + plus icon; second: outline with
         a small bullet dot; both segments share the same text size/weight
  zone: graphic
  use: two-option nav/CTAs wanting visual distinction without breaking the pill container
  style: pixel-glitch studio hero
- ref: yk:ref/0259
  kind: layout
  name: three-column-footer-with-active-lift
  what: a three-column footer nav where the center card is visually "active" (raised, frosted, containing the imagery)
        while the flanking cards stay flat and plain
  build: identical icon+label+caption structure per column, but only the center column gets a frosted background panel
         and sits on top of the shared photo, sides remain flush with the page background
  zone: graphic
  use: 3-way feature navigation wanting to suggest a default/featured option
  style: pixel-glitch studio hero

- ref: yk:ref/0260
  kind: pattern
  name: pixel-dissolve-specimen-poster
  what: a botanical "digital archive" poster where a flower photo dissolves into magenta pixels/dither, with forensic
        zoom-crop frames revealing sharp detail inside the noise
  build: kicker pair top-left (specimen number / archive name) · dashed crosshair guides full-bleed · flower rendered as
         a dot-matrix/dither gradient from sharp photo to pure pixel noise · 3 corner-handled selection-rectangle overlays,
         each cropping a small sharp region of the underlying photo · rotated sidebar wordmark · monospace coordinate
         readout block (X/Y/Z) · scattered asterisk marks
  zone: graphic
  use: "data made visible" botanical/generative-art series, glitch-nature hybrids
  style: pixel-glitch studio hero
- ref: yk:ref/0260
  kind: object
  name: forensic-zoom-crop-frame
  what: a selection-rectangle overlay (corner handles visible) that reveals a sharp, high-detail crop of an otherwise
        degraded/pixelated image
  build: thin white rectangle with small square handles at each corner and midpoint, framing a patch rendered at full
         photographic clarity while everything outside stays dithered/noisy
  zone: graphic
  use: "inspect/zoom" UI conceits, before/after detail reveals inside a single image
  style: pixel-glitch studio hero
- ref: yk:ref/0260
  kind: type
  name: coordinate-readout-block
  what: a small monospace block listing X/Y/Z (or similar) coordinate values as if pinpointing a location on the image
  build: label:value rows, tight leading, right-aligned or left-aligned block placed away from the main subject
  zone: text
  use: reinforcing a "scientific/scanned specimen" framing on any image
  style: pixel-glitch studio hero

- ref: yk:ref/0261
  kind: material
  name: modular-pixel-glyph-shapes
  what: abstract rune-like silhouettes built from a strict grid of 2x2 unit squares with occasional rounded/notched joins
  build: uniform square module size, shapes formed purely by which grid cells are filled, a couple of joins rounded to
         soften otherwise blocky forms, laid over a visible reference grid
  zone: graphic
  use: modular icon/glyph systems, generative logo kits, building-block iconography
  style: op-art pattern

- ref: yk:ref/0262
  kind: object
  name: spotlight-active-tab-bar
  what: a mobile bottom nav where the active icon is lit by its own glowing spotlight beam and a small accent bar above it
  build: dark pill nav bar · inactive icons plain grey outline · active icon (heart) rendered solid red with a soft glow,
         a short accent-red segment sits directly above it on the bar's top edge, and a translucent light-beam gradient
         falls from that segment down onto the icon
  zone: graphic
  use: giving a standard tab bar a stronger sense of "this is where you are" than a simple colour change
  style: glass product UI

- ref: yk:ref/0263
  kind: object
  name: labelled-slider-control-panel
  what: a small settings panel of three labelled sliders, each with its live numeric value shown at the trailing edge
  build: title label top ("VORONOI CELLS" in tiny caps) · each row: bold label left, slider track center, numeric value
         right-aligned · dark filled button at the bottom ("Generate")
  zone: graphic
  use: generator/tool UIs, any parametric control panel needing 2-4 sliders
  style: soft product UI
- ref: yk:ref/0263
  kind: material
  name: voronoi-cell-texture
  what: an irregular organic cell tiling (voronoi diagram) rendered as a flat muted-colour texture with thick grout lines
  build: irregular convex polygon cells of varying size, rounded corners, consistent thick gap/grout colour between all
         cells, single muted hue for all cell fills
  zone: graphic
  use: organic tiling backgrounds, cracked-earth/cell textures, generative pattern fills
  style: op-art pattern

- ref: yk:ref/0264
  kind: pattern
  name: gradient-dot-bullseye-poster
  what: a poster made entirely of a dot-matrix grid whose per-dot colour ramps from pale pink at the edges to near-black
        magenta at the center, like a glossy bullseye, with a brand lockup along the bottom
  build: uniform circle-dot grid, each dot rendered with its own subtle highlight/gloss so it reads as a bead not a flat
         disc, colour interpolated radially from center outward · pale pink footer band with small caption line, brand
         name + kanji glyph, and a large right-aligned title
  zone: graphic
  use: colour-study posters, fragrance/beauty campaign art, halftone brand series
  style: print halftone
- ref: yk:ref/0264
  kind: material
  name: glossy-bead-dot-fill
  what: a technique for rendering a halftone dot grid where each dot has its own tiny highlight, reading as a rounded
        glossy bead rather than a flat printed dot
  build: radial highlight offset toward one corner of each dot, subtle darker rim at the opposite edge, repeated
         identically across every dot regardless of its base colour
  zone: graphic
  use: elevating a flat halftone/dot pattern into a tactile, "candy" material
  style: print halftone
- ref: yk:ref/0264
  kind: type
  name: kanji-plus-latin-lockup
  what: a small brand lockup mixing a Latin caption line, a Latin brand tagline, and a single kanji character as a mark
  build: two-line Latin caption stack (small caps title + smaller subtitle) to the left, a single large kanji glyph
         beneath them as an icon-like mark, big Latin product name right-aligned on the same baseline band
  zone: text
  use: bilingual brand footers, product names wanting an East-Asian design accent
  style: print halftone

## Stylistic registers in this batch

- HUD technical: 0212, 0225, 0230, 0233, 0234, 0239, 0244, 0246, 0249, 0250, 0252, 0253, 0255, 0258
- glass product UI: 0213, 0220, 0222, 0226, 0229, 0235, 0240, 0247, 0256, 0262
- soft relief (neumorphism): 0214, 0221, 0227, 0241, 0263
- dark moodboard collage: 0215, 0217, 0236, 0257
- romantic dark editorial: 0216, 0237
- skeuomorphic folder icons: 0218, 0226 (card variant)
- brand palette template: 0219, 0223
- swiss editorial: 0224, 0242, 0243, 0248 (as print halftone crossover), 0251
- warm editorial moodboard: 0232
- op-art pattern: 0231 (halftone motion), 0238, 0245, 0261, 0263 (texture)
- print halftone: 0248, 0254, 0264
- pixel-glitch studio hero: 0259, 0260
