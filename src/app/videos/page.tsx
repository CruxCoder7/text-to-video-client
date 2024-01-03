import { Video } from "@/components/video"

export type Video_video_url = {
  english: string
  tamil: string | null
  hindi: string | null
  telugu: string | null
  malayalam: string | null
}

export type Video_audio_url = Video_video_url

type VideoType = {
  id: string
  content: string
  title: string
  video_url: Video_video_url
  audio_url: Video_audio_url
  images: string[]
  enhanced_images: string[]
}

export default async function Component() {
  const response = await fetch(
    "http://test-akash.eastus.cloudapp.azure.com/api/videos",
    {
      cache: "no-store",
    }
  )

  const video: VideoType[] = await response.json()
  console.log(video.length)

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      {video.map((video) => (
        <Video
          summary={video.content}
          title={video.title}
          audio_url={video.audio_url}
          video_url={video.video_url}
        />
      ))}
    </div>
  )
}
