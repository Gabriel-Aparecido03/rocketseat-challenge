import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import { Empty } from '../Empty'
 
describe('<Empty />', () => {

  it('should be render correctly', () => {
    const { getByText } = render(<Empty/>)
    const hasText = getByText('Infelizmente , não apareceu nenhum item .')
    expect(hasText).toBeInTheDocument()
  })
})