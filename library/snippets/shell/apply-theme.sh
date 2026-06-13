#!/usr/bin/env bash
# ╔══════════════════════════════════════════════════════════╗
# ║  APPLY-THEME — link one yoshiki theme into a program       ║
# ╚══════════════════════════════════════════════════════════╝
set -euo pipefail

THEME="${1:?usage: apply-theme.sh <kogane|washi> <app>}"   # ← no default: refuse to guess
APP="${2:?}"
ROOT="$(git rev-parse --show-toplevel)"   # → repo root, wherever called from

src="$ROOT/library/themes/$APP/$THEME"    # ◉ themes are generated; never hand-edited
[[ -e "$src".* ]] || { echo "✗ no theme: $APP/$THEME" >&2; exit 1; }

# ↺ safe to rerun: we relink, never append
ln -sf "$src".* "$XDG_CONFIG_HOME/$APP/"
echo "✓ linked $APP ← $THEME"
