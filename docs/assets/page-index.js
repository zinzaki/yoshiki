/* ════════════════════════════════════════════════════════════════════
   page-index.js — what the front page draws from canon, plus the stage
   the live specimen · the running figures · the density band · the glance
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {Y, onTheme, esc} = window.YS;
  if (!Y.themes) return;
  const $ = id => document.getElementById(id);

  /* ── the stage — the first screen is an object, not a picture ──────
     Two independent axes: which specimen is on the plate, and which theme
     the plate wears. The theme is set on the PLATE, not on the document, so
     you can put the specimen on paper while the page stays lacquer. That is
     the whole "only the stage changes" claim, made checkable in one click.
     The tablist itself is the kit's — it moves the panels and the focus;
     all the page adds is the line that says what you are looking at. */
  const plate = $('stagePlate'), note = $('stageNote');
  if (plate && note) {
    const panes = [...plate.querySelectorAll('.stage__pane')];
    const shown = () => panes.find(p => !p.hidden);

    function sync(){
      const p = shown();
      if (!p) return;
      note.innerHTML = p.dataset.note || '';
      /* an entrance animation only runs on a fresh node: restart it by hand */
      p.style.animation = 'none'; void p.offsetWidth; p.style.animation = '';
    }
    $('stageWhat').addEventListener('y-change', sync);
    $('stageWhat').addEventListener('click', sync);

    $('stageTheme').addEventListener('click', e => {
      const b = e.target.closest('button[data-stage-theme]');
      if (b) plate.dataset.theme = b.dataset.stageTheme;
    });

    note.innerHTML = (shown() || panes[0]).dataset.note || '';
  }

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

  /* ── the palette at a glance ────────────────────────────────────────
     Not every family: the front page shows the budget, not the inventory.
     The quiet four that carry a screen, then the three that are spent on
     events — shown at half the height, because that is the claim. Roles,
     on-fill pairs and the service hues live on the palette page, where a
     reader has asked for them. A front page that prints all ten families
     side by side is a swatch dump, and it reads as a rainbow. */
  const GLANCE = [
    ['the quiet ninety per cent', ['surface', 'line', 'bone', 'kin'], 74, ''],
    /* the event families are drawn short as well as shallow: rarity is an
       area claim, and a full-width band of scarlet contradicts the sentence
       printed right above it */
    ['spent only on events', ['kaki', 'aka', 'mori'], 46, ' glance-band--rare']
  ];
  const glance = $('glance');
  function drawGlance(slug){
    if (!glance) return;
    const tok = Y.themes[slug].tokens;
    const byKey = Object.fromEntries(Y.groups.map(g => [g.key, g]));
    glance.innerHTML = GLANCE.map(([band, keys, h, mod]) => `
      <div class="glance-band${mod}">
        <div class="glance-band__head">${esc(band)}</div>
        ${keys.map(k => {
          const g = byKey[k];
          if (!g) return '';
          const steps = g.steps.filter(s => tok[s.token]);
          if (!steps.length) return '';
          return `
            <div class="glance-fam">
              <div class="glance-fam__name" title="${esc(g.note)}">${esc(g.label)}</div>
              <div style="min-width:0">
                <div class="ramp">
                  ${steps.map(s => `
                    <button class="ramp__step" style="background:${esc(tok[s.token])};height:${h}px"
                            data-copy="${esc(tok[s.token])}" title="${esc(s.token)} — ${esc(s.job)}">
                      <span class="ramp__hex">${esc(tok[s.token])}</span>
                    </button>`).join('')}
                </div>
                <div class="glance-fam__note">${esc(g.note)}</div>
              </div>
            </div>`;
        }).join('')}
      </div>`).join('');
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
    ['frames', 'twelve ways to draw an edge, and when each is wrong'],
    ['menus', '22 TUI patterns — pickers, forms, panels, logs, dashboards'],
    ['loaders', 'every way to say "working" — spinners, bars, stages'],
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
