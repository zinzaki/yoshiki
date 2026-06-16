```
╭─ github ───
│  profile & README styling — the calm GitHub face
╰╴
```

> Apply yoshiki to a GitHub README or profile. GitHub renders Markdown + a SAFE
> subset of HTML (no CSS, no `<style>`, no scripts, no custom fonts) — so the style
> comes from layout, a theme-aware banner, restrained badges and spaced caps.
> Calm over flashy.

## What renders
- HTML: `<p align="center">`, `<img>`, `<picture>`, `<a>`, `<table>`, `<details>`, `<sub>`, `<br>`
- theme-aware images: a `<picture>` with `prefers-color-scheme` (kogane dark / washi
  light), or the URL hack `img.png#gh-dark-mode-only` / `#gh-light-mode-only`
- shields.io badges with custom hex colors
- NOT: `<style>` / CSS classes, scripts, custom fonts, shadows

## Header — a theme-aware banner + a nameplate
```html
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="docs/banner-washi.png">
    <img alt="様式 yoshiki" src="docs/banner.png" width="900">
  </picture>
</p>
<h1 align="center">様式&nbsp; Y O S H I K I</h1>
<p align="center"><i>warm monochrome, struck rarely by color</i></p>
```

## Badges — yoshiki-colored, flat (calm), one scarlet at most
Use `style=flat` (calm), never `for-the-badge` walls. Gold on lacquer is the
default; spend scarlet once.
```
![](https://img.shields.io/badge/様式-yoshiki-D8AF52?style=flat&labelColor=0B0A08)
![](https://img.shields.io/badge/theme-kogane_·_washi-D8AF52?style=flat&labelColor=0B0A08)
![](https://img.shields.io/badge/license-MIT-52703F?style=flat&labelColor=0B0A08)
![](https://img.shields.io/badge/status-active-d8392e?style=flat&labelColor=0B0A08)
```
palette → gold `D8AF52` · lacquer `0B0A08` (labelColor) · bone `EDE3C4` ·
moss `52703F` · scarlet `d8392e` (the one accent).

## Dividers & sections
A centered seam renders fine; keep one heavy rule per page.
```html
<p align="center">─────────────  ◆  ─────────────</p>
```
Lead a section with a single `◆` or `⧉`, never an emoji row.

## Rules
1. Calm over flashy — no badge walls, no GIF confetti, no emoji rows.
2. One accent: gold throughout, scarlet once (the "active" / signature badge).
3. Center the header, left-align the prose; air around every block.
4. A theme-aware banner so the page is warm in both GitHub modes.
5. Ready skeleton to copy: [`profile.md`](profile.md).
