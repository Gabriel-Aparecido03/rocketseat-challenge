import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Header } from '../Header'

describe('<Header />', () => {

  it('should be render correctly', () => {
    const { container } = render(<Header />)
    expect(container).toBeInTheDocument() 
  })

  it('should be has link to cart ', () => {
    const { getByRole } = render(<Header />)
    const hasLink = getByRole('link')
    expect(hasLink).toBeInTheDocument()
  })

  it('shoul has image', ()=> {
    const { getByRole } = render(<Header />)
    const hasImage = getByRole('img')
    expect(hasImage).toBeInTheDocument()
  })

  it('shoul has input', ()=> {
    const { getByRole } = render(<Header />)
    const hasInput = getByRole('textbox')
    expect(hasInput).toBeInTheDocument()
  })
})