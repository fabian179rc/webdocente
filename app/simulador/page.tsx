"use client"

import { useRouter } from "next/navigation"
import { Exp4Simulator } from "@/components/funnel/exp4-simulator"

export default function Page() {
  const router = useRouter()
  return <Exp4Simulator onComplete={() => router.push("/presentacion")} />
}
