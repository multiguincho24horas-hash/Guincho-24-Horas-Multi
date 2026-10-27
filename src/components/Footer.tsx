import React from 'react';
import { useNavigation, RoutePath } from '../context/NavigationContext';
import { RoadSignSymbol } from './RoadSignSymbol';
import { ShieldCheck, MapPin, Clock, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();

  const handleLink = (path: RoutePath, e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(path);
  };

  return (
    <footer className="bg-[#0B1A2A] text-[#F6F5F1] border-t border-white/10 relative overflow-hidden">
      {/* Detalhe rodoviário sutil: linha tracejada de pista no topo */}
      <div className="w-full h-1 bg-[repeating-linear-gradient(90deg,#FFC52D_0,#FFC52D_24px,transparent_24px,transparent_44px)] opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Coluna 1: Marca & Posicionamento */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <RoadSignSymbol className="w-8 h-8" size={32} />
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-[#F6F5F1] block leading-none">
                  MULTI
                </span>
                <span className="text-xs font-semibold text-[#FFC52D] uppercase tracking-wider block mt-1">
                  Guincho 24 Horas
                </span>
              </div>
            </div>

            <p className="text-sm text-[#F6F5F1]/75 leading-relaxed max-w-md pt-2">
              Atendimento e transporte para veículos e motocicletas com alinhamento prévio e transparente.
              Avaliação criteriosa de trajeto, acesso e equipamento para cada solicitação.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-[#F6F5F1]/65">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFC52D] shrink-0 mt-0.5" />
                <span>Condições e valores informados antes da confirmação da saída.</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#FFC52D] shrink-0 mt-0.5" />
                <span>Marca comercial 24 Horas; plantão e horário confirmados no contato inicial.</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFC52D] shrink-0 mt-0.5" />
                <span>Consulte a viabilidade por ponto de origem, destino e tipo de veículo.</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Navegação Institucional */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFC52D]">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#/"
                  onClick={(e) => handleLink('/', e)}
                  className="text-[#F6F5F1]/75 hover:text-[#F6F5F1] hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-[#FFC52D] rounded"
                >
                  Página Inicial
                </a>
              </li>
              <li>
                <a
                  href="#/servicos"
                  onClick={(e) => handleLink('/servicos', e)}
                  className="text-[#F6F5F1]/75 hover:text-[#F6F5F1] hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-[#FFC52D] rounded"
                >
                  Serviços e Situações
                </a>
              </li>
              <li>
                <a
                  href="#/area-atendimento"
                  onClick={(e) => handleLink('/area-atendimento', e)}
                  className="text-[#F6F5F1]/75 hover:text-[#F6F5F1] hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-[#FFC52D] rounded"
                >
                  Área de Atendimento
                </a>
              </li>
              <li>
                <a
                  href="#/como-funciona"
                  onClick={(e) => handleLink('/como-funciona', e)}
                  className="text-[#F6F5F1]/75 hover:text-[#F6F5F1] hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-[#FFC52D] rounded"
                >
                  Como Funciona o Pedido
                </a>
              </li>
              <li>
                <a
                  href="#/sobre"
                  onClick={(e) => handleLink('/sobre', e)}
                  className="text-[#F6F5F1]/75 hover:text-[#F6F5F1] hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-[#FFC52D] rounded"
                >
                  Sobre a Multi
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento & Segurança */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFC52D]">
              Contato & Regras
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#/contato"
                  onClick={(e) => handleLink('/contato', e)}
                  className="text-[#F6F5F1]/75 hover:text-[#F6F5F1] hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-[#FFC52D] rounded"
                >
                  Página de Contato
                </a>
              </li>
              <li>
                <a
                  href="#/contatopc"
                  onClick={(e) => handleLink('/contatopc', e)}
                  className="text-[#F6F5F1]/75 hover:text-[#F6F5F1] hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-[#FFC52D] rounded"
                >
                  Atendimento via Computador (/contatopc/)
                </a>
              </li>
              <li>
                <a
                  href="#/privacidade"
                  onClick={(e) => handleLink('/privacidade', e)}
                  className="text-[#F6F5F1]/75 hover:text-[#F6F5F1] hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-[#FFC52D] rounded"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>

            <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#F6F5F1]/80 space-y-1.5">
              <p className="font-semibold text-[#FFC52D]">Aviso Importante</p>
              <p className="leading-relaxed">
                As fotos do portal são ilustrativas. Os detalhes de peso, tipo de tração e ponto de acesso do veículo são sempre revisados previamente com você.
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé inferior / Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F6F5F1]/60">
          <p>© {new Date().getFullYear()} GUINCHO 24 HORAS MULTI. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a
              href="#/privacidade"
              onClick={(e) => handleLink('/privacidade', e)}
              className="hover:text-[#F6F5F1] transition-colors"
            >
              Privacidade
            </a>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>Site institucional</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
