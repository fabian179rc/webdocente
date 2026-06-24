"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { ArrowLeft, Phone, Video, MoreVertical, Check, CheckCheck } from "lucide-react"

type Bubble = { id: number; text: string }

interface WhatsAppChatProps {
  name: string
  status: string
  avatar: string
  /** Each item is a message. Use "(...)" to add an extra typing pause. */
  script: string[]
  ctaLabel: string
  onComplete: () => void
}

export function WhatsAppChat({ name, status, avatar, script, ctaLabel, onComplete }: WhatsAppChatProps) {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [typing, setTyping] = useState(true)
  const [done, setDone] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const idRef = useRef(0)

  useEffect(() => {
    let cancelled = false
    const timers: ReturnType<typeof setTimeout>[] = []

    const run = async () => {
      const wait = (ms: number) =>
        new Promise<void>((resolve) => {
          const t = setTimeout(resolve, ms)
          timers.push(t)
        })

      await wait(900)
      for (const line of script) {
        if (cancelled) return
        if (line.trim() === "(...)") {
          setTyping(true)
          await wait(1600)
          continue
        }
        setTyping(true)
        await wait(Math.min(2200, 700 + line.length * 28))
        if (cancelled) return
        setTyping(false)
        idRef.current += 1
        setBubbles((prev) => [...prev, { id: idRef.current, text: line }])
        await wait(500)
      }
      if (cancelled) return
      setTyping(false)
      setDone(true)
    }

    run()
    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [script])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [bubbles, typing, done])

  return (
    <div className="flex h-dvh w-full flex-col bg-[#0b141a]">
      {/* Header */}
      <header className="flex items-center gap-3 bg-[#1f2c34] px-3 py-2.5 text-white">
        <ArrowLeft className="size-5 shrink-0 text-white/80" aria-hidden />
        <div className="relative size-10 overflow-hidden rounded-full">
          <Image src={avatar || "/placeholder.svg"} alt={name} fill className="object-cover" sizes="40px" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold leading-tight">{name}</p>
          <p className="truncate text-xs text-white/60">{status}</p>
        </div>
        <Video className="size-5 text-white/70" aria-hidden />
        <Phone className="size-5 text-white/70" aria-hidden />
        <MoreVertical className="size-5 text-white/70" aria-hidden />
      </header>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="no-scrollbar flex-1 overflow-y-auto px-3 py-4"
        style={{
          backgroundColor: "#0b141a",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.02) 0, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.02) 0, transparent 40%)",
        }}
      >
        <div className="mx-auto flex max-w-md flex-col gap-1.5">
          <div className="mx-auto mb-3 rounded-md bg-[#1f2c34]/80 px-3 py-1 text-center text-[11px] text-white/60">
            Los mensajes están cifrados de extremo a extremo
          </div>
          <AnimatePresence initial={false}>
            {bubbles.map((b) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="flex"
              >
                <div className="relative max-w-[80%] rounded-xl rounded-tl-sm bg-[#202c33] px-3 py-2 text-[15px] leading-snug text-white shadow-sm">
                  <p className="whitespace-pre-line text-pretty">{b.text}</p>
                  <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-white/40">
                    {timeNow()}
                    <CheckCheck className="size-3 text-sky-400" aria-hidden />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {typing && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex"
            >
              <div className="flex items-center gap-1 rounded-xl rounded-tl-sm bg-[#202c33] px-4 py-3">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="size-2 rounded-full bg-white/50"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.18 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* CTA footer */}
      <footer className="bg-[#1f2c34] p-3">
        <AnimatePresence mode="wait">
          {done ? (
            <motion.button
              key="cta"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={onComplete}
              className="w-full rounded-full bg-[#25d366] px-5 py-3.5 text-center text-base font-semibold text-[#0b141a] shadow-lg transition active:scale-[0.98]"
            >
              {ctaLabel}
            </motion.button>
          ) : (
            <div
              key="placeholder"
              className="flex items-center gap-2 rounded-full bg-[#2a3942] px-4 py-3 text-sm text-white/40"
            >
              <Check className="size-4" aria-hidden />
              María está escribiendo…
            </div>
          )}
        </AnimatePresence>
      </footer>
    </div>
  )
}

function timeNow() {
  const d = new Date()
  return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`
}
