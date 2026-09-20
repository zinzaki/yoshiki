# Changelog

## v2.0 — 2026-09

The repository stops being one taste written down and becomes a library of registers.

- **Sixteen palettes, all equal.** Twelve families, day and night variants where the
  family has both, each with a two-letter code (`BE-N`, `HK-D`, `LB-N`), a material and a
  temperature. The role contract (`bg.* border.* text.* bar.* accent.* signal.*`) is what
  a component consumes; the palette is a mounted layer, and swapping it breaks nothing.
  Gold is one palette among sixteen now, not the frame around the project.
- **The proof got stricter and broader.** Every role is measured against every surface it
  can sit on, in all sixteen palettes; the build fails on one cell below its floor. A
  palette that needs a lower edge floor must declare it in its own `palette.yml`, with a
  reason — `paper-gold` is the only one that does, and it says why.
- **The canon was rebuilt around the question an agent actually asks.** `language/`
  (zones, roles, defaults, priority), `materials/` (glass, glow, halftone, relief, seal,
  dither, topo…), `objects/` split by zone, `patterns/` as layout schemes, `physics/`
  (elevation, light, motion, metrics), `treatments/` (clean · ornate). Every entry carries
  a manifest, and `canon/registry.json` — plus a shadcn-shaped `registry.json` at the root
  — is generated from them.
- **A workshop instead of taste.** 265 private references were mined exhaustively into a
  782-part catalogue, then run through eleven ordered filters (`workshop/FILTERS.md`):
  substance, zone, register purity, distinctness, palette proof, scale proof,
  accessibility, craft, taste signals, value to the whole. What survived was **rebuilt**
  as 246 standalone, palette-agnostic previews in fourteen registers — none of them copies
  a reference, and a rejection is recorded with its reason.
- **Registers are kept apart.** A register is a whole stylistic world (blueprint HUD,
  Swiss editorial, lo-fi warm, print halftone, soft relief, washi paper, ornate menu…).
  They live side by side in the library and are never mixed inside one design; the gallery
  groups by register for exactly that reason.
- **The site is generated from the library.** Three pages — the showcase, the palette room
  and the component gallery — built by `tools/site_pages.py` from `canon/palettes/` and
  `library/previews/`, with every palette switchable live, down to the terminal and syntax
  colours. The hand-written v1 pages and their scripts are gone, so the showcase cannot
  drift from what the repository actually holds. `tools/check.py` fails on a stray colour,
  a dead link or a drifted copy; CI runs the site check and the unit tests too.
- **A face that shows the family.** The banner and the link-preview card are one specimen
  sheet: sixteen palettes, each standing in its own colours, with the name printed on a
  band laid over them.
- **Themes moved out.** Program themes (kitty · ghostty · foot · alacritty · wezterm ·
  vscode · neovim · starship · tmux · zellij · btop · fzf · base24) now live in
  `zinzaki/yoshiki-themes`, generated from the same palettes. This repository is the
  language and the library; that one is the output.

## v1.2 — 2026-09

- **No Japanese characters anywhere** — 430 of them across 56 files, scattered
  through labels, headings, theme names, group titles and the UI. They were
  decoration standing in for an identity, and a character chosen for you is not
  an identity. Everything is written in English now; the ideas the language
  borrows are attributed in `PHILOSOPHY.md`, in plain terms, because a rule you
  have to translate is a rule you will not apply. `tools/check.py` fails the
  build if one comes back.
- **One deliberate mark** — the character stays, as the logo and only as the
  logo. It is declared once in `canon/palette/kogane/palette.yml` under
  `brand.mark` and rendered on a lacquer tile by the build, so changing the
  identity is a one-line edit rather than a redraw. `tools/check.py` allows that
  single character only in the files the build writes from that declaration;
  everywhere else, every CJK character still fails. Decoration was the problem,
  not the mark.
- **A banner that shows rather than claims** — generated from canon as a specimen
  sheet: identity left, the language actually running on the right, and the token
  ramp full-bleed along the bottom. Plus `og.svg`/`og.png` for link previews.
- **Installable** — `npm i yoshiki-design` publishes the tokens, the roles, the
  component kit and a typed module; a Tailwind preset whose colours resolve to
  the role *variables* rather than baked hexes, so one preset covers both themes;
  Figma variables as one collection with two modes; and a Style Dictionary config
  pointed at the DTCG files, which builds CSS, JS, Swift and Android without
  translating a translation. All generated — an integration that drifts is worse
  than none — and CI now loads each one, because a broken preset is a broken
  install.
- **Repository furniture** — contributing guide built around the one rule that
  matters here (canon is written, everything else is generated), a security
  policy, four issue templates including one for contrast reports, a pull request
  checklist that asks for the proof, and an editorconfig.
- **README, rewritten** — hero, badge row, the idea in one minute, install in
  three forms, the tokens-versus-roles contract with a code sample, the proof,
  the pipeline, and the whole map in two columns.

- **Contrast, re-proven** — the proof measured every text role against
  `bg.surface` alone, which flattered the palette instead of testing it.
  It is now a full role x surface matrix, `bg.hover` included — on paper the
  darkest ground of all — and the build fails on a single cell below its floor.
  It found five real failures in washi (links and gold text at 4.14:1, muted
  4.34, moss 4.20, wisteria 4.19) and a gilded edge at 2.75:1 against the 3:1
  non-text floor; washi's hover gold also sat *lighter* than its resting gold,
  so the seam faded exactly when the hand arrived. ANSI red was 4.27:1 on the
  terminal ground, and washi's `syntax.keyword` pointed at the decorative gold
  rather than the text gold — a keyword is a word. Both palettes are retuned by
  a few RGB points each: the language looks the same and is now true.
- **`danger.on-fill` · `ok.on-fill`** — the contract never said what colour a
  label takes when it stands *on* a trigger, so the kit had been guessing. It
  was 4.25:1 on the scarlet. The new `shiro` token is the one pure white in the
  language, and it exists for exactly that surface — nothing warmer clears AA
  against the spider-lily scarlet, and the scarlet is not negotiable.
- **`canon/components`** — the missing contract. The showcase documented
  buttons, forms, dialogs and tables that canon never specified. Six files now
  say what a control is made of, which role each part takes, and the five laws
  underneath — plus `canon/prompts/components.md` for an agent.
- **`library/web`** — the kit those rules describe: two plain CSS files, no
  build step, built only on `--r-*` roles. There is no gold-filled button in
  it, nothing casts a shadow but a dialog, and every status class expects a
  glyph.
- **Showcase, rebuilt** — one page became five: the language, the palette
  (every token, the roles contract, the live matrix, six export formats), the
  components (each demo printed beside the exact markup that produced it), the
  lexicon and the thirteen themes, each previewed in its own generated values.
  The site had been carrying a third hand-written copy of the palette; it now
  wears `library/web` unchanged and reads its colours from canon.
- **`effect.glass` · `effect.sheen`** — the shipped web effects were dark-theme
  effects in a costume: hard-coded warm rgba, so on paper the frosted card
  became a dark slab on a light page and the sheen became a shadow pretending to
  be a highlight. Two roles now carry which way the light falls, and
  `library/effects` reaches for them — an effect survives the theme switch.
- **The whole map** — the rebuilt index dropped the ecosystem grid, which meant
  menus, charts, text blocks, snippets, configs, presets, effects, image prompts
  and the GitHub kit were invisible to anyone who did not already know the repo.
  Both halves are listed again, each with the one line that says why it exists.
- **`groups`** — tokens carry a group map, so what a step is *for* travels with
  its value instead of living in a comment the build discards. A token in no
  group fails the build.
- **`tools/audit.mjs`** — the palette is proven, but the page is what people
  see, so this walks every visible text node in a browser, composites the
  background actually painted behind it, and measures. It found six real bugs:
  the theme switch carried `data-theme`, so the buttons matched the theme rule
  and painted themselves in the *other* theme's tokens; the generated
  `palette.css` declared roles once on `:root`, and since a custom property is
  substituted where it is declared, a nested `[data-theme]` scope inherited the
  parent's already-resolved roles — the two themes shown side by side were half
  wrong; the terminal previews read their chrome from the current theme instead
  of the island, so the light preview drew ink on ink; `kin-2`'s stated job is
  "labels", but it sat at 4.33:1 as text; a terminal's dim detail used the ghost
  tone for real information; and an unescaped `<g>` was being parsed as an
  element. The sweep now returns nothing, and the four exemptions are declared
  in the markup as `data-floor` rather than argued after the fact.
- **Stale copies, found and stopped** — `check.py` now refuses any hand-written
  hex that canon no longer has, and it immediately found seventeen: the tmux
  example config, both palette READMEs, `canon/components/controls.md` and the
  palette prompt were all quoting values that had moved. The prompt's token
  block is generated now, so the one file whose whole job is to hand a model the
  palette cannot hand it last month's palette. Two of its rules were wrong on
  their own terms as well — it described text on a gold fill, which the language
  does not have, and quoted the old single-surface contrast floors.
- **`tools/check.py`** — the invariants a build cannot see: no hard-coded
  colour in the showcase, every link in the repository resolving, and the pages
  agreeing on their own navigation. Runs in CI beside `build.py --check`.

## v1.1 — 2026-07

- **Themes** — four new generated targets: ghostty, wezterm (TOML scheme),
  zellij (new theme spec, 0.41+) and fzf (`--color` list). Terminal-drawn
  targets carry the same dark-island values in both theme files by design.
- **Showcase** — the site palette now matches canon exactly (washi fill-triggers
  had drifted); scarlet-as-text uses `danger.text`, never the fill token.
- **Build** — `--check` mode verifies committed output against canon (runs in
  CI); contrast failures now fail the build; the README palette preview
  (`docs/assets/palette.svg`) is generated alongside the themes.
- **Fix** — washi selection no longer inherits kogane's dark gold wash:
  neovim `Visual`, tmux copy-mode and btop selection use washi's own
  `kin-w` on paper.

- **Motion** — `canon/motion` expanded: arc and circle-pulse spinners, a minimal
  `▰▱` square bar and number-only progress; a blacklist of heavy filled blocks.
- **Effects** — new `canon/effects`: glass (frosted + refraction lens), film grain,
  pointer (tilt · spotlight · dual-cursor) and ambient (aurora · sheen). The
  showcase's effects now have a canonical home.
- **Typography** — new `canon/typography`: a warm serif display + mono stack
  (Maple · JetBrains · Geist, all OFL), with the Claude serif recipe noted.
- **AI-navigation** — `AGENTS.md` (the map an agent reads first) and `llms.txt` (a
  machine-readable index), so an agent given only the repo can self-navigate.
- **Philosophy** — the spider lily reframed as a deliberate stroke of colour, not a
  claim of memory.

## v1.0 — 2026-06

The first sealed version of the language.

- **Palette** — KINTSUGI «tone & triggers»: a warm lacquer monochrome
  (lacquer · bone · gold) struck rarely by scarlet and moss.
  Gold is gilding, never a slab. Two themes: kogane (dark) and
  washi (light).
- **Roles** — a semantic contract over the raw tokens (`text.*`, `action.*`,
  `ok/warn/danger.*`, `border.gold` vs `text.gold`, `syntax.*`). Consume a
  role and you cannot pick a wrong-contrast value.
- **Proof** — `CONTRAST.md`, regenerated on every build; all text roles in
  both themes meet WCAG.
- **Exports** — css (tokens + `--r-<role>`), json, base16/base24, terminal
  configs (kitty / foot / alacritty / starship) and editor/monitor themes
  (vscode / neovim / tmux / btop) — all from one source.
- **Lexicon** — glyphs, nameplates, frames, the CLI/TUI canon and the
  code-comment style.
- **Prompts** — modular system-prompt blocks so any model speaks yoshiki.

### Earlier internal drafts (not released)
The palette went through six private iterations before v1.0: standard →
neon → pastel → carmine → blood → the scarlet that stayed. Three extra
themes (urushi, higanbana, shinkai) were explored and folded back:
urushi's "gold as veins" became a law for the whole language, so a
separate theme was no longer needed.
