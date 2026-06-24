"use client"

import { useRouter } from "next/navigation"
import { Exp3Quiz } from "@/components/funnel/exp3-quiz"

export default function Page() {
  const router = useRouter()
  return <Exp3Quiz onComplete={() => router.push("/simulador")} />
}
