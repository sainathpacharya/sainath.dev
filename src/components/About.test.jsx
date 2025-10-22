import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from './About'

describe('About', () => {
  it('renders without crashing', () => {
    render(<About />)
    expect(screen.getByText('about.title')).toBeInTheDocument()
  })

  it('displays the section title', () => {
    render(<About />)
    expect(screen.getByText('about.title')).toBeInTheDocument()
  })

  it('displays the section subtitle', () => {
    render(<About />)
    expect(screen.getByText('about.subtitle')).toBeInTheDocument()
  })

  it('displays the passionate title', () => {
    render(<About />)
    expect(screen.getByText('about.passionateTitle')).toBeInTheDocument()
  })

  it('displays the description', () => {
    render(<About />)
    expect(screen.getByText('about.description')).toBeInTheDocument()
  })

  it('renders highlight cards', () => {
    render(<About />)
    expect(screen.getByText('about.highlights.quickLearner.title')).toBeInTheDocument()
    expect(screen.getByText('about.highlights.teamPlayer.title')).toBeInTheDocument()
    expect(screen.getByText('about.highlights.problemSolver.title')).toBeInTheDocument()
  })

  it('renders stats section', () => {
    render(<About />)
    expect(screen.getByText('about.stats.yearsExperience')).toBeInTheDocument()
    expect(screen.getByText('about.stats.projectsCompleted')).toBeInTheDocument()
    expect(screen.getByText('about.stats.companiesWorked')).toBeInTheDocument()
    expect(screen.getByText('about.stats.languages')).toBeInTheDocument()
  })

  it('has correct CSS classes', () => {
    const { container } = render(<About />)
    expect(container.firstChild).toHaveClass('about')
  })

  it('renders highlight descriptions', () => {
    render(<About />)
    expect(screen.getByText('about.highlights.quickLearner.description')).toBeInTheDocument()
    expect(screen.getByText('about.highlights.teamPlayer.description')).toBeInTheDocument()
    expect(screen.getByText('about.highlights.problemSolver.description')).toBeInTheDocument()
  })
})
