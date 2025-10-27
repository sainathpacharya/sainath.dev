import './Hero.css'
import { useTranslation } from 'react-i18next'
import { getFormattedYears, getFormattedProjects } from '../data/stats'

const Hero = () => {
  const { t } = useTranslation()
  
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-profile">
            <div className="profile-avatar">
              <div className="avatar-placeholder" aria-hidden="true">
                <span>NS</span>
              </div>
            </div>
            <div className="profile-info">
              <h3>NagaSainath Reddy</h3>
              <p>Lead Engineer - Mobile (iOS & Android)</p>
            </div>
          </div>
          
          <div className="hero-intro">
            <p className="hero-description fade-in">
              {t('hero.description')}
            </p>
            <div className="hero-buttons fade-in">
              <a href="#about" className="btn btn-primary" aria-label="View my profile">
                {t('hero.viewWork')}
              </a>
              <a href="#contact" className="btn btn-secondary" aria-label="Get in touch with me">
                {t('hero.getInTouch')}
              </a>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{getFormattedYears()}</span>
              <span className="stat-label">{t('hero.yearsExperience')}</span>
            </div>
            <div className="stat">
              <span className="stat-number">{getFormattedProjects()}</span>
              <span className="stat-label">{t('hero.projects')}</span>
            </div>
            <div className="stat">
              <span className="stat-number">7</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Awards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
