"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Music2,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

type Reel = {
  handle: string;
  text: string[];
  desc?: string;
  image: string;
  likes: string;
};

const REELS: Reel[] = [
  {
    handle: "@DocentesQueNoLoDicen",
    text: ["La jornada no termina", "cuando salen los alumnos."],
    desc: "Miles de docentes siguen trabajando cuando todos creen que ya terminaron.",
    image: "/feed-1.png",
    likes: "12.4k",
  },
  {
    handle: "@VidaDocenteReal",
    text: [
      "No estás cansada de enseñar.",
      "Estás cansada de sostener el caos.",
    ],
    image: "/feed-2.png",
    likes: "9.8k",
  },
  {
    handle: "@AulaConOrden",
    text: [
      "Más organización.",
      "Menos improvisación.",
      "Más presencia en el aula.",
    ],
    image: "/feed-3.png",
    likes: "15.1k",
  },
  {
    handle: "@HistoriasDocentes",
    text: ["Historias reales.", "Resultados reales."],
    image: "/feed-4.png",
    likes: "21.7k",
  },
  {
    handle: "@NuevaRutinaDocente",
    text: ["Eso ocurre cuando", "dejás de improvisar."],
    desc: "La tranquilidad también se planifica.",
    image: "/feed-5.png",
    likes: "18.3k",
  },
];

export function Exp7Feed({ onComplete }: { onComplete: () => void }) {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollTop / el.clientHeight);
    setActive(idx);
  };

  return (
    <div className="relative h-dvh w-full bg-black">
      <div
        ref={containerRef}
        onScroll={onScroll}
        className="no-scrollbar h-dvh w-full snap-y snap-mandatory overflow-y-scroll"
      >
        {REELS.map((reel, i) => (
          <ReelView
            key={reel.handle}
            reel={reel}
            index={i}
            total={REELS.length}
            active={active === i}
            onComplete={onComplete}
          />
        ))}
      </div>

      {/* swipe hint */}
      {active === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4], y: [0, -6, 0] }}
          transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
          className="pointer-events-none absolute inset-x-0 bottom-24 z-20 flex flex-col items-center text-white/70"
        >
          <ChevronUp className="size-5" aria-hidden />
          <span className="text-xs">Deslizá</span>
        </motion.div>
      )}
    </div>
  );
}

function ReelView({
  reel,
  index,
  total,
  active,
  onComplete,
}: {
  reel: Reel;
  index: number;
  total: number;
  active: boolean;
  onComplete: () => void;
}) {
  const [liked, setLiked] = useState(false);
  const isLast = index === total - 1;

  return (
    <section className="relative flex h-dvh w-full snap-start snap-always items-center justify-center overflow-hidden bg-black px-3 py-4">
      <div className="relative h-[92vh] w-full max-w-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
        <Image
          src={reel.image || "/placeholder.svg"}
          alt=""
          fill
          className="absolute inset-0 h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, 420px"
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/4g-U9ixPzk0?autoplay=1&controls=0&modestbranding=1&rel=0&disablekb=1&fs=0&iv_load_policy=3"
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="pointer-events-none absolute inset-0 h-full w-full border-0"
            />
            <div className="absolute inset-0 z-[1] pointer-events-none" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />
        </div>

        {/* progress segments */}
        <div className="absolute inset-x-0 top-3 z-10 flex gap-1 px-3">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/25"
            >
              <div
                className={`h-full rounded-full bg-white ${i <= index ? "w-full" : "w-0"}`}
              />
            </div>
          ))}
        </div>

        {/* right actions */}
        <div className="absolute bottom-28 right-3 z-10 flex flex-col items-center gap-5 text-white">
          <button
            onClick={() => setLiked((v) => !v)}
            className="flex flex-col items-center gap-1"
            aria-label="Me gusta"
          >
            <Heart
              className={`size-7 ${liked ? "fill-red-500 text-red-500" : ""}`}
              aria-hidden
            />
            <span className="text-xs">{reel.likes}</span>
          </button>
          <div className="flex flex-col items-center gap-1">
            <MessageCircle className="size-7" aria-hidden />
            <span className="text-xs">328</span>
          </div>
          <Send className="size-7" aria-hidden />
          <Bookmark className="size-7" aria-hidden />
        </div>

        {/* bottom content */}
        <div className="relative z-10 w-full px-4 pb-10 pr-20 text-white">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-tr from-accent to-primary text-sm font-bold">
              {reel.handle.charAt(1).toUpperCase()}
            </div>
            <span className="text-sm font-semibold">{reel.handle}</span>
            <span className="rounded-md border border-white/40 px-2 py-0.5 text-[11px]">
              Seguir
            </span>
          </div>

          <div className="space-y-1">
            {reel.text.map((t, i) => (
              <p
                key={i}
                className="font-heading text-2xl font-bold leading-tight text-balance drop-shadow"
              >
                {t}
              </p>
            ))}
          </div>
          {reel.desc && (
            <p className="mt-3 max-w-xs text-sm text-white/80 text-pretty">
              {reel.desc}
            </p>
          )}

          <div className="mt-3 flex items-center gap-2 text-xs text-white/70">
            <Music2 className="size-3.5" aria-hidden />
            <span className="truncate">Audio original · {reel.handle}</span>
          </div>

          {isLast && (
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={active ? { opacity: 1, y: 0 } : {}}
              onClick={onComplete}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-black shadow-lg transition active:scale-[0.98]"
            >
              Continuar
              <ArrowRight className="size-4" aria-hidden />
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}
