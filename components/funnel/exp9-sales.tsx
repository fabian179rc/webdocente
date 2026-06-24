"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import {
  Check,
  Clock,
  Layers,
  Sparkles,
  HeartHandshake,
  ChevronDown,
  Star,
  ArrowRight,
} from "lucide-react"

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

const STEPS = [
  "Centralizás tu planificación.",
  "Organizás actividades y recursos.",
  "Seguís el avance del año.",
  "Reducís el tiempo de preparación semanal.",
  "Recuperás claridad y tranquilidad.",
]

const TESTIMONIALS = [
  "Ahora planifico mucho más rápido.",
  "Dejé de pasar los domingos organizando.",
  "Por fin tengo todo en un solo lugar.",
]

const FAQS = [
  { q: "¿Ya sirve si tengo experiencia?", a: "Sí. La agenda no reemplaza tu experiencia. La potencia." },
  { q: "¿Y si ya tengo materiales?", a: "Perfecto. La agenda te ayuda a organizarlos." },
  { q: "¿Necesito dedicar horas para implementarla?", a: "No. Fue diseñada para simplificar, no para agregar trabajo." },
  { q: "¿Es solo para maestras jardineras?", a: "También es útil para docentes y responsables de nivel inicial." },
  { q: "¿Vale la inversión?", a: "Si te ayuda a recuperar tiempo durante todo el año, la respuesta suele ser sí." },
]

export function Exp9Sales() {
  const [showSticky, setShowSticky] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative w-full overflow-x-hidden bg-background pb-24">
      {/* HERO */}
      <section ref={heroRef} className="relative px-5 pt-12 pb-10">
        <div className="mx-auto max-w-md text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="size-3.5" aria-hidden /> Agenda del Nivel Inicial
          </span>
          <h1 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-balance sm:text-4xl">
            La agenda que ayuda a docentes de nivel inicial a dejar de empezar cada semana desde cero
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            Organizá clases, actividades y recursos en un solo lugar para recuperar tiempo, reducir el estrés y volver a
            disfrutar tu vocación.
          </p>

          <div className="relative mx-auto mt-8 aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl">
            <Image src="/agenda-hero.png" alt="Agenda del Nivel Inicial" fill className="object-cover" sizes="(max-width:480px) 100vw, 420px" priority />
          </div>

          <button
            onClick={scrollToOffer}
            className="mt-8 w-full rounded-full bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/25 transition active:scale-[0.98]"
          >
            Quiero organizar mi año
          </button>
        </div>
      </section>

      {/* APERTURA */}
      <section className="px-5 py-10">
        <Reveal className="mx-auto max-w-md space-y-4 text-lg leading-relaxed text-pretty">
          <p className="font-heading text-2xl font-bold text-foreground">Amás enseñar.</p>
          <p className="text-muted-foreground">Pero probablemente hay una parte de tu trabajo que ya no disfrutás.</p>
          <ul className="space-y-2 text-base text-muted-foreground">
            {["Las horas buscando actividades.", "Las planificaciones de último momento.", "Los fines de semana ocupados organizando materiales.", "Y la sensación constante de que siempre falta algo."].map(
              (t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {t}
                </li>
              ),
            )}
          </ul>
          <p className="text-muted-foreground">No porque seas mala docente. No porque te falte experiencia.</p>
          <p className="font-medium text-foreground">
            Simplemente porque estás intentando sostener demasiadas cosas al mismo tiempo.
          </p>
        </Reveal>
      </section>

      {/* EL VILLANO */}
      <section className="bg-secondary/60 px-5 py-12">
        <Reveal className="mx-auto max-w-md text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-destructive">El verdadero problema</p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-balance">No es la enseñanza. Es la improvisación constante.</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {["Cada semana comenzás de nuevo.", "Buscás actividades.", "Armás secuencias.", "Reorganizás recursos."].map(
              (t) => (
                <div key={t} className="rounded-2xl border border-border bg-card px-4 py-4 text-pretty">
                  {t}
                </div>
              ),
            )}
          </div>
          <p className="mt-6 text-base text-muted-foreground">
            Y repetís el proceso una y otra vez. Con el tiempo eso genera agotamiento. No físico.{" "}
            <span className="font-semibold text-foreground">Mental.</span>
          </p>
        </Reveal>
      </section>

      {/* REVELACIÓN */}
      <section className="px-5 py-12">
        <Reveal className="mx-auto max-w-md rounded-3xl bg-primary p-7 text-center text-primary-foreground shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Una verdad que cambia todo</p>
          <h2 className="mt-3 font-heading text-2xl font-bold text-balance">
            Las docentes más tranquilas no trabajan más. Tienen mejores sistemas.
          </h2>
          <p className="mt-4 text-base opacity-90 text-pretty">
            La diferencia no está en esforzarse más. Está en tener una estructura que evite comenzar desde cero.
          </p>
        </Reveal>
      </section>

      {/* EL MECANISMO */}
      <section className="px-5 py-10">
        <Reveal className="mx-auto max-w-md text-center">
          <h2 className="font-heading text-2xl font-bold text-balance">El mecanismo</h2>
          <p className="mt-3 text-base text-muted-foreground text-pretty">
            La Agenda del Nivel Inicial fue creada para transformar tareas dispersas en un sistema organizado.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { icon: Layers, t: "Planificaciones" },
              { icon: Clock, t: "Seguimiento" },
              { icon: Sparkles, t: "Actividades" },
              { icon: HeartHandshake, t: "Organización" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card px-4 py-5">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Todo pensado para acompañarte durante el ciclo lectivo completo.
          </p>
        </Reveal>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="bg-secondary/60 px-5 py-12">
        <div className="mx-auto max-w-md">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-bold text-balance">Cómo funciona</h2>
          </Reveal>
          <div className="mt-7 space-y-3">
            {STEPS.map((s, i) => (
              <Reveal key={s}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-4 py-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-heading font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="text-base font-medium text-pretty">{s}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-md">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-bold">Lo que dicen las docentes</h2>
          </Reveal>
          <div className="mt-7 space-y-4">
            {TESTIMONIALS.map((t) => (
              <Reveal key={t}>
                <figure className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="mb-2 flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-accent" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="text-base font-medium text-pretty">{`"${t}"`}</blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="px-5 py-12">
        <div className="mx-auto max-w-md">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-bold text-balance">Elegí tu plan</h2>
          </Reveal>
          <div className="mt-7 space-y-5">
            <PlanCard
              name="Plan Docente"
              price="$19.990"
              features={["Organización anual", "Planificación", "Recursos", "Seguimiento"]}
              cta="Quiero este plan"
            />
            <PlanCard
              name="Plan Premium"
              price="$27.990"
              highlighted
              features={["Todo lo anterior", "Recursos ampliados", "Herramientas adicionales", "Material complementario"]}
              cta="Quiero el Premium"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/60 px-5 py-12">
        <div className="mx-auto max-w-md">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-bold">Preguntas frecuentes</h2>
          </Reveal>
          <div className="mt-7 space-y-3">
            {FAQS.map((f) => (
              <Faq key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-5 py-14">
        <Reveal className="mx-auto max-w-md text-center">
          <h2 className="font-heading text-2xl font-bold leading-snug text-balance">
            ¿Cuántos fines de semana más vas a entregar al trabajo antes de organizarte?
          </h2>
          <p className="mt-4 text-base text-muted-foreground text-pretty">
            La Agenda del Nivel Inicial fue creada para ayudarte a recuperar tiempo, claridad y tranquilidad durante todo
            el ciclo escolar.
          </p>
          <button
            onClick={scrollToOffer}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-lg shadow-accent/25 transition active:scale-[0.98]"
          >
            Quiero mi agenda ahora
            <ArrowRight className="size-4" aria-hidden />
          </button>
          <p className="mt-6 text-sm italic text-muted-foreground text-pretty">
            Porque enseñar debería ocupar tu energía. No la organización constante.
          </p>
        </Reveal>
      </section>

      {/* STICKY CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: showSticky ? 0 : 120 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 px-4 py-3 backdrop-blur"
      >
        <div className="mx-auto flex max-w-md items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">Agenda del Nivel Inicial</p>
            <p className="text-xs text-muted-foreground">Desde $19.990</p>
          </div>
          <button
            onClick={scrollToOffer}
            className="shrink-0 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition active:scale-[0.97]"
          >
            Quiero mi agenda
          </button>
        </div>
      </motion.div>
    </div>
  )
}

function PlanCard({
  name,
  price,
  features,
  cta,
  highlighted,
}: {
  name: string
  price: string
  features: string[]
  cta: string
  highlighted?: boolean
}) {
  return (
    <Reveal>
      <div
        className={`relative rounded-3xl border-2 p-6 shadow-sm ${
          highlighted ? "border-accent bg-card" : "border-border bg-card"
        }`}
      >
        {highlighted && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">
            Más elegido
          </span>
        )}
        <h3 className="font-heading text-lg font-bold">{name}</h3>
        <p className="mt-1 font-heading text-4xl font-extrabold text-primary">{price}</p>
        <ul className="mt-5 space-y-2.5">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="size-3.5" aria-hidden />
              </span>
              <span className="text-pretty">{f}</span>
            </li>
          ))}
        </ul>
        <button
          className={`mt-6 w-full rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide shadow-lg transition active:scale-[0.98] ${
            highlighted
              ? "bg-accent text-accent-foreground shadow-accent/25"
              : "bg-primary text-primary-foreground shadow-primary/20"
          }`}
        >
          {cta}
        </button>
      </div>
    </Reveal>
  )
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-pretty">{q}</span>
        <ChevronDown className={`size-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-4 text-base leading-relaxed text-muted-foreground text-pretty">{a}</p>
      </motion.div>
    </div>
  )
}
