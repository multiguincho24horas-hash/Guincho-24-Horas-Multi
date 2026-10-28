import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {municipalities,municipalityDirectoryPath} from '../src/municipalities';

assert.equal(municipalities.length,20);
assert.equal(new Set(municipalities.map(c=>c.path)).size,20);
assert.equal(new Set(municipalities.map(c=>c.intro)).size,20);
const map=readFileSync('dist/sitemap.xml','utf8');
const directory=readFileSync(`dist${municipalityDirectoryPath}index.html`,'utf8');
for(const c of municipalities){
 assert.ok(/^35\d{5}$/.test(String(c.id)),c.name);
 assert.ok(c.districts.includes(c.name),c.name);
 const html=readFileSync(`dist${c.path}index.html`,'utf8');
 assert.ok(directory.includes(`href="${c.path}"`));
 assert.ok(map.includes(`https://guincho24horasmulti.com${c.path}</loc>`));
 assert.ok(html.includes(c.access));
 const graph=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)![1])['@graph'];
 assert.equal(graph.filter((g:any)=>g['@type']==='BreadcrumbList').length,1);
 assert.equal(graph.find((g:any)=>g['@type']==='Service').areaServed.name,c.name);
 assert.equal(graph.find((g:any)=>g['@type']==='LocalBusiness').address.addressLocality,'São Paulo');
 const images=[...html.matchAll(/<article class="vehicle-card"><img[^>]+src="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(new Set(images).size,5);
 for(const image of images)assert.ok(existsSync('dist'+image));
 for(const r of c.related)assert.ok(municipalities.some(city=>city.name===r));
}
assert.ok(readFileSync('dist/guincho-sao-paulo/index.html','utf8').includes(`href="${municipalityDirectoryPath}"`));
console.log('Verified 20 municipalities with IBGE identifiers, local content, geographic schema, 5 distinct vehicle photos, navigation and sitemap.');

assert.ok(readFileSync('dist/guincho-parana/index.html','utf8').includes('Atendemos no Paraná · PR'));
assert.ok(readFileSync('dist/guincho-em-campinas/index.html','utf8').includes('Atendemos em Campinas · SP'));
assert.ok(readFileSync('dist/sao-paulo/zona-leste/index.html','utf8').includes('Atendemos na Zona Leste · São Paulo'));
