"use client"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { useState } from "react"
import { Video_audio_url, Video_video_url } from "../types/video"

type VideoCard = {
  title: string
  video_url: Video_video_url
  audio_url: Video_audio_url
  summary: string
}

export function Video(video: VideoCard) {
  const [currLang, setCurrLang] = useState("English")

  const handleVersionChange = () => {
    setCurrLang((prev) => {
      if (prev === "English") return "Tamil"
      return "English"
    })
  }

  return (
    <Card className="mb-4 bg-slate-500 text-white shadow-2xl hover:shadow-xl transition-shadow duration-200 ease-in-out border-0">
      <CardHeader className="bg-slate-400">
        <CardTitle className="text-white">{video.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row gap-4 mt-3">
        <video
          className="w-full md:w-1/2 h-auto"
          height="200"
          src={
            currLang === "English"
              ? video.video_url.english
              : (video.video_url.tamil as string)
          }
          style={{
            aspectRatio: "350/200",
            objectFit: "cover",
          }}
          width="350"
          controls
        />
        <div className="space-y-8">
          <h3 className="text-white font-semibold text-lg">Summary</h3>
          <p className="text-white mb-2">{video.summary}</p>
          <h3 className="text-white font-semibold text-lg">Audio</h3>
          <audio
            className="w-full"
            src={
              currLang === "English"
                ? video.audio_url.english
                : (video.audio_url.tamil as string)
            }
            controls
          />

          {video.video_url.tamil && (
            <button onClick={handleVersionChange}>
              Click for {currLang === "English" ? "Tamil" : "English"} Version
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
