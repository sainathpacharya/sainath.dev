import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

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
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <span className="brand-text">NagaSainath</span>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => scrollToSection('about')} className="nav-link">{t('nav.about')}</a>
          <a href="#skills" onClick={() => scrollToSection('skills')} className="nav-link">{t('nav.skills')}</a>
          <a href="#experience" onClick={() => scrollToSection('experience')} className="nav-link">{t('nav.experience')}</a>
          <a href="#projects" onClick={() => scrollToSection('projects')} className="nav-link">{t('nav.projects')}</a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">{t('nav.contact')}</a>
          <div className="nav-language">
            <LanguageSwitcher />
          </div>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  )
}

export default Header
