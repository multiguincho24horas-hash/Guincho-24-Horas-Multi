import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  Phone,
  MessageCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { businessConfig, navigateTo, handlePedirGuincho } = useNavigation();

  const isDataConfigured = Boolean(businessConfig.phone || businessConfig.whatsapp);

  return (
    <div className="min-h-screen bg-[#10263D] text-[#F6F5F1]">
      
      {/* Cabeçalho */}
      <section className="border-b border-white/10 bg-[#0B1A2A] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFC52D] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-sm bg-[#FFC52D]" aria-hidden="true" />
            <span>Canais de Atendimento</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F6F5F1]">
            Contato & Solicitação
          </h1>
          <p className="text-base sm:text-lg text-[#F6F5F1]/80 max-w-3xl leading-relaxed">
            Consulte a disponibilidade de guincho e transporte informando as condições do seu veículo, o local de coleta e o destino pretendido.
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="bg-[#F6F5F1] text-[#10263D] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {!isDataConfigured ? (
            /* CANAL EM PREPARAÇÃO (QUANDO TELEFONE/WHATSAPP NULOS) */
            <div className="max-w-3xl mx-auto bg-white rounded-xl border border-[#10263D]/15 p-6 sm:p-10 shadow-sm space-y-8">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#10263D] text-[#FFC52D] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="inline-block text-xs font-bold uppercase tracking-wider bg-[#FFC52D] text-[#10263D] px-2.5 py-0.5 rounded">
                    Status Oficial
                  </div>
                  <h2 className="text-2xl font-bold text-[#10263D]">
                    Canal de atendimento em preparação
                  </h2>
                  <p className="text-sm text-[#10263D]/75 leading-relaxed pt-1">
                    Os números oficiais de atendimento da Guincho 24 Horas Multi estão em fase de homologação e ativação técnica da central.
                  </p>
                </div>
              </div>

              {/* Orientações úteis do que ter pronto */}
              <div className="p-5 rounded-lg bg-neutral-50 border border-neutral-200 space-y-3">
                <h3 className="font-bold text-sm text-[#10263D] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#10263D]" />
                  O que você deve ter em mãos para agilizar seu atendimento:
                </h3>
                <ul className="space-y-2 text-xs text-[#10263D]/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10263D] shrink-0 mt-0.5" />
                    <span><strong>Local exato da parada:</strong> nome da rua, número aproximado, rodovia e km, sentido da pista e referências visuais.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10263D] shrink-0 mt-0.5" />
                    <span><strong>Dados do veículo:</strong> marca, modelo, ano e se possui tração 4x4 ou câmbio automático travado.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10263D] shrink-0 mt-0.5" />
                    <span><strong>Endereço de destino:</strong> oficina, residência ou pátio onde o carro ou moto será descarregado.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10263D] shrink-0 mt-0.5" />
                    <span><strong>Condições de acesso:</strong> avisar caso o carro esteja em subsolo, valeta, rua de terra íngreme ou garagem estreita.</span>
                  </li>
                </ul>
              </div>

            </div>
          ) : (
            /* QUANDO CONFIGURADO COM TELEFONE/WHATSAPP REAIS */
            <div className="max-w-3xl mx-auto bg-white rounded-xl border border-[#10263D]/15 p-6 sm:p-10 shadow-sm space-y-8">
              
              <div className="border-b border-neutral-200 pb-5 space-y-1">
                <div className="inline-block text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded">
                  Canais Oficiais
                </div>
                <h2 className="text-2xl font-bold text-[#10263D]">
                  Fale com o Atendimento Multi
                </h2>
                <p className="text-sm text-[#10263D]/75">
                  Escolha o canal de sua preferência para consultar o deslocamento.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Opção WhatsApp */}
                <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#10263D]">WhatsApp</h3>
                    <p className="text-xs text-neutral-600 mt-1">
                      Envie mensagens, fotos da situação do veículo e localização em tempo real.
                    </p>
                  </div>
                  <button
                    onClick={handlePedirGuincho}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white font-bold text-xs hover:bg-[#20b858] transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Iniciar conversa no WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Opção Telefone / Desktop */}
                <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[#10263D]/10 text-[#10263D] flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#10263D]">Ligação Telefônica</h3>
                    <p className="text-xs text-neutral-600 mt-1">
                      Linha direta para urgências e explicação de rota por voz.
                    </p>
                  </div>
                  <a
                    href="#/contatopc"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo('/contatopc');
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#10263D] text-[#F6F5F1] font-bold text-xs hover:bg-[#18395c] transition-colors shadow-sm"
                  >
                    <span>Ver tela para computador</span>
                    <ArrowRight className="w-4 h-4 text-[#FFC52D]" />
                  </a>
                </div>

              </div>

            </div>
          )}

          {/* Dicas Rápidas de Segurança */}
          <div className="max-w-3xl mx-auto p-5 rounded-lg bg-[#10263D] text-[#F6F5F1] flex items-center justify-between flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#FFC52D] shrink-0" />
              <span>Está em rodovia? Mantenha o triângulo posicionado e aguarde fora da pista.</span>
            </div>
            <a
              href="#/como-funciona"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/como-funciona');
              }}
              className="text-[#FFC52D] hover:underline font-semibold"
            >
              Ver guia de segurança →
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
