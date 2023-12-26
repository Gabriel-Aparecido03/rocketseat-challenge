'use client'

import { CartContextProvider } from "@/context/CartContext";
import { FilterContextProvider } from "@/context/FilterContext";
import { queryClient } from "@/lib/react-query";
import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";

export function Wrapper({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <FilterContextProvider>
        <CartContextProvider>
          {children}
        </CartContextProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}