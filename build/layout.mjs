import { SITE, NAV, NAV_SECONDARY, CTA, SOLUTIONS } from './content.mjs';

export const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const pad = (n) => String(n).padStart(2, '0');

export const icon = {
  arrow: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
  arrowLeft: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12H5M11 6l-6 6 6 6"/></svg>',
  diag: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M8 6h10v10"/></svg>',
  down: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v15M6 13l6 6 6-6"/></svg>',
  close: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/></svg>',
  plus: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  check: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.2 4.2L19 7"/></svg>',
  shield: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
};

/** Arte de lentes sobrepostas. */
export const lenses = (n = 4, extra = '') =>
  `<div class="lenses" aria-hidden="true" data-parallax ${extra}>${'<span class="lens"></span>'.repeat(n)}</div>`;

export const art = (pal = 'a', inner = '', cls = '', tag = 'div') =>
  `<${tag} class="art pal-${pal} ${cls}">${lenses(4)}<span class="art__noise" aria-hidden="true"></span>${inner}</${tag}>`;

export const label = (n, text) =>
  `<span class="label">${n ? `<span class="label__n">(${esc(n)})</span>` : ''}${esc(text)}</span>`;

export const btn = (text, href, variant = '', ico = icon.arrow) =>
  `<a class="btn ${variant ? `btn--${variant}` : ''}" href="${href}">${esc(text)}${ico}</a>`;

export const linkArrow = (text, href, ext = false) =>
  `<a class="link-arrow" href="${href}"${ext ? ' target="_blank" rel="noopener"' : ''}>${esc(text)}${ext ? icon.diag : icon.arrow}</a>`;

export const sectionHead = ({ n, label: lab, title, aside = '', seeAll = null, id = '' }) => `
  <header class="section-head">
    <div class="section-head__top">${label(n, lab)}${seeAll ? `<a class="see-all" href="${seeAll.href}">(${esc(seeAll.label)})</a>` : ''}</div>
    <h2 ${id ? `id="${id}"` : ''} data-reveal>${title}</h2>
    ${aside ? `<div class="section-head__aside muted" data-reveal style="--rd:120ms">${aside}</div>` : ''}
  </header>`;

export const breadcrumbs = (items) => `
  <nav class="crumbs" aria-label="Navegação estrutural">
    <ol>${items.map((it, i) => (i === items.length - 1
      ? `<li><span aria-current="page">${esc(it.name)}</span></li>`
      : `<li><a href="${it.href}">${esc(it.name)}</a></li>`)).join('')}</ol>
  </nav>`;

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem', position: i + 1, name: it.name, item: SITE.url + it.href,
  })),
});

const isCurrent = (href, path) => (href === '/' ? path === '/' : path.startsWith(href));

function rail(path) {
  return `
  <aside class="rail" aria-label="Navegação lateral">
    <button class="rail__menu" type="button" data-menu-open aria-controls="menu" aria-expanded="false">
      <span></span><span></span><span></span><span class="sr-only">Abrir menu</span>
    </button>
    <a class="rail__home" href="/" aria-label="Intelsight — página inicial"><img src="/assets/img/simbolo.webp" alt="" width="40" height="40"></a>
    <a class="rail__brand" href="/" tabindex="-1" aria-hidden="true">Intelsight</a>
    <nav class="rail__nav" aria-label="Principal">
      ${NAV.map((l) => `<a href="${l.href}"${isCurrent(l.href, path) ? ' aria-current="page"' : ''}>${esc(l.label)}</a>`).join('')}
    </nav>
    <div class="rail__lang" title="Versões em inglês e francês em preparação"><abbr title="Português">PT</abbr></div>
    <a class="rail__cta" href="${CTA.href}"><span>${esc(CTA.label)}</span>${icon.diag}</a>
  </aside>`;
}

function topbar() {
  return `
  <header class="topbar">
    <a class="topbar__logo" href="/" aria-label="Intelsight — página inicial"><img src="/assets/img/logo-dark.webp" alt="Intelsight" width="895" height="326"></a>
    <div class="topbar__actions">
      <a class="btn" href="${CTA.href}">Diagnóstico</a>
      <button class="burger" type="button" data-menu-open aria-controls="menu" aria-expanded="false">
        <span></span><span></span><span></span><span class="sr-only">Abrir menu</span>
      </button>
    </div>
  </header>`;
}

function menu(path) {
  const all = [{ label: 'Início', href: '/' }, ...NAV];
  return `
  <div class="menu on-dark" id="menu" role="dialog" aria-modal="true" aria-label="Menu" aria-hidden="true">
    ${lenses(3, 'style="--blend:screen"')}
    <div class="menu__bar">
      <a href="/" aria-label="Intelsight — página inicial"><img src="/assets/img/logo-light.webp" alt="Intelsight" width="895" height="326"></a>
      <button class="menu__close" type="button" data-menu-close>${icon.close}<span class="sr-only">Fechar menu</span></button>
    </div>
    <div class="menu__body">
      <nav aria-label="Menu principal">
        <ol class="menu__list">
          ${all.map((l, i) => `<li><a href="${l.href}" style="--i:${i}"${isCurrent(l.href, path) ? ' aria-current="page"' : ''}>${esc(l.label)}</a></li>`).join('')}
        </ol>
      </nav>
      <div class="menu__aside">
        <div>
          <h2>Explorar</h2>
          <div class="menu__secondary">${NAV_SECONDARY.map((l) => `<a href="${l.href}">${esc(l.label)}</a>`).join('')}</div>
        </div>
        <div>
          <h2>Fale connosco</h2>
          <p><a href="mailto:${SITE.email}">${SITE.email}</a><br><a href="tel:${SITE.phoneHref}">${SITE.phone}</a></p>
        </div>
        <div>${btn(CTA.label, CTA.href, 'light')}</div>
      </div>
    </div>
    <div class="menu__foot"><span>${esc(SITE.tagline)}</span><span>${esc(SITE.address.district)}, ${esc(SITE.address.city)}</span></div>
  </div>`;
}

export function finalCta({ title = 'Que decisão não pode ser tomada com base em suposições?', text = 'Partilhe o contexto, a decisão e o prazo. A nossa equipa ajudará a determinar que evidência é necessária e qual abordagem oferece melhor equilíbrio entre rigor, velocidade e investimento.' } = {}) {
  return `
  <section class="final on-dark" aria-labelledby="final-title">
    ${lenses(3)}
    <div class="wrap final__inner">
      ${label('', 'Próximo passo')}
      <h2 id="final-title" data-reveal>${esc(title)}</h2>
      <div class="final__row">
        <p class="lead" data-reveal style="--rd:100ms">${esc(text)}</p>
        <div class="stack" data-reveal style="--rd:180ms">
          <div class="btn-row">
            ${btn('Solicitar diagnóstico de pesquisa', '/contactos/#diagnostico', 'light')}
            ${btn('Enviar termos de referência', '/contactos/#diagnostico', 'ghost-light')}
          </div>
          <p class="small muted">Resposta prevista durante o horário útil. Nenhum projeto é iniciado sem alinhamento de escopo, proposta e aprovação.</p>
        </div>
      </div>
    </div>
  </section>`;
}

function footer() {
  return `
  <footer class="footer on-dark">
    <div class="wrap">
      <div class="footer__grid">
        <div class="footer__brand">
          <img src="/assets/img/logo-light.webp" alt="Intelsight" width="895" height="326" loading="lazy">
          <p>Empresa moçambicana de pesquisa de mercado, inteligência de negócios, análise de dados e consultoria estratégica.</p>
          <p class="footer__tagline">${esc(SITE.tagline)}</p>
        </div>
        <div class="footer__cols">
          <div>
            <h2>Soluções</h2>
            <ul>${SOLUTIONS.map((s) => `<li><a href="/solucoes/${s.slug}/">${esc(s.short)}</a></li>`).join('')}</ul>
          </div>
          <div>
            <h2>Empresa</h2>
            <ul>
              <li><a href="/sobre-nos/">Sobre Nós</a></li>
              <li><a href="/sectores/">Sectores</a></li>
              <li><a href="/produtos/">Produtos</a></li>
              <li><a href="/metodologia/">Metodologia</a></li>
              <li><a href="/casos/">Casos</a></li>
              <li><a href="/insights/">Insights</a></li>
              <li><a href="/recursos/">Recursos</a></li>
            </ul>
          </div>
          <div>
            <h2>Contactos</h2>
            <address>
              <a href="mailto:${SITE.email}">${SITE.email}</a>
              <a href="tel:${SITE.phoneHref}">${SITE.phone}</a>
              <a href="${SITE.mapUrl}" target="_blank" rel="noopener">${esc(SITE.address.street)}<br>${esc(SITE.address.district)}, ${esc(SITE.address.city)}</a>
            </address>
          </div>
          <div>
            <h2>Legal</h2>
            <ul>
              <li><a href="${SITE.privacyUrl}">Política de Privacidade</a></li>
              <li><a href="${SITE.privacyUrl}">Política de Cookies</a></li>
              <li><a href="/contactos/">Imprensa e Media</a></li>
            </ul>
            <h2 style="margin-top:24px">Parceiros</h2>
            <ul>${SITE.partners.map((p) => `<li><a href="${p.url}" target="_blank" rel="noopener">${esc(p.name)}</a></li>`).join('')}</ul>
          </div>
        </div>
      </div>
      <div class="footer__mid">
        <div class="socials" aria-label="Redes sociais">
          ${SITE.social.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${esc(s.name)}${icon.diag}</a>`).join('')}
        </div>
        <div class="footer__badges">
          <a class="esomar" href="${SITE.esomarUrl}" target="_blank" rel="noopener">
            <img src="/assets/img/esomar.webp" alt="ESOMAR Corporate Member" width="140" height="23" loading="lazy">
            <span>Membro corporativo<br>ESOMAR — verificar</span>
          </a>
        </div>
      </div>
      <p class="footer__giant" aria-hidden="true">Intelsight</p>
      <div class="footer__bottom">
        <span>© <span data-year>2026</span> ${esc(SITE.legalName)} Todos os direitos reservados.</span>
        <span><button type="button" data-cookie-settings>Gerir cookies</button></span>
        <span>${esc(SITE.address.city)}, ${esc(SITE.address.country)}</span>
      </div>
    </div>
  </footer>`;
}

function cookieBanner() {
  return `
  <div class="cookie on-dark" id="cookie" role="region" aria-label="Consentimento de cookies" hidden>
    <h2>Valorizamos a sua privacidade</h2>
    <p>Usamos cookies necessários ao funcionamento do site e, apenas com o seu consentimento, cookies de análise para melhorar a experiência. <a href="${SITE.privacyUrl}">Política de privacidade</a>.</p>
    <div class="btn-row">
      <button class="btn btn--light" type="button" data-consent="all">Aceitar análise</button>
      <button class="btn btn--ghost-light" type="button" data-consent="necessary">Apenas necessários</button>
    </div>
  </div>`;
}

const orgSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: `${SITE.url}/`,
  logo: `${SITE.url}/assets/img/logo-dark.webp`,
  image: `${SITE.url}/assets/img/og-image.jpg`,
  slogan: SITE.tagline,
  description: 'Empresa moçambicana de pesquisa de mercado, inteligência de negócios, análise de dados e consultoria estratégica.',
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${SITE.address.street}, ${SITE.address.district}`,
    addressLocality: SITE.address.city,
    addressCountry: SITE.address.countryCode,
  },
  areaServed: { '@type': 'Country', name: 'Mozambique' },
  knowsLanguage: ['pt', 'en', 'fr'],
  sameAs: SITE.social.map((s) => s.url),
  memberOf: { '@type': 'Organization', name: 'ESOMAR', url: 'https://esomar.org/' },
});

/** Documento completo. */
export function page({ path, title, description, body, schema = [], ogType = 'website', noindex = false, home = false }) {
  const canonical = SITE.url + path;
  const schemas = [orgSchema(), ...schema].map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n  ');
  return `<!doctype html>
<html lang="pt-MZ" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="pt-MZ" href="${canonical}">
  <link rel="alternate" hreflang="x-default" href="${canonical}">
  ${noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large">'}
  <meta name="theme-color" content="#102A43">
  <meta property="og:type" content="${ogType}">
  <meta property="og:site_name" content="Intelsight">
  <meta property="og:locale" content="pt_PT">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${SITE.url}/assets/img/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/assets/img/favicon-32.png" sizes="32x32" type="image/png">
  <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="preload" href="/assets/fonts/manrope-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/source-sans-3-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/assets/css/main.css?v=__V__">
  <script>document.documentElement.classList.remove('no-js');window.INTELSIGHT=${JSON.stringify({ email: SITE.email, formEndpoint: SITE.formEndpoint, ga4Id: SITE.ga4Id })};</script>
  <script src="/assets/js/main.js?v=__V__" defer></script>
  ${schemas}
</head>
<body${home ? ' class="is-home"' : ''}>
  <a class="skip-link" href="#main">Saltar para o conteúdo</a>
  ${menu(path)}
  ${rail(path)}
  <div class="site">
    ${topbar()}
    <main id="main" class="site-main">
${body}
    </main>
    ${footer()}
  </div>
  ${cookieBanner()}
</body>
</html>
`;
}

/** Hero padrão das páginas interiores. */
export function pageHero({ crumbs, eyebrow, title, intro, pal = 'a', artLabel = '', actions = '' }) {
  return `
  <section class="phero wrap">
    ${breadcrumbs(crumbs)}
    <div class="phero__grid">
      <div>
        ${eyebrow ? `<p class="eyebrow muted" data-reveal>${esc(eyebrow)}</p>` : ''}
        <h1 data-reveal style="--rd:60ms; margin-top:14px">${esc(title)}</h1>
        ${intro ? `<p class="lead phero__intro muted" data-reveal style="--rd:140ms">${intro}</p>` : ''}
        ${actions ? `<div class="btn-row" style="margin-top:28px;--rd:200ms" data-reveal>${actions}</div>` : ''}
      </div>
      ${art(pal, artLabel ? `<span class="phero__art-label" aria-hidden="true">${esc(artLabel)}</span>` : '', 'phero__art')}
    </div>
  </section>`;
}
