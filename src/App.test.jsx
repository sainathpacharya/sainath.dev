import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import App from './App'

// Mock all components
vi.mock('./components/Header', () => ({
  default: () => <div data-testid="header">Header Component</div>
}))

vi.mock('./components/Hero', () => ({
  default: () => <div data-testid="hero">Hero Component</div>
}))

vi.mock('./components/About', () => ({
  default: () => <div data-testid="about">About Component</div>
}))

vi.mock('./components/Skills', () => ({
  default: () => <div data-testid="skills">Skills Component</div>
}))

vi.mock('./components/Experience', () => ({
  default: () => <div data-testid="experience">Experience Component</div>
}))

vi.mock('./components/Projects', () => ({
  default: () => <div data-testid="projects">Projects Component</div>
}))

vi.mock('./components/Testimonials', () => ({
  default: () => <div data-testid="testimonials">Testimonials Component</div>
}))

vi.mock('./components/CTA', () => ({
  default: () => <div data-testid="cta">CTA Component</div>
}))

vi.mock('./components/Contact', () => ({
  default: () => <div data-testid="contact">Contact Component</div>
}))

vi.mock('./components/Footer', () => ({
  default: () => <div data-testid="footer">Footer Component</div>
}))

vi.mock('./components/LanguageSwitcher', () => ({
  default: () => <div data-testid="language-switcher">Language Switcher Component</div>
}))

vi.mock('./components/Loading', () => ({
  default: () => <div data-testid="loading">Loading Component</div>
}))

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('renders all main components', () => {
    render(<App />)
    
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getByTestId('skills')).toBeInTheDocument()
    expect(screen.getByTestId('experience')).toBeInTheDocument()
    expect(screen.getByTestId('projects')).toBeInTheDocument()
    expect(screen.getByTestId('testimonials')).toBeInTheDocument()
    expect(screen.getByTestId('cta')).toBeInTheDocument()
    expect(screen.getByTestId('contact')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('has correct CSS classes', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toHaveClass('App')
  })
})
