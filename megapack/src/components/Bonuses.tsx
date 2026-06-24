import React from 'react';
import { Section } from './ui/Section';
const bonos = [{
  num: '01',
  title: 'BONO 1 — Kit de Emergencia Docente',
  desc: '30 actividades salvavidas para días caóticos. Sin preparación. Sin materiales complicados.',
  price: '$3.400'
}, {
  num: '02',
  title: 'BONO 2 — Banco de Canciones y Transiciones',
  desc: 'Canciones y frases para organizar toda la jornada sin gritar ni improvisar.',
  price: '$3.400'
}, {
  num: '03',
  title: 'BONO 3 — Checklist Anual de Sala Lista',
  desc: 'Todo lo que no te puede faltar. Checklists por etapa, rutina y momento del año.',
  price: '$3.400'
}, {
  num: '04',
  title: 'BONO 4 — 50 Ideas de Recursos Visuales',
  desc: 'Transformá tu sala en un ambiente que enseña solo. Ideas concretas y aplicables.',
  price: '$3.400'
}, {
  num: '05',
  title: 'BONO 5 — Comunicaciones Sin Estrés',
  desc: 'Notas y guiones de reuniones listos para copiar y adaptar. Nunca más en blanco.',
  price: '$3.400'
}, {
  num: '06',
  title: 'BONO 6 — Plan Express de Implementación',
  desc: 'Tu hoja de ruta clara para empezar desde hoy sin sentirte desbordada.',
  price: '$3.400'
}];
export const Bonuses: React.FC = () => {
  return <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          🎁 6 BONOS ESTRATÉGICOS
        </h2>
        <p className="text-2xl font-bold text-brand-green">SIEMPRE INCLUIDOS</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {bonos.map((bono, i) => <div key={i} className="bg-gradient-to-br from-brand-card to-brand-dark border border-brand-green/30 p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-brand-green transition-colors">
            <div className="absolute -right-6 -top-6 text-9xl font-black text-brand-green/5 group-hover:text-brand-green/10 transition-colors pointer-events-none">
              {bono.num}
            </div>

            <div className="flex justify-between items-start mb-4 relative z-10">
              <h3 className="text-xl font-bold text-white pr-4">
                {bono.title}
              </h3>
              <div className="flex flex-col items-end shrink-0">
                <span className="text-gray-500 line-through text-sm">
                  {bono.price}
                </span>
                <span className="bg-brand-green text-black font-black text-xs px-2 py-1 rounded uppercase tracking-wider">
                  GRATIS
                </span>
              </div>
            </div>

            <p className="text-gray-400 relative z-10">{bono.desc}</p>
          </div>)}
      </div>

      <div className="text-center bg-brand-green/10 border border-brand-green/30 rounded-2xl p-6 max-w-2xl mx-auto">
        <p className="text-xl md:text-2xl font-bold">
          Valor total bonos:{' '}
          <span className="line-through text-gray-400">$20.400</span>{' '}
          <span className="text-brand-green">→ GRATIS con tu Megapack</span>
        </p>
      </div>
    </Section>;
};