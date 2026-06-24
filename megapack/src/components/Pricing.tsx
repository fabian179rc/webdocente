import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
const URL_BASIC = 'https://www.tera-ventasonline.shop/cart/45074512609395:1';
const URL_MASTER = 'https://www.tera-ventasonline.shop/cart/45074512740467:1';
export const Pricing: React.FC = () => {
  return <Section id="pricing">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          ELEGÍ TU MEGAPACK
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3 md:gap-8 max-w-5xl mx-auto md:items-center">
        {/* Plan A */}
        <div className="bg-brand-card border border-brand-card-border rounded-2xl md:rounded-3xl p-4 md:p-10 flex flex-col md:h-full gap-3 md:gap-0">
          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-2xl font-black text-white mb-1 md:mb-2 leading-tight">
              📘 MEGAPACK NIVEL INICIAL
            </h3>
            <p className="text-brand-green font-bold text-xs md:text-base mb-2 md:mb-6">
              6 Tomos + 6 Bonos
            </p>

            <div className="hidden md:block mb-8 flex-grow">
              <p className="text-sm text-gray-400 font-medium mb-1">
                Ideal para:
              </p>
              <p className="text-white font-semibold text-base">
                Todas las salas — 18m · 2 · 3 años
              </p>
            </div>

            <div className="mb-0 md:mb-8">
              <span className="text-gray-500 line-through text-sm md:text-xl font-bold block leading-none mb-0.5 md:mb-1">
                $45.000
              </span>
              <div className="flex items-baseline gap-1 md:gap-2">
                <span className="text-2xl md:text-5xl font-black text-white">
                  $19.990
                </span>
                <span className="text-xs md:text-xl font-bold text-gray-400">
                  ARS
                </span>
              </div>
            </div>
          </div>

          <Button href={URL_BASIC} variant="secondary" fullWidth className="shrink-0 !px-4 md:!px-8 !py-3 md:!py-4 !text-xs md:!text-lg text-center">
            → QUIERO MI MEGAPACK
          </Button>
        </div>

        {/* Plan B - Highlighted */}
        <div className="bg-gradient-to-b from-brand-card to-brand-dark border-2 border-brand-green rounded-2xl md:rounded-3xl p-4 md:p-10 relative shadow-[0_0_40px_rgba(34,197,94,0.15)] flex flex-col md:h-full gap-3 md:gap-0">
          <div className="absolute top-0 right-3 md:right-auto md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 bg-brand-green text-black font-black px-3 md:px-6 py-1 md:py-2 rounded-full text-[10px] md:text-sm uppercase tracking-wider whitespace-nowrap">
            MÁS ELEGIDO ⭐
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base md:text-2xl font-black text-white mb-1 md:mb-2 leading-tight">
              🏆 MEGAPACK + MÁSTER PROFESIONAL
            </h3>
            <p className="text-brand-green font-bold text-xs md:text-base mb-2 md:mb-6">
              6 Tomos + 6 Bonos + Máster de Personalización Docente
            </p>

            <div className="hidden md:block mb-8 flex-grow">
              <p className="text-sm text-gray-400 font-medium mb-1">
                Ideal para:
              </p>
              <p className="text-white font-semibold text-base">
                Docentes que quieren blindaje profesional, protocolos de crisis
                y carpeta infalible
              </p>
            </div>

            <div className="mb-0 md:mb-8">
              <span className="text-gray-500 line-through text-sm md:text-xl font-bold block leading-none mb-0.5 md:mb-1">
                $65.000
              </span>
              <div className="flex items-baseline gap-1 md:gap-2">
                <span className="text-2xl md:text-5xl font-black text-brand-green">
                  $27.990
                </span>
                <span className="text-xs md:text-xl font-bold text-gray-400">
                  ARS
                </span>
              </div>
            </div>
          </div>

          <Button href={URL_MASTER} variant="primary" fullWidth className="shrink-0 !px-4 md:!px-8 !py-3 md:!py-4 !text-xs md:!text-lg text-center">
            → QUIERO EL MEGAPACK + MÁSTER
          </Button>
        </div>
      </div>
    </Section>;
};