import { FeedProdutcs } from '@/components/FeedProducts'
import { Filters } from '@/components/Filters'
import { Pagination } from '@/components/ui/Pagination'

export default function Home() {
  return (
    <main className='px-[5%] bg-background pt-3 pb-3'>
      <Filters />
      <Pagination />
      <FeedProdutcs />
      <Pagination />
    </main>
  )
}
