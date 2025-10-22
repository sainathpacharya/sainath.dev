import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders without crashing', () => {
    render(<Hero />)
    expect(screen.getByText('hero.title')).toBeInTheDocument()
  })

  it('displays the main title', () => {
    render(<Hero />)
    expect(screen.getByText('hero.title')).toBeInTheDocument()
    expect(screen.getByText('NagaSainath Reddy')).toBeInTheDocument()
  })

  it('displays the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('hero.subtitle')).toBeInTheDocument()
  })

  it('displays the description', () => {
    render(<Hero />)
    expect(screen.getByText('hero.description')).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    render(<Hero />)
    expect(screen.getByText('hero.viewWork')).toBeInTheDocument()
    expect(screen.getByText('hero.getInTouch')).toBeInTheDocument()
  })

  it('renders profile stats', () => {
    render(<Hero />)
    expect(screen.getByText('hero.yearsExperience')).toBeInTheDocument()
    expect(screen.getByText('hero.projects')).toBeInTheDocument()
  })

  it('has correct CSS classes', () => {
    const { container } = render(<Hero />)
    expect(container.firstChild).toHaveClass('hero')
  })

  it('renders profile card', () => {
    render(<Hero />)
    expect(screen.getByTestId('profile-card')).toBeInTheDocument()
  })

  it('renders profile stats container', () => {
    render(<Hero />)
    expect(screen.getByTestId('profile-stats')).toBeInTheDocument()
  })
})
