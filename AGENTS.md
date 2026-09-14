# AGENTS.md — applying yoshiki (v2, in transition)

**yoshiki** is a design foundation: the materials, rules, roles, objects and patterns a
visual world is built from. Colour is a separate, swappable layer (a family of palettes).
Ready program themes are moving to a separate repository.

v2 is being rebuilt. Some modules below still describe the **v1 look** (lacquer, bone,
"gold only as a line", spider-lily scarlet, moss). Where this file and a module
disagree, **this file wins**.

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

- dark: [`canon/palettes/night-beige/palette.yml`](canon/palettes/night-beige/palette.yml) — default
- light: [`canon/palettes/beige-glass/palette.yml`](canon/palettes/beige-glass/palette.yml)
- web: `library/web/palette.css` gives the roles as `--r-*` variables; `data-theme="beige-glass"` switches to light.

Roles every palette provides: surfaces (`bg.app → surface → raised → hover`), text
hierarchy, a **constant accent** (gold: mark, frame, selected item, cursor, focus) and a
**rare signal** (red `#E3001B`: error, destroy, block — at most one per view). The
terminal stays a dark island in both themes. More palettes (with names and short codes)
are coming; the rules never depend on one palette.

## Step 3 — the look (graphic zone)

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

`library/web/yoshiki.css` and `docs/` still render the v1 look; use their **roles and
structure**, not their styling, until the v2 kit lands.

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
