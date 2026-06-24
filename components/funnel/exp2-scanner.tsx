"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ScanLine, ArrowRight, AlertTriangle } from "lucide-react"

const QUESTIONS = [
  {
    q: "¿Cuántas horas por semana dedicás a planificar fuera del horario laboral?",
    options: ["Menos de 2 horas", "Entre 2 y 5 horas", "Entre 5 y 10 horas", "Más de 10 horas"],
  },
  {
    q: "¿Dónde guardás tus recursos?",
    options: ["Todo organizado", "En varias carpetas", "En distintos dispositivos", "No sé exactamente dónde está cada cosa"],
  },
  {
    q: "¿Cuántas veces buscás actividades nuevas durante la semana?",
    options: ["Casi nunca", "Algunas veces", "Todos los días", "Constantemente"],
  },
  {
    q: "¿Cómo te sentís cuando comienza una nueva semana?",
    options: ["Muy preparada", "Más o menos preparada", "Con dudas", "Abrumada"],
  },
]

type Stage = "intro" | "questions" | "result"

export function Exp2Scanner({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<Stage>("intro")
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])

  const progress = ((step + (stage === "result" ? 1 : 0)) / QUESTIONS.length) * 100

  const select = (i: number) => {
    const next = [...answers]
    next[step] = i
    setAnswers(next)
    setTimeout(() => {
      if (step < QUESTIONS.length - 1) setStep(step + 1)
      else setStage("result")
    }, 280)
  }

  return (
    <div className="flex min-h-dvh w-full flex-col bg-background px-5 py-8">
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
              <span className="mb-6 flex size-20 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                <ScanLine className="size-10" aria-hidden />
              </span>
              <h1 className="font-heading text-3xl font-bold leading-tight text-balance">
                Escáner de Organización Docente
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                Respondé estas preguntas con total sinceridad.
              </p>
              <button
                onClick={() => setStage("questions")}
                className="mt-10 w-full rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition active:scale-[0.98]"
              >
                Comenzar
              </button>
            </motion.div>
          )}

          {stage === "questions" && (
            <motion.div
              key="questions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-1 flex-col"
            >
              <div className="mb-8">
                <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <ScanLine className="size-3.5" aria-hidden /> Escaneando…
                  </span>
                  <span>
                    {step + 1} / {QUESTIONS.length}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-1 flex-col"
                >
                  <h2 className="font-heading text-2xl font-semibold leading-snug text-balance">
                    {QUESTIONS[step].q}
                  </h2>
                  <div className="mt-8 flex flex-col gap-3">
                    {QUESTIONS[step].options.map((opt, i) => {
                      const active = answers[step] === i
                      return (
                        <button
                          key={opt}
                          onClick={() => select(i)}
                          className={`flex items-center justify-between rounded-2xl border-2 px-5 py-4 text-left text-base font-medium transition active:scale-[0.99] ${
                            active
                              ? "border-primary bg-primary/10 text-foreground"
                              : "border-border bg-card text-foreground hover:border-primary/40"
                          }`}
                        >
                          <span className="text-pretty">{opt}</span>
                          <ArrowRight className={`size-5 shrink-0 ${active ? "text-primary" : "text-muted-foreground/40"}`} aria-hidden />
                        </button>
                      )
                    })}
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
              className="flex flex-1 flex-col items-center justify-center text-center"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 14 }}
                className="mb-6 flex size-20 items-center justify-center rounded-full bg-destructive/15 text-destructive"
              >
                <AlertTriangle className="size-10" aria-hidden />
              </motion.span>
              <p className="text-sm font-semibold uppercase tracking-wider text-destructive">Resultado del escáner</p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-balance">Saturación Alta</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground text-pretty">
                <p className="font-medium text-foreground">Tu problema no es la falta de compromiso.</p>
                <p>Tu problema es que la organización depende de vos cada día.</p>
                <p>
                  Cuando todo depende de recordar, buscar y reorganizar constantemente, el agotamiento aparece aunque
                  ames tu trabajo.
                </p>
              </div>
              <button
                onClick={onComplete}
                className="mt-10 w-full rounded-full bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/20 transition active:scale-[0.98]"
              >
                Quiero descubrir mi perfil docente
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
