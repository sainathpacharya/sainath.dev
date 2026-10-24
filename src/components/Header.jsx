import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav-brand">
          <span className="brand-text">NagaSainath</span>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} role="menubar">
          <a href="#about" onClick={() => scrollToSection('about')} className="nav-link" role="menuitem">{t('nav.about')}</a>
          <a href="#skills" onClick={() => scrollToSection('skills')} className="nav-link" role="menuitem">{t('nav.skills')}</a>
          <a href="#experience" onClick={() => scrollToSection('experience')} className="nav-link" role="menuitem">{t('nav.experience')}</a>
          <a href="#projects" onClick={() => scrollToSection('projects')} className="nav-link" role="menuitem">{t('nav.projects')}</a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link" role="menuitem">{t('nav.contact')}</a>
          <div className="nav-language">
            <LanguageSwitcher />
          </div>
        </div>
        
        <button 
          className="nav-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </header>
  )
}

export default Header
