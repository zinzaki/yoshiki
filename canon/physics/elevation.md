# Elevation — how far a surface is from the ground

Status: draft. Graphic zone.

Depth is told by **tone and material**, not by shadow. Each step up is one role lighter on dark palettes
(one role closer to the panel colour on light palettes) and, from level 2, a glass material.

| level | role | material | used for |
|---|---|---|---|
| 0 | `bg.app` | ground (`paper`, `lacquer`, photograph) | the window or page |
| 1 | `bg.surface` | solid | sidebars, sections, cards resting on the ground |
| 2 | `bg.raised` | `glass.frost` | panels over content, menus, toolbars |
| 3 | `bg.raised` + `border.hairline` | `glass.frost` + specular edge | popovers, command palette |
| 4 | `bg.raised` + scrim below | `glass.frost` + floating shadow | dialogs, sheets |
| hover | `bg.hover` | same material as its level | pointer or keyboard on it |

Rules:

1. **A shadow only for level 4** — something floating above a scrim:
   `0 24px 60px -24px color-mix(in srgb, black 55%, transparent)`.
2. **Never two glass layers stacked without a solid between them** (glass on glass muddies both).
3. **Selection is an edge, not a lift**: a selected row stays at its level and gains `accent.edge`
   and `accent.tint`.
4. Light palettes invert the ladder visually (panels are lighter than the ground), the roles stay
   the same, so objects never branch on the palette.
