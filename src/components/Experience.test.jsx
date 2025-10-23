import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Experience from './Experience'

describe('Experience', () => {
  it('renders without crashing', () => {
    render(<Experience />)
    expect(screen.getByText('experience.title')).toBeInTheDocument()
  })

  it('displays the section title', () => {
    render(<Experience />)
    expect(screen.getByText('experience.title')).toBeInTheDocument()
  })

  it('displays the section subtitle', () => {
    render(<Experience />)
    expect(screen.getByText('experience.subtitle')).toBeInTheDocument()
  })

  it('renders all work experiences', () => {
    render(<Experience />)
    
    // Check for company names
    expect(screen.getByText('Ratna Global Technologies Private Limited')).toBeInTheDocument()
    expect(screen.getByText('Empover I-Tech Pvt. Ltd')).toBeInTheDocument()
    expect(screen.getByText('V-Empower Solutions Pvt. Ltd')).toBeInTheDocument()
    expect(screen.getByText('Eminosoft India Pvt Ltd')).toBeInTheDocument()
    expect(screen.getByText('Savithru Technologies')).toBeInTheDocument()
    expect(screen.getByText('Aven App Solutions Pvt. Ltd.')).toBeInTheDocument()
    expect(screen.getByText('New MEK Solutions Pvt. Ltd')).toBeInTheDocument()
  })

  it('renders job positions', () => {
    render(<Experience />)
    expect(screen.getByText('Lead Engineer')).toBeInTheDocument()
    expect(screen.getAllByText('Android/React-Native Developer')).toHaveLength(2)
    expect(screen.getAllByText('Android Developer')).toHaveLength(4)
  })

  it('renders job durations', () => {
    render(<Experience />)
    expect(screen.getByText('December 2025 - Present')).toBeInTheDocument()
    expect(screen.getByText('May 2022 - December 2025')).toBeInTheDocument()
    expect(screen.getByText('April 2019 - May 2022')).toBeInTheDocument()
  })

  it('renders job locations', () => {
    render(<Experience />)
    // Check for location text that might be split by emoji
    expect(screen.getAllByText((content, element) => {
      return element?.textContent?.includes('Hyderabad') || false
    })).toHaveLength(23)
    expect(screen.getAllByText((content, element) => {
      return element?.textContent?.includes('Bangalore') || false
    })).toHaveLength(8)
  })

  it('has correct CSS classes', () => {
    const { container } = render(<Experience />)
    expect(container.firstChild).toHaveClass('experience')
  })

  it('renders job descriptions', () => {
    render(<Experience />)
    const descriptions = screen.getAllByText(/Leading engineering teams|Developed multiple|Specialized in|Focused on|Worked on|Started Android/)
    expect(descriptions.length).toBeGreaterThan(0)
  })

  it('renders job highlights', () => {
    render(<Experience />)
    const highlights = screen.getAllByText(/Leading development|Developed multiple|Built cross-platform|Developed native/)
    expect(highlights.length).toBeGreaterThan(0)
  })

  it('renders company logos', () => {
    render(<Experience />)
    expect(screen.getByAltText('Ratna Global Technologies Private Limited logo')).toBeInTheDocument()
    expect(screen.getByAltText('Empover I-Tech Pvt. Ltd logo')).toBeInTheDocument()
    expect(screen.getByAltText('V-Empower Solutions Pvt. Ltd logo')).toBeInTheDocument()
    expect(screen.getByAltText('Eminosoft India Pvt Ltd logo')).toBeInTheDocument()
    expect(screen.getByAltText('Savithru Technologies logo')).toBeInTheDocument()
    expect(screen.getByAltText('Aven App Solutions Pvt. Ltd. logo')).toBeInTheDocument()
    expect(screen.getByAltText('New MEK Solutions Pvt. Ltd logo')).toBeInTheDocument()
  })

  it('shows logo placeholders when images fail to load', () => {
    render(<Experience />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(7) // One for each company
  })
})
