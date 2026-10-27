import {states} from '../src/states';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {join} from 'node:path';
import Site from '../src/Site';
import {business,pages,services} from '../src/site-data';
const template=readFileSync('dist/index.html','utf8');
const esc=(s:string)=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
for(const [path,meta] of Object.entries(pages)){
 const url=business.url+path;
 const org={'@type':'LocalBusiness','@id':business.url+'/#empresa',name:business.name,url:business.url,email:business.email,telephone:'+551130420181',taxID:business.cnpj,address:{'@type':'PostalAddress',streetAddress:business.street+', '+business.neighborhood,addressLocality:business.city,addressRegion:business.state,postalCode:business.postalCode,addressCountry:'BR'},areaServed:{'@type':'Country',name:'Brasil'},description:'Base principal em São Paulo e atendimento nacional por meio de rede de parceiros, conforme disponibilidade na região.',image:business.url+'/images/guincho-multi-carro.webp'};
 const state=states.find(s=>s.path===path);
 const service=services.find(s=>path===`/servicos/${s.slug}/`);
 const graph:any[]=[org,{'@type':'WebSite','@id':business.url+'/#website',url:business.url,name:business.name,inLanguage:'pt-BR'}, {'@type':'WebPage','@id':url+'#page',url,name:meta.title,description:meta.description,inLanguage:'pt-BR',isPartOf:{'@id':business.url+'/#website'}}];
 if(path!=='/'&&path!=='/404/')graph.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:business.url+'/'},{'@type':'ListItem',position:2,name:service?.title??meta.title.split('|')[0].trim(),item:url}]});
 if(state)graph.push({'@type':'Service',name:`Guincho ${state.location}`,description:meta.description,url,provider:{'@id':business.url+'/#empresa'},areaServed:{'@type':'AdministrativeArea',name:state.name}});
 if(service)graph.push({'@type':'Service',name:service.title,description:service.description,url,provider:{'@id':business.url+'/#empresa'},areaServed:{'@type':'Country',name:'Brasil'}});
 const tags=`<meta name="description" content="${esc(meta.description)}"/><meta name="robots" content="${meta.noindex?'noindex, follow':'index, follow, max-image-preview:large'}"/><link rel="canonical" href="${url}"/><meta property="og:type" content="website"/><meta property="og:locale" content="pt_BR"/><meta property="og:site_name" content="${business.name}"/><meta property="og:title" content="${esc(meta.title)}"/><meta property="og:description" content="${esc(meta.description)}"/><meta property="og:url" content="${url}"/><meta property="og:image" content="${business.url}/images/guincho-multi-carro.webp"/><meta name="twitter:card" content="summary_large_image"/><script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':graph}).replaceAll('<','\\u003c')}</script>`;
 const html=template.replace(/<title>.*?<\/title>/s,`<title>${esc(meta.title)}</title>`).replace('</head>',tags+'</head>').replace('<div id="root"></div>',`<div id="root">${renderToString(<Site initialPath={path}/>)}</div>`);
 const output=path==='/404/'?'dist/404.html':join('dist',path,'index.html');mkdirSync(join(output,'..'),{recursive:true});writeFileSync(output,html);
}
const urls=Object.entries(pages).filter(([,p])=>!p.noindex).map(([path])=>`<url><loc>${business.url}${path}</loc></url>`).join('');
writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
writeFileSync('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${business.url}/sitemap.xml\n`);
writeFileSync('dist/_redirects','/area-atendimento /area-de-atendimento/ 301\n/area-atendimento/ /area-de-atendimento/ 301\n');
console.log(`Generated ${Object.keys(pages).length} HTML pages, sitemap, robots and real 404.`);
