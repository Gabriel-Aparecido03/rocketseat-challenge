import { Card } from "./Card";

type Product = {
  id: string
  priceInCents: number
  imageUrl: string
  name: string
}

interface FeedProductsPropsType  {
  products : Product[]
}

export function FeedProdutcs({ products }:FeedProductsPropsType) {
  return (
    <div className='flex flex-wrap items-center justify-center gap-8 min-h-[calc(100vh-240px)] flex-1 mt-3 mb-5'>
      { products.map(item =>
        <Card
          id={item.id}
          imageUrl={item.imageUrl}
          name={item.name}
          priceInCents={item.priceInCents}
          key={item.id}
        />)
      }
    </div>
  )
}