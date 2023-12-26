'use client'

import { useFilter } from "@/hook/useFilter"
import { SectionButton } from "./SectionButton"

type Category = 'newest' | 'price-low' | 'price-high' | 'best-seller'

export function Filters() {

  const { category , changeCategory ,section , changeSection } = useFilter()

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-6">
        <SectionButton text="Todos os produtos" isSelected={section === 'all'} onClick={()=>{changeSection('all')}} />
        <SectionButton text="Camisetas" isSelected={section === 't-shirts'} onClick={()=>{changeSection('t-shirts')}} />
        <SectionButton text="Canecas" isSelected={section === 'mugs'} onClick={()=>{changeSection('mugs')}} />
      </div>
      <select onChange={(e)=> { changeCategory(e.target.value as Category) }} value={category} className="bg-none bg-transparent text-[#737380] m-0 p-0" name="" id="">
        <option className="font-sans" value="newest">Novidades</option>
        <option className="font-sans" value="price-high">Preço: Maior - menor </option>
        <option className="font-sans" value="price-low">Preço: Menor - maior</option>
        <option className="font-sans" value="best-seller">Mais vendidos</option>
      </select>
    </div>
  )
}