"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Terminal, Lock, ArrowRight } from "lucide-react"

const STEPS = [
  { label: "Validando acceso docente...", pct: 0 },
  { label: "Comprobando credenciales...", pct: 20 },
  { label: "Perfil detectado", pct: 40 },
  { label: "Recursos educativos encontrados", pct: 60 },
  { label: "Biblioteca privada desbloqueada", pct: 80 },
  { label: "Acceso autorizado", pct: 100 },
]

const TOTAL_MS = 20000

function bar(pct: number) {
  const filled = Math.round(pct / 10)
  return "[" + "█".repeat(filled) + "░".repeat(10 - filled) + "]"
}

export function Exp6Login({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<{ label: string; pct: number }[]>([])
  const [progress, setProgress] = useState(0)
  const [finished, setFinished] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    STEPS.forEach((s, i) => {
      timers.push(
        setTimeout(() => {
          setLines((prev) => [...prev, s])
        }, (TOTAL_MS / STEPS.length) * i + 400),
      )
    })
    const start = performance.now()
    let raf: number
    const tick = (ts: number) => {
      const pct = Math.min(100, ((ts - start) / TOTAL_MS) * 100)
      setProgress(pct)
      if (pct >= 100) {
        setFinished(true)
        return
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      timers.forEach(clearTimeout)
      cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [lines])

  return (
    <div className="flex min-h-dvh w-full flex-col bg-black px-5 py-10 font-mono text-emerald-400">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
        <div className="mb-4 flex items-center gap-2 text-emerald-500/80">
          <Terminal className="size-4" aria-hidden />
          <span className="text-xs uppercase tracking-widest">acceso_seguro // docentes</span>
        </div>

        <div
          ref={scrollRef}
          className="no-scrollbar flex-1 space-y-3 overflow-y-auto rounded-lg border border-emerald-500/20 bg-emerald-500/[0.03] p-4 text-sm"
        >
          {lines.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              className="leading-relaxed"
            >
              <p className="text-emerald-300">{"> "}{l.label}</p>
              <p className="text-emerald-500/70">
                {bar(l.pct)} {l.pct}%
              </p>
            </motion.div>
          ))}
          {!finished && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block h-4 w-2 bg-emerald-400 align-middle"
            />
          )}
        </div>

        {/* live progress */}
        <div className="mt-4">
          <div className="mb-1 flex justify-between text-xs text-emerald-500/70">
            <span>Progreso del sistema</span>
            <span className="tabular-nums">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-emerald-500/15">
            <div className="h-full rounded-full bg-emerald-400 transition-[width] duration-150" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <AnimatePresence>
          {finished && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.04] p-6 text-center"
            >
              <Lock className="mx-auto mb-3 size-6 text-emerald-400" aria-hidden />
              <p className="text-xs uppercase tracking-widest text-emerald-500/70">Contraseña</p>
              <p className="mt-2 font-heading text-3xl font-bold tracking-[0.2em] text-emerald-300">DOCENTE2026</p>
              <button
                onClick={onComplete}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 text-base font-bold text-black transition active:scale-[0.98]"
              >
                Acceder
                <ArrowRight className="size-5" aria-hidden />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
