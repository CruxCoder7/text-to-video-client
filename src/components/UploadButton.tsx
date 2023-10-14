import React from "react"
import { PoppinsFont } from "../app/page"

export default function UploadButton({
  handleUpload,
}: {
  handleUpload: (event: any) => Promise<void>
}) {
  return (
    <button
      className={`mt-4 float-right hover:opacity-80 text-white px-4 py-2 rounded-lg bg-indigo-400 ${PoppinsFont.className}`}
      onClick={handleUpload}
    >
      Upload
    </button>
  )
}
