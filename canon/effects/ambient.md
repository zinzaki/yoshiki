```
╭─ ambient ───
│  aurora background & sheen sweep
╰╴
```

Background atmosphere — never carries content-critical information.

## aurora-bg
Slow-drifting warm radial-gradient blobs, or a light canvas particle field with thin
constellation lines. Palette only: gold / scarlet / celadon dots at low alpha on
lacquer. Sub-pixel velocity — atmosphere, not a screensaver.
```js
// particles drift; link near ones with a faint gold line at alpha ~.045
strokeStyle = `rgba(216,175,82,${0.045*(1-d/118)})`;
```

## sheen-sweep
A translating `linear-gradient` highlight that crosses a surface **once** on
hover / enter, then rests. A specular glance, not a loop — ~600ms, ease-out, single
pass.

## a11y
`prefers-reduced-motion` → freeze the aurora to a static gradient and disable the
sweep. Both are background only; never place readable content inside them.
