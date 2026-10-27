import React from 'react';

interface RoadSignSymbolProps {
  className?: string;
  size?: number;
}

/**
 * Símbolo tipográfico exclusivo da MULTI:
 * Combina linhas de convergência de rodovia (pista) com a silhueta estilizada de um gancho de reboque técnico.
 */
export const RoadSignSymbol: React.FC<RoadSignSymbolProps> = ({ className = 'w-7 h-7', size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Base de sinalização com cantos técnicos */}
      <rect x="2" y="2" width="28" height="28" rx="6" fill="#10263D" stroke="#FFC52D" strokeWidth="2" />
      
      {/* Pista convergente em perspectiva rodoviária */}
      <path
        d="M8 26L13 14M24 26L19 14"
        stroke="#F6F5F1"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Faixa tracejada central de sinalização viária */}
      <line x1="16" y1="26" x2="16" y2="21" stroke="#FFC52D" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="18" x2="16" y2="15" stroke="#FFC52D" strokeWidth="2" strokeLinecap="round" />

      {/* Gancho estilizado de precisão no topo */}
      <path
        d="M16 7V12C16 13.5 17.5 14 19 13C20.5 12 21 10.5 20 9"
        stroke="#FFC52D"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
