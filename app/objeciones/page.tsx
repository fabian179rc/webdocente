"use client"

import { useRouter } from "next/navigation"
import { Exp8Objections } from "@/components/funnel/exp8-objections"

export default function Page() {
  const router = useRouter()
  return <Exp8Objections onComplete={() => router.push("/oferta")} />
}
