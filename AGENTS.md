# AGENTS.md — applying yoshiki (v2)

**yoshiki** is a library of design registers: the materials, rules, roles, objects and
patterns a visual world is built from, plus 246 rebuilt components sorted by the
stylistic world they belong to. Colour is a separate, swappable layer — sixteen palettes,
all equal. Program themes live in a separate repository (`zinzaki/yoshiki-themes`).

Some older modules still describe the **v1 look** (lacquer, bone, "gold only as a line",
one production pair). Where this file and a module disagree, **this file wins**: the gold
palette is one of sixteen, not the default frame, and a design never mixes two registers.

## Step 1 — decide the zone before you pick anything

| zone | surfaces | draw with | never |
|---|---|---|---|
| **graphic** | web pages, web apps, desktop apps (GTK, Qt, Slint, Tauri, Electron), installers, mobile | real components, real vector icons packaged with the app (Lucide-style strokes, Nerd Font icons as a font), CSS/GPU effects, graphical loaders | box-drawing frames (`╭─╮ ╔═╗`), glyph icons as UI, text spinners, ASCII art, monospace-as-decoration |
| **text** | terminal, TUI, CLI output, chat and bot messages, code comments, commit messages | box-drawing frames, semantic glyphs, character spinners, ANSI colours | pretending to be graphics; banners of ASCII art |

A desktop app is **graphic** even if it is for developers. Only a terminal is text.
Full rules: [`canon/language/zones.md`](canon/language/zones.md).

## Step 2 — pick the palette

Consume **roles** (`text.primary`, `accent.edge`, `signal.fill` — the contract is in
[`canon/language/roles.md`](canon/language/roles.md)), never raw token values.

- dark default: [`canon/palettes/night-beige/palette.yml`](canon/palettes/night-beige/palette.yml) (`BE-N`)
- light default: [`canon/palettes/beige-glass/palette.yml`](canon/palettes/beige-glass/palette.yml) (`BE-D`)
- the other fourteen: [`canon/palettes/`](canon/palettes/) — porcelain, concrete, yorha, blush(+night), lab(+night), hanko(+night), cafe, ember, moss, signal, walnut. Pick by the product's register and temperature, not by habit; none of them is more canonical than the others.
- web: `library/web/palette.css` gives the roles as `--r-*` variables; `data-theme="beige-glass"` switches to light.

Roles every palette provides: surfaces (`bg.app → surface → raised → hover`), text
hierarchy, a **constant accent** (gold: mark, frame, selected item, cursor, focus) and a
**rare signal** (red `#E3001B`: error, destroy, block — at most one per view). The
terminal stays a dark island in both themes. More palettes (with names and short codes)
are coming; the rules never depend on one palette.

## Step 3 — pick one register, and stay in it

A **register** is a whole stylistic world, not a theme. The library holds fourteen of
them, each with rebuilt, palette-agnostic components in `library/previews/<register>/`:

`blueprint-hud` · `soft-product` · `swiss-editorial` · `brutalist-mono` · `print-halftone` ·
`glass-product` · `moodboard-collage` · `lo-fi-warm` · `soft-relief` · `generative-3d` ·
`palette-card` · `japanese-paper` · `nier-menu` · `other`

Choose the one that fits the product, then build everything in that register. **Never mix
two registers in one design** — a HUD gauge inside a washi-paper page is the fastest way
to look machine-made. Materials, treatments and patterns in `canon/` are a pool to draw
from inside the chosen register, never a set to combine at random, and a reference is
something to learn from, never to copy. The hard rules are zones, roles, contrast,
accessibility and register purity.

## Step 3a — the owner's default look (the beige glass register)

This is the **default look** of the owner's products when nothing else is specified, not
a law and not the only option.


- **Menu grammar from NieR:Automata.** Section headers are solid title bars (ink bar with
  beige text on light, beige bar with dark text on dark). Small square bullets. The
  selected row is outlined with a gold hairline, not flooded with colour.
- **Material: frosted glass over a soft warm glow.** Panels and rows are translucent
  (`backdrop-filter: blur`) above the ground; a large, soft, warm glow sits behind the
  content. Provide an opaque fallback for `prefers-reduced-transparency`.
- **Two treatments, same layers in both themes:**
  - `clean` (default) — glass and glow only;
  - `ornate` (option) — faint cross (`+`) pattern ground, corner brackets on panels,
    control hints such as `○ Select  × Back`.
- **Type:** Geist for interface text; Geist Mono / JetBrains Mono / Maple Mono for code
  and data.
- **Shape:** soft corners, 6–14px; pills only for tags and toggles.
- **Colour budget:** almost everything is ground, glass and ink; gold marks structure;
  red appears only when something is wrong or irreversible.
- **Code syntax:** warm and bright — coral keywords, gold functions, olive strings, amber
  numbers and constants, dry-olive types, muted comments. No pink, teal or blue.
- **Motion:** one orchestrated moment per page, responsive feedback on interaction,
  `prefers-reduced-motion` respected.

Ready implementations (v2 drafts):

- web: `library/web/palette.css` (roles) → `library/web/materials.css` (glass, glow, grain,
  NieR bar and rows, relief, ticks, patterns, accessibility fallbacks) →
  `library/web/objects.css` (buttons, fields, choice, menu, table, badges, dialog, window…).
- Slint desktop apps: `library/integrations/yoshiki.slint` or `library/integrations/slint/<family>.slint`
  (tokens) → `library/slint/components.slint` (bar, panel, row, button, switch, badge).
- physics: `canon/physics/` (elevation, light, motion, metrics); materials and components have
  manifests with ids in `canon/`.

`library/web/yoshiki.css` is the v1 kit, kept for the old pages; prefer `materials.css` and
`objects.css`. `docs/` is generated by `tools/site_pages.py` — never hand-edit it.

## Step 4 — modules

- text zone: `canon/objects/text/{cli,comments,messaging,glyphs,frames,states,space}.md` and
  the matching `canon/prompts/*.md` — still valid for terminals, chat and comments.
- components (anatomy, states, density): `canon/objects/graphic/` — anatomy is valid; the
  visual rules inside follow Step 3.
- effects: `canon/effects/` — web only.
- identity in one paste: [`canon/prompts/identity.md`](canon/prompts/identity.md).
- legacy, read for history only: `PHILOSOPHY.md`, `canon/palettes/archive/`.

## When you output

Match the surrounding code and voice. Build new work in the language; never copy the
owner's examples verbatim. In the text zone, everything must survive a monospace,
line-wrapping terminal: no ASCII banners, no `INFO:` prefixes, no timestamps unless asked.
