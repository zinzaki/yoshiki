# How references are mined

The owner's rule (2026-09-19): take each image apart and **list every distinguishable component** —
a toggle here, a progress bar there, a menu, a list, a card, a chart, a frame, a control, a texture,
a type treatment, a layout scheme. Interface objects and design elements alike. Extract as much as
possible; filtering happens afterwards, by him.

A one-line summary per image is not enough. Ten small parts named precisely beat one clever
paragraph.

## What counts as a component

| kind | examples |
|---|---|
| `object` | button, toggle, slider, fader, menu row, tab bar, search field, badge, chip, card, table row, dialog, tooltip, window chrome, player controls, stepper, breadcrumb, avatar stack |
| `pattern` | a whole screen or block: hero, pricing, dashboard, settings page, onboarding step, empty state, gallery grid |
| `layout` | how content is divided: column schemes, bento grids, arch cut-outs, split screens, diagonal fields, an editorial grid drawn as geometric shapes |
| `material` | glass, paper, lacquer, relief, grain, halftone, dither, gradient mesh, metal, fabric |
| `effect` | glow, blur, scanline, dissolve, particle field, x-ray, shadow rules |
| `motion` | what appears to move and how: assembly, parallax, stagger, marquee |
| `type` | pairings, weights, treatments: stacked display, vertical column, tracked-out caps, numerals, script accents |
| `icon` | an icon system: stroke, filled, isometric, glyph set |
| `chart` | sparkline, gauge, ring, bar, plot, map, meter |
| `copy` | a line of interface writing worth keeping: a status phrase, a label, a control hint |

## Entry format

One block per component, several per image:

```
- ref: yk:ref/0042
  kind: object
  name: segmented-toggle-pill
  what: three-way switch inside a pill; the active cell is a filled capsule with the ground colour
  build: 3px inner padding · 7px radius on cells, 99px on the shell · active cell carries a 1px inner
         ring · labels 13px medium · inactive label at 60% opacity
  zone: graphic
  use: view switchers in dashboards; density or theme switches
  style: soft product UI
  notable: true          # only for the strongest pieces
```

- `ref` — the image id (the file name in the numbered folder is the same number).
- `build` — enough detail that the piece can be rebuilt without the picture: geometry, layers,
  states, spacing, type, how colour is used (by role: ground, panel, text, accent, signal).
- `style` — the stylistic register it belongs to (e.g. swiss editorial, HUD technical, soft relief,
  NieR menu, print halftone, brutalist mono, lo-fi warm, glass product UI). The repository is a
  **library of many styles**; registers are never blended inside one design, so naming the register
  is what makes a piece reusable.
- Skip nothing because it looks ordinary. A plain list row, a divider, a caption style all count.
- Do not copy a reference; describe it so something new can be built from it.

## Output

`workshop/refs/extract/parts-NN.md` — one file per batch of images, the blocks above in order of id,
then a short closing list: the stylistic registers seen in the batch and which ids belong to each.
