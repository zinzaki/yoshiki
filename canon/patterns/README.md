# Patterns — objects composed into screens, blocks and scenes

A pattern is a composition of objects, materials and roles that solves one real task: an installer
step, a settings page, a pricing block, a TUI dashboard. Each lives in
`graphic/<name>/` or `text/<name>/` with a `manifest.yml` (id `yk:pat/<zone>/<name>`), previews,
a `prompt.md` that reproduces it, and its source files.

Patterns are the gallery. The build indexes every manifest into `registry.json` (shadcn-compatible,
so `npx shadcn add` can install web patterns) and into the site's gallery data.

First shelves, chosen for the projects that need them now:

- **installer** — exet-os setup: steps, disk partitions, user, progress
- **settings** — appearance, devices, accounts
- **file-manager** — Slint desktop: sidebar, grid, preview, context menu
- **console** — web app: dashboard, tables, logs, command palette
- **landing** — marketing and hub sections
- **docs** — documentation and code
- **terminal** — prompt, build output, TUI dashboards, pickers (text zone)
- **chat** — bot messages and image cards (text zone)
