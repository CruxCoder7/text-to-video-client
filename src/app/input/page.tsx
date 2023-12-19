"use client"
import Heading from "@/components/Heading"
import UploadButton from "@/components/UploadButton"
import { useState } from "react"

export default function TextInputPage() {
  const [textInput, setTextInput] = useState("")

  const handleUpload = async (event: Event) => {
    event.preventDefault()
    try {
      await fetch("http://localhost:5000/upload/text", {
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
