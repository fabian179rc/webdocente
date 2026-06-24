import React from 'react';
import { Section } from './ui/Section';
import { Star } from 'lucide-react';
const reviews = [{
  initials: 'MG',
  name: 'Mariela G., Córdoba',
  quote: '"Organicé todo el año en una tarde. Los informes me ahorran horas! No puedo pedir mas."'
}, {
  initials: 'LP',
  name: 'Laura P., Rosario · Jardín de Infantes',
  quote: '"Los tomos de sala de 3 años son el hit de mi sala. Todo listo y fundamentado."'
}, {
  initials: 'RM',
  name: 'Romina M., Buenos Aires',
  quote: '"Por fin tengo material pensado para la realidad docente."'
}];
export const SocialProof: React.FC = () => {
  return <Section className="bg-brand-card/50 border-y border-brand-card-border py-12">
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 text-center">
        {['+300 docentes confían', '6 Tomos listos', '6 Bonos incluidos', '4.9/5 ⭐'].map((stat, i) => <div key={i} className="text-lg md:text-xl font-bold text-white">
            {stat}
          </div>)}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, i) => <div key={i} className="bg-brand-card border border-brand-card-border p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-bold text-xl">
                {review.initials}
              </div>
              <div>
                <div className="flex text-brand-green mb-1">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {review.name}
                </div>
              </div>
            </div>
            <p className="text-gray-200 font-medium italic">{review.quote}</p>
          </div>)}
      </div>
    </Section>;
};