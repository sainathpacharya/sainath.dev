import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CTA from './CTA'

describe('CTA', () => {
  it('renders without crashing', () => {
    render(<CTA />)
    expect(screen.getByText('cta.title')).toBeInTheDocument()
  })

  it('displays the title', () => {
    render(<CTA />)
    expect(screen.getByText('cta.title')).toBeInTheDocument()
  })

  it('displays the description', () => {
    render(<CTA />)
    expect(screen.getByText('cta.description')).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    render(<CTA />)
    expect(screen.getByText('cta.getInTouch')).toBeInTheDocument()
    expect(screen.getByText('cta.downloadResume')).toBeInTheDocument()
  })

  it('has correct CSS classes', () => {
    const { container } = render(<CTA />)
    expect(container.firstChild).toHaveClass('cta')
  })

  it('renders button with correct classes', () => {
    render(<CTA />)
    const getInTouchButton = screen.getByText('cta.getInTouch')
    const downloadResumeButton = screen.getByText('cta.downloadResume')
    
    expect(getInTouchButton).toHaveClass('btn-primary')
    expect(downloadResumeButton).toHaveClass('btn-secondary')
  })
})
