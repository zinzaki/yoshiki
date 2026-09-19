# Extraction batch 02 — yk:ref/0053 … yk:ref/0105

- ref: yk:ref/0053
  kind: pattern
  name: smart-home-tablet-dashboard
  what: dark iPad-shaped dashboard for a home-automation app; greeting header, room tab row, device
        card grid, right rail with hero speaker photo and now-playing card
  build: near-black ground (#1c1c1c) on mid-grey panel cards (#2a2a2a); 12px card radius; two-column
         grid of unequal device cards; header "Welcome Home, {name}" 20px bold + 13px muted line under
  zone: graphic
  use: dashboard shells, control-centre style apps
  style: soft product UI

- ref: yk:ref/0053
  kind: object
  name: room-tab-row
  what: horizontal text tab list (Bedroom / Living Room / Kitchen / Washroom) with the active tab
        underlined
  build: 13px medium labels, even gaps ~28px, active label full-opacity + 2px underline, inactive at
         ~50% opacity, no pill background
  zone: graphic
  use: switching context within one screen without a segmented control
  style: soft product UI

- ref: yk:ref/0053
  kind: object
  name: device-card-with-toggle
  what: card naming a device (icon, name, sub-label) with a pill toggle switch top-right
  build: 16px radius card, small circular icon chip top-left, 13px name + 11px muted model line,
         toggle pill top-right corner, ~16px internal padding
  zone: graphic
  use: any list of controllable smart devices
  style: soft product UI

- ref: yk:ref/0053
  kind: object
  name: stepper-control-row
  what: a paired minus/value/plus row for adjusting a numeric setting (temperature)
  build: "− 26°C +" laid out in one row, buttons as plain circular ghost hit-areas either side of a
         bold centred value, sits inside a full-width card under an icon+title header
  zone: graphic
  use: thermostat, volume, quantity controls
  style: soft product UI

- ref: yk:ref/0053
  kind: object
  name: mini-media-player-card
  what: compact now-playing card nested inside a device card — art thumbnail, title, transport row
  build: 40px square art with rounded corners, two lines of text (track/artist) beside it, playback
         row below (prev/play/next) centred, sits inside a taller parent card
  zone: graphic
  use: audio widgets embedded in a larger dashboard tile
  style: soft product UI

- ref: yk:ref/0053
  kind: object
  name: connected-photo-card
  what: small landscape photo tile with a circular "+" affordance centred on it, used as an
        "add appliance" or camera-feed placeholder
  build: greyscale photo, 12px radius, small translucent circular button centred with plus glyph
  zone: graphic
  use: add-new-item entries mixed into a device grid
  style: soft product UI

- ref: yk:ref/0053
  kind: object
  name: floating-record-button
  what: circular red FAB isolated at the bottom of the panel, no label
  build: solid red-orange circle ~48px, drop shadow, sits alone in empty space away from other
         controls to signal a primary/emergency action
  zone: graphic
  use: voice command, SOS, record triggers
  style: soft product UI

- ref: yk:ref/0054
  kind: object
  name: pill-tab-selector-multi
  what: four-way rounded tab group switching between product collections (Lumo/Neo/Pastel/Classic
        Dots)
  build: single pill container, ~4px internal padding, active segment filled black with white text,
         inactive segments transparent with black text, 13px medium labels
  zone: graphic
  use: switching catalogue/collection filters
  style: glass product UI

- ref: yk:ref/0054
  kind: layout
  name: split-hero-collage-panel
  what: two-panel hero split — left a warm 3D product-still collage of spheres and lamps, right a
        dark catalogue panel with heading and product cards
  build: 50/50 vertical split inside one rounded outer frame, photo bleeds to the frame edge on one
        side only
  zone: graphic
  use: product landing sections that pair mood imagery with functional UI
  style: glass product UI

- ref: yk:ref/0054
  kind: object
  name: arch-top-product-card
  what: product card whose top corners are heavily rounded into a full arch, image fills the arch,
        label/price sits below on a dark ground
  build: border-radius ~50% top / small bottom, "NEW IN" pill badge top-left, circular arrow-out
         button top-right, plus-button bottom-right over the image, name/price row beneath
  zone: graphic
  use: featured product tiles, gift/lamp catalogues
  style: glass product UI

- ref: yk:ref/0054
  kind: object
  name: spec-table-rows
  what: plain two-column spec list (label left, value right) with hairline dividers
  build: 12px caption-case label at ~60% opacity, 13px value right-aligned, ~14px row height, thin
         1px divider between rows, no zebra striping
  zone: graphic
  use: product spec sheets, settings screens
  style: glass product UI

- ref: yk:ref/0054
  kind: icon
  name: size-variant-silhouette-row
  what: three simplified lamp silhouettes (line icon) with a dimension caption under each, used to
        pick a size variant
  build: single-stroke outline icons ~32px, 10px caption below each ("19 x 25 CM" etc.), evenly
         spaced in a row
  zone: graphic
  use: variant pickers for physical products (size, shape)
  style: glass product UI

- ref: yk:ref/0054
  kind: object
  name: brand-diamond-logomark
  what: small four-lobe cross/diamond mark used as a standalone corner logo
  build: four rounded petal shapes meeting at a centre point, solid black, ~24px, no wordmark
         attached in this placement
  zone: graphic
  use: favicon-style brand mark, watermark corner
  style: glass product UI

- ref: yk:ref/0055
  kind: layout
  name: two-column-editorial-app-spread
  what: full editorial page: big stacked headline far left, device mockup centred, thin info/label
        column far right
  build: three vertical zones roughly 30/40/30, headline uses baseline-aligned mixed-weight type,
         right column stacked as small caption blocks with generous vertical gaps
  zone: graphic
  use: case-study / portfolio presentation of an app screen
  style: swiss editorial

- ref: yk:ref/0055
  kind: type
  name: stacked-mixed-weight-display
  what: 4-line display headline alternating bold-black and light-grey weight per line/word
        ("The / Primary / Function of / an Alarm Clock")
  build: single sans family, ~40px, tight leading (~0.95), colour alternates full-black and
         50%-grey to create a secondary reading rhythm without changing size
  zone: graphic
  use: editorial hero headlines, case-study covers
  style: swiss editorial

- ref: yk:ref/0055
  kind: object
  name: radial-tick-dial
  what: circular clock-face made only of tick marks and one small centred three-pronged glyph,
        no numerals
  build: ~40 short radial ticks around a circle, one longer tick as "hand", plain icon at centre;
        entirely line-based, no fill
  zone: graphic
  use: abstracted clock/timer indicator
  style: swiss editorial

- ref: yk:ref/0055
  kind: object
  name: dual-value-range-caption
  what: two time values flanking a headline, acting as a range readout ("00:00 ... 02:00") with a
       label beneath ("Clean the Entire Field")
  build: small muted "00" prefix + large value, mirrored left/right, thin baseline rule connecting
         them
  zone: graphic
  use: range/duration display without a visible slider track
  style: swiss editorial

- ref: yk:ref/0055
  kind: object
  name: dot-matrix-progress-canvas
  what: large square field of evenly spaced dots that fills in (darker dots) to show progress/reveal
        a shape, with a red marker dot at the fill edge
  build: regular grid of ~14px-spaced dots, unfilled at low opacity, filled region rendered in solid
         black, single red accent dot marks the active point
  zone: graphic
  use: progress reveal, mini-game/gesture surfaces, loading states
  style: swiss editorial

- ref: yk:ref/0055
  kind: object
  name: full-width-pill-cta
  what: rounded rectangle primary button with icon + label, coloured to contrast against a neutral
       screen
  build: red-orange fill, white play-glyph + "Start" label centred, ~28px height, full card width
  zone: graphic
  use: primary confirm/start actions in mobile flows
  style: swiss editorial

- ref: yk:ref/0055
  kind: copy
  name: bracketed-id-caption
  what: small numeric tag in curly braces used as a recurring annotation ("{0010}")
  build: monospace-leaning 10px caption, placed isolated in whitespace next to an icon, repeated
         verbatim elsewhere on the same spread to tie sections together
  zone: graphic
  use: footnote-style cross references in editorial layouts
  style: swiss editorial

- ref: yk:ref/0056
  kind: pattern
  name: exploded-isometric-spec-poster
  what: single hero exploded-view isometric render of a hardware module stacked above an
        overview/protocol/power/materials spec grid
  build: pure black canvas, white 1px isometric wireframe/line render floating centred, big flush
         headline top-left ("S7 / INTERFACE MODULE"), giant index numeral top-right ("01")
  zone: graphic
  use: hardware/tech product spec sheets, dev-facing marketing
  style: HUD technical

- ref: yk:ref/0056
  kind: type
  name: giant-index-numeral
  what: oversized numeral used as a page/section index in the corner, disconnected from body copy
  build: same weight as headline but 3-4x the size, right-aligned to the frame edge, pure white on
        black
  zone: graphic
  use: pagination, section markers in technical decks
  style: HUD technical

- ref: yk:ref/0056
  kind: object
  name: label-value-spec-columns
  what: two/three-column spec grid, each column a caps micro-label over a bold value pair
  build: 10px tracked-out caps label, 13px value beneath, columns separated by wide gutters not
        rules, grouped under bold section headers (OVERVIEW/POWER/MATERIALS)
  zone: graphic
  use: technical/industrial spec sheets
  style: HUD technical

- ref: yk:ref/0056
  kind: material
  name: wireframe-line-render
  what: 3D object rendered as pure white outline/wireframe on black, no shading or fill
  build: constant-width strokes, isometric projection, layered "exploded" sections separated
        vertically with visible connective edges
  zone: graphic
  use: technical/blueprint hero imagery
  style: HUD technical

- ref: yk:ref/0057
  kind: pattern
  name: palette-swatch-sheet
  what: branded colour-palette reference card: four tall rounded swatches with hex labels, plus
        combo rows, mini previews and a pattern-card thumbnail
  build: near-black ground, swatches as tall pill/rounded-rect columns (~140x460), hex code in
        white bottom-left of each swatch, thin horizontal accent line crossing all swatches at
        ~85% height
  zone: graphic
  use: internal colour-system documentation, palette pitch decks
  style: palette card

- ref: yk:ref/0057
  kind: object
  name: two-color-combo-pill
  what: horizontal pill split into two halves by colour, hex code labelled at each end
  build: rounded-rect pill, hard 50/50 vertical split, hex text sits on its own half in
        contrasting mono/sans, stacked as a list of combos below the main swatches
  zone: graphic
  use: showing which colours pair well, quick combinatorics reference
  style: palette card

- ref: yk:ref/0057
  kind: object
  name: half-circle-combo-preview
  what: small circle split vertically into two colours, four variants labelled A/B/C/D
  build: circle ~48px, hard vertical split, letter caption above each, arranged in a row for quick
        visual comparison of pairings
  zone: graphic
  use: rapid pairing preview before committing to full swatch combos
  style: palette card

- ref: yk:ref/0057
  kind: type
  name: cursive-wordmark-repeat
  what: the word "Colorful" repeated four times in a script/cursive face, each instance recoloured
        to one palette hue
  build: same script font, four repeats in a row, colour cycles through the four palette hexes as
        a live-swatch preview of the type-in-colour
  zone: graphic
  use: showing how an accent colour reads as display type
  style: palette card

- ref: yk:ref/0057
  kind: material
  name: gradient-mesh-swatch-bar
  what: thin horizontal bar showing a smooth gradient blend between two palette colours
  build: full-bleed thin strip (~20px tall), left-to-right linear blend, stacked one per combo
        beneath the cursive-word row
  zone: graphic
  use: verifying two colours blend cleanly for gradients/backgrounds
  style: palette card

- ref: yk:ref/0058
  kind: pattern
  name: fleet-traffic-dashboard
  what: dark ops dashboard on an angled monitor mockup: top tab bar, left stat rail, centre satellite
        map, right alert/warning panel, bottom stat strip
  build: near-black ground (#101010), panel cards at ~#1a1a1a with 12px radius, thin 1px hairline
        borders at low opacity, map desaturated satellite imagery with a glowing white route line
  zone: graphic
  use: logistics/ops/monitoring dashboards
  style: HUD technical

- ref: yk:ref/0058
  kind: object
  name: status-chip-pair
  what: small pill chips with a coloured dot + count, used side by side for opposite states
        ("Online 12" green dot / "Offline 4" red dot)
  build: 8px filled circle + label, pill background at low-opacity tint of the dot colour,
        ~24px height
  zone: graphic
  use: binary status counts (online/offline, pass/fail)
  style: HUD technical

- ref: yk:ref/0058
  kind: chart
  name: big-percent-with-sparkline
  name2: operational-efficiency-tile
  what: large percentage figure with a small label above and a thin sparkline trend beneath
  build: 32px numeral + "%", 11px caption label above it, hairline sparkline (~60px tall) below with
        a subtle value tag at the peak
  zone: graphic
  use: KPI tiles anywhere a single headline metric needs a trend
  style: HUD technical

- ref: yk:ref/0058
  kind: object
  name: mini-vehicle-map-card
  what: small card pairing a route-line thumbnail map with a status row (name, online chip, GPS/LTE
        tags)
  build: ~140x100 card, top half a tiny route-line preview on dark map tile, bottom half two lines
        of caption text with small icon tags
  zone: graphic
  use: fleet/asset lists where each row needs its own mini-map
  style: HUD technical

- ref: yk:ref/0058
  kind: object
  name: severity-alert-list
  what: vertical list of alert rows, each with a coloured dot/icon, bold title and muted detail line
  build: 8px severity dot (red/orange), 12px bold title, 11px muted subtext, rows separated by
        generous vertical spacing not rules
  zone: graphic
  use: warnings, incident feeds, notification panels
  style: HUD technical

- ref: yk:ref/0058
  kind: chart
  name: horizontal-bar-legend-list
  what: labelled list where each row is a short horizontal bar + numeric value, used for a
       high/medium/low/errors breakdown
  build: label left, thin coloured bar (~40-80px) proportional to value, numeral right-aligned,
        colour coded per severity band
  zone: graphic
  use: compact categorical breakdowns inside a sidebar
  style: HUD technical

- ref: yk:ref/0059
  kind: object
  name: voice-listening-pill
  what: full floating capsule surfaced during voice input: label, mic glyph, live waveform dots,
        stop button
  build: warm brown-glass pill (~600x90), "Listening…" 18px left, mic icon + amber dot-waveform
        centre-right, small filled square stop-button far right, heavy background blur behind
  zone: graphic
  use: voice-assistant active states, ambient system overlays
  style: glass product UI

- ref: yk:ref/0059
  kind: chart
  name: dot-waveform-equalizer
  what: small grid of dots varying in brightness/size to represent live audio levels
  build: ~7x5 dot grid, amber dots brighter/larger toward the centre columns to suggest a level
        meter, no bars — dots only
  zone: graphic
  use: voice/audio activity indicators
  style: glass product UI

- ref: yk:ref/0059
  kind: material
  name: warm-ambient-blur-ground
  what: heavily blurred colour-bleed background (green-grey to warm amber) behind a glass control
  build: gaussian-blurred photo/gradient, no visible detail, sets warm/cool split lighting for the
        glass element sitting on top
  zone: graphic
  use: contextual backdrops for overlay controls, lock-screen-style surfaces
  style: glass product UI

- ref: yk:ref/0060
  kind: layout
  name: bento-mixed-card-grid
  what: asymmetric bento grid mixing a tall dark card, small icon-tile rows, and wide feature cards
  build: 2-row bento with one tall left column card spanning both rows, remaining cards sized to
        fill the right in a loose grid, ~16px gutters, cream (#eae7e2) canvas
  zone: graphic
  use: SaaS landing feature sections
  style: soft relief

- ref: yk:ref/0060
  kind: object
  name: mini-app-screenshot-card
  what: dark card containing a miniature faux-UI (file list rows + one highlighted action button)
        used as a feature illustration rather than real UI
  build: black card, thin list rows with filenames, one row inverted (white pill) to show the
        "active/summarize" state, headline + CTA text below the mini screenshot
  zone: graphic
  use: illustrating a feature without a full screenshot
  style: soft relief

- ref: yk:ref/0060
  kind: object
  name: icon-tile-row
  what: row of small square icon tiles (each a distinct pictogram) representing document/report
        categories
  build: ~48px rounded-square tiles, single-colour line icon centred, small caption beneath each
        naming the category
  zone: graphic
  use: categorising files, integrations, or content types
  style: soft relief

- ref: yk:ref/0060
  kind: copy
  name: download-tooltip-popover
  what: small dark tooltip chip that appears attached to a UI element, reading "Download the
       Legal.doc"
  build: dark rounded-rect tooltip with a small pointer nub, positioned just above the referenced
        row, low-opacity drop shadow
  zone: graphic
  use: contextual hints layered over screenshots in marketing decks
  style: soft relief

- ref: yk:ref/0061
  kind: pattern
  name: dark-corporate-contact-footer
  what: full black footer/contact page: centred tracked-caps heading, three contact-method blocks,
        a dot-matrix world map, then a three-column footer and copyright bar
  build: pure black ground, all headings in wide letter-spacing caps, icon+label+value blocks
        centred in a row, world map rendered as square dot matrix with 3 glowing cyan location
        markers
  zone: graphic
  use: enterprise/B2B site footers, contact pages
  style: swiss editorial

- ref: yk:ref/0061
  kind: chart
  name: dot-matrix-world-map
  what: world map rendered entirely as uniform square dots, landmasses implied by dot density,
        with a few coloured marker dots for offices
  build: dot grid uniform in spacing, all dots same white-on-black colour, 2-3 accent dots in cyan
        marking specific cities, connecting lines between adjacent markers
  zone: graphic
  use: global-presence / office-location sections
  style: swiss editorial

- ref: yk:ref/0061
  kind: object
  name: icon-label-contact-block
  what: small icon above a bold label and 2-3 lines of address/contact detail, repeated 3x in a row
  build: line icon (~20px) centred, bold caption below, then smaller muted lines, whole block
        centre-aligned text
  zone: graphic
  use: contact/office-address sections
  style: swiss editorial

- ref: yk:ref/0062
  kind: object
  name: dot-matrix-portrait-reveal
  what: phone-screen dot grid that resolves into a recognisable pictogram/face shape via density,
        echoing the progress-canvas idea but used as decorative artwork rather than a progress bar
  build: same dot-grid technique as 0055 but static, denser core fading to sparse edges, forms a
        legible glyph shape
  zone: graphic
  use: generative/data-driven decorative art inside an app mock
  style: swiss editorial

- ref: yk:ref/0062
  kind: copy
  name: command-style-headline
  what: literal natural-language command shown as the screen's headline ("Put me an alarm clock at
        9:41 am")
  build: mixed-weight headline (bold key phrase, regular rest), sits directly above the dot-matrix
        art, doubles as a voice/NL-input example
  zone: graphic
  use: showcasing conversational/AI input in a UI mock
  style: swiss editorial

- ref: yk:ref/0063
  kind: layout
  name: corner-bracket-frame
  what: four independent L-shaped corner brackets marking the active/focused screen area over a
        blurred photographic background
  build: thin white 1px brackets ~20px each leg, positioned inset from the true frame edge so they
        read as a camera/viewfinder crop rather than a full border
  zone: graphic
  use: framing a hero UI element floating on imagery; camera/scan metaphors
  style: HUD technical

- ref: yk:ref/0063
  kind: object
  name: glass-utility-bar
  what: single dark glass bar combining a play/pause state chip, a scrub/progress line, elapsed
       time, and a labelled toggle, all inline
  build: rounded-rect glass bar, coloured square+label at left (state), thin progress line filling
        the middle, time value and "SOUND ON" (green) at right — everything in tracked-out mono caps
  zone: graphic
  use: persistent playback/status bars, campaign countdown bars
  style: HUD technical

- ref: yk:ref/0063
  kind: object
  name: multi-timezone-list
  what: three-column repeated block showing a live time, city name, and address for different
        offices
  build: mono timestamp on top (tracked out), bold city caption, 3-line muted address, columns
        evenly spaced with no dividers
  zone: graphic
  use: global studio/agency footers, "we work everywhere" sections
  style: HUD technical

- ref: yk:ref/0063
  kind: object
  name: disabled-ghost-button
  what: secondary pill button rendered visibly muted/low-opacity to signal a locked or upcoming
        feature ("Launch Campaign")
  build: same pill shape as active buttons but ~40% opacity and no hover affordance implied,
        placed directly beside an active-looking button for contrast
  zone: graphic
  use: gating unreleased features while keeping layout consistent
  style: HUD technical

- ref: yk:ref/0064
  kind: material
  name: rgb-glitch-halftone-portrait
  what: a black-and-white portrait treated with halftone dot conversion plus a chromatic-aberration
       glitch fringe and torn-mask edges
  build: halftone dot pattern over the whole photo, thin RGB channel offset at high-contrast edges,
        a clean horizontal band left un-halftoned (crisp photo) cutting across the glitched portrait
  zone: graphic
  use: moody music/editorial poster imagery, "corrupted" visual metaphors
  style: grunge glitch editorial

- ref: yk:ref/0064
  kind: type
  name: italic-swash-wordmark
  what: lowercase word in a flowing italic/swash display face laid directly over the photo, partly
        obscured by the image
  build: large italic script-like sans, white, positioned to bleed across the torn photo band,
        deliberately partly cropped by other layers
  zone: graphic
  use: single-word emotive titles on grunge/editorial posters
  style: grunge glitch editorial

- ref: yk:ref/0064
  kind: layout
  name: diagonal-red-slab-highlight
  what: a hard-edged red rectangular block placed diagonally/off-grid across the composition to
        anchor a keyword
  build: solid red rect, rotated a few degrees off horizontal, white all-caps word inside, sits
        mid-composition breaking the photo's flow
  zone: graphic
  use: single accent-colour focal block in otherwise monochrome grunge layouts
  style: grunge glitch editorial

- ref: yk:ref/0064
  kind: copy
  name: justified-fragmented-body-copy
  what: body paragraph broken into short justified lines of full-caps text, scattered at odd
       rotations/positions rather than as one paragraph block
  build: 9-10px tracked caps, hard-justified line lengths, split into 2-3 separate floating text
        groups instead of one column
  zone: graphic
  use: manifesto-style poster copy, adding texture/noise to a layout
  style: grunge glitch editorial

- ref: yk:ref/0064
  kind: effect
  name: heavy-grain-halftone-overlay
  what: full-frame grain + halftone-dot texture layered over the entire poster including background
        and negative space
  build: fine dot/grain noise at ~15-20% opacity applied uniformly, darkens shadows and adds
        analogue-print texture
  zone: graphic
  use: unifying mixed photo/type/colour layers into one gritty surface
  style: grunge glitch editorial

- ref: yk:ref/0065
  kind: pattern
  name: cybersecurity-app-trio
  what: three phone-shaped screens showing a security dashboard: assets list, live incident feed,
       and a data-ingestion summary
  build: three device frames side by side at slightly different scales, each on a flat neutral
        ground, consistent orange-accent brand colour across all three
  zone: graphic
  use: multi-screen product showcase for a mobile app
  style: soft product UI

- ref: yk:ref/0065
  kind: object
  name: asset-list-row-with-count
  what: list row: small device-type icon + name, trailing bold count on the right
  build: icon ~16px, name 13px, count right-aligned bold, rows separated by generous whitespace,
        header row has a small arrow-out icon on the right
  zone: graphic
  use: inventories, connected-device lists
  style: soft product UI

- ref: yk:ref/0065
  kind: object
  name: live-feed-alert-row
  what: incident-feed row combining an icon, bold source name, and a muted description, one row
       highlighted solid orange as the active/critical item
  build: rows stacked tightly, default rows on dark ground with icon+text, the flagged row gets a
        full-width solid-orange background to break the rhythm
  zone: graphic
  use: security/ops incident feeds, live activity logs
  style: soft product UI

- ref: yk:ref/0065
  kind: chart
  name: radial-percentage-gauge
  what: circular progress ring with a big centred percentage and caption, plus small coloured dot
       counters (C/H/M/L) beneath
  build: thick ring stroke, gradient from red to green sweeping the progress, "10% Manually
        Resolved" centred, four small labelled severity dots arranged below
  zone: graphic
  use: resolution-rate, completion, or health-score widgets
  style: soft product UI

- ref: yk:ref/0065
  kind: object
  name: rounded-icon-toolbar
  what: small group of 3 square icon buttons in a rounded container, top-right of a card
  build: 3 equal squares in one pill/rounded-rect group, single-colour icons, low-opacity dividers
        between icons
  zone: graphic
  use: quick view/filter/export actions on a card header
  style: soft product UI

- ref: yk:ref/0066
  kind: material
  name: rounded-maze-pipe-pattern
  what: abstract geometric illustration of interlocking rounded pipe/maze shapes reading as a
       stylised QR-code rework
  build: uniform-radius rounded squares and pipe segments in solid black on cream paper, occasional
        small ring cut-outs acting as "finder" motifs, no literal scannable code
  zone: graphic
  use: abstracted pattern/texture derived from a functional glyph (QR, barcode, circuit)
  style: brutalist mono

- ref: yk:ref/0066
  kind: type
  name: tracked-caps-poster-title
  what: centred wide-tracked caps title with a smaller subtitle line beneath, sans-serif
  build: ~28px caps title, generous letter-spacing (~0.2em), 13px subtitle directly under with less
        tracking, both centre-aligned on paper ground
  zone: graphic
  use: gallery/print-style poster titling
  style: brutalist mono

- ref: yk:ref/0066
  kind: material
  name: paper-grain-ground
  what: warm off-white paper texture with subtle grain used as the poster's base material
  build: flat cream (#e7e3dc) with faint noise/fibre texture, no gradient — reads as printed stock
  zone: graphic
  use: print-styled posters, editorial covers
  style: brutalist mono

- ref: yk:ref/0067
  kind: material
  name: halftone-gradient-blob-set
  what: grid of halftone-dot textures where dot size varies to imply light/gradient across organic
       blob and rectangle masks
  build: dark ground, cream dots, each tile a different mask shape (circle, blob, rect) with dot
        density radiating from one or more focal points to fake volume/light
  zone: graphic
  use: overlay textures on photos, background decoration, sticker packs
  style: print halftone

- ref: yk:ref/0067
  kind: object
  name: qr-plus-tag-chip
  what: small square QR code paired with a bold caption label, used as a call-to-action chip within
       a resource/template preview
  build: QR code fixed size bottom-left, bold caption directly above/beside it ("free font"), high
        contrast against the dark tile grid
  zone: graphic
  use: linking a physical/print asset to a digital resource
  style: print halftone

- ref: yk:ref/0068
  kind: pattern
  name: gold-palette-swatch-sheet
  what: same swatch-sheet system as the red/green Noguchi sheets, this time a warm gold/brown/black
       family
  build: identical structure to yk:ref/0057 — four tall swatches, combo pills, half-circle previews,
        cursive word repeats, gradient bars — hexes #19171b/#9e8123/#2f2921/#563a17
  zone: graphic
  use: palette documentation, warm/metallic brand systems
  style: palette card

- ref: yk:ref/0069
  kind: layout
  name: oversized-date-calendar-poster
  what: mobile wallpaper/poster combining a giant date numeral, overlapping month wordmark, and a
       full calendar grid over a soft floral photo
  build: numeral ("28") and "th" ordinal in mixed sizes top-left, month name in huge type overlapping
        the photo, calendar grid card floats over the lower two-thirds with a translucent white
        scrim for legibility
  zone: graphic
  use: calendar widgets, wallpaper-style date displays
  style: lo-fi warm

- ref: yk:ref/0069
  kind: object
  name: calendar-grid-table
  what: classic 7-column calendar grid with weekday header row and date cells, some dates
       underlined as marked/highlighted
  build: weekday abbreviations bold caps header, date numerals plain, Sunday column tinted pink,
        marked dates get a short coloured underline rather than a filled cell
  zone: graphic
  use: any calendar/date-picker surface
  style: lo-fi warm

- ref: yk:ref/0069
  kind: copy
  name: event-legend-list
  what: small numbered list under the calendar pairing a date number with an event name
  build: date numeral left, event label right, 11px, tight line-height, no icons — pure text list
  zone: graphic
  use: holiday/event legends under a calendar
  style: lo-fi warm

- ref: yk:ref/0070
  kind: material
  name: glowing-gradient-cube-render
  what: a single soft-lit 3D cube rendered with smooth light falloff on pure black, no texture,
       almost photographic in its lighting
  build: white-to-grey gradient faces suggesting a single soft key light, black background, no
        outline — form read purely through shading
  zone: graphic
  use: generative-art posters, abstract tech/AI hero imagery
  style: generative mono

- ref: yk:ref/0070
  kind: object
  name: crosshair-corner-marker
  what: small plus/crosshair glyphs marking the bounding corners of the hero object
  build: thin white plus signs (+) placed at implied bounding-box corners, not touching the object
        itself, evokes a measurement/calibration overlay
  zone: graphic
  use: annotating a focal object in technical/generative posters
  style: generative mono

- ref: yk:ref/0070
  kind: object
  name: xyz-axis-diagram
  what: tiny 3-line axis indicator (X/Y/Z) placed near the caption block
  build: three thin lines radiating from one origin point at different angles, single-letter labels
        at each tip, monospace-ish caption font
  zone: graphic
  use: signalling "this is a 3D/technical diagram" without a full grid
  style: generative mono

- ref: yk:ref/0071
  kind: pattern
  name: glass-login-card-on-blur
  what: minimal login form as a glass card floating on a heavily blurred portrait photo, framed by
       corner brackets
  build: corner-bracket frame around the whole composition, small circular loader/target icon above
        a bracketed eyebrow label, glass input fields and buttons stacked in one narrow column
  zone: graphic
  use: auth screens that want atmosphere over decoration
  style: glass product UI

- ref: yk:ref/0071
  kind: object
  name: bracketed-eyebrow-label
  what: small heading wrapped in literal square brackets ("[ Access your account ]")
  build: 13px medium text with "[ " and " ]" as literal characters framing it, sits above a
       one-line description
  zone: graphic
  use: giving a plain heading a technical/terminal feel without a monospace font
  style: glass product UI

- ref: yk:ref/0071
  kind: object
  name: glass-input-field
  what: translucent frosted rectangle input with a muted placeholder label
  build: semi-transparent white-grey fill over blurred backdrop, 1px near-invisible border, label
        above in small caps, ~40px height
  zone: graphic
  use: forms on top of photographic/video backgrounds
  style: glass product UI

- ref: yk:ref/0072
  kind: pattern
  name: node-canvas-ai-assistant-composite
  what: a node-based AI-agent workspace composited into a samurai photo, chat bubbles and file
       tiles connected by dotted lines like a flowchart
  build: warm dark-to-orange gradient canvas, floating cards (chat bubble, image stack, task card,
        file tiles) connected with thin dashed lines and small circular avatar nodes
  zone: graphic
  use: agentic/workflow-automation product marketing
  style: soft product UI

- ref: yk:ref/0072
  kind: object
  name: connected-task-card
  what: card describing an AI agent's role, with an avatar, title, description paragraph and one
       highlighted action pill
  build: rounded dark card, small circular avatar top-left, bold title, 3-line muted description,
        orange pill button bottom-left
  zone: graphic
  use: agent/persona cards in AI-product UIs
  style: soft product UI

- ref: yk:ref/0072
  kind: object
  name: file-icon-tile-row
  what: row of square file-type icons (pdf, app, image) each with a name and size/count caption
  build: colour-coded rounded-square icons (red for pdf, black for app, warm for image), caption
        stacked beneath each tile in two lines
  zone: graphic
  use: attachment/document previews in chat or task UIs
  style: soft product UI

- ref: yk:ref/0072
  kind: chart
  name: paired-stat-mini-cards
  what: two small square tiles side by side, each pairing a label, an avatar, and a compact
       sparkline/bar-strip
  build: equal small square cards, label top ("Knowledge"/"Efficiency"), avatar + mini bar-chart
        strip beneath, both tiles share identical structure for easy comparison
  zone: graphic
  use: compact paired KPIs on a dashboard sidebar
  style: soft product UI

- ref: yk:ref/0072
  kind: object
  name: bottom-canvas-toolbar
  what: floating pill toolbar at the bottom of a canvas with selection/shape/connector/add tools
  build: rounded-rect dark pill, 5 icon buttons evenly spaced, last one filled black as the
        "primary/add" action, sits centred at the canvas bottom edge
  zone: graphic
  use: whiteboard/canvas editing tools
  style: soft product UI

- ref: yk:ref/0073
  kind: object
  name: alignment-icon-toolbar
  what: three grouped clusters of icon buttons for horizontal align, vertical align, and text align,
       each cluster in its own rounded pill
  build: 3 icons per pill, generous internal padding, pills separated by visible gaps rather than
        one continuous bar, flat grey icons on white
  zone: graphic
  use: design-tool property panels (align/distribute controls)
  style: soft product UI

- ref: yk:ref/0073
  kind: object
  name: xy-coordinate-input-pair
  what: two side-by-side numeric inputs labelled X and Y
  build: single-letter muted label prefix inside the field, bold numeral value, light-grey filled
        input background, no border
  zone: graphic
  use: precise position controls in design/layout tools
  style: soft product UI

- ref: yk:ref/0073
  kind: object
  name: labelled-dropdown-row
  what: input-styled row that is actually a dropdown, showing an icon, current value and a chevron
  build: icon-label pairing on the left (e.g. horizontal-align glyph), value text, chevron-down at
        the right edge, same visual weight as a text input
  zone: graphic
  use: compact select controls inside property panels
  style: soft product UI

- ref: yk:ref/0074
  kind: material
  name: repeating-capsule-slot-illustration
  what: a row of identical rounded-capsule "slots" rendered in outline, one capsule filled solid
       grey as the active/selected one, on a diagonal dashed guide line
  build: pure line-art capsules with concentric offset outlines inside (like ribbing), one solid
        fill breaks the pattern, thin dotted diagonal line runs through the whole row implying
        motion/conveyor direction
  zone: graphic
  use: abstract tech/hardware backgrounds, "slot/queue" metaphors
  style: HUD technical

- ref: yk:ref/0075
  kind: pattern
  name: dark-acid-yellow-product-site
  what: full product landing page for a sapphire-glass brand: sticky status bar, giant background
       wordmark, glowing lens diagram section, then a numbered accordion nav
  build: pure black ground with one acid-yellow accent (#e4ff5c-ish) used sparingly for links,
        highlights and glow; huge outline wordmark bleeds behind foreground content as texture
  zone: graphic
  use: bold single-accent-colour tech/brand sites
  style: HUD technical

- ref: yk:ref/0075
  kind: object
  name: sticky-eta-status-bar
  what: top utility bar showing an order/shipment's live progress with an icon, percentage and
       inline progress track
  build: small icon + "60% closer to destination" label, thin horizontal progress track beside it,
        sits above the main nav row
  zone: graphic
  use: order tracking, delivery status headers
  style: HUD technical

- ref: yk:ref/0075
  kind: copy
  name: inline-stat-highlight-chip
  what: a numeric stat embedded mid-sentence in body copy, wrapped in a small pill to make it pop
       ("endures 39k+ with highly durable...")
  build: pill-shaped background behind just the numeral within a running sentence, same font size
        as surrounding text but colour-inverted
  zone: graphic
  use: making a stat readable without breaking the sentence into a separate stat block
  style: HUD technical

- ref: yk:ref/0075
  kind: object
  name: numbered-accordion-nav-list
  what: full-width stacked list of section rows, each with a big "//N" index, a title, and a small
       caption on the right, current row expanded taller with a graphic fill
  build: rows separated by hairlines, index number in accent colour, inactive rows plain text only,
        the active row gains a background image/gradient fill and larger type
  zone: graphic
  use: long-scroll section navigators, "process step" listings
  style: HUD technical

- ref: yk:ref/0076
  kind: object
  name: glass-context-menu
  what: floating dark translucent context menu with icon, label, and two-key shortcut chips per row,
       one row highlighted as hovered
  build: rounded-rect glass panel with a pointer/tail triangle at the bottom connecting it to its
        trigger, rows evenly spaced, shortcut shown as two separate keycap chips (⌘ + letter)
  zone: graphic
  use: right-click menus, command palettes
  style: glass product UI

- ref: yk:ref/0076
  kind: object
  name: keycap-shortcut-chip-pair
  what: two small square chips shown side by side to represent a keyboard shortcut
  build: rounded-square chips (~24px), single glyph/letter centred, subtle inner highlight top edge
       to read as a physical key
  zone: graphic
  use: annotating keyboard shortcuts next to menu items
  style: glass product UI

- ref: yk:ref/0076
  kind: object
  name: hover-row-highlight
  what: one menu row visually distinguished with a lighter fill and thin border to indicate hover/
       focus state
  build: same row geometry as siblings but background lightened ~15%, hairline border added,
        no change in text weight
  zone: graphic
  use: showing interactive state in menu/list mockups
  style: glass product UI

- ref: yk:ref/0077
  kind: pattern
  name: green-palette-swatch-sheet
  what: same Noguchi swatch-sheet system, green/olive family with a near-white swatch included
  build: identical structure to 0057/0068/0105; hexes #eae9e0/#063104/#77a160/#618669
  zone: graphic
  use: palette documentation for natural/organic brand systems
  style: palette card

- ref: yk:ref/0078
  kind: pattern
  name: anime-botanical-visual-novel-landing
  what: illustrated visual-novel style landing page: framed character illustration with layered
       kanji/English title, leaf ornaments in the corners, sidebar nav and pill section tab
  build: warm parchment ground (#e9e4d8), illustration in a soft-rounded frame with drop shadow,
       oversized translucent kanji watermark behind the frame, small pill tab top-left ("Home")
  zone: graphic
  use: game/visual-novel landing pages, narrative-driven sites
  style: paper/washi

- ref: yk:ref/0078
  kind: type
  name: vertical-mixed-script-caption
  what: a caption running vertically (kanji + a rotated English word) placed beside the framed
       illustration
  build: vertical writing-mode CJK text, small italic Latin word overlapping it at an angle,
       positioned outside the illustration frame in the margin
  zone: graphic
  use: bilingual editorial accents, Japanese-inspired margin notes
  style: paper/washi

- ref: yk:ref/0078
  kind: material
  name: leaf-branch-corner-ornament
  what: illustrated leafy branch decorating the top-right and bottom-left corners of the frame
  build: hand-painted botanical illustration in muted greens, bleeds off the frame edge, breaks the
        rectangle silhouette
  zone: graphic
  use: softening rigid frames in warm/illustrated layouts
  style: paper/washi

- ref: yk:ref/0079
  kind: material
  name: bioluminescent-glow-creature-render
  what: photoreal glowing jellyfish rendered on pure black, teal-cyan rim light
  build: soft volumetric glow along tentacle edges, black background, no ground plane — creature
        floats in void
  zone: graphic
  use: mysterious/data/ocean-themed hero imagery
  style: HUD technical

- ref: yk:ref/0079
  kind: chart
  name: numeric-glyph-data-cluster
  what: a loose cluster of coloured digits/glyphs of varying size forming a scatter "data cloud",
       connected to the subject by thin dashed lines
  build: digits in cyan/green/white at random sizes and slight rotation, denser toward one corner,
       thin white dashed leader-lines connect the cluster to the creature like a scan beam
  zone: graphic
  use: "AI is analysing this" visual metaphor, data-overlay compositions
  style: HUD technical

- ref: yk:ref/0080
  kind: pattern
  name: named-color-hero-card
  what: palette presentation built as a hero poster: bold headline naming the palette, then three
       full-width rounded bars each pairing a colour name and hex, over a glowing colour-bleed photo
  build: black ground, condensed bold display headline top, colour bars stacked with soft drop
        shadow, glowing red/pink photographic smear bleeding from behind the bars
  zone: graphic
  use: single-palette pitch/announcement graphics for social posting
  style: palette card

- ref: yk:ref/0080
  kind: object
  name: name-plus-hex-bar
  what: full-width rounded bar pairing a bold colour name (left) with its hex code (right, muted)
  build: solid-fill bar in the named colour, name in contrasting bold text left-aligned, hex in
        smaller muted text right-aligned, ~70px tall
  zone: graphic
  use: naming palette colours for a non-technical audience
  style: palette card

- ref: yk:ref/0080
  kind: object
  name: outline-pill-tag-row
  what: row of empty (outline-only) pill tags naming use cases/audiences
  build: 1px border pills, no fill, muted text, evenly spaced in a single row under the main content
  zone: graphic
  use: tagging suggested use-cases for a colour or template
  style: palette card

- ref: yk:ref/0081
  kind: object
  name: tick-mark-percentage-dial
  what: circular dial made of radial tick marks with a bold percentage and caption at the centre
  build: ~40 short ticks around the circle rim, no numbers, large centred numeral + "%", small
        caption beneath ("Extraction")
  zone: graphic
  use: single-metric radial readouts (brew strength, charge, progress)
  style: soft product UI

- ref: yk:ref/0081
  kind: chart
  name: axis-labelled-blob-diagnostic
  what: an irregular blob shape plotted against four opposing axis labels (weak/strong,
       underdeveloped/bitter) with a draggable dot marking the current reading
  build: organic gradient blob shape, four text labels placed at the compass points around it, one
        filled white dot on the blob surface as the current-value marker
  zone: graphic
  use: qualitative 2-axis readouts where a simple number isn't enough (taste, mood, balance)
  style: soft product UI

- ref: yk:ref/0081
  kind: object
  name: rounded-bottom-sheet-title-card
  what: cream rounded-top card anchored to the bottom of a dark screen, holding a bold title and
       muted subtitle
  build: light card overlapping the dark background by ~20%, 16px title bold, 13px muted subtitle
        directly beneath, generous top padding before the card's content
  zone: graphic
  use: persistent bottom info panels in dark mobile UIs
  style: soft product UI

- ref: yk:ref/0081
  kind: object
  name: split-primary-secondary-button-row
  what: two unequal buttons side by side — a small dark stepper/quantity chip and a larger primary
       action button
  build: small pill (icon/qty, ~30% width) beside a larger solid dark pill (~70% width, bold label),
        both same height, small gap between
  zone: graphic
  use: quantity + confirm pairings (brew, add-to-cart, order)
  style: soft product UI

- ref: yk:ref/0082
  kind: material
  name: volumetric-holo-cube-projection
  what: a wireframe cube containing a glowing particle/point-cloud pyramid, rendered as a light
       projection in dark space with visible light beams
  build: thin white wireframe cube edges, warm-to-cool gradient particle mass inside forming a
        pyramid, vertical light shafts extending above/below, reflective floor grid beneath
  zone: graphic
  use: festive/tech hybrid hero imagery, product-reveal holograms
  style: generative mono

- ref: yk:ref/0082
  kind: object
  name: leader-line-annotation-label
  what: small caption connected to a point in the 3D scene by a thin horizontal leader line
  build: short line extending from a scene element to a text label sitting in empty space, label in
        small tracked caps, mirrored on both sides of the composition
  zone: graphic
  use: annotating parts of a technical or generative render
  style: generative mono

- ref: yk:ref/0083
  kind: effect
  name: particle-text-sphere-formation
  what: a sphere silhouette built entirely from scattered numeric glyphs, denser at the centre and
       dissolving into loose digits at the edges (animated in source)
  build: numerals sized/rotated randomly, high density inside the sphere boundary, sparse scattered
       digits outside it fading in size/opacity toward the edge
  zone: graphic
  use: data/AI-themed loaders, generative brand marks
  style: generative mono

- ref: yk:ref/0083
  kind: motion
  name: additive-glow-assembly
  what: implied assembly motion where scattered particles appear to condense into a solid glowing
       form (read from the still frame's density gradient)
  build: brightness and density increase toward the centre, suggesting elements are converging/
        assembling rather than static
  zone: graphic
  use: loading/onboarding sequences, "your data becomes something" metaphors
  style: generative mono

- ref: yk:ref/0084
  kind: object
  name: glass-dropdown-menu-list
  what: translucent dark dropdown/account menu over a photo background, icon+label rows, a divider
       separating primary nav from settings, and a footer action row
  build: frosted dark panel, icon (20px) + label per row, one row (Active stream) has a full pill
        highlight with border to show selection, thin 1px divider before the settings group
  zone: graphic
  use: account/profile dropdown menus, app hamburger menus
  style: glass product UI

- ref: yk:ref/0084
  kind: object
  name: inline-list-row-toggle
  what: a toggle switch embedded at the end of a menu row (Dark mode) rather than in a settings page
  build: standard pill toggle, orange when on, sits flush right in the row, same row height as
        plain nav rows
  zone: graphic
  use: quick-access settings inside a navigation menu
  style: glass product UI

- ref: yk:ref/0084
  kind: object
  name: menu-footer-action-row
  what: bottom row of a menu splitting a plain text link (left) from a solid button (right)
  build: "Feedback" as plain muted text, "Log out" as a filled rounded button, separated by a
       divider from the menu items above
  zone: graphic
  use: closing out a menu with a low-priority link plus a committed action
  style: glass product UI

- ref: yk:ref/0085
  kind: pattern
  name: stacked-card-peek-carousel
  what: two nearly-identical cards offset behind each other (peek carousel) showing a zodiac/almanac
       entry, front card summary, back card full detail
  build: warm cream cards with soft shadow, back card offset up-right by ~20px and partially hidden,
        both share the same header/footer chrome
  zone: graphic
  use: swipeable detail cards, "flip for more" content patterns
  style: lo-fi warm

- ref: yk:ref/0085
  kind: object
  name: ideogram-hero-glyph-caption
  what: a single large CJK character paired with a small romanised caption and a soft circular
       illustration accent (sun/moon motif)
  build: character rendered ~48px serif, romanised gloss in tiny italic beside it, warm gradient
       circle sitting behind/beside as an ambient accent
  zone: graphic
  use: almanac, dictionary, or single-concept feature cards
  style: lo-fi warm

- ref: yk:ref/0085
  kind: object
  name: glyph-tab-row-with-active-ring
  what: horizontal row of single-character tabs, the active one circled with a ring instead of a
       filled background
  build: plain characters evenly spaced, active one gets a thin circular outline around it plus a
        small coloured dot caption beneath, inactive ones are just muted text
  zone: graphic
  use: date/step selectors using symbols instead of numbers
  style: lo-fi warm

- ref: yk:ref/0086
  kind: pattern
  name: technical-dieline-spec-sheet
  what: full packaging spec document: exploded 3D box render with callouts, a flat dieline pattern,
       a dimensioned box diagram, and a spec table, all in orange monoline on black
  build: consistent 1px orange stroke weight throughout, header/footer meta bar repeating project/
        version/date/units, thin leader lines from render to text callouts
  zone: graphic
  use: packaging/manufacturing technical documentation
  style: blueprint technical

- ref: yk:ref/0086
  kind: object
  name: callout-leader-line-label
  what: a bold label connected to a specific point on a technical drawing via a thin straight line
  build: small dot at the origin point, single straight line to a text label positioned in clear
       space, label kept horizontal regardless of line angle
  zone: graphic
  use: annotating diagrams, exploded views, technical illustrations
  style: blueprint technical

- ref: yk:ref/0086
  kind: object
  name: dimension-arrow-with-value
  what: a double-headed arrow spanning an edge with the measurement value centred on it
  build: thin line with small arrowheads at both ends, value in mm sits directly on the line with a
        gap in the line to fit the text, orthogonal to the edge being measured
  zone: graphic
  use: engineering/product dimension callouts
  style: blueprint technical

- ref: yk:ref/0086
  kind: object
  name: meta-header-footer-bar
  what: repeating top and bottom strip listing document metadata (project id, version, date, units)
       in a 4-column row
  build: thin rule separating it from content, tiny caps labels over bold values, identical content
        repeated at header and footer for print-page consistency
  zone: graphic
  use: technical/spec documents, print-ready sheets
  style: blueprint technical

- ref: yk:ref/0087
  kind: pattern
  name: node-editor-empty-state
  what: infinite dot-grid canvas with one empty floating node card and instructional caption text,
       used as an empty/onboarding state for a node-based tool
  build: dark canvas with faint white dot grid, one card with visible corner connector handles
       (small circles/squares), instructional text pinned bottom-left
  zone: graphic
  use: canvas/whiteboard tool empty states, onboarding hints
  style: HUD technical

- ref: yk:ref/0087
  kind: object
  name: connector-handle-node-card
  what: a plain card whose corners carry small distinct handle shapes (circle top-right, square
       bottom-right) implying drag-to-connect and resize affordances
  build: minimal unstyled card (just a fill + radius), handles rendered as tiny separate shapes
       sitting exactly on the corner points
  zone: graphic
  use: node-based editors, flowchart tools
  style: HUD technical

- ref: yk:ref/0088
  kind: object
  name: glass-editor-card-with-header-action
  what: a two-part glass card — header bar with a bold title and a circular edit-icon button, body
       with editable text and a cursor
  build: dark glass with warm rim-light, header separated by subtle contrast, body text shows an
        active text cursor (|) to imply live editing, small timestamp+dot row above the body
  zone: graphic
  use: AI text-generation/editing overlays, inline content editors
  style: glass product UI

- ref: yk:ref/0088
  kind: object
  name: confirm-cancel-icon-pair
  what: two circular icon buttons (check / cross) placed together at the bottom-right of a content
       block
  build: equal-size circles, muted fill, simple check and X glyphs, positioned as a pair with a
        small gap, no labels
  zone: graphic
  use: accept/reject micro-decisions inline (AI suggestions, inline edits)
  style: glass product UI

- ref: yk:ref/0089
  kind: pattern
  name: arch-frame-moodboard-set
  what: set of four differently-shaped cards (arch, dome, blob, rect) forming a moodboard grid, each
       combining photography, small icon accents and short text
  build: mixed silhouette cards on a black canvas, consistent corner-tick and dot micro-icon
       language across all cards despite differing shapes
  zone: graphic
  use: brand/mood presentation decks, Instagram carousel sets
  style: poster collage (foxrocket family)

- ref: yk:ref/0089
  kind: object
  name: corner-tick-photo-frame
  what: small L-shaped corner ticks placed at two opposite corners of a photo to suggest a
       viewfinder/crop frame
  build: two thin ticks (not four) at diagonal corners, ~10px legs, white on dark or dark on light
        depending on photo tone
  zone: graphic
  use: signalling "this is a captured/selected frame" over photography
  style: poster collage (foxrocket family)

- ref: yk:ref/0089
  kind: object
  name: rotated-vertical-index-label
  what: a small numeral or word rotated 90° and pinned to a card edge, acting as a spine/index label
  build: single word or number, rotated counter-clockwise, positioned flush to the card's edge like
        a book spine
  zone: graphic
  use: indexing cards/pages in a set, adding an editorial-catalogue feel
  style: poster collage (foxrocket family)

- ref: yk:ref/0089
  kind: copy
  name: lyric-fragment-caption
  what: 3-4 short lines of lyric/poetic text set in small caps, left-aligned inside a graphic card
  build: 10px tracked caps, tight leading, no punctuation styling beyond the words themselves,
        positioned as a quiet secondary element beside a bolder graphic motif
  zone: graphic
  use: mood-setting caption text in music/poster-style graphics
  style: poster collage (foxrocket family)

- ref: yk:ref/0090
  kind: pattern
  name: cjk-grid-ruled-book-cover
  what: dark book-cover layout combining a fine background grid, large serif CJK headline, and a
       vertical tracked Latin caption column
  build: warm dark-brown ground (#2b211c-ish), faint grid ruling behind all type, oversized CJK
        serif headline left, vertical English caption column right, thin rule separating a
        sub-headline block
  zone: graphic
  use: editorial/book-cover treatments mixing CJK and Latin type
  style: swiss editorial

- ref: yk:ref/0090
  kind: type
  name: vertical-tracked-caption-column
  what: a narrow column of English text running top-to-bottom in normal (non-rotated) orientation,
       heavily letter/word spaced to fill the column height
  build: each word on its own line, generous vertical gaps, small caps or title case, right-aligned
       to form a clean edge against the headline
  zone: graphic
  use: pairing a CJK headline with a Latin gloss without rotating text
  style: swiss editorial

- ref: yk:ref/0090
  kind: copy
  name: numbered-edition-footer
  what: small caption in the corner citing a catalogue/edition number and a designer credit
  build: tiny type, muted colour, format "no.{code} {title} by {author}" style, sits isolated near
        one corner
  zone: graphic
  use: crediting/cataloguing print or poster series
  style: swiss editorial

- ref: yk:ref/0091
  kind: material
  name: cell-membrane-organic-render
  what: a photographic/render of an organic cell-like membrane structure with red vein-like
       filaments radiating from a dark nucleus point
  build: high-contrast black/white/red palette, glossy wet-looking membrane surface, red filaments
        thin and branching like capillaries converging on one dark red core
  zone: graphic
  use: biotech, "organic AI", synthetic-biology themed hero imagery
  style: HUD technical

- ref: yk:ref/0091
  kind: object
  name: spec-plate-badge
  what: a small rectangular "equipment nameplate" overlay with icons, a CE-style mark, a QR code
       and colour swatch chips, mimicking a hardware compliance label
  build: thin-bordered rectangle, small pictogram icons in a row, bold product-name lettering, tiny
        colour swatch row and QR code bottom-corner, warning triangle icon included
  zone: graphic
  use: giving an organic/abstract image a manufactured, "productised" read
  style: HUD technical

- ref: yk:ref/0091
  kind: effect
  name: scattered-monospace-noise-field
  what: loose field of small monospace characters and glyphs scattered across dark areas of the
       image at low opacity
  build: random single characters at low size and opacity, irregular placement avoiding the main
        subject, denser near the edges than the centre
  zone: graphic
  use: adding a "data/code" texture over photographic or organic imagery
  style: HUD technical

- ref: yk:ref/0092
  kind: pattern
  name: radial-flow-diagram-hero
  what: SaaS hero built around a central icon mark with four lines radiating out to labelled
       endpoint tags (Customer/Code/Bug/Ticket), headline split left/right of the diagram
  build: thin curved connector lines from a central rounded-square icon to small pill tags at each
        corner, small dot markers along each line, bold two-word headline flanking the diagram
  zone: graphic
  use: "how it works" / integration-overview hero sections
  style: swiss editorial

- ref: yk:ref/0092
  kind: object
  name: logo-quote-stat-strip
  what: horizontal strip mixing a customer logo, a pull-quote, and a big custom-digit stat, each in
       its own column, framed by hairline dividers
  build: three unequal columns separated by 1px vertical rules, each anchored by a distinct content
        type (logo / quote+attribution / big stat+caption)
  zone: graphic
  use: social-proof bands on marketing pages
  style: swiss editorial

- ref: yk:ref/0092
  kind: type
  name: custom-digit-stat-display
  what: large stat numeral set in a blocky dot-matrix/LCD-style custom digit font, distinct from the
       body typeface
  build: numerals built from short rectangular dashes rather than the standard font glyphs, used
        only for the hero statistic, paired with a plain-sans caption beneath
  zone: graphic
  use: making a single KPI feel engineered/technical rather than typed
  style: swiss editorial

- ref: yk:ref/0093
  kind: material
  name: duotone-halftone-magazine-cover
  what: full-bleed cherry-blossom photo converted to a red/white halftone duotone, used as a
       magazine-style cover
  build: single-hue halftone dot conversion (red on red ground), photo desaturated then remapped to
        the duotone, high dot visibility at low-tone areas
  zone: graphic
  use: bold single-colour magazine/poster covers
  style: print halftone

- ref: yk:ref/0093
  kind: type
  name: condensed-masthead-with-script-overlay
  what: a bold condensed all-caps masthead word with a smaller cursive/italic word overlapping it at
       the baseline
  build: heavy slab/condensed caps as the base word, thin italic script repeating (part of) the same
        word smaller and offset, both in the same ink colour
  zone: graphic
  use: magazine mastheads mixing two type registers for one word
  style: print halftone

- ref: yk:ref/0093
  kind: object
  name: crop-mark-detail-frame
  what: two small square outline frames placed over specific details of the hero photo, mimicking
       print crop/registration marks
  build: thin white square outlines, no tick extensions, placed asymmetrically over interesting
        photo details rather than the whole image
  zone: graphic
  use: directing attention within a busy photo, print-production visual language
  style: print halftone

- ref: yk:ref/0093
  kind: object
  name: cover-barcode-graphic
  what: a plain vertical barcode graphic placed in the lower corner as a magazine-cover convention
  build: standard barcode bar pattern, no visible numerals required, small and unobtrusive, signals
        "this is a physical print product"
  zone: graphic
  use: reinforcing a print/magazine metaphor on a digital poster
  style: print halftone

- ref: yk:ref/0094
  kind: material
  name: deep-extrusion-3d-type
  what: display word rendered as thick soft-shadowed 3D extruded lettering, cropped tight so letters
       bleed off the frame
  build: uniform light-grey material, soft ambient occlusion between letterforms, extrusion depth
       consistent across all letters, soft single-direction shadow cast onto a grid-paper ground
  zone: graphic
  use: bold single-word hero type treatments, product/typography showcases
  style: 3D render / extrusion

- ref: yk:ref/0094
  kind: object
  name: technical-hud-id-overlay
  what: small HUD-style data readout (ID code, numeric fields) placed in a corner of an otherwise
       purely typographic composition
  build: tiny monospace-leaning labels and numbers, thin hairline separators, positioned top-left
        away from the main type, low-contrast so it reads as texture not content
  zone: graphic
  use: adding a technical/engineered feel to type-driven compositions
  style: 3D render / extrusion

- ref: yk:ref/0094
  kind: material
  name: grid-graph-paper-ground
  what: fine light-grey grid covering the entire background, giving a graph-paper/blueprint base
  build: uniform thin grid lines at even spacing, low contrast against the background so it reads
        as texture rather than a functional grid
  zone: graphic
  use: grounding 3D or technical compositions in a "measured" surface
  style: 3D render / extrusion

- ref: yk:ref/0095
  kind: layout
  name: quadrant-carousel-collage
  what: four-panel grid (2x2) inside one rounded outer frame, each quadrant a distinct card type
       (photo, index/logo, photo, wordmark-tagline), used as one carousel slide
  build: quadrants separated by a thin black gutter, outer frame heavily rounded on select corners
       only (not uniform radius), small dot pagination row beneath the whole frame
  zone: graphic
  use: Instagram-carousel-style multi-content slides
  style: poster collage (foxrocket family)

- ref: yk:ref/0095
  kind: object
  name: arch-crop-photo-panel
  what: a photo cropped into an arch/dome shape as one quadrant of a collage
  build: photo masked to a semicircle-topped rectangle, corner micro-icons (small squares) placed
        at the visible rectangular corners for framing consistency
  zone: graphic
  use: varying silhouette within an otherwise rectangular grid
  style: poster collage (foxrocket family)

- ref: yk:ref/0095
  kind: object
  name: wordmark-tagline-card
  what: a quadrant containing only a pill-shaped italic wordmark and a small tracked caption beneath
       it, no imagery
  build: light ground, italic serif wordmark inside a thin-outline pill, small caps caption
       centred below, generous negative space
  zone: graphic
  use: brand statement slides inside a photo-led carousel
  style: poster collage (foxrocket family)

- ref: yk:ref/0096
  kind: pattern
  name: radial-gradient-glow-hero
  what: dark "About" page hero with a warm orange radial gradient mesh glow behind a large serif
       word, followed by a two-column service list
  build: near-black ground, soft orange-to-transparent radial gradient positioned off-centre top,
        large serif display word sits partly inside the glow, small paragraph beneath in muted grey
  zone: graphic
  use: studio/agency about pages, warm single-colour brand moments
  style: soft relief

- ref: yk:ref/0096
  kind: object
  name: category-header-list-pair
  what: two-column list where each column has a bold category header (Development/Design) and
       plain-text items beneath
  build: category header bold ~14px, items 12px muted, no bullets or icons, generous line-height,
        columns aligned to a shared baseline grid
  zone: graphic
  use: services/capabilities lists on about or landing pages
  style: soft relief

- ref: yk:ref/0096
  kind: object
  name: glowing-circular-cta
  what: a circular button sitting inside its own soft radial glow, label centred, used as a closing
       call-to-action
  build: small solid circle (~90px) with a much larger soft blurred glow of the same hue behind it,
        one-line label centred, no icon
  zone: graphic
  use: single high-impact closing CTA on a page
  style: soft relief

- ref: yk:ref/0097
  kind: layout
  name: split-brand-form-login
  what: login screen split into an empty branded dark panel (logo + geometric mark) and a form panel
       with underline-style inputs
  build: 40/60 split, left panel almost entirely empty except logo top-left and a radial compass
       mark centred, faint diagonal line texture filling the emptiness, right panel plain dark
       with bottom-border-only inputs
  zone: graphic
  use: premium/minimal auth screens for finance or luxury brands
  style: brutalist mono

- ref: yk:ref/0097
  kind: object
  name: radial-compass-logomark
  what: an eight-point star/compass mark built from simple radiating line segments
  build: 8 straight lines of alternating length radiating from a centre point, pure white on black,
        no fill, reads as a brand mark or watermark
  zone: graphic
  use: minimal geometric brand marks, empty-state decoration
  style: brutalist mono

- ref: yk:ref/0097
  kind: object
  name: underline-only-input-field
  what: form input with no box at all — just a label, value text, and a bottom border line
  build: small muted label above, larger value text below it, thin 1px line under the value only
       (no full border), icon (eye/toggle) inline at the right edge for password fields
  zone: graphic
  use: ultra-minimal, luxury-leaning forms
  style: brutalist mono

- ref: yk:ref/0098
  kind: object
  name: neumorphic-raised-circle
  what: a soft convex circle rendered purely with dual drop shadows (light + dark) on a matching-
       tone background, no border or fill contrast
  build: background and shape same base colour (#f0f0f3), one light shadow (white, offset -10/-10)
       and one dark shadow (grey, offset 10/10) create the raised illusion; a third variant adds
       an inner shadow pair for a pressed/concave look
  zone: graphic
  use: soft-UI buttons, toggles, dials in low-contrast light themes
  style: neumorphism

- ref: yk:ref/0098
  kind: copy
  name: shadow-spec-caption-block
  what: plain text block documenting exact shadow values (offset/blur/colour/opacity) beneath each
       example shape
  build: bold sub-label ("Drop Shadow"/"Inner Shadow") then monospace-ish value lines, repeated per
       variant for direct comparison
  zone: graphic
  use: design-system documentation for elevation/shadow tokens
  style: neumorphism

- ref: yk:ref/0099
  kind: effect
  name: directional-line-field-cube
  what: a cube-shaped volume built from thousands of short directional line strokes following a
       swirling vector-field pattern (source is animated)
  build: strokes vary in length/thickness following implied flow lines, denser swirl at one corner,
        sparse loose dot particles trailing off one edge, pure black background
  zone: graphic
  use: generative-art loaders, particle-field brand marks
  style: generative mono

- ref: yk:ref/0100
  kind: object
  name: glass-job-listing-card
  what: floating frosted card over a photo background summarising a job post: brand icon + saved
       chip header, title, tag pills, price/location row, CTA button
  build: dark glass card, small circular brand-logo chip top-left, bookmark pill top-right, bold
        job-title line, two outline tag pills (Full-Time/Flexible), price range + location row,
        solid CTA button bottom-right
  zone: graphic
  use: job/listing/product cards over lifestyle photography
  style: glass product UI

- ref: yk:ref/0100
  kind: object
  name: saved-bookmark-chip
  what: small pill combining a status word and a bookmark icon, used as a toggle-like badge
  build: rounded pill, label + icon inline, low-opacity dark fill distinct from the main card glass
  zone: graphic
  use: save/favourite indicators on cards
  style: glass product UI

- ref: yk:ref/0101
  kind: layout
  name: split-flat-color-panel-bg
  what: background split into two flat colour panels (blush pink / sage) meeting at a hard vertical
       edge, with a portrait illustration overlapping the seam
  build: no gradient at the seam — a hard edge, illustration bleeds across both panels to unify them,
        text confined to the pink panel only
  zone: graphic
  use: anime/illustration promo graphics needing a simple two-tone stage
  style: anime illustrated

- ref: yk:ref/0101
  kind: type
  name: eyebrow-plus-oversized-wordmark-plus-script
  what: three-tier type stack: small tracked eyebrow word, huge bold display word beneath, then a
       thin cursive tagline overlapping the display word's baseline
  build: eyebrow ~11px tracked caps, display word ~60px condensed serif/sans, script tagline in a
       thin italic overlapping the display word directly, dark green ink on the pink panel
  zone: graphic
  use: promo/key-visual titling for entertainment or fashion content
  style: anime illustrated

- ref: yk:ref/0101
  kind: effect
  name: light-fracture-prism-overlay
  what: subtle diagonal light-streak/prism refraction effect crossing the illustrated portrait
  build: soft white diagonal bands of varying width and opacity, concentrated over the face/hair
        area, additive-blend feel rather than a hard mask
  zone: graphic
  use: adding a dreamy/glossy accent to illustrated character art
  style: anime illustrated

- ref: yk:ref/0102
  kind: pattern
  name: particle-ring-memorial-hero
  what: full-page dark hero: torus of glowing particles centred, small percentage badge top-right,
       two labelled icon-buttons beneath (add memory / view memories), warm ember-flecked horizon
  build: near-black ground fading to a warm dotted terrain texture at the bottom, particle ring
       rendered as a soft-edged donut of white dots, circular badge floats independently top-right
  zone: graphic
  use: memorial/tribute sites, emotionally-weighted single-purpose landing pages
  style: lo-fi warm

- ref: yk:ref/0102
  kind: object
  name: circular-percentage-badge
  what: a standalone circular badge with a bold percentage and a small caption curving beneath it,
       floating independent of the main layout grid
  build: thin circular outline, big numeral+percent centred, tiny caps caption below within the
        same circle, positioned at an odd offset (top-right) rather than aligned to content
  zone: graphic
  use: standalone stat badges, "progress toward a goal" indicators
  style: lo-fi warm

- ref: yk:ref/0102
  kind: object
  name: icon-plus-italic-label-button
  what: a minimal button pairing a small circular icon (plus/eye) with an italicised word in the
       label, rest of the label upright
  build: icon in its own thin-outline circle, label mixes upright ("tell a") and italic ("memory")
       within one line, no button background — just icon + text
  zone: graphic
  use: quiet, editorial-feeling primary actions instead of solid buttons
  style: lo-fi warm

- ref: yk:ref/0102
  kind: type
  name: dotted-underline-logotype
  what: wordmark where one letter is underlined with a dotted rule instead of styled differently
  build: serif/slab wordmark, a single dotted-line rule beneath part of the word (mimicking a
       strikethrough/redaction or emphasis mark), rest of the word plain
  zone: graphic
  use: giving a plain wordmark a handwritten/annotated feel
  style: lo-fi warm

- ref: yk:ref/0103
  kind: type
  name: dot-matrix-led-headline
  what: page heading rendered in a dot-matrix/seven-segment-like display font instead of the body
       sans
  build: each letterform built from a grid of small square dots, consistent dot size/gap, used only
        for the single-word heading, body copy stays in a plain geometric sans
  zone: graphic
  use: audio/hardware app headings wanting a retro-digital display feel
  style: HUD technical

- ref: yk:ref/0103
  kind: object
  name: tri-axis-radial-fader
  what: three linked handles on radiating spokes from a shared centre hub, each handle adjustable
       along its own spoke to set one of three linked values (bass/mid/treble)
  build: central circular hub, three spokes at 120° with a small dot stop near each end, a filled
        circular handle sits at the current position on each spoke, outer thin circle marks travel
        limits
  zone: graphic
  use: 3-way balance/EQ controls, any tri-axis blend setting
  style: HUD technical

- ref: yk:ref/0103
  kind: object
  name: axis-value-label
  what: small caption naming an axis and its current signed value, curved/angled to follow its
       spoke's direction
  build: label text rotated to match the spoke angle, format "NAME +N" or "NAME 0", positioned just
        past the spoke's outer end
  zone: graphic
  use: labelling directions on radial/spoke-based controls
  style: HUD technical

- ref: yk:ref/0103
  kind: object
  name: preset-button-grid
  what: 2x2 grid of equal preset buttons plus one full-width button beneath acting as the custom/
       manual option
  build: light-grey filled pills, tracked caps labels, even 2-column grid with consistent gutter,
        bottom button spans both columns and is styled solid-dark to stand apart as the active mode
  zone: graphic
  use: preset pickers with a manual/custom fallback option
  style: HUD technical

- ref: yk:ref/0104
  kind: pattern
  name: quadrant-floral-collage-set
  what: same 2x2 quadrant collage system as 0095, here themed around dark red floral photography and
       a scalloped seal badge
  build: black gutter grid, one quadrant a scalloped/seal-shaped badge with rotated ring text, one
        quadrant a tall red-toned floral photo, one a solid terracotta card with serif tagline and
        brand mark
  zone: graphic
  use: consistent multi-slide carousel branding across different colour/photo themes
  style: poster collage (foxrocket family)

- ref: yk:ref/0104
  kind: object
  name: rotated-ring-text-seal
  what: a circular scalloped seal shape with text following the curve of an inner ring
  build: scalloped/cog-edged circle outline, smaller plain circle inside offset to one side, text set
       on a circular baseline following the inner circle's curve
  zone: graphic
  use: stamp/seal branding devices, badge-style credential marks
  style: poster collage (foxrocket family)

- ref: yk:ref/0104
  kind: object
  name: tagline-card-with-icon-button
  what: solid-colour card pairing a two-line tagline (mixed weight/style) with a small circular
       brand-glyph button in the corner
  build: solid terracotta fill, tagline mixes upright caps ("DON'T GO THROUGH LIFE") with a large
       italic serif phrase ("grow through life"), small four-dot brand glyph in a circle bottom-right
  zone: graphic
  use: closing/branding slide in a themed carousel set
  style: poster collage (foxrocket family)

- ref: yk:ref/0105
  kind: pattern
  name: red-palette-swatch-sheet
  what: same Noguchi swatch-sheet system, deep red/maroon/near-black family
  build: identical structure to 0057/0068/0077; hexes #730c1e/#210207/#480415/#140f17
  zone: graphic
  use: palette documentation for moody/luxury red brand systems
  style: palette card

## Stylistic registers in this batch

- **soft product UI**: 0053, 0054, 0059, 0065, 0072, 0073, 0081, 0096, 0100
- **swiss editorial**: 0055, 0061, 0062, 0090, 0092
- **HUD technical**: 0056, 0058, 0063, 0074, 0075, 0079, 0087, 0091, 0103
- **palette card**: 0057, 0068, 0077, 0080, 0105
- **glass product UI**: 0054, 0059, 0071, 0076, 0084, 0088, 0100
- **grunge glitch editorial**: 0064
- **brutalist mono**: 0066, 0097
- **print halftone**: 0067, 0093
- **lo-fi warm**: 0069, 0085, 0102
- **generative mono**: 0070, 0082, 0083, 0099
- **paper/washi**: 0078
- **blueprint technical**: 0086
- **3D render / extrusion**: 0094
- **poster collage (foxrocket family)**: 0089, 0095, 0104
- **neumorphism**: 0098
- **anime illustrated**: 0101
