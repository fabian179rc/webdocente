import React from 'react';
import { Section } from './ui/Section';
import { Star } from 'lucide-react';
const testimonials = [{
  initials: 'CR',
  name: 'Cecilia R.',
  location: 'Mendoza',
  role: 'Megapack + Máster',
  quote: 'El banco de frases para informes me salvó. Ya no paso horas frente a la hoja en blanco. En una tarde hice los 18 informes del grupo.'
}, {
  initials: 'RM',
  name: 'Romina M.',
  location: 'Buenos Aires',
  role: 'Docente de Nivel Inicial',
  quote: 'Las canciones del Bono 2 transformaron mi sala. En una semana los nenes guardaban solos cuando escuchaban la canción. Sin decir nada.'
}, {
  initials: 'SC',
  name: 'Sofía C.',
  location: 'La Plata',
  role: 'Practicante de Nivel Inicial',
  quote: 'Soy practicante y llegué al jardín con todo organizado desde el primer día. Mis colegas me preguntaban de dónde había sacado el material.'
}, {
  initials: 'PA',
  name: 'Paula A.',
  location: 'Neuquén',
  role: 'Docente de Sala de 3 años',
  quote: 'Los protocolos del Máster fueron lo más valioso. Tuve un accidente en sala y supe exactamente qué hacer y qué escribir. Sin pánico.'
}, {
  initials: 'VG',
  name: 'Valeria G.',
  location: 'Rosario',
  role: 'Maestra Jardinera',
  quote: 'Las secuencias de sala de 2 años son exactamente lo que necesitaba. Todo pensado para la realidad argentina, no para libros importados.'
}];
export const Testimonials: React.FC = () => {
  return <Section>
      <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
        ❤️ MÁS DOCENTES QUE YA LO TIENEN
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => <div key={i} className="bg-brand-card border border-brand-card-border p-6 rounded-2xl flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-bold text-xl shrink-0">
                {t.initials}
              </div>
              <div>
                <div className="flex text-brand-green mb-1">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <div className="text-white font-bold">{t.name}</div>
                <div className="text-xs text-gray-400">
                  📍 {t.location} | {t.role}
                </div>
              </div>
            </div>
            <p className="text-gray-300 font-medium italic flex-grow">
              "{t.quote}"
            </p>
          </div>)}
      </div>
    </Section>;
};