"use client"

import { useCart } from "@/hook/useCart";
import { convertCoinBrl } from "@/utils/convert-to-coin-brl";
import Image from "next/image";
import { useState } from "react";
import { CiTrash } from "react-icons/ci";

interface PropsType {
  id: string
  imageUrl: string
  name: string
  description: string
  quantity: number
  priceInCents: number
  priceInCentsTotal: number
}

export function CardCart({ description ,id,imageUrl,name,priceInCents,priceInCentsTotal,quantity }:PropsType) {

  const { removeFromCart,saveItemCart } = useCart()

  const [ newValueQuantity , setNewValueQuantity ] = useState(quantity)

  function handleUpdateQuantity(newQuantity : number ) {
    setNewValueQuantity(newQuantity)
    saveItemCart({ description , id, imageUrl ,name ,priceInCents ,priceInCentsTotal : priceInCents * newQuantity ,quantity })
  }

  function handleDelete() {
    removeFromCart(id)
  }

  return (
    <div className="rounded-lg bg-white flex items-stretch h-[200px]">
      <Image src={imageUrl} width={256} height={200} alt="" />
      <div className="flex flex-col justify-between items-start px-6 py-8">
        <div className="flex justify-between w-full">
          <h4 className="text-gray-500 font-light text-xl">{ name }</h4>
          <button onClick={handleDelete} className="m-0 p-0 border-none bg-transparent">
            <CiTrash className="h-6 w-6 text-red-500" />
          </button>
        </div>
        <p className="text-gray-500 text-xs text-start"> { description } </p>
        <div className="flex items-center gap-3">
          <select value={newValueQuantity} onChange={e => handleUpdateQuantity(Number(e.target.value))} className="bg-[#F3F5F6] rounded-lg border border-solid border-[#A8A8B3]">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <span className="text-[#09090A] text-base font-bold">
            { convertCoinBrl.format( priceInCentsTotal /100 )}
          </span>
        </div>
      </div>
    </div>
  )
}