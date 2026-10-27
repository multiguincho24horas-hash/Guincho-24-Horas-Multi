# Guincho 24 Horas Multi

Site React + Vite com HTML estático completo para cada página. Cloudflare Pages publica automaticamente a branch `main` no domínio https://guincho24horasmulti.com.

## Comandos

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npx tsx scripts/verify.ts`

Cloudflare: Node 22, build `npm run build`, saída `dist`. Não configurar fallback `/* /index.html 200`: a saída inclui `404.html` para rotas inexistentes. O build gera sitemap, robots, canonical, Open Graph e JSON-LD por página.

## Dados comerciais

`src/site-data.ts` centraliza contato, empresa, rotas e serviços. Telefone e WhatsApp comercial: +55 11 3042-0181. Computador leva a `/contatopc/`; celular abre WhatsApp diretamente na mesma aba com contexto. Sem número, o celular leva a `/contato/`. A página de PC mostra telefone clicável e acesso opcional ao WhatsApp. A base principal em São Paulo é diferenciada da cobertura por rede nacional de parceiros.

## Google Analytics

Conta: Guincho 24 Horas Multi. Propriedade 560934852, conta 413512051, fluxo 16210755454, medição `G-HR03M5DF42`. Brasil, America/Sao_Paulo, BRL. Objetivos: tráfego e leads. Painel: https://analytics.google.com/analytics/web/#/a413512051p560934852/reports/intelligenthome

`src/Analytics.tsx` carrega a tag apenas nos domínios oficiais e após aceite de medição. Permite recusar e rever a escolha no rodapé. Não instala GA nos previews nem no desenvolvimento. O Google registra page_view; os eventos próprios distinguem `contactpc_click`, `contactpc_view`, `whatsapp_click` e `contact_unavailable_click`. Sem número não se fabrica whatsapp_click. Eventos não comprovam contratação e não devem ser somados com visualizações como conversões duplas. URLs enviadas não incluem query strings ou hash; parâmetros próprios só têm a rota. A navegação de contato independe da medição. A medição otimizada padrão do Google foi mantida; seus cliques genéricos são diferentes dos eventos próprios. Nunca marcar visita de PC como conversão de contato.

## Imagens

Somente imagens geradas para este projeto com a ferramenta integrada ImageGen. As três imagens finais WebP estão em `public/images/`; PNGs originais em `output/imagegen/`, preservados localmente e ignorados pelo Git. Não são fotografias documentais de frota própria ou de parceiros. A página `/creditos/` explica a natureza ilustrativa. Nenhuma foto de terceiros é usada ou publicada.

Prompts finais e método em `output/imagegen/prompts.md`.

## SEO

43 documentos HTML, incluindo 26 estados e Distrito Federal com orientações regionais em src/states.ts, seis páginas de serviços, páginas institucionais, contato, PC e 404. Sitemap inclui apenas páginas indexáveis; PC, créditos e 404 têm noindex. Rotas usam caminhos reais; URLs legadas `#/…` são encaminhadas no navegador. HTML contém conteúdo, links e dados empresariais antes da execução de JavaScript. Search Console/submissão do sitemap não fazem parte desta integração. Implementação não garante posição ou indexação.


## Contato e veículos por estado

Cada estado inclui cinco seções para carros, motos, pesados, caminhões e ônibus. Contatos são links normais na mesma aba: celular usa wa.me/551130420181, computador usa /contatopc/. Não há window.open nem pop-up do site. A página de PC mostra o telefone e orienta usar o mesmo número no WhatsApp do celular. Botões de ligação usam tel:+551130420181. Ícone WhatsApp em SVG e botão flutuante. Serviços pesados exigem avaliação de parceiro e equipamento compatível.
