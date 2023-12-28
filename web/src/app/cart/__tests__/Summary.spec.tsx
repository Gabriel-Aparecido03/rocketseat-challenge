import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Summary } from '../components/Summary'

describe('<Summary />', () => {

  it('should be render correctly', () => {
    const { container } = render(<Summary />)
    expect(container).toBeInTheDocument()
  }) 
})