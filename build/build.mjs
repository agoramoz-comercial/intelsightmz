// Gera o website estático em dist/.  Uso: node build/build.mjs
import { mkdir, writeFile, rm, cp, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, SOLUTIONS } from './content.mjs';
import { page } from './layout.mjs';
import home from './pages/home.mjs';
import * as inner from './pages/inner.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'dist');

const pages = [
  home(),
  inner.solucoes(),
  ...SOLUTIONS.map((s, i) => inner.servico(s, i)),
  inner.sectores(),
  inner.produtos(),
  inner.metodologia(),
  inner.casos(),
  inner.insights(),
  inner.recursos(),
  inner.checklist(),
  inner.sobre(),
  inner.contactos(),
  inner.notFound(),
];

await rm(out, { recursive: true, force: true });
await mkdir(join(out, 'assets'), { recursive: true });
await cp(join(root, 'assets'), join(out, 'assets'), { recursive: true });
await cp(join(root, 'src/css'), join(out, 'assets/css'), { recursive: true });
await cp(join(root, 'src/js'), join(out, 'assets/js'), { recursive: true });

const css = await readFile(join(root, 'src/css/main.css'));
const js = await readFile(join(root, 'src/js/main.js'));
const version = createHash('sha1').update(css).update(js).digest('hex').slice(0, 10);

const titles = new Set();
for (const p of pages) {
  if (titles.has(p.title)) throw new Error(`Título duplicado: ${p.title}`);
  titles.add(p.title);
  const html = page(p).replaceAll('__V__', version);
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) throw new Error(`${p.path}: esperado 1 <h1>, encontrado ${h1s}`);
  const file = p.path.endsWith('.html') ? join(out, p.path) : join(out, p.path, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}

const today = new Date().toISOString().slice(0, 10);
const indexable = pages.filter((p) => !p.noindex);
await writeFile(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `  <url><loc>${SITE.url}${p.path}</loc><lastmod>${today}</lastmod><priority>${p.path === '/' ? '1.0' : p.path.split('/').length > 3 ? '0.7' : '0.8'}</priority></url>`).join('\n')}
</urlset>
`);
await writeFile(join(out, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /recursos/checklist-entrada-mercado/\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
await writeFile(join(out, 'site.webmanifest'), JSON.stringify({
  name: 'Intelsight', short_name: 'Intelsight', lang: 'pt-MZ', start_url: '/', display: 'standalone',
  background_color: '#F8FAFC', theme_color: '#102A43',
  icons: [{ src: '/assets/img/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
}, null, 2));

console.log(`✓ ${pages.length} páginas geradas em dist/ (v${version})`);
