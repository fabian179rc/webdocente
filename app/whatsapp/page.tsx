"use client"

import { useRouter } from "next/navigation"
import { Exp5WhatsApp } from "@/components/funnel/exp5-whatsapp"

export default function Page() {
  const router = useRouter()
  return <Exp5WhatsApp onComplete={() => router.push("/acceso")} />
}
