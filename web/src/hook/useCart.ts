'use client'

import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export function useCart() {
  const hook = useContext(CartContext)
  return hook
}