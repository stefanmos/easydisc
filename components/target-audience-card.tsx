"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TargetAudienceCardProps {
  title: string
  description: string
  icon: ReactNode
}

export function TargetAudienceCard({ title, description, icon }: TargetAudienceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full border-2 hover:border-primary/50 transition-colors">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="bg-black/10 p-3 rounded-full">{icon}</div>
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
