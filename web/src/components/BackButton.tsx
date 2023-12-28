import Link from "next/link";

import { IoChevronBackCircleOutline } from "react-icons/io5";

export function BackButton() {
  return (
    <Link href="/" className="bg-transparent flex gap-2 text-gray-400 font-medium text-sm pt-5 items-center ">
      <div><IoChevronBackCircleOutline /></div>
      Back
    </Link>
  )
}