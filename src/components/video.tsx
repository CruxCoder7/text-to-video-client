import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

type VideoCard = {
  title: string
  video_url: string
  audio_url: string
  summary: string
}

export function Video(video: VideoCard) {
  return (
    <Card className="mb-4 bg-slate-500 text-white shadow-2xl hover:shadow-xl transition-shadow duration-200 ease-in-out border-0">
      <CardHeader className="bg-slate-400">
        <CardTitle className="text-white">{video.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row gap-4 mt-3">
        <video
          className="w-full md:w-1/2 h-auto"
          height="200"
          src={video.video_url}
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
          <audio className="w-full" src={video.audio_url} controls />
        </div>
      </CardContent>
    </Card>
  )
}
