import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  PhoneCall,
  Clock,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  const { handlePedirGuincho } = useNavigation();

  return (
    <div className="min-h-screen bg-[#10263D] text-[#F6F5F1]">
      
      {/* Header */}
      <section className="border-b border-white/10 bg-[#0B1A2A] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFC52D] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-sm bg-[#FFC52D]" aria-hidden="true" />
            <span>Processo & Segurança Rodoviária</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F6F5F1]">
            Como Funciona o Atendimento Multi
          </h1>
          <p className="text-base sm:text-lg text-[#F6F5F1]/80 max-w-3xl leading-relaxed">
            Desde o seu primeiro contato até a entrega do veículo no destino, conheça cada fase do procedimento e as orientações fundamentais de segurança enquanto aguarda o guincho.
          </p>
        </div>
      </section>

      {/* Seção Clara: As Três Fases Detalhadas */}
      <section className="bg-[#F6F5F1] text-[#10263D] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#10263D]/70 block">
              Da Chamada ao Destino
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#10263D]">
              O fluxo de atendimento em 3 etapas
            </h2>
            <p className="text-sm text-[#10263D]/80">
              Processo padronizado para evitar desencontros e imprevistos na rodovia.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Etapa 1 */}
            <div className="bg-white rounded-xl border border-[#10263D]/10 p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2">
                <span className="text-4xl font-black text-[#10263D] font-mono block">01</span>
                <span className="text-xs font-bold text-[#FFC52D] bg-[#10263D] px-2 py-0.5 rounded inline-block mt-1">
                  Contato Inicial
                </span>
              </div>
              <div className="md:col-span-10 space-y-3">
                <h3 className="text-xl font-bold text-[#10263D]">
                  Você explica a situação, origem e destino
                </h3>
                <p className="text-sm text-[#10263D]/80 leading-relaxed">
                  Você nos detalha o modelo do automóvel ou moto, o que aconteceu (se é pane, pneu estourado, embreagem ou transporte programado) e onde exatamente o veículo está. Se houver restrições no local — como teto baixo de garagem ou terreno de terra —, informe-nos neste momento.
                </p>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/80 text-xs text-[#10263D]/75">
                  <span className="font-semibold text-[#10263D]">Dica importante:</span> Compartilhe um ponto de referência confiável (posto de combustível, passarela, placa quilométrica ou cruzamento).
                </div>
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="bg-white rounded-xl border border-[#10263D]/10 p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2">
                <span className="text-4xl font-black text-[#10263D] font-mono block">02</span>
                <span className="text-xs font-bold text-[#FFC52D] bg-[#10263D] px-2 py-0.5 rounded inline-block mt-1">
                  Avaliação Técnica
                </span>
              </div>
              <div className="md:col-span-10 space-y-3">
                <h3 className="text-xl font-bold text-[#10263D]">
                  Verificação de equipamento e viabilidade
                </h3>
                <p className="text-sm text-[#10263D]/80 leading-relaxed">
                  Nossa equipe confere se a plataforma disponível tem capacidade para o peso do veículo e se o guincho conseguirá manobrar no local de coleta e entrega. Informamos a estimativa de tempo e as condições de trânsito em rota.
                </p>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/80 text-xs text-[#10263D]/75">
                  <span className="font-semibold text-[#10263D]">Transparência:</span> Caso o caminhão não seja compatível com a sua garagem ou peso, avisamos prontamente com orientação adequada.
                </div>
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="bg-white rounded-xl border border-[#10263D]/10 p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2">
                <span className="text-4xl font-black text-[#10263D] font-mono block">03</span>
                <span className="text-xs font-bold text-[#FFC52D] bg-[#10263D] px-2 py-0.5 rounded inline-block mt-1">
                  Confirmação Mútua
                </span>
              </div>
              <div className="md:col-span-10 space-y-3">
                <h3 className="text-xl font-bold text-[#10263D]">
                  Alinhamento do valor e saída do guincho
                </h3>
                <p className="text-sm text-[#10263D]/80 leading-relaxed">
                  O valor do serviço, pedágios quando aplicáveis e a forma de pagamento são alinhados diretamente na conversa. Somente após a sua aprovação explícita o guincho se desloca até o local.
                </p>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/80 text-xs text-[#10263D]/75">
                  <span className="font-semibold text-[#10263D]">Garantia:</span> Sem cobranças surpresa ou acréscimos indevidos ao final do trajeto.
                </div>
              </div>
            </div>

          </div>

          {/* Cartão de Segurança em Acostamento */}
          <div className="bg-[#10263D] text-[#F6F5F1] p-8 rounded-xl border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FFC52D] text-[#10263D] flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Instruções de segurança enquanto você aguarda
                </h3>
                <p className="text-xs text-[#FFC52D]">
                  Sua vida vale mais do que qualquer veículo. Siga estas recomendações:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#F6F5F1]/80 leading-relaxed">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-2">
                <span className="font-bold text-white text-sm block">1. Fique fora da pista</span>
                <p>
                  Nunca permaneça dentro do carro nem entre o veículo e a rodovia. Espere sempre atrás da defensa metálica (guard-rail) ou no ponto mais alto do acostamento.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-2">
                <span className="font-bold text-white text-sm block">2. Posicione o triângulo</span>
                <p>
                  Ligue o pisca-alerta e coloque o triângulo de sinalização a uma distância segura (pelo menos 30 passos longos para vias de 60 km/h e 80 a 100 passos em rodovias).
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-2">
                <span className="font-bold text-white text-sm block">3. Mantenha bateria no celular</span>
                <p>
                  Evite usar aplicativos pesados enquanto aguarda para que nossa equipe consiga se comunicar facilmente quando estiver se aproximando do local.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={handlePedirGuincho}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#FFC52D] text-[#10263D] font-bold text-sm hover:bg-[#f0b924] shadow cursor-pointer transition-colors"
            >
              <span>Pedir guincho</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
