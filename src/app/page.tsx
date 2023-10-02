"use client"
import { Poppins } from "next/font/google"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import { BsUpload } from "react-icons/bs"
import { MdInput } from "react-icons/md"
import Footer from "@/components/Footer"
import Heading from "@/components/Heading"

const PoppinsFont = Poppins({ weight: "400", subsets: ["devanagari"] })

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleButtonClick = () => {
    if (fileInputRef.current) fileInputRef.current.click()
  }

  const handleFileSelect = (event: any) => {
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      console.log("Selected file:", selectedFile.name)
    }
  }

  const router = useRouter()

  return (
    <main className="h-screen">
      <Heading />
      <div className="w-full  flex items-center justify-center">
        <div className="w-[50%] flex justify-center items-center gap-10">
          <button
            className={`${PoppinsFont.className} bg-indigo-600 flex gap-4 text-white px-10 py-5 rounded-lg hover:opacity-80`}
            onClick={handleButtonClick}
          >
            Upload PDF
            <BsUpload className="mt-1" />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />
          <button
            className={`${PoppinsFont.className} bg-indigo-400 flex gap-4 text-white px-10 py-5 rounded-lg hover:opacity-80`}
            onClick={() => router.push("/input")}
          >
            Input Text
            <MdInput className="mt-[2px]" size={20} />
          </button>
        </div>
        <div className="w-[50%] flex justify-end items-center px-32">
          <img
            src="/upload.svg"
            alt=""
            className="hover:scale-105 ease-in duration-300 mb-4 h-[300px]"
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}
