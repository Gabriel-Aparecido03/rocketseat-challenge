import Link from "next/link";

import { IoChevronBackCircleOutline } from "react-icons/io5";

export function BackButton() {
  return (
    <div className="flex items-center justify-start pt-5">
      <Link href="/" className="bg-transparent flex gap-2 text-gray-400 font-medium text-sm">
        <IoChevronBackCircleOutline />
        Voltar
      </Link>
    </div>
  )
}