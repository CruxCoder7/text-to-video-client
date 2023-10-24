"use client"
import { useEffect, useState } from "react"

import { ThreeDots } from "react-loader-spinner"

// data:audio/wav;base64,${audio}

export default function ResultPage() {
  const [data, setData] = useState("")

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:5000/process/pdf")

    eventSource.onmessage = (event) => {
      console.log(event.data)
      setData(event.data)
    }

    eventSource.onerror = () => {
      console.log("Server Closed Conn")
      eventSource.close()
    }
  }, [])

  return (
    <div className="w-full flex h-screen justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <ThreeDots
          height="120"
          width="120"
          radius="9"
          color="#818cf8"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={data !== "DONE!"}
        />
        <p className="text-white -mt-7">{data}...</p>
      </div>
    </div>
  )
}
