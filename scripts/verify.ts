import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {pages,business,contactDestination} from '../src/site-data';
for(const [path,meta] of Object.entries(pages)){
 const file=path==='/404/'?'dist/404.html':join('dist',path,'index.html');
 const html=readFileSync(file,'utf8');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${path}: one H1`);
 assert.ok(html.includes(`href="${business.url}${path}"`),`${path}: canonical`);
 assert.ok(html.includes(business.cnpj)&&html.includes(business.email),`${path}: business details`);
 assert.ok(!html.includes('href="#/'),`${path}: crawlable routes`);
 assert.ok(html.includes(meta.noindex?'noindex, follow':'index, follow, max-image-preview:large'));
 for(const match of html.matchAll(/href="(\/[^"#?]*)"/g)){
  const target=match[1];
  if(/\.[a-z0-9]+$/i.test(target))assert.ok(existsSync('dist'+target),target);
  else assert.ok(pages[target],`${path}: broken link ${target}`);
 }
 JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)![1]);
}
const sitemap=readFileSync('dist/sitemap.xml','utf8');
for(const [path,meta] of Object.entries(pages))assert.equal(sitemap.includes(`<loc>${business.url}${path}</loc>`),!meta.noindex,`sitemap: ${path}`);
assert.ok(existsSync('dist/images/guincho-multi-carro.webp'));
assert.equal(contactDestination(false,'guincho'),'/contatopc/');
assert.ok(contactDestination(true,'guincho').startsWith('https://wa.me/551130420181?text='));
assert.equal(contactDestination(true,'guincho',{...business,whatsapp:null}),'/contato/');
const test={...business,whatsapp:'5511999999999'};
assert.ok(contactDestination(true,'guincho para moto',test).startsWith('https://wa.me/5511999999999?text='));
assert.ok(decodeURIComponent(contactDestination(true,'guincho para moto',test)).includes('guincho para moto'));
assert.equal(contactDestination(false,'guincho',test),'/contatopc/');
console.log('Verified all generated HTML pages, links, schema, sitemap, photo and contact routing (with and without configured number).');
