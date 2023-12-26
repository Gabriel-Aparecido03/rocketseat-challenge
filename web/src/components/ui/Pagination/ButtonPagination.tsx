import { ReactNode } from "react"

interface ButtonPagination {
  isSelect : boolean
  children : ReactNode
  onClick : () => void
}

export function ButtonPagination({ children,isSelect,onClick } : ButtonPagination) {
  return (
    <button
      onClick={onClick}   
      className={`border-2 rounded-lg border-solid ${isSelect ? 'border-orange-100 text-orange-100 bg-[#F5F5FA]' : 'border-[#E9E9F0] text-[#737380] bg-[#E9E9F0]'} h-[32px] w-[32px] flex items-center justify-center text-center  `}
    > 
      { children  }
    </button>
  )
}