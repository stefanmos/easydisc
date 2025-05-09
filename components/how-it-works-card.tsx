"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface HowItWorksCardProps {
  step: number
  icon: ReactNode
  title: string
  description: string
}

export function HowItWorksCard({ step, icon, title, description }: HowItWorksCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: step * 0.1 }}
    >
      <Card className="h-full relative overflow-hidden border-2 hover:border-black/50 transition-colors">
        <div className="absolute top-0 left-0 bg-black text-white w-10 h-10 flex items-center justify-center font-bold rounded-br-lg">
          {step}
        </div>
        <CardHeader className="pt-12 pb-2 flex items-center">
          <div className="mb-2">{icon}</div>
          <h3 className="text-xl font-bold text-center">{title}</h3>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
