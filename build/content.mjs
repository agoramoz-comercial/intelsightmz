// Conteúdo central do website Intelsight.
// Fonte: documento "Nova presença digital da Intelsight" (Draft para validação)
// e conteúdo público de intelsightmz.com. Não inventar clientes, números ou credenciais.

export const SITE = {
  name: 'Intelsight',
  legalName: 'Intelsight, Lda.',
  url: 'https://intelsightmz.com',
  locale: 'pt-MZ',
  tagline: 'Veja além. Decida melhor.',
  taglineCorporate: 'Inteligência de mercado para decisões que importam.',
  email: 'info@intelsightmz.com',
  phone: '+258 87 061 61 61',
  phoneHref: '+258870616161',
  address: {
    street: 'Rua do Largo Heróis da Fé, n.º 135',
    district: 'Sommershield',
    city: 'Maputo',
    country: 'Moçambique',
    countryCode: 'MZ',
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+do+Largo+Her%C3%B3is+da+F%C3%A9+135+Sommershield+Maputo',
  social: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/intelsightmz/' },
    { name: 'Instagram', url: 'https://www.instagram.com/intelsight_mz' },
    { name: 'Facebook', url: 'https://www.facebook.com/share/17Gr5zr4e9/' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@intelsight' },
  ],
  privacyUrl: 'https://intelsightmz.com/politica-de-privacidade/',
  esomarUrl: 'https://community.esomar.org/web/mmark_corporate/validation.php?id=2198',
  partners: [{ name: 'APER', url: 'https://apermz.com/' }],
  // Ligar a um CRM/serviço de formulários antes de publicar (ver README).
  formEndpoint: '',
  // ID do Google Analytics 4 — só carrega após consentimento.
  ga4Id: '',
};

export const NAV = [
  { label: 'Soluções', href: '/solucoes/' },
  { label: 'Sectores', href: '/sectores/' },
  { label: 'Metodologia', href: '/metodologia/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'Sobre Nós', href: '/sobre-nos/' },
  { label: 'Contactos', href: '/contactos/' },
];

export const NAV_SECONDARY = [
  { label: 'Produtos', href: '/produtos/' },
  { label: 'Casos', href: '/casos/' },
  { label: 'Recursos', href: '/recursos/' },
];

export const CTA = { label: 'Solicitar diagnóstico', href: '/contactos/#diagnostico' };

// ——— Problemas / decisões (Home, secção 3)
export const DECISIONS = [
  {
    title: 'Entrar ou expandir em Moçambique',
    text: 'Avalie procura, concorrência, canais, barreiras, risco e atratividade antes de comprometer capital.',
    result: 'Avaliação de atratividade e opções de entrada',
    cta: 'Avaliar oportunidade de mercado',
    href: '/solucoes/entrada-expansao-mercado/',
  },
  {
    title: 'Compreender consumidores e públicos',
    text: 'Identifique comportamentos, motivações, necessidades, barreiras e diferenças entre segmentos.',
    result: 'Segmentos, necessidades e drivers de escolha',
    cta: 'Conhecer os consumidores',
    href: '/solucoes/consumer-insights/',
  },
  {
    title: 'Acompanhar concorrentes',
    text: 'Monitorize movimentos, preços, campanhas, posicionamento, canais e sinais de mudança no sector.',
    result: 'Mapa competitivo e alertas de mudança',
    cta: 'Mapear concorrência',
    href: '/solucoes/inteligencia-competitiva/',
  },
  {
    title: 'Validar novos produtos',
    text: 'Teste conceitos, mensagens, funcionalidades, preço e intenção de utilização antes do lançamento.',
    result: 'Recomendação de avançar, rever ou interromper',
    cta: 'Validar um conceito',
    href: '/solucoes/testes-produto-conceito/',
  },
  {
    title: 'Fortalecer marca e comunicação',
    text: 'Meça notoriedade, consideração, perceção, confiança e desempenho de campanhas.',
    result: 'Funil de marca e prioridades de mensagem',
    cta: 'Avaliar a marca',
    href: '/solucoes/estudos-marca/',
  },
  {
    title: 'Melhorar experiência e retenção',
    text: 'Descubra por que os clientes permanecem, abandonam, recomendam ou reduzem a utilização.',
    result: 'Drivers de retenção e plano de melhorias',
    cta: 'Diagnosticar experiência',
    href: '/solucoes/satisfacao-clientes/',
  },
];

// ——— Soluções (7 famílias) — usadas na home, /solucoes/ e páginas de serviço
export const SOLUTIONS = [
  {
    slug: 'entrada-expansao-mercado',
    short: 'Entrada e Expansão',
    name: 'Estudos de entrada e expansão de mercado',
    summary: 'Dimensionamento de oportunidades, análise de procura, concorrência, canais, barreiras institucionais e opções de entrada.',
    h1: 'Estudos de entrada e expansão de mercado em Moçambique',
    intro: 'Avalie procura, concorrência, canais, risco e viabilidade antes de investir, lançar ou expandir operações.',
    seoTitle: 'Estudo de Entrada no Mercado de Moçambique | Intelsight',
    seoDesc: 'Avalie procura, concorrência, canais, riscos e opções antes de entrar ou expandir operações no mercado moçambicano.',
    when: ['entrada num novo mercado', 'expansão para novas províncias', 'lançamento de categoria', 'procura de distribuidores', 'reavaliação de posicionamento', 'decisão de investimento'],
    questions: ['Qual é a dimensão da oportunidade?', 'Quem compra e porquê?', 'Que concorrentes definem o mercado?', 'Quais canais oferecem maior acesso?', 'Que barreiras podem atrasar a entrada?', 'Que modelo deve ser testado primeiro?'],
    methods: ['desk research', 'entrevistas com especialistas', 'entrevistas B2B', 'análise concorrencial', 'consumer research', 'channel mapping', 'análise de preços', 'workshops executivos'],
    deliverables: ['mapa de oportunidade', 'segmentos prioritários', 'panorama competitivo', 'canais e parceiros', 'riscos', 'cenários', 'opções', 'recomendação', 'plano de teste'],
    product: 'market-entry-scan',
    cta: 'Solicitar estudo de entrada de mercado',
  },
  {
    slug: 'consumer-insights',
    short: 'Consumidores',
    name: 'Insights de consumidores e públicos',
    summary: 'Segmentação, comportamento, necessidades, hábitos, motivações, jornada, perceções e drivers de escolha.',
    h1: 'Consumer insights e comportamento do consumidor em Moçambique',
    intro: 'Compreenda comportamentos, necessidades, motivações e segmentos com pesquisa quantitativa e qualitativa em Moçambique.',
    seoTitle: 'Consumer Insights e Comportamento em Moçambique',
    seoDesc: 'Compreenda comportamentos, necessidades, motivações e segmentos com pesquisa quantitativa e qualitativa em Moçambique.',
    when: ['lançamento ou reposicionamento de oferta', 'definição de públicos-alvo', 'queda de procura sem explicação clara', 'entrada numa nova cidade ou província', 'desenho de campanhas', 'priorização de portefólio'],
    questions: ['Quem são os consumidores e como se distribuem os segmentos?', 'Que necessidades e barreiras orientam a escolha?', 'Como decidem, compram e utilizam a categoria?', 'Que canais e momentos influenciam a decisão?', 'Que diferenças existem entre cidades, idades e rendimentos?', 'Que segmentos devem ser priorizados?'],
    methods: ['inquéritos presenciais', 'inquéritos telefónicos e digitais', 'entrevistas em profundidade', 'grupos focais', 'observação e jornadas', 'análise de segmentação', 'análise temática'],
    deliverables: ['perfis e segmentos', 'mapa de necessidades e barreiras', 'jornada de decisão', 'drivers de escolha', 'diferenças territoriais', 'recomendações por segmento', 'documentação metodológica'],
    product: 'consumer-pulse',
    cta: 'Conhecer os consumidores',
  },
  {
    slug: 'inteligencia-competitiva',
    short: 'Concorrência',
    name: 'Inteligência competitiva e sectorial',
    summary: 'Mapeamento de concorrentes, benchmarking, preços, posicionamento, canais e monitorização de tendências.',
    h1: 'Inteligência competitiva e sectorial em Moçambique',
    intro: 'Monitorize concorrentes, preços, campanhas, canais, posicionamento e tendências com inteligência competitiva local.',
    seoTitle: 'Inteligência Competitiva em Moçambique | Intelsight',
    seoDesc: 'Monitorize concorrentes, preços, campanhas, canais, posicionamento e tendências com inteligência competitiva local.',
    when: ['entrada de um novo concorrente', 'mudanças de preço ou promoções no sector', 'planeamento estratégico anual', 'avaliação de aquisição ou parceria', 'perda de quota sem explicação', 'preparação de lançamento'],
    questions: ['Quem são os concorrentes relevantes, directos e indirectos?', 'Como se posicionam em preço, oferta e mensagem?', 'Que canais e parceiros utilizam?', 'Que movimentos recentes sinalizam mudança?', 'Onde existem espaços por ocupar?', 'Que implicações têm para a nossa estratégia?'],
    methods: ['fontes públicas e análise documental', 'monitorização de preços e promoções', 'mystery shopping, quando legal e eticamente adequado', 'entrevistas com especialistas do sector', 'benchmarking', 'análise de tendências'],
    deliverables: ['mapa competitivo', 'benchmarking de oferta e preço', 'análise de posicionamento', 'monitorização de campanhas e canais', 'alertas e sinais de mudança', 'implicações estratégicas'],
    product: 'competitor-radar',
    cta: 'Mapear concorrência',
  },
  {
    slug: 'estudos-marca',
    short: 'Marca',
    name: 'Estudos de marca e comunicação',
    summary: 'Brand health, awareness, consideração, preferência, reputação e avaliação de campanhas.',
    h1: 'Estudos de marca e comunicação em Moçambique',
    intro: 'Meça notoriedade, consideração, perceção, reputação e desempenho de campanhas com estudos de brand health.',
    seoTitle: 'Estudos de Marca e Comunicação em Moçambique',
    seoDesc: 'Meça notoriedade, consideração, perceção, reputação e desempenho de campanhas com estudos de brand health.',
    when: ['antes de investir em media', 'avaliação de campanhas', 'reposicionamento ou rebranding', 'acompanhamento periódico da marca', 'gestão de reputação', 'entrada de um concorrente forte'],
    questions: ['Quantas pessoas conhecem, consideram e preferem a marca?', 'Que associações e perceções existem?', 'Como compara com os concorrentes?', 'A campanha foi vista, compreendida e lembrada?', 'Que mensagens geram confiança?', 'Onde se perdem potenciais clientes no funil?'],
    methods: ['inquéritos de brand health', 'tracking periódico', 'pré-teste e pós-teste de campanhas', 'grupos focais', 'entrevistas em profundidade', 'análise do funil de marca'],
    deliverables: ['funil de marca, da notoriedade à preferência', 'mapa de associações', 'comparação competitiva', 'avaliação de campanha', 'drivers de confiança e preferência', 'recomendações de posicionamento e mensagem'],
    product: 'brand-health-tracker',
    cta: 'Avaliar a marca',
  },
  {
    slug: 'testes-produto-conceito',
    short: 'Produto e Conceito',
    name: 'Testes de produto e conceito',
    summary: 'Validação de propostas, conceitos, funcionalidades, embalagem, preço, comunicação e experiência.',
    h1: 'Testes de produto e conceito em Moçambique',
    intro: 'Valide produtos, serviços, conceitos, preço e mensagens antes do lançamento no mercado moçambicano.',
    seoTitle: 'Testes de Produto e Conceito em Moçambique',
    seoDesc: 'Valide produtos, serviços, conceitos, preço e mensagens antes do lançamento no mercado moçambicano.',
    when: ['novo produto ou serviço', 'alteração de funcionalidade, embalagem ou formato', 'definição de preço', 'escolha entre alternativas de conceito', 'adaptação de um produto internacional ao mercado local', 'teste de comunicação'],
    questions: ['O conceito é compreendido?', 'É relevante e diferenciado?', 'Quem tem intenção de experimentar ou comprar?', 'Que objeções e barreiras surgem?', 'Qual é a sensibilidade ao preço?', 'Devemos avançar, rever ou interromper?'],
    methods: ['testes de conceito quantitativos', 'testes monádicos ou comparativos', 'grupos focais e entrevistas', 'testes de utilização', 'análise de sensibilidade ao preço', 'testes de mensagem e embalagem'],
    deliverables: ['compreensão, relevância e diferenciação', 'intenção de experimentação', 'objeções e barreiras', 'sensibilidade ao preço', 'comparação entre alternativas', 'recomendação de avançar, rever ou interromper'],
    product: 'concept-testing-sprint',
    cta: 'Validar um conceito',
  },
  {
    slug: 'satisfacao-clientes',
    short: 'Satisfação',
    name: 'Satisfação e fidelização',
    summary: 'NPS, satisfação, esforço, churn, drivers de retenção, jornada e qualidade do serviço.',
    h1: 'Estudos de satisfação, NPS e experiência do cliente em Moçambique',
    intro: 'Identifique drivers de satisfação, esforço, retenção e abandono através de estudos de experiência do cliente.',
    seoTitle: 'Estudos de Satisfação e NPS em Moçambique',
    seoDesc: 'Identifique drivers de satisfação, esforço, retenção e abandono através de estudos de experiência do cliente.',
    when: ['aumento de reclamações ou abandono', 'definição de metas de serviço', 'avaliação de canais de atendimento', 'programas de fidelização', 'benchmarking de qualidade de serviço', 'preparação de mudanças operacionais'],
    questions: ['Quão satisfeitos estão os clientes e porquê?', 'O que leva a recomendar, reduzir a utilização ou abandonar?', 'Em que pontos da jornada existe mais esforço?', 'Que segmentos estão em risco?', 'Que melhorias têm maior impacto?', 'Como acompanhar a evolução ao longo do tempo?'],
    methods: ['inquéritos de satisfação e NPS', 'medição de esforço do cliente', 'análise de churn e retenção', 'mapeamento da jornada', 'mystery shopping, quando legal e eticamente adequado', 'entrevistas com clientes perdidos'],
    deliverables: ['indicadores de satisfação, NPS e esforço', 'drivers de satisfação e retenção', 'mapa da jornada e pontos de fricção', 'segmentos em risco', 'plano de melhorias priorizado', 'proposta de monitorização contínua'],
    product: 'customer-experience-diagnostic',
    cta: 'Diagnosticar experiência',
  },
  {
    slug: 'analise-dados',
    short: 'Dados e Previsão',
    name: 'Análise de dados e previsão',
    summary: 'Preparação de dados, dashboards, segmentação, modelação, previsão e apoio à decisão.',
    h1: 'Análise de dados e previsão em Moçambique',
    intro: 'Transforme bases de dados em dashboards, segmentos, previsões e recomendações para decisões empresariais.',
    seoTitle: 'Análise de Dados e Previsão em Moçambique',
    seoDesc: 'Transforme bases de dados em dashboards, segmentos, previsões e recomendações para decisões empresariais.',
    when: ['dados dispersos em várias fontes', 'necessidade de dashboards de gestão', 'segmentação de clientes', 'previsão de procura ou vendas', 'avaliação do desempenho de iniciativas', 'apoio ao planeamento orçamental'],
    questions: ['Que dados existem e qual é a sua qualidade?', 'Que indicadores devem orientar a gestão?', 'Que segmentos de clientes existem nos dados?', 'Que tendências e sazonalidades são visíveis?', 'O que é razoável prever, e com que incerteza?', 'Que decisões os dados suportam?'],
    methods: ['limpeza e preparação de dados', 'integração de fontes', 'visualização e dashboards', 'segmentação', 'modelação estatística', 'previsão'],
    deliverables: ['diagnóstico de qualidade dos dados', 'base integrada e documentada', 'dashboards', 'segmentos', 'previsões com intervalos de incerteza', 'recomendações e próximos testes'],
    product: null,
    cta: 'Falar sobre os seus dados',
  },
];

// ——— Produtos empacotados
export const PRODUCTS = [
  {
    slug: 'market-entry-scan',
    name: 'Mozambique Market Entry Scan',
    who: 'Empresas e investidores que avaliam entrada ou expansão.',
    answers: ['Existe procura suficiente?', 'Quem são os concorrentes?', 'Quais canais são viáveis?', 'Que riscos podem comprometer a entrada?', 'Qual modelo de entrada deve ser testado?'],
    deliverables: ['avaliação do mercado', 'mapa competitivo', 'segmentos prioritários', 'riscos e pressupostos', 'opções de entrada', 'recomendação executiva'],
    meta: 'Prazo indicativo: 10 a 20 dias úteis, sujeito ao escopo.',
    cta: 'Solicitar Market Entry Scan',
    home: true,
    palette: 'a',
  },
  {
    slug: 'consumer-pulse',
    name: 'Consumer Pulse Mozambique',
    who: 'Empresas que precisam acompanhar mudanças no consumidor.',
    answers: null,
    deliverables: ['indicadores de confiança e comportamento', 'mudanças por segmento', 'categorias e canais', 'sinais emergentes', 'briefing executivo'],
    meta: 'Modelo: edição única, trimestral ou por assinatura.',
    cta: 'Conhecer o Consumer Pulse',
    home: true,
    palette: 'b',
  },
  {
    slug: 'competitor-radar',
    name: 'Competitor Radar',
    who: 'Empresas em mercados dinâmicos ou concentrados.',
    answers: null,
    deliverables: ['concorrentes monitorizados', 'preços e promoções', 'campanhas', 'movimentos de portefólio', 'canais', 'alertas', 'implicações estratégicas'],
    meta: 'Modelo: monitorização contínua com alertas e relatório periódico.',
    cta: 'Criar radar competitivo',
    home: true,
    palette: 'c',
  },
  {
    slug: 'concept-testing-sprint',
    name: 'Concept Testing Sprint',
    who: 'Equipas de produto, marketing e inovação.',
    answers: null,
    deliverables: ['compreensão do conceito', 'relevância', 'diferenciação', 'intenção', 'objeções', 'sensibilidade ao preço', 'recomendação de avançar, rever ou interromper'],
    meta: 'Modelo: sprint com escopo fechado por conceito ou conjunto de alternativas.',
    cta: 'Testar um conceito',
    home: true,
    palette: 'd',
  },
  {
    slug: 'brand-health-tracker',
    name: 'Brand Health Tracker',
    who: 'Marcas que investem em comunicação e precisam acompanhar notoriedade, consideração e reputação.',
    answers: null,
    deliverables: ['funil de marca', 'associações e perceções', 'comparação competitiva', 'evolução entre vagas', 'briefing executivo'],
    meta: 'Modelo: vaga única, semestral ou trimestral.',
    cta: 'Acompanhar a marca',
    home: false,
    palette: 'b',
  },
  {
    slug: 'customer-experience-diagnostic',
    name: 'Customer Experience Diagnostic',
    who: 'Organizações com base de clientes que precisam reduzir abandono e melhorar o serviço.',
    answers: null,
    deliverables: ['satisfação, NPS e esforço', 'drivers de retenção', 'pontos de fricção na jornada', 'segmentos em risco', 'plano de melhorias priorizado'],
    meta: 'Modelo: diagnóstico pontual com opção de monitorização contínua.',
    cta: 'Diagnosticar experiência',
    home: false,
    palette: 'a',
  },
];

// ——— Metodologia: 6 passos
export const STEPS = [
  { title: 'Clarificamos a decisão', text: 'Definimos a pergunta de negócio, o beneficiário, os riscos, o prazo e os critérios de sucesso.' },
  { title: 'Formulamos hipóteses', text: 'Transformamos perceções iniciais em explicações testáveis e identificamos evidência capaz de diferenciar alternativas.' },
  { title: 'Selecionamos os métodos', text: 'Escolhemos pesquisa quantitativa, qualitativa, análise documental, inteligência competitiva ou combinação de métodos.' },
  { title: 'Recolhemos e validamos dados', text: 'Aplicamos controlos de campo, critérios de qualidade, proteção de dados e documentação metodológica.' },
  { title: 'Analisamos mecanismos e segmentos', text: 'Procuramos padrões, diferenças, associações, limitações e explicações concorrentes.' },
  { title: 'Traduzimos em decisão', text: 'Entregamos conclusões, opções, riscos, recomendações e próximos testes.' },
];

// ——— Capacidades (faixa de confiança, sem números não comprovados)
export const CAPABILITIES = [
  { word: 'Quantitativa', text: 'Inquéritos presenciais, telefónicos e digitais, trackers e análise estatística.' },
  { word: 'Qualitativa', text: 'Entrevistas em profundidade, grupos focais, observação e testes de conceito.' },
  { word: 'Competitiva', text: 'Mapeamento de concorrentes, preços, canais, campanhas e sinais de mudança.' },
  { word: 'Previsão', text: 'Preparação de dados, segmentação, modelação e dashboards para apoio à decisão.' },
  { word: 'Local', text: 'Mercados formais e informais, diferenças territoriais e condições de execução em Moçambique.' },
  { word: 'Executiva', text: 'Conclusões, opções, riscos e próximos passos, prontos para a mesa de decisão.' },
];

// ——— Porquê a Intelsight
export const DIFFERENTIATORS = [
  { title: 'Compreensão do contexto moçambicano', text: 'Investigamos mercados formais e informais, diferenças territoriais, canais, comportamentos e condições de execução locais.' },
  { title: 'Métodos adequados à decisão', text: 'Combinamos inquéritos, entrevistas, grupos focais, análise de dados e inteligência competitiva de acordo com a questão.' },
  { title: 'Transparência metodológica', text: 'Documentamos amostra, instrumento, período, limitações, tratamento dos dados e nível de confiança adequado.' },
  { title: 'Recomendações executáveis', text: 'Os resultados indicam decisões, prioridades, riscos, métricas e próximos passos.' },
  { title: 'Proteção de dados', text: 'Aplicamos princípios de necessidade, finalidade, controlo de acesso, retenção e segurança no tratamento de dados pessoais.' },
];

// ——— Sectores (áreas de atuação)
export const SECTORS = [
  { name: 'Serviços financeiros e fintech', text: 'Adoção de produtos financeiros e digitais, confiança, canais, agentes e inclusão financeira.' },
  { name: 'Telecomunicações', text: 'Utilização de voz e dados, preço, experiência de serviço, portabilidade e serviços digitais.' },
  { name: 'FMCG e retalho', text: 'Hábitos de compra, canais formais e informais, preço, embalagem, distribuição e ponto de venda.' },
  { name: 'Energia e recursos naturais', text: 'Perceções comunitárias, fornecedores locais, conteúdo local e procura energética.' },
  { name: 'Agricultura e agronegócio', text: 'Cadeias de valor, produtores, insumos, escoamento e acesso a mercados.' },
  { name: 'Saúde', text: 'Acesso, perceções, procura de cuidados, farmácias e canais de distribuição.' },
  { name: 'Desenvolvimento e sector público', text: 'Linhas de base, avaliações, perceção de serviços públicos e estudos para programas.' },
  { name: 'Infraestruturas e imobiliário', text: 'Procura habitacional e comercial, localização, capacidade de pagamento e preferências.' },
];

// ——— Equipa (apenas perfis públicos reais)
export const TEAM = [
  {
    name: 'Neusa Sululo',
    role: 'Coordenadora de Marketing e Relações Públicas',
    img: '/assets/img/team/neusa-sululo.webp',
    palette: 'b',
  },
  {
    name: 'Shaquil Machacul',
    role: 'Analista de Dados e DPO',
    img: '/assets/img/team/shaquil-machacul.webp',
    palette: 'c',
  },
];

// ——— Organizações apresentadas publicamente em intelsightmz.com
// Confirmar autorização de utilização antes da publicação final.
export const CLIENTS = [
  { name: 'MEREC Industries', img: '/assets/img/client-merec.webp', w: 600, h: 497 },
  { name: 'Momentum Moçambique', img: '/assets/img/client-momentum.webp', w: 600, h: 200 },
];

// ——— Insights publicados (conteúdo real do domínio atual)
export const INSIGHTS = [
  {
    featured: true,
    kind: 'Estudo',
    title: 'O sector informal em Moçambique',
    text: 'Uma análise sobre modelos de operação, liquidez, fornecimento, canais, digitalização e relações entre os sectores formal e informal.',
    url: 'https://intelsightmz.com/o-sector-informal-em-mocambique/',
    facts: [
      { k: 'Respondentes', v: '1.011' },
      { k: 'Cidades', v: 'Maputo, Matola, Beira e Nampula' },
      { k: 'Recolha', v: 'Novembro a dezembro de 2025' },
      { k: 'Amostragem', v: 'Não probabilística, por conveniência' },
    ],
    limitation: 'As conclusões devem ser interpretadas dentro dos limites do desenho amostral: descrevem os participantes nas cidades abrangidas e não devem ser extrapoladas estatisticamente para todo o país.',
  },
  {
    kind: 'Relatório',
    title: 'Relatório Anual do Consumidor Moçambicano 2026',
    text: 'A evolução do comportamento de consumo em Moçambique, com base num estudo realizado ao longo do ano.',
    url: 'https://intelsightmz.com/relatorio-anual-do-consumidor-mocambicano-2026/',
  },
  {
    kind: 'Relatório',
    title: 'A evolução da FACIM',
    text: 'Resultados da pesquisa sobre a evolução da FACIM e o perfil dos seus participantes.',
    url: 'https://intelsightmz.com/wp-content/uploads/2025/09/Evolucao-da-FACIM_Sep2025_.pdf',
  },
  {
    kind: 'Artigo',
    title: 'Três barreiras ao uso de inteligência de mercado',
    text: 'Crescimento moderado, incerteza e transformação sectorial: o que trava as empresas de decidir com evidência.',
    url: 'https://intelsightmz.com/3-barreiras-inteligencia-de-mercado/',
  },
  {
    kind: 'Artigo',
    title: 'O atendimento ao cliente como pilar estratégico',
    text: 'Porque a experiência do cliente deixou de ser um diferencial e passou a ser um imperativo estratégico.',
    url: 'https://intelsightmz.com/wp-content/uploads/2025/11/O-ATENDIMENTO-AO-CLIENTE.pdf',
  },
];

// ——— Calendário editorial (em preparação)
export const EDITORIAL = [
  { month: 'Mês 1', items: ['Como avaliar a entrada no mercado moçambicano', 'Sete erros de pesquisa de mercado em Moçambique', 'Como escolher entre inquéritos, entrevistas e grupos focais', 'Checklist para estudos de expansão provincial'] },
  { month: 'Mês 2', items: ['O que as empresas precisam compreender sobre o sector informal', 'Como mapear concorrentes em mercados com poucos dados públicos', 'Brand health: métricas essenciais', 'Como testar um produto antes do lançamento'] },
  { month: 'Mês 3', items: ['Comportamento do consumidor em Maputo, Matola, Beira e Nampula', 'Como medir satisfação sem depender apenas do NPS', 'Sinais de risco numa estratégia de market entry', 'Como transformar um relatório de pesquisa num plano de decisão'] },
];

export const PRINCIPLES = [
  { title: 'Rigor', text: 'A conclusão deve ser proporcional à qualidade dos dados e do método.' },
  { title: 'Integridade', text: 'Expomos limitações, conflitos e informação não disponível.' },
  { title: 'Utilidade', text: 'A investigação precisa responder a uma decisão, não apenas produzir informação.' },
  { title: 'Contexto', text: 'Métodos e recomendações devem refletir as condições do mercado moçambicano.' },
  { title: 'Proteção', text: 'Tratamos dados pessoais com necessidade, finalidade, segurança e responsabilização.' },
  { title: 'Aprendizagem', text: 'Cada projeto deve melhorar a capacidade de decisão do cliente.' },
];

export const METHOD_FAMILIES = [
  { title: 'Pesquisa quantitativa', items: ['inquéritos presenciais', 'telefone', 'formulários digitais', 'estudos longitudinais', 'trackers', 'análise estatística'] },
  { title: 'Investigação qualitativa', items: ['entrevistas em profundidade', 'grupos focais', 'observação', 'testes de conceito', 'jornadas', 'análise temática'] },
  { title: 'Inteligência competitiva', items: ['fontes públicas', 'análise documental', 'monitorização', 'mystery shopping, quando legal e eticamente adequado', 'análise de preço', 'benchmarking'] },
  { title: 'Data analytics', items: ['limpeza', 'integração', 'visualização', 'segmentação', 'modelação', 'previsão', 'dashboards'] },
];

export const QUALITY = ['formação de entrevistadores', 'pilotagem', 'validação lógica', 'deteção de duplicados', 'controlo de duração', 'supervisão', 'back-checks', 'documentação de alterações', 'anonimização ou pseudonimização quando aplicável', 'revisão metodológica'];

export const TRANSPARENCY = ['população', 'método de amostragem', 'dimensão da amostra', 'período', 'geografia', 'instrumento', 'limitações', 'tratamento dos dados', 'critérios analíticos', 'nível de confiança adequado ao desenho'];

export const CHECKLIST = [
  { title: 'Procura', q: ['Quem tem a necessidade que a oferta resolve, e onde está?', 'A procura é declarada, observada ou apenas presumida?'] },
  { title: 'Concorrência', q: ['Que alternativas os clientes usam hoje, incluindo informais?', 'Como reagirão os concorrentes à entrada?'] },
  { title: 'Preço', q: ['Qual é a capacidade e disposição para pagar por segmento?', 'Que referência de preço o mercado já tem?'] },
  { title: 'Canais', q: ['Por onde o cliente prefere comprar e receber?', 'Que distribuidores ou parceiros controlam o acesso?'] },
  { title: 'Regulação', q: ['Que licenças, requisitos e prazos se aplicam?', 'Que mudanças regulatórias estão em curso?'] },
  { title: 'Parceiros', q: ['Que parceiros locais reduzem risco de execução?', 'Que dependências críticas são criadas?'] },
  { title: 'Consumidor', q: ['Que barreiras de confiança, hábito ou acesso existem?', 'Que diferenças territoriais alteram a proposta?'] },
  { title: 'Risco', q: ['Que pressupostos, se falsos, inviabilizam a entrada?', 'Qual é o custo de errar, e de esperar?'] },
  { title: 'Métricas', q: ['Que indicadores mostram que a entrada está a funcionar?', 'Em que prazo devem ser observados?'] },
  { title: 'Regra de decisão', q: ['Que evidência é suficiente para avançar, rever ou não avançar?', 'Quem decide e com que critérios?'] },
];

export const FAQ = [
  { q: 'Como começa um projeto com a Intelsight?', a: 'Começa por uma conversa orientada à decisão. Clarificamos a pergunta de negócio, o prazo, a população a estudar e o risco envolvido, e só depois propomos métodos, escopo e investimento.' },
  { q: 'Quanto tempo demora um estudo?', a: 'Depende do desenho. Soluções com escopo fechado, como o Market Entry Scan, têm um prazo indicativo de 10 a 20 dias úteis. Estudos com trabalho de campo extenso ou várias províncias requerem mais tempo.' },
  { q: 'Os dados e resultados são confidenciais?', a: 'Sim. Os resultados pertencem ao cliente nos termos acordados, e os dados pessoais dos participantes são tratados segundo princípios de necessidade, finalidade, controlo de acesso, retenção e segurança.' },
  { q: 'Trabalham fora de Maputo?', a: 'Sim. O desenho de cada estudo define a cobertura geográfica necessária, incluindo outras cidades e províncias, de acordo com a decisão e o orçamento.' },
  { q: 'Podem responder a termos de referência?', a: 'Sim. Pode anexar os termos de referência no formulário de diagnóstico e a equipa analisará o pedido antes de propor uma abordagem.' },
];
