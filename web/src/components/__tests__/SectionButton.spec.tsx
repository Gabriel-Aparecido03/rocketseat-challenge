import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { SectionButton } from '../SectionButton';

jest.mock('next/router');
 
describe('<SectionButton />', () => {

  it('should be render correctly', () => {
    const { container } = render(<SectionButton isSelected onClick={() => {}} text='1' />)
    expect(container).toBeInTheDocument()
  })

  it('should be selected correct color', () => {
    const { getByRole } = render(<SectionButton isSelected onClick={() => {}} text='1' />)
    const button = getByRole('button')
    expect(button).toHaveClass('border-b-orange-100')
  })

  it('should be not selected correct color', () => {
    const { getByRole } = render(<SectionButton isSelected={false} onClick={() => {}} text='1' />)
    const button = getByRole('button')
    expect(button).toHaveClass('border-b-background')
  })

  it('should be selected correct text', () => {
    const { getByText } = render(<SectionButton isSelected onClick={() => {}} text='1' />)
    const button = getByText('1')
    expect(button).toBeInTheDocument()
  })
})