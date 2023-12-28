import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Card } from '../Card';

import mockedImage from '../../assets/logo.svg'
import { FeedProdutcs } from '../FeedProducts';

const mockedDatas = [
  {
    id: '123',
    priceInCents: 1000,
    imageUrl: mockedImage,
    name: 'name',
  },
  {
    id: '1234',
    priceInCents: 1000,
    imageUrl: mockedImage,
    name: 'name',
  },
]

describe('<FeedProducts />', () => {

  it('should be render correctly', () => {
    const { container } = render(<FeedProdutcs products={mockedDatas} />)
    expect(container).toBeInTheDocument()
  })

  it('should be render all children by length of products ', () => {
    const { getAllByRole } = render(<FeedProdutcs products={mockedDatas} />)
    const allLinks = getAllByRole('link')
    expect(allLinks).toHaveLength(2)
  })
  
})