import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { RoadSignSymbol } from '../components/RoadSignSymbol';
import { ShieldCheck, Compass, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { handlePedirGuincho } = useNavigation();

  return (
    <div className="min-h-screen bg-[#10263D] text-[#F6F5F1]">
      
      {/* Header */}
      <section className="border-b border-white/10 bg-[#0B1A2A] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFC52D] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-sm bg-[#FFC52D]" aria-hidden="true" />
            <span>Compromisso Institucional</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F6F5F1]">
            Sobre a Guincho 24 Horas Multi
          </h1>
          <p className="text-base sm:text-lg text-[#F6F5F1]/80 max-w-3xl leading-relaxed">
            Uma proposta pautada no atendimento direto, na preservação mecânica do veículo e na transparência antes de qualquer deslocamento.
          </p>
        </div>
      </section>

      {/* Conteúdo com Seção Clara */}
      <section className="bg-[#F6F5F1] text-[#10263D] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#10263D]/70 block">
                  Identidade & Princípios
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10263D]">
                  Por que a transparência é o nosso ponto central
                </h2>
                <p className="text-sm sm:text-base text-[#10263D]/80 leading-relaxed">
                  Quem passa por uma pane ou precisa transportar um carro ou moto já enfrenta estresse suficiente. Nesse momento, tudo o que o proprietário precisa é de clareza: saber se há equipamento compatível para a situação, qual o prazo realista e qual o valor exato, sem letras miúdas.
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#10263D]/80 leading-relaxed">
                <p>
                  A <strong>MULTI</strong> adota uma postura estritamente técnica. Não divulgamos alegações genéricas de frotas infinitas ou cobertura nacional irrestrita. Cada atendimento é tratado como uma operação pontual de responsabilidade sobre o patrimônio de quem nos procura.
                </p>
                <p>
                  O nome comercial da nossa marca traz o termo <strong>24 Horas</strong> como norte operacional, e mantemos o compromisso ético de confirmar a disponibilidade imediata de plantão logo no contato inicial, assegurando que você nunca fique esperando sem retorno preciso.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-[#10263D]/10 shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#10263D] text-[#FFC52D] flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <h4 className="font-bold text-sm text-[#10263D]">Cuidado com o Veículo</h4>
                  <p className="text-xs text-[#10263D]/70 leading-relaxed">
                    Prioridade no uso de guincho plataforma com fixação por cintas nas rodas para não forçar caixas de direção, suspensões ou bandejas.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#10263D]/10 shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#10263D] text-[#FFC52D] flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <h4 className="font-bold text-sm text-[#10263D]">Alinhamento Antes da Saída</h4>
                  <p className="text-xs text-[#10263D]/70 leading-relaxed">
                    Tudo é conversado e acordado antes: valores de trajeto, possíveis taxas de pedágio e estimativa de deslocamento.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-7 rounded-xl border border-[#10263D]/10 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <RoadSignSymbol className="w-9 h-9" size={36} />
                <div>
                  <span className="font-extrabold text-xl text-[#10263D] block">MULTI</span>
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
                    Guincho 24 Horas
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-[#10263D]/80 leading-relaxed pt-2 border-t border-neutral-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10263D] shrink-0 mt-0.5" />
                  <span>Atendimento consultivo focado no tipo do seu veículo (carro ou moto).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10263D] shrink-0 mt-0.5" />
                  <span>Respeito às regras do trânsito, gabaritos de pontes e limites de peso.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10263D] shrink-0 mt-0.5" />
                  <span>Comunicação direta sem robôs ou menus telefônicos intermináveis.</span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#10263D] text-[#F6F5F1] space-y-2">
                <span className="text-xs font-bold text-[#FFC52D] uppercase tracking-wider block">
                  Compromisso
                </span>
                <p className="text-xs text-[#F6F5F1]/80 leading-relaxed">
                  Tratamos o seu carro ou a sua moto com a mesma atenção e rigor técnico que exigiríamos para o nosso próprio veículo.
                </p>
              </div>

              <button
                onClick={handlePedirGuincho}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#FFC52D] text-[#10263D] font-bold text-sm hover:bg-[#f0b924] shadow cursor-pointer transition-colors"
              >
                <span>Pedir guincho</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
