import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import { Button } from '../Button'

describe('<Button />', () => {

  it('should be render correctly', () => {
    const { getByRole } = render(<Button text="lorem ipsum" />)
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should be render correctly with text', () => {
    const { getByText } = render(<Button text='lorem ipsum' />)
    const renderCorrectText = getByText('lorem ipsum')
    expect(renderCorrectText).toBeInTheDocument()
  })

  it('should be render correctly with variant default its primary ', () => {
    const { getByRole } = render(<Button text='lorem ipsum' />)
    const button = getByRole('button')
    expect(button).toHaveClass('bg-[#115D8C]')
  })

  it('should be render correctly with variant primary ', () => {
    const { getByRole } = render(<Button text='lorem ipsum' />)
    const button = getByRole('button')
    expect(button).toHaveClass('bg-[#115D8C]')
  })

  it('should be render correctly with variant secondary ', () => {
    const { getByRole } = render(<Button variant='secondary' text='lorem ipsum' />)
    const button = getByRole('button')
    expect(button).toHaveClass('bg-green-500')
  })
})