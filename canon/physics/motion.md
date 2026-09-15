# Motion — how things arrive, answer and leave

Status: draft. Graphic zone (character animation for terminals lives in `canon/objects/text/motion/`).

## Principles

1. **One orchestrated moment per page** (a boot sequence, an assembly, a reveal). Everything else moves
   only in answer to the person.
2. **Motion shows what changed**: opening grows from its trigger, a selection edge slides to the new
   row, a removed item collapses its space.
3. **Content is visible at rest.** Nothing waits at `opacity: 0` for a scroll observer.

## Tokens

| token | value | for |
|---|---|---|
| `motion.duration.instant` | 90 ms | press, toggle knob |
| `motion.duration.quick` | 160 ms | hover, focus, selection edge |
| `motion.duration.base` | 240 ms | menus, popovers, tabs |
| `motion.duration.slow` | 420 ms | dialogs, drawers, page sections |
| `motion.duration.moment` | 900–1600 ms | the one orchestrated moment |
| `motion.ease.standard` | `cubic-bezier(.2, .8, .2, 1)` | most transitions |
| `motion.ease.emphasized` | `cubic-bezier(.16, 1, .3, 1)` | arrivals that should feel settled |
| `motion.ease.exit` | `cubic-bezier(.4, 0, 1, 1)` | leaving, always faster than arriving |
| `motion.distance.rise` | 8 px | enter from below |

## Choreography

- Enter: fade + rise 8 px, `base`, `emphasized`. Exit: fade only, 70 % of the enter duration, `exit`.
- Lists stagger by 24 ms per item, capped at 6 items.
- Glass panels blur in from 0 to their blur over `base` — never animate blur on scroll.

## Reduced motion

| motion | replacement |
|---|---|
| rise, slide, scale | cross-fade, `quick` |
| orchestrated moment | its final frame, shown at once |
| moving light, particles | static light, static composition |
| loaders | a static progress value or a single pulsing opacity (1.2 s) |
