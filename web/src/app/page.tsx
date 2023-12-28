'use client'

import { FeedProdutcs } from '@/components/FeedProducts'
import { Filters } from '@/components/Filters'
import { Loading } from '@/components/ui/Loading'
import { Pagination } from '@/components/ui/Pagination'
import { useFilter } from '@/hook/useFilter'
import { getAllProduct } from '@/services/product'
import { useEffect } from 'react'
import { useQuery } from 'react-query'

export default function Home() {

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

  const { data, status } = useQuery({ queryKey: `feed-products-${page}-${sortOrder}-${sortField}-${section}`, queryFn: fetchProducts })

  useEffect(() => {
    fetchProducts()
  }, [page, sortField, sortOrder, section, search])

  return (
    <main className='px-[5%] bg-background pt-3 pb-3'>
      <Filters />
      <Pagination />
      { status === "success" && data && data.length > 0 && <FeedProdutcs products={data}/>}
      { status === "loading" && <Loading /> }
      <Pagination />
    </main>
  )
}
