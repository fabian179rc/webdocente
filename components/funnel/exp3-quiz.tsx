"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Sparkles, ArrowRight } from "lucide-react"

const QUESTIONS = [
  {
    q: "Cuando termina una jornada...",
    options: [
      { label: "Estoy agotada.", type: "A" },
      { label: "Pienso en todo lo que olvidé.", type: "B" },
      { label: "Ya estoy organizando mañana.", type: "C" },
      { label: "Sigo corrigiendo detalles.", type: "D" },
    ],
  },
  {
    q: "Cuando planificás...",
    options: [
      { label: "Me cuesta encontrar tiempo.", type: "A" },
      { label: "Improviso bastante.", type: "B" },
      { label: "Tengo estructura pero me falta tiempo.", type: "C" },
      { label: "Busco que todo salga perfecto.", type: "D" },
    ],
  },
] as const

const RESULTS: Record<string, { color: string; dot: string; title: string; lines: string[] }> = {
  A: {
    color: "text-orange-500",
    dot: "bg-orange-500",
    title: "Docente Agotada",
    lines: ["Das muchísimo más de lo que recuperás.", "Tu energía se va en sostener el sistema.", "No en enseñar."],
  },
  B: {
    color: "text-red-500",
    dot: "bg-red-500",
    title: "Docente Improvisadora",
    lines: ["Tu capacidad no es el problema.", "El problema es que cada semana reinventás procesos."],
  },
  C: {
    color: "text-emerald-500",
    dot: "bg-emerald-500",
    title: "Docente Organizada pero Saturada",
    lines: ["Sabés trabajar.", "Simplemente tenés demasiadas cosas para gestionar."],
  },
  D: {
    color: "text-sky-500",
    dot: "bg-sky-500",
    title: "Docente Perfeccionista",
    lines: ["Tu estándar es muy alto.", "Y eso hace que cada tarea te lleve más tiempo del necesario."],
  },
}

type Stage = "intro" | "questions" | "result"

export function Exp3Quiz({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<Stage>("intro")
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({})
  const [selected, setSelected] = useState<number | null>(null)

  const select = (i: number, type: string) => {
    setSelected(i)
    setScores((prev) => ({ ...prev, [type]: (prev[type] ?? 0) + 1 }))
    setTimeout(() => {
      setSelected(null)
      if (step < QUESTIONS.length - 1) setStep(step + 1)
      else setStage("result")
    }, 400)
  }

  const resultType =
    Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "A"
  const result = RESULTS[resultType]

  return (
    <div className="flex min-h-dvh w-full flex-col bg-gradient-to-b from-secondary to-background px-5 py-8">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
        <AnimatePresence mode="wait">
          {stage === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="flex flex-1 flex-col items-center justify-center text-center"
            >
              <span className="mb-6 flex size-20 items-center justify-center rounded-3xl bg-accent/15 text-accent">
                <Sparkles className="size-10" aria-hidden />
              </span>
              <h1 className="font-heading text-3xl font-bold leading-tight text-balance">¿Qué tipo de docente sos?</h1>
              <p className="mt-4 text-base text-muted-foreground text-pretty">
                Dos preguntas rápidas para descubrir tu perfil.
              </p>
              <button
                onClick={() => setStage("questions")}
                className="mt-10 w-full rounded-full bg-accent px-6 py-4 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/20 transition active:scale-[0.98]"
              >
                Empezar el quiz
              </button>
            </motion.div>
          )}

          {stage === "questions" && (
            <motion.div key="questions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-1 flex-col">
              <div className="mb-8 flex gap-2">
                {QUESTIONS.map((_, i) => (
                  <div key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full bg-accent"
                      animate={{ width: i <= step ? "100%" : "0%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-1 flex-col justify-center"
                >
                  <h2 className="font-heading text-2xl font-semibold leading-snug text-balance">{QUESTIONS[step].q}</h2>
                  <div className="mt-8 flex flex-col gap-3">
                    {QUESTIONS[step].options.map((opt, i) => (
                      <motion.button
                        key={opt.label}
                        whileTap={{ scale: 0.97 }}
                        animate={selected === i ? { scale: [1, 1.03, 1] } : {}}
                        onClick={() => selected === null && select(i, opt.type)}
                        className={`flex items-center gap-3 rounded-2xl border-2 px-5 py-4 text-left text-base font-medium transition ${
                          selected === i
                            ? "border-accent bg-accent/10"
                            : "border-border bg-card hover:border-accent/40"
                        }`}
                      >
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
                          {opt.type}
                        </span>
                        <span className="text-pretty">{opt.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {stage === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-1 flex-col justify-center"
            >
              <div className="rounded-3xl border border-border bg-card p-7 text-center shadow-xl">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 13 }}
                  className={`mx-auto mb-4 block size-5 rounded-full ${result.dot}`}
                />
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tu perfil</p>
                <h2 className={`mt-1 font-heading text-2xl font-bold ${result.color}`}>{result.title}</h2>
                <div className="mt-5 space-y-2 text-base leading-relaxed text-muted-foreground text-pretty">
                  {result.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-2 px-2 text-center text-base leading-relaxed text-muted-foreground text-pretty">
                <p>Sin importar cuál sea tu perfil...</p>
                <p className="font-medium text-foreground">Todas tienen algo en común.</p>
                <p>Intentan sostener el año escolar sin un sistema que les simplifique el camino.</p>
              </div>

              <button
                onClick={onComplete}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/20 transition active:scale-[0.98]"
              >
                Calcular mi tiempo recuperable
                <ArrowRight className="size-4" aria-hidden />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
