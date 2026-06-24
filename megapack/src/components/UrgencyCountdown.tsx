import React from 'react';
import { Section } from './ui/Section';
import { Clock } from 'lucide-react';
export const UrgencyCountdown: React.FC = () => {
  return <Section className="bg-brand-card/50 border-y border-brand-card-border">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex flex-col items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-2xl px-8 py-8 md:px-12">
          <h2 className="text-2xl md:text-4xl font-black text-[#EF4444]">
            ¿Cuántos domingos más vas a perder así?
          </h2>
          <span className="text-sm md:text-base font-bold text-red-400 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
            Aprovecha el descuento de lanzamiento.
          </span>
        </div>
      </div>
    </Section>;
};