import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  Car,
  Wrench,
  ShieldAlert,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { handlePedirGuincho } = useNavigation();

  return (
    <div className="min-h-screen bg-[#10263D] text-[#F6F5F1]">
      
      {/* Header da Página */}
      <section className="border-b border-white/10 bg-[#0B1A2A] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFC52D] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-sm bg-[#FFC52D]" aria-hidden="true" />
            <span>Consultoria de Transporte Automotivo</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F6F5F1]">
            Serviços e Situações de Atendimento
          </h1>
          <p className="text-base sm:text-lg text-[#F6F5F1]/80 max-w-3xl leading-relaxed">
            Apresentamos as modalidades em que atuamos. Toda solicitação passa por uma análise prévia de viabilidade técnica para preservar a integridade do seu veículo e garantir transporte seguro.
          </p>
        </div>
      </section>

      {/* Conteúdo Principal com Seção Clara */}
      <section className="bg-[#F6F5F1] text-[#10263D] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Grade de modalidades com fotos geradas */}
          <div className="space-y-12">
            
            {/* Modalidade 1: Pane Mecânica ou Elétrica */}
            <div className="bg-white rounded-xl border border-[#10263D]/10 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-auto">
                <img
                  src="/src/assets/images/breakdown_recovery_scene_1793068211995.jpg"
                  alt="Operação de guincho em acostamento de rodovia"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-[#10263D]/60 uppercase tracking-wider">
                    Situação Emergencial
                  </div>
                  <h2 className="text-2xl font-bold text-[#10263D]">
                    Remoção por pane mecânica ou elétrica
                  </h2>
                  <p className="text-sm text-[#10263D]/80 leading-relaxed">
                    Atendimento voltado a veículos impossibilitados de trafegar devido a problemas de injeção, embreagem, aquecimento, quebra de suspensão, bateria esgotada ou correia partida.
                  </p>
                  
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#10263D]/80">
                    <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/60 space-y-1">
                      <span className="font-bold block text-[#10263D]">Veículos com câmbio livre:</span>
                      <span>Embarque suave através de cabo de aço de guincho e prancha hidráulica rebaixada.</span>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/60 space-y-1">
                      <span className="font-bold block text-[#10263D]">Veículos com roda travada:</span>
                      <span>Necessidade de avaliação prévia para uso de patins auxiliares de rolagem.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handlePedirGuincho}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#10263D] text-[#F6F5F1] font-semibold text-xs hover:bg-[#18395c] transition-colors cursor-pointer"
                  >
                    <span>Consultar disponibilidade para pane</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFC52D]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Modalidade 2: Transporte Agendado */}
            <div className="bg-white rounded-xl border border-[#10263D]/10 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-auto">
                <img
                  src="/src/assets/images/scheduled_transport_vehicle_1793068212412.jpg"
                  alt="Carro de luxo preso por fitas na plataforma de transporte"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-[#10263D]/60 uppercase tracking-wider">
                    Planejamento & Tranquilidade
                  </div>
                  <h2 className="text-2xl font-bold text-[#10263D]">
                    Transporte agendado e transferência
                  </h2>
                  <p className="text-sm text-[#10263D]/80 leading-relaxed">
                    Ideal para quem comprou ou vendeu um veículo sem documentação regularizada para rodar, carros antigos ou de coleção que não devem acumular quilometragem, ou traslados entre oficinas de funilaria e pintura.
                  </p>
                  
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#10263D]/80">
                    <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/60 space-y-1">
                      <span className="font-bold block text-[#10263D]">Janela de horário programada:</span>
                      <span>Coleta com dia e turno combinados previamente com você e com a oficina receptora.</span>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/60 space-y-1">
                      <span className="font-bold block text-[#10263D]">Fixação estrita por cintas:</span>
                      <span>Travamento exclusivamente pelas rodas e pneus, sem ganchos em componentes de suspensão.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handlePedirGuincho}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#10263D] text-[#F6F5F1] font-semibold text-xs hover:bg-[#18395c] transition-colors cursor-pointer"
                  >
                    <span>Agendar consulta de transporte</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFC52D]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Modalidade 3: Motocicletas */}
            <div className="bg-white rounded-xl border border-[#10263D]/10 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-auto">
                <img
                  src="/src/assets/images/motorcycle_transport_cradle_1793068212744.jpg"
                  alt="Motocicleta ancorada em suporte especial de plataforma"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-[#10263D]/60 uppercase tracking-wider">
                    Equipamento Dedicado
                  </div>
                  <h2 className="text-2xl font-bold text-[#10263D]">
                    Transporte de motos com amarração técnica
                  </h2>
                  <p className="text-sm text-[#10263D]/80 leading-relaxed">
                    Motos exigem cuidado rigoroso com o equilíbrio lateral e a compressão das bengalas dianteiras. Não transportamos motos deitadas ou apoiadas de forma precária.
                  </p>
                  
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#10263D]/80">
                    <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/60 space-y-1">
                      <span className="font-bold block text-[#10263D]">Suporte de roda dianteira:</span>
                      <span>Trava que mantém a motocicleta na vertical antes de passar as cintas catracadas.</span>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/60 space-y-1">
                      <span className="font-bold block text-[#10263D]">Proteção de carenagens:</span>
                      <span>Uso de fitas com alças macias nas mesas superiores para evitar arranhões.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handlePedirGuincho}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#10263D] text-[#F6F5F1] font-semibold text-xs hover:bg-[#18395c] transition-colors cursor-pointer"
                  >
                    <span>Consultar transporte de moto</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFC52D]" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* O que é avaliado antes de aceitar */}
          <div className="bg-[#10263D] text-[#F6F5F1] p-8 rounded-xl border border-white/10 space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFC52D]">
                Critérios Técnicos
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                O que avaliamos antes de confirmar a operação
              </h3>
              <p className="text-sm text-[#F6F5F1]/80 leading-relaxed">
                Para sua segurança e do veículo, não realizamos saídas automáticas sem antes validar estes quatro pontos fundamentais:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#F6F5F1]/80">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-1">
                <span className="font-bold text-[#FFC52D] block">1. Gabarito de Altura</span>
                <span>Verificação de pontes baixas, portais de garagem subterrânea e fios caídos na via.</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-1">
                <span className="font-bold text-[#FFC52D] block">2. Peso & Balanço</span>
                <span>Compatibilidade da capacidade de carga útil da plataforma com o porte do veículo.</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-1">
                <span className="font-bold text-[#FFC52D] block">3. Tipo de Tração</span>
                <span>Se o veículo possui tração 4x4 integral que não pode rodar com eixos no chão.</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-1">
                <span className="font-bold text-[#FFC52D] block">4. Acesso ao Local</span>
                <span>Avaliamos se a rua suporta o raio de giro e manobra de um caminhão plataforma de 8 a 9 metros.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Faixa Final */}
      <section className="bg-[#0B1A2A] py-12 border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-xl font-bold text-white">
            Tem dúvidas sobre o seu tipo de veículo?
          </h3>
          <p className="text-sm text-[#F6F5F1]/75">
            Explique os detalhes do automóvel e onde ele está parado para receber nossa orientação.
          </p>
          <button
            onClick={handlePedirGuincho}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FFC52D] text-[#10263D] font-bold text-sm hover:bg-[#f0b924] transition-colors cursor-pointer"
          >
            <span>Pedir guincho</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
