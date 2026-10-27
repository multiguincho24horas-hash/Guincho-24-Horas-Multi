import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ShieldCheck, ArrowLeft, CheckCircle2, Lock } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-[#10263D] text-[#F6F5F1]">
      
      {/* Cabeçalho */}
      <section className="border-b border-white/10 bg-[#0B1A2A] py-14 sm:py-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <button
            onClick={() => navigateTo('/')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#F6F5F1]/70 hover:text-[#FFC52D] transition-colors py-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a página inicial</span>
          </button>
          
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFC52D] uppercase tracking-wider block">
            <span>Transparência Institucional</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F6F5F1]">
            Política de Privacidade
          </h1>
          <p className="text-base text-[#F6F5F1]/80 max-w-2xl leading-relaxed">
            Informações claras sobre o tratamento de dados neste site institucional da Guincho 24 Horas Multi.
          </p>
        </div>
      </section>

      {/* Conteúdo com Seção Clara */}
      <section className="bg-[#F6F5F1] text-[#10263D] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="bg-white rounded-xl border border-[#10263D]/10 p-6 sm:p-10 shadow-sm space-y-8 text-sm leading-relaxed text-[#10263D]/80">
            
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#10263D] flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#10263D]" />
                1. Ausência de Formulários e de Coleta Automática
              </h2>
              <p>
                Este portal institucional foi desenvolvido com foco estritamente informativo. Ele <strong>não possui formulários de cadastro</strong>, não solicita dados sensíveis via navegador e não armazena registros pessoais em bancos de dados remotos.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#10263D] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#10263D]" />
                2. Sem Rastreadores ou Ferramentas de Analytics
              </h2>
              <p>
                Esta versão do site não utiliza ferramentas de rastreamento de navegação, cookies de publicidade direcionada, pixels de terceiros ou serviços como Google Analytics. Sua navegação é privada e técnica.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#10263D] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#10263D]" />
                3. Comunicação Direta via Telefone ou Aplicativo
              </h2>
              <p>
                Qualquer contato estabelecido entre você e a Guincho 24 Horas Multi ocorre diretamente através de ligações telefônicas ou mensagens em aplicativo externo (quando habilitado). As informações fornecidas durante a conversa (como modelo do veículo, ponto de partida e destino) são utilizadas única e exclusivamente para a avaliação de viabilidade técnica, cálculo de trajeto e execução do transporte veicular solicitado.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#10263D] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#10263D]" />
                4. Segurança e Integridade das Informações
              </h2>
              <p>
                Os detalhes sobre a localização de veículos e rotas são tratados com sigilo profissional necessário à prestação de serviços de socorro e logística veicular, não sendo repassados a empresas terceiras de publicidade ou telemarketing.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#10263D] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#10263D]" />
                5. Atualizações Desta Política
              </h2>
              <p>
                Caso novos canais interativos ou funcionalidades adicionais venham a ser incorporados no futuro, esta declaração será atualizada em conformidade com as diretrizes da Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </div>

          </div>

          <div className="text-center">
            <button
              onClick={() => navigateTo('/')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#10263D] text-[#F6F5F1] font-bold text-xs hover:bg-[#18395c] transition-colors cursor-pointer"
            >
              <span>Retornar à página principal</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
