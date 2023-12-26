'use client'

import { BackButton } from "@/components/BackButton";
import { Summary } from "./components/Summary";
import { CardCart } from "./components/CardCart";
import { useCart } from "@/hook/useCart";
import { convertCoinBrl } from "@/utils/convert-to-coin-brl";

export default function Cart() {

  const { items,totalPrice } = useCart()


  return (
    <main className="min-h-[calc(100vh-80px)] w-full bg-background px-[5%]">
      <BackButton />
      <div className="flex c items-stretch justify-between gap-10 mt-3">
        <div className="w-3/4">
          <h1 className="text-gray-500 text-2xl uppercase">Seu Carrinho</h1>
          <p className="text-gray-500 text-base">Total de ( {items.length} produtos ) <span className="font-bold">{ convertCoinBrl.format(totalPrice / 100 )}</span></p>
          <div className="flex flex-col gap-8 overflow-y-auto mt-3">
            {items.map(item =>
              <CardCart
                description={item.description}
                id={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                priceInCents={item.priceInCents}
                priceInCentsTotal={item.priceInCentsTotal}
                quantity={item.quantity}
                key={item.id}
              />
            )}
          </div>
        </div>
        <Summary />
      </div>
    </main>
  )
}