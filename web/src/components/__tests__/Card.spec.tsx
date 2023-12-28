import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Card } from '../Card';

import mockedImage from '../../assets/logo.svg' 

describe('<Card />', () => {

  it('should be render correctly', () => {
    const { container } = render(<Card id='' imageUrl={mockedImage} name='' priceInCents={0} />)
    expect(container).toBeInTheDocument()
  })

  it('shoul be has correct id at Link', () => {
    const { getByRole } = render(<Card id='id' imageUrl={mockedImage} name='' priceInCents={0} />)
    const card = getByRole('link')
    expect(card).toHaveAttribute('href','/product/id')
  })

  it('shoul be has correct name ', () => {
    const { getByText } = render(<Card id='' imageUrl={mockedImage} name='name' priceInCents={0} />)
    const card = getByText('name')
    expect(card).toBeInTheDocument()
  })

  it('shoul be has correct price and format to BRL ', () => {
    const { getByText } = render(<Card id='' imageUrl={mockedImage} name='' priceInCents={1000} />)
    const card = getByText(`R$ 10,00`)
    expect(card).toBeInTheDocument()
  })

  it('shoul be has correct image path ', () => {
    const { getByRole } = render(<Card id='' imageUrl={mockedImage} name='' priceInCents={0} />)
    const card = getByRole('img')
    expect(card).toBeInTheDocument()
  })
})