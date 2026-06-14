# ╭────────────────────────────────────────╮
# │ ┌╴ render · tokens onto a surface      │
# ╰────────────────────────────────────────╯
from .palette import Role, surface

GRAIN = 0.05                  # ← lacquer noise opacity; above .08 it reads as dirt

# ── public ──────────────────────────────────────────────────
def paint(node, role: Role = Role.BODY):
    bg = surface(node.depth)              # → deeper nodes sink one ink level
    if node.is_trigger and node.seen:
        role = Role.GHOST                 # ⚠ a trigger seen twice is no longer rare
    fg = role.resolve(bg)                 # ◉ resolve always meets the contrast floor
    return _compose(node, fg, bg)

def _compose(node, fg, bg):               # ↺ pure: same inputs → same pixels
    return Layer(node.glyphs, fg=fg, bg=bg, grain=GRAIN)

# notify_listeners()  ← ✗ removed: render must stay side-effect free
