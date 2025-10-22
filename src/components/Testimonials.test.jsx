import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Testimonials from './Testimonials'

describe('Testimonials', () => {
  it('renders without crashing', () => {
    render(<Testimonials />)
    expect(screen.getByText('testimonials.title')).toBeInTheDocument()
  })

  it('displays the section title', () => {
    render(<Testimonials />)
    expect(screen.getByText('testimonials.title')).toBeInTheDocument()
  })

  it('displays the section subtitle', () => {
    render(<Testimonials />)
    expect(screen.getByText('testimonials.subtitle')).toBeInTheDocument()
  })

  it('renders all testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('testimonials.testimonial1.name')).toBeInTheDocument()
    expect(screen.getByText('testimonials.testimonial2.name')).toBeInTheDocument()
    expect(screen.getByText('testimonials.testimonial3.name')).toBeInTheDocument()
  })

  it('renders testimonial companies', () => {
    render(<Testimonials />)
    expect(screen.getByText('testimonials.testimonial1.company')).toBeInTheDocument()
    expect(screen.getByText('testimonials.testimonial2.company')).toBeInTheDocument()
    expect(screen.getByText('testimonials.testimonial3.company')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('testimonials.testimonial1.role')).toBeInTheDocument()
    expect(screen.getByText('testimonials.testimonial2.role')).toBeInTheDocument()
    expect(screen.getByText('testimonials.testimonial3.role')).toBeInTheDocument()
  })

  it('renders testimonial content', () => {
    render(<Testimonials />)
    expect(screen.getByText('testimonials.testimonial1.content')).toBeInTheDocument()
    expect(screen.getByText('testimonials.testimonial2.content')).toBeInTheDocument()
    expect(screen.getByText('testimonials.testimonial3.content')).toBeInTheDocument()
  })

  it('has correct CSS classes', () => {
    const { container } = render(<Testimonials />)
    expect(container.firstChild).toHaveClass('testimonials')
  })

  it('renders testimonial cards', () => {
    render(<Testimonials />)
    const testimonialCards = screen.getAllByTestId('testimonial-card')
    expect(testimonialCards).toHaveLength(3)
  })
})
