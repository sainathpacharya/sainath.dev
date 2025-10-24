import './Hero.css'
import { useTranslation } from 'react-i18next'
import { getFormattedYears, getFormattedProjects } from '../data/stats'

const Hero = () => {
  const { t } = useTranslation()
  
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 id="hero-title" className="hero-title fade-in">
              {t('hero.title')} <span className="highlight">NagaSainath Reddy</span>
            </h1>
            <h2 className="hero-subtitle fade-in fade-in-delay-1">
              {t('hero.subtitle')}
            </h2>
                  <p className="hero-description fade-in fade-in-delay-2">
                    {t('hero.description')}
                  </p>
            <div className="hero-buttons fade-in fade-in-delay-3">
              <a href="#projects" className="btn btn-primary" aria-label="View my projects">
                {t('hero.viewWork')}
              </a>
              <a href="#contact" className="btn btn-secondary" aria-label="Get in touch with me">
                {t('hero.getInTouch')}
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card fade-in fade-in-delay-4" data-testid="profile-card" role="complementary" aria-label="Profile information">
              <div className="profile-avatar">
                <div className="avatar-placeholder" aria-hidden="true">
                  <span>NS</span>
                </div>
              </div>
                <div className="profile-info">
                  <h3>NagaSainath Reddy</h3>
                  <p>Lead Engineer</p>
                      <div className="profile-stats" data-testid="profile-stats" role="region" aria-label="Professional statistics">
                        <div className="stat">
                          <span className="stat-number" aria-label={`${getFormattedYears()} years of experience`}>{getFormattedYears()}</span>
                          <span className="stat-label">{t('hero.yearsExperience')}</span>
                        </div>
                        <div className="stat">
                          <span className="stat-number" aria-label={`${getFormattedProjects()} projects completed`}>{getFormattedProjects()}</span>
                          <span className="stat-label">{t('hero.projects')}</span>
                        </div>
                      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
