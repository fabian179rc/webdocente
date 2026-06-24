import React from 'react';
import { Section } from './ui/Section';
const costs = [{
  sin: '3 horas de planificación × 40 semanas',
  real: '120 horas de tu vida por año'
}, {
  sin: 'Informes sin banco de frases',
  real: 'Domingos de diciembre frente a la hoja en blanco'
}, {
  sin: 'Material de efemérides buscado en Google',
  real: 'Actos improvisados sin coherencia pedagógica'
}, {
  sin: 'Sala sin recursos visuales pensados',
  real: 'Caos diario que vos tenés que resolver en el momento'
}, {
  sin: 'Protocolos de crisis inexistentes',
  real: 'Pánico cuando algo sale mal'
}, {
  sin: 'El mismo ciclo el próximo año',
  real: 'El agotamiento que ya conocés'
}];
export const CostOfInaction: React.FC = () => {
  return <Section className="bg-brand-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
          ⚖️ ¿CUÁNTO CUESTA NO TENERLO?
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden mb-12 rounded-2xl border border-brand-card-border">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-card border-b border-brand-card-border">
                <th className="p-6 font-bold text-gray-400 w-1/2">
                  Sin Megapack
                </th>
                <th className="p-6 font-bold text-white w-1/2">Costo real</th>
              </tr>
            </thead>
            <tbody>
              {costs.map((row, i) => <tr key={i} className="border-b border-brand-card-border/50 hover:bg-brand-card/50 transition-colors">
                  <td className="p-6 text-gray-400">{row.sin}</td>
                  <td className="p-6 text-red-400 font-bold">{row.real}</td>
                </tr>)}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-4 mb-12">
          {costs.map((row, i) => <div key={i} className="bg-brand-card border border-brand-card-border rounded-2xl p-5">
              <div className="mb-3">
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">
                  Sin Megapack
                </span>
                <span className="text-gray-300 text-sm">{row.sin}</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-white uppercase tracking-wide mb-0.5">
                  Costo real
                </span>
                <span className="text-red-400 text-sm font-bold">
                  {row.real}
                </span>
              </div>
            </div>)}
        </div>

        <div className="text-center text-xl md:text-2xl font-bold text-white space-y-2">
          <p>El próximo domingo puede ser diferente.</p>
          <p className="text-brand-green">
            "El año que viene podés empezar con todo listo desde el primer día."
          </p>
        </div>
      </div>
    </Section>;
};