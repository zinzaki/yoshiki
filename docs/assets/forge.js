/* ════════════════════════════════════════════════════════════════════
   forge.js — the palette, taken apart while you watch
   ────────────────────────────────────────────────────────────────────
   The repository's claim is that one file decides everything downstream,
   and that the contrast is proven rather than asserted. Both are easy to
   write and hard to believe. So: move the source, and watch the page,
   the generated theme files and the entire WCAG matrix move with it —
   including, when you push too far, the moment the proof starts failing.

   Transforms run in OKLab, not HSL. HSL's "lightness" is not lightness:
   rotating hue in it swings perceived brightness wildly, which would make
   the contrast readout meaningless — the one thing here that must be true.
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {Y, esc, onTheme, ratio, toast} = window.YS;
  if (!Y.themes || !document.getElementById('forge')) return;
  const $ = id => document.getElementById(id);
  const root = document.documentElement;

  /* ── colour space ──────────────────────────────────────────────── */
  const clamp01 = v => v < 0 ? 0 : v > 1 ? 1 : v;
  const toLin = c => c <= .04045 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4);
  const toSrgb = c => c <= .0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - .055;

  function hexToLab(hex){
    const n = parseInt(hex.slice(1), 16);
    const r = toLin(((n >> 16) & 255) / 255),
          g = toLin(((n >> 8) & 255) / 255),
          b = toLin((n & 255) / 255);
    const l = Math.cbrt(.4122214708*r + .5363325363*g + .0514459929*b);
    const m = Math.cbrt(.2119034982*r + .6806995451*g + .1073969566*b);
    const s = Math.cbrt(.0883024619*r + .2817188376*g + .6299787005*b);
    return [.2104542553*l + .7936177850*m - .0040720468*s,
            1.9779984951*l - 2.4285922050*m + .4505937099*s,
            .0259040371*l + .7827717662*m - .8086757660*s];
  }
  function labToHex(L, A, B){
    const l = Math.pow(L + .3963377774*A + .2158037573*B, 3);
    const m = Math.pow(L - .1055613458*A - .0638541728*B, 3);
    const s = Math.pow(L - .0894841775*A - 1.2914855480*B, 3);
    const r = toSrgb(clamp01(+4.0767416621*l - 3.3077115913*m + .2309699292*s));
    const g = toSrgb(clamp01(-1.2684380046*l + 2.6097574011*m - .3413193965*s));
    const b = toSrgb(clamp01(-.0041960863*l - .7034186147*m + 1.7076147010*s));
    const h = v => Math.round(clamp01(v) * 255).toString(16).padStart(2, '0');
    return ('#' + h(r) + h(g) + h(b)).toUpperCase();
  }

  /* ── the transform ─────────────────────────────────────────────── */
  const state = {hue: 0, chroma: 1, spread: 1};
  function shift(hex){
    if (!/^#[0-9a-f]{6}$/i.test(hex)) return hex;
    let [L, A, B] = hexToLab(hex);
    const c = Math.hypot(A, B) * state.chroma;
    const h = Math.atan2(B, A) + state.hue * Math.PI / 180;
    // spread pushes tone away from the middle: the same move a contrast
    // control makes, and the reason the proof can be broken from here
    L = clamp01(.5 + (L - .5) * state.spread);
    return labToHex(L, Math.cos(h) * c, Math.sin(h) * c);
  }
  function forged(slug){
    const src = Y.themes[slug].tokens, out = {};
    for (const k in src) out[k] = shift(src[k]);
    return out;
  }

  /* ── paint the live page with it ───────────────────────────────── */
  let painted = false;
  function paint(){
    const slug = root.dataset.theme;
    const tok = forged(slug);
    for (const k in tok) root.style.setProperty('--' + k, tok[k]);
    painted = true;
    return tok;
  }
  function unpaint(){
    if (!painted) return;
    const any = Y.themes[Y.order[0]].tokens;
    for (const k in any) root.style.removeProperty('--' + k);
    for (const k in Y.themes[Y.order[1]].tokens) root.style.removeProperty('--' + k);
    painted = false;
  }

  /* ── re-prove it, exactly the way the build does ───────────────── */
  function prove(slug, tok){
    const th = Y.themes[slug], rt = th.roleTokens, p = th.proof;
    const hexOf = role => tok[String(rt[role]).split('@')[0].trim()];
    const rows = [];
    let pass = 0, total = 0;
    const cell = (role, on, floor) => {
      const fg = hexOf(role), bg = hexOf(on);
      if (!fg || !bg) return;
      const r = ratio(fg, bg);
      total++; if (r >= floor) pass++; else rows.push({role, on, r: r.toFixed(2), floor});
    };
    p.matrix.concat(p.edges).forEach(row =>
      Object.keys(p.surfaces).forEach(s => cell(row.role, s, row.floor)));
    p.syntax.forEach(row => cell(row.role, 'bg.app', row.floor));
    p.wash.forEach(row => cell(row.role, row.on, row.floor));
    // the ANSI ramp is not role-based, so it is measured directly — the build
    // counts it, and a readout that quietly counted less would flatter itself
    const bg = shift(th.terminal.background);
    p.ansi.forEach(row => {
      const r = ratio(shift(row.hex), bg);
      total++;
      if (r >= row.floor) pass++;
      else rows.push({role: row.role, on: 'terminal', r: r.toFixed(2), floor: row.floor});
    });
    return {pass, total, rows};
  }

  /* ── what the build would write out ────────────────────────────── */
  const FILES = {
    'palette.css': tok => ':root {\n' +
      Object.entries(tok).map(([n, v]) => `  --${n}: ${v};`).join('\n') + '\n}',
    'kitty.conf': tok => {
      const a = Y.themes[Y.order[0]].terminal.ansi.map(shift);
      const br = Y.themes[Y.order[0]].terminal.brights.map(shift);
      return `# yoshiki — generated by tools/build.py\n` +
        `foreground ${tok['bone-1']}\nbackground ${tok['ink-0']}\ncursor ${tok['kin-1']}\n` +
        a.map((c, i) => `color${i} ${c}`).join('\n') + '\n' +
        br.map((c, i) => `color${i + 8} ${c}`).join('\n');
    },
    'starship.toml': tok =>
      `# yoshiki — generated by tools/build.py\n[palettes.yoshiki]\n` +
      [['bg','ink-0'],['surface','ink-2'],['line','line-0'],['bone','bone-1'],
       ['gold','kin-1'],['goldhi','kin-0'],['scarlet','aka-1'],['moss','mori-1'],
       ['persimmon','kaki-1']].map(([k, t]) => `${k} = "${tok[t]}"`).join('\n')
  };
  let file = 'palette.css';

  /* ── render ────────────────────────────────────────────────────── */
  function render(){
    const slug = root.dataset.theme;
    const tok = state.hue || state.chroma !== 1 || state.spread !== 1 ? paint() : (unpaint(), Y.themes[slug].tokens);
    const proof = prove(slug, tok);
    const broken = proof.total - proof.pass;
    /* the instrument is not the specimen: the readout re-declares the canonical
       theme on itself, so a forged palette cannot quietly repaint the very
       scarlet that is supposed to be telling you it failed */
    $('forgeProofPlate').dataset.theme = slug;

    $('forgeProof').innerHTML = `
      <div class="forge-score ${broken ? 'is-bad' : 'is-ok'}">
        <div class="n">${proof.pass}<span>/${proof.total}</span></div>
        <div class="l">${broken ? broken + ' checks now fail' : 'every check passes'}</div>
      </div>
      ${broken ? `<div class="forge-fails">${proof.rows.slice(0, 7).map(r =>
          `<div><code>${esc(r.role)}</code> on <code>${esc(r.on)}</code>
           <b>${r.r}</b> <span>needs ${r.floor}</span></div>`).join('')}
          ${proof.rows.length > 7 ? `<div class="more">…and ${proof.rows.length - 7} more</div>` : ''}
        </div>`
        : `<p class="cap" style="margin:0">Move the source far enough and this turns
           scarlet — which is the whole argument for generating the proof instead of
           promising it.</p>`}
      <p class="cap" style="margin-top:14px;opacity:.75">This panel keeps the canonical
      colours on purpose. An instrument that repainted itself along with the specimen
      would be no instrument at all.</p>`;

    $('forgeSwatches').innerHTML = ['ink-0','ink-2','line-1','bone-3','bone-1',
      'kin-2','kin-1','kaki-1','mori-1','aka-1'].map(n =>
      `<button class="swatch" data-copy="${esc(tok[n])}" title="${esc(n)}">
         <span class="swatch__chip" style="background:${esc(tok[n])};height:38px"></span>
         <span class="swatch__v" style="margin-top:6px">${esc(tok[n])}</span>
       </button>`).join('');

    $('forgeTabs').innerHTML = Object.keys(FILES).map(k =>
      `<button role="tab" aria-selected="${k === file}" data-file="${k}">${k}</button>`).join('');
    $('forgeFile').textContent = FILES[file](tok);

    $('forgeHueV').textContent = (state.hue > 0 ? '+' : '') + state.hue + '°';
    $('forgeChromaV').textContent = state.chroma.toFixed(2) + '×';
    $('forgeSpreadV').textContent = state.spread.toFixed(2) + '×';
  }

  ['hue','chroma','spread'].forEach(key => {
    const el = $('forge' + key[0].toUpperCase() + key.slice(1));
    el.addEventListener('input', () => {
      state[key] = +el.value;
      el.style.setProperty('--y-p', ((el.value - el.min) / (el.max - el.min) * 100) + '%');
      render();
    });
  });
  $('forgeReset').addEventListener('click', () => {
    state.hue = 0; state.chroma = 1; state.spread = 1;
    $('forgeHue').value = 0; $('forgeChroma').value = 1; $('forgeSpread').value = 1;
    ['forgeHue','forgeChroma','forgeSpread'].forEach(id => $(id).style.setProperty('--y-p','50%'));
    render();
    toast('back to canon');
  });
  $('forgeTabs').addEventListener('click', e => {
    const b = e.target.closest('[data-file]');
    if (b){ file = b.dataset.file; render(); }
  });
  onTheme(() => { if (painted) unpaint(); render(); });
})();
