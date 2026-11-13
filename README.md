# Intelsight — website

Website estático da Intelsight, Lda.: **"Veja além. Decida melhor."**
Posiciona a empresa como parceiro de inteligência de mercado para organizações que precisam entrar, crescer, investir ou lançar produtos em Moçambique com menor incerteza.

Estado: **Draft para validação.** Não é "Client Ready" até cumprir o gate de publicação abaixo.

## Executar

Requer apenas Node 18+ (sem dependências).

```bash
npm run build     # gera dist/
npm run serve     # http://localhost:4173
npm run dev       # build + serve
```

Deploy: `vercel.json` já define o build (`npm run build`), a saída (`dist/`), os redirecionamentos 301 dos URLs antigos e os cabeçalhos de cache e segurança. Qualquer alojamento estático serve `dist/` (raiz do domínio).

## Estrutura

```
build/
  content.mjs        ← todo o conteúdo editável (soluções, produtos, sectores, equipa, FAQ, contactos)
  layout.mjs         ← <head>, SEO, rail lateral, menu, CTA final, rodapé, cookies
  pages/home.mjs     ← página inicial (12 secções)
  pages/inner.mjs    ← soluções, 7 páginas de serviço, sectores, produtos, metodologia,
                        casos, insights, recursos, checklist, sobre, contactos, 404
  pages/parts.mjs    ← componentes partilhados (cartão de produto, formulários, caso, equipa)
  build.mjs          ← gera dist/, sitemap.xml, robots.txt, manifest; valida 1 H1 e títulos únicos
  serve.mjs          ← servidor local
src/css/main.css     ← design system completo
src/js/main.js       ← interações (sem bibliotecas)
assets/              ← fontes self-hosted, logótipos, fotos da equipa, imagens
```

Para alterar textos, edite `build/content.mjs` e volte a correr `npm run build`.

## Páginas geradas (URLs recomendados)

`/` · `/solucoes/` · `/solucoes/entrada-expansao-mercado/` · `/solucoes/consumer-insights/` · `/solucoes/inteligencia-competitiva/` · `/solucoes/estudos-marca/` · `/solucoes/testes-produto-conceito/` · `/solucoes/satisfacao-clientes/` · `/solucoes/analise-dados/` · `/sectores/` · `/produtos/` · `/metodologia/` · `/casos/` · `/insights/` · `/recursos/` · `/recursos/checklist-entrada-mercado/` (noindex) · `/sobre-nos/` · `/contactos/` · `404.html`

## Design

**Linguagem de design** inspirada em c2mtl.koki-kiko.com (estrutura e movimento, sem copiar a marca):
tipografia grotesca de grande escala, hero dividido com uma linha que atravessa os dois painéis, rail lateral fixo com navegação vertical e CTA, rótulos editoriais "(01)", linhas de capacidades com filetes, carrossel de títulos gigantes, cartões de produto empilhados (sticky), revelação de imagens em fatias, marquee de sectores, menu em ecrã inteiro e rodapé com wordmark gigante.

**Conceito próprio, "Clareza dentro da complexidade":** lentes circulares sobrepostas (as interseções ficam mais claras) que fazem a ponte com o brilho do "g" do logótipo Intelsight.

**Da marca Intelsight (intelsightmz.com):** logótipo original (versão clara e uma versão navy gerada para fundos claros), símbolo "g", fotografias da equipa (Neusa Sululo, Shaquil Machacul), imagem institucional, selo ESOMAR, logótipos MEREC e Momentum, contactos e redes sociais.

**Do documento de estratégia:**
- Paleta: Azul Intelligence `#102A43`, Azul Insight `#147D92`, Turquesa Action `#22A699`, Dourado Opportunity `#F2B134` (uso limitado), Cinza Data `#52606D`, Branco Insight `#F8FAFC`, Vermelho de alerta `#C2413B`.
- Tipografia: **Manrope** (títulos, números, botões) + **Source Sans 3** (corpo), self-hosted em WOFF2 (licença OFL em `assets/fonts/`). Escala H1 56/38, H2 40/30, H3 28/24, H4 22/20, corpo 18/17. A camada "display" (títulos gigantes) é decorativa e fica acima desta escala.
- Botões com 48 px de altura mínima e cantos de 6 px; contraste WCAG AA (o turquesa só leva texto navy).
- O site atual usa Poppins e amarelo `#FFFF00`. Este site aplica a nova identidade do documento.

**Acessibilidade e desempenho:** HTML semântico, um H1 por página (validado no build), skip link, foco visível, menu com focus trap e Esc, tabs acessíveis por teclado, `prefers-reduced-motion` respeitado, imagens WebP com `loading="lazy"` e dimensões declaradas, fontes com preload e `font-display: swap`, zero dependências JS.

## SEO implementado

- Title e meta description únicos por página (tabela 9.2 do documento).
- Canonical, `hreflang` pt-MZ e x-default, Open Graph e imagem OG 1200×630.
- `sitemap.xml`, `robots.txt`, breadcrumbs visíveis e em JSON-LD.
- Dados estruturados: Organization + ProfessionalService (morada, contactos, sameAs, ESOMAR), WebSite, Service (7), BreadcrumbList, ItemList, Report (estudo do sector informal), Person (apenas perfis reais), FAQPage (perguntas visíveis em /contactos/), ContactPage.
- Sem avaliações, estrelas, prémios ou clientes inventados.
- Redirecionamentos 301 `/about-us/` → `/sobre-nos/` e `/contacts/` → `/contactos/`.

## Pendências: gate de publicação

Configuração técnica:
- [ ] **Formulários:** definir `formEndpoint` em `build/content.mjs` (CRM, Formspree, HubSpot…). Sem endpoint, o formulário valida e abre o cliente de e-mail com o pedido preenchido para info@intelsightmz.com (o anexo dos termos de referência tem de ser adicionado manualmente).
- [ ] **GA4:** definir `ga4Id`. Só é carregado depois de o visitante aceitar cookies de análise.
- [ ] **Artigos WordPress:** os insights apontam para os URLs atuais (`/o-sector-informal-em-mocambique/`, `/relatorio-anual-do-consumidor-mocambicano-2026/`, `/3-barreiras-inteligencia-de-mercado/`, PDFs em `/wp-content/uploads/`). Migrá-los ou manter esses caminhos acessíveis antes de mudar o domínio, para não perder indexação.
- [ ] **EN / FR:** o site atual tem versões `/en/` e `/fr/` (Weglot). Criar versões revistas por humanos e acrescentar o `hreflang` correspondente.
- [ ] Google Search Console, Bing Webmaster Tools e envio do sitemap.

Conteúdo e validação:
- [ ] Confirmar autorização para mostrar os logótipos **MEREC** e **Momentum** (hoje públicos em intelsightmz.com).
- [ ] Biografias completas da equipa (experiência, sectores, métodos, formação verificável) e restantes membros.
- [ ] Substituir a estrutura de caso por casos reais autorizados.
- [ ] Indicadores numéricos (projetos, províncias, participantes) só com evidência documental. Até lá, o site mostra capacidades, não números.
- [ ] **Nota editorial:** rever a apresentação de "95% de confiança" e "2,8 p.p. de margem de erro" no estudo do sector informal. Com amostragem por conveniência induz uma leitura probabilística errada. O site já apresenta o estudo com essa limitação explícita.
- [ ] Revisão jurídica da política de privacidade e cookies (os links apontam para a política atual).
- [ ] Revisão humana dos textos em português; testes em dispositivos reais; Core Web Vitals (LCP < 2,5 s, INP < 200 ms, CLS < 0,1).

**KPI:** um decisor deve identificar público, problema, solução, prova e próximo passo em menos de três minutos.
