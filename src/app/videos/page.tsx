import React, { useEffect, useState } from "react"

type Video = {
  id: string
  content: string
  title: string
  video_url: string
  audio_url: string
  images: string[]
  enhanced_images: string[]
}

export default function VideosPage() {
  const [video, setVideo] = useState<Video[]>([])

  useEffect(() => {}, [])

  return <div>VideosPage</div>
}
