"use client"

import { Check, X } from "lucide-react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function ComparisonTable() {
  const features = [
    { name: "100% Online Process", easydisc: true, traditional: false },
    { name: "Home/Office Delivery", easydisc: true, traditional: false },
    { name: "Business & Fleet Support", easydisc: true, traditional: false },
    { name: "Tracking & Notifications", easydisc: true, traditional: false },
    { name: "Waiting in Queues", easydisc: false, traditional: true },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left font-medium text-muted-foreground">Feature</th>
                <th className="px-6 py-4 text-center bg-black/10 font-bold">Easydisc</th>
                <th className="px-6 py-4 text-center font-medium">Traditional Renewal</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="px-6 py-4 font-medium">{feature.name}</td>
                  <td className="px-6 py-4 text-center bg-black/5">
                    {feature.easydisc ? (
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {feature.traditional ? (
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </motion.div>
  )
}
