import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultBusinessConfig, BusinessConfig } from '../config/business';

export type RoutePath =
  | '/'
  | '/servicos'
  | '/area-atendimento'
  | '/como-funciona'
  | '/sobre'
  | '/contato'
  | '/contatopc'
  | '/privacidade';

interface NavigationContextType {
  currentPath: RoutePath;
  navigateTo: (path: RoutePath) => void;
  businessConfig: BusinessConfig;
  handlePedirGuincho: (e?: React.MouseEvent) => void;
}

const pageTitles: Record<RoutePath, { title: string; description: string }> = {
  '/': {
    title: 'Guincho 24 Horas Multi | Atendimento e Transporte de Veículos',
    description: 'Seu veículo precisa de ajuda. Conte com a Multi. Atendimento sob consulta prévia de disponibilidade por trajeto e tipo de veículo.',
  },
  '/servicos': {
    title: 'Serviços | Guincho 24 Horas Multi',
    description: 'Situações para consulta de disponibilidade: remoção por pane, transporte agendado e transporte de automóveis ou motocicletas.',
  },
  '/area-atendimento': {
    title: 'Área de Atendimento | Guincho 24 Horas Multi',
    description: 'Consulte as condições e viabilidade para o seu ponto de coleta e destino com alinhamento prévio e transparente.',
  },
  '/como-funciona': {
    title: 'Como Funciona | Guincho 24 Horas Multi',
    description: 'Três etapas simples: explicação da situação, verificação de equipamento compatível e condições alinhadas diretamente.',
  },
  '/sobre': {
    title: 'Sobre a Multi | Guincho 24 Horas Multi',
    description: 'Conheça o compromisso institucional da Multi com a clareza técnica, segurança na rodovia e preservação do seu patrimônio.',
  },
  '/contato': {
    title: 'Contato | Guincho 24 Horas Multi',
    description: 'Canal de atendimento e orientações sobre os dados necessários para consultar disponibilidade de guincho.',
  },
  '/contatopc': {
    title: 'Atendimento via Computador | Guincho 24 Horas Multi',
    description: 'Linha direta para solicitação de atendimento e consulta de remoção de veículos.',
  },
  '/privacidade': {
    title: 'Política de Privacidade | Guincho 24 Horas Multi',
    description: 'Informações sobre a navegação institucional, sem coleta indevida de dados, sem formulários e sem rastreadores de marketing.',
  },
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const validRoutes: RoutePath[] = [
  '/',
  '/servicos',
  '/area-atendimento',
  '/como-funciona',
  '/sobre',
  '/contato',
  '/contatopc',
  '/privacidade',
];

function resolveCurrentRoute(): RoutePath {
  if (typeof window === 'undefined') return '/';

  // 1. Tenta obter pelo hash (#/servicos ou #servicos)
  const hash = window.location.hash.replace(/^#\/?/, '/');
  const cleanHash = hash.split('?')[0].split('#')[0] as RoutePath;
  if (validRoutes.includes(cleanHash)) {
    return cleanHash;
  }

  // 2. Tenta obter pelo pathname (/servicos)
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const cleanPathname = pathname.split('?')[0].split('#')[0] as RoutePath;
  if (validRoutes.includes(cleanPathname)) {
    return cleanPathname;
  }

  return '/';
}

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<RoutePath>(resolveCurrentRoute);
  const businessConfig = defaultBusinessConfig;

  useEffect(() => {
    const handleLocationChange = () => {
      const resolved = resolveCurrentRoute();
      setCurrentPath(resolved);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    // Atualiza metadados SEO do documento dinamicamente
    const meta = pageTitles[currentPath] || pageTitles['/'];
    document.title = meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    }
  }, [currentPath]);

  const navigateTo = (path: RoutePath) => {
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePedirGuincho = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();

    const isDataReady = Boolean(businessConfig.phone || businessConfig.whatsapp);

    if (!isDataReady) {
      // Regra obrigatória: enquanto vazio, leva à página de Contato com aviso elegante em preparação
      navigateTo('/contato');
      return;
    }

    // Quando configurado:
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    if (isMobile && businessConfig.whatsapp) {
      const message = encodeURIComponent(
        'Olá, estou no site da Guincho 24 Horas Multi e preciso consultar disponibilidade de atendimento.'
      );
      window.open(`https://wa.me/${businessConfig.whatsapp}?text=${message}`, '_blank');
    } else {
      // Desktop leva a /contatopc/ que exibe número grande, sem botão de copiar e sem botão WhatsApp
      navigateTo('/contatopc');
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigateTo,
        businessConfig,
        handlePedirGuincho,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export function useNavigation(): NavigationContextType {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
