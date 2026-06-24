"use client"

import { WhatsAppChat } from "./whatsapp-chat"

const SCRIPT = [
  "Hola 😊",
  "Gracias por ver la presentación.",
  "Te quería hacer una pregunta rápida...",
  "¿Qué fue lo que más te llamó la atención?",
  "(...)",
  "Porque muchas docentes nos dicen algo parecido.",
  "Que no necesitan más ideas.",
  "Necesitan más tiempo.",
  "(...)",
  "Y ahí es donde suele aparecer el verdadero problema.",
  "Tener recursos no siempre significa tener organización.",
  "¿Te pasó alguna vez?",
  "(...)",
  "Te leo 👇",
]

export function Exp5WhatsApp({ onComplete }: { onComplete: () => void }) {
  return (
    <WhatsAppChat
      name="María"
      status="Coordinadora Académica"
      avatar="/avatar-maria.png"
      script={SCRIPT}
      ctaLabel="Acceder a la biblioteca privada"
      onComplete={onComplete}
    />
  )
}
