import React from 'react';
import { Section } from './ui/Section';
import { Check } from 'lucide-react';
const tomos = [
{
  title: 'Tomo 1 — El Inicio del Camino',
  desc: 'Adaptación, diagnóstico, entrevistas y reuniones de inicio.',
  icon: '📘'
},
{
  title: 'Tomo 2 — Pequeños Exploradores',
  desc: 'Planificaciones completas para Sala de 18 meses. Juego heurístico, estimulación sensorial, psicomotricidad.',
  icon: '📗'
},
{
  title: 'Tomo 3 — Descubriendo el Mundo',
  desc: 'Planificaciones completas para Sala de 2 años. Juego simbólico, hábitos, lenguaje, autonomía.',
  icon: '📙'
},
{
  title: 'Tomo 4 — Primeros Pasos a la Autonomía',
  desc: 'Planificaciones completas para Sala de 3 años. Alfabetización inicial, matemática, ciencias, arte.',
  icon: '📕'
},
{
  title: 'Tomo 5 — El Calendario Escolar',
  desc: 'Efemérides, actos, guiones y proyectos especiales 2026. Mes a mes, todo resuelto.',
  icon: '📓'
},
{
  title: 'Tomo 6 — El Registro Pedagógico',
  desc: 'Informes narrativos, banco de frases, evaluación y comunicación con familias.',
  icon: '📔'
}];

const includes = [
'Planificación anual lista para entregar',
'Secuencias didácticas completas mes a mes',
'Actividades listas para implementar',
'Fundamentación pedagógica incluida',
'Modelos de informes narrativos',
'Canciones, rondas y recursos musicales',
'Comunicaciones con familias listas',
'100% pensado para la realidad argentina'];

export const ProductReveal: React.FC = () => {
  return (
    <Section className="bg-brand-card/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          🏆 LA AGENDA DEL NIVEL INICIAL™
          <br />
          <span className="text-brand-green">MEGAPACK COMPLETO</span>
        </h2>
        <p className="text-xl md:text-2xl font-bold text-gray-300 mb-2">
          6 Tomos + 6 Bonos — 18 meses · 2 años · 3 años
        </p>
        <p className="text-lg text-gray-400">480+ páginas — Todo resuelto.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {tomos.map((tomo, i) =>
        <div
          key={i}
          className="bg-brand-card border border-brand-card-border p-8 rounded-2xl hover:border-brand-green/50 transition-colors">
          
            <div className="text-5xl mb-4">{tomo.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{tomo.title}</h3>
            <p className="text-gray-400 leading-relaxed">{tomo.desc}</p>
          </div>
        )}
      </div>

      <div className="max-w-4xl mx-auto bg-brand-card border border-brand-green/30 rounded-3xl p-8 md:p-12">
        <h3 className="text-2xl font-bold text-center mb-8">
          Cada tomo incluye:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {includes.map((item, i) =>
          <div key={i} className="flex items-start gap-3">
              <div className="mt-1 bg-brand-green/20 p-1 rounded-full text-brand-green shrink-0">
                <Check size={16} strokeWidth={3} />
              </div>
              <span className="text-gray-200 font-medium">{item}</span>
            </div>
          )}
        </div>
      </div>
    </Section>);

};