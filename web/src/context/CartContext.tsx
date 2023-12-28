'use client'

import { cleanLocalStorage, readItemAtLocalStorage, saveItemsAtLocalStorage } from "@/utils/local-storage"
import { ReactNode, createContext, useEffect, useState } from "react"

type Item = {
  id: string
  imageUrl: string
  name: string
  description: string
  quantity: number
  priceInCents: number
  priceInCentsTotal: number
}

export interface CartContextType {
  items: Item[]
  removeFromCart: (id: string) => void
  addItemToCart: (item: Item) => void
  saveItemCart: (item: Item) => void
  buy: () => void
  totalPrice: number
  hasDelivery: boolean
}

const deliveryPriceInCents = 40 * 100
const deliveryRuleInCents = 900 * 100

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: { children: ReactNode }) {

  const [items, setItems] = useState<Item[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [hasDelivery, setHasDelivery] = useState(true)

  function removeFromCart(id: string) {
    const newArray = items.filter(item => item.id !== id)
    setItems(newArray)
    cleanLocalStorage()
    calculateTotalPrice(newArray)
  }

  function calculateTotalPrice(array : Item[]) {
    let total = 0
    array.map(item => total += item.priceInCentsTotal)

    if ( total < deliveryRuleInCents && total > 0) {
      total += deliveryPriceInCents
    }

    setHasDelivery(total < deliveryRuleInCents)
    setTotalPrice(total)
  }

  function saveItemCart(item: Item) {
    const index = items.findIndex(i => i.id === item.id)
    if (index !== -1) {
      const newItems = items
      newItems[index] = item
      setItems(newItems)
      calculateTotalPrice(newItems)
      saveItemsAtLocalStorage(newItems)
    }
  }

  function addItemToCart(item: Item) {
    const isAlreadyExits = items.find(i => i.id === item.id)
    if (isAlreadyExits) {
      const updatedItem = item
      item.quantity += 1
      saveItemCart(updatedItem)
    }
    else {
      const newArray = [item ,...items]
      setItems(newArray)
      saveItemsAtLocalStorage(newArray)
      calculateTotalPrice(newArray)
    }
  }

  function buy() {
    setItems([])
    cleanLocalStorage()
  }

  async function initializeWithLocalStorage() {
    const response = await readItemAtLocalStorage()
    if (response.length > 0) {
      setItems(response)
      calculateTotalPrice(response)
    }
  }

  useEffect(() => {
    initializeWithLocalStorage()
  }, [])

  return (
    <CartContext.Provider value={{ addItemToCart, buy, items, removeFromCart, saveItemCart, hasDelivery, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
} 