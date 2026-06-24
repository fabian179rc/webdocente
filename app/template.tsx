"use client"

import type { ReactNode } from "react"
import { motion } from "motion/react"

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.main
      className="min-h-dvh w-full bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </motion.main>
  )
}
