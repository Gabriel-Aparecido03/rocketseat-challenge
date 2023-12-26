import Link from "next/link";
import { Divider } from "./ui/Divider";
import { convertCoinBrl } from "@/utils/convert-to-coin-brl";
import Image from "next/image";

interface CardParamsType {
  id : string
  priceInCents : number
  imageUrl : string
  name : string
}

export function Card({ id , priceInCents, imageUrl ,name  }: CardParamsType) {
  return (
    <Link href={`/product/${id}`} className="flex flex-col w-[256px] rounded-b-lg">
      <Image src={imageUrl} height={300} width={256} alt="" />
      <div className="flex flex-col p-2 px-4 gap-2 bg-white">
        <h3 className="text-start">{ name }</h3>
        <Divider />
        <span className="font-bold text-[#09090A] text-start">
          { convertCoinBrl.format(priceInCents / 100) }
        </span>
      </div>
    </Link>
  )
}