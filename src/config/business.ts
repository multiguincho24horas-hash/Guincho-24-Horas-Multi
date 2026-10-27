/**
 * Configuração centralizada da GUINCHO 24 HORAS MULTI
 *
 * Dados comerciais mantidos como nulos/pendentes até fornecimento oficial.
 * Não inventar números de telefone, endereços fictícios ou dados de terceiros.
 */

export interface BusinessConfig {
  brandName: string;
  brandShort: string;
  brandSubtitle: string;
  phone: string | null;
  whatsapp: string | null;
  city: string | null;
  state: string | null;
  coverageNotice: string;
  hoursNotice: string;
}

// Configuração padrão: canais em preparação
export const defaultBusinessConfig: BusinessConfig = {
  brandName: 'GUINCHO 24 HORAS MULTI',
  brandShort: 'MULTI',
  brandSubtitle: 'Guincho 24 Horas',
  // Dados pendentes conforme instruções
  phone: null,
  whatsapp: null,
  city: null,
  state: null,
  coverageNotice: 'Atendimento sob consulta prévia de disponibilidade por trajeto e tipo de veículo.',
  hoursNotice: 'O nome comercial inclui 24 Horas; a disponibilidade de cada atendimento é alinhada diretamente no contato inicial.',
};

/**
 * Hook ou helper para verificar o estado dos dados comerciais
 */
export function isCommercialDataReady(config: BusinessConfig = defaultBusinessConfig): boolean {
  return Boolean(config.phone || config.whatsapp);
}
