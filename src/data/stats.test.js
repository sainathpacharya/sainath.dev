import { describe, it, expect } from 'vitest'
import { portfolioStats, getFormattedYears, getFormattedProjects, getFormattedCompanies, getFormattedLanguages } from './stats'

describe('portfolioStats', () => {
  it('has correct structure', () => {
    expect(portfolioStats).toHaveProperty('yearsExperience')
    expect(portfolioStats).toHaveProperty('totalProjects')
    expect(portfolioStats).toHaveProperty('companiesWorked')
    expect(portfolioStats).toHaveProperty('languagesKnown')
  })

  it('has correct data types', () => {
    expect(typeof portfolioStats.yearsExperience).toBe('number')
    expect(typeof portfolioStats.totalProjects).toBe('number')
    expect(typeof portfolioStats.companiesWorked).toBe('number')
    expect(typeof portfolioStats.languagesKnown).toBe('number')
  })

  it('has reasonable values', () => {
    expect(portfolioStats.yearsExperience).toBeGreaterThan(0)
    expect(portfolioStats.totalProjects).toBeGreaterThan(0)
    expect(portfolioStats.companiesWorked).toBeGreaterThan(0)
    expect(portfolioStats.languagesKnown).toBeGreaterThan(0)
  })
})

describe('getFormattedYears', () => {
  it('formats years correctly', () => {
    expect(getFormattedYears()).toMatch(/\d+\+/)
  })

  it('returns a string', () => {
    expect(typeof getFormattedYears()).toBe('string')
  })
})

describe('getFormattedProjects', () => {
  it('formats projects correctly', () => {
    expect(getFormattedProjects()).toMatch(/\d+/)
  })

  it('returns a string', () => {
    expect(typeof getFormattedProjects()).toBe('string')
  })
})

describe('getFormattedCompanies', () => {
  it('formats companies correctly', () => {
    expect(getFormattedCompanies()).toMatch(/\d+/)
  })

  it('returns a string', () => {
    expect(typeof getFormattedCompanies()).toBe('string')
  })
})

describe('getFormattedLanguages', () => {
  it('formats languages correctly', () => {
    expect(getFormattedLanguages()).toMatch(/\d+/)
  })

  it('returns a string', () => {
    expect(typeof getFormattedLanguages()).toBe('string')
  })
})
