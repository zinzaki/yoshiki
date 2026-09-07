/* ════════════════════════════════════════════════════════════════════
   site.js — everything every page shares
   theme · header · seam · light · reveal · copy · command palette
   Reads window.YOSHIKI (generated from canon). Holds no palette itself.
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const Y = window.YOSHIKI || {};
  const root = document.documentElement;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  /* ── theme ─────────────────────────────────────────────────────── */
  const listeners = [];
  function announce(next){
    $$('.themesw button').forEach(b =>
      b.setAttribute('aria-pressed', String(b.dataset.setTheme === next)));
    listeners.forEach(fn => { try { fn(next); } catch(e){ console.error(e); } });
  }
  function theme(next){
    root.dataset.theme = next;
    try { localStorage.setItem('yoshiki-theme', next); } catch(e){}
    announce(next);
  }
  new MutationObserver(() => announce(root.dataset.theme))
    .observe(root, {attributes:true, attributeFilter:['data-theme']});
  matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
    let stored = null;
    try { stored = localStorage.getItem('yoshiki-theme'); } catch(err){}
    if (!stored) root.dataset.theme = e.matches ? 'washi' : 'kogane';
  });
  $$('.themesw button').forEach(b => {
    b.setAttribute('aria-pressed', String(b.dataset.setTheme === root.dataset.theme));
    b.addEventListener('click', () => theme(b.dataset.setTheme));
  });

  /* ── header + current page ─────────────────────────────────────── */
  const hdr = $('.hdr');
  if (hdr){
    const stick = () => hdr.toggleAttribute('data-stuck', scrollY > 24);
    stick(); addEventListener('scroll', stick, {passive:true});
  }
  const here = location.pathname.replace(/index\.html$/, '').replace(/\/$/, '');
  $$('.nav a').forEach(a => {
    const t = a.getAttribute('href').replace(/index\.html$/, '').replace(/\/$/, '');
    if (t && here.endsWith(t)) a.setAttribute('aria-current','page');
  });

  /* ── reveal ────────────────────────────────────────────────────── */
  const io = RM ? null : new IntersectionObserver(es => es.forEach(x => {
    if (!x.isIntersecting) return;
    const el = x.target;
    const sibs = [...el.parentElement.children].filter(c => c.classList.contains('rv'));
    el.style.transitionDelay = Math.min(4, Math.max(0, sibs.indexOf(el))) * 70 + 'ms';
    el.setAttribute('data-in','');
    io.unobserve(el);
  }), {rootMargin:'0px 0px -6% 0px'});
  function reveal(scope){
    $$('.rv:not([data-in])', scope).forEach(el => io ? io.observe(el) : el.setAttribute('data-in',''));
  }
  reveal();

  /* ── light: a pool under the pointer, and gilding that notices it ─ */
  if (!RM && matchMedia('(hover: hover)').matches){
    let raf = 0, mx = 0, my = 0;
    addEventListener('pointermove', e => {
      mx = e.clientX; my = e.clientY;
      document.body.setAttribute('data-pointer','');
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        root.style.setProperty('--mx', mx + 'px');
        root.style.setProperty('--my', my + 'px');
        const el = document.elementFromPoint(mx, my);
        const plate = el && el.closest && el.closest('.plate');
        if (plate){
          const r = plate.getBoundingClientRect();
          plate.style.setProperty('--px', (mx - r.left) + 'px');
          plate.style.setProperty('--py', (my - r.top) + 'px');
        }
      });
    }, {passive:true});
  }

  /* ── the seam ──────────────────────────────────────────────────────
     The mark at page scale. Generated from the real section positions, so
     it threads the content rather than decorating beside it, and it draws
     itself as you descend: the gold arriving in the break. */
  const seamHost = $('#seam');
  function drawSeam(){
    if (!seamHost) return;
    const main = $('main');
    if (!main) return;
    const W = main.offsetWidth, H = main.offsetHeight;
    if (H < 600) return;
    /* measure the content column rather than parsing --pad: a custom property
       computes to its own token, so clamp() comes back as the literal string */
    const shell = $('.shell');
    const left = shell ? shell.getBoundingClientRect().left : 40;
    const baseX = Math.max(24, left - 30);
    if (!isFinite(baseX)) return;
    const pts = [];
    let seed = 7;
    const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
    for (let y = 0; y <= H; y += 118){
      pts.push([baseX + (rnd() - .5) * 26, y]);
    }
    pts.push([baseX + (rnd() - .5) * 20, H]);
    const d = 'M ' + pts.map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L ');

    // short branches reaching toward the sections they mark
    const nodes = $$('main [data-seam]').map(el => {
      const top = el.getBoundingClientRect().top + scrollY - main.offsetTop;
      let i = Math.round(top / 118);
      i = Math.max(1, Math.min(pts.length - 2, i));
      return [pts[i][0], pts[i][1]];
    });
    const branches = nodes.map(([x, y]) =>
      `M ${x.toFixed(1)} ${y.toFixed(1)} L ${(x + 34).toFixed(1)} ${(y + 16).toFixed(1)}`).join(' ');

    seamHost.innerHTML =
      `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" aria-hidden="true">` +
      `<path class="seam-ghost" d="${d}"/>` +
      `<path class="seam-ghost seam-branch" d="${branches}"/>` +
      `<path class="seam-line" d="${d}"/>` +
      nodes.map(([x, y]) =>
        `<circle class="seam-node" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.6"
                 fill="var(--r-border-gold)"/>`).join('') +
      `</svg>`;
    const line = $('.seam-line', seamHost);
    const len = line.getTotalLength();
    line.style.setProperty('--len', len + 'px');
    seamHost._len = len;
    seamHost._h = H;
    paintSeam();
  }
  function paintSeam(){
    if (!seamHost || !seamHost._len || RM) return;
    const p = Math.min(1, Math.max(0, (scrollY + innerHeight * .78) / seamHost._h));
    $('.seam-line', seamHost).style.setProperty('--drawn', (seamHost._len * p) + 'px');
  }
  addEventListener('scroll', paintSeam, {passive:true});
  addEventListener('resize', drawSeam);
  addEventListener('load', drawSeam);
  drawSeam();

  /* ── toast + copy ──────────────────────────────────────────────── */
  let timer;
  const host = $('#toast');
  function toast(text, mark){
    if (!host) return;
    host.innerHTML = `<span class="y-toast"><span aria-hidden="true">${esc(mark || '✓')}</span><span></span></span>`;
    $('span span:last-child', host).textContent = text;
    host.setAttribute('data-show','');
    clearTimeout(timer);
    timer = setTimeout(() => host.removeAttribute('data-show'), 1900);
  }
  async function copy(text, label){
    try {
      await navigator.clipboard.writeText(text);
      toast(label || ('copied · ' + (text.length > 30 ? text.slice(0,30) + '…' : text)));
    } catch(e){ toast('copy blocked — select it by hand', '⚠'); }
  }
  document.addEventListener('click', e => {
    const direct = e.target.closest('[data-copy]');
    if (direct) return copy(direct.dataset.copy, direct.dataset.copyLabel);
    const from = e.target.closest('[data-copy-from]');
    if (from){
      const src = document.getElementById(from.dataset.copyFrom);
      if (src) copy(src.textContent, from.dataset.copyLabel);
    }
  });

  /* ── spinners, tabs, switches ──────────────────────────────────── */
  const braille = ['⠋','⠙','⠹','⠸','⠼','⠴','⠦','⠧','⠇','⠏'];
  const arc = ['◜','◠','◝','◞','◡','◟'];
  if (!RM){
    let i = 0;
    setInterval(() => {
      i++;
      $$('[data-spin="braille"]').forEach(el => el.textContent = braille[i % braille.length]);
      $$('[data-spin="arc"]').forEach(el => el.textContent = arc[i % arc.length]);
    }, 90);
  } else $$('[data-spin]').forEach(el => el.textContent = '⠹');

  document.addEventListener('click', e => {
    const tab = e.target.closest('[role="tab"]');
    if (tab){
      $$('[role="tab"]', tab.closest('[role="tablist"]')).forEach(t => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
    }
    const seg = e.target.closest('.y-seg button');
    if (seg) $$('button', seg.parentElement).forEach(b => b.setAttribute('aria-selected', String(b === seg)));
    const sw = e.target.closest('.y-switch');
    if (sw) sw.setAttribute('aria-checked', sw.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
  });
  document.addEventListener('keydown', e => {
    if (e.key !== ' ' && e.key !== 'Enter') return;
    const sw = e.target.closest && e.target.closest('.y-switch');
    if (sw){ e.preventDefault(); sw.click(); }
  });

  $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  /* ── helpers the page modules share ────────────────────────────── */
  function lum(hex){
    const n = parseInt(hex.slice(1), 16);
    const f = v => (v <= .03928 ? v/12.92 : Math.pow((v + .055)/1.055, 2.4));
    return .2126*f((n>>16)/255) + .7152*f(((n>>8)&255)/255) + .0722*f((n&255)/255);
  }
  function ratio(a, b){ const x = lum(a), y = lum(b);
    return (Math.max(x,y) + .05) / (Math.min(x,y) + .05); }
  const grade = r => r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : r >= 3 ? 'AA large' : 'fail';
  function onTheme(fn){ listeners.push(fn); fn(root.dataset.theme); }

  window.YS = {RM, Y, theme, toast, copy, reveal, lum, ratio, grade, onTheme, esc,
               current: () => Y.themes ? Y.themes[root.dataset.theme] : null,
               drawSeam, $, $$};
})();
