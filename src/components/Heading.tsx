import { Dela_Gothic_One } from "next/font/google"
const DelaGothicOne = Dela_Gothic_One({ weight: "400", subsets: ["greek"] })

export default function Heading() {
  return (
    <div className="p-28 w-full">
      <h1
        className={`${DelaGothicOne.className} w-full lg:md:text-5xl text-4xl font-bold text-center text-transparent rounded bg-clip-text bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-400`}
      >
        Text To Video
      </h1>
    </div>
  )
}
