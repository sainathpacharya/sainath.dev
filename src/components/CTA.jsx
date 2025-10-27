import './CTA.css'
import { useTranslation } from 'react-i18next'

const CTA = () => {
  const { t } = useTranslation()
  
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">{t('cta.title')}</h2>
            <p className="cta-description">
              {t('cta.description')}
            </p>
          </div>
          <div className="cta-actions">
            <a href="#contact" className="btn btn-primary">
              {t('cta.getInTouch')}
            </a>
            <a href="/CV_EU_Format.html" target="_blank" className="btn btn-secondary">
              {t('cta.downloadResume')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
