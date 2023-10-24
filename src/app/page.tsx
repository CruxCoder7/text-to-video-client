"use client"
import Footer from "@/components/Footer"
import Heading from "@/components/Heading"
import UploadButton from "@/components/UploadButton"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Typography from "@mui/material/Typography"
import { Poppins } from "next/font/google"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { BsUpload } from "react-icons/bs"
import { IoClose } from "react-icons/io5"
import { MdInput } from "react-icons/md"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  boxShadow: 24,
  p: 4,
}

export const PoppinsFont = Poppins({ weight: "400", subsets: ["devanagari"] })

export default function Home() {
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    onDrop(acceptedFiles) {
      setFile(acceptedFiles[0])
    },
  })

  const files = acceptedFiles.map((file: File) => (
    <li key={file.name}>{file.name}</li>
  ))

  const router = useRouter()

  const handleUpload = async (event: any) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append("file", file as Blob)

    try {
      await fetch("http://localhost:5000/upload/pdf", {
        method: "POST",
        body: formData,
      })
      router.push("/result")
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <main className="h-screen">
      <Heading name="Text To Video" />
      <div className="w-full  flex items-center justify-center">
        <div className="w-[50%] flex justify-center items-center gap-10">
          <button
            className={`${PoppinsFont.className} bg-indigo-600 flex gap-4 text-white px-10 py-5 rounded-lg hover:opacity-80`}
            onClick={() => setOpen(true)}
          >
            Upload PDF
            <BsUpload className="mt-1" />
          </button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="rounded-lg bg-slate-100">
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className={`${PoppinsFont.className}`}
              >
                Upload PDF
              </Typography>
              <div className="mt-4">
                <div
                  {...getRootProps({ className: "dropzone" })}
                  className="p-10 border border-dashed rounded-lg border-slate-500"
                >
                  <input {...getInputProps()} />
                  <p
                    className={`cursor-pointer text-center ${PoppinsFont.className}`}
                  >
                    Drag and drop a pdf here, or click to select pdf
                  </p>
                </div>
                {file !== null && (
                  <>
                    <aside>
                      <h4 className={`mt-4 ${PoppinsFont.className}`}>File</h4>
                      <ul className="p-2 flex items-center justify-between mt-2 border rounded-lg border-slate-500">
                        {files}
                        <IoClose
                          size={20}
                          className="text-slate-500 cursor-pointer"
                          onClick={() => setFile(null)}
                        />
                      </ul>
                    </aside>
                    <UploadButton handleUpload={handleUpload} />
                  </>
                )}
              </div>
            </Box>
          </Modal>
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
