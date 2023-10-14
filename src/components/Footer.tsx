import Image from "next/image"
import { BsCodeSlash } from "react-icons/bs"

export default function Footer() {
  return (
    <footer className="w-full absolute bottom-0 h-24 flex text-slate-300 gap-1 items-center justify-center">
      <p className="flex justify-center items-center gap-1 ml-8">
        <span className="mt-[2px]">
          <BsCodeSlash />
        </span>
        with ❤️ by Team HackHive for
        <Image
          src="/sih_logo.png"
          alt="SIH logo"
          width={20}
          height={20}
          className="ml-1 -mt-[2px]"
        />
      </p>
    </footer>
  )
}
