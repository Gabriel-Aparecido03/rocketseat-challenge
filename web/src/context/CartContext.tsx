'use client'

import { cleanLocalStorage, readItemAtLocalStorage, saveItemsAtLocalStorage } from "@/utils/local-storage"
import { ReactNode, createContext, useEffect, useState } from "react"

type Item = {
  id : string
  imageUrl : string
  name : string
  description : string
  quantity : number
  priceInCents : number
  priceInCentsTotal : number
}

export interface CartContextType {
  items : Item[]
  removeFromCart : ( id : string ) => void
  addItemToCart : (item : Item) => void
  saveItemCart : ( item : Item ) => void
  buy : () => void
  totalPrice : number
  hasDelivery : boolean
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: { children : ReactNode }) {

  const [ items , setItems ] = useState<Item[]>([])
  const [ totalPrice, setTotalPrice ] = useState(0)
  const [ hasDelivery , setHasDelivery ] = useState(true)

  function removeFromCart(id : string) {
    setItems(prev => prev.filter(item => item.id !== id ))
  }

  function calculateTotalPrice() {
    let total = 0
    items.map( item => total += item.priceInCentsTotal )
    setTotalPrice(total)
    setHasDelivery(total < 900)
  }

  function saveItemCart(item : Item) {
    const index = items.findIndex(i => i.id === item.id)
    if(index !== -1) {
      const newItems = items
      newItems[index] = item
      setItems(newItems)
      calculateTotalPrice()
      saveItemsAtLocalStorage(newItems)
    }
  }

  function addItemToCart(item : Item) {
    const isAlreadyExits = items.find(i => i.id === item.id)
    if(isAlreadyExits) {
      const updatedItem = item
      item.quantity += 1
      saveItemCart(updatedItem)
    }
    else {
      setItems(prev => [ item,...prev ])
      saveItemsAtLocalStorage([item, ...items])
    }

    calculateTotalPrice()
  }

  function buy() {
    setItems([])
    cleanLocalStorage()
  }

  async function initializeWithLocalStorage() {
    const response = await readItemAtLocalStorage()
    if(response.length > 0 ) {
      setItems(response)
      calculateTotalPrice()
    }
  }

  useEffect(()=>{
    initializeWithLocalStorage()
  },[])

  return (
    <CartContext.Provider value={{ addItemToCart,buy,items,removeFromCart,saveItemCart,hasDelivery,totalPrice }}>
      { children }
    </CartContext.Provider>
  )
} 