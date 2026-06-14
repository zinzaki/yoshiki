// ╭────────────────────────────────────────╮
// │ ┌╴ spinner · braille loading frames    │
// ╰────────────────────────────────────────╯
package motion

// frames cycle at Tempo; one role-color for all dots
var Frames = []rune{'⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'}

const Tempo = 90 // ms  ← lively; below this reads as a blur, above as lag

// Next wraps forever — ↺ pure, no state of its own
func Next(i int) string { return string(Frames[i%len(Frames)]) }

// → resolve on done: drop the spinner, print a single moss ✓
