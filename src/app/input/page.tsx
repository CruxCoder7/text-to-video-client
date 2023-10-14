"use client"
import Heading from "@/components/Heading"
import UploadButton from "@/components/UploadButton"
import { useState } from "react"

export default function Page() {
  // const [data, setData] = useState("")
  // useEffect(() => {
  //   const eventSource = new EventSource("http://localhost:5000/pdf")
  //   eventSource.onmessage = (event) => {
  //     console.log(event.data)
  //     setData(event.data)
  //   }
  //   eventSource.onerror = () => {
  //     console.log("Server Closed Conn")
  //     eventSource.close()
  //   }
  // }, [])

  // data:audio/wav;base64,${audio}

  const [textInput, setTextInput] = useState("")

  const handleUpload = async (event: any) => {
    event.preventDefault()
    try {
      await fetch("http://localhost:5000/upload-text", {
        method: "POST",
        body: JSON.stringify({ data: textInput }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <>
      <Heading name="Input Text" />
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <textarea
          className="w-[70%] -mt-3 p-4 h-[50vh] border border-white bg-transparent text-white resize-none"
          onChange={(e) => setTextInput(e.target.value)}
        />
        <div className="w-[70%] float-right">
          <UploadButton handleUpload={handleUpload} />
        </div>
      </div>
    </>
  )
}
