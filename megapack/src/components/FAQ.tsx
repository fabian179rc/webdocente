import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const faqs = [{
  q: '¿Sirve para las tres salas o solo para una?',
  a: 'El Megapack incluye material completo y específico para sala de 18 meses, sala de 2 años y sala de 3 años. Podés usarlo para una sola sala o para las tres. Si tenés sala mixta o trabajás en más de una sala, tenés todo cubierto en un solo producto.'
}, {
  q: '¿Cómo recibo el material?',
  a: 'Apenas confirmás el pago recibís un correo de tera.ventasonline@gmail.com con el enlace de descarga. Acceso inmediato en menos de 5 minutos. Todo en formato PDF listo para leer en pantalla o imprimir.'
}, {
  q: '¿Qué lo diferencia del material que encuentro gratis en internet?',
  a: 'El material gratuito está pensado para cualquier contexto del mundo. La Agenda del Nivel Inicial está pensada para la realidad docente argentina en 2026: el calendario escolar argentino, las efemérides nacionales, los marcos normativos argentinos (NAP, leyes vigentes) y la cultura pedagógica local. Además, todo viene fundamentado, articulado y listo para entregar a dirección sin adaptar nada.'
}, {
  q: '¿Sirve si soy practicante o estudiante?',
  a: 'Es exactamente para vos. El Tomo 1 tiene todo lo que necesitás para comenzar desde cero: adaptación, diagnóstico, primera reunión de padres y planificación inicial. El Bono 6 tiene un plan específico para practicantes que te dice qué leer primero y cómo implementar el material sin abrumarte.'
}, {
  q: '¿Tiene garantía real?',
  a: 'Sí. 7 días, 100% de devolución, sin preguntas. Si no es lo que esperabas, escribís a tera.ventasonline@gmail.com y te devolvemos el dinero. Sin formularios, sin drama. La tasa de devolución es menor al 1% porque el material hace exactamente lo que promete.'
}, {
  q: '¿Funciona para jardines privados y públicos?',
  a: 'Sí. Todo el material está alineado a los Núcleos de Aprendizajes Prioritarios (NAP) nacionales y puede adaptarse a cualquier diseño curricular jurisdiccional. Las plantillas del Máster (si lo agregás) permiten ajustar el formato de planificación al que pida tu institución específica.'
}];
export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return <Section>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-12">
          ❓ LO QUE MÁS NOS PREGUNTAN
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => <div key={i} className="bg-brand-card border border-brand-card-border rounded-2xl overflow-hidden">
              <button className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" onClick={() => setOpenIndex(openIndex === i ? null : i)} aria-expanded={openIndex === i}>
                <span className="font-bold text-lg text-white pr-4">
                  {faq.q}
                </span>
                <ChevronDown className={`text-brand-green transition-transform duration-300 shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} size={24} />
              </button>

              <AnimatePresence>
                {openIndex === i && <motion.div initial={{
              height: 0,
              opacity: 0
            }} animate={{
              height: 'auto',
              opacity: 1
            }} exit={{
              height: 0,
              opacity: 0
            }} transition={{
              duration: 0.3
            }}>
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>}
              </AnimatePresence>
            </div>)}
        </div>
      </div>
    </Section>;
};