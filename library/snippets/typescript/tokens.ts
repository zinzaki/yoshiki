// ╔══════════════════════════════════════════════╗
// ║  TOKENS                                       ║
// ║  the palette as typed values — roles, not raw ║
// ╚══════════════════════════════════════════════╝
export const tone = {
  ink0:  "#0B0A08",   // ← background; never a neutral grey
  bone1: "#EDE3C4",   // body text
  kin1:  "#D8AF52",   // gold — edges only, never a fill
} as const;

export type Role = "primary" | "danger" | "ok";   // ◉ consume a role, not a hex

// ── role → token (the contract; both themes resolve it safely) ──
export const role: Record<Role, string> = {
  primary: tone.kin1,
  danger:  "#d8392e",   // scarlet — the irreversible
  ok:      "#52703F",   // moss
};

// hexMap()  ← ✗ removed: pass a Role, the theme decides the hex
