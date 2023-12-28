import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { HelpLink } from '../components/HelpLink'

describe('<HelpLink />', () => {

  it('should be render correctly', () => {
    const { container } = render(<HelpLink text='link' />)
    expect(container).toBeInTheDocument()
  })

  it('should be render correctly text', () => {
    const { getByText } = render(<HelpLink text='link' />)
    expect(getByText('link')).toBeInTheDocument()
  })

  it('should be render correctly text uppercase', () => {
    const { getByText } = render(<HelpLink text='link' />)
    expect(getByText('link')).toHaveClass('uppercase')
  })
})