"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { useToast } from "../components/ui/use-toast"
import { Upload, Download, Wand2 } from "lucide-react"

export function ImageUploader() {
  const [image, setImage] = useState<string | null>(null)
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [selectedQuality, setSelectedQuality] = useState("hd")
  const { toast } = useToast()

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image under 10MB",
        variant: "destructive",
      })
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      setImage(e.target?.result as string)
      setProcessedImage(null)
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveBackground = async () => {
    if (!image) return

    setIsProcessing(true)
    try {
      const formData = new FormData()
      formData.append("image", await fetch(image).then((r) => r.blob()))
      formData.append("quality", selectedQuality)

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
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-grow">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            {!image ? (
              <div className="h-[400px] flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
                <div className="text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">Drag and drop or click to upload</p>
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Button onClick={() => document.getElementById("image-upload")?.click()} className="mt-2">
                    Select Image
                  </Button>
                </div>
              </div>
            ) : (
              <div className="relative h-[400px]">
                <img src={processedImage || image} alt="Uploaded" className="w-full h-full object-contain" />
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-64 space-y-4">
          <Button onClick={handleRemoveBackground} disabled={!image || isProcessing} className="w-full">
            <Wand2 className="mr-2 h-4 w-4" />
            {isProcessing ? "Processing..." : "Remove Background"}
          </Button>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-medium mb-2">Quality Options</h3>
            <div className="space-y-2">
              {["standard", "hd", "4k"].map((quality) => (
                <Button
                  key={quality}
                  variant={selectedQuality === quality ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setSelectedQuality(quality)}
                >
                  {quality.toUpperCase()} Quality
                </Button>
              ))}
            </div>
          </div>

          {processedImage && (
            <Button
              onClick={() => {
                const link = document.createElement("a")
                link.href = processedImage
                link.download = "removed-background.png"
                link.click()
              }}
              className="w-full"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

