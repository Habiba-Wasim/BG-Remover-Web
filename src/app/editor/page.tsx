"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { useToast } from "../components/ui/use-toast"
import { Download, Upload, ExternalLink, ImageIcon, Wand2 } from "lucide-react"
import Link from "next/link"

export default function Editor() {
  const [image, setImage] = useState<string | null>(null)
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image under 5MB",
        variant: "destructive",
      })
      return
    }

    setImage(URL.createObjectURL(file))
    setProcessedImage(null)
  }

  const handleRemoveBackground = async () => {
    if (!image) return

    setIsProcessing(true)
    try {
      const formData = new FormData()
      formData.append("image", await fetch(image).then((r) => r.blob()))

      const response = await fetch("/api/remove-bg", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) throw new Error("Failed to remove background")

      const result = await response.json()
      setProcessedImage(result.image)
      toast({
        title: "Success",
        description: "Background removed successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to remove background",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Main Editor Area */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            {!image ? (
              <div className="h-[500px] flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ImageIcon className="w-8 h-8 text-purple-600" />
                  </div>
                  <Button
                    onClick={() => document.getElementById("image-upload")?.click()}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Image
                  </Button>
                  <input
                    id="image-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  <p className="mt-2 text-sm text-gray-500">or drag and drop</p>
                </div>
              </div>
            ) : (
              <div className="relative h-[500px]">
                <img src={processedImage || image} alt="Editor" className="w-full h-full object-contain" />
              </div>
            )}
          </div>

          {/* Sidebar Controls */}
          <div className="space-y-4">
            <Button className="w-full gap-2" onClick={handleRemoveBackground} disabled={!image || isProcessing}>
              <Wand2 className="w-4 h-4" />
              {isProcessing ? "Processing..." : "Remove Background"}
            </Button>

            {processedImage && (
              <Button
                className="w-full gap-2 bg-green-600 hover:bg-green-700"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = processedImage
                  link.download = "removed-background.png"
                  link.click()
                }}
              >
                <Download className="w-4 h-4" />
                Download
              </Button>
            )}

            <Button variant="outline" className="w-full gap-2" asChild>
              <Link href="https://www.canva.com" target="_blank">
                <ExternalLink className="w-4 h-4" />
                Edit in Canva
              </Link>
            </Button>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">Quality Options</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  HD Quality
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  4K Quality
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Original Size
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

