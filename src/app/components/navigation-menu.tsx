"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../components/ui/button"
import { ChevronDown } from "lucide-react"

export function NavigationMenu() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded"></div>
              <span className="font-semibold text-xl">BG Remove</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/editor"
                className={`text-gray-600 hover:text-gray-900 ${pathname === "/editor" ? "text-purple-600" : ""}`}
              >
                Remove Background
              </Link>
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                  Features
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-2 py-2">
                  <Link href="/features/batch" className="block px-4 py-2 hover:bg-purple-50">
                    Batch Processing
                  </Link>
                  <Link href="/features/api" className="block px-4 py-2 hover:bg-purple-50">
                    API Access
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                  Tools
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-2 py-2">
                  <Link href="/tools/compress" className="block px-4 py-2 hover:bg-purple-50">
                    Compress Image
                  </Link>
                  <Link href="/tools/convert" className="block px-4 py-2 hover:bg-purple-50">
                    Convert Format
                  </Link>
                </div>
              </div>
              <Link
                href="/pricing"
                className={`text-gray-600 hover:text-gray-900 ${pathname === "/pricing" ? "text-purple-600" : ""}`}
              >
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

