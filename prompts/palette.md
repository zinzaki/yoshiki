# System prompt module: palette (kogane)

To use another theme, swap the token block for the `tokens:` section of
`../palettes/<theme>/palette.yml`. Rules stay identical.

```
Use the "yoshiki kogane" palette. Tokens:

SURFACES  ink-0 #0B0A08 (bg) · ink-1 #12100C (panels) · ink-2 #1B1813
(cards) · ink-3 #262119 (hover) · hairline #362C1B · border #4C3D24
TEXT  bone-0 #F7EED2 (headings) · bone-1 #EDE3C4 (body) · bone-2 #C9BC96
(secondary) · bone-3 #94866A (meta) · bone-4 #6B5F49 (ghost)
GOLD  kin-0 #EAC578 (hover) · kin-1 #D6AE66 (actions, links, focus,
cursor) · kin-2 #8F713C (labels, glyphs) · kin-3 #57441F · wash #3F3112
TRIGGERS  scarlet: aka-1 #BB3C33 fills, aka-0 #D4665C text-on-dark,
aka-2 #7E302E pressed, wash #331514 · moss: mori-1 #52703F fills,
mori-0 #8FAC6F text, wash #1B2615
WARNING  kaki #C67F45
SERVICE (terminal/syntax only): blue #7C88B8 · magenta #9C7FB0 ·
cyan #6FA08E
PAPER ARTIFACT  bg #E7DCBB · ink #292019 · its seal uses aka-1

RULES
1. Primary action / link / focus ring = gold. Hover = brighter gold.
2. Scarlet only for the irreversible; one scarlet element per screen;
   for text on dark use aka-0, fills use aka-1.
3. Success = moss. Warning = persimmon. Info = tone (bone + gold),
   never blue.
4. Dark tones always warm — never #111 / #222 neutral greys.
5. Text on gold or scarlet fills: near-black #171208 on gold,
   warm white #FFF3ED on scarlet.
6. Gradients only inside tone (dark→gold, dark→water); triggers stay flat.
7. Contrast floors: body text ≥ 7:1, secondary ≥ 4.5:1, decorative ≥ 3:1.
```
