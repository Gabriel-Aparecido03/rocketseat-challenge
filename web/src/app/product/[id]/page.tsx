'use client'
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hook/useCart";
import { getProduct } from "@/services/product";
import { convertCoinBrl } from "@/utils/convert-to-coin-brl";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { FiShoppingBag } from "react-icons/fi";
import { useQuery } from "react-query";

interface ProductType {
  id : string
  imageUrl : string
  name : string
  description : string
  category : string
  priceInCents : number
}

export default function Product() {


  const { id } = useParams()
  const { addItemToCart } = useCart()

  const { back } = useRouter()

  async function fetchProduct() {
    try {
      const res = await getProduct({ id : String(id) })
      return res.Product 
    } catch (error) {}
  }

  const { data } = useQuery({ queryKey : 'product' , queryFn : fetchProduct})

  useEffect(()=>{
    fetchProduct()
  },[])

  function handleAddToCart() {
    addItemToCart({ 
      description : data.description , 
      id : data.id,
      imageUrl : data.imageUrl,
      name : data.name,
      priceInCents : data.priceInCents,
      priceInCentsTotal : data.priceInCents,
      quantity : 1
    })
    back()
  }

  return (
    <main className="min-h-[calc(100vh-80px)] w-full bg-background px-[5%]">
      <BackButton />
      <div className="flex items-stretch gap-6 pb-[5%] mt-5 h-[580px] ">
        <Image src={data.imageUrl} alt="" width={640} height={580}/>
        <div className="flex flex-col h-full w-1/2 justify-between">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col items-start gap-3">
              <span className="text-gray-500">{ data.category }</span>
              <h1 className="text-4xl font-light text-gray-500">{ data.name }</h1>
              <h3 className="text-[#09090A] font-bold text-lg">{ convertCoinBrl.format(data.priceInCents / 100 )}</h3>
            </div>
            <p className="text-gray-500 text-xs">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
            <div className="flex flex-col gap-3">
              <span className="text-[#737380] uppercase text-base">Descrição</span>
              <p className="text-[#737380] text-sm">{ data.description }</p>
            </div>
          </div>
          <Button onClick={handleAddToCart} variant="primary" text="Adicionar ao carrinho" leftIcon={<FiShoppingBag className="w-6 h-6 text-white" />} />
        </div>
      </div>
    </main>
  )
}