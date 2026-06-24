import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Shield, Lock, CreditCard, Zap, Clock } from 'lucide-react';
export const FinalUrgency: React.FC = () => {
  return <Section>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex flex-col items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-2xl px-8 py-6 md:px-12">
            <h2 className="text-2xl md:text-4xl font-black text-[#EF4444]">
              ¿Cuántos domingos más vas a perder así?
            </h2>
            <span className="text-sm md:text-base font-bold text-red-400 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
              Aprovecha el descuento de lanzamiento.
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Plan A */}
          <div className="bg-brand-card border border-brand-card-border rounded-3xl p-8 text-center flex flex-col">
            <h3 className="text-xl font-black text-white mb-2">
              📘 MEGAPACK NIVEL INICIAL
            </h3>
            <p className="text-brand-green font-bold text-sm mb-6">
              6 Tomos + 6 Bonos · Todas las salas
            </p>

            <div className="mb-8 flex-grow">
              <span className="text-gray-500 line-through text-lg font-bold block mb-1">
                $45.000
              </span>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-black text-white">$19.990</span>
                <span className="text-lg font-bold text-gray-400">ARS</span>
              </div>
            </div>

            <Button href="https://www.tera-ventasonline.shop/cart/45074512609395:1" variant="secondary" fullWidth>
              → QUIERO MI MEGAPACK
            </Button>
          </div>

          {/* Plan B */}
          <div className="bg-gradient-to-b from-brand-card to-brand-dark border-2 border-brand-green rounded-3xl p-8 text-center flex relative shadow-[0_0_30px_rgba(34,197,94,0.1)] pt-[32px] pb-[32px] flex-col items-start justify-start">
            <h3 className="text-xl font-black text-white mb-2">
              🏆 MEGAPACK + MÁSTER PROFESIONAL ⭐
            </h3>
            <p className="text-brand-green font-bold text-sm mb-6">
              6 Tomos + 6 Bonos + Máster de Personalización Docente
            </p>

            <div className="mb-8 flex-grow">
              <span className="text-gray-500 line-through text-lg font-bold block mb-1">
                $65.000
              </span>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-black text-brand-green">
                  $27.990
                </span>
                <span className="text-lg font-bold text-gray-400">ARS</span>
              </div>
            </div>

            <Button href="https://www.tera-ventasonline.shop/cart/45074512740467:1" variant="primary" fullWidth>
              → QUIERO EL MEGAPACK + MÁSTER
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-400 font-medium">
          <span className="flex items-center gap-2">
            <Lock size={16} className="text-brand-green" /> Pago 100% seguro
          </span>
          <span className="hidden md:inline">·</span>
          <span className="flex items-center gap-2">
            <Zap size={16} className="text-brand-green" /> Acceso en 5 minutos
          </span>
          <span className="hidden md:inline">·</span>
          <span className="flex items-center gap-2">
            <Shield size={16} className="text-brand-green" /> Garantía 7 días
          </span>
          <span className="hidden md:inline">·</span>
          <span className="flex items-center gap-2">
            <CreditCard size={16} className="text-brand-green" /> Mercado Pago |
            Tarjeta | Transferencia
          </span>
        </div>
      </div>
    </Section>;
};