import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import { Input } from '../Input'
 
describe('<Input />', () => {

  it('should be render correctly', () => {
    const { getByRole } = render(<Input />)
    const input = getByRole('textbox')
    expect(input).toBeInTheDocument()
  })
})