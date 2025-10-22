import './Contact.css'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const contactInfo = [
    {
      icon: '📧',
      title: t('contact.email'),
      value: 'sainathp.acharya@gmail.com',
      link: 'mailto:sainathp.acharya@gmail.com'
    },
    {
      icon: '📱',
      title: t('contact.phone'),
      value: '+91 9494947630',
      link: 'tel:+919494947630'
    },
    {
      icon: '📍',
      title: t('contact.location'),
      value: 'Hyderabad, India',
      link: '#'
    },
    {
      icon: '💼',
      title: t('contact.linkedin'),
      value: 'linkedin.com/in/naga-sainath-reddy-palle-32935a166',
      link: 'https://www.linkedin.com/in/naga-sainath-reddy-palle-32935a166/'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Replace with your EmailJS service details
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'sainathp.acharya@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">{t('contact.contactInfo')}</h3>
            <p className="contact-info-description">
              {t('contact.description')}
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  className="contact-item"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-links">
              <h4>{t('contact.followMe')}</h4>
              <div className="social-icons">
                <a href="https://github.com/sainathpacharya" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">🐙</span>
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/naga-sainath-reddy-palle-32935a166/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">💼</span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">{t('contact.sendMessage')}</h3>
              
              {submitStatus === 'success' && (
                <div className="status-message success">
                  ✅ {t('contact.success')}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="status-message error">
                  ❌ {t('contact.error')}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">{t('contact.name')}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-input" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">{t('contact.email')}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-input" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">{t('contact.subject')}</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="form-input" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">{t('contact.message')}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  className="form-textarea" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('contact.sending') : t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
