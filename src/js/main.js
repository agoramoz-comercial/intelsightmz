/* INTELSIGHT — interações (sem dependências) */
(() => {
  'use strict';
  const doc = document.documentElement;
  doc.classList.remove('no-js');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = {
    get(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* sem armazenamento */ } },
  };
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------- Divisão de letras ---------- */
  function split(el) {
    if (el.dataset.splitDone) return;
    const text = el.textContent.trim().replace(/\s+/g, ' ');
    const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
    let i = 0;
    const visual = text.split(' ').map((word) => {
      const chars = Array.from(word).map((c) => `<span class="ch" style="--ci:${i++}">${esc(c)}</span>`).join('');
      i++;
      return `<span class="w" aria-hidden="true">${chars}</span>`;
    }).join(' ');
    const hidden = el.closest('[aria-hidden="true"]');
    el.innerHTML = (hidden ? '' : `<span class="sr-only">${esc(text)}</span>`) + visual;
    el.dataset.splitDone = '1';
  }
  $$('[data-split]').forEach(split);
  $$('.solx__panel h3').forEach(split);

  /* ---------- Revelação ao scroll ---------- */
  const revealTargets = $$('[data-reveal], [data-split], .slices, .step');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-in'));
  }

  /* ---------- Parallax das lentes ---------- */
  const lensGroups = $$('[data-parallax]');
  if (lensGroups.length && !reduce && window.matchMedia('(pointer: fine)').matches) {
    let raf = 0; let mx = 0; let my = 0;
    window.addEventListener('pointermove', (ev) => {
      mx = (ev.clientX / window.innerWidth - 0.5) * 2;
      my = (ev.clientY / window.innerHeight - 0.5) * 2;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        lensGroups.forEach((g) => { g.style.setProperty('--mx', mx.toFixed(3)); g.style.setProperty('--my', my.toFixed(3)); });
        raf = 0;
      });
    }, { passive: true });
  }

  /* ---------- Barra superior (mobile) ---------- */
  const topbar = $('.topbar');
  if (topbar) {
    let last = window.scrollY;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      topbar.classList.toggle('is-scrolled', y > 8);
      topbar.classList.toggle('is-hidden', y > 320 && y > last && !doc.classList.contains('menu-open'));
      last = y;
    }, { passive: true });
  }

  /* ---------- Menu em ecrã inteiro ---------- */
  const menu = $('#menu');
  const openers = $$('[data-menu-open]');
  let lastFocus = null;
  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    doc.classList.toggle('menu-open', open);
    openers.forEach((b) => b.setAttribute('aria-expanded', String(open)));
    const main = $('.site');
    if (main) { if (open) main.setAttribute('inert', ''); else main.removeAttribute('inert'); }
    if (open) {
      lastFocus = document.activeElement;
      setTimeout(() => { const f = $('.menu__close', menu); if (f) f.focus(); }, 60);
    } else if (lastFocus) {
      lastFocus.focus();
    }
  }
  openers.forEach((b) => b.addEventListener('click', () => setMenu(true)));
  $$('[data-menu-close]').forEach((b) => b.addEventListener('click', () => setMenu(false)));
  if (menu) {
    $$('a', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));
    menu.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setMenu(false);
      if (e.key === 'Tab') {
        const f = $$('a[href], button', menu).filter((el) => el.offsetParent !== null);
        const first = f[0]; const lastEl = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); lastEl.focus(); }
        else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ---------- Carrossel de soluções (tabs) ---------- */
  $$('[data-solx]').forEach((root) => {
    const tabs = $$('[role="tab"]', root);
    const panels = $$('[role="tabpanel"]', root);
    const details = $$('[data-solx-detail]', root);
    let idx = Math.max(0, tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true'));
    function show(n, focus) {
      const next = (n + tabs.length) % tabs.length;
      if (next === idx && panels[next].classList.contains('is-active')) { if (focus) tabs[next].focus(); return; }
      tabs.forEach((t, k) => { t.setAttribute('aria-selected', String(k === next)); t.tabIndex = k === next ? 0 : -1; });
      panels.forEach((p, k) => {
        if (k === next) {
          p.hidden = false;
          p.classList.add('is-entering');
          p.classList.remove('is-active');
          void p.offsetWidth;
          p.classList.remove('is-entering');
          p.classList.add('is-active');
        } else {
          p.classList.remove('is-active');
          p.hidden = true;
        }
      });
      details.forEach((d, k) => { d.hidden = k !== next; });
      idx = next;
      if (focus) tabs[next].focus();
    }
    tabs.forEach((t, k) => {
      t.addEventListener('click', () => show(k));
      t.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); show(idx + 1, true); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); show(idx - 1, true); }
        if (e.key === 'Home') { e.preventDefault(); show(0, true); }
        if (e.key === 'End') { e.preventDefault(); show(tabs.length - 1, true); }
      });
    });
    const prev = $('[data-solx-prev]', root); const next = $('[data-solx-next]', root);
    if (prev) prev.addEventListener('click', () => show(idx - 1));
    if (next) next.addEventListener('click', () => show(idx + 1));
    // swipe
    let sx = null;
    const stage = $('.solx__stage', root);
    if (stage) {
      stage.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
      stage.addEventListener('touchend', (e) => {
        if (sx === null) return;
        const dx = e.changedTouches[0].clientX - sx;
        if (Math.abs(dx) > 48) show(idx + (dx < 0 ? 1 : -1));
        sx = null;
      });
    }
    // activar o primeiro painel quando entra no ecrã
    const first = panels[idx];
    if ('IntersectionObserver' in window && !reduce) {
      const o = new IntersectionObserver((es) => { if (es[0].isIntersecting) { first.classList.add('is-active'); o.disconnect(); } }, { threshold: 0.3 });
      o.observe(root);
    } else { first.classList.add('is-active'); }
  });

  /* ---------- Formulários ---------- */
  const cfg = window.INTELSIGHT || {};
  function validate(form) {
    let ok = true; let firstBad = null;
    $$('[required]', form).forEach((input) => {
      const wrap = input.closest('.field, .check');
      let valid = input.type === 'checkbox' ? input.checked : input.value.trim() !== '';
      if (valid && input.type === 'email') valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim());
      if (wrap) wrap.classList.toggle('is-invalid', !valid);
      input.setAttribute('aria-invalid', String(!valid));
      if (!valid) { ok = false; if (!firstBad) firstBad = input; }
    });
    if (firstBad) firstBad.focus();
    return ok;
  }
  function summarize(form) {
    const lines = [];
    $$('input, select, textarea', form).forEach((el) => {
      if (!el.name || el.type === 'file' || el.type === 'hidden') return;
      if (el.type === 'checkbox') { lines.push(`${el.dataset.label || el.name}: ${el.checked ? 'Sim' : 'Não'}`); return; }
      if (el.value.trim()) lines.push(`${el.dataset.label || el.name}: ${el.value.trim()}`);
    });
    return lines.join('\n');
  }
  $$('form[data-form]').forEach((form) => {
    $$('input, select, textarea', form).forEach((el) => {
      el.addEventListener('input', () => { const w = el.closest('.field, .check'); if (w && w.classList.contains('is-invalid')) { w.classList.remove('is-invalid'); el.removeAttribute('aria-invalid'); } });
    });
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validate(form)) return;
      const btn = $('[type="submit"]', form);
      const endpoint = form.dataset.endpoint || cfg.formEndpoint || '';
      const subject = form.dataset.subject || 'Pedido via website';
      if (btn) { btn.disabled = true; btn.setAttribute('aria-busy', 'true'); }
      let sent = false;
      if (endpoint) {
        try {
          const res = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
          sent = res.ok;
        } catch (err) { sent = false; }
      }
      if (!sent) {
        // Alternativa sem servidor: abre o cliente de e-mail com o pedido preenchido.
        const body = `${summarize(form)}\n\n— Enviado a partir de intelsightmz.com`;
        window.location.href = `mailto:${cfg.email || 'info@intelsightmz.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }
      form.classList.add('is-sent');
      const ok = $('.form__success', form);
      if (ok) { ok.setAttribute('tabindex', '-1'); ok.focus(); }
      if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); }
    });
  });

  /* ---------- Consentimento de cookies + GA4 condicionado ---------- */
  const KEY = 'intelsight-consent-v1';
  const banner = $('#cookie');
  function loadAnalytics() {
    if (!cfg.ga4Id || window.__gaLoaded) return;
    window.__gaLoaded = true;
    const s = document.createElement('script');
    s.async = true; s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(cfg.ga4Id)}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', cfg.ga4Id, { anonymize_ip: true });
  }
  function showBanner(v) { if (banner) { banner.hidden = !v; requestAnimationFrame(() => banner.classList.toggle('is-visible', v)); } }
  function decide(v) { store.set(KEY, v); showBanner(false); if (v === 'all') loadAnalytics(); }
  const prior = store.get(KEY);
  if (prior === 'all') loadAnalytics();
  if (!prior) setTimeout(() => showBanner(true), 900);
  $$('[data-consent]').forEach((b) => b.addEventListener('click', () => decide(b.dataset.consent)));
  $$('[data-cookie-settings]').forEach((b) => b.addEventListener('click', () => showBanner(true)));

  /* ---------- Ano ---------- */
  $$('[data-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });
})();
