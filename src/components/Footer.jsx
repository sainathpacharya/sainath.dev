import './Footer.css'
import { useTranslation } from 'react-i18next'
import { getFormattedYears } from '../data/stats'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="brand-name">NagaSainath Reddy</h3>
              <p className="brand-tagline">{t('footer.tagline')}</p>
              <p className="brand-description">
                {t('footer.description')}
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4 className="footer-title">{t('footer.quickLinks')}</h4>
                <ul className="footer-list">
                  <li><a href="#about">{t('nav.about')}</a></li>
                  <li><a href="#skills">{t('nav.skills')}</a></li>
                  <li><a href="#experience">{t('nav.experience')}</a></li>
                  <li><a href="#projects">{t('nav.projects')}</a></li>
                  <li><a href="#contact">{t('nav.contact')}</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4 className="footer-title">{t('footer.technologies')}</h4>
                <ul className="footer-list">
                  <li>React Native</li>
                  <li>JavaScript</li>
                  <li>Android Development</li>
                  <li>Kotlin</li>
                  <li>REST API</li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4 className="footer-title">{t('footer.connect')}</h4>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/naga-sainath-reddy-palle-32935a166/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span className="social-icon">💼</span>
                    LinkedIn
                  </a>
                  <a href="https://github.com/sainathpacharya" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span className="social-icon">🐙</span>
                    GitHub
                  </a>
                  <a href="mailto:sainathp.acharya@gmail.com" className="social-link">
                    <span className="social-icon">📧</span>
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; {currentYear} NagaSainath Reddy. {t('footer.copyright')}</p>
            </div>
            <div className="footer-credits">
              <p>{t('footer.builtWith')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
