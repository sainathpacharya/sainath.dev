import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Loading from './Loading'

describe('Loading', () => {
  it('renders without crashing', () => {
    render(<Loading />)
    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })

  it('displays loading spinner', () => {
    render(<Loading />)
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })

  it('has correct CSS classes', () => {
    const { container } = render(<Loading />)
    expect(container.firstChild).toHaveClass('loading-container')
  })

  it('renders loading text', () => {
    render(<Loading />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Loading />)
    const spinner = screen.getByTestId('loading-spinner')
    expect(spinner).toHaveAttribute('role', 'status')
    expect(spinner).toHaveAttribute('aria-label', 'Loading')
  })
})
