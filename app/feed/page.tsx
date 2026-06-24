"use client"

import { useRouter } from "next/navigation"
import { Exp7Feed } from "@/components/funnel/exp7-feed"

export default function Page() {
  const router = useRouter()
  return <Exp7Feed onComplete={() => router.push("/objeciones")} />
}
