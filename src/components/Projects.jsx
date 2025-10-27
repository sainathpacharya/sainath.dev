import './Projects.css'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()
  
  const featuredProjects = [
    {
      title: t('projects.featured.collectiveHealth.title'),
      description: t('projects.featured.collectiveHealth.description'),
      role: t('projects.featured.collectiveHealth.role'),
      tech: ['React Native', 'JavaScript', 'TypeScript'],
      highlights: t('projects.featured.collectiveHealth.highlights', { returnObjects: true }),
      downloads: '50K+',
      rating: '4.4★',
      image: `${import.meta.env.BASE_URL}images/apps/featured/collective-health-logo.png`,
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.collectivehealth.member&hl=en_IN',
      appStoreLink: 'https://apps.apple.com/us/developer/collective-health/id1032100064',
      year: '2025',
      show: true
    },
    {
      title: t('projects.featured.goldClub.title'),
      description: t('projects.featured.goldClub.description'),
      role: t('projects.featured.goldClub.role'),
      tech: ['React Native', 'JavaScript'],
      highlights: t('projects.featured.goldClub.highlights', { returnObjects: true }),
      image: `${import.meta.env.BASE_URL}images/apps/featured/nsl-gold-club-logo.png`,
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.nuziveeduseeds.nslchannel&hl=en_IN',
      downloads: '50K+',
      rating: '4.0★',
      year: '2024',
      show: true
    },
    {
      title: t('projects.featured.nslSubeejKisan.title'),
      description: t('projects.featured.nslSubeejKisan.description'),
      role: t('projects.featured.nslSubeejKisan.role'),
      tech: ['React Native', 'JavaScript'],
      highlights: t('projects.featured.nslSubeejKisan.highlights', { returnObjects: true }),
      image: `${import.meta.env.BASE_URL}images/apps/featured/subbeej-logo.png`,
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.nsl.subeejkisan&hl=en_IN',
      downloads: '10K+',
      rating: '4.2★',
      year: '2024',
      show: true
    },
    {
      title: t('projects.featured.nslVyaparaMitra.title'),
      description: t('projects.featured.nslVyaparaMitra.description'),
      role: t('projects.featured.nslVyaparaMitra.role'),
      tech: ['React Native', 'JavaScript'],
      highlights: t('projects.featured.nslVyaparaMitra.highlights', { returnObjects: true }),
      image: '📱',
      show: false
    },
    {
      title: t('projects.featured.mcrcApp.title'),
      description: t('projects.featured.mcrcApp.description'),
      role: t('projects.featured.mcrcApp.role'),
      tech: ['React Native', 'JavaScript'],
      highlights: t('projects.featured.mcrcApp.highlights', { returnObjects: true }),
      image: `${import.meta.env.BASE_URL}images/apps/featured/mcrc-logo.png`,
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.cortevaindia.mcrc&hl=en_IN',
      downloads: '5K+',
      rating: '4.0★',
      year: '2023',
      show: true
    },
    {
      title: t('projects.featured.cortevaDaksh.title'),
      description: t('projects.featured.cortevaDaksh.description'),
      role: t('projects.featured.cortevaDaksh.role'),
      tech: ['React Native', 'JavaScript'],
      highlights: t('projects.featured.cortevaDaksh.highlights', { returnObjects: true }),
      image: `${import.meta.env.BASE_URL}images/apps/featured/corteva-daksh-logo.png`,
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.cortevaindia.amr&hl=en_IN',
      appStoreLink: 'https://apps.apple.com/in/app/corteva-daksh/id1599473068',
      downloads: '1K+',
      rating: '4.1★',
      year: '2022',
      show: true
    },
    {
      title: t('projects.featured.meetHourApp.title'),
      description: t('projects.featured.meetHourApp.description'),
      role: t('projects.featured.meetHourApp.role'),
      tech: ['React Native', 'JavaScript'],
      highlights: t('projects.featured.meetHourApp.highlights', { returnObjects: true }),
      image: `${import.meta.env.BASE_URL}images/apps/featured/meethour-logo.png`,
      playStoreLink: 'https://play.google.com/store/apps/details?id=go.meethour.io',
      appStoreLink: 'https://apps.apple.com/in/app/meet-hour/id1527001689',
      downloads: '100K+',
      rating: '4.6★',
      year: '2020',
      show: true
    },
  ]

  const otherProjects = [
    // Projects with Play Store links (Priority) - Ordered by year
    { name: t('projects.other.rootsEmployeeApp'), playStoreLink: 'https://play.google.com/store/apps/details?id=com.roots.rootsemployee&hl=en_IN', year: '2025', logo: `${import.meta.env.BASE_URL}images/apps/other/corteva-roots-employee-logo.png`, downloads: '1K+', rating: '4.0★', show: true },
    { name: t('projects.other.mtrackerApp'), playStoreLink: 'https://play.google.com/store/apps/details?id=com.sivashakthi&hl=en_IN', year: '2019', logo: `${import.meta.env.BASE_URL}images/apps/other/m-tracker-logo.png`, downloads: '10K+', rating: '4.2★', show: true },
    { name: t('projects.other.cortevaFarmerConnect'), playStoreLink: 'https://play.google.com/store/apps/details?id=com.pioneer.india.directsales&hl=en_IN', year: '2021', logo: `${import.meta.env.BASE_URL}images/apps/other/farmer-connect-logo.png`, downloads: '100K+', rating: '4.3★', show: true },
    { name: t('projects.other.cortevaRoots'), playStoreLink: 'https://play.google.com/store/apps/details?id=com.corteva.rootsapplication&hl=en_IN', year: '2021', logo: `${import.meta.env.BASE_URL}images/apps/other/corteva-roots-logo.png`, downloads: '10K+', rating: '4.0★', show: true },
    { name: t('projects.other.piqyu'), playStoreLink: 'https://play.google.com/store/apps/details?id=com.ssr.piqyu&hl=en_IN', year: '2021', logo: `${import.meta.env.BASE_URL}images/apps/other/piqyu-parner-logo.png`, downloads: '1K+', rating: '3.9★', show: true },
    { name: t('projects.other.nslKissanVikas'), playStoreLink: 'https://play.google.com/store/apps/details?id=com.Nsl.KisanVikas.farmmanagement&hl=en_IN', year: '2022', logo: `${import.meta.env.BASE_URL}images/apps/other/nsl-kisan-vikas-logo.png`, downloads: '1K+', rating: '4.1★', show: true },
    { name: t('projects.other.nslRetailAudit'), playStoreLink: 'https://play.google.com/store/apps/details?id=com.Nsl.retailAuditSurvey.retailaudits&hl=en_IN', year: '2024', logo: `${import.meta.env.BASE_URL}images/apps/other/nsl-retail-audit-logo.png`, downloads: '500+', rating: '4.0★', show: true },
    
    // Projects without Play Store links - Ordered by year
    { name: t('projects.other.theatreMart'), year: '2019', logo: `${import.meta.env.BASE_URL}images/apps/other/theatre-mart-logo.png`, show: false },
    { name: t('projects.other.wakukPartner'), year: '2020', logo: `${import.meta.env.BASE_URL}images/apps/other/wakuk-partner-logo.png`, show: false },
    { name: t('projects.other.wakukPassenger'), year: '2020', logo: `${import.meta.env.BASE_URL}images/apps/other/wakuk-passenger-logo.png`, show: false },
    { name: t('projects.other.cortevaVts'), logo: '📈', show: false }, // 2020 - Hidden
    { name: t('projects.other.cortevaCdUpload'), logo: '📤', show: false }, // 2020 - Hidden
    { name: t('projects.other.mpConnect'), logo: '🔗', show: false } // 2021 - Hidden
  ]

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-header">
          <h2 id="projects-title" className="section-title fade-in">{t('projects.title')}</h2>
          <p className="section-subtitle fade-in fade-in-delay-1">{t('projects.subtitle')}</p>
        </div>

        <div className="projects-grid" role="grid" aria-label="Featured projects">
          {featuredProjects.filter(project => project.show).map((project, index) => (
            <article key={index} className={`project-card fade-in`} style={{animationDelay: `${index * 0.2}s`}} role="gridcell">
              <div className="project-header">
                <div className="project-icon">
                  {project.image.startsWith('/') ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} - Mobile application logo`}
                      className="project-logo"
                      loading="lazy"
                      decoding="async"
                      width="60"
                      height="60"
                      fetchpriority="low"
                    />
                  ) : (
                    <span className="project-emoji">{project.image}</span>
                  )}
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-role">{project.role}</span>
                  {project.downloads && project.rating && (
                    <div className="project-stats">
                      <span className="downloads">{project.downloads}</span>
                      <span className="rating">{project.rating}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <ul className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              
              
                  <div className="project-actions">
                    {project.playStoreLink && (
                      <a 
                        href={project.playStoreLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary"
                        aria-label={`View ${project.title} on Google Play Store`}
                      >
                        {t('projects.viewOnPlayStore')}
                      </a>
                    )}
                    {project.appStoreLink && (
                      <a 
                        href={project.appStoreLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        aria-label={`View ${project.title} on Apple App Store`}
                      >
                        {t('projects.viewOnAppStore')}
                      </a>
                    )}
                  </div>
            </article>
          ))}
        </div>

        <div className="other-projects">
          <h3 className="other-projects-title">{t('projects.otherProjects')}</h3>
        <div className="other-projects-grid" role="list" aria-label="Other projects">
          {otherProjects.filter(project => project.show !== false).map((project, index) => (
            <div key={index} className="other-project-item" role="listitem">
              <div className="project-logo">
                {project.logo.startsWith('/') ? (
                  <img 
                    src={project.logo} 
                    alt={`${project.name} mobile application logo`}
                    className="project-logo-image"
                    loading="lazy"
                    decoding="async"
                    width="40"
                    height="40"
                    fetchpriority="low"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : (
                  <span className="project-emoji">{project.logo}</span>
                )}
                <div className="project-logo-placeholder" style={{display: 'none'}}>
                  <span>📱</span>
                </div>
              </div>
              <span className="project-name">
                {typeof project === 'string' ? project : project.name}
              </span>
              <span className="project-type">{t('projects.mobileApp')}</span>
              {typeof project === 'object' && project.downloads && project.rating && (
                <div className="project-stats">
                  <span className="downloads">{project.downloads}</span>
                  <span className="rating">{project.rating}</span>
                </div>
              )}
              {typeof project === 'object' && project.playStoreLink && (
                <a 
                  href={project.playStoreLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`View ${project.name} on Google Play Store`}
                >
{t('projects.viewOnPlayStore')}
                </a>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
