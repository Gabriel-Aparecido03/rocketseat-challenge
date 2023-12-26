'use client'

interface Product {
  id: string
  priceInCents: number
  imageUrl: string
  name: string
}

import { useFilter } from "@/hook/useFilter";
import { Card } from "./Card";
import { getAllProduct } from "@/services/product";
import { useEffect, useState } from "react";
import { Empty } from "./ui/Empty"
import { Loading } from "./ui/Loading"
import { useQuery } from "react-query"

export function FeedProdutcs() {

  const { page, sortField, sortOrder, section, search } = useFilter()

  async function fetchProducts() {
    const objectFilter = {}

    if (section !== 'all') Object.assign(objectFilter, { category: section })
    if (search.length > 0) Object.assign(objectFilter, { name: search })

    try {
      const { allProducts } = await getAllProduct({ page: page - 1, perPage: 20, sortOrder, sortField, filter: objectFilter })
      return allProducts
    } catch (error) { }
  }

  const { data, status } = useQuery({ queryKey: `feed-products`, queryFn: fetchProducts })

  useEffect(() => {
    fetchProducts()
    return () => {
      fetchProducts()
    }
  }, [page, sortField, sortOrder, section, search])

  return (
    <div className='flex flex-wrap items-center justify-center gap-8 flex-1 mt-3 min-h-screen mb-5'>
      { (status === "success") &&
        data!.length > 0 ?
        data!.map(item =>
          <Card
            id={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            priceInCents={item.priceInCents}
            key={item.id}
          />)
        :
        <Empty />
      }
      {( status === "loading" || !data ) && <Loading />}
    </div>
  )
}