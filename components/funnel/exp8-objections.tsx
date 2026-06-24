"use client";

import { WhatsAppChat } from "./whatsapp-chat";

const SCRIPT = [
  "Bien, ahora te hago una pregunta sincera...",
  "¿Cuántos fines de semana más querés seguir entregando al trabajo?",
  "(...)",
  'Porque muchas docentes nos dicen: "No sé si vale la inversión."',
  "Y es totalmente entendible.",
  "(...)",
  "Pero también vale preguntarse...",
  "¿Cuánto vale recuperar horas durante todo el año?",
  "(...)",
  'Otras dicen: "Ya tengo materiales."',
  "Y es verdad.",
  "El problema nunca fue la falta de materiales.",
  "El problema es tenerlos dispersos.",
  "(...)",
  'También escuchamos: "No sé si la voy a usar."',
  "Justamente fue diseñada para simplificar.",
  "No para agregar trabajo.",
  "(...)",
  "Y quizás la pregunta más importante sea:",
  "¿Qué pasa si seguís exactamente igual dentro de seis meses?",
  "(...)",
  "Porque la decisión no es comprar una agenda.",
  "La decisión es seguir improvisando...",
  "O empezar a organizar el año de otra manera.",
];

export function Exp8Objections({ onComplete }: { onComplete: () => void }) {
  return (
    <WhatsAppChat
      name="María"
      status="Coordinadora Académica"
      avatar="/avatar-maria.png"
      script={SCRIPT}
      ctaLabel="¡Quiero mi Agenda Hoy!"
      onComplete={onComplete}
    />
  );
}
