import { SITE, CHECKLIST, SECTORS } from '../content.mjs';
import { esc, pad, icon, art, btn, linkArrow } from '../layout.mjs';

export function productCard(p, k, sticky = false) {
  const cls = sticky ? 'pcard' : 'pitem';
  const style = sticky ? ` style="--k:${k}"` : '';
  return `
  <article class="${cls}" id="${p.slug}"${style}>
    ${art(p.palette, `
      <span class="pcard__tag">Produto ${pad(k + 1)}</span>
      <h3 class="pcard__name">${esc(p.name)}</h3>`, 'pcard__art')}
    <div class="pcard__body">
      <p class="pcard__who"><b>Para quem</b>${esc(p.who)}</p>
      <div class="pcard__cols">
        ${p.answers ? `<div><h4>Responde a</h4><ul class="ticks ticks--q" role="list">${p.answers.map((a) => `<li>${esc(a)}</li>`).join('')}</ul></div>` : ''}
        <div><h4>Entregáveis</h4><ul class="ticks" role="list">${p.deliverables.map((d) => `<li>${esc(d)}</li>`).join('')}</ul></div>
      </div>
      <p class="pcard__meta">${esc(p.meta)}</p>
      <div>${btn(p.cta, `/contactos/?produto=${encodeURIComponent(p.name)}#diagnostico`)}</div>
    </div>
  </article>`;
}

export function memberCard(m, i = 0) {
  return `
  <article class="member" data-reveal style="--rd:${i * 80}ms">
    ${art(m.palette, `<img src="${m.img}" alt="Fotografia de ${esc(m.name)}" width="576" height="1024" loading="lazy">`, 'member__photo')}
    <h3>${esc(m.name)}</h3>
    <p>${esc(m.role)}</p>
  </article>`;
}

export function caseModel() {
  const f = [
    ['Sector', 'a publicar'],
    ['Tipo de cliente', 'empresa nacional, multinacional ou instituição'],
    ['Problema', 'a decisão que precisava de ser tomada'],
    ['Método', 'entrevistas, inquérito, grupos focais ou análise competitiva'],
    ['Cobertura', 'cidades e províncias'],
    ['Resultado', 'facto verificável'],
    ['Decisão suportada', 'lançar, rever, priorizar ou não avançar'],
    ['Limitação', 'restrição metodológica relevante'],
  ];
  return `
  <article class="case" data-reveal>
    ${art('c', `
      <span class="pcard__tag">Estrutura de caso</span>
      <p class="lg">Pergunta → Decisão</p>`, 'case__art')}
    <div>
      <dl class="case__fields">
        ${f.map(([k, v]) => `<div class="case__field"><dt>${esc(k)}</dt><dd><span class="pending">${esc(v)}</span></dd></div>`).join('')}
      </dl>
      <div class="case__foot">
        <p class="small muted">Casos publicados apenas com autorização expressa do cliente.</p>
        ${linkArrow('Explorar estudos de caso', '/casos/')}
      </div>
    </div>
  </article>`;
}

export function insightFeature(f) {
  return `
  <article class="insight-feature on-dark" data-reveal>
    ${art('b', `<p class="lg" style="max-width:10ch">${esc(f.title)}</p>`, 'insight-feature__art')}
    <div class="insight-feature__body">
      <p class="post__kind" style="color:var(--action)">${esc(f.kind)} em destaque</p>
      <h3>${esc(f.title)}</h3>
      <p class="muted">${esc(f.text)}</p>
      <dl class="facts">
        ${f.facts.map((x, i) => `<div><dt>${esc(x.k)}</dt><dd${i === 0 ? ' class="big"' : ''}>${esc(x.v)}</dd></div>`).join('')}
      </dl>
      <p class="caveat caveat--light"><span><strong>Limitação.</strong> ${esc(f.limitation)}</span></p>
      <div>${btn('Ler o estudo', f.url, 'light', icon.diag)}</div>
    </div>
  </article>`;
}

const countries = ['Moçambique', 'África do Sul', 'Portugal', 'Brasil', 'Angola', 'Reino Unido', 'Estados Unidos', 'França', 'Outro'];

export function leadForm() {
  return `
  <div class="lead-box">
    ${art('a', `
      <div class="stack" style="--stack:12px">
        <span class="pcard__tag">Checklist gratuita</span>
        <h3 class="pcard__name" style="max-width:12ch">Mozambique Market Entry Decision Checklist</h3>
      </div>
      <div class="stack" style="--stack:12px">
        <p>Inclui:</p>
        <ol class="lead-box__list">${CHECKLIST.map((c) => `<li>${esc(c.title)}</li>`).join('')}</ol>
      </div>`, 'lead-box__art')}
    <div class="lead-box__form">
      <form class="form" data-form data-subject="Pedido de checklist — Market Entry Decision Checklist" novalidate>
        <div class="form__fields form">
          <div class="form__row form__row--2">
            ${field('lm-nome', 'nome', 'Nome', 'text', { auto: 'given-name' })}
            ${field('lm-apelido', 'apelido', 'Apelido', 'text', { auto: 'family-name' })}
          </div>
          ${field('lm-email', 'email', 'E-mail profissional', 'email', { auto: 'email' })}
          <div class="form__row form__row--2">
            ${field('lm-empresa', 'empresa', 'Empresa', 'text', { auto: 'organization' })}
            ${field('lm-cargo', 'cargo', 'Cargo', 'text', { auto: 'organization-title' })}
          </div>
          <div class="form__row form__row--2">
            ${select('lm-pais', 'pais', 'País', countries)}
            ${select('lm-sector', 'sector', 'Sector', [...SECTORS.map((s) => s.name), 'Outro'])}
          </div>
          <label class="check"><input type="checkbox" name="consentimento" data-label="Consentimento de comunicação" required>
            <span>Aceito receber a checklist e comunicações da Intelsight relacionadas com estudos e recursos. Posso retirar o consentimento a qualquer momento. <a href="${SITE.privacyUrl}">Política de privacidade</a>.</span></label>
          <div><button class="btn" type="submit">Descarregar gratuitamente${icon.down}</button></div>
        </div>
        <div class="form__success" role="status">
          <h3>Obrigado. A checklist está pronta.</h3>
          <p>Abra a versão imprimível e guarde-a em PDF a partir do seu navegador.</p>
          <p style="margin-top:14px">${btn('Abrir a checklist', '/recursos/checklist-entrada-mercado/')}</p>
        </div>
      </form>
    </div>
  </div>`;
}

export function field(id, name, lab, type = 'text', { required = true, auto = '', hint = '', placeholder = '' } = {}) {
  return `
  <div class="field">
    <label for="${id}">${esc(lab)}${required ? '' : ' <span class="opt">(opcional)</span>'}</label>
    ${type === 'textarea'
      ? `<textarea id="${id}" name="${name}" data-label="${esc(lab)}"${required ? ' required' : ''}${placeholder ? ` placeholder="${esc(placeholder)}"` : ''}></textarea>`
      : `<input id="${id}" name="${name}" type="${type}" data-label="${esc(lab)}"${auto ? ` autocomplete="${auto}"` : ''}${required ? ' required' : ''}${placeholder ? ` placeholder="${esc(placeholder)}"` : ''}>`}
    ${hint ? `<span class="hint">${esc(hint)}</span>` : ''}
    ${required ? `<span class="err">${type === 'email' ? 'Indique um e-mail válido.' : 'Campo obrigatório.'}</span>` : ''}
  </div>`;
}

export function select(id, name, lab, options, { required = true } = {}) {
  return `
  <div class="field">
    <label for="${id}">${esc(lab)}${required ? '' : ' <span class="opt">(opcional)</span>'}</label>
    <select id="${id}" name="${name}" data-label="${esc(lab)}"${required ? ' required' : ''}>
      <option value="">Selecionar</option>
      ${options.map((o) => `<option>${esc(o)}</option>`).join('')}
    </select>
    ${required ? '<span class="err">Selecione uma opção.</span>' : ''}
  </div>`;
}
