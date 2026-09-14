# Materials — what surfaces are made of

Graphic zone only. A material is a composite: `blur`, `tint`, `tint-opacity`, `noise`, `border`,
`border-opacity`, `glow`, `glow-spread` and a required **fallback** — a solid surface used under
`prefers-reduced-transparency`, `prefers-contrast: more` and on weak hardware. Colours come from
roles, never from values, so a material works in every palette.

Each material lives in `<name>/manifest.yml` (id `yk:mat/<name>`) with its spec and preview.

Starting set, from the voting rounds (rough first, refined by votes):

| id | what it is |
|---|---|
| `yk:mat/glass.frost` | frosted glass rows and panels over the ground — the default surface |
| `yk:mat/glass.clear` | thin clear glass for overlays and hints |
| `yk:mat/paper` | matte paper ground, light palettes |
| `yk:mat/lacquer` | deep lacquer ground, dark palettes |
| `yk:mat/grain` | film grain over any ground |
| `yk:mat/glow.warm` | large soft glow behind content, colour from `glow` |
| `yk:mat/pattern.cross` | faint `+` grid — the ornate treatment's ground |
| `yk:mat/pattern.dots` | dot matrix |
| `yk:mat/hud.lines` | thin HUD guide lines and coordinates |
| `yk:mat/seal` | a single red seal mark |

The glass, grain and glow specs written for v1 are in `canon/effects/` until they move here.
