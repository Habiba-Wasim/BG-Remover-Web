// "use client"

// import type React from "react"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "../components/ui/button"
// import { Upload } from "lucide-react"

// export function UploadSection() {
//   const router = useRouter()
//   const [isDragging, setIsDragging] = useState(false)

//   const handleUpload = (file: File) => {
//     // Here you would handle the file upload
//     // For now, we'll just navigate to the editor
//     router.push("/editor")
//   }

//   const handleDragOver = (e: React.DragEvent) => {
//     e.preventDefault()
//     setIsDragging(true)
//   }

//   const handleDragLeave = () => {
//     setIsDragging(false)
//   }

//   const handleDrop = (e: React.DragEvent) => {
//     e.preventDefault()
//     setIsDragging(false)
//     const file = e.dataTransfer.files[0]
//     if (file) {
//       handleUpload(file)
//     }
//   }

//   return (
//     <div
//       className={`bg-white rounded-lg p-8 shadow-sm border-2 transition-colors
//         ${isDragging ? "border-purple-400 bg-purple-50" : "border-dashed border-gray-200"}`}
//       onDragOver={handleDragOver}
//       onDragLeave={handleDragLeave}
//       onDrop={handleDrop}
//     >
//       <div className="text-center space-y-4">
//         <Button
//           size="lg"
//           className="w-full text-lg py-6 bg-purple-600 hover:bg-purple-700"
//           onClick={() => document.getElementById("file-upload")?.click()}
//         >
//           <Upload className="w-5 h-5 mr-2" />
//           Upload Image
//         </Button>
//         <input
//           id="file-upload"
//           type="file"
//           className="hidden"
//           accept="image/*"
//           onChange={(e) => {
//             const file = e.target.files?.[0]
//             if (file) handleUpload(file)
//           }}
//         />
//         <p className="text-gray-500">
//           or drop a file,
//           <br />
//           paste image or <span className="text-purple-600">URL</span>
//         </p>
//       </div>
//       <div className="mt-8">
//         <p className="text-sm text-gray-500 mb-4">Try with sample images:</p>
//         <div className="grid grid-cols-4 gap-2">
//           {[1, 2, 3, 4].map((i) => (
//             <button
//               key={i}
//               className="w-20 h-20 rounded overflow-hidden hover:ring-2 ring-purple-400 transition-all"
//               onClick={() => router.push("/editor")}
//             >
//               <img
//                 src="/placeholder.svg?height=80&width=80"
//                 alt={`Sample ${i}`}
//                 className="w-full h-full object-cover"
//               />
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }




"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";
import { Upload } from "lucide-react";

export function UploadSection() {
  const router = useRouter();
  const [isDragging, setIsDragging] = React.useState(false);

  const handleUpload = (_file: File) => {
    // ✅ Fixed unused variable error by renaming `file` to `_file`
    router.push("/editor");
  };

  return (
    <div className="p-8 border-2 border-dashed rounded-lg text-center">
      <Button onClick={() => document.getElementById("file-upload")?.click()}>
        <Upload className="w-5 h-5 mr-2" />
        Upload Image
      </Button>
      <input id="file-upload" type="file" className="hidden" accept="image/*" onChange={(e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) handleUpload(selectedFile);
      }} />
    </div>
  );
}
