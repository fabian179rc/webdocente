import React from 'react';
import { Section } from './ui/Section';
import { ShieldCheck } from 'lucide-react';
export const Guarantee: React.FC = () => {
  return <Section className="bg-brand-card/50 border-y border-brand-card-border">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-green/10 text-brand-green mb-8">
          <ShieldCheck size={48} strokeWidth={1.5} />
        </div>

        <h2 className="text-3xl md:text-5xl font-black mb-6">
          🛡️ GARANTÍA 7 DÍAS — SIN PREGUNTAS
        </h2>

        <div className="text-xl md:text-2xl text-gray-300 font-medium space-y-2 mb-8">
          <p>Abrís los tomos. Los usás en el aula.</p>
          <p>Si en 7 días no es lo que esperabas:</p>
          <p className="text-brand-green font-black text-3xl md:text-4xl py-4">
            devolución del 100%
          </p>
          <p>sin formularios, sin drama.</p>
        </div>

        <p className="text-gray-500 font-semibold">
          Tasa de devoluciones: menos del 1%.
        </p>
      </div>
    </Section>;
};