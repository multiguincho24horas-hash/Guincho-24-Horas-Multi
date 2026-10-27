import React,{useEffect,useState} from 'react';
import {business,normalizePath} from './site-data';
export const MEASUREMENT_ID='G-HR03M5DF42';
const KEY='multi-analytics-consent';
let started=false;
declare global {interface Window {dataLayer?:unknown[];gtag?:(...args:any[])=>void}}
function savedConsent(){try{return localStorage.getItem(KEY)}catch{return null}}
function allowed(){return typeof window!=='undefined'&&['guincho24horasmulti.com','www.guincho24horasmulti.com'].includes(window.location.hostname)&&savedConsent()==='accepted'}
function start(){
 if(started||!allowed())return;
 started=true;
 window.dataLayer=window.dataLayer||[];
 window.gtag=window.gtag||function(){window.dataLayer!.push(arguments)};
 window.gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
 window.gtag('js',new Date());
 let referrer='';try{referrer=document.referrer?new URL(document.referrer).origin:''}catch{}
 window.gtag('config',MEASUREMENT_ID,{send_page_view:true,page_location:business.url+normalizePath(window.location.pathname),page_referrer:referrer,allow_google_signals:false,allow_ad_personalization_signals:false,transport_type:'beacon'});
 const script=document.createElement('script');script.async=true;script.src=`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;script.id='multi-ga';document.head.appendChild(script);
 if(normalizePath(window.location.pathname)==='/contatopc/')track('contactpc_view');
}
export function track(name:'contactpc_view'|'contactpc_click'|'whatsapp_click'|'contact_unavailable_click'){
 try{if(allowed()&&started&&window.gtag)window.gtag('event',name,{page_path:normalizePath(window.location.pathname),transport_type:'beacon'});}catch{/* A medição nunca impede contato. */}
}
function choose(value:'accepted'|'rejected'){
 try{localStorage.setItem(KEY,value)}catch{return}
 if(value==='accepted'){if(started)window.gtag?.('consent','update',{analytics_storage:'granted'});else start();}
 else if(started){window.gtag?.('consent','update',{analytics_storage:'denied'});for(const part of document.cookie.split(';')){const name=part.trim().split('=')[0];if(name.startsWith('_ga')){document.cookie=`${name}=; Max-Age=0; path=/`;document.cookie=`${name}=; Max-Age=0; path=/; domain=.guincho24horasmulti.com`;}}}
}
export function Analytics(){const [visible,setVisible]=useState(false);useEffect(()=>{const value=savedConsent();setVisible(value!=='accepted'&&value!=='rejected');if(value==='accepted')start();const open=()=>setVisible(true);window.addEventListener('multi-cookie-preferences',open);return()=>window.removeEventListener('multi-cookie-preferences',open)},[]);return visible?<aside className="cookie-notice" aria-label="Preferências de medição"><div><strong>Podemos medir as visitas?</strong><p>Usamos Google Analytics para entender os acessos e melhorar o site. Você pode recusar e continuar navegando. <a href="/privacidade/">Saiba mais</a></p></div><div className="cookie-actions"><button onClick={()=>{choose('rejected');setVisible(false)}}>Recusar</button><button onClick={()=>{choose('accepted');setVisible(false)}}>Aceitar medição</button></div></aside>:null}
export function CookiePreferences(){return <button className="privacy-preferences" onClick={()=>window.dispatchEvent(new Event('multi-cookie-preferences'))}>Preferências de privacidade</button>}
