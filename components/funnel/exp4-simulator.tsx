"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, animate } from "motion/react"
import { Clock, Check, PlayCircle } from "lucide-react"

const HOUR_OPTIONS = [3, 5, 8, 10]
const WEEKS = 40

export function Exp4Simulator({ onComplete }: { onComplete: () => void }) {
  const [hours, setHours] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [display, setDisplay] = useState(0)

  const total = (hours ?? 0) * WEEKS

  useEffect(() => {
    if (!showResult || hours === null) return
    const controls = animate(0, total, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [showResult, total, hours])

  return (
    <div className="flex min-h-dvh w-full flex-col bg-gradient-to-b from-primary/10 to-background px-5 py-8">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="input"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="flex flex-1 flex-col justify-center"
            >
              <div className="text-center">
                <span className="mx-auto mb-6 flex size-20 items-center justify-center rounded-3xl bg-primary/15 text-primary">
                  <Clock className="size-10" aria-hidden />
                </span>
                <h1 className="font-heading text-3xl font-bold leading-tight text-balance">Simulador de Tiempo Docente</h1>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                  ¿Cuántas horas por semana dedicás actualmente a organizar, planificar y buscar recursos?
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {HOUR_OPTIONS.map((h) => (
                  <button
                    key={h}
                    onClick={() => setHours(h)}
                    className={`rounded-2xl border-2 py-6 text-center transition active:scale-[0.98] ${
                      hours === h ? "border-primary bg-primary/10" : "border-border bg-card hover:border-primary/40"
                    }`}
                  >
                    <span className="block font-heading text-3xl font-bold text-foreground">{h}</span>
                    <span className="text-sm text-muted-foreground">horas</span>
                  </button>
                ))}
              </div>

              <button
                disabled={hours === null}
                onClick={() => setShowResult(true)}
                className="mt-8 w-full rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Calcular mi tiempo
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-1 flex-col justify-center text-center"
            >
              <p className="text-sm text-muted-foreground">
                {hours} horas por semana × {WEEKS} semanas
              </p>
              <div className="mt-2">
                <span className="font-heading text-7xl font-extrabold tabular-nums text-primary">{display}</span>
                <p className="mt-1 text-lg font-semibold uppercase tracking-wide text-foreground">horas al año</p>
              </div>

              <div className="mt-8 space-y-3 text-left">
                {[
                  `${Math.round(total / 8)} jornadas laborales completas`,
                  "Decenas de fines de semana",
                  "Meses enteros dedicados únicamente a organizar",
                ].map((t, i) => (
                  <motion.div
                    key={t}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 + i * 0.2 }}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-4" aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-pretty">{t}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3 }}
                className="mt-7 space-y-2 text-base leading-relaxed text-muted-foreground text-pretty"
              >
                <p>¿Y si una parte de ese tiempo pudiera volver a vos?</p>
                <p className="font-medium text-foreground">¿Y si el próximo ciclo escolar no tuviera que sentirse igual?</p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6 }}
                onClick={onComplete}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-lg shadow-accent/20 transition active:scale-[0.98]"
              >
                <PlayCircle className="size-5" aria-hidden />
                Ver la presentación
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
