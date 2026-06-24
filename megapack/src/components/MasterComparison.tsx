import React from 'react';
import { Section } from './ui/Section';
import { Check, X } from 'lucide-react';
const comparison = [{
  sit: 'Tu directora pide otro formato de planificación',
  sin: 'Rehacés todo desde cero',
  con: 'Plantilla universal. 15 minutos.'
}, {
  sit: 'Hay un accidente en la sala',
  sin: 'No sabés exactamente qué escribir',
  con: 'Protocolo y acta modelo. Lista.'
}, {
  sit: 'Sospechás vulneración de derechos',
  sin: 'No sabés cómo actuar legalmente',
  con: 'Ruta crítica paso a paso.'
}, {
  sit: 'Una familia te cuestiona o amenaza',
  sin: 'Reaccionás en caliente',
  con: 'Protocolo y frases modelo. Calma total.'
}, {
  sit: 'La inspectora revisa tu carpeta',
  sin: 'Inseguridad sobre lo que tiene que tener',
  con: 'Carpeta infalible checklist.'
}, {
  sit: 'Necesitás fundamentar tu propuesta',
  sin: 'Copiás sin poder defenderla',
  con: 'Fórmula de 3 oraciones. Siempre.'
}];
const includes = ['Marco normativo argentino 2026 (lo que la ley dice y lo que tenés que saber)', 'Plantillas universales de planificación adaptables a cualquier institución', 'Protocolo de accidentes físicos con acta modelo incluida', 'Protocolo de sospecha de vulneración de derechos (Ruta crítica)', 'Protocolo de mordeduras y golpes entre niños con guion para familias', 'Protocolo ante cuestionamiento o amenaza de denuncia familiar', 'Banco de terminología técnica pedagógica 2026', 'Diccionario de sinónimos profesionales para informes', 'Carpeta didáctica infalible con checklist de inspección', 'Modelos de actas de reunión, autorización de imagen y constancias'];
export const MasterComparison: React.FC = () => {
  return <Section className="bg-brand-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
          🕊️ ¿QUÉ AGREGA EL MÁSTER DE PERSONALIZACIÓN DOCENTE?
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden mb-16 rounded-2xl border border-brand-card-border">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-card border-b border-brand-card-border">
                <th className="p-6 font-bold text-white w-1/3">
                  Situación en la sala
                </th>
                <th className="p-6 font-bold text-red-400 w-1/3">
                  ❌ Sin Máster
                </th>
                <th className="p-6 font-bold text-brand-green w-1/3">
                  ✅ Con Máster
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => <tr key={i} className="border-b border-brand-card-border/50 hover:bg-brand-card/50 transition-colors">
                  <td className="p-6 text-gray-300 font-medium">{row.sit}</td>
                  <td className="p-6 text-gray-400">{row.sin}</td>
                  <td className="p-6 text-white font-bold">{row.con}</td>
                </tr>)}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-4 mb-12">
          {comparison.map((row, i) => <div key={i} className="bg-brand-card border border-brand-card-border rounded-2xl p-5">
              <p className="font-bold text-white mb-4">{row.sit}</p>
              <div className="flex items-start gap-3 mb-3">
                <X size={18} strokeWidth={3} className="text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-bold text-red-400 uppercase tracking-wide mb-0.5">
                    Sin Máster
                  </span>
                  <span className="text-gray-400 text-sm">{row.sin}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={18} strokeWidth={3} className="text-brand-green shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-bold text-brand-green uppercase tracking-wide mb-0.5">
                    Con Máster
                  </span>
                  <span className="text-white text-sm font-semibold">
                    {row.con}
                  </span>
                </div>
              </div>
            </div>)}
        </div>

        <div className="bg-brand-card border border-brand-green/30 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-black text-brand-green mb-8 flex items-center gap-3">
            <Check size={28} strokeWidth={3} /> EL MÁSTER INCLUYE:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includes.map((item, i) => <div key={i} className="flex items-start gap-3">
                <div className="mt-1 bg-brand-green/20 p-1 rounded-full text-brand-green shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-gray-200 font-medium text-sm md:text-base">
                  {item}
                </span>
              </div>)}
          </div>
        </div>
      </div>
    </Section>;
};