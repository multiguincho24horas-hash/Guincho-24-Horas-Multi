import React, { useState } from 'react';
import { useNavigation, RoutePath } from '../context/NavigationContext';
import { RoadSignSymbol } from './RoadSignSymbol';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath, navigateTo, handlePedirGuincho } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; path: RoutePath }[] = [
    { label: 'Início', path: '/' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Área de atendimento', path: '/area-atendimento' },
    { label: 'Como funciona', path: '/como-funciona' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Contato', path: '/contato' },
  ];

  const handleNavClick = (path: RoutePath) => {
    navigateTo(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#10263D]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      {/* Top Bar 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Marca Tipográfica MULTI com Símbolo de Estrada/Gancho */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/');
          }}
          className="flex items-center gap-3 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC52D] rounded-lg p-1"
          aria-label="MULTI Guincho 24 Horas - Página inicial"
        >
          <RoadSignSymbol className="w-8 h-8 transition-transform group-hover:scale-105" size={32} />
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight text-[#F6F5F1] leading-none">
              MULTI
            </span>
            <span className="text-[11px] font-semibold text-[#FFC52D] uppercase tracking-wider mt-0.5">
              Guincho 24 Horas
            </span>
          </div>
        </a>

        {/* Zone 2: Navegação Principal - Links com texto e sublinhado sutil */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={item.path}
                href={`#${item.path}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.path);
                }}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC52D] rounded ${
                  isActive
                    ? 'text-[#FFC52D] font-semibold'
                    : 'text-[#F6F5F1]/80 hover:text-[#F6F5F1]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFC52D] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Ação Primária - Botão Amarelo de Sinalização */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handlePedirGuincho}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFC52D] text-[#10263D] font-bold text-sm hover:bg-[#f0b924] active:bg-[#e0ab1d] transition-all duration-150 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#10263D] whitespace-nowrap cursor-pointer"
          >
            <span>Pedir guincho</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Botão de Menu Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-[#F6F5F1] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC52D] cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Drawer Mobile Responsivo */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D1F31] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={`#${item.path}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-white/10 text-[#FFC52D] font-semibold'
                      : 'text-[#F6F5F1]/80 hover:bg-white/5 hover:text-[#F6F5F1]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handlePedirGuincho();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#FFC52D] text-[#10263D] font-bold text-base hover:bg-[#f0b924] shadow cursor-pointer"
            >
              <span>Pedir guincho</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
