import {
  SITE, SOLUTIONS, PRODUCTS, SECTORS, STEPS, TEAM, PRINCIPLES, METHOD_FAMILIES,
  QUALITY, TRANSPARENCY, INSIGHTS, EDITORIAL, CHECKLIST, FAQ, DIFFERENTIATORS,
} from '../content.mjs';
import {
  esc, pad, icon, art, label, btn, linkArrow, sectionHead, finalCta, pageHero,
  breadcrumbSchema,
} from '../layout.mjs';
import { productCard, caseModel, insightFeature, memberCard, leadForm, field, select } from './parts.mjs';

const HOME = { name: 'Início', href: '/' };
const ticks = (arr, cls = '') => `<ul class="ticks ${cls}" role="list">${arr.map((x) => `<li>${esc(x[0].toUpperCase() + x.slice(1))}</li>`).join('')}</ul>`;
const chips = (arr) => `<ul class="chips" role="list">${arr.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;

/* ———————————————————— Soluções (índice) */
export function solucoes() {
  const crumbs = [HOME, { name: 'Soluções', href: '/solucoes/' }];
  const body = `
  ${pageHero({ crumbs, eyebrow: 'Soluções', title: 'Soluções de pesquisa de mercado em Moçambique', intro: 'Estudos de entrada, consumidores, concorrência, marca, produto, satisfação e análise de dados para empresas e instituições. Selecionamos o método a partir da decisão, não o contrário.', pal: 'a', artLabel: 'Sete famílias de soluções' })}
  <section class="section" style="padding-top:0" aria-label="Lista de soluções">
    <div class="wrap">
      <ul class="rows" role="list">
        ${SOLUTIONS.map((s, i) => `
        <li class="row"><a href="/solucoes/${s.slug}/">
          <span class="row__n">${pad(i + 1)}</span>
          <span class="row__t">${esc(s.name)}</span>
          <p>${esc(s.summary)}</p>
          ${icon.diag}
        </a></li>`).join('')}
      </ul>
    </div>
  </section>
  <section class="section section--mist" aria-labelledby="pp">
    <div class="wrap">
      ${sectionHead({ n: '', label: 'Produtos', id: 'pp', title: 'Prefere começar por um escopo fechado?', aside: 'Os produtos empacotados têm escopo, prazo e entregáveis definidos à partida.', seeAll: { label: 'Ver produtos', href: '/produtos/' } })}
    </div>
  </section>
  ${finalCta()}`;
  return {
    path: '/solucoes/',
    title: 'Soluções de Pesquisa de Mercado em Moçambique | Intelsight',
    description: 'Estudos de entrada, consumidores, concorrência, marca, produto, satisfação e análise de dados para empresas e instituições.',
    body,
    schema: [breadcrumbSchema(crumbs), {
      '@context': 'https://schema.org', '@type': 'ItemList', name: 'Soluções Intelsight',
      itemListElement: SOLUTIONS.map((s, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE.url}/solucoes/${s.slug}/`, name: s.name })),
    }],
  };
}

/* ———————————————————— Página de serviço (template) */
export function servico(s, i) {
  const crumbs = [HOME, { name: 'Soluções', href: '/solucoes/' }, { name: s.short, href: `/solucoes/${s.slug}/` }];
  const prod = PRODUCTS.find((p) => p.slug === s.product);
  const pal = ['a', 'b', 'c', 'd'][i % 4];
  const others = SOLUTIONS.filter((x) => x.slug !== s.slug);
  const body = `
  ${pageHero({ crumbs, eyebrow: `Solução ${pad(i + 1)} de ${pad(SOLUTIONS.length)}`, title: s.h1, intro: esc(s.intro), pal, artLabel: s.short, actions: `${btn(s.cta, `/contactos/?solucao=${encodeURIComponent(s.name)}#diagnostico`)}${btn('Ver metodologia', '/metodologia/', 'ghost')}` })}
  <section class="section" style="padding-top:0" aria-label="Detalhe da solução">
    <div class="wrap blocks">
      <article class="block" data-reveal>
        ${label('01', 'Quando utilizar')}
        <h2>Situações em que este estudo faz diferença</h2>
        ${ticks(s.when)}
      </article>
      <article class="block block--dark on-dark" data-reveal style="--rd:80ms">
        ${label('02', 'Perguntas respondidas')}
        <h2>O que vai ficar a saber</h2>
        <ul class="ticks ticks--q" role="list">${s.questions.map((q) => `<li>${esc(q)}</li>`).join('')}</ul>
      </article>
      <article class="block" data-reveal>
        ${label('03', 'Métodos possíveis')}
        <h2>Métodos escolhidos a partir da decisão</h2>
        ${chips(s.methods)}
        <p class="small muted">A combinação final depende da pergunta, do prazo, da população e das limitações do contexto.</p>
      </article>
      <article class="block" data-reveal style="--rd:80ms">
        ${label('04', 'Entregáveis')}
        <h2>O que recebe</h2>
        ${ticks(s.deliverables, 'ticks--cols')}
      </article>
      ${prod ? `
      <article class="block block--wide" data-reveal>
        <div class="grid" style="align-items:center">
          <div class="c-1-7 stack" style="--stack:12px">
            ${label('', 'Produto relacionado')}
            <h2>${esc(prod.name)}</h2>
            <p class="muted">${esc(prod.who)} ${esc(prod.meta)}</p>
          </div>
          <div class="c-8-12" style="justify-self:start">${btn(prod.cta, `/produtos/#${prod.slug}`, 'ghost')}</div>
        </div>
      </article>` : ''}
    </div>
  </section>
  <section class="section section--mist" aria-labelledby="oth">
    <div class="wrap">
      ${sectionHead({ n: '', label: 'Outras soluções', id: 'oth', title: 'Explore outras soluções', seeAll: { label: 'Ver todas', href: '/solucoes/' } })}
      <ul class="rows" role="list">
        ${others.slice(0, 3).map((o) => `<li class="row"><a href="/solucoes/${o.slug}/"><span class="row__n">${pad(SOLUTIONS.indexOf(o) + 1)}</span><span class="row__t">${esc(o.name)}</span><p>${esc(o.summary)}</p>${icon.diag}</a></li>`).join('')}
      </ul>
    </div>
  </section>
  ${finalCta()}`;
  return {
    path: `/solucoes/${s.slug}/`,
    title: s.seoTitle,
    description: s.seoDesc,
    body,
    schema: [breadcrumbSchema(crumbs), {
      '@context': 'https://schema.org', '@type': 'Service', name: s.name, serviceType: s.name,
      description: s.seoDesc, provider: { '@id': `${SITE.url}/#organization` },
      areaServed: { '@type': 'Country', name: 'Mozambique' }, url: `${SITE.url}/solucoes/${s.slug}/`,
    }],
  };
}

/* ———————————————————— Sectores */
export function sectores() {
  const crumbs = [HOME, { name: 'Sectores', href: '/sectores/' }];
  const body = `
  ${pageHero({ crumbs, eyebrow: 'Sectores', title: 'Inteligência adaptada à dinâmica de cada sector', intro: 'Cada sector tem os seus próprios canais, reguladores, ciclos de decisão e comportamentos. Adaptamos perguntas, amostras e métodos a essa dinâmica.', pal: 'c', artLabel: 'Oito áreas de atuação' })}
  <section class="section section--paper" style="padding-top:0" aria-label="Áreas de atuação">
    <div class="wrap">
      <ul class="sectors" role="list" style="margin-top:0">
        ${SECTORS.map((s, i) => `<li class="sector"><span class="sector__n">${pad(i + 1)}</span><h2 class="h4">${esc(s.name)}</h2><p>${esc(s.text)}</p></li>`).join('')}
      </ul>
      <p class="small muted" style="margin-top:20px; max-width:70ch">Estas são áreas de atuação. A experiência específica em cada sector é apresentada com base em projetos, equipa, dados ou estudos documentados.</p>
    </div>
  </section>
  ${finalCta({ title: 'Qual é a decisão no seu sector?' })}`;
  return {
    path: '/sectores/', title: 'Sectores de Atuação | Pesquisa de Mercado em Moçambique | Intelsight',
    description: 'Pesquisa de mercado e inteligência para serviços financeiros, telecomunicações, FMCG, energia, agronegócio, saúde, sector público e imobiliário em Moçambique.',
    body, schema: [breadcrumbSchema(crumbs)],
  };
}

/* ———————————————————— Produtos */
export function produtos() {
  const crumbs = [HOME, { name: 'Produtos', href: '/produtos/' }];
  const body = `
  ${pageHero({ crumbs, eyebrow: 'Produtos', title: 'Soluções com escopo, prazo e entregáveis claros', intro: 'Para decisões recorrentes, começar por um produto empacotado reduz tempo de preparação e torna o investimento previsível. Cada produto pode ser ajustado ao seu contexto.', pal: 'b', artLabel: 'Seis produtos' })}
  <section class="section" style="padding-top:0" aria-label="Produtos">
    <div class="wrap pstack">
      ${PRODUCTS.map((p, k) => productCard(p, k, true)).join('')}
    </div>
  </section>
  ${finalCta({ title: 'Não sabe por qual produto começar?', text: 'Descreva a decisão e o prazo. Indicamos o produto mais adequado, ou um estudo à medida, antes de qualquer proposta.' })}`;
  return {
    path: '/produtos/', title: 'Produtos de Pesquisa de Mercado em Moçambique | Intelsight',
    description: 'Market Entry Scan, Consumer Pulse, Competitor Radar, Brand Health Tracker, Concept Testing Sprint e Customer Experience Diagnostic.',
    body, schema: [breadcrumbSchema(crumbs)],
  };
}

/* ———————————————————— Metodologia */
export function metodologia() {
  const crumbs = [HOME, { name: 'Metodologia', href: '/metodologia/' }];
  const body = `
  ${pageHero({ crumbs, eyebrow: 'Metodologia', title: 'Métodos transparentes. Evidência proporcional à decisão.', intro: 'Não existe um método universal para todas as perguntas. Um inquérito mede padrões declarados. Uma entrevista explora mecanismos e significados. Um grupo focal permite observar interação e linguagem. Dados comportamentais mostram ações. A combinação depende da decisão e das limitações do contexto.', pal: 'd', artLabel: 'Do problema à decisão' })}
  <section class="section" style="padding-top:0" aria-labelledby="proc">
    <div class="wrap">
      ${sectionHead({ n: '01', label: 'Processo', id: 'proc', title: 'Do problema empresarial à decisão informada' })}
      <ol class="steps" role="list">
        ${STEPS.map((s, i) => `<li class="step"><span class="step__n" aria-hidden="true">${pad(i + 1)}</span><h3><span class="sr-only">Passo ${i + 1}: </span>${esc(s.title)}</h3><p>${esc(s.text)}</p></li>`).join('')}
      </ol>
    </div>
  </section>
  <section class="section section--mist" aria-labelledby="mf">
    <div class="wrap">
      ${sectionHead({ n: '02', label: 'Métodos', id: 'mf', title: 'Quatro famílias de métodos, combinadas à medida' })}
      <div class="blocks">
        ${METHOD_FAMILIES.map((m, i) => `<article class="block${i === 1 ? ' block--dark on-dark' : ''}" data-reveal style="--rd:${(i % 2) * 80}ms">${label(pad(i + 1), 'Família')}<h3>${esc(m.title)}</h3>${chips(m.items)}</article>`).join('')}
      </div>
    </div>
  </section>
  <section class="section" aria-labelledby="qc">
    <div class="wrap">
      <div class="blocks">
        <article class="block" data-reveal>
          ${label('03', 'Controlo de qualidade')}
          <h2 id="qc">Qualidade verificada em cada etapa</h2>
          ${ticks(QUALITY, 'ticks--cols')}
        </article>
        <article class="block block--dark on-dark" data-reveal style="--rd:80ms">
          ${label('04', 'Transparência')}
          <h2>Cada relatório declara</h2>
          ${ticks(TRANSPARENCY, 'ticks--cols')}
        </article>
      </div>
    </div>
  </section>
  <section class="section section--mist" aria-labelledby="prot">
    <div class="wrap grid" style="align-items:center">
      <div class="c-1-6 stack" style="--stack:20px">
        ${label('05', 'Proteção de dados')}
        <h2 id="prot">Dados pessoais tratados com necessidade, finalidade e segurança</h2>
        <p class="muted">Aplicamos princípios de necessidade, finalidade, controlo de acesso, retenção e segurança. A política de privacidade descreve o tratamento de dados, as medidas organizativas e técnicas, a retenção, os direitos dos titulares e os canais de contacto.</p>
        <p>${linkArrow('Ler a política de privacidade', SITE.privacyUrl)}</p>
      </div>
      <div class="c-8-12">${art('a', `<span class="phero__art-label" aria-hidden="true">Privacidade por desenho</span>`, 'phero__art')}</div>
    </div>
  </section>
  ${finalCta({ title: 'Que evidência é suficiente para a sua decisão?' })}`;
  return {
    path: '/metodologia/', title: 'Metodologia de Pesquisa de Mercado | Intelsight',
    description: 'Conheça os métodos quantitativos, qualitativos e analíticos utilizados pela Intelsight em estudos de mercado.',
    body, schema: [breadcrumbSchema(crumbs)],
  };
}

/* ———————————————————— Casos */
export function casos() {
  const crumbs = [HOME, { name: 'Casos', href: '/casos/' }];
  const body = `
  ${pageHero({ crumbs, eyebrow: 'Casos', title: 'Da pergunta inicial à decisão', intro: 'Os estudos de caso mostram como a evidência apoiou uma decisão concreta. Publicamos apenas casos autorizados pelos clientes, com resultado verificável e limitações declaradas.', pal: 'c', artLabel: 'Casos autorizados' })}
  <section class="section" style="padding-top:0" aria-label="Estrutura de caso">
    <div class="wrap stack" style="--stack:40px">
      ${caseModel()}
      <div class="grid">
        <div class="c-1-7 stack" style="--stack:16px">
          <h2>Porque não mostramos logótipos sem contexto</h2>
          <p class="muted">Um logótipo diz pouco sobre a qualidade de uma decisão. Um caso útil explica o problema, o método, a cobertura, o resultado e o que ficou por saber. Por isso cada caso segue a mesma estrutura e só é publicado com autorização.</p>
        </div>
      </div>
    </div>
  </section>
  ${finalCta({ title: 'O próximo caso pode ser a sua decisão.' })}`;
  return {
    path: '/casos/', title: 'Estudos de Caso | Pesquisa de Mercado em Moçambique | Intelsight',
    description: 'Como a evidência da Intelsight apoia decisões de entrada, produto, marca e cliente em Moçambique. Casos publicados com autorização.',
    body, schema: [breadcrumbSchema(crumbs)],
  };
}

/* ———————————————————— Insights */
export function insights() {
  const crumbs = [HOME, { name: 'Insights', href: '/insights/' }];
  const featured = INSIGHTS.find((i) => i.featured);
  const rest = INSIGHTS.filter((i) => !i.featured);
  const body = `
  ${pageHero({ crumbs, eyebrow: 'Insights', title: 'Estudos e insights sobre o mercado moçambicano', intro: 'Análises, estudos e dados sobre consumidores, sectores, concorrência e tendências económicas em Moçambique. Cada estudo declara a sua amostra, período e limitações.', pal: 'b', artLabel: 'Evidência local' })}
  <section class="section" style="padding-top:0" aria-label="Estudo em destaque">
    <div class="wrap">${insightFeature(featured)}</div>
  </section>
  <section class="section section--mist" aria-labelledby="pub">
    <div class="wrap">
      ${sectionHead({ n: '01', label: 'Publicações', id: 'pub', title: 'Relatórios e artigos' })}
    </div>
    <div class="posts">
      ${rest.map((p) => `<article class="post"><span class="post__kind">${esc(p.kind)}</span><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p>${linkArrow('Ler', p.url, true)}</article>`).join('')}
    </div>
  </section>
  <section class="section" aria-labelledby="ed">
    <div class="wrap">
      ${sectionHead({ n: '02', label: 'Em preparação', id: 'ed', title: 'Próximos temas', aside: 'Cada artigo liga a uma solução, um recurso e um próximo passo.' })}
      <div class="blocks" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))">
        ${EDITORIAL.map((m) => `<article class="block" data-reveal>${label('', m.month)}<ul class="ticks" role="list">${m.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></article>`).join('')}
      </div>
    </div>
  </section>
  ${finalCta()}`;
  return {
    path: '/insights/', title: 'Estudos e Insights sobre o Mercado Moçambicano',
    description: 'Análises, estudos e dados sobre consumidores, sectores, concorrência e tendências económicas em Moçambique.',
    body,
    schema: [breadcrumbSchema(crumbs), {
      '@context': 'https://schema.org', '@type': 'Report', name: featured.title, about: 'Sector informal em Moçambique',
      url: featured.url, inLanguage: 'pt', publisher: { '@id': `${SITE.url}/#organization` },
      description: featured.text, spatialCoverage: 'Maputo, Matola, Beira, Nampula', temporalCoverage: '2025-11/2025-12',
    }],
  };
}

/* ———————————————————— Recursos */
export function recursos() {
  const crumbs = [HOME, { name: 'Recursos', href: '/recursos/' }];
  const body = `
  ${pageHero({ crumbs, eyebrow: 'Recursos', title: 'Ferramentas para decidir antes de investir', intro: 'Recursos práticos para estruturar uma decisão de entrada, expansão ou lançamento antes de contratar um estudo completo.', pal: 'a', artLabel: 'Checklist gratuita' })}
  <section class="section" style="padding-top:0" aria-label="Checklist">
    <div class="wrap">${leadForm()}</div>
  </section>
  ${finalCta()}`;
  return {
    path: '/recursos/', title: 'Recursos: Mozambique Market Entry Decision Checklist | Intelsight',
    description: 'Descarregue a checklist para estruturar uma decisão de entrada, expansão ou lançamento em Moçambique: procura, concorrência, preço, canais, regulação e risco.',
    body, schema: [breadcrumbSchema(crumbs)],
  };
}

export function checklist() {
  const crumbs = [HOME, { name: 'Recursos', href: '/recursos/' }, { name: 'Checklist', href: '/recursos/checklist-entrada-mercado/' }];
  const body = `
  ${pageHero({ crumbs, eyebrow: 'Checklist', title: 'Mozambique Market Entry Decision Checklist', intro: 'Dez dimensões para estruturar uma decisão de entrada, expansão ou lançamento. Use-a para alinhar a equipa, identificar lacunas de evidência e definir a regra de decisão antes de investir.', pal: 'a', artLabel: '10 dimensões' })}
  <section class="section" style="padding-top:0" aria-label="Checklist">
    <div class="wrap">
      <div class="btn-row no-print" style="margin-bottom:32px"><button class="btn" type="button" onclick="window.print()">Guardar em PDF / imprimir</button></div>
      <ol class="cl" role="list">
        ${CHECKLIST.map((c) => `<li><h2>${esc(c.title)}</h2><ul class="cl__q" role="list">${c.q.map((q) => `<li>${esc(q)}</li>`).join('')}</ul></li>`).join('')}
      </ol>
      <p class="caveat" style="margin-top:40px"><span><strong>Como usar.</strong> Marque cada pergunta apenas quando existir evidência, não opinião. As perguntas sem resposta são o escopo do estudo que precisa.</span></p>
      <p class="small muted" style="margin-top:20px">© ${new Date().getFullYear()} ${esc(SITE.legalName)} · ${SITE.email} · ${SITE.phone}</p>
    </div>
  </section>
  ${finalCta({ title: 'Ficaram perguntas sem evidência?', text: 'Transformamos as lacunas da checklist num desenho de estudo com escopo, prazo e entregáveis claros.' })}`;
  return {
    path: '/recursos/checklist-entrada-mercado/', title: 'Checklist de Entrada no Mercado de Moçambique | Intelsight',
    description: 'Dez dimensões para estruturar uma decisão de entrada em Moçambique: procura, concorrência, preço, canais, regulação, parceiros, consumidor, risco, métricas e regra de decisão.',
    body, noindex: true, schema: [breadcrumbSchema(crumbs)],
  };
}

/* ———————————————————— Sobre */
export function sobre() {
  const crumbs = [HOME, { name: 'Sobre Nós', href: '/sobre-nos/' }];
  const body = `
  ${pageHero({ crumbs, eyebrow: 'Sobre nós', title: 'Inteligência local para decisões de grande impacto', intro: 'A Intelsight é uma empresa moçambicana de pesquisa de mercado, inteligência empresarial e análise de dados. Trabalhamos com organizações que precisam compreender melhor o mercado, reduzir risco e transformar evidência em ação.', pal: 'b', artLabel: 'Veja além' })}
  <section class="section" style="padding-top:0" aria-label="Missão e visão">
    <div class="wrap grid" style="align-items:start">
      <figure class="c-1-5">
        <div class="slices" style="aspect-ratio:1/1"><img src="/assets/img/sobre.webp" alt="Equipa da Intelsight a analisar dashboards e relatórios" width="768" height="766" loading="lazy"></div>
      </figure>
      <div class="c-6-12 stack" style="--stack:48px">
        <div class="stack" style="--stack:16px" data-reveal>
          ${label('01', 'A nossa missão')}
          <p class="h3">Apoiar empresas e instituições com investigação rigorosa, conhecimento local e recomendações capazes de melhorar decisões de entrada, crescimento, produto, marca e experiência do cliente.</p>
        </div>
        <div class="stack" style="--stack:16px" data-reveal>
          ${label('02', 'A nossa visão')}
          <p class="h3">Contribuir para elevar o padrão da inteligência de mercado em Moçambique, tornando a evidência mais acessível, transparente e útil para decisões empresariais e institucionais.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="section on-dark" aria-labelledby="pr">
    <div class="wrap">
      ${sectionHead({ n: '03', label: 'Princípios', id: 'pr', title: 'Os nossos princípios' })}
      <ul class="caps" role="list">
        ${PRINCIPLES.map((p, i) => `<li class="cap"><div><span class="cap__n">${pad(i + 1)}</span><span class="xl">${esc(p.title)}</span></div><p>${esc(p.text)}</p></li>`).join('')}
      </ul>
    </div>
  </section>
  <section class="section" aria-labelledby="eq">
    <div class="wrap">
      ${sectionHead({ n: '04', label: 'Equipa', id: 'eq', title: 'As pessoas por trás da evidência', aside: 'Cada perfil inclui função, experiência, sectores, métodos e formação verificável. Os perfis completos estão em atualização.' })}
      <div class="team team--wide">
        ${TEAM.map((m, i) => memberCard(m, i)).join('')}
        <article class="member member--placeholder" data-reveal style="--rd:160ms">
          <div class="member__photo art"><p>Mais perfis da equipa em publicação.</p></div>
          <h3>Equipa de investigação</h3>
          <p>Research, campo e análise</p>
        </article>
      </div>
    </div>
  </section>
  <section class="section section--mist" aria-labelledby="dif">
    <div class="wrap">
      ${sectionHead({ n: '05', label: 'Diferenciais', id: 'dif', title: 'Conhecimento local. Rigor metodológico. Utilidade executiva.' })}
      <ol class="why__list" role="list">
        ${DIFFERENTIATORS.map((d, i) => `<li class="why__item" data-reveal><span class="dcard__n">${pad(i + 1)}</span><h3 class="h4">${esc(d.title)}</h3><p>${esc(d.text)}</p></li>`).join('')}
      </ol>
      <div class="footer__badges" style="margin-top:40px">
        <a class="esomar" style="border-color:var(--line-strong)" href="${SITE.esomarUrl}" target="_blank" rel="noopener"><img src="/assets/img/esomar.webp" alt="ESOMAR Corporate Member" width="140" height="23" loading="lazy"><span>Membro corporativo ESOMAR.<br>Verificar adesão</span></a>
      </div>
    </div>
  </section>
  ${finalCta()}`;
  return {
    path: '/sobre-nos/', title: 'Sobre a Intelsight | Inteligência de Mercado em Moçambique',
    description: 'Conheça a Intelsight, empresa moçambicana de pesquisa de mercado, inteligência empresarial e análise de dados.',
    body,
    schema: [breadcrumbSchema(crumbs), ...TEAM.map((m) => ({
      '@context': 'https://schema.org', '@type': 'Person', name: m.name, jobTitle: m.role,
      image: SITE.url + m.img, worksFor: { '@id': `${SITE.url}/#organization` },
    }))],
  };
}

/* ———————————————————— Contactos */
const BUDGETS = ['Ainda não definido', 'Até 250.000 MZN', '250.000–750.000 MZN', '750.000–1.500.000 MZN', 'Acima de 1.500.000 MZN', 'Prefiro discutir'];
const TIMELINES = ['Menos de 2 semanas', '2 a 4 semanas', '1 a 3 meses', 'Mais de 3 meses', 'Ainda não definido'];
const METHODS = ['Ainda não sei — preciso de orientação', 'Inquérito quantitativo', 'Entrevistas / grupos focais', 'Inteligência competitiva', 'Análise de dados', 'Combinação de métodos'];

export function contactos() {
  const crumbs = [HOME, { name: 'Contactos', href: '/contactos/' }];
  const body = `
  ${pageHero({ crumbs, eyebrow: 'Contactos', title: 'Comece pela decisão que precisa de tomar', intro: 'Indique o contexto, a decisão, o prazo e a população ou mercado a estudar. A equipa avaliará a abordagem mais adequada antes de propor métodos ou custos.', pal: 'a', artLabel: 'Diagnóstico de pesquisa' })}
  <section class="section" style="padding-top:0" aria-labelledby="diagnostico">
    <div class="wrap grid" style="align-items:start; row-gap:48px">
      <div class="c-1-7">
        <form class="form" data-form data-subject="Pedido de diagnóstico de pesquisa" novalidate enctype="multipart/form-data">
          <div class="form__fields form">
            <h2 id="diagnostico" class="h3">Pedido de diagnóstico</h2>
            <fieldset class="form">
              <legend class="form__step">1 · Sobre si</legend>
              <div class="form__row form__row--2">
                ${field('c-nome', 'nome', 'Nome completo', 'text', { auto: 'name' })}
                ${field('c-email', 'email', 'E-mail profissional', 'email', { auto: 'email' })}
              </div>
              <div class="form__row form__row--2">
                ${field('c-tel', 'telefone', 'Telefone', 'tel', { auto: 'tel', required: false })}
                ${field('c-org', 'organizacao', 'Organização', 'text', { auto: 'organization' })}
              </div>
              <div class="form__row form__row--3">
                ${field('c-cargo', 'cargo', 'Cargo', 'text', { auto: 'organization-title' })}
                ${select('c-sector', 'sector', 'Sector', [...SECTORS.map((s) => s.name), 'Outro'])}
                ${field('c-pais', 'pais', 'País', 'text', { auto: 'country-name' })}
              </div>
            </fieldset>
            <fieldset class="form">
              <legend class="form__step">2 · A decisão</legend>
              ${field('c-decisao', 'decisao', 'Que decisão precisa de tomar?', 'textarea', { placeholder: 'Ex.: decidir se lançamos um produto de poupança digital em Nampula até ao 2.º trimestre.' })}
              <div class="form__row form__row--2">
                ${field('c-mercado', 'mercado', 'Mercado ou região', 'text', { placeholder: 'Ex.: Maputo e Matola' })}
                ${field('c-publico', 'publico', 'Público a estudar', 'text', { placeholder: 'Ex.: pequenos comerciantes' })}
              </div>
              <div class="form__row form__row--3">
                ${select('c-prazo', 'prazo', 'Prazo', TIMELINES)}
                ${select('c-orc', 'orcamento', 'Orçamento indicativo', BUDGETS)}
                ${select('c-metodo', 'metodo', 'Método pretendido', METHODS, { required: false })}
              </div>
              <div class="field">
                <label for="c-tdr">Termos de referência <span class="opt">(opcional)</span></label>
                <input id="c-tdr" name="tdr" type="file" accept=".pdf,.doc,.docx">
                <span class="hint">PDF ou Word. Se o envio for por e-mail, anexe o ficheiro na mensagem.</span>
              </div>
              <input type="hidden" name="origem" value="">
            </fieldset>
            <label class="check"><input type="checkbox" name="privacidade" data-label="Consentimento de privacidade" required>
              <span>Autorizo a Intelsight a tratar os dados indicados para responder a este pedido, nos termos da <a href="${SITE.privacyUrl}">política de privacidade</a>.</span></label>
            <div class="btn-row"><button class="btn" type="submit">Enviar pedido de diagnóstico${icon.arrow}</button></div>
            <p class="form__micro">Resposta prevista durante o horário útil. Nenhum projeto é iniciado sem alinhamento de escopo, proposta e aprovação.</p>
          </div>
          <div class="form__success" role="status">
            <h3>Pedido preparado. Obrigado.</h3>
            <p>Se o seu cliente de e-mail abriu uma mensagem, basta enviá-la (e anexar os termos de referência, se aplicável). A equipa responde durante o horário útil.</p>
          </div>
        </form>
      </div>
      <aside class="c-9-12 stack" style="--stack:32px" aria-label="Contactos diretos">
        <ul class="contact-list" role="list">
          <li><b>E-mail</b><a href="mailto:${SITE.email}">${SITE.email}</a></li>
          <li><b>Telefone</b><a href="tel:${SITE.phoneHref}">${SITE.phone}</a></li>
          <li><b>Escritório</b><a href="${SITE.mapUrl}" target="_blank" rel="noopener">${esc(SITE.address.street)}, ${esc(SITE.address.district)}, ${esc(SITE.address.city)}</a></li>
          <li><b>Redes</b><span class="socials" style="font-size:1rem">${SITE.social.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${esc(s.name)}${icon.diag}</a>`).join('')}</span></li>
        </ul>
        <p class="caveat"><span><strong>Imprensa e media.</strong> Para pedidos de entrevista, dados ou comentários sobre estudos publicados, escreva para ${SITE.email} com o assunto “Imprensa”.</span></p>
      </aside>
    </div>
  </section>
  <section class="section section--mist" aria-labelledby="faq">
    <div class="wrap grid">
      <div class="c-1-4">${label('', 'Perguntas frequentes')}<h2 id="faq" style="margin-top:14px">Antes de começar</h2></div>
      <div class="c-5-12 faq">
        ${FAQ.map((f) => `<details><summary>${esc(f.q)}${icon.plus}</summary><p>${esc(f.a)}</p></details>`).join('')}
      </div>
    </div>
  </section>
  <script>
    (function(){var p=new URLSearchParams(location.search);var v=p.get('produto')||p.get('solucao');if(v){var o=document.querySelector('[name=origem]');if(o)o.value=v;var t=document.getElementById('c-decisao');if(t&&!t.value)t.value='Interesse em: '+v+'\\n\\n';}})();
  </script>`;
  return {
    path: '/contactos/', title: 'Contactar a Intelsight | Pesquisa de Mercado Maputo',
    description: 'Solicite uma proposta, diagnóstico ou estudo de pesquisa de mercado, consumer insights ou inteligência competitiva.',
    body,
    schema: [breadcrumbSchema(crumbs), {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    }, {
      '@context': 'https://schema.org', '@type': 'ContactPage', url: `${SITE.url}/contactos/`,
      about: { '@id': `${SITE.url}/#organization` },
    }],
  };
}

/* ———————————————————— 404 */
export function notFound() {
  return {
    path: '/404.html', title: 'Página não encontrada | Intelsight', description: 'A página que procura não existe ou foi movida.', noindex: true,
    body: `
  <section class="wrap nf">
    ${label('404', 'Página não encontrada')}
    <p class="mega" aria-hidden="true">Sem sinal.</p>
    <h1 class="h2">Esta página não existe ou foi movida.</h1>
    <div class="btn-row">${btn('Voltar ao início', '/')}${btn('Ver soluções', '/solucoes/', 'ghost')}</div>
  </section>`,
  };
}
