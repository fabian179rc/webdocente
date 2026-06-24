"use client"

import { useRouter } from "next/navigation"
import { Exp4Vsl } from "@/components/funnel/exp4-vsl"

export default function Page() {
  const router = useRouter()
  return <Exp4Vsl onComplete={() => router.push("/whatsapp")} />
}
