'use client'

import { Divider } from "@/components/ui/Divider";
import { HelpLink } from "./HelpLink";
import { Button } from "@/components/ui/Button";
import { convertCoinBrl } from "@/utils/convert-to-coin-brl";
import { useCart } from "@/hook/useCart";

export function Summary() {

  const { totalPrice } = useCart()

  return (
    <aside className="bg-white p-8 rounded-lg flex flex-col justify-between h-[600px] w-1/4">
      <div className="flex flex-col gap-6">
        <h3 className="uppercase text-gray-500 font-semibold">Resumo do pedido</h3>
        <div className="flex items-center w-full justify-between">
          <p className="text-gray-500 text-base">Subtotal de produtos</p>
          <span className="text-gray-500 text-base">{ convertCoinBrl.format(totalPrice / 100 ) }</span>
        </div>
        <Divider />
        <Button text="Finalizar a compra" variant="secondary"/>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <HelpLink />
        <HelpLink />
        <HelpLink />
        <HelpLink />
      </div>
    </aside>
  )
}