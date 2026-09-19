# Extraction batch 01 — yk:ref/0000 … yk:ref/0052

- ref: yk:ref/0000
  kind: material
  name: frosted-glass-card
  what: large rounded card with heavy background blur and a soft dark tint, dropped over a busy photo
  build: corner radius ~32px · blur strength high (frosted) vs light blur (clear) vs medium warm blur
         (blur) · white bold display label centred + smaller regular caption below at ~60% opacity
  zone: graphic
  use: glass hero tiles, OS-style panels, onboarding cards over photography
  style: glass product UI

- ref: yk:ref/0000
  kind: pattern
  name: three-way-glass-comparison
  what: three glass tiles of different blur "recipes" laid out to compare, stacked with one large top +
        two smaller bottom tiles overlapping at the corners
  build: top tile full width, two bottom tiles ~48% width each, all overlapping by ~12px, each holds
         label + system-name caption (iOS / One UI / Concept)
  zone: graphic
  use: design-system spec sheets, "pick a material" comparison boards
  style: glass product UI

- ref: yk:ref/0000
  kind: type
  name: label-plus-system-caption
  what: bold rounded-sans word as headline, thin small caption naming the source system underneath
  build: headline ~40px bold, caption ~14px regular, both centred, caption at reduced opacity
  zone: graphic
  use: naming/attributing a material or style sample
  style: glass product UI

- ref: yk:ref/0001
  kind: layout
  name: rail-plus-flyout-nav
  what: a collapsed icon-only sidebar rail next to its own expanded label panel, shown side by side
  build: rail ~68px wide with square icon tiles (44px, 10px radius) stacked with 12px gaps; panel
         ~260px wide with full-width rows matching the rail's vertical rhythm exactly
  zone: graphic
  use: desktop app navigation, showing collapsed/expanded states together
  style: dark soft product UI

- ref: yk:ref/0001
  kind: object
  name: icon-nav-row-active-state
  what: list row with leading icon tile + label, active row rendered as a white filled pill with dark
        icon and dark bold label, glow bleeding above it
  build: row height ~48px, 12px radius, icon tile 28px inset left, label 15px medium; inactive rows are
         flat dark with 60%-opacity icon+label
  zone: graphic
  use: sidebar/menu active-state pattern for dark dashboards
  style: dark soft product UI

- ref: yk:ref/0001
  kind: object
  name: stat-alert-banner
  what: bordered card at the bottom of a nav panel showing a bulleted mini-stat list with a flame icon
  build: 1px orange border, 10px radius, orange flame glyph left, three text lines stacked (bold stat +
         two regular lines) each prefixed with a small dot/leaf/phone icon
  zone: graphic
  use: contextual growth/activity nudges docked under navigation
  style: dark soft product UI

- ref: yk:ref/0001
  kind: icon
  name: rounded-stroke-icon-set
  what: consistent line-icon family (home, compass, mail, bell, chart, layers, bookmark, person, gear)
  build: ~1.5px stroke, rounded joins, contained in implicit 20px box, no fill
  zone: graphic
  use: any dashboard/app nav needing a matched icon family
  style: dark soft product UI

- ref: yk:ref/0002
  kind: type
  name: tracked-caps-plus-script-logotype
  what: heavy tracked-out serif capital word paired with a flowing script word overlapping its baseline
  build: caps ~64px condensed serif, script ~48px italic connecting into the caps, gold rule lines and
        a tiny butterfly glyph mark the seam
  zone: graphic
  use: luxury/fashion wordmarks, perfume or editorial branding
  style: luxury editorial

- ref: yk:ref/0002
  kind: layout
  name: arch-cutout-triptych
  what: page split into three vertical fields by two intersecting arch/circle silhouettes, centre field
        dark and figurative, side fields light and typographic
  build: symmetric double-arch mask at 50% and ~78% width, gold hairline verticals mark the right field
  zone: graphic
  use: fashion/perfume campaign spreads, poster layouts wanting a soft architectural divide
  style: luxury editorial

- ref: yk:ref/0002
  kind: icon
  name: four-point-sparkle-cluster
  what: cluster of one large and three small four-point sparkle/star glyphs used as a decorative mark
  build: filled kite-shaped points, sizes mixed ~24px/10px/8px, loosely grouped top-right of a text block
  zone: graphic
  use: luxury accents, "new/featured" marker, dividing whitespace with a jewel-like flourish
  style: luxury editorial

- ref: yk:ref/0002
  kind: copy
  name: cross-bullet-tracked-label
  what: small tracked-out caps label flanked by tiny plus-cross ornaments on both sides
  build: "+ + + LABEL + + + +" pattern, ~10px caps letterspaced ~2px, ornaments same weight as type
  zone: graphic
  use: eyebrow labels on luxury layouts instead of a plain rule or dot
  style: luxury editorial

- ref: yk:ref/0002
  kind: material
  name: aged-paper-grain
  what: warm cream ground with visible paper grain/noise and a soft vignette
  build: subtle fibrous noise texture, warm off-white base (~#EFE6D8), darkened edges
  zone: graphic
  use: heritage/luxury backgrounds needing tactile warmth instead of flat colour
  style: luxury editorial

- ref: yk:ref/0002
  kind: copy
  name: year-stamp-caption
  what: a bare four-digit year set small and isolated as a provenance mark
  build: ~11px regular numerals, plenty of surrounding whitespace, no label attached
  zone: graphic
  use: dating/provenance device on heritage or archive-style layouts
  style: luxury editorial

- ref: yk:ref/0003
  kind: layout
  name: diagonal-bicolour-field
  what: a hard diagonal band of a second colour slicing across a portrait, dividing the frame unevenly
  build: single ~35°-angled cream band crossing a sage-green field, band width ~18% of canvas height
  zone: graphic
  use: bold poster/illustration compositions needing one strong dividing gesture
  style: pulp poster illustration

- ref: yk:ref/0003
  kind: material
  name: flat-cutout-illustration
  what: vector illustration built from flat colour shapes with no gradients, hard silhouette edges
  build: 4–5 flat colours total, black used for deep shadow shapes rather than outlines, occasional
         distressed/chipped edge for a screen-print feel
  zone: graphic
  use: editorial illustration, poster art, app splash art
  style: pulp poster illustration

- ref: yk:ref/0003
  kind: material
  name: screenprint-edge-wear
  what: rough, chipped edges along large shapes mimicking worn halftone/silkscreen printing
  build: irregular jagged edge noise applied only at shape boundaries, not as an overall texture
  zone: graphic
  use: retro/pulp illustration wanting analogue print imperfection
  style: pulp poster illustration

- ref: yk:ref/0003
  kind: object
  name: single-accessory-detail
  what: one small accessory (a knotted cord bracelet) rendered with the same flat-shape language as the
        figure, adding narrative detail without extra colour
  build: 2 tones only (black cord + skin), simple loop-and-knot silhouette
  zone: graphic
  use: adding character/story detail cheaply inside a limited palette illustration
  style: pulp poster illustration

- ref: yk:ref/0004
  kind: object
  name: quick-settings-tile-grid
  what: 2x2 grid of square toggle tiles inside a floating card, each tile an icon-only control
  build: card ~140px, 20px outer radius, tiles ~56px with 14px radius and 6px gutter, header row with
        small caption "Quick settings" + gear icon, active tiles marked by a tiny two-dot indicator
  zone: graphic
  use: OS control-centre widgets, compact toggle clusters
  style: minimal blueprint product

- ref: yk:ref/0004
  kind: layout
  name: radial-blueprint-guides
  what: concentric construction circles and axis ticks centred on the subject, like a technical drawing
  build: 2–3 thin concentric circles, cross-axis tick marks at cardinal points, tiny unreadable spec
         labels at the ticks, all at very low contrast against the ground
  zone: graphic
  use: portfolio/case-study presentation frames to imply precision and system-thinking
  style: minimal blueprint product

- ref: yk:ref/0004
  kind: object
  name: date-credit-footer-bar
  what: full-width black footer bar with a bold date block, section label, and right-aligned credit
  build: black bar ~48px tall, left cluster = bold year + stacked day/month in mono, centre = section
        name, right = small glyph mark + author name
  zone: graphic
  use: case-study slide footers, portfolio artboard chrome
  style: minimal blueprint product

- ref: yk:ref/0004
  kind: effect
  name: soft-long-shadow-float
  what: a single soft, slightly offset drop shadow beneath a light card, implying it floats above the page
  build: large blur radius, low opacity, offset straight down (no angle), no ambient occlusion detail
  zone: graphic
  use: light-mode cards/widgets wanting quiet elevation
  style: minimal blueprint product

- ref: yk:ref/0005
  kind: material
  name: radial-halftone-vignette
  what: a field of dots that grow larger toward the centre, forming a soft dark core fading to the
        edges, on a cream ground
  build: dot grid with radius modulated by distance-from-centre (max dot touching neighbours at core,
        sparse pinpricks at rim), 2-colour (ink dot / cream ground)
  zone: graphic
  use: print-style background texture, loading/focus motif, halftone photo substitute
  style: print halftone

- ref: yk:ref/0006
  kind: type
  name: oversized-wordmark-single-accent-letter
  what: a huge, thin tracked wordmark in low-contrast grey with exactly one letter recoloured in a loud
        accent (neon green), functioning as a logo mnemonic
  build: letters ~140px light-weight geometric sans, base colour near-black-on-black (~15% opacity
        white), the accent letter full-opacity neon green
  zone: graphic
  use: brand identity reveals, case-study title slides
  style: dark tech case-study

- ref: yk:ref/0006
  kind: copy
  name: spec-row-caption
  what: three-column tiny caption row stating a type spec ("Body / 15px / 150%") like a redline note
  build: 10px uppercase-free mono/grotesk, evenly split into label / value / value across a fixed width,
        thin rule above
  zone: graphic
  use: annotating type or spacing decisions inline in a case-study page
  style: dark tech case-study

- ref: yk:ref/0006
  kind: object
  name: radial-hex-dial
  what: a circular dial made of four broken arc segments, each tipped with a hex-colour chip pill,
        surrounding a central blurred photo medallion
  build: circle ~340px, four arcs of unequal length/colour (grey, white, neon, black) each with a small
        arrow-tip and a floating rounded pill stating a hex code; centre disc is a blurred crop of a
        source photo with a small logo-mark + "Color Palette" label on top
  zone: graphic
  use: palette-derivation devices in case studies — "colours pulled from this scene"
  style: dark tech case-study

- ref: yk:ref/0007
  kind: material
  name: crosshair-registration-grid
  what: a repeating grid of thin white crosses at intersections plus fainter dashed diagonals, on black
  build: solid grid lines forming a 3x3ish module, bold plus-mark exactly at each intersection, 45°
        dashed diagonals connecting crosses corner-to-corner, subtle centred watermark text
  zone: graphic
  use: print-registration or blueprint-style overlay texture; technical/precision mood backgrounds
  style: HUD technical

- ref: yk:ref/0008
  kind: object
  name: fanned-cover-carousel
  what: a row of album/cover art cards fanned out with slight rotation and depth scaling, the centre
        card upright, largest and frontmost
  build: 5 visible cards, outer cards rotated ~±12°/±6° and scaled down ~80%/90%, all with soft drop
        shadow and rounded corners, edge cards partly cropped by the frame
  zone: graphic
  use: "featured" media carousels, music/podcast pickers, story selectors
  style: soft product UI

- ref: yk:ref/0008
  kind: object
  name: now-playing-transport-bar
  what: pill-shaped mini-player bar with prev/pause/next buttons, a thumbnail+title cluster, a progress
        hint, and trailing utility icons
  build: full-width rounded bar (28px radius), left icon cluster on translucent chips, centre thumbnail
        (36px rounded) + two-line title/artist, thin progress rule under the thumbnail block, right
        cluster of 3 small utility icons
  zone: graphic
  use: persistent media controls docked at the bottom of a player screen
  style: soft product UI

- ref: yk:ref/0008
  kind: copy
  name: playful-status-caption
  what: casual, first-person status line under a hero cluster, in the local language, ending with an
        emoticon rather than an emoji
  build: 14px regular, centred, sits between the hero carousel and the transport bar
  zone: text
  use: friendly microcopy under a features/recommendation module
  style: soft product UI

- ref: yk:ref/0009
  kind: object
  name: pill-swatch-row
  what: a row of overlapping rounded-end pills of one hue family, darkest to lightest, with hex codes
        printed small at the base of each and two "selected" dot markers below
  build: pills ~90px tall each, overlapping by ~30px, radius = full pill, hex text rotated 0°, small
        empty/filled circles as a legend beneath
  zone: graphic
  use: palette presentation cards, "shades of X" swatch strips
  style: palette card

- ref: yk:ref/0009
  kind: object
  name: vertical-gradient-bar-with-rotated-label
  what: a tall rounded rectangle filled with a two-stop gradient, its name set in a vertical (rotated
        90°) caption running through the middle, hex codes at top and bottom corners
  build: 3 bars side by side sharing one card, each ~140x300px, 16px radius, "Colour Gradient" label
        rotated bottom-to-top centred, hex chips top-left/bottom-left in small pill tags
  zone: graphic
  use: gradient-family palette sheets, brand colour-ramp documentation
  style: palette card

- ref: yk:ref/0009
  kind: object
  name: named-tonal-strip-card
  what: a stacked set of horizontal rounded bars in one tonal family with the family name set in tracked
        caps across the middle bar and a hex code pinned to the far right of others
  build: 3 stacked bars ~64px tall with 8px gaps, full rounded ends, name bar centred bold tracked caps,
        other bars right-aligned hex text
  zone: graphic
  use: naming a colour story ("Crimson Velvet", "Navy Mirage", "Ocean Sunset") inside a moodboard
  style: palette card

- ref: yk:ref/0009
  kind: layout
  name: palette-mosaic-collage
  what: many differently-sized palette cards and one moody photograph tiled edge-to-edge with no gutters,
        forming a single reference sheet
  build: irregular grid, photo tile sized to roughly 2 palette-cards, all tiles cropped flush, no
        rounding at the outer collage edge
  zone: graphic
  use: mood-board sheets combining photography with derived palettes
  style: palette card

- ref: yk:ref/0009
  kind: material
  name: motion-streak-photo
  what: a photographic reference showing directional light-streak abstraction (dark blue smears crossed
        by a hot orange diagonal), used as a colour-story source image
  build: long-exposure-style streaks, cool dominant hue interrupted by one warm diagonal accent
  zone: graphic
  use: sourcing a duotone or accent-on-dark palette from a single evocative image
  style: palette card

- ref: yk:ref/0010
  kind: layout
  name: grid-overlaid-hero-photo
  what: a full-bleed photographic hero with a visible thin grid drawn on top, treating the image like a
        layout diagram rather than hiding the construction lines
  build: 4-column x 4-row hairline grid, ~10% opacity white lines, sits above the photo but below type
  zone: graphic
  use: editorial/portfolio heroes that want to expose their own grid as a design statement
  style: swiss editorial

- ref: yk:ref/0010
  kind: type
  name: oversized-overlapping-wordmark
  what: a single lowercase word set enormous and bold, deliberately overlapping the photographic subject
        and bleeding off both edges of the frame
  build: heavy grotesk ~180px, tight tracking, white fill sitting at partial opacity where it crosses
        the darkest part of the photo
  zone: graphic
  use: hero title treatment that fuses type and image into one plane
  style: swiss editorial

- ref: yk:ref/0010
  kind: pattern
  name: event-listing-grid
  what: a 2-row x 4-column grid of short event entries (title + date/CTA), one cell replaced by a
        thumbnail image, forming a program/schedule block under the hero
  build: each cell has a two-line bold title, a small arrow-linked CTA or date line below, cell borders
        as thin hairlines, one cell swapped for a square photo instead of text
  zone: graphic
  use: event programs, session schedules, menu-style listings
  style: swiss editorial

- ref: yk:ref/0010
  kind: object
  name: vertical-rotated-micro-label
  what: a tiny tracked caption rotated 90° running up the left margin, paired with a bullet dot
  build: 9px uppercase, letterspaced, rotated -90°, anchored to the frame edge
  zone: graphic
  use: dating/section marginalia on editorial layouts, printing convention imitation
  style: swiss editorial

- ref: yk:ref/0010
  kind: object
  name: rounded-outer-frame-chrome
  what: the entire composition sits inside one large rounded-corner frame like a physical card or
        device bezel, with a hamburger icon top-right and a scroll-handle glyph bottom-right
  build: ~28px outer radius, 1px hairline border, small utility icons inset 24px from each corner
  zone: graphic
  use: presenting a website design as a bounded artifact/device rather than edge-to-edge
  style: swiss editorial

- ref: yk:ref/0011
  kind: layout
  name: vertical-totem-diagram
  what: a symmetric stack of hexagonal/diamond modules connected top-to-bottom by a single spine,
        forming a layered systems diagram read top-down
  build: 5 tiers, each a flattened hex or diamond shape narrowing toward joints, bracket lines to the
        right group tiers into labelled ranges (Organizations / Infrastructure / Systems & Models)
  zone: graphic
  use: architecture/system diagrams, product-stack explainers
  style: HUD technical

- ref: yk:ref/0011
  kind: object
  name: orbit-ring-halo
  what: two thin elliptical rings crossing at an angle around a central diagram node, one ring tinted
        red as an accent, with small dot satellites riding the rings
  build: ellipses drawn at differing rotations, 1px stroke, one ring recoloured red while the other
        stays neutral grey, 2–3 small filled dots placed along the rings
  zone: graphic
  use: highlighting a "live/active" core node inside a technical diagram
  style: HUD technical

- ref: yk:ref/0011
  kind: object
  name: bracket-range-label
  what: a square bracket drawn beside a group of diagram tiers with a small vertical tracked-caps label
        naming the grouped range
  build: bracket as a thin stroked path, label rotated -90°, 9px tracked caps, positioned at the
        bracket's midpoint
  zone: graphic
  use: annotating tiers/ranges/phases in vertical diagrams
  style: HUD technical

- ref: yk:ref/0011
  kind: copy
  name: overline-plus-serif-headline
  what: a small tracked-caps overline label sitting above a calm serif headline sentence
  build: overline 10px letterspaced grey, headline ~28px serif regular, both centred, generous gap
  zone: graphic
  use: section titles on technical/architecture case-study pages wanting a humanist counterpoint
  style: HUD technical

- ref: yk:ref/0011
  kind: effect
  name: radiating-line-halo
  what: a fan of thin curved lines converging on the diagram from the top and bottom edges of the frame,
        like light rays or connection paths reaching off-canvas
  build: 5–7 bezier lines per side, converging to a point near the topmost/bottommost module, very thin
        stroke, no fill
  zone: graphic
  use: implying the diagram connects to something larger outside the frame
  style: HUD technical

- ref: yk:ref/0012
  kind: layout
  name: triangulated-construction-guides
  what: a loose scatter of thin, differently-angled triangles drawn faintly across the whole poster,
        as if showing the geometry that generated the central mark
  build: 3–4 large overlapping triangle outlines, ~0.5px stroke at ~15% opacity, no fill, ignoring the
        page edges (bleeding off corners)
  zone: graphic
  use: implying rigorous construction behind a simple central glyph, poster backgrounds
  style: swiss construction poster

- ref: yk:ref/0012
  kind: object
  name: cross-over-plus-glyph
  what: a bold four-armed X shape with a smaller solid plus shape emerging from behind its top point,
        both flat black with no outline
  build: X arms ~90° diamonds meeting at a shared centre, plus sized ~35% of the X, offset upward and
        behind in z-order
  zone: graphic
  use: a poster's single graphic subject when the brief wants one strong abstract mark, not a photo
  style: swiss construction poster

- ref: yk:ref/0012
  kind: object
  name: sparkle-node-construction-points
  what: four-point sparkle/star markers sitting at the ends of thin right-angled guide lines that frame
        the central glyph like measurement callouts
  build: stars ~8–10px, connected by 0.5px straight lines running strictly horizontal/vertical, forming
        an open bracket shape around two corners of the subject
  zone: graphic
  use: dressing a central mark with a "being measured/constructed" device
  style: swiss construction poster

- ref: yk:ref/0012
  kind: copy
  name: two-column-title-plus-tagline
  what: bottom-left block pairing a two-line bold serif title with a single-word italic/serif tagline in
        a second column, both very small relative to the poster
  build: title ~13px serif regular tight leading, tagline column offset right by ~60px, same size,
        beneath both a tiny 8px grey spec line (medium name / series / dimensions)
  zone: graphic
  use: understated poster colophon — title, one-word mood word, and print specs
  style: swiss construction poster

- ref: yk:ref/0012
  kind: icon
  name: minimal-corner-monogram
  what: a two-character abstract monogram (letter + slash + plus) set alone in the bottom-right corner
  build: ~14px thin sans/serif hybrid glyphs, no box or rule around it
  zone: graphic
  use: quiet studio signature mark on poster/print work
  style: swiss construction poster

- ref: yk:ref/0013
  kind: object
  name: neumorphic-raised-tile
  what: a soft, low-contrast square with rounded corners that appears to bulge outward from the same-tone
        background, label text nearly invisible (same hue, low contrast)
  build: light warm-grey ground and tile in near-identical hue, dual-light soft shadow (light top-left
        highlight + soft bottom-right shadow), 24px radius, centred hex label at ~15% contrast
  zone: graphic
  use: neumorphic/soft-UI cards, skeuomorphic buttons and app icons
  style: soft neumorphic UI

- ref: yk:ref/0013
  kind: object
  name: neumorphic-inset-tile
  what: the pressed/concave counterpart of the raised tile — same shape but reads as carved into the
        surface rather than raised from it
  build: identical geometry to the raised tile but with shadow direction reversed (inner shadow top-left
        light, inner shadow bottom-right dark)
  zone: graphic
  use: pressed/active button states in neumorphic UI
  style: soft neumorphic UI

- ref: yk:ref/0013
  kind: pattern
  name: shadow-parameter-spec-panel
  what: a small design-tool panel listing a shadow layer's exact parameters as labelled input rows, two
        such panels shown combined with a plus sign between them
  build: each panel ~120px wide, rows for Position X/Y, Blur, Spread, Color (colour row shows a swatch
        chip + hex + opacity %), dropdown for shadow type at the top, panel repeated twice per state
  zone: graphic
  use: documenting exact shadow recipes in a design-system or style-guide page
  style: soft neumorphic UI

- ref: yk:ref/0013
  kind: copy
  name: shadow-layer-title-label
  what: a bold grey caption naming a shadow layer, set large relative to the panels it describes
  build: ~22px bold uppercase, low-contrast grey-on-white, positioned above its panel pair
  zone: graphic
  use: labelling multi-layer effect recipes in specs
  style: soft neumorphic UI

- ref: yk:ref/0014
  kind: effect
  name: radar-arc-with-tracer-path
  what: a field of concentric thin rings, most neutral grey, with one arc-segment picked out in red and
        a dotted arrow path with small dot markers tracing outward through the rings like a signal ping
  build: 10+ concentric circles centred right-of-hero, one ~90° arc recoloured red with slightly thicker
        stroke, 4–5 small red dots along a curved path with an arrowhead at the end, tiny coordinate/tick
        label near the centre
  zone: graphic
  use: security/AI/detection hero motifs implying scanning or anomaly-tracking
  style: dark tech HUD

- ref: yk:ref/0014
  kind: type
  name: bold-two-line-hero-headline
  what: large bold sans headline wrapping to exactly two lines, paired with a short regular-weight
        supporting line and a smaller justified paragraph beneath
  build: headline ~40px bold tight leading, support line ~15px regular at 70% width, fine-print paragraph
        ~12px justified at 55% width and reduced opacity
  zone: graphic
  use: dark SaaS/security hero copy stack
  style: dark tech HUD

- ref: yk:ref/0014
  kind: object
  name: solid-accent-pill-button
  what: small solid-fill rounded-rectangle button in the single accent colour, bold white label, no icon
  build: ~110x36px, 8px radius, accent-red fill, 13px bold white centred label
  zone: graphic
  use: primary CTA on dark hero sections
  style: dark tech HUD

- ref: yk:ref/0014
  kind: pattern
  name: equal-column-footer-nav
  what: a full-width bar divided into five equal cells by vertical hairlines, each cell one centred nav
        word, functioning as a footer/nav strip rather than a button row
  build: 5 columns, 1px dividing rules, ~13px tracked caps centred per cell, uniform row height ~56px
  zone: graphic
  use: minimal top or bottom navigation strips on dark sites
  style: dark tech HUD

- ref: yk:ref/0014
  kind: pattern
  name: two-cta-split-footer-band
  what: below the nav strip, a second full-width band split into exactly two large cells, each holding
        one bold centred call-to-action phrase
  build: 2 columns, thicker row (~72px) than the nav strip above it, larger bold tracked-caps text
  zone: graphic
  use: closing/footer CTA band pairing two actions (e.g. request demo / testimonials)
  style: dark tech HUD

- ref: yk:ref/0015
  kind: material
  name: monochrome-topographic-map
  what: a soft greyscale map/terrain texture with contour-like road and coastline lines fading at a
        diagonal light gradient across the frame
  build: near-white to mid-grey gradient wash across the whole canvas, thin 1px map linework at ~30%
        opacity, no colour at all
  zone: graphic
  use: environmental/data-monitoring backgrounds, low-chroma map UI
  style: minimal data-map product

- ref: yk:ref/0015
  kind: object
  name: search-location-pill
  what: a small pill-shaped search bar with a magnifier icon, a location label, and truncated detail text
  build: ~260px wide, 8px radius, thin border, icon-label-ellipsis-pin layout left to right, all ~12px
  zone: graphic
  use: map or location-based app top search control
  style: minimal data-map product

- ref: yk:ref/0015
  kind: object
  name: radar-magnifier-lens
  what: a circular vignette lens placed over one map region, darkened toward its rim, with a tiny
        crosshair/target icon and a percentage stat at its edge
  build: ~90px circle, radial darkening from centre to edge, small "Low -62%" stat label with warning
        triangle to its left, thin connecting leader tick
  zone: graphic
  use: focus/inspect device on maps or dashboards, zoom-into-anomaly motif
  style: minimal data-map product

- ref: yk:ref/0015
  kind: object
  name: scattered-warning-triangle-markers
  what: small filled or outlined triangle icons scattered across the map at points of interest, each
        paired with a tiny stat label (value + unit) and sometimes a secondary glyph
  build: triangle ~10px, label 9px directly beside it, inconsistent placement mimicking real sensor data
  zone: graphic
  use: plotting alerts/sensor points on a map or diagram
  style: minimal data-map product

- ref: yk:ref/0015
  kind: object
  name: alert-summary-card
  what: bottom-corner card pairing a large warning triangle icon with a bold category word and a location
        name plus small metadata line beneath
  build: icon ~40px filled grey triangle, "Warning" bold label beside it, larger place-name below at
        ~16px, metadata line at 10px grey
  zone: graphic
  use: surfacing the single most important alert at a fixed corner of a map/dashboard
  style: minimal data-map product

- ref: yk:ref/0015
  kind: object
  name: labelled-toggle-with-state-word
  what: an inline label followed by the literal words "on/off" instead of a graphical switch, one word
        weighted to show current state
  build: 11px tracked caps label, "on" / "off" set side by side with the active one bolder/darker
  zone: text
  use: minimal text-only toggle control for spare dashboards
  style: minimal data-map product

- ref: yk:ref/0016
  kind: pattern
  name: branching-node-canvas
  what: a dark infinite-canvas workspace where a central generation card connects via thin curved lines
        to satellite response cards and floating collaborator tags
  build: dotted dark-grey grid background, 1px curved bezier connectors from a shared origin point to
        each card/tag, cards free-floating at arbitrary positions
  zone: graphic
  use: AI creative tools, mind-mapping apps, branching conversation UIs
  style: dark tech creative tool

- ref: yk:ref/0016
  kind: object
  name: collaborator-name-pin
  what: a small rounded pill with a person's name and a pointer tail, floating freely on the canvas like
        a cursor label
  build: ~70px pill, 6px radius with a small triangular tail at one corner, coloured border matching a
        per-person accent hue, 11px bold label
  zone: graphic
  use: live-collaboration cursor labels in multiplayer canvas tools
  style: dark tech creative tool

- ref: yk:ref/0016
  kind: object
  name: media-card-with-icon-toolbar
  what: a generation-result card showing a thumbnail, a short caption, and a bottom toolbar of small
        utility icons plus a send/submit control
  build: card ~220px wide, 12px radius, image fills top ~80%, caption bar below at 11px, toolbar row of
        4–5 16px icons plus a circular up-arrow button at the trailing edge
  zone: graphic
  use: AI image/video generation result tiles with inline actions
  style: dark tech creative tool

- ref: yk:ref/0016
  kind: object
  name: qa-response-card
  what: a dark rounded card showing a short question at the top and a structured answer below (bulleted
        list or prose), sometimes with a name tag pointing at it
  build: 16px radius, ~260px wide, question in bold white ~13px, answer in grey ~12px with hyphen
        bullets, small icon/thumbnail at the bottom-left of the card
  zone: graphic
  use: AI chat/inspector responses attached contextually to a canvas object
  style: dark tech creative tool

- ref: yk:ref/0016
  kind: object
  name: contextual-turn-into-menu
  what: a compact popover list offering to convert the current object into another type, each row an
        icon, a label, and a trailing chevron or shortcut glyph
  build: ~150px wide, 8px radius, 3 rows (Text/Image/Video) each ~32px tall with left icon, label, right
        affordance glyph
  zone: graphic
  use: right-click/hover "convert to..." menus in creative and canvas tools
  style: dark tech creative tool

- ref: yk:ref/0017
  kind: layout
  name: vertical-hairline-diptych
  what: the same subject shown twice side by side, split by a single thin vertical line, left half
        literal photography and right half an abstracted rendering of it
  build: 50/50 split, 1px light hairline seam, both halves share identical background and framing so only
        the subject's treatment differs
  zone: graphic
  use: before/after or real-vs-digital conceptual comparisons
  style: lo-fi warm photographic

- ref: yk:ref/0017
  kind: effect
  name: dot-matrix-dissolve
  what: the subject rendered as a sparse cluster of small glowing square dots tracing only its brightest
        contours, fading to nothing at the edges, as if scanned or pixel-dissolving
  build: dot size ~2–4px on an implied grid, density highest where the source subject was brightest,
        warm-white glow colour against the dark half of the frame
  zone: graphic
  use: "digitising/scanning" transitions, data-ification of an organic subject
  style: lo-fi warm photographic

- ref: yk:ref/0017
  kind: material
  name: grainy-bokeh-film-photo
  what: a soft-focus, visibly grainy photograph with a shallow depth of field turning the background into
        warm/cool blurred colour blobs
  build: heavy analogue grain overlay, desaturated green-brown palette, out-of-focus circular highlights
  zone: graphic
  use: nostalgic/organic mood photography as a base layer under type or effects
  style: lo-fi warm photographic

- ref: yk:ref/0018
  kind: effect
  name: vertical-particle-streak-dissolve
  what: a solid architectural form (a temple) rendered as thousands of thin vertical particle streaks
        that thin out and scatter into loose dots toward the top, as if the object is disintegrating
        upward
  build: dense vertical hairlines at the object's silhouette base, thinning to sparse scattered points
        higher up, particle colour shifts from warm orange at the base to cool blue at the top
  zone: graphic
  use: reveal/dissolve transitions for 3D objects, "data made physical" hero art
  style: generative particle render

- ref: yk:ref/0018
  kind: material
  name: height-mapped-gradient-colour
  what: a single object coloured by a gradient keyed to vertical position rather than by local shading,
        producing a warm base and cool top on one silhouette
  build: orange-to-blue vertical gradient mapped onto the particle field, independent of the object's
        actual geometry/lighting
  zone: graphic
  use: giving a monochrome render mood and depth without traditional lighting
  style: generative particle render

- ref: yk:ref/0019
  kind: pattern
  name: three-piece-print-mockup-set
  what: a matched set of a book/box front cover, spine, and back cover shown flat and separated, each
        carrying one part of the same brand message
  build: identical dark ground and margins across all three pieces, front = mark + headline + subline,
        spine = rotated product name, back = star-row + body copy + CTA + logo lockup
  zone: graphic
  use: presenting a print deliverable (book, box, card deck) as a triptych mockup
  style: minimal luxury print

- ref: yk:ref/0019
  kind: object
  name: star-row-divider
  what: a horizontal row of small identical sparkle/star glyphs used as a rule instead of a line
  build: 6 four-point stars ~14px, even spacing, left-aligned above a text block
  zone: graphic
  use: replacing a plain hairline divider with a branded decorative rule
  style: minimal luxury print

- ref: yk:ref/0019
  kind: type
  name: rotated-spine-label
  what: a bold tracked-caps label running vertically up a narrow spine panel
  build: text rotated -90°, centred on the spine width, small secondary label at the base in a different
        weight
  zone: graphic
  use: book/box spine typography, also useful for vertical tab labels in UI
  style: minimal luxury print

- ref: yk:ref/0019
  kind: object
  name: seal-plus-wordmark-lockup
  what: a small square multi-line stamp/seal sitting beside a bold wordmark, together forming a simple
        letterhead-style lockup
  build: seal ~40px square with a centred glyph and two tiny caption lines beneath it, wordmark set in
        bold caps at 1.3x the seal's height, both baseline-aligned
  zone: graphic
  use: footer branding on print/covers, replacing a plain logo with a "stamped" feel
  style: minimal luxury print

- ref: yk:ref/0019
  kind: copy
  name: enquire-now-text-cta
  what: a plain tracked-caps text line acting as the only call-to-action, no button shape around it
  build: ~11px letterspaced caps, sits alone with generous whitespace above and below
  zone: text
  use: understated CTAs in minimal/luxury layouts that avoid button chrome
  style: minimal luxury print

- ref: yk:ref/0020
  kind: type
  name: large-vertical-title-column
  what: a big display headline set top-to-bottom in a single vertical column along the left edge, using
        a brush/calligraphic serif
  build: full-height column, brush-serif characters ~72px stacked with tight vertical rhythm, small
        furigana-style gloss beside the column in a tiny vertical caption
  zone: graphic
  use: Japanese-style editorial hero titles, vertical-reading layouts
  style: washi editorial

- ref: yk:ref/0020
  kind: type
  name: multi-column-vertical-poem-text
  what: several short vertical text columns of small serif characters, read right to left, functioning
        as ambient poetic copy rather than a headline
  build: 3 columns ~14px each, even column gaps, positioned as a loose cluster in open space
  zone: graphic
  use: mood-setting flavour text on editorial/game hero sections
  style: washi editorial

- ref: yk:ref/0020
  kind: object
  name: vertical-tab-divider-label
  what: a narrow dark vertical bar with small caption text running through it, acting as a divider
        between the title block and supporting copy
  build: ~28px wide bar, subtle texture fill, 10px vertical text centred, sits between two content zones
  zone: graphic
  use: separating a hero title from a subtitle/category while keeping the vertical reading rhythm
  style: washi editorial

- ref: yk:ref/0020
  kind: material
  name: washi-paper-overlay
  what: a soft fibrous paper-grain wash laid semi-transparently over the whole composition, unifying a
        photograph, illustration and text into one aged-paper mood
  build: warm off-white grain texture at low opacity, blended over all layers including the photo band
  zone: graphic
  use: giving digital layouts a traditional Japanese-paper warmth
  style: washi editorial

- ref: yk:ref/0020
  kind: effect
  name: scattered-snowflake-ornament
  what: small line-drawn snowflake glyphs scattered sparsely across the upper portion of the composition
  build: 4–6 point snowflake icons, ~10–16px, irregular placement, low density
  zone: graphic
  use: seasonal/atmospheric dressing on editorial or game hero art
  style: washi editorial

- ref: yk:ref/0020
  kind: object
  name: circular-seal-badge
  what: a small circular stamp-like badge with a short code/name set in a ring, placed in a corner as a
        certification/edition mark
  build: ~50px circle, thin outer ring, bold short text centred, positioned bottom-right corner
  zone: graphic
  use: edition/publisher marks on posters, key art or covers
  style: washi editorial

- ref: yk:ref/0021
  kind: layout
  name: arch-top-split-card-pair
  what: two adjoining cards with rounded-arch tops (like a notebook or planner spread), one photographic
        and one diagrammatic, meeting at a shared vertical seam
  build: each card ~50% width, top corners rounded into a full arch, small binder-hole dots along the
        very top edge, black background between/behind the pair
  zone: graphic
  use: journal/planner-styled app screens, split photo+data spreads
  style: soft editorial wellness

- ref: yk:ref/0021
  kind: object
  name: circular-photo-lens-with-nav-arrows
  what: a circular cropped photo inset overlapping the bottom of a larger rectangular photo, with small
        triangular prev/next arrows and a centre glyph
  build: circle ~180px, positioned straddling the card's bottom edge, two small triangle arrows left and
        right of a centred asterisk/sparkle icon
  zone: graphic
  use: gallery/carousel focal-point control layered on a hero photo
  style: soft editorial wellness

- ref: yk:ref/0021
  kind: chart
  name: big-numeral-stat-with-side-chevrons
  what: a very large bold number as the sole focus of a panel, flanked by small left/right chevron
        arrows implying it can be stepped through
  build: numeral ~64px bold serif/slab, chevrons ~16px positioned at mid-height left and right, small
        tracked-caps label above (e.g. "CALM")
  zone: graphic
  use: a stat/counter hero for wellness or metric-driven apps
  style: soft editorial wellness

- ref: yk:ref/0021
  kind: object
  name: layered-geometric-triad-motif
  what: three rows of doubled/tripled outline shapes (triangles, circles, inverted triangles) stacked
        vertically, flanked by two tracked words, forming a symbolic diagram rather than a chart
  build: each row = 2–3 overlapping same-size outline shapes offset slightly, ~1px stroke, rows spaced
        evenly, word labels sit at the middle row's height
  zone: graphic
  use: abstract symbolic dividers or "concept" diagrams in editorial/wellness contexts
  style: soft editorial wellness

- ref: yk:ref/0021
  kind: icon
  name: pinwheel-spinner-glyph
  what: a solid asymmetric pinwheel/vortex icon used as a decorative or loading-style mark in a corner
  build: 6–8 curved solid blades radiating from a centre point, filled black, no outline, ~48px
  zone: graphic
  use: motion/energy accent icon, could double as a loading spinner
  style: soft editorial wellness

- ref: yk:ref/0021
  kind: copy
  name: mixed-style-caption-line
  what: a short caption line mixing a plain word with an italic serif word for emphasis, set centred
        under a photo card
  build: "and... " in a plain sans, "relax" in italic serif, same size, centred with flanking hairline
        rules on both sides
  zone: text
  use: soft, human closing lines under a wellness or lifestyle image
  style: soft editorial wellness

- ref: yk:ref/0022
  kind: layout
  name: diagonal-grunge-defense-poster
  what: a poster built on a rotated diagonal axis, with a large logotype and a repeated smaller offset
        echo of the same wordmark bleeding off the top-right corner
  build: main title ~15° rotated, baseline sits low-left; a second instance of the same word, smaller and
        higher-contrast, repeats top-right as if photocopied at an angle
  zone: graphic
  use: aerospace/defense/military-tech poster identity, repeated-echo logotype device
  style: military tech grunge poster

- ref: yk:ref/0022
  kind: material
  name: aged-schematic-paper-ground
  what: a warm beige textured ground carrying faint printed blueprint/map linework as if the poster is
        laid over an old technical document
  build: paper-grain base colour (~#D8D2C0), low-opacity contour/road linework and coordinate text
        scattered underneath the main graphics
  zone: graphic
  use: giving tech/defense subject matter an analogue, archival credibility
  style: military tech grunge poster

- ref: yk:ref/0022
  kind: effect
  name: red-scan-glitch-streaks
  what: a cluster of angled red and dark linear streaks resembling a scan-line glitch or radar sweep,
        placed as a corner accent
  build: 8–12 parallel diagonal bars of varying width and opacity, mixed red/black/white, clipped by a
        diagonal edge
  zone: graphic
  use: high-tech/military energy accents, damage or interference motifs
  style: military tech grunge poster

- ref: yk:ref/0022
  kind: icon
  name: crosshair-target-mark
  what: a small precise crosshair/reticle icon used as a technical accent near a label
  build: circle with four short tick marks at cardinal points, ~16px, thin stroke
  zone: graphic
  use: military/technical marker beside coordinates or targeting copy
  style: military tech grunge poster

- ref: yk:ref/0022
  kind: copy
  name: coordinate-string-label
  what: a line of latitude/longitude-style coordinate text set small along a diagonal, used as texture
        as much as information
  build: ~10px mono/grotesk, degree-minute-second formatting, angled to match the poster's rotation
  zone: text
  use: technical/military flavour copy, authenticity texture on tech posters
  style: military tech grunge poster

- ref: yk:ref/0022
  kind: object
  name: index-number-plus-diamond-bullet
  what: a two-digit index number paired with a small diamond glyph and a tiny sparkle, set apart in a
        corner as a catalogue/edition mark
  build: number ~18px bold, diamond outline ~10px above it, tiny 4-point star beside, stacked vertically
  zone: graphic
  use: numbering plates/posters/products in a series
  style: military tech grunge poster

- ref: yk:ref/0022
  kind: copy
  name: bracket-plus-closing-mark
  what: a small "[ + ]" glyph used as a colophon-style closing mark next to credit text
  build: square brackets around a plus sign, same size as surrounding caption text, monospace-like
  zone: text
  use: quiet signature/closing device in poster credit lines
  style: military tech grunge poster

- ref: yk:ref/0023
  kind: type
  name: stacked-bold-display-title-cjk
  what: a two-line bold display title in CJK script, tightly stacked with strong stroke contrast, set
        against pure black
  build: ~56px heavy weight, minimal line-gap, pure white fill, left-aligned
  zone: graphic
  use: horror/dark editorial poster titles
  style: dark horror ink poster

- ref: yk:ref/0023
  kind: effect
  name: upward-ink-bloom
  what: a plume of warm-coloured smoke/paint diffusing upward and outward from a point near the bottom,
        with soft fractal edges
  build: warm orange-to-amber cloud, denser and darker at the base, dissolving into fine particles at the
        top and sides, set against solid black
  zone: graphic
  use: dramatic single-colour accent on dark horror/suspense key art
  style: dark horror ink poster

- ref: yk:ref/0023
  kind: material
  name: paired-halftone-gradient-orbs
  what: two dot-pattern gradient shapes shaped like a pair of eyes/heads, dots shrinking toward the edges,
        one shape denser than the other
  build: two roughly teardrop/circular dot fields, red-toned, dot size decreasing radially, positioned
        side by side like a gaze
  zone: graphic
  use: implying a face/presence in negative space using only halftone texture
  style: dark horror ink poster

- ref: yk:ref/0023
  kind: copy
  name: vertical-edge-pull-quote
  what: a line of dialogue set vertically along the right edge of the frame, in quotation marks, read
        top to bottom
  build: ~13px regular CJK, rotated to run vertically, right-aligned to the frame edge
  zone: text
  use: atmospheric dialogue/quote treatment on poster edges
  style: dark horror ink poster

- ref: yk:ref/0023
  kind: copy
  name: spaced-keyword-tag-line
  what: a row of a few bold thematic keywords separated by wide spaces, functioning as a genre tag line
        rather than a sentence
  build: ~14px bold, 3 short words with generous letter/word spacing, no separators or bullets
  zone: text
  use: genre/mood tagging under a title on key art or posters
  style: dark horror ink poster

- ref: yk:ref/0024
  kind: pattern
  name: cascading-connected-step-cards
  what: three cards of increasing size arranged in a descending staircase, each representing one step of
        a flow, joined by a glowing orthogonal connector line with a dot at each bend
  build: cards offset diagonally down-right, connector drawn as right-angle elbows (not diagonal),
        stroke glows in the accent colour with a soft blur halo, small filled dot at each joint
  zone: graphic
  use: onboarding/quiz flows, multi-step wizards shown as one narrative graphic
  style: dark warm product UI

- ref: yk:ref/0024
  kind: object
  name: step-badge-plus-question-card
  what: a dark card with a small tracked "STEP N" eyebrow, a bold question/heading, and a browser-chrome
        dot row at the top suggesting it's a live screen
  build: 3-dot traffic-light row top-left, thin address-bar rule beside it, eyebrow in accent orange
        ~11px, heading ~26px regular
  zone: graphic
  use: framing a UI step as a "screenshot" inside a marketing narrative
  style: dark warm product UI

- ref: yk:ref/0024
  kind: object
  name: icon-radio-option-row
  what: a list of selectable rows each with a radio dot, a label, and a trailing small icon illustrating
        the option, one row shown selected with a glowing accent ring
  build: rows ~48px, radio circle left, label centre, small line icon right, selected row gets a full
        accent-colour border + inner glow, unselected rows plain dark
  zone: graphic
  use: quiz/preference selection UI, settings choices with visual hints
  style: dark warm product UI

- ref: yk:ref/0024
  kind: object
  name: product-shelf-photo-composition
  what: a trio of product bottles/tubes of graduated height standing on a small dark plinth, lit warmly,
        used as a "your result" payoff image
  build: 3 packaging shapes side by side on a thin dark shelf ellipse, warm rim lighting, small printed
        labels legible at arm's length
  zone: graphic
  use: skincare/product "your personalised set" reveal moments
  style: dark warm product UI

- ref: yk:ref/0025
  kind: chart
  name: dashed-target-line-chart
  what: a line chart with two overlapping series — a solid area/line for actual values and a dashed line
        for a target/benchmark — over a noisy dark textured card background
  build: axis labels tiny and muted, solid line filled with a very subtle gradient, dashed line same
        hue but desaturated, date-range chip pill top-right of the card
  zone: graphic
  use: analytics dashboards comparing actual vs. target performance
  style: dark tech dashboard

- ref: yk:ref/0025
  kind: object
  name: vertical-icon-tab-list
  what: a stack of pill-shaped tab rows, each with a small icon and label, one active (lighter fill) and
        the rest flat/muted
  build: rows ~40px, 10px radius, active row gets a subtle lighter background, inactive rows fully flat
        with dimmed icon+label
  zone: graphic
  use: switching between dashboard views/metrics in a sidebar-style list
  style: dark tech dashboard

- ref: yk:ref/0025
  kind: icon
  name: isometric-layered-stack-icon
  what: a 3D isometric icon of thin flat layers stacked with a gap between them, top layer patterned
        with small dots, all rendered in dark glassy material with soft edge glow
  build: 3 stacked rounded-square slabs, consistent isometric angle, subtle rim light along top edges,
        dot pattern etched into the top slab only
  zone: graphic
  use: "capacity/layers/data" concept icons in dark dashboard feature grids
  style: dark tech dashboard

- ref: yk:ref/0025
  kind: icon
  name: isometric-ascending-bar-icon
  what: a 3D isometric bar-chart icon with three bars of increasing height, dark glass material, faint
        outline duplicate behind for depth
  build: 3 rectangular extrusions in isometric projection, ascending height, thin outline "ghost" bars
        offset behind for a layered look
  zone: graphic
  use: "growth/progress" concept icon in dark dashboard feature grids
  style: dark tech dashboard

- ref: yk:ref/0025
  kind: icon
  name: isometric-hologram-cube-icon
  what: an isometric cube projected as a wireframe above a small glowing dot-grid platform, like a
        hologram emitter, with tiny connection dots along its edges
  build: dot-grid base plate, faint vertical light-cone connecting plate to a wireframe cube above,
        small bright nodes at cube vertices
  zone: graphic
  use: "data/decisions/AI" concept icon in dark dashboard feature grids
  style: dark tech dashboard

- ref: yk:ref/0026
  kind: effect
  name: dot-matrix-photo-mask
  what: a dense dot-screen pattern masks the sharpest, most saturated part of a photograph while the rest
        stays fully photographic, blending texture and realism in one image
  build: dot size fixed (~4px), mask boundary follows the subject's brightest petals/edges, dots pure
        white over the photo's natural colour
  zone: graphic
  use: brand photography treatments that need a "digitised" signature without full duotone
  style: soft brand photography

- ref: yk:ref/0026
  kind: icon
  name: organic-ring-monogram
  what: a hand-irregular ring/donut shape used as an abstract logomark, its outline slightly uneven like
        a brushstroke rather than a perfect circle
  build: closed ring ~60px, outer/inner edge both slightly wavy, single flat white fill, no gradient
  zone: graphic
  use: soft, organic wordmark companions for wellness/beauty brands
  style: soft brand photography

- ref: yk:ref/0026
  kind: type
  name: serif-wordmark-on-photo
  what: a clean, medium-weight serif logotype set directly over a busy photographic background at full
        opacity white, relying on the photo's mid-tone for contrast
  build: ~32px serif, generous letterspacing, paired inline with the ring mark to its left
  zone: graphic
  use: logo lockups over hero photography without a background plate
  style: soft brand photography

- ref: yk:ref/0027
  kind: layout
  name: rim-lit-silhouette-hero
  what: a backlit human silhouette against a saturated warm gradient, with UI controls floating over the
        dark portion of the body for contrast
  build: strong warm key light from behind/above blowing out the hair edge, figure otherwise near-black,
        gradient ground shifting deep red to bright amber
  zone: graphic
  use: meditation/wellness app hero screens needing emotional warmth
  style: warm ambient wellness UI

- ref: yk:ref/0027
  kind: object
  name: translucent-pill-tag
  what: a small frosted rounded-rectangle tag holding a short category label, floating over the photo
  build: ~90x30px, heavy blur + low-opacity white fill, 13px regular label, generous horizontal padding
  zone: graphic
  use: category/mood tags over photographic hero art
  style: warm ambient wellness UI

- ref: yk:ref/0027
  kind: object
  name: labelled-value-slider-bar
  what: a wide frosted pill acting as a slider track, with a label on the left, a dot-tick pattern
        filling the middle, and the current value on the right
  build: ~380x50px pill, label ~14px left-inset, evenly spaced small dots as the track fill, numeric
        value right-inset, thin vertical handle mark at the current position
  zone: graphic
  use: volume/theme/intensity controls in ambient or media apps
  style: warm ambient wellness UI

- ref: yk:ref/0027
  kind: object
  name: circular-transport-trio
  what: three circular buttons — skip-back-10, play (solid white, larger), skip-forward-10 — laid out in
        a classic media-transport row
  build: outer buttons ~64px frosted dark, centre button ~72px solid white with a dark play glyph,
        skip icons include a small "10" numeral inside the circular arrow
  zone: graphic
  use: audio/meditation session playback controls
  style: warm ambient wellness UI

- ref: yk:ref/0027
  kind: copy
  name: countdown-ellipsis-line
  what: a muted line of descending numerals separated by ellipses, implying a live countdown beneath a
        breathing instruction headline
  build: "5...4...3...2..." at ~14px, reduced opacity, directly under a bold instructional headline
  zone: text
  use: guided-breathing/meditation countdown microcopy
  style: warm ambient wellness UI

- ref: yk:ref/0028
  kind: pattern
  name: glow-bleed-hero-band
  what: a hero section whose bottom edge fades into a bright horizontal glow band that bleeds past the
        content edges, separating hero from the next section without a hard line
  build: warm orange radial/linear glow concentrated at the horizontal seam, full-bleed width, content
        above stays on plain dark
  zone: graphic
  use: dark SaaS hero-to-content transitions wanting warmth instead of a flat divider
  style: warm dark SaaS

- ref: yk:ref/0028
  kind: object
  name: glowing-circuit-icon-card
  what: a square dark card whose icon is drawn as a glowing node-and-branch circuit diagram rather than a
        static pictogram, radiating soft light from the central node
  build: central bright node, 2–4 thin branch lines to smaller nodes, each rendered as a tiny lit circle,
        whole icon sits on a subtly noisy dark card
  zone: graphic
  use: feature/benefit cards on tech-forward dark landing pages
  style: warm dark SaaS

- ref: yk:ref/0028
  kind: pattern
  name: three-step-process-row
  what: three equal square cards in a row, each with a centred glowing icon and a short caption below,
        forming a "how it works" strip
  build: uniform card size, icon centred with warm glow, caption 2 lines max, consistent card radius
        across all three
  zone: graphic
  use: process/how-it-works sections on SaaS landing pages
  style: warm dark SaaS

- ref: yk:ref/0028
  kind: object
  name: halo-avatar-testimonial-card
  what: a small dark card with a circular avatar backlit by a soft glow ring, a name, and a short quote,
        used in a horizontal testimonial row
  build: avatar ~48px with a diffuse coloured glow behind it, name bold ~13px, quote ~11px muted below
  zone: graphic
  use: testimonial/quote strips on landing pages wanting more warmth than a flat avatar
  style: warm dark SaaS

- ref: yk:ref/0028
  kind: pattern
  name: highlighted-middle-pricing-card
  what: three pricing cards in a row where the centre card is visually promoted — slightly taller, a
        glowing hex-pattern background, and a "popular" ribbon tag
  build: side cards flat dark, centre card gets warm glow + subtle hexagon texture fill + accent-bordered
        CTA button; all three share identical row of feature bullets structure
  zone: graphic
  use: SaaS pricing tables that need to visually steer choice to one tier
  style: warm dark SaaS

- ref: yk:ref/0028
  kind: object
  name: bordered-expand-faq-row
  what: an accordion row where the open item gets a full accent-coloured border instead of just a
        background change, making the active question look like a highlighted card
  build: closed rows are plain 1px dark dividers with a chevron; the open row grows a rounded accent
        border and reveals answer text with extra padding
  zone: graphic
  use: FAQ sections wanting the open state to feel distinctly "selected"
  style: warm dark SaaS

- ref: yk:ref/0029
  kind: object
  name: central-hub-node-diagram-icon
  what: a rounded square "hub" icon at the centre with thin lines radiating out to smaller circular icon
        nodes on both sides, each node a different small pictogram
  build: hub ~56px rounded square with gradient fill and centred glyph, 5–6 satellite circles ~32px
        connected by 1px lines with a small dash mid-line, faint dot-grid background
  zone: graphic
  use: "integrations/ecosystem/features" hero icon for feature-grid cards
  style: dark fintech card grid

- ref: yk:ref/0029
  kind: icon
  name: overlapping-circle-currency-cluster
  what: three small circular icon badges (each a currency symbol) overlapping in a triangular cluster
        above a hexagonal outline, implying multi-currency support
  build: 3 circles ~40px arranged triangularly with slight overlap, each a different flat colour with a
        symbol glyph, faint hexagon outline drawn behind connecting them
  zone: graphic
  use: multi-currency/multi-option concept icon in fintech cards
  style: dark fintech card grid

- ref: yk:ref/0029
  kind: icon
  name: glossy-sphere-with-chat-bubble
  what: a glossy dark 3D sphere with a small chat-bubble icon orbiting it, plus a thin orbital ring,
        evoking "global communication"
  build: sphere with soft top-left highlight and reflection, bubble badge ~28px overlapping the sphere's
        edge, one thin ellipse ring behind at an angle
  zone: graphic
  use: "connection/social/global reach" concept icon
  style: dark fintech card grid

- ref: yk:ref/0029
  kind: icon
  name: particle-square-globe
  what: a globe rendered entirely from small square particles of varying size and opacity, denser at the
        globe's centre mass and sparse at the terminator, with a couple of accent-coloured dots
  build: square "pixels" of 2–3 sizes following a sphere's implied curvature, mostly monochrome grey
        with 2–3 cyan accent squares marking "active" points
  zone: graphic
  use: "global network/transfers" hero icon in fintech or infrastructure cards
  style: dark fintech card grid

- ref: yk:ref/0029
  kind: layout
  name: asymmetric-two-by-two-card-grid
  what: a feature grid where one card spans a full row at top and the remaining three sit as smaller
        equal cells below, avoiding a uniform grid monotony
  build: top card ~2x width of each bottom cell, consistent gutter and radius across all cards, each
        card padded identically regardless of size
  zone: graphic
  use: SaaS/fintech feature sections wanting visual hierarchy without a hero image
  style: dark fintech card grid

- ref: yk:ref/0030
  kind: material
  name: quilted-satin-photo-ground
  what: a close-up photograph of quilted padded fabric/leather with small gold bead studs, used as the
        entire background behind glass UI cards
  build: soft directional light raking across the quilting to model each pillow, scattered small gold
        spheres as accent details, desaturated warm-grey tone
  zone: graphic
  use: luxury security/fintech hero backgrounds wanting tactile richness instead of a flat gradient
  style: luxury glass fintech

- ref: yk:ref/0030
  kind: object
  name: barcode-plus-serif-title-card
  what: a frosted glass login card headed by a tiny barcode graphic and a tracked serif/mono title using
        a middle-dot separator and a superscript-style trademark circle
  build: barcode ~24px tall top-left, title two lines "SAFE · CORE© / SET 02↗" ~20px tracked, small
        arrow glyph suffix, body copy in small caps beneath
  zone: graphic
  use: premium security-product branding headers on glass cards
  style: luxury glass fintech

- ref: yk:ref/0030
  kind: object
  name: underline-only-form-fields
  what: login form fields with no visible box — just a small caption label above a plain baseline rule
  build: 10px caption label, ~1px underline rule beneath the implied input area, generous vertical
        spacing between fields, plain text-only submit label at the end
  zone: graphic
  use: minimal/luxury forms that avoid boxed input chrome
  style: luxury glass fintech

- ref: yk:ref/0030
  kind: object
  name: thumbnail-stat-card
  what: a small dark card pairing a square photo thumbnail with a two-line label and one large bold
        percentage figure
  build: thumbnail ~90px square left, text stack right (small label + smaller sublabel + large ~28px
        bold percent), thumbnail carries a tiny circular target-icon overlay
  zone: graphic
  use: compact trust/metric callouts ("customer satisfaction 99.8%") near hero content
  style: luxury glass fintech

- ref: yk:ref/0030
  kind: chart
  name: giant-numeral-progress-readout
  what: a percentage rendered as an oversized geometric numeral treated as the hero graphic of a card,
        paired with a thin progress rule and a small diagonal arrow glyph
  build: numeral ~64px in a squared-off geometric face with small superscript "%", thin 1px progress
        line above with a tiny percent + "LOADING" caption, arrow glyph bottom-right echoing the angle
  zone: graphic
  use: loading/status screens wanting the number itself to be the dominant visual
  style: luxury glass fintech

- ref: yk:ref/0031
  kind: layout
  name: illuminated-grid-cell-hero
  what: a dark hero built from a visible cell grid (like graph paper), where a few individual cells light
        up with a token icon and status caption while the rest stay empty and dim
  build: uniform square grid ~5x3, thin hairline dividers, 2–3 active cells get a radial highlight glow
        behind their icon plus a small status badge (checkmark / spinner) in the corner
  zone: graphic
  use: crypto/infra dashboards visualising discrete nodes or transactions on a grid
  style: dark crypto grid

- ref: yk:ref/0031
  kind: object
  name: token-tile-with-status-caption
  what: within a grid cell, a small icon tile (coin/token glyph) sits above a two-line caption stating an
        action and an amount, plus a tiny status badge overlapping the tile's corner
  build: icon tile ~48px rounded-square, caption below in 9–10px caps label + value line, badge ~16px
        circle at the tile's top-right corner
  zone: graphic
  use: representing live transactions/swaps/blocks as discrete grid nodes
  style: dark crypto grid

- ref: yk:ref/0031
  kind: type
  name: condensed-tracked-display-headline
  what: a very wide, heavily letterspaced condensed sans headline spanning almost the full width in two
        lines, in a muted grey rather than pure white
  build: ~42px condensed uppercase, wide tracking, line-height tight, sits low in the layout beneath the
        grid graphic
  zone: graphic
  use: technical/crypto hero headlines wanting a wide "signage" presence
  style: dark crypto grid

- ref: yk:ref/0031
  kind: object
  name: dual-cta-button-pair
  what: two buttons side by side — one solid filled, one dark with a border — offering a primary and
        secondary action at equal visual weight of size but different weight of emphasis
  build: both ~130x40px, 8px radius, solid button white-fill/black-text, outline button 1px border with
        white text
  zone: graphic
  use: standard primary/secondary CTA pairing on dark hero sections
  style: dark crypto grid

- ref: yk:ref/0032
  kind: object
  name: keycap-row-with-lit-center-key
  what: a horizontal row of rounded-square keycaps where only the centre key is lit with a glowing accent
        colour and icon, the others are dark and dim, and a finger presses the lit key
  build: 5 keycaps ~70px, outer keys flat dark with faint icon, centre key filled in saturated red with
        heavy outer glow and a bold glyph, photographic finger overlapping from below
  zone: graphic
  use: "the one tool that matters" hero metaphor — picking the right key among many apps
  style: dark tech glow hero

- ref: yk:ref/0032
  kind: type
  name: two-line-bold-statement-headline
  what: a short, punchy two-line headline using parallel imperative sentences ("Stop X. Start Y.") in
        bold white centred type
  build: ~32px bold, centred, tight leading, each line a complete short sentence
  zone: text
  use: punchy contrast-pair hero headlines for productivity/tools products
  style: dark tech glow hero

- ref: yk:ref/0032
  kind: object
  name: filled-plus-outline-cta-pair
  what: two pill buttons side by side, one solid accent-filled, one outline-only in the same accent hue,
        both same size
  build: ~140x44px pills, filled button white text on accent fill, outline button accent text + accent
        1px border on transparent
  zone: graphic
  use: primary/secondary CTA pairing directly beneath a hero headline
  style: dark tech glow hero

- ref: yk:ref/0033
  kind: layout
  name: corner-notch-card-frame
  what: the entire page sits inside a large card whose top-right corner is cut off diagonally instead of
        rounded, giving a technical/blueprint feel to an otherwise editorial layout
  build: single diagonal chamfer ~60px at one corner only, thin 1px border, dark noisy-grain fill
  zone: graphic
  use: portfolio/agency site frames wanting one deliberate asymmetric detail
  style: dark editorial studio

- ref: yk:ref/0033
  kind: type
  name: highlighted-word-plus-cursor-headline
  what: an editorial headline where one phrase is set on a solid colour-block highlight (like marker
        highlighter) and the line ends with a blinking text-cursor glyph
  build: headline mixes serif and sans across two lines, highlighted phrase gets a contrasting solid
        background block behind just that text, thin vertical cursor bar after the final word
  zone: graphic
  use: "typing/live-editing" hero headline device for content or writing-adjacent products
  style: dark editorial studio

- ref: yk:ref/0033
  kind: icon
  name: exploded-isometric-node-stack
  what: a vertical exploded-view stack of isometric platform layers, each holding different network/node
        icons, connected implicitly by vertical alignment rather than drawn lines
  build: 3 isometric slabs stacked with visible gaps, top slab holds circular network-node icons, middle
        holds a denser mesh-node icon, bottom holds a single bold glyph icon; all line-art on dark
  zone: graphic
  use: "how our system layers work" hero graphic for platform/infrastructure products
  style: dark editorial studio

- ref: yk:ref/0033
  kind: object
  name: corner-plus-registration-ticks
  what: small plus-sign marks placed at regular intervals along the page margins, echoing print
        registration/crop marks
  build: 4 small "+" glyphs, thin stroke, evenly spaced along a vertical guide line at the content edge
  zone: graphic
  use: giving a digital layout a print-production, precision-tooled feel
  style: dark editorial studio

- ref: yk:ref/0034
  kind: object
  name: icon-title-description-illustration-card
  what: a dark feature card with a small line icon top-left, a bold title, a muted two-line description,
        and a larger illustrative graphic anchored to the card's bottom edge
  build: consistent padding, icon ~20px, title ~15px bold, description ~12px muted, illustration occupies
        the bottom ~45% of the card and can bleed to the card's side edges
  zone: graphic
  use: SaaS feature-grid cards where each card teaches its point with a mini diagram, not just an icon
  style: dark minimal SaaS

- ref: yk:ref/0034
  kind: chart
  name: hexagon-track-slider-illustration
  what: a decorative "slider" illustration where the track is a hexagon shape and the handle is a pill,
        used purely as an icon/illustration rather than a functioning control
  build: hexagon outline behind, horizontal pill capsule with a smaller pill handle overlapping its
        left third, all in matching greys
  zone: graphic
  use: illustrating a "scheduling/settings" feature abstractly without a literal calendar
  style: dark minimal SaaS

- ref: yk:ref/0034
  kind: chart
  name: muted-ascending-bar-illustration
  what: a simple ascending bar chart rendered in flat muted grey bars of equal width but varying height,
        used as card decoration rather than real data
  build: 7 bars, rounded tops, heights varying non-monotonically to look organic, no axis or labels
  zone: graphic
  use: generic "analytics" illustration for feature cards where exact data doesn't matter
  style: dark minimal SaaS

- ref: yk:ref/0035
  kind: icon
  name: particle-built-specialty-glyph-set
  what: a matched set of icons where each glyph (snowflake, waveform, lungs, network, uterus, lightning,
        eye, heart) is constructed from small diamond/dot particles rather than solid strokes
  build: particles at 2–3 sizes, denser at the glyph's core lines and sparser at the tips, gradient from
        white core to grey outer, consistent particle module across all 8 icons
  zone: graphic
  use: medical/scientific specialty icon systems, or any icon family wanting a "data-built" texture
  style: particle icon system

- ref: yk:ref/0035
  kind: layout
  name: labelled-icon-grid
  what: a clean 4-column x 2-row grid of icons each with a centred caption label beneath, generous even
        spacing, no card backgrounds or dividers
  build: icons ~70px each, caption 11px centred directly below with fixed gap, grid gutters equal
        horizontally and vertically
  zone: graphic
  use: presenting an icon system or category list cleanly on dark backgrounds
  style: particle icon system

- ref: yk:ref/0036
  kind: material
  name: marbled-ink-swirl-texture
  what: a fluid black-and-green marbled ink texture with organic swirling veins, used as a full-bleed
        panel background
  build: high-contrast fluid-dynamics pattern, acid-green veins through near-black ground, no gradient
        smoothing — genuinely turbulent edges
  zone: graphic
  use: music/mood key art, album covers, dramatic full-bleed panels
  style: acid-lyric moodboard

- ref: yk:ref/0036
  kind: type
  name: circular-arc-set-text
  what: a short phrase set along a circular arc around a central sparkle glyph, reading like a badge or
        seal inscription
  build: text curved along ~220° of a circle, 4-point sparkle centred inside, letters upright relative to
        the arc (not flipped), small caps
  zone: graphic
  use: badge/seal typographic devices, vinyl-label-style circular captions
  style: acid-lyric moodboard

- ref: yk:ref/0036
  kind: copy
  name: two-column-lyric-block
  what: song lyrics set in two parallel short-line columns, small and quiet, functioning as ambient text
        rather than a headline
  build: ~11px regular, tight leading, two columns side by side with a wide gutter, left-aligned
  zone: text
  use: lyric sheets, mood-setting ambient copy on music-adjacent layouts
  style: acid-lyric moodboard

- ref: yk:ref/0036
  kind: object
  name: spiky-outline-orbit-badge
  what: a jagged star/cog-outlined badge shape with a thin ellipse "orbit" ring crossing through it at an
        angle, small x-marks at the ellipse's poles, bold word centred inside
  build: 16-point jagged outline ~180px, 1px ellipse ring rotated ~20° through the centre, "x" glyphs at
        the ring's two extremes, bold centred word ~20px
  zone: graphic
  use: "free/unlocked/orbit" concept badges for music or lifestyle brand key art
  style: acid-lyric moodboard

- ref: yk:ref/0036
  kind: object
  name: textured-glass-divider-bar
  what: a horizontal frosted-glass bar with a fine ribbed/lens texture, three small sparkle glyphs
        breaking its bottom edge, separating two panels
  build: bar ~60px tall, subtle vertical ribbing suggesting fluted glass, sparkles ~14px straddling the
        bottom edge at even intervals
  zone: graphic
  use: transition device between two stacked panels in a collage layout
  style: acid-lyric moodboard

- ref: yk:ref/0037
  kind: material
  name: iridescent-grain-ribbon
  what: a large abstract 3D ribbon/wave form with a shifting holographic gradient (orange-cyan-blue) and
        heavy film-grain noise across its surface
  build: smooth ribbon geometry with a folded twist, gradient mapped across the fold to create colour
        separation, uniform grain noise overlaid on top of the gradient
  zone: graphic
  use: abstract infrastructure/AI hero art wanting a premium, tactile abstract centrepiece
  style: dark grain gradient hero

- ref: yk:ref/0037
  kind: pattern
  name: blurred-seam-footer-transition
  what: the hero's colourful glow bleeds downward through the seam into an otherwise plain dark footer,
        softly colouring the nearest footer content without a hard cut
  build: gaussian-blurred colour glow sampled from the hero art, fading to zero a short distance into the
        footer's dark background
  zone: graphic
  use: connecting a colourful hero to a plain footer without an abrupt boundary
  style: dark grain gradient hero

- ref: yk:ref/0037
  kind: pattern
  name: two-column-footer-link-list
  what: a simple footer layout with a brand block (logo, name, one-line description, social icons) on the
        left and two evenly spaced columns of plain text links on the right
  build: brand column ~40% width, two link columns each with a small caps heading and 4–5 plain links,
        consistent 13px size, generous line-height
  zone: text
  use: standard SaaS footer link architecture
  style: dark grain gradient hero

- ref: yk:ref/0038
  kind: object
  name: dashed-spine-diamond-stack
  what: a vertical column of isometric diamond-shaped icon tiles connected by a single dashed vertical
        line with small dot nodes marking each connection point
  build: 5 diamond tiles stacked with even gaps, each holding a distinct thin-line pictogram, dashed
        spine passes through the centre of each with a filled dot at top and bottom of every tile
  zone: graphic
  use: representing a sequential pipeline or stack of related capabilities as one vertical spine
  style: dark minimal fintech

- ref: yk:ref/0038
  kind: layout
  name: alternating-side-feature-grid
  what: feature text blocks placed alternately left and right of a central diamond-stack column, each in
        its own quadrant cell defined by thin grid lines
  build: 2x2-ish cell grid (some cells empty), each populated cell holds a bold caps title + 2-line
        description, thin 1px rules divide all cells uniformly regardless of content
  zone: graphic
  use: pairing a central "system" graphic with surrounding feature call-outs
  style: dark minimal fintech

- ref: yk:ref/0039
  kind: type
  name: dot-matrix-led-headline
  what: a headline set in a dot-matrix/LED-style display face, each letter built from a coarse dot grid,
        used for short punchy statements
  build: ~32px dot-font, tight tracking, pure black on light ground, terminal periods kept as part of the
        display rhythm ("FIX. LEARN.")
  zone: graphic
  use: developer-tool headlines wanting a literal "system/terminal" typographic voice
  style: dev-tool dot-matrix

- ref: yk:ref/0039
  kind: pattern
  name: branching-input-output-flow-diagram
  what: a symmetric node diagram where two input tags branch down into a central icon and then back out
        into two output tag branches, drawn with simple dotted right-angle connectors and dot joints
  build: central icon in a soft rounded square, 4 pill-shaped tag labels (two per side) connected by thin
        dotted lines with small filled-dot joints at each bend
  zone: graphic
  use: illustrating an input-process-output concept (e.g. "customer/code in, ticket/PR out")
  style: dev-tool dot-matrix

- ref: yk:ref/0039
  kind: chart
  name: dot-font-stat-with-logo-row
  what: a row of case-study stats where each stat is a client logo above a huge dot-matrix numeral/percent
        and a short caption, used side by side for social proof
  build: logo ~20px height, numeral ~48px dot-font, caption 11px muted, columns separated by thin vertical
        rules
  zone: graphic
  use: credibility/results strips pairing client logos directly with their outcome numbers
  style: dev-tool dot-matrix

- ref: yk:ref/0039
  kind: material
  name: dot-column-terrain-illustration
  what: an abstract "skyline/terrain" made of many thin vertical dot-columns of varying height and
        density, denser and taller on the right, thinning to scattered dots on the left
  build: columns built from small square dots, height and dot-count varying to imply a data landscape or
        cityscape, monochrome grey on cream
  zone: graphic
  use: abstract "big data / complex systems" illustration blocks beside text
  style: dev-tool dot-matrix

- ref: yk:ref/0039
  kind: copy
  name: mixed-weight-emphasis-paragraph
  what: a body paragraph where most text is muted regular weight but one key phrase is set in full-
        contrast bold, drawing the eye without a separate headline
  build: ~16px regular grey for most of the sentence, the emphasised clause switches to bold black
        inline, same size
  zone: text
  use: long-form marketing copy that wants one phrase to read like a mini-headline
  style: dev-tool dot-matrix

- ref: yk:ref/0040
  kind: layout
  name: blob-and-arch-module-grid
  what: a 2x2 grid of square cells, each cell tiled edge-to-edge with a unique arrangement of rounded
        blob, half-circle and arch shapes in one flat colour, forming abstract letterform-like
        compositions
  build: each cell built from 3–5 large geometric primitives (full circle, half-circle, quarter-arch,
        rounded rectangle) sized to fill the cell exactly with thin light seams between shapes
  zone: graphic
  use: template/layout-pack cover art, abstract sectional dividers, generative logotype systems
  style: geometric layout pack

- ref: yk:ref/0040
  kind: copy
  name: pack-cover-title-footer-pair
  what: a small tracked-caps title above the graphic and a bolder descriptive line below it, framing a
        cover image as a numbered product in a series
  build: title ~12px tracked caps centred top, footer line ~13px bold centred bottom, both isolated by
        large margins from the central graphic
  zone: text
  use: naming and describing a downloadable asset pack or template set on its own cover
  style: geometric layout pack

- ref: yk:ref/0041
  kind: pattern
  name: stacked-shadow-recipe-rows
  what: three horizontal rows, each comparing one shadow technique via a sample tile on the left and two
        columns of exact parameter values on the right, separated by full-width hairlines
  build: sample tile ~140px rounded square repeated per row, parameter columns list Blur / X,Y / Opacity /
        Color as plain label-value pairs, thin 1px divider between each of the three rows
  zone: text
  use: educational shadow/effect reference sheets, style-guide documentation pages
  style: neumorphic spec sheet

- ref: yk:ref/0041
  kind: copy
  name: corner-metadata-caption-pair
  what: small plain captions placed in the top and bottom corners of a document — a title/author pair up
        top, a date/brand pair at the bottom — framing the content without any decoration
  build: ~11px regular, left caption and right caption at each corner, no rules or boxes, pure text
        placement
  zone: text
  use: lightweight document chrome for tutorials, spec sheets, or slide exports
  style: neumorphic spec sheet

- ref: yk:ref/0042
  kind: pattern
  name: split-hero-product-with-thumbnail-column
  what: a hero split into a left navigation/copy zone and a right zone showing a large product photo
        flanked by a vertical stack of alternate-variant thumbnails
  build: hero divided by a soft vertical seam (not a hard line — a blurred gradient edge), 3 thumbnail
        chips ~90px stacked with gaps at the far right, main product image centred and large
  zone: graphic
  use: e-commerce/product hero sections offering variant switching without leaving the hero
  style: premium supplement e-commerce

- ref: yk:ref/0042
  kind: type
  name: bold-lead-word-headline
  what: a multi-line headline where only the first word is bold and the rest of the sentence continues in
        regular weight, creating emphasis without a colour change
  build: ~28px, first word bold, remainder regular same size and colour, tight leading across 3 lines
  zone: text
  use: quietly emphasising a lead verb/claim in product headlines
  style: premium supplement e-commerce

- ref: yk:ref/0042
  kind: object
  name: label-plus-circular-arrow-cta
  what: a pill button pairing a left-aligned text label with a separate filled circular icon-button
        (arrow) at its trailing end, the two reading as one control
  build: pill ~170x48px, dark fill, white label left-padded, small white circle ~36px inset at the right
        edge with a dark arrow glyph
  zone: graphic
  use: primary CTA pattern that visually previews the "next step" via its own icon capsule
  style: premium supplement e-commerce

- ref: yk:ref/0042
  kind: chart
  name: two-column-bold-stat-band
  what: a dark full-width band presenting four trust statistics as bold oversized percentages with a
        short caption beneath each, arranged in two columns at opposite edges with a product render
        centred between them
  build: stat numerals ~36px bold, caption 11px muted below each, left column stats left-aligned, right
        column right-aligned, product image floating centred at the same vertical band
  zone: graphic
  use: clinical/trust stat sections for supplement, health or finance products
  style: premium supplement e-commerce

- ref: yk:ref/0042
  kind: icon
  name: molecule-node-logomark
  what: a small abstract logomark built from connected rounded nodes forming a wavy chain, like a
        simplified molecule or waveform
  build: 3–4 filled circular nodes joined by smoothly curved connecting strokes, single colour, compact
        square footprint
  zone: graphic
  use: science/health/biotech brand marks needing a friendly, organic connectivity motif
  style: premium supplement e-commerce

- ref: yk:ref/0043
  kind: object
  name: zigzag-ring-quote-badge
  what: a circular badge whose outline is a jagged zigzag/stitch pattern rather than a smooth ring, framing
        a short italic phrase with small triangular flanking marks
  build: ~140px circle, zigzag stroke ring ~8px deep teeth, phrase centred mixing regular and italic
        words, small triangle bullets left/right of the text
  zone: graphic
  use: playful stamp-like callouts for hospitality/lifestyle brand invitations
  style: dark lounge hospitality

- ref: yk:ref/0043
  kind: icon
  name: clover-diamond-ring-mark
  what: four small diamond/petal shapes arranged around a shared centre point inside a thin circular
        ring, forming a clover-like logomark
  build: 4 rounded-diamond petals meeting at the centre, thin 1px circle framing them with even padding
  zone: graphic
  use: hospitality/lounge/lifestyle brand marks wanting a soft geometric emblem
  style: dark lounge hospitality

- ref: yk:ref/0043
  kind: object
  name: vertical-capsule-running-label
  what: a tall pill/capsule shape overlaid on a photo with a short label rotated to run vertically through
        its centre, plus small ringed dot markers at the capsule's top and bottom tips
  build: capsule ~600px tall sliver, semi-transparent over the photo, 1px outline, label rotated -90°
        centred, small circle-ring glyphs at each rounded end
  zone: graphic
  use: a decorative vertical "spine" label laid over hero photography in editorial hospitality layouts
  style: dark lounge hospitality

- ref: yk:ref/0043
  kind: object
  name: overlapping-twin-oval-tag-pair
  what: two outlined ovals overlapping slightly like a Venn diagram, each containing one short word,
        together forming a two-part phrase
  build: two ~110px ovals, 1px stroke, ~15% overlap, one word centred in each, both same weight and size
  zone: graphic
  use: pairing two related short words as a single graphic unit (e.g. "settle" / "down")
  style: dark lounge hospitality

- ref: yk:ref/0043
  kind: object
  name: binder-hole-arch-card
  what: a rounded-arch-top card with a row of small evenly-spaced holes punched along its top edge, like
        a page from a ring-bound notebook
  build: arch radius spans the card's full width, 5 small circular holes ~4px along the top straight
        edge before the arch begins
  zone: graphic
  use: giving a digital card a physical stationery/notebook feel
  style: dark lounge hospitality

- ref: yk:ref/0044
  kind: pattern
  name: browser-chrome-dashboard-frame
  what: the entire dashboard is presented inside a realistic browser window mockup, complete with traffic
        lights, a URL bar and window controls, rather than as a bare UI crop
  build: macOS-style 3-dot traffic light cluster, centred URL pill with a padlock icon, small nav arrows
        and window icons at both ends of the chrome bar
  zone: graphic
  use: presenting web-app dashboards in portfolio/case-study contexts with implied browser context
  style: soft organic data dashboard

- ref: yk:ref/0044
  kind: chart
  name: cloud-cluster-node-map
  what: a central large circular status dial surrounded by smaller irregular blob/cloud-shaped nodes at
        varying distances, each blob labelled with a name and a percentage, all rendered in soft
        translucent organic shapes rather than hard circles
  build: central dial ~220px with a bold status word inside, 5–6 satellite blobs of varying blobby
        outline (not perfect circles) placed asymmetrically, each with small percentage label
  zone: graphic
  use: visualising a distributed set of related units (pods, servers, sensors) around one aggregate state
  style: soft organic data dashboard

- ref: yk:ref/0044
  kind: chart
  name: notch-ring-progress-dial
  what: a large circular progress ring with a dashed inner boundary and a bold status word centred, plus
        a small radial notch/pointer marking a threshold
  build: ring built from a dotted/dashed circular path rather than a solid arc, one small tick/line
        marking a specific point on the circumference, big word centred inside
  zone: graphic
  use: capacity/fullness indicators for tanks, storage, or resource pools
  style: soft organic data dashboard

- ref: yk:ref/0044
  kind: chart
  name: soft-gradient-area-sparkline
  what: a small line chart with a soft colour-matched gradient fill beneath the line, sitting inside a
        tinted card that shares the same hue family as the chart
  build: line rendered white/light over the tinted card, area fill fading from the card's accent colour
        to transparent, minimal axis ticks in a muted label colour
  zone: graphic
  use: compact trend widgets inside a themed dashboard side panel
  style: soft organic data dashboard

- ref: yk:ref/0045
  kind: object
  name: folder-tab-card
  what: a card shape with a small folded corner tab cut into its top edge like a physical file folder,
        used as a container for a category or collection
  build: top-left corner has a small diagonal fold/cutout (~20px), rest of the card is a plain rounded
        rectangle, icon and label sit in the lower portion
  zone: graphic
  use: representing folders/collections/categories in a list UI more literally than a plain card
  style: dark mobile fitness app

- ref: yk:ref/0045
  kind: object
  name: recurring-item-row-with-ring-counter
  what: a full-width list row combining a title and cadence caption on the left with a small numbered
        ring/dial and a settings icon on the right
  build: row ~64px, title bold + muted caption stacked left, circular ring counter ~32px with a bold
        numeral centred, small icon button beside it
  zone: graphic
  use: recurring task/habit rows needing an inline progress indicator without a full chart
  style: dark mobile fitness app

- ref: yk:ref/0045
  kind: object
  name: in-progress-session-bar
  what: a wide rounded bar showing a bold time readout, a status caption, a thin progress line at the
        top edge, and a circular action button at the trailing end
  build: bar ~72px tall, thin progress rule inset from the top edge, bold time ~24px + status label
        stacked left, circular upward-arrow button ~44px right-aligned
  zone: graphic
  use: persistent "current activity" bar in fitness/productivity apps
  style: dark mobile fitness app

- ref: yk:ref/0045
  kind: object
  name: icon-only-bottom-tab-bar
  what: a minimal four-icon tab bar with no text labels, relying purely on iconography and an active-state
        colour shift
  build: 4 icons evenly spaced, ~24px, inactive icons dimmed grey, active icon full white, home-indicator
        bar beneath on notched devices
  zone: graphic
  use: clean mobile app primary navigation when icons alone are unambiguous
  style: dark mobile fitness app

- ref: yk:ref/0046
  kind: effect
  name: orbital-instrument-linework
  what: a dense arrangement of overlapping circles and arcs of varying radii and centres, crossed by a few
        long diagonal lines connecting distant points, resembling a technical/astronomical instrument
  build: 6–8 circles of different sizes with shared or offset centres, 2–3 long straight diagonals
        crossing through multiple circles, all thin 1px white-on-black strokes
  zone: graphic
  use: abstract technical/scientific HUD backgrounds, "system diagram" key art
  style: HUD technical

- ref: yk:ref/0046
  kind: copy
  name: cryptic-alphanumeric-code-fragment
  what: short meaningless-looking code fragments (letter+number combinations) placed as design elements,
        legible as text but not meant to communicate real information
  build: ~24px condensed grotesk, high contrast, placed at deliberate but seemingly arbitrary positions
  zone: graphic
  use: adding technical authenticity/texture to HUD or sci-fi interfaces without real data
  style: HUD technical

- ref: yk:ref/0046
  kind: object
  name: ringed-endpoint-marker
  what: a small circle-with-dot marker placed at the vanishing point or endpoint of a long diagonal line,
        marking it as a meaningful coordinate
  build: outer ring ~20px thin stroke, small filled dot at centre, sits exactly where a line terminates
  zone: graphic
  use: marking key points/nodes at the ends of connector lines in technical diagrams
  style: HUD technical

- ref: yk:ref/0046
  kind: material
  name: corner-registration-block-cluster
  what: small solid and outlined rectangle blocks of varying grey values scattered near the frame's
        corners, functioning as abstract "data panel" placeholders
  build: 3–5 small rectangles per corner cluster, mixed fill/outline, no content inside, sized 10–40px
  zone: graphic
  use: filling HUD corners with implied instrumentation without needing real widgets
  style: HUD technical

- ref: yk:ref/0047
  kind: type
  name: doubled-echo-vertical-title
  what: the same CJK title set twice at different scales and opacities, the larger blurred version
        offset behind the smaller sharp version, creating a depth/echo effect
  build: background instance ~1.6x larger, heavily blurred and mid-grey, foreground instance sharp black,
        both vertical, roughly aligned but not exactly overlapping
  zone: graphic
  use: book-cover/poster title treatments wanting drama and depth from typography alone
  style: literary vertical typography

- ref: yk:ref/0047
  kind: object
  name: dotted-bracket-column-frame
  what: a pair of small dotted tick-mark brackets (like open/close carets made of dots) framing the top
        and bottom of a vertical text column
  build: 3 small dots forming an angled bracket at the very top and bottom of the column, thin vertical
        guide line connecting them through the text
  zone: graphic
  use: quietly bracketing a vertical title column as if it were a selected/highlighted text range
  style: literary vertical typography

- ref: yk:ref/0047
  kind: copy
  name: small-caps-romanised-subtitle
  what: a tiny vertical English translation/subtitle set beside the main vertical CJK title in a serif
        italic, acting as a quiet gloss
  build: ~10px serif italic, rotated to run vertically, positioned just left of the main title column
  zone: text
  use: bilingual book covers wanting an unobtrusive translation alongside the main title
  style: literary vertical typography

- ref: yk:ref/0047
  kind: object
  name: crescent-moon-accent-glyph
  what: a single small crescent-moon icon placed quietly beside a title as an atmospheric punctuation
        mark rather than a logo
  build: ~14px simple crescent silhouette, positioned inline with a small vertical author-credit tag
  zone: graphic
  use: mood-setting single-icon accents on literary/poetic covers
  style: literary vertical typography

- ref: yk:ref/0047
  kind: material
  name: soft-fog-gradient-ground
  what: a very low-contrast, softly clouded grey-blue gradient background giving a cold, quiet, foggy
        atmosphere behind the type
  build: large soft radial/linear blur blending near-white and pale blue-grey, no visible texture or
        grain, extremely gentle contrast
  zone: graphic
  use: quiet, literary or wintry mood backgrounds behind minimal typography
  style: literary vertical typography

- ref: yk:ref/0048
  kind: type
  name: doubled-echo-vertical-title-repeat
  what: the same reference as yk:ref/0047 (identical composition) — the doubled-echo vertical CJK title
        device confirmed as a repeatable, deliberate technique rather than a one-off accident
  build: see yk:ref/0047 doubled-echo-vertical-title for full build spec
  zone: graphic
  use: same as yk:ref/0047 — book-cover/poster title treatments wanting depth from typography alone
  style: literary vertical typography

- ref: yk:ref/0048
  kind: object
  name: dotted-bracket-column-frame-repeat
  what: same dotted tick-bracket framing device as yk:ref/0047, confirming it as a stable, nameable
        component rather than incidental decoration
  build: see yk:ref/0047 dotted-bracket-column-frame for full build spec
  zone: graphic
  use: same as yk:ref/0047
  style: literary vertical typography

- ref: yk:ref/0049
  kind: type
  name: script-logotype-plus-tracked-subtitle
  what: a flowing connected-script display headline paired directly beneath with a small tracked-caps
        subtitle, forming a two-tier title block for a style guide or brand page
  build: script ~40px with a thin underline rule spanning its width, subtitle ~11px letterspaced caps
        centred beneath, both centred as a unit
  zone: graphic
  use: naming a mood/style board or brand concept ("Botanical Dark Luxury")
  style: botanical dark luxury palette

- ref: yk:ref/0049
  kind: object
  name: labelled-swatch-row
  what: a row of solid colour rectangles each with its hex code printed centred beneath, forming a basic
        palette reference strip
  build: 5 swatches ~110x70px, 4px radius, even gutters, hex in 11px mono/grotesk centred below each
  zone: graphic
  use: the most basic palette documentation unit, reusable at any swatch count
  style: botanical dark luxury palette

- ref: yk:ref/0049
  kind: pattern
  name: promo-card-with-dual-cta
  what: a small marketing card combining a moody product photo, a script headline overlay, and two
        stacked or paired CTA buttons beneath it, used to demo the palette "in situ"
  build: photo fills ~70% of the card height, script headline + one pill button overlaid on the photo,
        two more buttons of different roles sit in a row below the photo
  zone: graphic
  use: showing how a palette performs on a real promotional card, not just as swatches
  style: botanical dark luxury palette

- ref: yk:ref/0049
  kind: object
  name: leaf-illustration-quote-plate
  what: a light cream card with centred script/serif copy and a small botanical leaf illustration
        anchored to one corner, used as a quote or CTA plate distinct from the dark cards around it
  build: cream fill, centred two-line message in mixed script+serif weights, a simple 2–3 leaf line
        illustration bottom-right corner, thin rule dividing headline from a smaller line
  zone: graphic
  use: demonstrating a light/contrast card option within an otherwise dark palette system
  style: botanical dark luxury palette

- ref: yk:ref/0049
  kind: object
  name: button-state-demo-row
  what: a labelled row of buttons demonstrating different interactive states (default/hover/disabled/
        etc.) side by side under a "STATES" caption, so the palette's button behaviour is documented
  build: 4 pill buttons of equal size but different fills/opacity representing each state, small caption
        label centred above the row
  zone: graphic
  use: documenting button state colours as part of a palette/style-guide sheet
  style: botanical dark luxury palette

- ref: yk:ref/0049
  kind: object
  name: named-background-swatch-circles
  what: a row of circular colour swatches each labelled with a material-inspired name (Forest, Moss,
        Linen, Ink, Walnut) rather than a hex code, under a "Backgrounds:" caption
  build: circles ~70px, name centred below each in 12px regular, preceded by a bold inline label
  zone: graphic
  use: naming background colour roles memorably for a design system, alongside raw hex documentation
  style: botanical dark luxury palette

- ref: yk:ref/0050
  kind: object
  name: date-chip-with-delta-and-play
  what: a small dark pill combining a date label, a signed delta value in the accent colour, and a
        separate play/next icon button beside it
  build: pill ~200px, date left ~13px, delta right-aligned in accent green with explicit "+" sign, play
        triangle icon sits outside the pill to its right
  zone: graphic
  use: compact "current period + change + advance" control for time-based dashboards
  style: dark HUD timeline

- ref: yk:ref/0050
  kind: chart
  name: vertical-scrub-handle-on-hour-ruler
  what: a vertical draggable handle sitting on a horizontal hour-tick ruler, the handle rendered as a
        tall accent-coloured capsule with a grip-dots affordance at top and a triangle pointer marking
        its exact ruler position
  build: ruler ticks every 3 hours with bold label at the nearest major tick, capsule ~14px wide spanning
        from the ruler down through an underlying track bar, small grip-dot row at the capsule's top
  zone: graphic
  use: scrubbing/selecting a precise time-of-day value against a 24-hour ruler
  style: dark HUD timeline

- ref: yk:ref/0050
  kind: object
  name: stacked-dual-range-track
  what: two horizontal track bars stacked directly above one another, each partially filled to a
        different extent, sharing the same vertical scrub-line passing through both
  build: tracks ~14px tall, rounded ends, filled portion slightly lighter than the unfilled portion, a
        single vertical accent line/dot passes through both tracks at the same x-position
  zone: graphic
  use: comparing two related ranges (e.g. planned vs actual) against one shared time axis
  style: dark HUD timeline

- ref: yk:ref/0051
  kind: layout
  name: split-auth-card-with-dot-portrait
  what: a sign-in card split into a plain white form panel on the left and a dot-halftone portrait image
        bleeding to the card's right edge, the whole card floating over a blurred landscape photo
  build: form panel ~55% width white, portrait panel dot-matrix treatment matching the yk:ref/0026 mask
        technique, card corners rounded uniformly, backdrop photo heavily blurred behind the card
  zone: graphic
  use: auth/onboarding screens wanting a branded illustrative moment beside a plain functional form
  style: monochrome auth product

- ref: yk:ref/0051
  kind: object
  name: oauth-button-stack
  what: two full-width outlined buttons stacked with generous gap, each combining a provider's icon glyph
        with "Sign in with X" text, followed by an "OR" divider with flanking rules before email fields
  build: buttons ~44px, 1px border, icon ~16px left-inset, label centred-ish, "OR" centred between two
        thin horizontal rules with equal whitespace
  zone: graphic
  use: standard social-login stack pattern above a traditional email/password form
  style: monochrome auth product

- ref: yk:ref/0051
  kind: object
  name: labelled-boxed-input-field
  what: a form field with a small label above a fully boxed input (unlike the underline-only style seen
        elsewhere), placeholder text in monospace for a technical feel
  build: label ~11px above, input box ~40px with 1px border and 6px radius, placeholder in mono ~12px
        grey, trailing inline link ("Forget Password?") right-aligned on the label row
  zone: graphic
  use: standard technical-product login forms wanting a slightly code-adjacent voice
  style: monochrome auth product

- ref: yk:ref/0052
  kind: object
  name: biometric-fingerprint-card
  what: a dark card headlined "Efficient Biometrics" with three small circular icon chips (face, touch,
        eye) above a large centred glowing fingerprint glyph
  build: icon chips ~36px in a row, fingerprint icon large (~72px) centred below with a soft radial glow
        halo behind it, headline top-left bold
  zone: graphic
  use: security/biometric feature tiles in fintech dashboards
  style: dark fintech tile collage

- ref: yk:ref/0052
  kind: icon
  name: radial-satellite-hub-icon
  what: a central hub glyph surrounded by 4–5 small icon satellites connected by faint curved orbit
        arcs, each satellite representing a different platform feature
  build: hub ~48px centred with a bold pictogram, satellites ~24px placed around it at uneven angles,
        thin curved connecting arcs rather than straight lines, very low-opacity background rings
  zone: graphic
  use: "one platform, many features" hero icon for fintech/SaaS feature cards
  style: dark fintech tile collage

- ref: yk:ref/0052
  kind: chart
  name: percentage-flow-ribbon-chart
  what: a chart pairing a short list of percentage-labelled categories on the left with soft flowing
        ribbon-like curves connecting them to their values on the right, resembling a simplified Sankey
  build: 2–3 rows each with a bold percentage in a rounded chip, label and value to its right, faint
        overlapping curved ribbons behind connecting the rows visually
  zone: graphic
  use: transaction/category breakdowns wanting more visual flow than a plain bar or pie
  style: dark fintech tile collage

- ref: yk:ref/0052
  kind: object
  name: dark-metallic-card-render
  what: a photorealistic rendering of a physical payment card in dark metal with a small logo, presented
        at a slight angle with soft studio lighting and reflection
  build: card ~2.5:1 ratio, brushed-metal texture, logo embossed top-left, soft rim light along one edge,
        subtle drop shadow beneath
  zone: graphic
  use: physical-card reveal moments in fintech marketing/dashboard contexts
  style: dark fintech tile collage

- ref: yk:ref/0052
  kind: object
  name: security-alert-notification-card
  what: a dark card styled like a system notification, with app icon, timestamp, bold alert title, and a
        short explanatory message, distinct from ordinary content cards by its urgency framing
  build: small app icon + name + timestamp row at top (like an OS notification), bold red-tinted title
        beneath, 2-line explanatory copy, no CTA button — informational only
  zone: graphic
  use: simulating real-time security/fraud alerts inside a fintech dashboard mockup
  style: dark fintech tile collage

- ref: yk:ref/0052
  kind: object
  name: qr-code-with-warning-stamp
  what: a QR code graphic overlaid with a diagonal "FAKE" stamp-style warning label, paired with a short
        caption about recognising fraudulent codes
  build: QR code ~80px, bold diagonal red-ish stamp text crossing its centre, caption text to the left
        explaining the feature
  zone: graphic
  use: security-education UI moments in payment apps (fraud/QR-spoofing awareness)
  style: dark fintech tile collage

## Stylistic registers in this batch

- glass product UI — yk:ref/0000
- dark soft product UI — yk:ref/0001
- luxury editorial — yk:ref/0002
- pulp poster illustration — yk:ref/0003
- minimal blueprint product — yk:ref/0004
- print halftone — yk:ref/0005
- dark tech case-study — yk:ref/0006
- HUD technical — yk:ref/0007, 0011, 0046
- soft product UI — yk:ref/0008
- palette card — yk:ref/0009
- swiss editorial — yk:ref/0010
- swiss construction poster — yk:ref/0012
- soft neumorphic UI — yk:ref/0013
- dark tech HUD — yk:ref/0014
- minimal data-map product — yk:ref/0015
- dark tech creative tool — yk:ref/0016
- lo-fi warm photographic — yk:ref/0017
- generative particle render — yk:ref/0018
- minimal luxury print — yk:ref/0019
- washi editorial — yk:ref/0020
- soft editorial wellness — yk:ref/0021
- military tech grunge poster — yk:ref/0022
- dark horror ink poster — yk:ref/0023
- dark warm product UI — yk:ref/0024
- dark tech dashboard — yk:ref/0025
- soft brand photography — yk:ref/0026
- warm ambient wellness UI — yk:ref/0027
- warm dark SaaS — yk:ref/0028
- dark fintech card grid — yk:ref/0029
- luxury glass fintech — yk:ref/0030
- dark crypto grid — yk:ref/0031
- dark tech glow hero — yk:ref/0032
- dark editorial studio — yk:ref/0033
- dark minimal SaaS — yk:ref/0034
- particle icon system — yk:ref/0035
- acid-lyric moodboard — yk:ref/0036
- dark grain gradient hero — yk:ref/0037
- dark minimal fintech — yk:ref/0038
- dev-tool dot-matrix — yk:ref/0039
- geometric layout pack — yk:ref/0040
- neumorphic spec sheet — yk:ref/0041
- premium supplement e-commerce — yk:ref/0042
- dark lounge hospitality — yk:ref/0043
- soft organic data dashboard — yk:ref/0044
- dark mobile fitness app — yk:ref/0045
- literary vertical typography — yk:ref/0047, 0048
- botanical dark luxury palette — yk:ref/0049
- dark HUD timeline — yk:ref/0050
- monochrome auth product — yk:ref/0051
- dark fintech tile collage — yk:ref/0052
