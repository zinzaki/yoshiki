# Light — where it comes from and how much of it there is

Status: draft. Graphic zone. Workshop round 01: the light budget is an **option**, not a rule —
use it where it serves the design.

## Budget

Colour is budgeted (almost all ground, a constant accent, a rare signal). Light is budgeted too:

- **One light source per view** (a recommended option). A single glow (`yk:mat/glow.warm` or `yk:mat/glow.ember`) sits behind
  or below the thing that matters. Two glows compete and both go flat.
- The glow takes its colour from the `glow` role; strength 16–34 % on dark grounds, 10–22 % on light.
- The light stays put while content scrolls; it moves only as a deliberate, orchestrated moment.

## Placement

| where | when |
|---|---|
| behind the hero object, upper-right third | landing and hub first screens |
| under the active item (ember) | a lit layer, the running step, the playing track |
| behind glass panels | menus and dialogs over a photograph |

## Surfaces under light

- **Specular edge** on glass: a 1 px inner top highlight,
  `inset 0 1px 0 color-mix(in srgb, white 8%, transparent)`.
- **Grain** over large glows (`yk:mat/grain`, 12–18 % overlay) so gradients never band.
- **Relief** (`yk:mat/relief.soft`) assumes light from the upper-left on light palettes only.

## Accessibility

Glows and grain are decorative: text contrast is measured without them, and both are removed under
`prefers-contrast: more`. Moving light is replaced by a static one under `prefers-reduced-motion`.
