import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { BackButton } from '../BackButton'

jest.mock('next/router');
 
describe('<BackButton />', () => {

  it('should be render correctly', () => {
    const { container } = render(<BackButton />)
    expect(container).toBeInTheDocument()
  })

  it('should be has text back', () => {
    const { getByText } = render(<BackButton />)
    const textBack = getByText('Back')
    expect(textBack).toBeInTheDocument()
  })

  it('shoul be return', ()=> {
    const { getByText } = render(<BackButton />)
    const button = getByText('Back')

    expect(button).toHaveAttribute('href','/')
  })
})