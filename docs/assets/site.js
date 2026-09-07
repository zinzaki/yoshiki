/* ════════════════════════════════════════════════════════════════════
   site.js — the behaviour every page shares
   theme · header · reveal · copy · toast · spinners · current page
   Reads window.YOSHIKI (generated from canon). Holds no palette itself.
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const Y = window.YOSHIKI || {};
  const root = document.documentElement;

  /* ── theme ── the head restores it before first paint; this only switches ── */
  const listeners = [];
  function announce(next){
    /* the control uses data-set-theme, not data-theme: palette.css styles
       [data-theme="kogane"] so any element carrying that attribute takes the
       whole dark token set — including, once, these very buttons */
    document.querySelectorAll('.themesw button').forEach(b =>
      b.setAttribute('aria-pressed', String(b.dataset.setTheme === next)));
    listeners.forEach(fn => { try { fn(next); } catch(err){ console.error(err); } });
  }
  function theme(next){
    root.dataset.theme = next;
    try { localStorage.setItem('yoshiki-theme', next); } catch(e){}
    announce(next);
  }
  /* the pages read their colours from data, so that data must follow the
     attribute no matter who set it — a toggle, devtools, or a future sync */
  new MutationObserver(() => announce(root.dataset.theme))
    .observe(root, {attributes:true, attributeFilter:['data-theme']});
  /* follow the system only while the visitor has expressed no preference */
  matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
    let stored = null;
    try { stored = localStorage.getItem('yoshiki-theme'); } catch(err){}
    if (!stored) root.dataset.theme = e.matches ? 'washi' : 'kogane';
  });
  document.querySelectorAll('.themesw button').forEach(b => {
    b.setAttribute('aria-pressed', String(b.dataset.setTheme === root.dataset.theme));
    b.addEventListener('click', () => theme(b.dataset.setTheme));
  });
  addEventListener('keydown', e => {
    if (e.target.closest('input,textarea,select')) return;
    if (e.key === '1') theme('kogane');
    if (e.key === '2') theme('washi');
  });

  /* ── header shadow on scroll ── */
  const hdr = document.querySelector('.hdr');
  if (hdr){
    const stick = () => hdr.toggleAttribute('data-stuck', scrollY > 24);
    stick(); addEventListener('scroll', stick, {passive:true});
  }

  /* ── current page in the nav ── */
  const here = location.pathname.replace(/index\.html$/, '').replace(/\/$/, '');
  document.querySelectorAll('.nav a').forEach(a => {
    const target = a.getAttribute('href').replace(/index\.html$/, '').replace(/\/$/, '');
    if (target && here.endsWith(target)) a.setAttribute('aria-current','page');
  });

  /* ── reveal ── */
  const io = RM ? null : new IntersectionObserver(entries => {
    entries.forEach(x => { if (x.isIntersecting){ x.target.setAttribute('data-in',''); io.unobserve(x.target); } });
  }, {rootMargin:'0px 0px -8% 0px'});
  function reveal(scope){
    (scope || document).querySelectorAll('.rv:not([data-in])').forEach(el => {
      if (io) io.observe(el); else el.setAttribute('data-in','');
    });
  }
  reveal();

  /* ── toast ── */
  let timer;
  const host = document.getElementById('toast');
  function toast(text, mark){
    if (!host) return;
    host.innerHTML = '<span class="y-toast"><span aria-hidden="true">' + (mark || '✓') + '</span>' +
                     '<span></span></span>';
    host.querySelector('span span:last-child').textContent = text;
    host.setAttribute('data-show','');
    clearTimeout(timer);
    timer = setTimeout(() => host.removeAttribute('data-show'), 2000);
  }

  /* ── copy — any [data-copy], or [data-copy-from] pointing at an element ── */
  async function copy(text, label){
    try {
      await navigator.clipboard.writeText(text);
      toast(label || ('copied · ' + (text.length > 30 ? text.slice(0,30) + '…' : text)));
    } catch(e){
      toast('copy blocked — select it by hand', '⚠');
    }
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

  /* ── spinners — one ticker for the whole page, at the canon 90ms ── */
  const braille = ['⠋','⠙','⠹','⠸','⠼','⠴','⠦','⠧','⠇','⠏'];
  const arc = ['◜','◠','◝','◞','◡','◟'];
  if (!RM){
    let i = 0;
    setInterval(() => {
      i++;
      document.querySelectorAll('[data-spin="braille"]').forEach(el => el.textContent = braille[i % braille.length]);
      document.querySelectorAll('[data-spin="arc"]').forEach(el => el.textContent = arc[i % arc.length]);
    }, 90);
  } else {
    document.querySelectorAll('[data-spin]').forEach(el => el.textContent = '⠹');
  }

  /* ── tabs — [role=tablist] with [aria-controls] ── */
  document.addEventListener('click', e => {
    const tab = e.target.closest('[role="tab"]');
    if (!tab) return;
    const list = tab.closest('[role="tablist"]');
    list.querySelectorAll('[role="tab"]').forEach(t => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.hidden = !on;
    });
  });

  /* ── segmented + switch, for the demos ── */
  document.addEventListener('click', e => {
    const seg = e.target.closest('.y-seg button');
    if (seg){
      seg.parentElement.querySelectorAll('button').forEach(b =>
        b.setAttribute('aria-selected', String(b === seg)));
    }
    const sw = e.target.closest('.y-switch');
    if (sw) sw.setAttribute('aria-checked', sw.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
  });
  document.addEventListener('keydown', e => {
    if (e.key !== ' ' && e.key !== 'Enter') return;
    const sw = e.target.closest && e.target.closest('.y-switch');
    if (sw){ e.preventDefault(); sw.click(); }
  });

  /* ── year ── */
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  /* ── shared helpers for the page modules ── */
  function lum(hex){
    const n = parseInt(hex.slice(1), 16);
    const f = v => (v <= .03928 ? v/12.92 : Math.pow((v + .055)/1.055, 2.4));
    return .2126*f((n>>16)/255) + .7152*f(((n>>8)&255)/255) + .0722*f((n&255)/255);
  }
  function ratio(a, b){
    const x = lum(a), y = lum(b);
    return (Math.max(x,y) + .05) / (Math.min(x,y) + .05);
  }
  const grade = r => r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : r >= 3 ? 'AA large' : 'fail';
  const current = () => Y.themes ? Y.themes[root.dataset.theme] : null;
  function onTheme(fn){ listeners.push(fn); fn(root.dataset.theme); }
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  window.YS = {RM, Y, theme, toast, copy, reveal, lum, ratio, grade, current, onTheme, esc};
})();
