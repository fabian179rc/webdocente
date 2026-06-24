import React from 'react';
import { Section } from './ui/Section';
import { X } from 'lucide-react';
const pains = ['Domingo buscando actividades que nunca quedan bien para tu sala real', 'Planificaciones para dirección armadas la noche anterior, a las corridas', 'Siempre las mismas propuestas porque no tenés un banco de secuencias serio', 'Las efemérides, los actos, los informes — sin sistema claro ni guion', 'Salas con niños en distintos momentos del desarrollo sin material diferenciado', 'Fin de semana agotado, domingo volvés a empezar el mismo ciclo'];
export const PainSection: React.FC = () => {
  return <Section>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-8">
          ¿Cuántos domingos más vas a perder así?
        </h2>

        <div className="text-lg md:text-xl text-gray-300 mb-10 space-y-4 text-center">
          
          <p className="font-bold text-white">
            No es falta de vocación. Es falta de un sistema.
          </p>
        </div>

        <div className="bg-red-500/10 border border-red-500/40 rounded-3xl p-6 md:p-10 mb-10">
          <ul className="space-y-6">
            {pains.map((pain, i) => <li key={i} className="flex items-start gap-4">
                <div className="mt-1 bg-red-500/20 p-1 rounded-full text-red-500 shrink-0">
                  <X size={20} strokeWidth={3} />
                </div>
                <span className="text-lg text-white font-medium">{pain}</span>
              </li>)}
          </ul>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-brand-green text-center">
          ¿Y si este fuera el último domingo que pasás así?
        </h3>
      </div>
    </Section>;
};