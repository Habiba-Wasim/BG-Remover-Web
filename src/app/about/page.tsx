import Image from "next/image"
import { Button } from "../components/ui/button"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About BG Remover Pro</h1>
          <p className="text-xl text-gray-600">
            We're on a mission to make professional image editing accessible to everyone
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2025, BG Remover Pro has helped millions of users remove backgrounds from their images. Our
              AI-powered technology makes it easy for anyone to achieve professional results in seconds.
            </p>
            <Button asChild>
              <Link href="/signup">Join Us Today</Link>
            </Button>
          </div>
          <div className="relative h-[300px]">
            <Image src="/placeholder.svg" alt="About Us" fill className="object-cover rounded-lg" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To make professional image editing accessible to everyone through AI-powered tools.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Our Technology</h3>
            <p className="text-gray-600">
              We use cutting-edge AI and machine learning to deliver the best results possible.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Our Promise</h3>
            <p className="text-gray-600">High-quality results, fast processing, and excellent customer support.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

