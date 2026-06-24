"use client"

import { useRouter } from "next/navigation"
import { Exp2Scanner } from "@/components/funnel/exp2-scanner"

export default function Page() {
  const router = useRouter()
  return <Exp2Scanner onComplete={() => router.push("/quiz")} />
}
