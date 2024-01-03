"use client"
import { useEffect, useState } from "react"

import { ThreeDots } from "react-loader-spinner"
import { Poppins } from "next/font/google"

const PoppinsFont = Poppins({ weight: "400", subsets: ["devanagari"] })

export default function ResultPage() {
  const [data, setData] = useState("")
  const [audio, setAudio] = useState("")
  const [video, setVideo] = useState("")
  const [summary, setSummary] = useState("")

  useEffect(() => {
    const eventSource = new EventSource(
      "http://test-akash.eastus.cloudapp.azure.com/api/process/pdf"
    )

    eventSource.onmessage = (event) => {
      console.log(event.data)
      setData(() => {
        if (event.data.startsWith("audio")) {
          const audio = event.data.split("audio")[1]
          console.log(audio)
          setAudio(audio)
          return ""
        }
        if (event.data.startsWith("video")) {
          const video = event.data.split("video")[1]
          console.log(video)
          setVideo(video)
          return ""
        }
        if (event.data.startsWith("summary")) {
          const summary = event.data.split("summary")[1]
          console.log(summary)
          setSummary(summary)
          return ""
        }
        return event.data
      })
    }

    eventSource.onerror = () => {
      console.log("Server Closed Conn")
      eventSource.close()
    }
  }, [])

  return (
    <div className="w-full flex min-h-screen justify-center p-20 items-center">
      <div className="flex flex-col items-center justify-center ">
        <ThreeDots
          height="120"
          width="120"
          radius="9"
          color="#818cf8"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={video === ""}
        />
        <p className="text-white -mt-7">{data}</p>
        <div className="flex w-full justify-around items-center">
          {video !== "" && (
            <div className="flex flex-col gap-5">
              <h2
                className={`${PoppinsFont.className} text-center text-white text-3xl underline`}
              >
                Video
              </h2>
              <video src={video} controls height={500} width={500} />
            </div>
          )}
          {audio !== "" && (
            <div className="flex flex-col gap-5">
              <h2
                className={`${
                  PoppinsFont.className
                } text-center text-white text-3xl underline ${
                  video !== "" && "mt-10"
                }`}
              >
                Audio
              </h2>
              <audio src={audio} controls />
            </div>
          )}
        </div>
        <div className="mt-20 w-[70%] flex flex-col gap-5">
          {summary !== "" && (
            <>
              <h2
                className={`${PoppinsFont.className} text-center text-white text-3xl underline`}
              >
                Summary
              </h2>
              <p className={`text-white ${PoppinsFont.className}`}>{summary}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
