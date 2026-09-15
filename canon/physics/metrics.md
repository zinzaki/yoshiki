# Metrics — space, radius, density, layout

Status: draft. Graphic zone. (The physics README lists `space`, `radius`, `density` and `layout` as
separate files; while rough they live together here.)

## Space

Base 4 px. Scale: `space.1` 2 · `space.2` 4 · `space.3` 8 · `space.4` 12 · `space.5` 16 · `space.6` 24 ·
`space.7` 32 · `space.8` 48 · `space.9` 64 · `space.10` 96.

- Inside a control: 8–12. Between related controls: 8. Between groups: 24. Between page sections: 64–96.
- Siblings are spaced by the parent (`gap`), never by margins on children.

## Radius

| token | value | objects |
|---|---|---|
| `radius.sm` | 6 px | chips, key caps, inputs in dense tables |
| `radius.md` | 10 px | buttons, inputs, rows, cards |
| `radius.lg` | 14 px | panels, menus, dialogs, windows |
| `radius.pill` | 999 px | tags, toggles, segmented controls |
| `radius.arch` | full semicircle on one side | editorial photo frames (`yk:pat/graphic/arch-collage`) |

A nested radius is the outer radius minus the padding between them.

## Density

| mode | row height web | row height desktop (Slint) | control padding |
|---|---|---|---|
| comfortable | 40 px | 36 px | 10 × 14 |
| compact | 32 px | 28 px | 6 × 10 |

A tiling window narrower than 720 px switches to compact and collapses the sidebar to a rail.

## Layout

- **Web**: 12 columns; gutters 16 (< 768), 24 (< 1280), 32 above; content max 1400 px; reading width
  ≤ 72 characters. Breakpoints 480 · 768 · 1024 · 1440.
- **Desktop**: sidebar 240 px (rail 56 px), toolbar 48 px, status bar 28 px, minimum window 960 × 600,
  panes resize in 8 px steps.
- **Side gutter** is never below 16 px at any width.
