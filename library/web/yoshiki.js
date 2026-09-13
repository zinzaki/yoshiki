/* ════════════════════════════════════════════════════════════════════
   yoshiki — the kit's behaviour
   ────────────────────────────────────────────────────────────────────
   yoshiki.css draws states it cannot reach on its own: a range knows how
   full it is, a switch knows it is on, a segment knows it is chosen. This
   file is the small amount of JavaScript those states need, and nothing
   more — no dependencies, no build, no framework, ~2 KB.

     <script src="yoshiki.js" defer></script>

   It is idempotent and delegated: markup added later works without
   re-initialising anything. If you already own this behaviour, skip the
   file — the CSS never depends on it, it only reflects what it finds.
   ════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── range: keep the fill and the printed value with the thumb ─────
     A slider without a number is a guess (canon/components/forms.md), so
     the value is written into any <output> inside the same .y-range. */
  function paintRange(input) {
    var min = parseFloat(input.min || 0), max = parseFloat(input.max || 100);
    var pct = max === min ? 0 : ((parseFloat(input.value) - min) / (max - min)) * 100;
    input.style.setProperty('--y-p', pct.toFixed(2) + '%');
    var wrap = input.closest('.y-range');
    var out = wrap && wrap.querySelector('output');
    if (out) out.textContent = input.dataset.yFormat
      ? input.dataset.yFormat.replace('%v', input.value)
      : input.value;
  }

  function paintAll(scope) {
    (scope || document).querySelectorAll('.y-range input[type="range"]').forEach(paintRange);
  }

  document.addEventListener('input', function (e) {
    if (e.target.matches && e.target.matches('.y-range input[type="range"]')) paintRange(e.target);
  });

  /* ── switch: it applies itself, so it toggles itself ─────────────── */
  function toggle(sw) {
    var on = sw.getAttribute('aria-checked') === 'true';
    sw.setAttribute('aria-checked', String(!on));
    sw.dispatchEvent(new CustomEvent('y-change', {bubbles: true, detail: {checked: !on}}));
  }

  /* ── one delegated click for every stateful control in the kit ───── */
  document.addEventListener('click', function (e) {
    var sw = e.target.closest('.y-switch');
    if (sw) { toggle(sw); return; }

    /* A segment is a single choice. aria-selected is only valid on a tab or
       an option, so mirror whichever attribute the markup actually declared:
       aria-pressed for a plain toggle group, aria-selected for a tablist.
       A tablist is left to the [role=tab] branch below, which also moves the
       panels. */
    var seg = e.target.closest('.y-seg button');
    if (seg && !seg.closest('[role="tablist"]')) {
      var attr = seg.hasAttribute('aria-pressed') ? 'aria-pressed' : 'aria-selected';
      seg.parentElement.querySelectorAll('button').forEach(function (b) {
        b.setAttribute(attr, String(b === seg));
      });
      seg.dispatchEvent(new CustomEvent('y-change', {bubbles: true, detail: {value: seg.textContent.trim()}}));
      return;
    }

    /* an underline tab strip: same contract as a segment */
    var utab = e.target.closest('.y-tabs button');
    if (utab) {
      utab.parentElement.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-selected', String(b === utab));
      });
      utab.dispatchEvent(new CustomEvent('y-change', {bubbles: true, detail: {value: utab.textContent.trim()}}));
      return;
    }

    /* a tag you can take off actually comes off */
    var rm = e.target.closest('.y-tag button');
    if (rm) {
      var tag = rm.closest('.y-tag');
      tag.dispatchEvent(new CustomEvent('y-remove', {bubbles: true, detail: {label: tag.textContent.trim()}}));
      tag.remove();
      return;
    }

    var tab = e.target.closest('[role="tab"]');
    if (tab) selectTab(tab);
  });

  /* ── tabs: a tablist is one tab stop, and the arrows move inside it ──
     Without this a keyboard user pays one Tab per tab before reaching the
     panel, which is exactly the cost the pattern exists to avoid. */
  function selectTab(tab) {
    var list = tab.closest('[role="tablist"]');
    if (!list) return;
    list.querySelectorAll('[role="tab"]').forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(t.getAttribute('aria-controls') || '');
      if (panel) panel.hidden = !on;
    });
    tab.dispatchEvent(new CustomEvent('y-change', {bubbles: true, detail: {value: tab.textContent.trim()}}));
  }

  var TAB_STEP = {ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1};
  document.addEventListener('keydown', function (e) {
    var tab = e.target.closest && e.target.closest('[role="tab"]');
    if (!tab) return;
    var list = tab.closest('[role="tablist"]');
    if (!list) return;
    var tabs = [].slice.call(list.querySelectorAll('[role="tab"]'));
    var i = tabs.indexOf(tab), to = null;
    if (TAB_STEP[e.key]) to = tabs[(i + TAB_STEP[e.key] + tabs.length) % tabs.length];
    else if (e.key === 'Home') to = tabs[0];
    else if (e.key === 'End') to = tabs[tabs.length - 1];
    if (!to) return;
    e.preventDefault();
    selectTab(to);
    to.focus();
  });

  /* every tablist starts as a single tab stop, whatever the markup says */
  function sealTablists(scope) {
    (scope || document).querySelectorAll('[role="tablist"]').forEach(function (list) {
      list.querySelectorAll('[role="tab"]').forEach(function (t) {
        t.tabIndex = t.getAttribute('aria-selected') === 'true' ? 0 : -1;
      });
    });
  }

  /* ── the keyboard reaches everything the pointer does ────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key !== ' ' && e.key !== 'Enter') return;
    var sw = e.target.closest && e.target.closest('.y-switch');
    if (sw) { e.preventDefault(); toggle(sw); }
  });

  /* a dialog closes on Escape, and the scrim is a way out */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var open = document.querySelector('.y-dialog[data-y-open]');
    if (open) closeDialog(open);
  });
  document.addEventListener('click', function (e) {
    if (e.target.classList && e.target.classList.contains('y-scrim')) {
      var open = document.querySelector('.y-dialog[data-y-open]');
      if (open) closeDialog(open);
    }
  });
  function closeDialog(d) {
    d.removeAttribute('data-y-open');
    d.hidden = true;
    var scrim = document.querySelector('.y-scrim[data-y-for="' + d.id + '"]');
    if (scrim) scrim.hidden = true;
    if (d._yOpener) d._yOpener.focus();
  }

  paintAll();
  sealTablists();
  window.yoshiki = {paintRanges: paintAll, toggleSwitch: toggle, sealTablists: sealTablists};
})();
