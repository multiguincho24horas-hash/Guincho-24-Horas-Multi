import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { MapPin, Navigation, Compass, AlertCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const CoveragePage: React.FC = () => {
  const { handlePedirGuincho } = useNavigation();

  return (
    <div className="min-h-screen bg-[#10263D] text-[#F6F5F1]">
      
      {/* Cabeçalho */}
      <section className="border-b border-white/10 bg-[#0B1A2A] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFC52D] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-sm bg-[#FFC52D]" aria-hidden="true" />
            <span>Viabilidade de Rotas</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F6F5F1]">
            Área de Atendimento: Consulte sua região
          </h1>
          <p className="text-base sm:text-lg text-[#F6F5F1]/80 max-w-3xl leading-relaxed">
            Cada percurso é avaliado com precisão a partir do ponto de partida e do destino final. Não fazemos promessas genéricas de cobertura universal: consultamos a escala e a viabilidade da rota antes de confirmar qualquer saída.
          </p>
        </div>
      </section>

      {/* Conteúdo com Seção Clara */}
      <section className="bg-[#F6F5F1] text-[#10263D] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Lado Esquerdo: Como a cobertura funciona */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#10263D]/70 block">
                  Metodologia de Atendimento
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10263D]">
                  Por que analisamos rota a rota?
                </h2>
                <p className="text-sm text-[#10263D]/80 leading-relaxed">
                  Diferente de um veículo de passeio comum, um caminhão guincho plataforma possui restrições severas de circulação urbana, horários de tráfego pesado, pedágios, pontes com limite de tonelagem e vias com fiação baixa.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-[#10263D]/10 shadow-sm flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#10263D] text-[#FFC52D] flex items-center justify-center shrink-0 mt-0.5">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#10263D]">Rodovias e Vias Expressas</h3>
                    <p className="text-xs text-[#10263D]/75 leading-relaxed">
                      Verificamos o quilômetro aproximado da rodovia, o sentido da via (sentido capital ou interior) e a proximidade de retornos seguros para o caminhão.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#10263D]/10 shadow-sm flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#10263D] text-[#FFC52D] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#10263D]">Perímetros Urbanos e Bairros</h3>
                    <p className="text-xs text-[#10263D]/75 leading-relaxed">
                      Consultamos se a rua de coleta e o local de destino comportam o tamanho do guincho (cerca de 8 a 9 metros) e se há espaço para descida da plataforma hidráulica.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#10263D]/10 shadow-sm flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#10263D] text-[#FFC52D] flex items-center justify-center shrink-0 mt-0.5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#10263D]">Viagens Intermunicipais Programadas</h3>
                    <p className="text-xs text-[#10263D]/75 leading-relaxed">
                      Para transferências agendadas de veículos entre municípios, calculamos previamente a quilometragem total e alinhamos valores claros antes do compromisso.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito: Quadro de Consulta */}
            <div className="lg:col-span-5 bg-white p-7 rounded-xl border border-[#10263D]/15 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFC52D] bg-[#10263D] px-2.5 py-1 rounded inline-block">
                  Consulta Direta
                </span>
                <h3 className="text-xl font-bold text-[#10263D]">
                  Como consultar a viabilidade da sua região
                </h3>
                <p className="text-xs text-[#10263D]/75 leading-relaxed">
                  Ao nos contatar, tenha em mente estas 3 perguntas simples:
                </p>
              </div>

              <div className="space-y-3 text-xs text-[#10263D]">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10263D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">1. Onde o carro está parado agora?</span>
                    <span className="text-neutral-600">Bairro, avenida ou rodovia com km aproximado.</span>
                  </div>
                </div>

                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10263D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">2. Para onde o veículo será transportado?</span>
                    <span className="text-neutral-600">Bairro da oficina, concessionária ou garagem.</span>
                  </div>
                </div>

                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10263D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">3. O veículo rola normalmente?</span>
                    <span className="text-neutral-600">Se as rodas giram ou se estão travadas.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handlePedirGuincho}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#FFC52D] text-[#10263D] font-bold text-sm hover:bg-[#f0b924] shadow cursor-pointer transition-colors"
                >
                  <span>Pedir guincho</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  Informamos imediatamente se temos disponibilidade e qual o valor exato antes da partida do equipamento.
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
