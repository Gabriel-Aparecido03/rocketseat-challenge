'use client'

import Image from "next/image";
import logoSvg from '@/assets/logo.svg'
import { Input } from "./ui/Input";

import { FiShoppingBag } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useCart } from "@/hook/useCart";
import Link from "next/link";
import { useFilter } from "@/hook/useFilter";

export function Header() {

  const { items  } = useCart()
  const { search, changeSearch } = useFilter()

  return (
    <div className="bg-white flex items-center justify-between w-full h-[80px] px-[5%]">
      <Image src={logoSvg} alt="" width={222} height={50} />
      <div className="items-center flex justify-start gap-8">
        <Input value={search} onChange={e => changeSearch( e.target.value )} placeholder="Search for any product" leftIcon={<CiSearch className="w-5 h-5" />} />
        <Link href="/cart" className="p-2 relative bg-transparent border-none">
          <FiShoppingBag className="w-6 h-6" />
          {items.length > 0 && <div className="absolute text-xs h-[17px] w-[17px] bg-red-500 rounded-full text-white font-semibold flex items-center justify-center text-center right-0 bottom-0">
            {items.length}
          </div>}
        </Link>
      </div>
    </div>
  )
}