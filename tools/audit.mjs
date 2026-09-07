/* ════════════════════════════════════════════════════════════════════
   tools/audit.mjs — the showcase, measured as it is actually painted
   ════════════════════════════════════════════════════════════════════
   canon/palette/CONTRAST.md proves the palette. This proves the pages: it
   walks every visible text node in a real browser, composites the background
   actually painted behind it, and reports anything under its WCAG floor. It
   also checks heading order, labels and landmarks.

   Optional — it is NOT part of CI, because it needs a browser:

       npm i playwright-core          # and a Chromium on the machine
       CHROMIUM=/path/to/chrome node tools/audit.mjs

   Accepted exceptions, and why (see canon/palette/ACCESSIBILITY.md):
     · disabled controls — WCAG 1.4.3 exempts inactive components
     · hairlines and box-drawing rules — dividers, not affordances (floor 1)
     · a progress TRACK, gauge bars — non-text graphics, floor 3:1
     · syntax.comment — canon declares its floor at 3:1; a comment recedes
   Both of the last two declare it in the markup, as data-floor="3", so the
   exemption is visible where it applies rather than hidden in this file.
   ════════════════════════════════════════════════════════════════════ */
import {chromium} from 'playwright-core';

const EXE = process.env.CHROMIUM || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const SITE = new URL('../docs/', import.meta.url).pathname;

const PROBE = () => {
  const parse = c => {
    const m = c.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);
    return m ? {r:+m[1], g:+m[2], b:+m[3], a: m[4] === undefined ? 1 : +m[4]} : null;
  };
  const over = (fg, bg) => ({          // composite fg over an opaque bg
    r: fg.r*fg.a + bg.r*(1-fg.a),
    g: fg.g*fg.a + bg.g*(1-fg.a),
    b: fg.b*fg.a + bg.b*(1-fg.a), a:1
  });
  const lum = c => {
    const f = v => { v/=255; return v <= .03928 ? v/12.92 : Math.pow((v+.055)/1.055, 2.4); };
    return .2126*f(c.r) + .7152*f(c.g) + .0722*f(c.b);
  };
  const ratio = (a, b) => {
    const x = lum(a), y = lum(b);
    return (Math.max(x,y)+.05) / (Math.min(x,y)+.05);
  };
  const bgOf = el => {
    let stack = [], n = el;
    while (n && n !== document.documentElement.parentNode){
      const c = parse(getComputedStyle(n).backgroundColor);
      if (c && c.a > 0){ stack.push(c); if (c.a === 1) break; }
      n = n.parentElement;
    }
    let base = {r:255,g:255,b:255,a:1};
    for (let i = stack.length - 1; i >= 0; i--) base = over(stack[i], base);
    return base;
  };

  const out = [];
  document.querySelectorAll('body *').forEach(el => {
    const text = [...el.childNodes]
      .filter(n => n.nodeType === 3 && n.textContent.trim())
      .map(n => n.textContent.trim()).join(' ');
    if (!text) return;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity === 0) return;
    // WCAG 1.4.3 exempts text that is part of an inactive control
    if (el.closest('[disabled],[aria-disabled="true"]')) return;
    // an element may declare the floor canon gives it — a progress track, a
    // gauge bar, a drawn rule or a syntax comment is not held to 4.5
    const declared = el.closest('[data-floor]');
    const box = el.getBoundingClientRect();
    if (!box.width || !box.height) return;
    const fg = parse(cs.color);
    if (!fg || fg.a === 0) return;
    const bg = bgOf(el);
    const r = ratio(over(fg, bg), bg);
    const px = parseFloat(cs.fontSize), bold = +cs.fontWeight >= 700;
    const large = px >= 24 || (px >= 18.66 && bold);
    const floor = declared ? +declared.dataset.floor : (large ? 3 : 4.5);
    if (r < floor - 0.005){
      out.push({sel: el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).join('.') : ''),
                text: text.slice(0, 42), ratio: +r.toFixed(2), floor, px, color: cs.color});
    }
  });
  return out;
};

const STRUCT = () => {
  const issues = [];
  const h = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(e => +e.tagName[1]);
  const h1s = h.filter(x => x === 1).length;
  if (h1s !== 1) issues.push(`h1 count = ${h1s}`);
  for (let i = 1; i < h.length; i++) if (h[i] > h[i-1] + 1) issues.push(`heading jumps h${h[i-1]} → h${h[i]}`);
  document.querySelectorAll('img').forEach(i => { if (!i.hasAttribute('alt')) issues.push('img without alt'); });
  document.querySelectorAll('button, a').forEach(b => {
    const label = (b.textContent || '').trim() || b.getAttribute('aria-label') || b.getAttribute('title');
    if (!label) issues.push(`unlabelled ${b.tagName.toLowerCase()}: ${b.outerHTML.slice(0,70)}`);
  });
  document.querySelectorAll('input,select,textarea').forEach(f => {
    const id = f.id, lab = id && document.querySelector(`label[for="${id}"]`);
    if (!lab && !f.getAttribute('aria-label') && !f.closest('label')) issues.push(`unlabelled field: ${f.outerHTML.slice(0,60)}`);
  });
  if (!document.querySelector('main')) issues.push('no <main>');
  return issues;
};

(async () => {
  const b = await chromium.launch({executablePath: EXE,
                                   args:['--no-sandbox','--disable-dev-shm-usage']});
  for (const name of ['index','palette','components','lexicon','themes']){
    for (const theme of ['kogane','washi']){
      const ctx = await b.newContext({viewport:{width:1440,height:1000}, colorScheme: theme === 'washi' ? 'light' : 'dark'});
      const p = await ctx.newPage();
      await p.goto('file://' + SITE + name + '.html', {waitUntil:'domcontentloaded'});
      await p.evaluate(t => document.documentElement.dataset.theme = t, theme);
      await p.evaluate(() => document.querySelectorAll('.rv').forEach(e => e.setAttribute('data-in','')));
      await p.waitForTimeout(350);
      const bad = await p.evaluate(PROBE);
      const st = theme === 'kogane' ? await p.evaluate(STRUCT) : [];
      const seen = new Set();
      const uniq = bad.filter(x => { const k = x.sel + x.ratio; if (seen.has(k)) return false; seen.add(k); return true; });
      if (uniq.length || st.length){
        console.log(`\n══ ${name} · ${theme}`);
        uniq.slice(0, 12).forEach(x => console.log(`   ${x.ratio}/${x.floor} ${x.px}px  ${x.sel}  "${x.text}"  ${x.color}`));
        if (uniq.length > 12) console.log(`   … and ${uniq.length - 12} more`);
        st.forEach(s => console.log(`   struct: ${s}`));
      }
      await ctx.close();
    }
  }
  console.log('\na11y sweep done');
  await b.close();
})();
