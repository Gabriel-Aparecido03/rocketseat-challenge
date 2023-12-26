'use client'

import { FilterContext } from "@/context/FilterContext";
import { useContext } from "react";

export function useFilter() {
  const hook = useContext(FilterContext)
  return hook
}