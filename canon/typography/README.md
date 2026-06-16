```
╭─ typography ───
│  serif display · mono data — warm, never generic
╰╴
```

> A warm serif for display, a humanist sans for body, a mono for data and code. The
> Claude recipe — a warm serif display over a humanist sans — in a Japanese register,
> and all open-licensed so it ships.

## The stack
```
display · headings   Shippori Mincho  (or Noto Serif JP)
                       warm mincho serif WITH Japanese — the brand voice
body · UI            Zen Kaku Gothic New
                       a calm humanist sans, exact and quiet
mono · data / code   one of the three below, by register
```

## Mono — pick by register (all OFL 1.1, all shippable)
| Font | Weights | CJK | Character | Use |
|---|---|---|---|---|
| **Maple Mono** | 100–800 (variable) | yes (CN build) | rounded, **warm** | the warm default |
| **JetBrains Mono** | Thin–ExtraBold + italics | no | neutral-technical | the technical alt |
| **Geist Mono** | 100–900 (variable) | no | clean, minimal (Vercel) | the minimal alt |

The owner leans heavier (medium / bold) and warm → **Maple Mono** is the recommended
default; **JetBrains Mono** for a neutral-technical register; **Geist Mono** for
Vercel-grade minimalism. Maple's CN build (Resource Han Rounded) carries full CJK
including Japanese at 2:1 width — the only one of the three with 日本語.

## Ligatures
On by default where shipped; offer the no-ligature build (`Maple Mono NL`,
`JetBrains Mono NL`) for editors without OpenType. In VS Code: `editor.fontLigatures`.
Maple exposes `cv*` / `ss*` stylistic features frozen at build time.

## Licensing — what ships vs what only inspires
- **Ships (OFL 1.1):** Maple Mono · JetBrains Mono · Geist Mono · Shippori Mincho ·
  Noto Serif JP.
- **Reference only (proprietary):** Galaxie *Copernicus* & *Styrene B* (the fonts of
  Claude / Anthropic — a warm serif display over a humanist sans). Free stand-ins:
  **Inter** for Styrene, a **warm serif / Noto Serif JP** for Copernicus.

## Rules
1. Serif for display, mono for data — never a mono headline or a serif table.
2. Spaced capitals are a *mark*, not body text (see [`../lexicon/space.md`](../lexicon/space.md)).
3. One display weight, one body weight, one or two mono weights — no font zoo.
