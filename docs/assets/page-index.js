/* ════════════════════════════════════════════════════════════════════
   page-index.js — the three blocks the front page draws from canon
   the running figures · the density band · the palette at a glance
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {Y, onTheme, esc} = window.YS;
  if (!Y.themes) return;
  const $ = id => document.getElementById(id);

  /* ── figures, counted from the data rather than claimed in prose ── */
  const base = Y.themes[Y.order[0]];
  const tokenCount = new Set(Y.order.flatMap(s => Object.keys(Y.themes[s].tokens))).size;
  const roleCount = Object.keys(base.roles).length;
  const checks = Y.order.reduce((n, s) => {
    const p = Y.themes[s].proof, surfaces = Object.keys(p.surfaces).length;
    return n + (p.matrix.length + p.edges.length) * surfaces
             + p.syntax.length + p.wash.length + p.ansi.length;
  }, 0);

  const FACTS = [
    ['13', 'generated themes', 'kitty to fzf, from one file'],
    [String(tokenCount), 'raw tokens', 'each with a stated job'],
    [String(roleCount), 'semantic roles', 'the contract you consume'],
    [String(checks), 'contrast checks', 'enforced on every build']
  ];
  const facts = $('facts');
  if (facts) facts.innerHTML = FACTS.map(([n, l, d]) =>
    `<div><div class="n">${esc(n)}</div><div class="l">${esc(l)}</div><div class="d">${esc(d)}</div></div>`
  ).join('');

  /* ── the density budget, drawn in the tokens it describes ── */
  const RATIO = [
    ['70', 'tone', 'var(--r-bg-raised)'],
    ['20', 'bone', 'var(--bone-2)'],
    ['7', 'gold', 'var(--kin-1)'],
    ['3', 'trigger', 'var(--r-danger-fill)']
  ];
  const ratio = $('ratio');
  if (ratio) ratio.innerHTML =
    `<div style="display:flex;height:64px;border-radius:12px;overflow:hidden;
          border:1px solid var(--r-border-hairline)">` +
    RATIO.map(([w, label, bg]) =>
      `<div style="width:${w}%;background:${bg}" role="img"
            aria-label="${esc(w)} percent ${esc(label)}"></div>`).join('') +
    /* the labels sit under the bands, on the page ground: a label printed on a
       band has to fight whatever colour that band happens to be */
    `</div><div style="display:flex;margin-top:10px">` +
    RATIO.map(([w, label]) =>
      `<div style="width:${w}%;font-family:var(--y-mono);font-size:11px;
            color:var(--r-text-muted);white-space:nowrap;overflow:hidden">${esc(w)} · ${esc(label)}</div>`
    ).join('') + `</div>`;

  /* ── the palette at a glance — the group map, live in the current theme ── */
  const glance = $('glance');
  function drawGlance(slug){
    if (!glance) return;
    const tok = Y.themes[slug].tokens;
    glance.innerHTML = Y.groups.map(g => {
      const steps = g.steps.filter(s => tok[s.token]);
      if (!steps.length) return '';
      return `
        <div class="glance-row">
          <div>
            <div style="font-family:var(--y-mono);font-size:13px;color:var(--r-text-body)">${esc(g.label)}</div>
            <div style="font-size:11.5px;color:var(--r-text-muted);line-height:1.6;margin-top:5px">${esc(g.note)}</div>
          </div>
          <div style="display:flex;gap:6px;min-width:0">
            ${steps.map(s => `
              <button class="swatch" data-copy="${esc(tok[s.token])}" style="flex:1;min-width:0"
                      title="${esc(s.token)} — ${esc(s.job)}">
                <span class="swatch__chip" style="background:${esc(tok[s.token])};height:44px"></span>
                <span class="swatch__v" style="margin-top:7px">${esc(s.token)}</span>
              </button>`).join('')}
          </div>
        </div>`;
    }).join('');
  }
  onTheme(drawGlance);

  /* ── the map — every module, with the one line that says why it exists ── */
  const REPO = 'https://github.com/zinzaki/yoshiki/tree/main/';
  const CANON = [
    ['principles', 'the ordered ladder — what wins when nothing is specified'],
    ['palette', 'tokens, the roles contract, and the proof'],
    ['components', 'the anatomy of a control, part by part'],
    ['lexicon', 'glyphs, frames, space, states — the form apart from colour'],
    ['motion', 'spinners and progress drawn with sub-symbols'],
    ['effects', 'glass, grain, pointer, ambient — web surfaces only'],
    ['typography', 'a warm serif to speak, a mono to count'],
    ['prompts', 'drop-in modules that teach the language to a model']
  ];
  const LIB = [
    ['web', 'the drop-in kit — two plain CSS files'],
    ['themes', 'thirteen programs, generated from one palette'],
    ['menus', 'ready TUI menus, cards, panels, status lines'],
    ['charts', 'text data-viz — sparkline, bars, gauge'],
    ['text', 'nameplates, banners, dividers, glyph sets'],
    ['snippets', 'how to write code in the style, per language'],
    ['configs', 'whole example configs — kitty, tmux, starship'],
    ['presets', 'named kits, assembled'],
    ['effects', 'the web effects as working files'],
    ['image-prompts', 'recipes for generating images in the language'],
    ['github', 'a README and profile wearing it']
  ];
  const card = base_ => ([name, note]) => `
    <a class="plate" href="${REPO}${base_}/${name}" style="padding:var(--y-4);display:block">
      <div style="font-family:var(--y-mono);font-size:13px;color:var(--r-text-heading)">${esc(name)}</div>
      <div style="font-size:11.5px;color:var(--r-text-muted);line-height:1.6;margin-top:7px">${esc(note)}</div>
    </a>`;
  if ($('mapCanon')) $('mapCanon').innerHTML = CANON.map(card('canon')).join('');
  if ($('mapLib')) $('mapLib').innerHTML = LIB.map(card('library')).join('');
})();
