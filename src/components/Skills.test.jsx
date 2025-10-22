import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skills from './Skills'

describe('Skills', () => {
  it('renders without crashing', () => {
    render(<Skills />)
    expect(screen.getByText('skills.title')).toBeInTheDocument()
  })

  it('displays the section title', () => {
    render(<Skills />)
    expect(screen.getByText('skills.title')).toBeInTheDocument()
  })

  it('displays the section subtitle', () => {
    render(<Skills />)
    expect(screen.getByText('skills.subtitle')).toBeInTheDocument()
  })

  it('renders skill categories', () => {
    render(<Skills />)
    expect(screen.getByText('skills.categories.mobileDevelopment')).toBeInTheDocument()
    expect(screen.getByText('skills.categories.programmingLanguages')).toBeInTheDocument()
    expect(screen.getByText('skills.categories.apiIntegration')).toBeInTheDocument()
  })

  it('renders technical skills', () => {
    render(<Skills />)
    expect(screen.getByText('skills.technicalSkills.reactNative')).toBeInTheDocument()
    expect(screen.getByText('skills.technicalSkills.javaScript')).toBeInTheDocument()
    expect(screen.getByText('skills.technicalSkills.typeScript')).toBeInTheDocument()
  })

  it('renders tools section', () => {
    render(<Skills />)
    expect(screen.getByText('skills.toolsTechnologies')).toBeInTheDocument()
    expect(screen.getByText('skills.tools.androidStudio')).toBeInTheDocument()
    expect(screen.getByText('skills.tools.vsCode')).toBeInTheDocument()
  })

  it('renders languages section', () => {
    render(<Skills />)
    expect(screen.getByText('skills.languages')).toBeInTheDocument()
    expect(screen.getByText('skills.spokenLanguages.english')).toBeInTheDocument()
    expect(screen.getByText('skills.spokenLanguages.telugu')).toBeInTheDocument()
    expect(screen.getByText('skills.spokenLanguages.hindi')).toBeInTheDocument()
  })

  it('renders language proficiency levels', () => {
    render(<Skills />)
    expect(screen.getByText('skills.spokenLanguages.fluent')).toBeInTheDocument()
    expect(screen.getByText('skills.spokenLanguages.native')).toBeInTheDocument()
    expect(screen.getByText('skills.spokenLanguages.conversational')).toBeInTheDocument()
  })

  it('has correct CSS classes', () => {
    const { container } = render(<Skills />)
    expect(container.firstChild).toHaveClass('skills')
  })

  it('renders all skill categories', () => {
    render(<Skills />)
    const categories = [
      'skills.categories.mobileDevelopment',
      'skills.categories.programmingLanguages',
      'skills.categories.apiIntegration',
      'skills.categories.stateManagement',
      'skills.categories.frontendDevelopment',
      'skills.categories.uiFramework',
      'skills.categories.networking',
      'skills.categories.dataHandling',
      'skills.categories.dataStorage',
      'skills.categories.androidTools'
    ]
    
    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument()
    })
  })
})
