# External web resources for yoshiki — survey (2026-09-20)

Scope: web-hosted galleries, registries and documentation only (a separate pass covers GitHub repos).
Cross-checked against the current catalogue (`workshop/refs/extract/catalogue.json`, 782 components,
265 refs): strong registers already are `blueprint-hud` (165), `soft-product` (107), `glass-product`
(96), `swiss-editorial` (78), `lo-fi-warm` (62), `moodboard-collage` (61), `brutalist-mono` (45),
`print-halftone` (40); weak spots are `motion` (3 items total), `generative-3d` (15), `nier-menu` (11),
and there is no real texture/dither/grain material bank yet. That gap shapes the priorities below.

---

## 1. Component and block galleries

### 21st.dev — https://21st.dev (docs: https://docs.21st.dev)
Community registry of 12,000+ React/Tailwind/shadcn components from many named authors, plus themes,
shaders and gradients (`/community/components`, `/community/themes`). Very current — daily uploads,
blog posts dated Aug 2026. **Code**: real TSX, shadcn-registry format; browsing and preview free,
2 free copies/day, unlimited copy requires membership; components carry individual authors' licences
(mostly permissive but not one blanket licence — check per-component). **Zone**: graphical (React
apps), not transferable to text-surfaces. **Worth extracting**: the `shaders`/`gradients` sub-library
(21st.dev/ai sketch mode ships raw HTML/Tailwind, easiest to lift), AI-chat component patterns, pricing
and bento-grid sections beyond what HyperUI/Preline ship. Because it's a registry-of-registries, treat
it as a discovery index — pull the *design*, redraw in yoshiki's own build convention, don't copy TSX.

### Magic UI — https://magicui.design
150+ free, MIT, React/Tailwind/Motion "design engineer" components: animated beam, border-beam, shine
border, number ticker, marquee, dock, bento grid, globe, particles, retro grid, meteors, ripple button,
animated list, terminal/typing text. Actively maintained (v4 Tailwind migration in 2026). **Worth
extracting**: `animated-beam` (connector lines between nodes — nothing like it in catalogue),
`border-beam`/`shine-border` (rotating gradient border, reads well against blueprint-hud's flat panels),
`number-ticker` and `animated-circular-progress` (chart kind is strong on static gauges, weak on
count-up motion), `dock` (macOS-style magnify-on-hover row), `terminal` component (typed-line CLI
mockup — directly useful for text-zone/graphical crossover demos).

### Aceternity UI — https://ui.aceternity.com
200+ free React/Tailwind/Motion components, dark/premium/neon aesthetic, ~28k GitHub stars, heavy on
3D and WebGL (three.js). Free tier is real components (`/components`), paid tier is templates/blocks.
**Worth extracting**: `background-beams`, `spotlight`, `lens` (zoom-on-hover for images), `3d-card`
(mouse-tracked tilt with layered depth), `wavy-background` (SVG turbulence), `infinite-moving-cards`,
`bento-grid` variant with hover glow, `squiggly-text` (SVG displacement filter). These fill the
`generative-3d` and `effect` gaps directly — catalogue has almost nothing with real cursor-reactive
depth.

### HyperUI — https://hyperui.dev
Free, no-login, plain Tailwind (no JS framework) marketing + application components: navbars, pricing,
tables, forms, e-commerce. Large, unglamorous, very copy-paste-friendly, MIT-style free reuse, updated
regularly. **Worth extracting**: application-density patterns yoshiki is thin on — data table row
states, filter/sort bars, checkout step forms — as "soft-product" register raw material, not for their
visual style (default Tailwind grey) but for interaction anatomy (what states a table row needs).

### Preline — https://preline.co
1,612 components/blocks total, 640+ free components + 220+ free blocks (972 total free), MIT + "Fair
Use" licence explicitly allowing redistribution with attribution — the most permissive of the paid-tier
libraries surveyed. Ships a free Figma kit too. Current (2026 copyright, Tailwind 4). **Worth
extracting**: advanced-select / tagging-select patterns, stepper with segmented progress, timeline
component, KPI-card block set (good raw material for `chart`/`soft-product` crossover), mega-menu.

### Flowbite — https://flowbite.com
600+ open-source Tailwind components (MIT), 400+ block sections, matching Figma file, own icon set
(430+ SVG icons) and a small 3D illustration pack (54 free). Actively maintained, has React/Vue/Svelte/
Angular ports. **Worth extracting**: the icon-and-illustration pairing approach (icons ship matched to
component states) and the admin-dashboard block category, which the catalogue's `soft-product` register
would benefit from (yoshiki icon system per `AGENTS.md` should stay separate, but the *anatomy* of
matched icon+label rows is worth studying).

### Tailwind UI (ui.shadcn.com/blocks + tailwindcss.com/plus) — paid
Tailwind Plus (formerly Tailwind UI) is the highest-craft Tailwind block library but is now a paid
product bundled into Tailwind Plus; shadcn/ui's own `/blocks` page is free and MIT. **Be sceptical**:
Tailwind UI's marketing-page sections are the industry reference for hero/pricing/feature-grid layout
proportion, but nothing is extractable without a paid seat — treat as a benchmark to read (screenshots,
not code) rather than a source.

### Shadcnblocks — https://shadcnblocks.com (free subset: github.com/shadcnblocks/shadcn-ui-blocks)
55 free marketing blocks (MIT-ish, "Other/NOASSERTION" licence on the repo — verify per-file before
reuse), hundreds more paid. Tailwind 4. **Worth extracting**: the free set's admin-dashboard sidebar +
breadcrumb combination and pricing-table variants; mostly redundant with Preline/HyperUI so low
priority unless the paid tier is bought.

### Uiverse.io — https://uiverse.io (mirror: github.com/uiverse-io/galaxy)
The largest single UI-element library: 388,600+ posts on the live site; the "galaxy" GitHub mirror
froze at ~3,500-11,000 elements in Sept 2024 (stopped syncing) — **the live site, not the GitHub
mirror, is current**. Pure CSS or Tailwind, MIT, single-file HTML — closest in spirit to yoshiki's own
preview format. Quality is uneven (community-submitted, moderated for "uniqueness" not taste) but the
loaders/toggles/checkboxes categories are exhaustive. **Worth extracting**: pure-CSS loader variety
(yoshiki's `motion` kind is nearly empty — Uiverse's loaders directory alone has 718 CSS-only
animations to mine for keyframe technique), neumorphic toggle-switches, checkbox micro-interactions.
Curate hard — most individual pieces are throwaway, but the CSS *technique* (e.g. a surveillance-camera
loader using only keyframes) is the actual value.

### CSS-Tricks — https://css-tricks.com/snippets/ — legacy, still useful for technique
No longer actively publishing (site is in archive/maintenance mode under DigitalOcean; most snippets
are 2010s-era, last real update ~2024), but the CSS *technique* articles (flexbox guide, CSS grid
starters, SVG patterns, viewport-based typography) remain the clearest primary-source explanations of
mechanisms other galleries just demo. **Use for technique reference, not visual inspiration** — nothing
here reads as 2026-fresh.

### CodePen collections — general, unranked
No single curated "collections" hub anymore; best used via targeted search on codepen.io for a named
effect. Newer small aggregators worth checking each visit: **CSS Forge** (cssforge.dev/gallery — 250
free presets: glass, clipped shapes, gradient cards), **FWD Tools UI Snippets** (fwdtools.com/ui-
snippets — 920+ HTML/CSS/JS snippets across 15 categories, exports to React+Tailwind, includes magnetic
buttons, OTP inputs, kanban drag-drop, aurora/spotlight backgrounds, scroll-triggered text reveals —
genuinely dense and current), **CodeFronts** (codefronts.com/collections — 133 CSS collections,
extremely granular: 34 FAB variants, 25 play/pause button variants, 30 text-hover-effect variants, each
with WCAG/`prefers-reduced-motion` notes). These are worth mining specifically for **micro-interaction
range** (many named variants of one small object) which yoshiki's `object` category would benefit from.

---

## 2. Pattern and inspiration libraries (product design)

### Mobbin — https://mobbin.com — paid, gate confirmed
1,428+ apps, 621,500+ screens, 142,200+(→200k+) flows, iOS/Android/web-app UI (not marketing sites).
New content weekly. Free tier is token-limited; full search/flows/Figma-copy need Pro (~$10/mo
annual). Has an official MCP (beta, paid plans only). **Worth extracting**: full onboarding/paywall/
settings flow sequences as `pattern` entries — yoshiki's `pattern` kind (121 items) is mostly single
screens; Mobbin is the best source for the *sequence* (what changes between step 1 and step 2 of a
flow), which is currently undocumented in the catalogue. Needs a paid seat to be useful beyond
marketing screenshots.

### Refero — https://refero.design — paid, web/iOS SaaS focus
Vendor-claims 150,000+ screens / 6,000+ flows (unaudited); strongest at SaaS dashboards, settings,
onboarding, web-first products — the category Mobbin covers weakest. Has an official MCP
(api.refero.design/mcp) gated behind Pro. **Worth extracting**: dashboard empty-states, settings-page
row anatomy, in-app paywall/upgrade-prompt patterns — direct fill for `soft-product`/`glass-product`
registers' weakest sub-area (empty states are basically absent from the catalogue).

### Page Flows — https://pageflows.com — paid, video-flow focus
Annotated *video* walkthroughs (not static screenshots) of real product flows across iOS/Android/web/
email; no free tier, no API/MCP. **Worth extracting**: because it's video, it's the best source for
understanding *motion* (transition timing, easing, what enters vs. exits) even though nothing is
literally copyable — watch, then hand-describe the motion into a `motion` catalogue entry. Given the
catalogue's near-empty motion count, this is disproportionately valuable despite the cost/no-API
limitation.

### SaaS Landing Page — https://saaslandingpage.com — free, B2B SaaS marketing sections
960 landing-page examples from SaaS/startups, browsable by section (hero, pricing, testimonial).
Free, current (site refreshed with recent names like Lovable, WorkOS, Dovetail). **Worth extracting**:
2026-era SaaS hero conventions (product screenshot in a soft device frame, single-line value prop,
logo strip) — useful as a dated snapshot of "what generic good SaaS design looks like now," mainly
so yoshiki's registers can be checked against it and stay deliberately *not* generic.

### Land-book — https://land-book.com — free browse, submission-based
Curated landing-page gallery, updated daily, filterable by colour/industry/type, has a useful
"collections" feature (dark-mode, gradient, illustration-heavy clusters). No stated code licence —
screenshots only, for reference not reuse. **Worth extracting**: the collections filter itself is a
fast way to gather 10-20 same-genre references in one sitting for a voting round (matches the user's
established voting-round workflow).

### Godly — https://godly.website — free, extremely high curation bar
3-5 new sites/week (vs. Awwwards' daily volume) — the highest signal-to-noise ratio of any inspiration
gallery surveyed, biased toward exceptional scroll/animation storytelling. No submission fee. **Worth
a recurring visit** specifically because its low volume makes "check everything since last visit"
actually feasible.

### Httpster — https://httpster.net — free, small-studio/indie bias
Clean, personal, curated toward independent designers and type foundries rather than agency work.
Smaller and more idiosyncratic than Godly/Awwwards; good counter-balance to keep the catalogue from
skewing toward big-studio maximalism.

### Awwwards — https://awwwards.com — free browse, paid submission
Daily-volume award site, filterable by type/technology/colour/industry; the largest and noisiest of
the award galleries, but its "Site of the Day" archive is the best single index of what cutting-edge
studios shipped in a given month — good for date-stamping trend claims. Sceptical note: judged partly
by a paid-submission pool, so it over-represents agencies who pay the $49-169 fee, not "the best of the
web" unfiltered.

### SiteInspire — https://siteinspire.com — free, curated since 2010
Smaller, hand-picked, consistently editorial/typographic/European-leaning; strong tagging (style/type/
subject). Good for `swiss-editorial` register reinforcement — the catalogue's largest clean register
after HUD/product.

### Lapa Ninja — https://lapa.ninja — free, huge landing-page archive
7,300+ landing pages since 2015, 15,000+ full-page screenshots (whole scroll, not just above-the-fold),
plus free UI kits/mockups/fonts/colour tools on the side. Very current, actively adding Framer/Webflow
templates. **Worth extracting**: full-scroll narrative structure (hero→proof→features→pricing→CTA) as
a `layout`/`pattern` reference, since most other galleries only show the fold.

### Curated.design — now craftwork.design/curated/websites — free, ~3,500 sites, current
Confirmed still fed regularly (entries dated 2026-08-11 at last check); each entry has a one-line
description, static preview and scroll-capture video, filterable by 15 industries and by style
(animated/minimal/colorful/dark/pastel/gradient/neobrutalism counts shown). Explicitly "real websites,
not concepts" — good hygiene against copying speculative Dribbble/Behance shots that were never built.
**Worth a recurring visit**: the style-tag counts make it fast to pull a themed batch (e.g. all 81
"neobrutalism" entries) for a voting round.

### Page Flows-adjacent / not covered but flagged
ScreensDesign (iOS onboarding/paywall + revenue tagging) and Pttrns (classic mobile patterns) came up
repeatedly in comparison pieces; lower priority than Mobbin/Refero/Page Flows but worth a look if
paywall/subscription-flow patterns become a specific need.

---

## 3. Motion and effect resources — highest priority given the catalogue gap

### Motion (motion.dev) — https://motion.dev/examples — free, extremely current
450+ production-ready animation examples for React/JS/Vue, filterable by category (buttons, dialogs,
navigation, scroll, 3D, game UI…), many dated September 2026. Free examples browsable; 450+ Plus
examples need a paid unlock, but even free ones are dense. **Worth extracting directly**: command
palette entrance, context-menu with diagonal safe-zone, sheet-modal with swipe-to-dismiss, stacked-
toast with 3D push-back, scroll-velocity-linked 3D plane carousel, footer-reveal-on-scroll, rolling-
text-button. These are exactly the `motion` kind entries the catalogue lacks (3 total today) — this is
the single best source to close that gap, because each example ships an explicit mechanism description
alongside the demo.

### Codrops (tympanus.net/codrops) — free, tutorial-driven, current
Long-running (15+ years) but still publishing dense build-along tutorials weekly (e.g. Feb 2026:
scroll-revealed WebGL gallery with GSAP/Three.js/Astro/Barba.js). Each tutorial ships a live demo +
full source. **Worth extracting**: page-transition patterns (image travels between pages via Flip),
scroll-triggered shader reveals, on-scroll text-highlight technique, cinematic 3D scroll sequences —
strong for the near-empty `motion` and thin `generative-3d` (15) registers. Recurring visit warranted;
this is the most reliable single source for *documented mechanism*, not just visual result.

### GSAP showcase / official demos — gsap.com (via ScrollTrigger, Flip, SplitText plugins)
Referenced constantly inside Codrops tutorials; GSAP itself (now free under Webflow ownership) is the
underlying engine for most of the scroll-driven work surveyed. Not a gallery per se but check
gsap.com/showcase periodically for curated client work using the library.

### three.js examples — https://threejs.org/examples — free, canonical, always current (tracks the
library release). Not a design gallery but the reference implementation for every WebGL technique
(post-processing, GPGPU particles, PBR, stencil shadows). Use when a catalogue `effect` entry needs a
precise technical description of how it's actually built.

### OGL (oframe.github.io/ogl/examples) — free, minimal WebGL library, ThreeJS-adjacent
Much smaller API surface than three.js; its examples page is a clean single-technique-per-demo index
(flowmap, MSDF text, distortion/refraction, simple Fresnel). Good source when a catalogue effect needs
the *minimal* version of a technique rather than three.js's full machinery — closer to what a small
preview file can actually run standalone.

### Shader/texture-focused smaller sites
**Paper Shaders** (paper-shaders.val.run) — Apache-2.0, 29 zero-dependency GPU shaders as React
components (simplex/Perlin noise, dithering, paper texture, halftone dots/CMYK) — directly copyable
and license-clean, strong match for a `material`/`effect` addition (dither and halftone are entirely
absent from the catalogue's 69 materials). **threejsresources.com/showcase** — smaller curated WebGL
showcase (e.g. "WebGL Gallery" image-grid experiment with fisheye/chromatic-aberration post pass) —
useful individual case studies, not a big library.

### Active Theory — https://activetheory.net — reference-only, not extractable
Studio, not a resource site; their own portfolio (WebGL via a proprietary "Hydra" framework, real-time
particles, AI-navigated case studies, ~1.3s LCP despite heavy shader work) is the benchmark for
"immersive studio site done right" but nothing is open-source or copyable. Use only as a taste
reference when discussing what register-defining ambition looks like at the top end; do not expect to
extract technique, only direction.

---

## 4. Colour, type and texture resources

### Realtime Colors — https://realtimecolors.com — free tool, current
Lets you place a palette (bg/text/primary/secondary/accent) directly onto a live mock website and
tune contrast in real time; export to CSS/SCSS/PNG/zip. Not a components source — a **process tool**
for testing any candidate yoshiki palette against real UI before it enters canon.

### Happy Hues — https://happyhues.co — free, palette-in-context gallery
Small, hand-built (Webflow) set of curated palettes shown inside a consistent mock layout so relative
proportion (60-30-10 style) is visible, not just swatches. Good quick reference; low depth (a fixed
small set), not a recurring-visit priority.

### Fontshare — https://fontshare.com — free, current, Indian Type Foundry
Free-for-commercial-use font service (SIL OFL), publishes ITF's own retail-quality families (Poppins,
Khand, Rajdhani, Hind, Teko among the well-known ones) alongside curated third-party open fonts, with
full type specimens per family (weights, variable-axis sliders, size). **Note per pinned taste
memory**: avoid defaulting to ubiquitous choices (Inter/Roboto-equivalents like Poppins are themselves
now overused) — use Fontshare to find the *less common* families in its catalogue (display/serif/
mono-leaning ones), not the famous free hits.

### Fontsource — https://fontsource.org — free, technical utility, current
2,000+ open-source fonts as versioned self-hostable npm packages + direct downloads + CDN + free API.
Not a specimen/inspiration gallery — a **distribution mechanism** once a typeface is chosen elsewhere
(Fontshare, Google Fonts, a foundry). Useful for the build pipeline, not for casting.

### Grain / noise / texture and halftone-dither tools
This is a live, fast-moving micro-tool category, several free and current: **InstantGradient**
(instantgradient.com/tools — halftone generator, ordered/Bayer dithering, CMYK halftone, image-to-
palette, all client-side, no account); **Ditter** (ditterstudio.com — 60+ dithering algorithms,
34+ retro/modern/themed palettes, 16 post-processing effects, GPU shader-based, free); **MagicPattern**
(magicpattern.design/tools/category/image-effects — dither/CMYK-halftone/noise/god-rays/fractal-glass
generators, free, no signup); **devutl.com/dither-pattern-generator** (seven algorithms incl. Floyd-
Steinberg/Atkinson/Stucki, historically accurate palettes: Game Boy, CGA, C64, EGA — useful reference
table for what each algorithm's *character* actually is, not just a picture). **Worth extracting
directly**: since the catalogue's `material` kind (69 items) has essentially no grain/halftone/dither
entries despite `print-halftone` being a named register with 40 components, run several source images
through 2-3 of these tools and catalogue the resulting textures as `material` entries with exact
algorithm/palette named in `build` (these tools all show their parameters, so the description can be
exact rather than guessed). Paper Shaders (above, §3) is the best *code-copyable* version of the same
idea for a live/animated material rather than a static texture.

---

## 5. Design-system documentation (component anatomy, not visual style)

### Material Design 3 (Google) — https://m3.material.io — free, exceptionally current, spec-level detail
The most detailed public component spec of any system surveyed: every component page (e.g. `top app
bar/specs`) ships exact token names, dp measurements and states. 2026's "M3 Expressive" wave added 14
new/updated components (toolbars, split buttons with shape-shift-on-proximity, wavy progress
indicators). **Worth mining for anatomy, not skin**: the wavy/expressive progress indicator (a `chart`
kind gap — catalogue's gauges are all static rings/bars, nothing organic/wavy), the split-button
shape-shift interaction, and the explicit state-layer opacity model for hover/press (useful reference
whenever a yoshiki `object` needs a principled hover state rather than an eyeballed one).

### Apple HIG — https://developer.apple.com/design/human-interface-guidelines — free, always current
Not component-anatomy in the same literal sense (Apple gates exact numbers behind Xcode/SwiftUI docs),
but the *semantic colour role* model (`label`, `secondaryLabel`, `systemBackground` resolving
differently per light/dark/increased-contrast) is the clearest public example of a token system that
never needs conditional theming code — directly relevant to how yoshiki should structure palette-vs-
rules separation (per the standing "palette separate from language" direction).

### Fluent 2 (Microsoft) — https://fluent2.microsoft.design — free docs, current, best-documented token
layering of any system surveyed: explicit three-layer naming (global tokens → alias tokens → component
tokens) with a stated rule that global tokens are "never consumed by products directly." Also the only
system with first-class named motion tokens (`curveEasyEase`, `durationUltraFast`…`durationSlow`)
mapped to cubic-bezier/ms values — directly reusable as a naming convention for a yoshiki `tokens/
motion` file if one doesn't exist yet, since the catalogue's motion kind is the weakest.

### Shopify Polaris — https://shopify.dev (docs) / https://polaris.shopify.com — free, current
Recently (v13, cited 2024, still current baseline in 2026) cut component count ~30% by removing thin
wrappers around plain HTML — a useful *process* lesson (every component must earn inclusion) more than
a source of new pieces, given yoshiki already draws from many registers. Component set is dense/admin-
UI oriented (scrollable containers with content-guideline rules attached) — good check against the
`soft-product` register's real-world app density.

### Atlassian Design System — https://atlassian.design — free, current
Notable mainly for its dedicated "AI Patterns" section — worth checking specifically for how a large
production system is handling AI-chat/assistant UI conventions (loading, streaming-response, inline-
suggestion patterns), a category yoshiki's catalogue doesn't yet name explicitly despite it being
increasingly unavoidable in real product UI.

### Nothing OS / "Ndot" design language — no single official public spec; secondary sources only
No proprietary component library is publicly downloadable (the Ndot dot-matrix typeface is closed and
brand-owned), but the *concept* — a Glyph Matrix (25×25 circular-masked LED dot grid), monochrome
surfaces with one signal-red accent, dot-matrix display type used for interface chrome — is well
documented in secondary write-ups and already has an unofficial open community reimplementation:
**Vibe-Nothing-UI-Design** (wangbh030722.github.io/vibe-nothing-ui-design — a from-scratch, zero-
dependency CSS/JS component library built explicitly *inspired by* Nothing, MIT-shaped, not using any
Nothing IP). **Worth extracting the idea, not any asset**: a "dot-field ambient background that locally
inverts via `mix-blend-mode: difference`" material technique, and the 25×25 circular dot-grid glyph
icon convention — both are genuinely novel mechanisms not present anywhere in the catalogue's
`generative-3d`/`material`/`icon` kinds, and neither requires touching Nothing's actual trademarks.
Treat strictly as inspiration for a new register, never as a source of literal assets (trademark risk).

---

## Ranked: twelve highest-value resources

1. **Motion (motion.dev/examples)** — free, 450+ current React/JS/Vue motion examples with explicit
   mechanism descriptions; single best fix for the catalogue's near-empty `motion` kind.
2. **Codrops (tympanus.net/codrops)** — free, weekly build-along tutorials with full source; best
   *documented-mechanism* source for scroll/WebGL/page-transition effects.
3. **Refero** — paid but cheap; the only inspiration library that's strong specifically where the
   catalogue's `soft-product`/`glass-product` registers are weakest (empty states, settings anatomy).
4. **Mobbin** — paid; unmatched depth for full flow sequences (onboarding, paywall, checkout) as
   opposed to single screens, which is what the catalogue's `pattern` kind currently lacks.
5. **Aceternity UI** — free, MIT-adjacent code; direct source for cursor-reactive depth/3D effects the
   catalogue has almost none of (fills `generative-3d` and `effect`).
6. **Uiverse.io (live site)** — free, MIT, single-file HTML/CSS; best raw volume for pure-CSS micro-
   interaction technique (loaders, toggles) matching yoshiki's own preview format most closely.
7. **Material Design 3 (m3.material.io)** — free, exact spec-level anatomy; best source for principled
   state layers, the new wavy/expressive progress indicators, and shape-shift interactions.
8. **Godly** — free, extremely high signal-to-noise (3-5 sites/week); best per-minute return for
   scroll/animation storytelling taste-calibration, cheap to revisit often.
9. **Fluent 2 (fluent2.microsoft.design)** — free docs; best-documented token *architecture*
   (three-layer naming, first-class motion tokens) to borrow as a structural convention.
10. **Magic UI** — free, MIT, React/Tailwind/Motion; dense, focused set of named micro-effects
    (animated-beam, border-beam, dock, terminal) that are individually rare elsewhere.
11. **Paper Shaders (paper-shaders.val.run)** — free, Apache-2.0, zero-dependency; only source
    surveyed offering *live, copyable* dither/halftone/noise materials rather than static generated
    images — fills the near-empty grain/dither `material` gap with actual code.
12. **Curated.design (craftwork.design/curated/websites)** — free, ~3,500 sites, fed regularly, style-
    tag filtering (neobrutalism, gradients, etc.) built in — fastest way to assemble a themed batch of
    real (not speculative) sites for a voting round.

Deliberately excluded from the top twelve despite real value: **Tailwind UI/Tailwind Plus** (paid,
nothing extractable without a seat — benchmark only), **Page Flows** (video-only, no API, expensive per
insight despite being the best *motion-timing* source — revisit only if budget opens up), **CSS-Tricks**
(valuable technique archive but effectively frozen, not a 2026-fresh source).

---

## Forty-plus components, materials, effects and patterns worth adding

Format: name — one-line description — register — source.

1. Animated beam connector — curved SVG line animating between two UI nodes with a moving gradient
   head — HUD technical / dev-tool — Magic UI (`animated-beam`)
2. Border-beam / shine-border — rotating conic-gradient light travelling along a card's border —
   glass product UI — Magic UI
3. Dock — macOS-style icon row that magnifies items nearest the cursor — soft product UI — Magic UI
4. Terminal typing block — CLI mockup that types out lines with cursor blink — dev-tool dot-matrix —
   Magic UI
5. Number ticker / count-up stat — digits roll from 0 to target value on scroll-into-view — chart /
   soft product UI — Magic UI
6. Retro grid — perspective-receding grid plane with subtle glow, classic synthwave hero backdrop —
   generative mono — Magic UI
7. Background beams — several animated light beams sweeping a dark canvas — HUD technical — Aceternity
8. Spotlight cursor — radial gradient mask following the pointer, revealing content beneath a dark
   overlay — dark tech hud — Aceternity / FWD Tools
9. Lens zoom — hover magnifier that zooms into a region of an image or video — product UI — Aceternity
10. 3D tilt card — layered card whose contents parallax on mouse position (`rotateX/Y` from cursor) —
    generative-3d — Aceternity / FWD Tools
11. Wavy SVG background — turbulence-filtered wave lines behind a hero section — soft editorial —
    Aceternity
12. Squiggly text — SVG displacement-filter text distortion on hover — brutalist mono — Aceternity
13. Infinite moving card row — marquee of testimonial/logo cards with pause-on-hover — soft product UI
    — Aceternity
14. Segmented FAB speed-dial — floating action button that expands into a radial or vertical menu —
    soft product UI — CodeFronts
15. Squircle FAB (Apple superellipse) — continuous-corner floating button shape — glass product UI —
    CodeFronts
16. Scroll-progress ring FAB — floating button with an SVG stroke-dashoffset ring showing read
    progress — soft product UI — CodeFronts
17. Magnetic button — button that physically pulls toward the cursor via position math — soft product
    UI — FWD Tools / CodeFronts
18. OTP / PIN input — auto-advancing digit boxes with paste and backspace handling — soft product UI —
    FWD Tools
19. Kanban drag column — HTML5 drag-and-drop board with live count badges — soft product UI —
    FWD Tools
20. Bento grid (named-area) — CSS grid-template-areas bento layout — layout — FWD Tools / Magic UI
21. Vertical timeline with pulse nodes — gradient line with absolute-positioned pulsing dots — soft
    product UI — FWD Tools
22. Command palette (⌘K) — fuzzy-search modal with keyboard nav and grouped results — dev-tool /
    soft product UI — Motion.dev / FWD Tools
23. Sheet modal with swipe-to-dismiss — bottom sheet with spring physics and drag gesture — soft
    product UI (mobile) — Motion.dev
24. Stacked toast notifications — toasts push back into a 3D-ish stack via transform+opacity — soft
    product UI — Motion.dev
25. Context menu with safe-zone — submenu that respects a diagonal "intent" cone before closing — dev-
    tool — Motion.dev
26. Scroll-velocity 3D plane carousel — cards wave/tilt based on scroll speed — generative-3d —
    Motion.dev
27. Footer reveal — sticky under-page footer fading in as the page scrolls past it — layout — Motion.dev
28. Rolling text button label — duplicate label rolls into place on hover — object — Motion.dev
29. Radial menu — options fan out from a central button with staggered spring entrance — soft product
    UI — Motion.dev
30. Scramble/matrix text — characters cycle randomly before settling on final word — brutalist mono /
    dev-tool — Motion.dev, CodeFronts
31. Page-transition image travel (Flip) — clicked thumbnail visually flies into a full detail view
    across a page navigation — motion — Codrops
32. Scroll-revealed WebGL image grid — images unmask via a shader as they enter viewport — generative-
    3d — Codrops
33. On-scroll text highlight — words light up progressively as the reader scrolls past them — swiss
    editorial — Codrops
34. Cinematic 3D scroll sequence — camera moves through a 3D scene keyed to scroll position —
    generative-3d — Codrops
35. Fisheye/chromatic-aberration post pass — full-screen distortion driven by a cursor-trail render
    target — effect — threejsresources.com WebGL Gallery case study
36. MSDF glyph text — crisp scalable text rendered as signed-distance-field glyphs inside WebGL —
    dev-tool / generative-3d — OGL examples
37. Flowmap distortion — cursor-trail texture used to distort a background image — effect — OGL
    examples
38. Paper texture shader — animated fine-grain paper-fiber overlay, zero dependency React component —
    material — Paper Shaders
39. Dithering shader (Bayer/blue-noise) — live animated dither pattern as a section overlay — material
    — Paper Shaders / Ditter
40. Halftone-dots / halftone-CMYK shader — animated print-halftone overlay, tunable dot size and angle
    — material / print-halftone — Paper Shaders / MagicPattern
41. Retro palette dither (Game Boy / CGA / C64 / EGA) — historically exact limited-palette dither
    presets — material — devutl.com dither generator (parameter table)
42. Wavy/organic progress indicator — non-linear waveform loading bar (M3 Expressive) — chart — M3
    spec
43. Shape-shifting split button — connected button pair that morphs shape on interaction — object —
    M3 Expressive components
44. State-layer hover/press opacity model — principled overlay-opacity approach to interactive states
    (rather than separate hex per state) — rules, cross-register — M3 spec
45. Semantic colour role resolving per appearance mode (no conditional code) — token architecture
    pattern — rules — Apple HIG
46. Three-layer token naming (global → alias → component) with named motion-curve/duration tokens —
    token/motion architecture pattern — rules — Fluent 2 docs
47. Dot-field ambient background with local colour inversion (`mix-blend-mode: difference`) — a sparse
    dot layer that auto-inverts against light/dark surfaces beneath it — material / dev-tool dot-matrix
    — Vibe-Nothing-UI-Design (Nothing-inspired, not Nothing IP)
48. 25×25 circular-masked dot-matrix glyph icon convention — small addressable-grid icon system
    reading as an LED matrix — icon / dev-tool dot-matrix — Vibe-Nothing-UI-Design / Nothing OS concept
    (build from scratch, no trademarked assets)
49. Full-scroll landing narrative structure (hero→proof→features→pricing→CTA) documented as one
    `layout` entry rather than per-section — layout — Lapa Ninja full-page captures
50. AI-assistant inline patterns (streaming response, inline suggestion chip, loading shimmer for
    generated content) — soft product UI — Atlassian Design System "AI Patterns"

---

## Recurring-visit list

- **Motion (motion.dev/examples)** and **Codrops** — both publish weekly; check on every workshop
  extraction cycle while `motion` stays the thinnest kind.
- **Godly** — low weekly volume, high hit rate; cheap to check every 1-2 weeks.
- **Curated.design (craftwork.design/curated/websites)** — fed regularly, style-tag filters make batch
  pulls fast for voting rounds.
- **21st.dev community feed** — daily uploads; check when hunting a specific effect/pattern rather than
  browsing wholesale (too large to sweep).
- **Uiverse.io live site** — for pure-CSS micro-interaction technique whenever the `object`/`motion`
  catalogue needs volume; ignore the frozen GitHub mirror.
- **Material Design 3** and **Fluent 2** docs — not weekly, but re-check after each major version bump
  (M3 "Expressive" waves, Fluent 2 core-kit releases) since both ship genuinely new component anatomy,
  not just re-skins.
