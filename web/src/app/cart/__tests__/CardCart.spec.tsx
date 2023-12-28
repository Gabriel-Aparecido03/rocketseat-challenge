import '@testing-library/jest-dom'
import { getAllByRole, render } from '@testing-library/react'

import mockedImage from '../../../assets/logo.svg'
import { CardCart } from '../components/CardCart'

describe('<CardCart />', () => {

  it('should be render correctly', () => {
    const { container } = render(
      <CardCart
        description=''
        id='123'
        imageUrl={mockedImage}
        name=''
        priceInCents={10000}
        priceInCentsTotal={10000}
        quantity={1}
      />
    )
    expect(container).toBeInTheDocument()
  })

  it('should be render correctly description', () => {
    const { getByText } = render(
      <CardCart
        description='test-description'
        id=''
        imageUrl={mockedImage}
        name=''
        priceInCents={10000}
        priceInCentsTotal={10000}
        quantity={1}
      />
    ) 
    const isCorrectDescription = getByText('test-description')
    expect(isCorrectDescription).toBeInTheDocument()
  })

  it('should be render correctly name', () => {
    const { getByText } = render(
      <CardCart
        description=''
        id=''
        imageUrl={mockedImage}
        name='test-name'
        priceInCents={10000}
        priceInCentsTotal={10000}
        quantity={1}
      />
    ) 
    const isCorrectName = getByText('test-name')
    expect(isCorrectName).toBeInTheDocument()
  })

  it('should be render correctly coin convert to BRL', () => {
    const { getByText } = render(
      <CardCart
        description=''
        id=''
        imageUrl={mockedImage}
        name='test-name'
        priceInCents={10000}
        priceInCentsTotal={10000}
        quantity={1}
      />
    ) 
    const isCorrectDescription = getByText('R$ 100,00')
    expect(isCorrectDescription).toBeInTheDocument()
  })

  it('should be render correctly quantity options', () => {
    const { getAllByRole } = render(
      <CardCart
        description=''
        id=''
        imageUrl={mockedImage}
        name='test-name'
        priceInCents={10000}
        priceInCentsTotal={10000}
        quantity={1}
      />
    ) 
    const option = getAllByRole('option')
    expect(option).toHaveLength(5)
  })

  it('should be render correctly img', () => {
    const { getByRole } = render(
      <CardCart
        description=''
        id=''
        imageUrl={mockedImage}
        name='test-name'
        priceInCents={10000}
        priceInCentsTotal={10000}
        quantity={1}
      />
    ) 
    const img = getByRole('img')
    expect(img).toBeInTheDocument()
  })
})