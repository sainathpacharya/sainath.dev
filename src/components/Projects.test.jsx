import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Projects from './Projects'

describe('Projects', () => {
  it('renders without crashing', () => {
    render(<Projects />)
    expect(screen.getByText('projects.title')).toBeInTheDocument()
  })

  it('displays the section title', () => {
    render(<Projects />)
    expect(screen.getByText('projects.title')).toBeInTheDocument()
  })

  it('displays the section subtitle', () => {
    render(<Projects />)
    expect(screen.getByText('projects.subtitle')).toBeInTheDocument()
  })

  it('renders featured projects', () => {
    render(<Projects />)
    expect(screen.getByText('projects.featured.collectiveHealth.title')).toBeInTheDocument()
    expect(screen.getByText('projects.featured.nslSubeejKisan.title')).toBeInTheDocument()
    expect(screen.getByText('projects.featured.mcrcApp.title')).toBeInTheDocument()
  })

  it('renders project roles', () => {
    render(<Projects />)
    expect(screen.getByText('projects.featured.collectiveHealth.role')).toBeInTheDocument()
    expect(screen.getByText('projects.featured.nslSubeejKisan.role')).toBeInTheDocument()
  })

  it('renders project descriptions', () => {
    render(<Projects />)
    expect(screen.getByText('projects.featured.collectiveHealth.description')).toBeInTheDocument()
    expect(screen.getByText('projects.featured.nslSubeejKisan.description')).toBeInTheDocument()
  })

  it('renders project highlights', () => {
    render(<Projects />)
    // Check for mock highlights (one per featured project with show: true)
    const highlight1 = screen.getAllByText('Mock highlight 1')
    expect(highlight1.length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByText('Mock highlight 2').length).toBe(highlight1.length)
    expect(screen.getAllByText('Mock highlight 3').length).toBe(highlight1.length)
    expect(screen.getAllByText('Mock highlight 4').length).toBe(highlight1.length)
  })

  it('renders other projects section', () => {
    render(<Projects />)
    expect(screen.getByText('projects.otherProjects')).toBeInTheDocument()
  })

  it('renders other project names', () => {
    render(<Projects />)
    expect(screen.getByText('projects.other.mtrackerApp')).toBeInTheDocument()
    expect(screen.getByText('projects.other.cortevaFarmerConnect')).toBeInTheDocument()
    expect(screen.getByText('projects.other.cortevaRoots')).toBeInTheDocument()
  })

  it('renders play store links for projects with them', () => {
    render(<Projects />)
    const playStoreLinks = screen.getAllByText('projects.viewOnPlayStore')
    expect(playStoreLinks.length).toBeGreaterThan(0)
  })

  it('renders project stats for play store projects', () => {
    render(<Projects />)
    // Stats come from play-store-stats.json when available (e.g. "50,000+") or fallback (e.g. "50K+")
    const ratings = screen.getAllByText('4.4★')
    expect(ratings.length).toBeGreaterThan(0)
    const downloadsElements = screen.getAllByText(/[\d,]+K?\+/, { exact: false })
    expect(downloadsElements.length).toBeGreaterThan(0)
  })

  it('has correct CSS classes', () => {
    const { container } = render(<Projects />)
    expect(container.firstChild).toHaveClass('projects')
  })

  it('renders mobile app labels', () => {
    render(<Projects />)
    const mobileAppLabels = screen.getAllByText('projects.mobileApp')
    expect(mobileAppLabels.length).toBeGreaterThan(0)
  })
})
