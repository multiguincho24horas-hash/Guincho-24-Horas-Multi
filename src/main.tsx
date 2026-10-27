import React from 'react';
import {createRoot,hydrateRoot} from 'react-dom/client';
import Site from './Site';
import './index.css';
const root=document.getElementById('root')!;
const site=<Site initialPath={window.location.pathname}/>;
if(root.hasChildNodes())hydrateRoot(root,site);else createRoot(root).render(site);
