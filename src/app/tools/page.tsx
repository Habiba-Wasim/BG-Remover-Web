import Link from "next/link"
import { Button } from "../components/ui/button"
import { ImageIcon, VideoIcon, FileIcon, PenToolIcon } from "lucide-react"

const tools = [
  {
    title: "Background Remover",
    description: "Remove background from images instantly using AI",
    icon: ImageIcon,
    href: "/editor",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Video Background Remover",
    description: "Remove background from videos with precision",
    icon: VideoIcon,
    href: "/video-editor",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Batch Processing",
    description: "Process multiple images at once",
    icon: FileIcon,
    href: "/batch",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Manual Editor",
    description: "Fine-tune your images with precision tools",
    icon: PenToolIcon,
    href: "/manual-editor",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
]

export default function Tools() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Tools</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div key={tool.title} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 ${tool.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <tool.icon className={`w-6 h-6 ${tool.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <Button asChild variant="outline" className="w-full">
                <Link href={tool.href}>Try Now</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

