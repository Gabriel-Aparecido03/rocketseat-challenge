import '@testing-library/jest-dom'

import { fireEvent, render } from '@testing-library/react'
import { ButtonPagination } from './ButtonPagination'

describe('<Button />', () => {

  it('should be render correctly', () => {
    const { getByRole } = render(<ButtonPagination isSelect onClick={()=>{}} >button</ButtonPagination>)
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should be render with prop isSelect equal true', () => {
    const { getByRole } = render(<ButtonPagination isSelect onClick={()=>{}} >button</ButtonPagination>)
    const button = getByRole('button')
    expect(button).toHaveClass('border-orange-100 text-orange-100 bg-[#F5F5FA]')
  })

  it('should be render with prop isSelect equal false', () => {
    const { getByRole } = render(<ButtonPagination isSelect={false} onClick={()=>{}} >button</ButtonPagination>)
    const button = getByRole('button')
    expect(button).toHaveClass('border-[#E9E9F0] text-[#737380] bg-[#E9E9F0]')
  })
})