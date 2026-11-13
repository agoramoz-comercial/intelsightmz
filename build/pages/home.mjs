import {
  SITE, DECISIONS, SOLUTIONS, PRODUCTS, STEPS, CAPABILITIES, DIFFERENTIATORS,
  SECTORS, TEAM, CLIENTS, INSIGHTS, CHECKLIST,
} from '../content.mjs';
import { esc, pad, icon, lenses, art, label, btn, linkArrow, sectionHead, finalCta } from '../layout.mjs';
import { productCard, leadForm, caseModel, insightFeature, memberCard } from './parts.mjs';

export default function home() {
  const featured = INSIGHTS.find((i) => i.featured);

  const body = `
  <!-- 1. HERO ------------------------------------------------------------ -->
  <section class="hero on-dark" aria-label="Apresentação">
    <div class="hero__a" aria-hidden="true"></div>
    <div class="hero__b" aria-hidden="true"></div>
    <div class="lenses hero__lenses" aria-hidden="true" data-parallax>${'<span class="lens"></span>'.repeat(6)}</div>
    <div class="hero__top">
      <img class="hero__logo" src="/assets/img/logo-light.webp" alt="" width="895" height="326">
      <div class="hero__meta">
        <p class="eyebrow">Inteligência de mercado em Moçambique</p>
        <p class="hero__index" aria-hidden="true">Maputo — MZ</p>
      </div>
    </div>
    <div class="hero__block">
      <p class="mega hero__mega">
        <span class="sr-only">${esc(SITE.tagline)}</span>
        <span class="line" data-split aria-hidden="true">Veja além.</span>
        <span class="line line--over" data-split aria-hidden="true" style="--base:260ms">Decida melhor.</span>
      </p>
    </div>
    <a class="hero__scroll" href="#intro">Descobrir ${icon.down}</a>
  </section>

  <!-- 1b. INTRO (H1) ----------------------------------------------------- -->
  <section class="intro wrap" id="intro" aria-labelledby="h1">
    ${label('', 'Intelsight')}
    <h1 id="h1" style="margin-top:18px" data-reveal>Veja além dos dados. Tome decisões com evidência.</h1>
    <div class="intro__body">
      <p class="intro__note" data-reveal>Empresa moçambicana de pesquisa de mercado, inteligência de negócios e consultoria estratégica.</p>
      <div class="intro__text stack" style="--stack:24px">
        <p class="lead" data-reveal>A Intelsight ajuda empresas, investidores e instituições a compreender mercados, consumidores e concorrentes em Moçambique. Combinamos pesquisa quantitativa, investigação qualitativa, inteligência competitiva e análise de dados para reduzir incerteza e orientar decisões de entrada, crescimento, produto, marca e cliente.</p>
        <div class="btn-row" data-reveal style="--rd:80ms">
          ${btn('Solicitar diagnóstico de pesquisa', '/contactos/#diagnostico')}
          ${btn('Explorar soluções', '/solucoes/', 'ghost')}
        </div>
        <p class="intro__micro" data-reveal style="--rd:140ms">${icon.check}<span>Primeira conversa orientada à decisão, sem compromisso comercial.</span></p>
      </div>
    </div>
    <ul class="verbs" role="list" aria-label="Da observação à decisão">
      <li><span class="xl" data-split>Observar.</span><small>Sinais no mercado</small></li>
      <li><span class="xl" data-split>Compreender.</span><small>Mecanismos e segmentos</small></li>
      <li><span class="xl" data-split>Decidir.</span><small>Com evidência proporcional</small></li>
    </ul>
  </section>

  <!-- 2. FAIXA DE CONFIANÇA ---------------------------------------------- -->
  <section class="section on-dark" style="margin-top:var(--section)" aria-labelledby="trust-title">
    <div class="wrap">
      ${sectionHead({ n: '01', label: 'Capacidades', id: 'trust-title', title: 'Decisões empresariais exigem mais do que informação. Exigem evidência adequada ao contexto.' })}
      <ul class="caps" role="list">
        ${CAPABILITIES.map((c, i) => `
        <li class="cap">
          <div><span class="cap__n">${pad(i + 1)}</span><span class="xl">${esc(c.word)}</span></div>
          <p>${esc(c.text)}</p>
        </li>`).join('')}
      </ul>
      <div class="proof">
        <div class="stack" style="--stack:14px">
          <p class="label">Organizações que confiaram na Intelsight</p>
          <a class="esomar" href="${SITE.esomarUrl}" target="_blank" rel="noopener">
            <img src="/assets/img/esomar.webp" alt="ESOMAR Corporate Member" width="140" height="23" loading="lazy">
            <span>Membro corporativo ESOMAR.<br>Verificar adesão</span>
          </a>
        </div>
        <div class="proof__logos">
          ${CLIENTS.map((c) => `<div class="proof__logo"><img src="${c.img}" alt="${esc(c.name)}" width="${c.w}" height="${c.h}" loading="lazy"></div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- 3. PROBLEMAS RESOLVIDOS -------------------------------------------- -->
  <section class="section" aria-labelledby="dec-title">
    <div class="wrap">
      ${sectionHead({ n: '02', label: 'Problemas que resolvemos', id: 'dec-title', title: 'Que decisão precisa de tomar?', aside: 'O valor da pesquisa não está na quantidade de dados recolhidos. Está na qualidade da decisão que esses dados permitem tomar.' })}
      <div class="decisions">
        ${DECISIONS.map((d, i) => `
        <article class="dcard" data-reveal style="--rd:${(i % 3) * 80}ms">
          <span class="dcard__n">${pad(i + 1)}</span>
          <h3>${esc(d.title)}</h3>
          <p>${esc(d.text)}</p>
          <p class="dcard__result">Resultado<strong>${esc(d.result)}</strong></p>
          ${linkArrow(d.cta, d.href)}
        </article>`).join('')}
      </div>
    </div>
  </section>

  <!-- 4. SOLUÇÕES (carrossel de títulos) --------------------------------- -->
  <section class="section section--mist" aria-labelledby="sol-title">
    <div class="wrap">
      ${sectionHead({ n: '03', label: 'Soluções', id: 'sol-title', title: 'Investigação desenhada à volta da sua decisão', aside: 'Selecionamos o método a partir do problema empresarial. Não recomendamos um inquérito, grupo focal ou dashboard antes de compreender a decisão, o risco e a evidência necessária.', seeAll: { label: 'Ver todas', href: '/solucoes/' } })}
      <div class="solx" data-solx>
        <div class="solx__tabs" role="tablist" aria-label="Famílias de soluções">
          ${SOLUTIONS.map((s, i) => `<button class="solx__tab" type="button" role="tab" id="solx-t${i}" aria-controls="solx-p${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(s.short)}</button>`).join('')}
        </div>
        <div class="solx__stage">
          <button class="solx__nav solx__nav--prev" type="button" data-solx-prev aria-label="Solução anterior">${icon.arrowLeft}</button>
          ${SOLUTIONS.map((s, i) => `
          <div class="solx__panel" role="tabpanel" id="solx-p${i}" aria-labelledby="solx-t${i}"${i ? ' hidden' : ''}>
            <h3>${esc(s.name)}</h3>
          </div>`).join('')}
          <button class="solx__nav solx__nav--next" type="button" data-solx-next aria-label="Solução seguinte">${icon.arrow}</button>
        </div>
        ${SOLUTIONS.map((s, i) => `
        <div class="solx__detail" data-solx-detail${i ? ' hidden' : ''}>
          <p class="solx__count" aria-hidden="true">${pad(i + 1)}<span>/${pad(SOLUTIONS.length)}</span></p>
          <p class="solx__text">${esc(s.summary)}</p>
          <div class="solx__cta">${btn('Ver solução', `/solucoes/${s.slug}/`, 'ghost')}</div>
        </div>`).join('')}
      </div>
      <p class="small muted" style="margin-top:56px">O portefólio da Intelsight inclui estas sete famílias de serviços.</p>
    </div>
  </section>

  <!-- 5. PRODUTOS EMPACOTADOS -------------------------------------------- -->
  <section class="section" aria-labelledby="prod-title">
    <div class="wrap">
      ${sectionHead({ n: '04', label: 'Produtos', id: 'prod-title', title: 'Comece por uma solução com escopo, prazo e entregáveis claros', seeAll: { label: 'Todos os produtos', href: '/produtos/' } })}
      <div class="pstack">
        ${PRODUCTS.filter((p) => p.home).map((p, k) => productCard(p, k, true)).join('')}
      </div>
    </div>
  </section>

  <!-- 6. METODOLOGIA ----------------------------------------------------- -->
  <section class="section section--mist" aria-labelledby="met-title">
    <div class="wrap">
      ${sectionHead({ n: '05', label: 'Metodologia', id: 'met-title', title: 'Do problema empresarial à decisão informada', seeAll: { label: 'Conheça a metodologia', href: '/metodologia/' } })}
      <ol class="steps" role="list">
        ${STEPS.map((s, i) => `
        <li class="step">
          <span class="step__n" aria-hidden="true">${pad(i + 1)}</span>
          <h3><span class="sr-only">Passo ${i + 1}: </span>${esc(s.title)}</h3>
          <p>${esc(s.text)}</p>
        </li>`).join('')}
      </ol>
      <div class="btn-row" style="margin-top:40px">${btn('Conheça a nossa metodologia', '/metodologia/', 'ghost')}</div>
    </div>
  </section>

  <!-- 7. PORQUÊ A INTELSIGHT --------------------------------------------- -->
  <section class="section" aria-labelledby="why-title">
    <div class="wrap">
      ${sectionHead({ n: '06', label: 'Porquê a Intelsight', id: 'why-title', title: 'Conhecimento local. Rigor metodológico. Utilidade executiva.' })}
      <div class="why">
        <figure class="why__media">
          <div class="slices" style="aspect-ratio:1/1">
            <img src="/assets/img/analise.webp" alt="Analista da Intelsight a rever gráficos e relatórios de um estudo de mercado" width="1280" height="1236" loading="lazy">
          </div>
          <figcaption class="figcap">Da recolha à recomendação: cada número tem método, contexto e limitação documentados.</figcaption>
        </figure>
        <ol class="why__list" role="list">
          ${DIFFERENTIATORS.map((d, i) => `
          <li class="why__item" data-reveal style="--rd:${i * 60}ms">
            <span class="dcard__n">${pad(i + 1)}</span>
            <h3 class="h4">${esc(d.title)}</h3>
            <p>${esc(d.text)}</p>
          </li>`).join('')}
        </ol>
      </div>
    </div>
  </section>

  <!-- 8. SECTORES -------------------------------------------------------- -->
  <section class="section on-dark" aria-labelledby="sec-title">
    <div class="wrap">
      ${sectionHead({ n: '07', label: 'Sectores', id: 'sec-title', title: 'Inteligência adaptada à dinâmica de cada sector', seeAll: { label: 'Ver sectores', href: '/sectores/' } })}
    </div>
    <div class="marquee" aria-hidden="true">
      <div class="marquee__track">
        ${[0, 1].map((rep) => SECTORS.map((s) => `<span class="marquee__item"><span class="lg">${esc(s.name.split(' e ')[0].replace(/ —.*/, ''))}</span><span class="marquee__dot"></span></span>`).join('')).join('')}
      </div>
    </div>
    <div class="wrap">
      <ul class="sectors" role="list">
        ${SECTORS.map((s, i) => `<li class="sector"><span class="sector__n">${pad(i + 1)}</span><h3>${esc(s.name)}</h3><p>${esc(s.text)}</p></li>`).join('')}
      </ul>
      <p class="small muted" style="margin-top:20px">Áreas de atuação. A experiência específica em cada sector é apresentada com base em projetos e estudos documentados.</p>
    </div>
  </section>

  <!-- 9. CASO EM DESTAQUE ------------------------------------------------ -->
  <section class="section" aria-labelledby="case-title">
    <div class="wrap">
      ${sectionHead({ n: '08', label: 'Caso em destaque', id: 'case-title', title: 'Da pergunta inicial à decisão', aside: 'Publicamos casos apenas com autorização do cliente. Cada caso segue a mesma estrutura: problema, método, cobertura, resultado verificável, decisão suportada e limitação.', seeAll: { label: 'Explorar casos', href: '/casos/' } })}
      ${caseModel()}
    </div>
  </section>

  <!-- 10. INSIGHT EM DESTAQUE -------------------------------------------- -->
  <section class="section section--mist" aria-labelledby="ins-title">
    <div class="wrap">
      ${sectionHead({ n: '09', label: 'Insights', id: 'ins-title', title: 'Inteligência sobre o mercado moçambicano', seeAll: { label: 'Todos os insights', href: '/insights/' } })}
      ${insightFeature(featured)}
    </div>
  </section>

  <!-- EQUIPA ------------------------------------------------------------- -->
  <section class="section" aria-labelledby="team-title">
    <div class="wrap">
      ${sectionHead({ n: '10', label: 'Equipa', id: 'team-title', title: 'As pessoas por trás da evidência', aside: 'Investigadores, analistas e consultores com conhecimento profundo do mercado moçambicano e padrões metodológicos internacionais.', seeAll: { label: 'Sobre nós', href: '/sobre-nos/' } })}
      <div class="team team--wide">
        ${TEAM.map((m, i) => memberCard(m, i)).join('')}
        <article class="member member--placeholder" data-reveal style="--rd:160ms">
          <div class="member__photo art"><p>Perfis completos da equipa de investigação em publicação.</p></div>
          <h3>Equipa de investigação</h3>
          <p>Research, campo e análise</p>
        </article>
      </div>
    </div>
  </section>

  <!-- 11. LEAD MAGNET ---------------------------------------------------- -->
  <section class="section section--mist" aria-labelledby="lead-title" id="checklist">
    <div class="wrap">
      ${sectionHead({ n: '11', label: 'Recurso gratuito', id: 'lead-title', title: 'Está a avaliar uma decisão em Moçambique?', aside: 'Descarregue a checklist para estruturar uma decisão de entrada, expansão ou lançamento antes de contratar um estudo completo.' })}
      ${leadForm()}
    </div>
  </section>

  <!-- 12. CTA FINAL ------------------------------------------------------ -->
  ${finalCta()}
  `;

  return {
    path: '/',
    title: 'Pesquisa de Mercado e Business Intelligence em Moçambique | Intelsight',
    description: 'Pesquisa de mercado, consumer insights, inteligência competitiva e análise de dados para decisões de entrada, crescimento e investimento em Moçambique.',
    body,
    home: true,
    schema: [{
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Intelsight',
      url: `${SITE.url}/`,
      inLanguage: 'pt-MZ',
      publisher: { '@id': `${SITE.url}/#organization` },
    }],
  };
}
