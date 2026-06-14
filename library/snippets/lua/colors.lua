-- ╭─ colors ─ map the yoshiki palette onto highlights ───
-- │  values come from canon/palette — generated, not hand-edited
-- ╰╴
local p = require("yoshiki.palette")   -- ← generated; do not edit by hand
local hl = vim.api.nvim_set_hl

-- ── tone — the stage and the voice ──
hl(0, "Normal",  { fg = p.bone1, bg = p.ink0 })
hl(0, "Comment", { fg = p.bone4, italic = true })   -- ghost, quiet on purpose

-- ── syntax — gold acts, moss lives ──
hl(0, "Keyword", { fg = p.kin1 })       -- gold
hl(0, "String",  { fg = p.mori0 })      -- moss
hl(0, "Number",  { fg = p.kaki1 })      -- persimmon
hl(0, "Error",   { fg = p.aka0 })       -- ⚠ scarlet only on a real error

-- ↺ reload with :colorscheme yoshiki
