"use client"

import { motion } from "framer-motion"
import { Zap, Image, Download } from "lucide-react"

const features = [
  {
    icon: <Zap className="w-12 h-12 text-yellow-500" />,
    title: "Lightning Fast",
    description: "Remove backgrounds in seconds with our advanced AI technology.",
  },
  {
    icon: <Image className="w-12 h-12 text-green-500" />,
    title: "High Quality Results",
    description: "Get high-resolution images with perfectly cut-out subjects.",
  },
  {
    icon: <Download className="w-12 h-12 text-blue-500" />,
    title: "Easy Download",
    description: "Download your processed images in various formats with one click.",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

