# Treatments — how much ornament a surface wears

A treatment switches layers on and off without changing objects or roles. Both themes of a palette
must show the same layers; only luminance differs.

| id | layers |
|---|---|
| `yk:tr/clean` | glass and glow only — the default |
| `yk:tr/ornate` | clean + `pattern.cross` ground, corner brackets on panels, control hints (`○ Select  × Back`) |

In CSS a treatment is `data-treatment="clean|ornate"` on the root; in Slint a `treatment` property on
the tokens global. New treatments are added by vote.
