/* ════════════════════════════════════════════════════════════════════
   page-index.js — the three blocks the index draws from canon
   facts · the density ratio · the palette at a glance
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {Y, onTheme, esc} = window.YS;
  if (!Y.themes) return;

  /* ── facts, counted from the data rather than claimed in prose ── */
  const kogane = Y.themes[Y.order[0]];
  const tokenCount = new Set(Y.order.flatMap(s => Object.keys(Y.themes[s].tokens))).size;
  const roleCount = Object.keys(kogane.roles).length;
  const proofCells = Y.order.reduce((n, s) => {
    const p = Y.themes[s].proof;
    return n + p.matrix.length * Object.keys(p.surfaces).length
             + p.edges.length * Object.keys(p.surfaces).length
             + p.syntax.length + p.wash.length + p.ansi.length;
  }, 0);

  const FACTS = [
    ['13', 'program themes', 'kitty to fzf — all generated'],
    [String(tokenCount), 'raw tokens', 'grouped, each with a stated job'],
    [String(roleCount), 'semantic roles', 'the contract you actually consume'],
    [String(proofCells), 'contrast checks', 'run on every build, enforced']
  ];
  const facts = document.getElementById('facts');
  if (facts) facts.innerHTML = FACTS.map(([v, label, note]) => `
    <div class="y-stat">
      <div class="y-stat__label">${esc(label)}</div>
      <div class="y-stat__value">${esc(v)}</div>
      <div class="y-stat__delta">${esc(note)}</div>
    </div>`).join('');

  /* ── the density budget, drawn in the tokens it describes ── */
  const RATIO = [
    ['70', 'tone', 'var(--r-bg-raised)', 'var(--r-text-muted)'],
    ['20', 'bone', 'var(--bone-2)', 'var(--ink-0)'],
    ['7', 'gold', 'var(--kin-1)', 'var(--ink-0)'],
    ['3', '', 'var(--r-danger-fill)', 'var(--r-danger-on-fill)']
  ];
  const ratio = document.getElementById('ratio');
  if (ratio) ratio.innerHTML = RATIO.map(([w, label, bg, fg]) => `
    <div style="width:${w}%;background:${bg};color:${fg};display:flex;align-items:center;
                padding:0 12px;font-family:var(--y-mono);font-size:11px;white-space:nowrap;overflow:hidden">
      ${esc(w)}${label ? ' · ' + esc(label) : ''}
    </div>`).join('');

  /* ── the palette at a glance — the group map, live in the current theme ── */
  const glance = document.getElementById('glance');
  function drawGlance(slug){
    if (!glance) return;
    const tok = Y.themes[slug].tokens;
    glance.innerHTML = Y.groups.map(g => {
      const steps = g.steps.filter(s => tok[s.token]);
      if (!steps.length) return '';
      const chips = steps.map(s => `
        <button class="swatch" data-copy="${esc(tok[s.token])}" style="flex:1;min-width:0"
                title="${esc(s.token)} — ${esc(s.job)}">
          <span class="swatch__chip" style="background:${esc(tok[s.token])};height:44px"></span>
          <span class="swatch__v" style="margin-top:7px">${esc(s.token)}</span>
        </button>`).join('');
      return `
        <div class="glance-row">
          <div>
            <div style="font-family:var(--y-mono);font-size:13px;color:var(--r-text-body)">${esc(g.label)}</div>
            <div style="font-size:11.5px;color:var(--r-text-muted);line-height:1.6;margin-top:4px">${esc(g.note)}</div>
          </div>
          <div style="display:flex;gap:6px;min-width:0">${chips}</div>
        </div>`;
    }).join('');
  }
  onTheme(drawGlance);
})();
