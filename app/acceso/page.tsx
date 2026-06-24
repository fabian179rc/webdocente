"use client"

import { useRouter } from "next/navigation"
import { Exp6Login } from "@/components/funnel/exp6-login"

export default function Page() {
  const router = useRouter()
  return <Exp6Login onComplete={() => router.push("/feed")} />
}
