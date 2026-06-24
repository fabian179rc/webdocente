"use client"

import { useRouter } from "next/navigation"
import { Exp1Call } from "@/components/funnel/exp1-call"

export default function Page() {
  const router = useRouter()
  return <Exp1Call onComplete={() => router.push("/escaner")} />
}
