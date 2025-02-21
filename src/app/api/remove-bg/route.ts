import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const image = formData.get("image") as Blob
    const quality = formData.get("quality") as string

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 })
    }

    const apiKey = process.env.REMOVE_BG_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 })
    }

    // Convert image to base64
    const buffer = await image.arrayBuffer()
    const base64Image = Buffer.from(buffer).toString("base64")

    // Call remove.bg API
    const response = await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": apiKey,
      },
      body: JSON.stringify({
        image: base64Image,
        size: quality === "4k" ? "full" : quality === "hd" ? "auto" : "preview",
        type: "auto",
        format: "png",
        scale: "original",
      }),
    })

    if (!response.ok) {
      throw new Error(`Failed to remove background: ${response.statusText}`)
    }

    const data = await response.arrayBuffer()
    const base64 = Buffer.from(data).toString("base64")

    return NextResponse.json({
      image: `data:image/png;base64,${base64}`,
    })
  } catch (error) {
    console.error("Background removal error:", error)
    return NextResponse.json({ error: "Failed to process image" }, { status: 500 })
  }
}

