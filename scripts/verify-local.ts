import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {localMeta,localAreas,areaPath,cityPath} from '../src/sao-paulo';
const metas=localMeta();
assert.equal(metas.length,19);
assert.equal(new Set(metas.map(m=>m.title)).size,19);
const map=readFileSync('dist/sitemap.xml','utf8');
for(const meta of metas){
 const html=readFileSync(`dist${meta.path}index.html`,'utf8');
 assert.ok(map.includes(`https://guincho24horasmulti.com${meta.path}</loc>`));
 for(const match of html.matchAll(/<img[^>]+src="([^"]+)"/g)) assert.ok(existsSync('dist'+match[1]),match[1]);
 const graph=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)![1])['@graph'];
 assert.equal(graph.filter((n:any)=>n['@type']==='BreadcrumbList').length,1);
 const service=graph.find((n:any)=>n['@type']==='Service');
 if(service) assert.ok(service.areaServed.name.includes('São Paulo'));
 else assert.ok(graph.find((n:any)=>n['@type']==='Article')); 
 assert.ok(html.includes('href="/contatopc/"'));
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
}
const city=readFileSync(`dist${cityPath}index.html`,'utf8');
for(const a of localAreas) assert.ok(city.includes(`href="${areaPath(a)}"`));
console.log('Verified 19 local pages, unique titles, geographic schema, hierarchy, images and sitemap.');
