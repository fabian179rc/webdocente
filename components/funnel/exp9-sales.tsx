"use client"

import { useEffect, useState, type ReactNode } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import {
  ArrowRight,
  BadgeCheck,
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
  Zap,
} from "lucide-react"

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const URL_BASIC = "https://www.tera-ventasonline.shop/cart/45074512609395:1"
const URL_MASTER = "https://www.tera-ventasonline.shop/cart/45074512740467:1"

const HERO_PILLS = [
  { icon: FileText, label: "100% PDF" },
  { icon: Zap, label: "Acceso en 5 min" },
  { icon: MapPin, label: "Las 3 salas" },
  { icon: CalendarClock, label: "Todo el año" },
]

const PAIN_POINTS = [
  "Las horas buscando actividades.",
  "Las planificaciones de último momento.",
  "Los fines de semana ocupados preparando materiales.",
  "La sensación de que siempre falta algo.",
]

const STEPS = [
  "Centralizás tu planificación.",
  "Organizás actividades y recursos.",
  "Seguís el avance del año.",
  "Reducís el tiempo de preparación semanal.",
  "Volvés a recuperar claridad y tranquilidad.",
]

const BONUSES = [
  "6 tomos completos para Nivel Inicial",
  "6 bonos descargables y listos para usar",
  "Diseñados para 18 meses, 2 años y 3 años",
  "Planificaciones, actividades e informes en un solo lugar",
]

const COMPARISON_ROWS = [
  { item: "Planificar desde cero cada semana", before: "Sí", after: "No" },
  { item: "Buscar actividades en múltiples lugares", before: "Sí", after: "No" },
  { item: "Tener todo listo para el año", before: "No", after: "Sí" },
  { item: "Recuperar tiempo y calma", before: "No", after: "Sí" },
]

const TESTIMONIALS = [
  "Ahora planifico mucho más rápido y con mucho menos estrés.",
  "Dejé de pasar los domingos organizando y empecé a dormir mejor.",
  "Por fin tengo todo en un solo lugar y me siento más segura.",
]

const FAQS = [
  { q: "¿Sirve si ya tengo experiencia?", a: "Sí. La agenda no reemplaza tu experiencia; la potencia está en organizarla." },
  { q: "¿Y si ya tengo materiales?", a: "Perfecto. El sistema te ayuda a ordenarlos y aprovecharlos mejor." },
  { q: "¿Necesito dedicar horas para implementarla?", a: "No. Fue pensada para simplificar, no para sumar trabajo." },
  { q: "¿Es solo para maestras jardineras?", a: "También es útil para docentes, coordinadoras y responsables de salas." },
  { q: "¿Vale la inversión?", a: "Si te ayuda a recuperar tiempo durante todo el año, la respuesta suele ser sí." },
]

export function Exp9Sales() {
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 700)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative w-full overflow-x-hidden bg-background pb-24 text-foreground">
      <section className="relative overflow-hidden px-5 pb-10 pt-10 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle,_rgba(34,197,94,0.2),_transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary"
          >
            <Sparkles className="size-3.5" /> MEGAPACK · Nivel Inicial
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 font-heading text-3xl font-black leading-tight text-balance sm:text-4xl lg:text-6xl"
          >
            Todo tu año de Nivel Inicial. <span className="text-primary">Listo desde hoy.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg"
          >
            Planificaciones, actividades, informes y recursos para salas de 18 meses, 2 años y 3 años, en un solo sistema para que dejes de empezar cada semana desde cero.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mx-auto mt-8 flex max-w-4xl justify-center"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card p-2 shadow-2xl shadow-primary/10">
              <Image src="/agenda-hero.png" alt="Portada del Megapack de Nivel Inicial" width={960} height={720} className="h-auto w-full rounded-[1.5rem] object-contain" priority />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {HERO_PILLS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium text-muted-foreground">
                <Icon className="size-4 text-primary" />
                {label}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <a
              href={URL_BASIC}
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/25 transition hover:translate-y-[-1px] sm:w-auto"
            >
              Quiero mi Megapack
            </a>
            <button
              onClick={scrollToOffer}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-4 text-sm font-semibold text-foreground transition hover:bg-muted sm:w-auto"
            >
              Ver planes <ArrowRight className="size-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl space-y-4 rounded-[2rem] border border-border bg-card/70 p-6 shadow-sm sm:p-8">
          <p className="font-heading text-2xl font-bold text-foreground">Además enseñar.</p>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Pero hay una parte del trabajo que ya no te gusta: buscar, armar, reorganizar y volver a empezar. No porque no te guste enseñar. Porque estás sosteniendo demasiadas cosas a la vez.
          </p>
          <ul className="grid gap-3 text-base text-muted-foreground sm:grid-cols-2">
            {PAIN_POINTS.map((point) => (
              <li key={point} className="flex gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-secondary/60 px-5 py-12 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-card p-6 text-center shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-destructive">El verdadero problema</p>
          <h2 className="mt-3 font-heading text-2xl font-bold text-balance sm:text-3xl">
            No es la enseñanza. Es la improvisación constante.
          </h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Cada semana comenzás de nuevo.",
              "Buscás actividades y recursos.",
              "Armás secuencias a último momento.",
              "Reorganizás materiales una y otra vez.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-background/70 px-4 py-4 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
            Y repetís el proceso una y otra vez. Con el tiempo eso genera agotamiento mental, no por falta de amor por tu trabajo, sino por la carga de tener que sostenerlo todo a mano.
          </p>
        </Reveal>
      </section>

      <section className="px-5 py-12 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl rounded-[2rem] bg-primary p-8 text-center text-primary-foreground shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-80">Una verdad que cambia todo</p>
          <h2 className="mt-3 font-heading text-2xl font-bold text-balance sm:text-3xl">
            Las docentes más tranquilas no trabajan más. Tienen mejores sistemas.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed opacity-90 text-pretty">
            La diferencia no está en esforzarse más. Está en tener una estructura que evite comenzar desde cero y te permita enfocarte en lo más importante: enseñar.
          </p>
        </Reveal>
      </section>

      <section className="px-5 py-10 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">¿Qué incluye?</p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-balance sm:text-3xl">El mecanismo</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                Un sistema pensado para convertir tareas dispersas en un camino claro, ordenado y reusable durante todo el ciclo lectivo.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:w-1/2">
              {[
                { icon: Layers3, label: "Planificaciones" },
                { icon: BookOpen, label: "Actividades" },
                { icon: TrendingUp, label: "Seguimiento" },
                { icon: HeartHandshake, label: "Organización" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-2xl border border-border bg-background/70 p-4 text-center">
                  <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary/60 px-5 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-bold text-balance sm:text-3xl">Cómo funciona</h2>
          </Reveal>
          <div className="mt-7 space-y-3">
            {STEPS.map((step, index) => (
              <Reveal key={step}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-4 py-4 shadow-sm">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="text-base font-medium text-pretty">{step}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="lg:w-1/2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Bonos incluidos</p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-balance sm:text-3xl">Todo lo que necesitás, sin buscarlo por todos lados.</h2>
            </div>
            <div className="grid gap-3 lg:w-1/2">
              {BONUSES.map((bonus) => (
                <div key={bonus} className="flex items-start gap-3 rounded-2xl border border-border bg-background/70 px-4 py-3">
                  <Gift className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{bonus}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-12 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-5xl rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Comparación</p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-balance sm:text-3xl">Antes vs. después</h2>
          </div>
          <div className="mt-7 overflow-hidden rounded-2xl border border-border">
            <div className="grid grid-cols-[1.7fr_0.8fr_0.8fr] bg-muted/70 px-4 py-3 text-sm font-semibold text-foreground">
              <span>Situación</span>
              <span className="text-center">Antes</span>
              <span className="text-center">Después</span>
            </div>
            {COMPARISON_ROWS.map((row) => (
              <div key={row.item} className="grid grid-cols-[1.7fr_0.8fr_0.8fr] border-t border-border bg-background/60 px-4 py-3 text-sm text-muted-foreground">
                <span>{row.item}</span>
                <span className="text-center font-semibold text-destructive">{row.before}</span>
                <span className="text-center font-semibold text-primary">{row.after}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-bold text-balance sm:text-3xl">Lo que dicen las docentes</h2>
          </Reveal>
          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {TESTIMONIALS.map((text) => (
              <Reveal key={text}>
                <figure className="rounded-[1.5rem] border border-border bg-card p-5 shadow-sm">
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-4 fill-accent" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-base font-medium leading-relaxed text-pretty">“{text}”</blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Garantía</p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-balance sm:text-3xl">Tu inversión está respaldada.</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                Probá el Megapack con total tranquilidad. Si no lo sentís útil en los primeros 7 días, te devolvemos tu inversión.
              </p>
            </div>
            <div className="grid gap-3 lg:w-1/2">
              {[
                { icon: ShieldCheck, label: "Pago seguro" },
                { icon: Lock, label: "Compra protegida" },
                { icon: CreditCard, label: "Mercado Pago · tarjeta · transferencia" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl border border-border bg-background/70 px-4 py-3">
                  <Icon className="size-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="oferta" className="px-5 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-bold text-balance sm:text-3xl">Elegí tu plan</h2>
          </Reveal>
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <PlanCard
              name="MEGAPACK NIVEL INICIAL"
              subtitle="6 tomos + 6 bonos"
              price="$19.990"
              oldPrice="$45.000"
              features={["Todas las salas", "Planificaciones y recursos", "Actividades listos para usar", "Informes y seguimiento"]}
              cta="Quiero mi Megapack"
              href={URL_BASIC}
            />
            <PlanCard
              name="MEGAPACK + MÁSTER"
              subtitle="6 tomos + 6 bonos + master"
              price="$27.990"
              oldPrice="$65.000"
              features={["Todo lo anterior", "Personalización docente", "Protocolos de crisis", "Carpeta infalible"]}
              cta="Quiero el Megapack + Máster"
              href={URL_MASTER}
              highlighted
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 px-5 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-bold text-balance sm:text-3xl">Preguntas frecuentes</h2>
          </Reveal>
          <div className="mt-7 space-y-3">
            {FAQS.map((faq) => (
              <Faq key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-2xl font-bold leading-snug text-balance sm:text-3xl">
            ¿Cuántos domingos más vas a perder así?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
            El Megapack fue creado para ayudarte a recuperar tiempo, claridad y tranquilidad durante todo el ciclo escolar.
          </p>
          <button
            onClick={scrollToOffer}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-lg shadow-accent/25 transition hover:translate-y-[-1px]"
          >
            Quiero mi agenda ahora <ArrowRight className="size-4" />
          </button>
        </Reveal>
      </section>

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: showSticky ? 0 : 120 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 px-4 py-3 backdrop-blur"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-foreground">MEGAPACK Nivel Inicial</p>
            <p className="text-xs text-muted-foreground">Desde $19.990</p>
          </div>
          <a href={URL_BASIC} className="shrink-0 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:translate-y-[-1px]">
            Quiero mi pack
          </a>
        </div>
      </motion.div>
    </div>
  )
}

function PlanCard({
  name,
  subtitle,
  price,
  oldPrice,
  features,
  cta,
  href,
  highlighted,
}: {
  name: string
  subtitle: string
  price: string
  oldPrice: string
  features: string[]
  cta: string
  href: string
  highlighted?: boolean
}) {
  return (
    <Reveal>
      <div className={`relative rounded-[2rem] border-2 p-6 shadow-sm ${highlighted ? "border-primary bg-card" : "border-border bg-card"}`}>
        {highlighted && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
            Más elegido
          </span>
        )}
        <h3 className="font-heading text-xl font-bold text-foreground">{name}</h3>
        <p className="mt-2 text-sm font-semibold text-primary">{subtitle}</p>
        <div className="mt-5 flex items-end gap-2">
          <span className="text-gray-500 line-through">{oldPrice}</span>
          <span className="text-4xl font-black text-foreground">{price}</span>
          <span className="pb-1 text-sm font-semibold text-muted-foreground">ARS</span>
        </div>
        <ul className="mt-6 space-y-2.5">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <Check className="size-4 shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <a href={href} className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition ${highlighted ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
          {cta}
        </a>
      </div>
    </Reveal>
  )
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <button onClick={() => setOpen((value) => !value)} className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left" aria-expanded={open}>
        <span className="text-base font-semibold text-pretty">{q}</span>
        <ChevronDown className={`size-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} className="overflow-hidden">
        <p className="px-5 pb-4 text-base leading-relaxed text-muted-foreground text-pretty">{a}</p>
      </motion.div>
    </div>
  )
}
