"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function Hero() {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
              <span>Home</span>
              <span>›</span>
              <span>Tools</span>
              <span>›</span>
              <span className="text-gray-900">Remove Background</span>
            </nav>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Remove Background from Images Instantly
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Remove background from images automatically using AI technology. Get perfect results in seconds.
            </p>
            <motion.button
              onClick={() => router.push("/editor")}
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Editing Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-21%20011437-3Mh719UWS6Er6uo9CJXdTtbtLcBrX5.png"
              alt="Background Removal Demo"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

