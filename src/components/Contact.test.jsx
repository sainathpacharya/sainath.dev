import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import Contact from './Contact'

// Mock EmailJS
const mockSend = vi.fn()
vi.mock('@emailjs/browser', () => ({
  send: mockSend,
  init: vi.fn()
}))

describe('Contact', () => {
  beforeEach(() => {
    mockSend.mockClear()
  })

  it('renders without crashing', () => {
    render(<Contact />)
    expect(screen.getByText('contact.title')).toBeInTheDocument()
  })

  it('displays the section title', () => {
    render(<Contact />)
    expect(screen.getByText('contact.title')).toBeInTheDocument()
  })

  it('displays the section subtitle', () => {
    render(<Contact />)
    expect(screen.getByText('contact.subtitle')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Contact />)
    expect(screen.getByText('contact.contactInfo')).toBeInTheDocument()
    expect(screen.getByText('+91 970 123 4567')).toBeInTheDocument()
    expect(screen.getByText('nagasainath.palle@collectivehealth.com')).toBeInTheDocument()
    expect(screen.getByText('Hyderabad, India')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Contact />)
    expect(screen.getByText('contact.linkedin')).toBeInTheDocument()
    expect(screen.getByText('contact.followMe')).toBeInTheDocument()
  })

  it('renders contact form', () => {
    render(<Contact />)
    expect(screen.getByText('contact.sendMessage')).toBeInTheDocument()
    expect(screen.getByLabelText('contact.name')).toBeInTheDocument()
    expect(screen.getByLabelText('contact.email')).toBeInTheDocument()
    expect(screen.getByLabelText('contact.subject')).toBeInTheDocument()
    expect(screen.getByLabelText('contact.message')).toBeInTheDocument()
  })

  it('has correct CSS classes', () => {
    const { container } = render(<Contact />)
    expect(container.firstChild).toHaveClass('contact')
  })

  it('allows form input', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    const nameInput = screen.getByLabelText('contact.name')
    const emailInput = screen.getByLabelText('contact.email')
    const subjectInput = screen.getByLabelText('contact.subject')
    const messageInput = screen.getByLabelText('contact.message')
    
    await user.type(nameInput, 'Test User')
    await user.type(emailInput, 'test@example.com')
    await user.type(subjectInput, 'Test Subject')
    await user.type(messageInput, 'Test Message')
    
    expect(nameInput.value).toBe('Test User')
    expect(emailInput.value).toBe('test@example.com')
    expect(subjectInput.value).toBe('Test Subject')
    expect(messageInput.value).toBe('Test Message')
  })

  it('shows send button', () => {
    render(<Contact />)
    expect(screen.getByText('contact.send')).toBeInTheDocument()
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    mockSend.mockResolvedValue({ status: 200, text: 'OK' })
    
    render(<Contact />)
    
    const nameInput = screen.getByLabelText('contact.name')
    const emailInput = screen.getByLabelText('contact.email')
    const subjectInput = screen.getByLabelText('contact.subject')
    const messageInput = screen.getByLabelText('contact.message')
    const submitButton = screen.getByText('contact.send')
    
    await user.type(nameInput, 'Test User')
    await user.type(emailInput, 'test@example.com')
    await user.type(subjectInput, 'Test Subject')
    await user.type(messageInput, 'Test Message')
    await user.click(submitButton)
    
    expect(mockSend).toHaveBeenCalled()
  })
})
