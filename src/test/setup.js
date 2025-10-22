import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key, options) => {
      if (options?.returnObjects) {
        // Return mock arrays for highlights
        if (key.includes('highlights')) {
          return [
            'Mock highlight 1',
            'Mock highlight 2',
            'Mock highlight 3',
            'Mock highlight 4'
          ]
        }
        return {}
      }
      return key
    },
    i18n: {
      changeLanguage: vi.fn(),
      language: 'en'
    }
  }),
  initReactI18next: {
    type: '3rdParty',
    init: vi.fn()
  }
}))

// Mock EmailJS
vi.mock('@emailjs/browser', () => ({
  send: vi.fn().mockResolvedValue({ status: 200, text: 'OK' }),
  init: vi.fn()
}))

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock scrollTo
window.scrollTo = vi.fn()
