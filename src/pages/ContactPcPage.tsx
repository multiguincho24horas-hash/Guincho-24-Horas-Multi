import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Phone, CheckCircle2, ShieldCheck, MapPin, ArrowLeft } from 'lucide-react';

export const ContactPcPage: React.FC = () => {
  const { businessConfig, navigateTo } = useNavigation();

  const isPhoneConfigured = Boolean(businessConfig.phone);

  return (
    <div className="min-h-screen bg-[#10263D] text-[#F6F5F1] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Botão de retorno discreto */}
        <div>
          <button
            onClick={() => navigateTo('/')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#F6F5F1]/70 hover:text-[#FFC52D] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFC52D] rounded py-1 px-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a página inicial</span>
          </button>
        </div>

        {/* Bloco Central Desktop */}
        <div className="bg-[#0B1A2A] rounded-2xl border border-white/15 p-8 sm:p-14 shadow-xl text-center space-y-8 relative overflow-hidden">
          
          {/* Detalhe de sinalização rodoviária no topo do cartão */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FFC52D]" />

          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFC52D] block">
              Atendimento Telefônico Direto
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Central de Atendimento MULTI
            </h1>
            <p className="text-sm text-[#F6F5F1]/80 leading-relaxed">
              Para solicitar guincho a partir do computador, ligue para o número abaixo a partir do seu telefone celular ou aparelho fixo.
            </p>
          </div>

          {/* ÁREA DO NÚMERO GRANDE (SEM BOTÃO DE COPIAR E SEM BOTÃO WHATSAPP) */}
          <div className="py-8 px-4 rounded-xl bg-black/30 border border-white/10 max-w-2xl mx-auto">
            {isPhoneConfigured ? (
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F6F5F1]/60 block">
                  Número para ligação direta:
                </span>
                {/* Exibição em destaque sem botão de cópia e sem botão WhatsApp */}
                <div className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono tracking-wider text-[#FFC52D] select-all py-2">
                  {businessConfig.phone}
                </div>
                <p className="text-xs text-[#F6F5F1]/60">
                  Ligue agora informando a localização exata do veículo.
                </p>
              </div>
            ) : (
              <div className="space-y-3 py-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FFC52D] block">
                  Linha de Atendimento em Homologação
                </span>
                <div className="text-xl sm:text-2xl font-bold text-white">
                  Canal Telefônico em Preparação
                </div>
                <p className="text-xs text-[#F6F5F1]/70 max-w-md mx-auto leading-relaxed">
                  O número oficial será exibido em destaque nesta área assim que a linha direta de plantão for ativada pelo operador.
                </p>
              </div>
            )}
          </div>

          {/* O que informar na ligação */}
          <div className="text-left bg-white/5 rounded-xl border border-white/10 p-6 max-w-2xl mx-auto space-y-4">
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FFC52D]" />
              Tenha estas informações prontas para informar ao atendente:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#F6F5F1]/80">
              <div className="p-2.5 rounded bg-black/20 border border-white/5">
                <span className="font-semibold text-white block">1. Local exato</span>
                <span>Rua, número ou km de rodovia com sentido de tráfego.</span>
              </div>
              <div className="p-2.5 rounded bg-black/20 border border-white/5">
                <span className="font-semibold text-white block">2. Tipo de veículo</span>
                <span>Modelo, ano e condição das rodas (se giram livremente).</span>
              </div>
              <div className="p-2.5 rounded bg-black/20 border border-white/5">
                <span className="font-semibold text-white block">3. Destino pretendido</span>
                <span>Endereço completo ou bairro da oficina/garagem.</span>
              </div>
              <div className="p-2.5 rounded bg-black/20 border border-white/5">
                <span className="font-semibold text-white block">4. Condições de acesso</span>
                <span>Se está no nível da rua ou em subsolo/garagem baixa.</span>
              </div>
            </div>
          </div>

          {/* Garantia de Alinhamento */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#F6F5F1]/70">
            <ShieldCheck className="w-4 h-4 text-[#FFC52D]" />
            <span>Valores e previsão de chegada são confirmados durante a ligação antes de qualquer deslocamento.</span>
          </div>

        </div>

      </div>
    </div>
  );
};
