"use client"

import { Exp8Objections } from "@/components/funnel/exp8-objections"

export default function Page() {
  return (
    <Exp8Objections
      onComplete={() => {
        window.location.href = "https://nivel-inicial.tera-ventasonline.shop/"
      }}
    />
  )
}
