'use client'

import { useFilter } from "@/hook/useFilter";
import { IoChevronBack ,IoChevronForward } from "react-icons/io5";
import { ButtonPagination } from "./ButtonPagination";

export function Pagination() {

  const { page , changePage } = useFilter()

  return (
    <div className="flex items-center justify-end gap-3 mt-3">
      <div className="items-center gap-1 flex">
        <ButtonPagination isSelect={page === 1} onClick={()=> { changePage(1)}} > 1 </ButtonPagination>
        <ButtonPagination isSelect={page === 2} onClick={()=> { changePage(2)}} > 2 </ButtonPagination>
        <ButtonPagination isSelect={page === 3} onClick={()=> { changePage(3)}} > 3 </ButtonPagination>
      </div>
      <div className="items-center gap-1 flex">
        { page === 1 && <ButtonPagination 
          isSelect={false} 
          onClick={()=> { changePage(page + 1 )}} > 
          <IoChevronBack className="h-2 w-2" /> 
        </ButtonPagination> }
        { page < 5 && <ButtonPagination 
          isSelect={false} 
          onClick={()=> { changePage(page + 1 )}} > 
          <IoChevronForward className="h-2 w-2" />
        </ButtonPagination> }
      </div>
    </div>
  )
}