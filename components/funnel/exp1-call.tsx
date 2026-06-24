"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Phone, PhoneOff, Mic, Volume2, Grid3x3 } from "lucide-react";

type Phase = "incoming" | "active" | "ending";

export function Exp1Call({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>("incoming");
  const [seconds, setSeconds] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const vibrationContextRef = useRef<AudioContext | null>(null);
  const vibrationTimeoutRef = useRef<number | null>(null);
  const vibrationIntervalRef = useRef<number | null>(null);
  const endCallDelayRef = useRef<number | null>(null);
  const endCallTimeoutRef = useRef<number | null>(null);

  // Tick the call timer while the call is active
  useEffect(() => {
    if (phase !== "active") return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "incoming") {
      if (vibrationTimeoutRef.current) {
        window.clearTimeout(vibrationTimeoutRef.current);
        vibrationTimeoutRef.current = null;
      }
      if (vibrationIntervalRef.current) {
        window.clearInterval(vibrationIntervalRef.current);
        vibrationIntervalRef.current = null;
      }
      return;
    }

    const playVibrationTone = () => {
      const AudioContextCtor =
        window.AudioContext ||
        (window as Window & { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioContextCtor) return;

      const context = vibrationContextRef.current ?? new AudioContextCtor();
      vibrationContextRef.current = context;

      if (context.state === "suspended") {
        void context.resume();
      }

      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(780, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        620,
        context.currentTime + 0.12,
      );

      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.008, context.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        context.currentTime + 0.12,
      );

      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.12);
    };

    playVibrationTone();
    vibrationTimeoutRef.current = window.setTimeout(playVibrationTone, 1400);
    vibrationIntervalRef.current = window.setInterval(playVibrationTone, 1800);

    return () => {
      if (vibrationTimeoutRef.current) {
        window.clearTimeout(vibrationTimeoutRef.current);
        vibrationTimeoutRef.current = null;
      }
      if (vibrationIntervalRef.current) {
        window.clearInterval(vibrationIntervalRef.current);
        vibrationIntervalRef.current = null;
      }
    };
  }, [phase]);

  useEffect(() => {
    return () => {
      if (endCallDelayRef.current) {
        window.clearTimeout(endCallDelayRef.current);
      }
      if (endCallTimeoutRef.current) {
        window.clearTimeout(endCallTimeoutRef.current);
      }
      if (
        vibrationContextRef.current &&
        vibrationContextRef.current.state !== "closed"
      ) {
        void vibrationContextRef.current.close();
      }
    };
  }, []);

  const handleAnswer = () => {
    setPhase("active");
    // Start the call audio; the call lasts as long as the audio
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      void audio.play().catch(() => {});
    }
  };

  const handleAudioEnded = () => {
    if (endCallDelayRef.current) {
      window.clearTimeout(endCallDelayRef.current);
    }
    if (endCallTimeoutRef.current) {
      window.clearTimeout(endCallTimeoutRef.current);
    }

    endCallDelayRef.current = window.setTimeout(() => {
      setPhase("ending");
    }, 1000);

    endCallTimeoutRef.current = window.setTimeout(() => {
      onComplete();
    }, 2500);
  };

  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");

  return (
    <div className="relative flex h-dvh w-full flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#10151c] via-[#0c1118] to-[#070a0e] px-6 py-12 text-white">
      <audio
        ref={audioRef}
        src="/audio-llamada.mp3"
        onEnded={handleAudioEnded}
        preload="auto"
      />
      <AnimatePresence>
        {phase === "ending" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 bg-[#06080d]/70 backdrop-blur-[1px]"
          />
        )}
      </AnimatePresence>

      {/* Top label */}
      <div className="flex flex-col items-center gap-1 pt-6 text-center">
        {phase === "incoming" ? (
          <motion.p
            animate={{ opacity: [1, 0.45, 1] }}
            transition={{
              duration: 1.6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="text-sm font-medium tracking-wide text-emerald-400"
          >
            Llamada entrante
          </motion.p>
        ) : phase === "ending" ? (
          <p className="text-sm font-medium tracking-wide text-rose-400">
            Llamada finalizada
          </p>
        ) : (
          <p className="text-sm font-medium tracking-wide text-white/50">
            Conectado
          </p>
        )}
        {phase === "active" && (
          <p className="font-mono text-sm text-emerald-400/90 tabular-nums">
            {mins}:{secs}
          </p>
        )}
      </div>

      {/* Avatar */}
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative flex size-64 items-center justify-center">
          {/* Two soft green waves radiating from the photo (only while ringing) */}
          {phase === "incoming" &&
            [0, 1].map((i) => (
              <motion.span
                key={i}
                className="absolute size-40 rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30"
                animate={{ scale: [1, 1.65], opacity: [0.45, 0] }}
                transition={{
                  duration: 2.6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeOut",
                  delay: i * 1.3,
                }}
              />
            ))}
          <div
            className={`relative size-40 overflow-hidden rounded-full shadow-2xl ${
              phase === "ending"
                ? "ring-4 ring-rose-400/50"
                : "ring-4 ring-emerald-400/40"
            }`}
          >
            <Image
              src="/avatar-docente.jpeg"
              alt="Docente Nivel Inicial"
              fill
              className={`object-cover ${phase === "ending" ? "brightness-50 saturate-50" : ""}`}
              sizes="160px"
              priority
            />
            {phase === "ending" && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-rose-500/20 backdrop-blur-[1px]">
                <div className="flex size-12 items-center justify-center rounded-full bg-rose-500/80 shadow-lg">
                  <PhoneOff className="size-6" aria-hidden />
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-rose-100/90">
                  Cortada
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="text-center">
          <h1 className="font-heading text-2xl font-semibold">Marce</h1>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full max-w-sm pb-4">
        <AnimatePresence mode="wait">
          {phase === "incoming" ? (
            <motion.div
              key="incoming"
              exit={{ opacity: 0 }}
              className="flex items-center justify-center px-6 pt-10"
            >
              <button
                onClick={handleAnswer}
                className="flex flex-col items-center gap-2"
                aria-label="Responder llamada"
              >
                <motion.span
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{
                    duration: 1.2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="flex size-16 items-center justify-center rounded-full bg-emerald-500 shadow-lg active:scale-95"
                >
                  <Phone className="size-7" aria-hidden />
                </motion.span>
                <span className="text-xs text-white/60">Responder</span>
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="active"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="grid w-full grid-cols-3 gap-y-6">
                <CallControl
                  icon={<Mic className="size-6" />}
                  label="Silenciar"
                />
                <CallControl
                  icon={<Volume2 className="size-6" />}
                  label="Altavoz"
                />
                <CallControl
                  icon={<Grid3x3 className="size-6" />}
                  label="Teclado"
                />
              </div>
              <div className="flex flex-col items-center gap-2" aria-hidden>
                <span className="flex size-16 items-center justify-center rounded-full bg-red-500/60 shadow-lg">
                  <PhoneOff className="size-7" aria-hidden />
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function CallControl({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2" aria-hidden>
      <span className="flex size-14 items-center justify-center rounded-full bg-white/10 text-white/40 backdrop-blur">
        {icon}
      </span>
      <span className="text-xs text-white/40">{label}</span>
    </div>
  );
}
