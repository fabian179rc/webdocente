import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { FileText, Zap, MapPin, Calendar, Shield, Lock, CreditCard } from 'lucide-react';
export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative pt-6 pb-12 md:py-6 md:min-h-screen md:flex md:flex-col md:justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        <motion.h1 className="text-[2.9rem] md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] md:leading-[1.1] mb-3 md:mb-3 pt-2 md:pt-0" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }}>
          <span className="block whitespace-normal md:whitespace-nowrap text-[38px]">
            Todo tu año de Nivel Inicial.
          </span>
          <span className="text-brand-green text-[38px]">
            Listo. Desde hoy.
          </span>
        </motion.h1>

        <motion.p className="md:text-lg mb-3 md:mb-3 max-w-3xl mx-auto text-[14px] font-[400] text-[#FFFFFF]" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          El sistema N°1 para docentes de Nivel Inicial - Salas de 18 meses · 2
          años · 3 años.
        </motion.p>

        <motion.p className="hidden md:block text-base text-gray-400 mb-4 max-w-2xl mx-auto" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }}>
          Planificaciones + actividades + informes listos para usar. Sin buscar.
          Sin armar. Sin perder domingos.
        </motion.p>

        {/* Product Mockup */}
        <motion.div className="relative w-full mx-auto mb-5 md:mb-4 flex justify-center" initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.7,
        delay: 0.4
      }}>
          <img src="/9e1a433f-a531-4915-9185-46ead2d8769d.png" alt="La Agenda del Nivel Inicial — Megapack Completo: combo de 6 tomos y bonos para docentes" className="w-auto max-w-[330px] max-h-[230px] md:max-w-none md:max-h-[34vh] h-auto object-contain mx-auto drop-shadow-[0_0_60px_rgba(34,197,94,0.25)]" />
        </motion.div>

        {/* Feature Pills */}
        <motion.div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-5 md:mb-5" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }}>
          {[{
          icon: <FileText size={16} />,
          text: '100% PDF'
        }, {
          icon: <Zap size={16} />,
          text: 'Acceso en 5 min'
        }, {
          icon: <MapPin size={16} />,
          text: 'Las 3 salas'
        }, {
          icon: <Calendar size={16} />,
          text: 'Todo el año'
        }].map((pill, i) => <div key={i} className="flex items-center gap-2 bg-brand-card border border-brand-card-border px-4 py-2 rounded-full text-sm font-semibold text-gray-200">
              <span className="text-brand-green">{pill.icon}</span>
              {pill.text}
            </div>)}
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.6
      }} className="flex flex-col items-center">
          <Button size="xl" onClick={scrollToPricing} className="mb-3 !text-base md:!text-xl !px-6 md:!px-10 !py-4">
            → QUIERO MI MEGAPACK AHORA
          </Button>

          <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
            <span className="flex items-center gap-1">
              <Shield size={14} className="text-brand-green" /> Garantía 7 días
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Lock size={14} className="text-brand-green" /> Pago seguro
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <CreditCard size={14} className="text-brand-green" /> Mercado Pago
            </span>
          </div>
        </motion.div>
      </div>
    </section>;
};