import {municipalCopy} from './municipal-copy';
export const municipalityDirectoryPath='/municipios-de-sao-paulo/';
const verified=[
 {
  "id": 3518800,
  "name": "Guarulhos",
  "region": "São Paulo",
  "districts": [
   "Guarulhos",
   "Jardim Presidente Dutra"
  ],
  "slug": "guarulhos",
  "path": "/guincho-em-guarulhos/"
 },
 {
  "id": 3534401,
  "name": "Osasco",
  "region": "São Paulo",
  "districts": [
   "Osasco"
  ],
  "slug": "osasco",
  "path": "/guincho-em-osasco/"
 },
 {
  "id": 3547809,
  "name": "Santo André",
  "region": "São Paulo",
  "districts": [
   "Santo André",
   "Capuava",
   "Paranapiacaba"
  ],
  "slug": "santo-andre",
  "path": "/guincho-em-santo-andre/"
 },
 {
  "id": 3548708,
  "name": "São Bernardo do Campo",
  "region": "São Paulo",
  "districts": [
   "São Bernardo do Campo",
   "Riacho Grande"
  ],
  "slug": "sao-bernardo-do-campo",
  "path": "/guincho-em-sao-bernardo-do-campo/"
 },
 {
  "id": 3548807,
  "name": "São Caetano do Sul",
  "region": "São Paulo",
  "districts": [
   "São Caetano do Sul"
  ],
  "slug": "sao-caetano-do-sul",
  "path": "/guincho-em-sao-caetano-do-sul/"
 },
 {
  "id": 3513801,
  "name": "Diadema",
  "region": "São Paulo",
  "districts": [
   "Diadema"
  ],
  "slug": "diadema",
  "path": "/guincho-em-diadema/"
 },
 {
  "id": 3529401,
  "name": "Mauá",
  "region": "São Paulo",
  "districts": [
   "Mauá"
  ],
  "slug": "maua",
  "path": "/guincho-em-maua/"
 },
 {
  "id": 3543303,
  "name": "Ribeirão Pires",
  "region": "São Paulo",
  "districts": [
   "Ribeirão Pires",
   "Jardim Santa Luzia",
   "Ouro Fino Paulista"
  ],
  "slug": "ribeirao-pires",
  "path": "/guincho-em-ribeirao-pires/"
 },
 {
  "id": 3552502,
  "name": "Suzano",
  "region": "São Paulo",
  "districts": [
   "Suzano",
   "Boa Vista Paulista",
   "Palmeiras de São Paulo"
  ],
  "slug": "suzano",
  "path": "/guincho-em-suzano/"
 },
 {
  "id": 3530607,
  "name": "Mogi das Cruzes",
  "region": "São Paulo",
  "districts": [
   "Mogi das Cruzes",
   "Biritiba-Ussu",
   "Brás Cubas",
   "Cezar de Souza",
   "Jundiapeba",
   "Quatinga",
   "Sabaúna",
   "Taiaçupeba"
  ],
  "slug": "mogi-das-cruzes",
  "path": "/guincho-em-mogi-das-cruzes/"
 },
 {
  "id": 3523107,
  "name": "Itaquaquecetuba",
  "region": "São Paulo",
  "districts": [
   "Itaquaquecetuba"
  ],
  "slug": "itaquaquecetuba",
  "path": "/guincho-em-itaquaquecetuba/"
 },
 {
  "id": 3510609,
  "name": "Carapicuíba",
  "region": "São Paulo",
  "districts": [
   "Carapicuíba",
   "Aldeia de Carapicuíba",
   "Vila Dirce"
  ],
  "slug": "carapicuiba",
  "path": "/guincho-em-carapicuiba/"
 },
 {
  "id": 3513009,
  "name": "Cotia",
  "region": "São Paulo",
  "districts": [
   "Cotia",
   "Caucaia do Alto"
  ],
  "slug": "cotia",
  "path": "/guincho-em-cotia/"
 },
 {
  "id": 3505708,
  "name": "Barueri",
  "region": "São Paulo",
  "districts": [
   "Barueri",
   "Aldeia",
   "Jardim Belval",
   "Jardim Silveira"
  ],
  "slug": "barueri",
  "path": "/guincho-em-barueri/"
 },
 {
  "id": 3552809,
  "name": "Taboão da Serra",
  "region": "São Paulo",
  "districts": [
   "Taboão da Serra"
  ],
  "slug": "taboao-da-serra",
  "path": "/guincho-em-taboao-da-serra/"
 },
 {
  "id": 3509502,
  "name": "Campinas",
  "region": "Campinas",
  "districts": [
   "Campinas",
   "Barão Geraldo",
   "Joaquim Egídio",
   "Nova Aparecida",
   "Souzas",
   "Ouro Verde",
   "Campo Grande"
  ],
  "slug": "campinas",
  "path": "/guincho-em-campinas/"
 },
 {
  "id": 3525904,
  "name": "Jundiaí",
  "region": "Jundiaí",
  "districts": [
   "Jundiaí"
  ],
  "slug": "jundiai",
  "path": "/guincho-em-jundiai/"
 },
 {
  "id": 3552205,
  "name": "Sorocaba",
  "region": "Sorocaba",
  "districts": [
   "Sorocaba"
  ],
  "slug": "sorocaba",
  "path": "/guincho-em-sorocaba/"
 },
 {
  "id": 3548500,
  "name": "Santos",
  "region": "Santos",
  "districts": [
   "Santos"
  ],
  "slug": "santos",
  "path": "/guincho-em-santos/"
 },
 {
  "id": 3549904,
  "name": "São José dos Campos",
  "region": "São José dos Campos",
  "districts": [
   "São José dos Campos",
   "Eugênio de Melo",
   "São Francisco Xavier"
  ],
  "slug": "sao-jose-dos-campos",
  "path": "/guincho-em-sao-jose-dos-campos/"
 }
];
export const municipalities=verified.map(c=>({...c,...municipalCopy[c.name]}));
export function municipalityMeta(){return [{path:municipalityDirectoryPath,title:'Guincho nos municípios de São Paulo | Cidades atendidas pela rede Multi',description:'Consulte guincho por município de São Paulo: capital, Grande São Paulo, interior e litoral. Veja orientações locais e fale com a Multi pelo WhatsApp.'},...municipalities.map(c=>({path:c.path,title:`Guincho 24 horas em ${c.name} – SP | Multi`,description:`Precisa de guincho em ${c.name}? Consulte carro, moto, caminhão e ônibus com avaliação de acesso e disponibilidade. WhatsApp e telefone (11) 3042-0181.`}))];}
