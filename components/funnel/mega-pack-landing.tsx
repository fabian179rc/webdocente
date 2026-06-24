"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  Check,
  ChevronDown,
  Clock3,
  CreditCard,
  FileText,
  Gift,
  HeartHandshake,
  Layers3,
  Lock,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";

function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-10 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

const URL_BASIC = "https://www.tera-ventasonline.shop/cart/45074512609395:1";
const URL_MASTER = "https://www.tera-ventasonline.shop/cart/45074512740467:1";

const HERO_PILLS = [
  { icon: FileText, label: "100% PDF" },
  { icon: Zap, label: "Acceso en 5 min" },
  { icon: MapPin, label: "Las 3 salas" },
  { icon: CalendarClock, label: "Todo el año" },
];

const PAIN_POINTS = [
  "Domingo buscando actividades que nunca quedan bien para tu sala real",
  "Planificaciones para dirección armadas la noche anterior, a las corridas",
  "Siempre las mismas propuestas porque no tenés un banco de secuencias serio",
  "Las efemérides, los actos, los informes — sin sistema claro ni guion",
  "Salas con niños en distintos momentos del desarrollo sin material diferenciado",
  "Fin de semana agotado, domingo volvés a empezar el mismo ciclo",
];

const TOMOS = [
  {
    icon: "📘",
    title: "Tomo 1 — El Inicio del Camino",
    desc: "Adaptación, diagnóstico, entrevistas y reuniones de inicio.",
  },
  {
    icon: "📗",
    title: "Tomo 2 — Pequeños Exploradores",
    desc: "Planificaciones para Sala de 18 meses. Juego heurístico, estimulación sensorial, psicomotricidad.",
  },
  {
    icon: "📙",
    title: "Tomo 3 — Descubriendo el Mundo",
    desc: "Planificaciones para Sala de 2 años. Juego simbólico, hábitos, lenguaje, autonomía.",
  },
  {
    icon: "📕",
    title: "Tomo 4 — Primeros Pasos a la Autonomía",
    desc: "Planificaciones para Sala de 3 años. Alfabetización inicial, matemática, ciencias, arte.",
  },
  {
    icon: "📓",
    title: "Tomo 5 — El Calendario Escolar",
    desc: "Efemérides, actos, guiones y proyectos especiales 2026. Mes a mes, todo resuelto.",
  },
  {
    icon: "📔",
    title: "Tomo 6 — El Registro Pedagógico",
    desc: "Informes narrativos, banco de frases, evaluación y comunicación con familias.",
  },
];

const INCLUDES = [
  "Planificación anual lista para entregar",
  "Secuencias didácticas completas mes a mes",
  "Actividades listas para implementar",
  "Fundamentación pedagógica incluida",
  "Modelos de informes narrativos",
  "Canciones, rondas y recursos musicales",
  "Comunicaciones con familias listas",
  "100% pensado para la realidad argentina",
];

const BONOS = [
  {
    num: "01",
    title: "BONO 1 — Kit de Emergencia Docente",
    desc: "30 actividades salvavidas para días caóticos. Sin preparación. Sin materiales complicados.",
    price: "$3.400",
  },
  {
    num: "02",
    title: "BONO 2 — Banco de Canciones y Transiciones",
    desc: "Canciones y frases para organizar toda la jornada sin gritar ni improvisar.",
    price: "$3.400",
  },
  {
    num: "03",
    title: "BONO 3 — Checklist Anual de Sala Lista",
    desc: "Todo lo que no te puede faltar. Checklists por etapa, rutina y momento del año.",
    price: "$3.400",
  },
  {
    num: "04",
    title: "BONO 4 — 50 Ideas de Recursos Visuales",
    desc: "Transformá tu sala en un ambiente que enseña solo. Ideas concretas y aplicables.",
    price: "$3.400",
  },
  {
    num: "05",
    title: "BONO 5 — Comunicaciones Sin Estrés",
    desc: "Notas y guiones de reuniones listos para copiar y adaptar. Nunca más en blanco.",
    price: "$3.400",
  },
  {
    num: "06",
    title: "BONO 6 — Plan Express de Implementación",
    desc: "Tu hoja de ruta clara para empezar desde hoy sin sentirte desbordada.",
    price: "$3.400",
  },
];

const COMPARISON = [
  {
    sit: "Tu directora pide otro formato de planificación",
    sin: "Rehacés todo desde cero",
    con: "Plantilla universal. 15 minutos.",
  },
  {
    sit: "Hay un accidente en la sala",
    sin: "No sabés exactamente qué escribir",
    con: "Protocolo y acta modelo. Lista.",
  },
  {
    sit: "Sospechás vulneración de derechos",
    sin: "No sabés cómo actuar legalmente",
    con: "Ruta crítica paso a paso.",
  },
  {
    sit: "Una familia te cuestiona o amenaza",
    sin: "Reaccionás en caliente",
    con: "Protocolo y frases modelo. Calma total.",
  },
  {
    sit: "La inspectora revisa tu carpeta",
    sin: "Inseguridad sobre lo que tiene que tener",
    con: "Carpeta infalible checklist.",
  },
  {
    sit: "Necesitás fundamentar tu propuesta",
    sin: "Copiás sin poder defenderla",
    con: "Fórmula de 3 oraciones. Siempre.",
  },
];

const TESTIMONIALS = [
  {
    initials: "CR",
    name: "Cecilia R.",
    location: "Mendoza",
    role: "Megapack + Máster",
    quote:
      "El banco de frases para informes me salvó. Ya no paso horas frente a la hoja en blanco.",
  },
  {
    initials: "RM",
    name: "Romina M.",
    location: "Buenos Aires",
    role: "Docente de Nivel Inicial",
    quote:
      "Las canciones del Bono 2 transformaron mi sala. En una semana los nenes guardaban solos cuando escuchaban la canción.",
  },
  {
    initials: "SC",
    name: "Sofía C.",
    location: "La Plata",
    role: "Practicante de Nivel Inicial",
    quote:
      "Llegué al jardín con todo organizado desde el primer día. Mis colegas me preguntaban de dónde había sacado el material.",
  },
];

const FAQS = [
  {
    q: "¿Sirve para las tres salas o solo para una?",
    a: "El Megapack incluye material completo y específico para sala de 18 meses, sala de 2 años y sala de 3 años.",
  },
  {
    q: "¿Cómo recibo el material?",
    a: "Apenas confirmás el pago recibís un correo con el enlace de descarga. Acceso inmediato en menos de 5 minutos.",
  },
  {
    q: "¿Tiene garantía real?",
    a: "Sí. 7 días, 100% de devolución, sin preguntas.",
  },
];

export function MegaPackLanding() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#07110d] text-white">
      <Section className="relative overflow-hidden pt-8 pb-12">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle,_rgba(34,197,94,0.16),_transparent_70%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            <Sparkles className="size-3.5" /> MEGAPACK · Nivel Inicial
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Todo tu año de Nivel Inicial.{" "}
            <span className="text-emerald-400">Listo. Desde hoy.</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            El sistema N°1 para docentes de Nivel Inicial — salas de 18 meses, 2
            años y 3 años.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
            {HERO_PILLS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200"
              >
                <Icon className="size-4 text-emerald-400" />
                {label}
              </div>
            ))}
          </div>
          <div className="mt-8 flex max-w-4xl justify-center">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-emerald-500/10">
              <Image
                src="/agenda-hero.png"
                alt="Portada del Megapack de Nivel Inicial"
                width={960}
                height={720}
                className="h-auto w-full rounded-[1.5rem] object-contain"
                priority
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href={URL_BASIC}
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-4 text-sm font-bold uppercase tracking-wide text-black transition hover:translate-y-[-1px]"
            >
              Quiero mi Megapack
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver planes <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </Section>

      <Section className="bg-white/5">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-[#0d1712] p-8 shadow-sm">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            {[
              "+300 docentes confían",
              "6 Tomos listos",
              "6 Bonos incluidos",
              "4.9/5 ⭐",
            ].map((stat) => (
              <div key={stat} className="text-lg font-bold text-white">
                {stat}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black sm:text-5xl">
            ¿Cuántos domingos más vas a perder así?
          </h2>
          <p className="mt-6 text-lg font-bold text-white">
            No es falta de vocación. Es falta de un sistema.
          </p>
          <div className="mt-8 rounded-[2rem] border border-red-500/20 bg-red-500/10 p-8 text-left">
            <ul className="space-y-5">
              {PAIN_POINTS.map((pain) => (
                <li key={pain} className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-red-500/20 p-1 text-red-400">
                    <X className="size-5" />
                  </div>
                  <span className="text-lg text-white">{pain}</span>
                </li>
              ))}
            </ul>
          </div>
          <h3 className="mt-8 text-2xl font-bold text-emerald-400">
            ¿Y si este fuera el último domingo que pasás así?
          </h3>
        </div>
      </Section>

      <Section className="bg-white/5">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-black sm:text-5xl">
            🏆 LA AGENDA DEL NIVEL INICIAL™{" "}
            <span className="text-emerald-400">MEGAPACK COMPLETO</span>
          </h2>
          <p className="mt-3 text-xl font-bold text-gray-300">
            6 Tomos + 6 Bonos — 18 meses · 2 años · 3 años
          </p>
          <p className="mt-2 text-lg text-gray-400">
            480+ páginas — Todo resuelto.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TOMOS.map((tomo) => (
              <div
                key={tomo.title}
                className="rounded-[1.5rem] border border-white/10 bg-[#0d1712] p-8 text-left"
              >
                <div className="text-5xl">{tomo.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-white">
                  {tomo.title}
                </h3>
                <p className="mt-3 text-gray-400">{tomo.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] border border-emerald-400/20 bg-[#0d1712] p-8 md:p-12">
            <h3 className="text-2xl font-bold">Cada tomo incluye:</h3>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {INCLUDES.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-emerald-400/15 p-1 text-emerald-400">
                    <Check className="size-4" />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-black sm:text-5xl">
            🎁 6 BONOS ESTRATÉGICOS
          </h2>
          <p className="mt-3 text-2xl font-bold text-emerald-400">
            SIEMPRE INCLUIDOS
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {BONOS.map((bono) => (
              <div
                key={bono.title}
                className="relative overflow-hidden rounded-[1.5rem] border border-emerald-400/20 bg-gradient-to-br from-[#0d1712] to-[#09120c] p-8 text-left"
              >
                <div className="absolute -right-6 -top-6 text-8xl font-black text-emerald-400/10">
                  {bono.num}
                </div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-white">
                      {bono.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 line-through">
                        {bono.price}
                      </div>
                      <div className="rounded bg-emerald-400 px-2 py-1 text-xs font-black uppercase tracking-wider text-black">
                        Gratis
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-400">{bono.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white/5">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex flex-col items-center gap-3 rounded-[2rem] border border-red-500/20 bg-red-500/10 px-8 py-8">
            <h2 className="text-2xl font-black text-red-400 sm:text-4xl">
              ¿Cuántos domingos más vas a perder así?
            </h2>
            <span className="flex items-center gap-2 text-sm font-bold text-red-300">
              <Clock3 className="size-4" /> Aprovecha el descuento de
              lanzamiento.
            </span>
          </div>
        </div>
      </Section>

      <Section id="pricing">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-4xl font-black sm:text-6xl">
            ELEGÍ TU MEGAPACK
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-[#0d1712] p-8">
              <h3 className="text-2xl font-black">📘 MEGAPACK NIVEL INICIAL</h3>
              <p className="mt-2 font-bold text-emerald-400">
                6 Tomos + 6 Bonos
              </p>
              <div className="mt-8">
                <div className="text-xl font-bold text-gray-500 line-through">
                  $45.000
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">
                    $19.990
                  </span>
                  <span className="text-xl font-bold text-gray-400">ARS</span>
                </div>
              </div>
              <a
                href={URL_BASIC}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                → QUIERO MI MEGAPACK
              </a>
            </div>
            <div className="rounded-[2rem] border border-emerald-400/30 bg-gradient-to-b from-[#0d1712] to-[#08120d] p-8 shadow-[0_0_40px_rgba(34,197,94,0.15)]">
              <div className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-black uppercase tracking-wider text-black">
                Más elegido ⭐
              </div>
              <h3 className="mt-6 text-2xl font-black">
                🏆 MEGAPACK + MÁSTER PROFESIONAL
              </h3>
              <p className="mt-2 font-bold text-emerald-400">
                6 Tomos + 6 Bonos + Máster de Personalización Docente
              </p>
              <div className="mt-8">
                <div className="text-xl font-bold text-gray-500 line-through">
                  $65.000
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-emerald-400">
                    $27.990
                  </span>
                  <span className="text-xl font-bold text-gray-400">ARS</span>
                </div>
              </div>
              <a
                href={URL_MASTER}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:translate-y-[-1px]"
              >
                → QUIERO EL MEGAPACK + MÁSTER
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white/5">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[#0d1712] p-8 sm:p-10">
          <h2 className="text-center text-3xl font-black sm:text-5xl">
            🕊️ ¿QUÉ AGREGA EL MÁSTER DE PERSONALIZACIÓN DOCENTE?
          </h2>
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="grid grid-cols-[1.7fr_0.8fr_0.8fr] bg-white/5 px-4 py-3 text-sm font-semibold">
              <span>Situación en la sala</span>
              <span className="text-center text-red-400">Sin Máster</span>
              <span className="text-center text-emerald-400">Con Máster</span>
            </div>
            {COMPARISON.map((row) => (
              <div
                key={row.sit}
                className="grid grid-cols-[1.7fr_0.8fr_0.8fr] border-t border-white/10 bg-black/20 px-4 py-3 text-sm text-gray-300"
              >
                <span>{row.sit}</span>
                <span className="text-center text-gray-400">{row.sin}</span>
                <span className="text-center font-semibold text-white">
                  {row.con}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black sm:text-5xl">
            ❤️ MÁS DOCENTES QUE YA LO TIENEN
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-[1.5rem] border border-white/10 bg-[#0d1712] p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-emerald-400/15 text-lg font-bold text-emerald-400">
                    {t.initials}
                  </div>
                  <div>
                    <div className="flex text-emerald-400">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="size-4 fill-current" />
                      ))}
                    </div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-xs text-gray-400">
                      {t.location} · {t.role}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-300 italic">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white/5">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-[#0d1712] p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                Garantía
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Tu inversión está respaldada.
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Probá el Megapack con total tranquilidad. Si no lo sentís útil
                en los primeros 7 días, te devolvemos tu inversión.
              </p>
            </div>
            <div className="grid gap-3 lg:w-1/2">
              {[
                { icon: ShieldCheck, label: "Pago seguro" },
                { icon: Lock, label: "Compra protegida" },
                {
                  icon: CreditCard,
                  label: "Mercado Pago · tarjeta · transferencia",
                },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3"
                >
                  <Icon className="size-5 text-emerald-400" />
                  <span className="text-sm text-white">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-black sm:text-5xl">
            ❓ LO QUE MÁS NOS PREGUNTAN
          </h2>
          <div className="mt-10 space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={faq.q}
                className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0d1712]"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="font-bold text-white">{faq.q}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-emerald-400 transition ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === index ? (
                  <div className="px-6 pb-6 text-gray-400">{faq.a}</div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white/5">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[#0d1712] p-8 text-center">
          <h2 className="text-3xl font-black sm:text-5xl">
            ⚖️ ¿CUÁNTO CUESTA NO TENERLO?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            El próximo domingo puede ser diferente.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-red-500/20 bg-red-500/10 p-8 text-center">
          <h2 className="text-2xl font-black text-red-400 sm:text-4xl">
            ¿Cuántos domingos más vas a perder así?
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Aprovecha el descuento de lanzamiento y empezá con todo listo desde
            el primer día.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={URL_BASIC}
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-4 text-sm font-bold uppercase tracking-wide text-black"
            >
              → QUIERO MI MEGAPACK
            </a>
            <a
              href={URL_MASTER}
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 px-6 py-4 text-sm font-bold uppercase tracking-wide text-emerald-400"
            >
              → QUIERO EL MEGAPACK + MÁSTER
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 bg-black/80 px-5 py-12 text-center text-sm text-gray-400 sm:px-6 lg:px-8">
        <p className="font-semibold text-white">
          El sistema de recursos pedagógicos N°1 para docentes de Nivel Inicial
          en Argentina.
        </p>
        <p className="mt-2">
          Porque enseñar en el jardín no debería costarte todos los domingos del
          año.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <a
            href="mailto:tera.ventasonline@gmail.com"
            className="transition hover:text-emerald-400"
          >
            tera.ventasonline@gmail.com
          </a>
          <a
            href="https://www.tera-ventasonline.shop"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-emerald-400"
          >
            www.tera-ventasonline.shop
          </a>
        </div>
        <p className="mt-6 text-xs text-gray-500">
          © Tera Ventas Online™ 2026 — Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
