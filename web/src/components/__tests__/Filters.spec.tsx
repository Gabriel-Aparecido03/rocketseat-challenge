import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Filters } from '../Filters'

describe('<Filters />', () => {

  it('should be render correctly', () => {
    const { container } = render(<Filters />)
    expect(container).toBeInTheDocument() 
  })

  it('should be has all category', () => {
    const { getAllByRole } = render(<Filters />)
    const allCategory = getAllByRole('button')
    expect(allCategory).toHaveLength(3)
  })

  it('shoul has all filters type', ()=> {
    const { getAllByRole } = render(<Filters />)
    const allOptions = getAllByRole('option')
    expect(allOptions).toHaveLength(4)
  })
})