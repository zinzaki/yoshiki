```
╭─ messaging ───
│  chat & bot messages — yoshiki where there is no color
╰╴
```

Chat (Telegram, Discord, most bots) gives almost no color and little styling. The
language adapts by one rule: **when tone is gone, structure and glyphs carry the
meaning color usually would.** Monospace is the canvas.

## What you actually have (Telegram MarkdownV2)
- `*bold*` · `_italic_` · `__underline__` · `~strike~` · `||spoiler||`
- inline `` `code` `` and a fenced monospace block — where box-drawing renders
- `[text](url)` links · custom emoji
- **not** available: color, font choice, or any nested style inside a code / pre block
- escape `. - ( ) !` etc. *outside* code; *inside* code / pre you don't

## The adaptation
| Usual role | In chat |
|---|---|
| gold (action / emphasis) | `*bold*` — the one stressed thing |
| tone hierarchy (color) | a monospace block — frames & alignment carry it |
| status color (moss / scarlet) | a glyph: ✓ ● ◆ → ⟥ ✗ ⚠ (shape, not hue) |
| nameplate | `*·  N A M E  ·*` — bold spaced caps |

## A bot card — wrap the block below in a monospace (pre) block
```
╭─ ◆ ORDER #1421 ──────────────
│  status   ✓ paid
│  items    3   ·   ¥ 4,820
│  ship     → eu-central, 2d
╰─ ❯ track
```
Inside a pre block the box-drawing, glyphs and alignment survive with no color at
all. One card per message.

## Dense data — the hard register survives too
```
⟥ node web-01
╔ uptime   99.7%
╠ commits  86   (+18%)
╚ focus    3/12
```

## Discord — colour returns (ANSI)
Unlike Telegram, Discord renders colour inside a fenced **`ansi`** code block (desktop
& browser; mobile shows it plain). Use the 16 ANSI colours via escape codes
(`ESC[<style>;<code>m`, where `ESC` means the escape byte 0x1B — written `\e` or
`\033` in most shells; reset with `ESC[0m`):

| role | ANSI |
|---|---|
| gold / accent / heading | yellow `33` |
| success | green `32` |
| danger / error | red `31` |
| info / live | cyan `36` |
| text / structure | white–grey `37` · bold `1` |

So a yoshiki card in Discord keeps its role colours — a gold heading, a moss `✓`, a
scarlet `✗` — on the same frames and glyphs used everywhere else:
```
ESC[1;33m╭─ ◆ BUILD ─────────────ESC[0m
ESC[37m│  ESC[32m✓ESC[37m passed   214 files
ESC[37m│  ESC[31m✗ESC[37m lint     1 error
ESC[1;33m╰─ ❯ retryESC[0m
```
(Send it inside an `ansi` code block, replacing each literal `ESC` above with the real
escape byte 0x1B.) Glyphs still come first — mobile users see no colour, only the shapes.

## Rules
1. One monospace card per message — chat wraps; closed wide boxes break, spines survive.
2. Bold is the only accent — spend it once (it is the gold of a colorless world).
3. Glyphs do the color's job: ✓ done · ✗ fail · ● active · ⚠ warn · → flow. One
   meaning each, never a parade.
4. Keep it compact — well under Telegram's per-message limit (~4096 chars). Short is
   the style.
5. No emoji spam; a single ◆ or ❯ on the seam is enough.
