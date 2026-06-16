# AGENTS.md — applying yoshiki

You are applying **yoshiki**, an elegant design language: warm monochrome (lacquer ·
bone · gold) struck rarely by two triggers (scarlet · moss). Whatever you produce —
UI, CLI / TUI output, documents, code comments, chat or bot messages, image-generation
prompts — make it in this language. This file is the map; read it first, then load
only the module your task needs.

## Read in this order
1. [`PHILOSOPHY.md`](PHILOSOPHY.md) — why it looks like this (kintsugi; tone & triggers; gold gilds).
2. [`canon/principles/priority.md`](canon/principles/priority.md) — the ordered ladder: what wins when nothing is specified.
3. [`canon/principles/defaults.md`](canon/principles/defaults.md) — concrete fallbacks for every unspecified choice.
4. [`canon/palette/<theme>/palette.yml`](canon/palette/) — tokens **and** the ROLES contract.
   Consume a *role* (`text.body`, `action.edge`, `danger.fill`), never a raw token —
   a role guarantees the right contrast in both themes. kogane (dark) · washi (light).
5. The module for your task — load on demand:
   - color / UI → `canon/palette/` + `canon/prompts/palette.md`
   - terminal / CLI / TUI → `canon/lexicon/cli.md` + `canon/prompts/cli.md`
   - code comments → `canon/lexicon/comments.md` + `canon/prompts/comments.md`
   - text / chat / docs → `canon/lexicon/{glyphs,nameplates,frames,space,states}.md` + `canon/prompts/text.md`
   - chat / bot messages → `canon/lexicon/messaging.md` + `canon/prompts/messaging.md`
   - motion / loading → `canon/motion/` + `canon/prompts/motion.md`
   - web effects → `canon/effects/` + `canon/prompts/effects.md`
   - fonts → `canon/typography/` + `canon/prompts/typography.md`
   - image generation → `canon/prompts/image.md` + `library/image-prompts/`
   - GitHub README / profile → `library/github/`
6. Lift, don't reinvent: ready artifacts live in [`library/`](library/) (themes, menus,
   charts, text blocks, snippets, configs, presets).

## The laws you may not break
- **Rarity = power.** One accent, in the detail. A trigger (scarlet / moss) is an
  event, not a field — at most one scarlet per screen. Unsure whether to add a color,
  a word, or an ornament? Don't.
- **Gold is gilding.** Gold is a line, edge, frame, glyph — never a filled slab. A
  primary action is a gold-framed dark / paper surface with gold text. Scarlet *may* fill.
- **Warm, never grey.** Every dark tone carries a brown lacquer undertone; text is
  bone, not pure white. No blue / purple / cyan in UI — information lives in tone.
  (Those hues exist only inside terminal ANSI and syntax colors.)
- **Air.** ~97% of a surface is quiet tone; emptiness is composition, not leftover.
- **One sharp detail.** A soft rounded form may carry one precise sharp mark — no more.
- **Show, don't tell.** A glyph or kanji earns its place by meaning, never decoration.

## Two themes, one language
Only the stage changes (which surfaces, which family carries text); the triggers and
every rule are identical. The terminal always stays a dark island — even in washi (light).

## When you output
Match the surrounding code and voice. Everything must survive a monospace,
line-wrapping terminal. No banner ASCII, no `INFO:` / `[LOG]` prefixes, no timestamps
unless asked. Generate NEW work *in* the language — never copy the owner's examples
verbatim.
