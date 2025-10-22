import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from './Footer'

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />)
    expect(screen.getByText('footer.tagline')).toBeInTheDocument()
  })

  it('displays the tagline', () => {
    render(<Footer />)
    expect(screen.getByText('footer.tagline')).toBeInTheDocument()
  })

  it('displays the description', () => {
    render(<Footer />)
    expect(screen.getByText('footer.description')).toBeInTheDocument()
  })

  it('renders quick links section', () => {
    render(<Footer />)
    expect(screen.getByText('footer.quickLinks')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('nav.about')).toBeInTheDocument()
    expect(screen.getByText('nav.skills')).toBeInTheDocument()
    expect(screen.getByText('nav.experience')).toBeInTheDocument()
    expect(screen.getByText('nav.projects')).toBeInTheDocument()
    expect(screen.getByText('nav.contact')).toBeInTheDocument()
  })

  it('renders technologies section', () => {
    render(<Footer />)
    expect(screen.getByText('footer.technologies')).toBeInTheDocument()
  })

  it('renders connect section', () => {
    render(<Footer />)
    expect(screen.getByText('footer.connect')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByText('contact.linkedin')).toBeInTheDocument()
  })

  it('renders copyright information', () => {
    render(<Footer />)
    expect(screen.getByText('footer.copyright')).toBeInTheDocument()
  })

  it('renders built with information', () => {
    render(<Footer />)
    expect(screen.getByText('footer.builtWith')).toBeInTheDocument()
  })

  it('has correct CSS classes', () => {
    const { container } = render(<Footer />)
    expect(container.firstChild).toHaveClass('footer')
  })

  it('renders technology tags', () => {
    render(<Footer />)
    expect(screen.getByText('React Native')).toBeInTheDocument()
    expect(screen.getByText('Android')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })
})
