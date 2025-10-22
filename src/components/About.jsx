import './About.css'
import { useTranslation } from 'react-i18next'
import { getFormattedYears, getFormattedProjects, getFormattedCompanies, getFormattedLanguages } from '../data/stats'

const About = () => {
  const { t } = useTranslation()
  
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle">{t('about.subtitle')}</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>{t('about.passionateTitle')}</h3>
              <p>
                {t('about.description')}
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>{t('about.highlights.quickLearner.title')}</h4>
                  <p>{t('about.highlights.quickLearner.description')}</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🤝</div>
                <div className="highlight-content">
                  <h4>{t('about.highlights.teamPlayer.title')}</h4>
                  <p>{t('about.highlights.teamPlayer.description')}</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">💡</div>
                <div className="highlight-content">
                  <h4>{t('about.highlights.problemSolver.title')}</h4>
                  <p>{t('about.highlights.problemSolver.description')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">{getFormattedYears()}</div>
              <div className="stat-label">{t('about.stats.yearsExperience')}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{getFormattedProjects()}</div>
              <div className="stat-label">{t('about.stats.projectsCompleted')}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{getFormattedCompanies()}</div>
              <div className="stat-label">{t('about.stats.companiesWorked')}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{getFormattedLanguages()}</div>
              <div className="stat-label">{t('about.stats.languages')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
