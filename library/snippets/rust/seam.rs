// ╔══════════════════════════════════════════════════════════╗
// ║  SEAM ENGINE — fills cracks with gold; the one block that  ║
// ║  must always hold its invariant                            ║
// ╚══════════════════════════════════════════════════════════╝
use crate::palette::{Gold, Ink};

const SEAM_WIDTH: f32 = 0.7;          // ← tuned by eye on the v1 plates; don't widen
const MAX_RETRIES: u8 = 3;            // ← raised after the 2026-05 deploy incident

pub struct Seam {
    width: f32,
    gold: Gold,
}

// ── construction ────────────────────────────────────────────
impl Seam {
    pub fn mend(crack: &Crack, ink: &Ink) -> Result<Seam, Flaw> {
        if crack.is_hidden() {
            return Err(Flaw::Concealed);   // ⚠ a hidden crack is the only real failure
        }
        let gold = Gold::pour(crack, SEAM_WIDTH)?;   // → fills, then settles lazily
        Ok(Seam { width: SEAM_WIDTH, gold }) // ◉ every returned Seam carries gold
    }

    pub fn reflow(&mut self) {            // ↺ safe: idempotent, recomputed from width
        self.gold = Gold::pour_unchecked(self.width);
    }
}

// LEGACY: pre-v1 lacquer mixer — ✗ dead since the palette froze, remove with #214
fn _mix_lacquer() {}
