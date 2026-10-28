import {states} from './states';
import {localAreas,areaPath,cityPath,localGuides,guidePath} from './sao-paulo';
import {municipalities,municipalityDirectoryPath} from './municipalities';
export function locationLabel(path:string){
 const state=states.find(s=>s.path===path);
 if(state)return `Atendemos ${state.location} · ${state.uf}`;
 const city=municipalities.find(c=>c.path===path);
 if(city)return `Atendemos em ${city.name} · SP`;
 const area=localAreas.find(a=>areaPath(a)===path);
 if(area)return `Atendemos ${area.location} · São Paulo`;
 if(path===cityPath||path===municipalityDirectoryPath||localGuides.some(g=>guidePath(g)===path))return 'Atendemos em São Paulo · SP';
 return 'Base em São Paulo · SP';
}
