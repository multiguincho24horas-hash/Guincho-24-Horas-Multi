import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
  Car,
  Wrench,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  FileText,
  Navigation,
  Compass,
  ArrowUpRight
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigateTo, handlePedirGuincho } = useNavigation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      q: 'O atendimento é realmente 24 horas?',
      a: 'O nome comercial da nossa marca é Guincho 24 Horas Multi. No entanto, por transparência e responsabilidade, esclarecemos que o atendimento depende da confirmação de operador em plantão no momento em que você entrar em contato. Não prometemos disponibilidade ininterrupta sem antes consultar nossa escala imediata.',
    },
    {
      q: 'Como é calculado o valor do transporte?',
      a: 'O valor é calculado com base na distância entre o ponto de partida e o destino final, na complexidade de acesso ao veículo (como subsolos ou valetas) e no tipo de automóvel ou motocicleta. Todas as condições financeiras são explicadas e combinadas com você antes de qualquer confirmação de saída.',
    },
    {
      q: 'Atendem veículos em subsolo de condomínios?',
      a: 'Caminhões guincho plataforma exigem uma altura mínima (gabarito) para adentrar garagens subterrâneas. Caso o veículo esteja travado em subsolo com teto baixo, avaliaremos a viabilidade técnica e indicaremos as orientações adequadas para manobra prévia.',
    },
    {
      q: 'Vocês atendem em qualquer cidade ou rodovia?',
      a: 'Não afirmamos cobertura nacional irrestrita. Cada chamada é analisada individualmente: verificamos a localização do veículo, as rodovias de acesso e o destino pretendido para confirmar se temos equipamento em rota viável no momento.',
    },
    {
      q: 'O que devo fazer se o câmbio travou ou as rodas não giram?',
      a: 'É fundamental nos avisar logo no primeiro contato. Carros com câmbio automático travado em "P", freio eletrônico bloqueado ou rodas amassadas podem requerer patins de deslizamento para não danificar a transmissão nem os pneus durante o embarque na plataforma.',
    },
    {
      q: 'Existe contrato prévio ou mensalidade para solicitar?',
      a: 'Não. Nosso atendimento é pontual e avulso. Você consulta a situação do seu veículo quando precisar, alinha as condições e decide se deseja prosseguir com a remoção.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#10263D] text-[#F6F5F1]">
      
      {/* =========================================================
          HERO SECTION
          ========================================================= */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden">
        {/* Foto de caminhão guincho plataforma transportando carro */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_tow_truck_highway_1793068211608.jpg"
            alt="Caminhão guincho plataforma transportando automóvel em rodovia asfaltada"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Scrim medido para contraste garantido com o texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#10263D] via-[#10263D]/90 to-[#10263D]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10263D] via-transparent to-black/30" />
        </div>

        {/* Linha sutil de demarcação de rodovia no topo */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[repeating-linear-gradient(90deg,#FFC52D_0,#FFC52D_24px,transparent_24px,transparent_44px)] opacity-40 z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Aviso visual honesto de imagem ilustrativa */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFC52D] tracking-wide uppercase">
              <span className="w-2 h-2 rounded-sm bg-[#FFC52D]" aria-hidden="true" />
              <span>Imagem ilustrativa · Atendimento sob consulta prévia</span>
            </div>

            {/* Título Principal Conforme Instruções */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F6F5F1] leading-[1.1] text-balance">
              Seu veículo precisa de ajuda.{' '}
              <span className="text-[#FFC52D] block sm:inline">Conte com a Multi.</span>
            </h1>

            {/* Subtítulo Complementar */}
            <p className="text-base sm:text-xl text-[#F6F5F1]/90 leading-relaxed max-w-2xl font-normal">
              Explique a situação, a origem e o destino para consultar as condições do atendimento.
            </p>

            {/* Ações do Hero */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handlePedirGuincho}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#FFC52D] text-[#10263D] font-bold text-base hover:bg-[#f0b924] active:bg-[#e0ab1d] transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              >
                <span>Pedir guincho</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <a
                href="#/como-funciona"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/como-funciona');
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-[#F6F5F1] font-semibold text-base transition-colors border border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC52D]"
              >
                <span>Como funciona</span>
                <ArrowRight className="w-4 h-4 text-[#FFC52D]" />
              </a>
            </div>

            {/* Aviso de responsabilidade técnica */}
            <div className="pt-2 text-xs text-[#F6F5F1]/70 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FFC52D] shrink-0" />
              <span>Sem cobrança oculta: valores e viabilidade alinhados diretamente com você.</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAIXA DE INFORMAÇÃO
          "Contato direto / Avaliação do veículo e acesso / Condições confirmadas na conversa"
          ========================================================= */}
      <section className="bg-[#0B1A2A] border-y border-white/10 relative z-20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 text-sm text-[#F6F5F1]/90">
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#FFC52D]/10 border border-[#FFC52D]/30 flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4 text-[#FFC52D]" />
              </div>
              <span className="font-semibold text-white tracking-wide">
                Contato direto
              </span>
            </div>

            <span className="hidden md:block text-[#FFC52D]/40 font-mono">/</span>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#FFC52D]/10 border border-[#FFC52D]/30 flex items-center justify-center shrink-0">
                <Car className="w-4 h-4 text-[#FFC52D]" />
              </div>
              <span className="font-semibold text-white tracking-wide">
                Avaliação do veículo e acesso
              </span>
            </div>

            <span className="hidden md:block text-[#FFC52D]/40 font-mono">/</span>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#FFC52D]/10 border border-[#FFC52D]/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#FFC52D]" />
              </div>
              <span className="font-semibold text-white tracking-wide">
                Condições confirmadas na conversa
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SITUAÇÕES PARA CONSULTAR DISPONIBILIDADE
          (Cards visuais com fotos automotivas pertinentes)
          ========================================================= */}
      <section className="bg-[#F6F5F1] text-[#10263D] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#10263D]/70 block">
              Atendimento Técnico
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#10263D]">
              Situações para consultar disponibilidade
            </h2>
            <p className="text-base text-[#10263D]/80 leading-relaxed">
              Apresentamos as principais modalidades de atendimento para que você consulte a viabilidade
              segundo o tipo de veículo, localização e equipamento disponível.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Remoção por pane mecânica ou elétrica */}
            <div className="bg-white rounded-xl border border-[#10263D]/10 overflow-hidden flex flex-col transition-all hover:border-[#10263D]/30 shadow-sm">
              <div className="aspect-[4/3] bg-neutral-200 overflow-hidden relative">
                <img
                  src="/src/assets/images/breakdown_recovery_scene_1793068211995.jpg"
                  alt="Plataforma de guincho posicionada em acostamento de rodovia"
                  className="w-full h-full object-cover transition-transform hover:scale-102 duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#10263D]/90 text-[#F6F5F1] text-[11px] font-semibold px-2.5 py-1 rounded">
                  Consulta de Viabilidade
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#10263D]">
                    Remoção por pane
                  </h3>
                  <p className="text-sm text-[#10263D]/75 leading-relaxed">
                    Falhas de bateria, alternador, motor superaquecido ou problemas de suspensão em vias urbanas ou rodovias.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#10263D]/10 text-xs text-[#10263D]/70 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10263D] shrink-0" />
                    <span>Avaliação se o câmbio destrava</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10263D] shrink-0" />
                    <span>Embarque seguro com guincho plataforma</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Transporte agendado entre oficinas */}
            <div className="bg-white rounded-xl border border-[#10263D]/10 overflow-hidden flex flex-col transition-all hover:border-[#10263D]/30 shadow-sm">
              <div className="aspect-[4/3] bg-neutral-200 overflow-hidden relative">
                <img
                  src="/src/assets/images/scheduled_transport_vehicle_1793068212412.jpg"
                  alt="Automóvel fixado por cintas industriais na prancha de caminhão guincho"
                  className="w-full h-full object-cover transition-transform hover:scale-102 duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#10263D]/90 text-[#F6F5F1] text-[11px] font-semibold px-2.5 py-1 rounded">
                  Alinhamento Prévio
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#10263D]">
                    Transporte agendado
                  </h3>
                  <p className="text-sm text-[#10263D]/75 leading-relaxed">
                    Deslocamento programado de automóveis entre residências, oficinas especializadas, funilarias ou pátios.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#10263D]/10 text-xs text-[#10263D]/70 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10263D] shrink-0" />
                    <span>Fixação técnica por 4 pontos nas rodas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10263D] shrink-0" />
                    <span>Data e horário combinados com antecedência</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Transporte de carro ou moto */}
            <div className="bg-white rounded-xl border border-[#10263D]/10 overflow-hidden flex flex-col transition-all hover:border-[#10263D]/30 shadow-sm">
              <div className="aspect-[4/3] bg-neutral-200 overflow-hidden relative">
                <img
                  src="/src/assets/images/motorcycle_transport_cradle_1793068212744.jpg"
                  alt="Motocicleta fixada com sistema de amarração em plataforma de transporte"
                  className="w-full h-full object-cover transition-transform hover:scale-102 duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#10263D]/90 text-[#F6F5F1] text-[11px] font-semibold px-2.5 py-1 rounded">
                  Cuidado Específico
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#10263D]">
                    Transporte de carro ou moto
                  </h3>
                  <p className="text-sm text-[#10263D]/75 leading-relaxed">
                    Carros de passeio, SUVs leves e motos com necessidade de ancoragem correta e proteção contra tombamento.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#10263D]/10 text-xs text-[#10263D]/70 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10263D] shrink-0" />
                    <span>Cintas catracadas de alta tenacidade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10263D] shrink-0" />
                    <span>Acomodação estável na plataforma</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center pt-2">
            <button
              onClick={handlePedirGuincho}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#10263D] text-[#F6F5F1] font-bold text-sm hover:bg-[#1a3858] transition-colors cursor-pointer"
            >
              <span>Consultar condições para seu caso</span>
              <ArrowRight className="w-4 h-4 text-[#FFC52D]" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          SEÇÃO DE 3 PASSOS: COMO FUNCIONA
          ========================================================= */}
      <section className="bg-[#10263D] py-16 sm:py-24 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFC52D] block">
              Passo a Passo
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F6F5F1]">
              Três etapas claras antes de qualquer saída
            </h2>
            <p className="text-base text-[#F6F5F1]/80 leading-relaxed">
              Trabalhamos sem surpresas. O processo foi desenhado para garantir que o equipamento correto seja enviado com todas as condições acertadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Passo 1 */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4 relative">
              <div className="text-2xl font-black text-[#FFC52D] font-mono">
                01.
              </div>
              <h3 className="text-lg font-bold text-white">
                Explique o ocorrido e a rota
              </h3>
              <p className="text-sm text-[#F6F5F1]/75 leading-relaxed">
                Informe o modelo do seu veículo, o local exato onde ele se encontra (rua, rodovia ou estacionamento) e para onde precisa ser levado.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4 relative">
              <div className="text-2xl font-black text-[#FFC52D] font-mono">
                02.
              </div>
              <h3 className="text-lg font-bold text-white">
                Avaliação de equipamento e acesso
              </h3>
              <p className="text-sm text-[#F6F5F1]/75 leading-relaxed">
                Avaliamos se a plataforma tem capacidade para o peso e dimensões do veículo e se o acesso ao local é viável sem restrições.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4 relative">
              <div className="text-2xl font-black text-[#FFC52D] font-mono">
                03.
              </div>
              <h3 className="text-lg font-bold text-white">
                Confirmação mútua de condições
              </h3>
              <p className="text-sm text-[#F6F5F1]/75 leading-relaxed">
                Valor do deslocamento, forma de pagamento e previsão são alinhados diretamente na conversa antes da partida do guincho.
              </p>
            </div>

          </div>

          <div className="p-4 rounded-lg bg-[#0B1A2A] border border-white/10 flex items-center justify-between flex-wrap gap-4 text-xs text-[#F6F5F1]/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FFC52D] shrink-0" />
              <span>Sem cobranças surpresa ao término da viagem: o alinhamento é feito antecipadamente.</span>
            </div>
            <a
              href="#/como-funciona"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/como-funciona');
              }}
              className="text-[#FFC52D] hover:underline font-semibold"
            >
              Ver detalhes de segurança no acostamento →
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================
          SEÇÃO DE COBERTURA: CONSULTE SUA REGIÃO
          ========================================================= */}
      <section className="bg-[#F6F5F1] text-[#10263D] py-16 sm:py-20 border-t border-[#10263D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#10263D]/70 block">
                Localização & Rotas
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#10263D]">
                Consulte sua região
              </h2>
              <p className="text-base text-[#10263D]/80 leading-relaxed">
                A viabilidade de atendimento é confirmada sob consulta. Não divulgamos cobertura nacional irrestrita porque cada rota exige compatibilidade com os pontos de apoio e as características da rodovia ou perímetro urbano.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-lg bg-white border border-[#10263D]/10 space-y-1">
                  <span className="font-bold text-sm text-[#10263D] flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-[#10263D]" />
                    Ponto de Coleta
                  </span>
                  <p className="text-xs text-[#10263D]/70">
                    Avaliamos se é via expressa, rua residencial ou condomínio com cancela.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-white border border-[#10263D]/10 space-y-1">
                  <span className="font-bold text-sm text-[#10263D] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#10263D]" />
                    Destino Final
                  </span>
                  <p className="text-xs text-[#10263D]/70">
                    Verificamos o percurso, pedágios quando aplicáveis e o horário de descarregamento.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-[#10263D]/10 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-[#10263D]">
                Deseja checar a viabilidade agora?
              </h3>
              <p className="text-sm text-[#10263D]/75 leading-relaxed">
                Tenha em mãos os nomes dos bairros ou referências do local de parada e do endereço de entrega.
              </p>
              <button
                onClick={handlePedirGuincho}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#FFC52D] text-[#10263D] font-bold text-sm hover:bg-[#f0b924] transition-colors cursor-pointer"
              >
                <span>Consultar viabilidade de rota</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-[#10263D]/60 text-center">
                Sem compromisso prévio até confirmação bilateral.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          BLOCO DE ORIENTAÇÃO DO PEDIDO
          (O que o usuário deve conferir antes de pedir)
          ========================================================= */}
      <section className="bg-[#10263D] py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFC52D] block">
              Preparação
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F6F5F1]">
              O que informar ao solicitar o guincho
            </h2>
            <p className="text-sm text-[#F6F5F1]/80 leading-relaxed">
              Para que possamos informar a viabilidade e o valor correto logo no primeiro contato, confira estes itens:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded bg-[#FFC52D]/10 flex items-center justify-center text-[#FFC52D]">
                <Car className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-white">1. Modelo do veículo</h4>
              <p className="text-xs text-[#F6F5F1]/70 leading-relaxed">
                Marca, modelo aproximado e ano (ex.: sedan médio, SUV compacto ou moto de alta cilindrada).
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/5 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded bg-[#FFC52D]/10 flex items-center justify-center text-[#FFC52D]">
                <Wrench className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-white">2. Condição de rodagem</h4>
              <p className="text-xs text-[#F6F5F1]/70 leading-relaxed">
                As 4 rodas giram livremente? O volante esterça? O câmbio entra em ponto morto (N)?
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/5 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded bg-[#FFC52D]/10 flex items-center justify-center text-[#FFC52D]">
                <MapPin className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-white">3. Local exato de parada</h4>
              <p className="text-xs text-[#F6F5F1]/70 leading-relaxed">
                Endereço completo ou km de rodovia com sentido (capital ou interior) e ponto de referência.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/5 border border-white/10 space-y-2">
              <div className="w-8 h-8 rounded bg-[#FFC52D]/10 flex items-center justify-center text-[#FFC52D]">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-white">4. Obstáculos de acesso</h4>
              <p className="text-xs text-[#F6F5F1]/70 leading-relaxed">
                Existe teto baixo (subsolo), valeta profunda, rua de terra íngreme ou portão estreito?
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ: PERGUNTAS FREQUENTES (ACORDEÕES FUNCIONAIS)
          ========================================================= */}
      <section className="bg-[#0B1A2A] py-16 sm:py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-3 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFC52D] block">
              Dúvidas Frequentes
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#F6F5F1]">
              Perguntas e respostas honestas
            </h2>
            <p className="text-sm text-[#F6F5F1]/75 max-w-xl mx-auto">
              Respondemos às questões mais comuns com clareza para que você saiba exatamente o que esperar.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-lg border border-white/10 bg-white/5 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left text-base font-semibold text-white hover:text-[#FFC52D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC52D] cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#FFC52D] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#F6F5F1]/60 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[#F6F5F1]/80 leading-relaxed border-t border-white/5">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          CHAMADA FINAL (CTA)
          ========================================================= */}
      <section className="bg-[#10263D] py-16 sm:py-20 border-t border-white/10 relative overflow-hidden">
        {/* Detalhe de sinalização rodoviária ao fundo */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FFC52D_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFC52D]">
            Pronto para consultar?
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F6F5F1] tracking-tight max-w-2xl mx-auto">
            Precisou de guincho? Vamos analisar sua situação agora.
          </h2>

          <p className="text-sm sm:text-base text-[#F6F5F1]/80 max-w-xl mx-auto leading-relaxed">
            Informe o ponto de coleta, as condições do automóvel e o destino para consultar os detalhes do atendimento.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handlePedirGuincho}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#FFC52D] text-[#10263D] font-bold text-base hover:bg-[#f0b924] shadow-md transition-colors cursor-pointer"
            >
              <span>Pedir guincho</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <a
              href="#/contato"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/contato');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-colors border border-white/10"
            >
              <span>Ver informações de contato</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
