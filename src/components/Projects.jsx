import './Projects.css'
import { useTranslation } from 'react-i18next'
import { portfolioStats } from '../data/stats'

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
      image: '🏥',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.collectivehealth.member&hl=en_IN',
      year: '2025',
      show: true
    },
    {
      title: t('projects.featured.nslSubeejKisan.title'),
      description: t('projects.featured.nslSubeejKisan.description'),
      role: t('projects.featured.nslSubeejKisan.role'),
      tech: ['React Native', 'JavaScript'],
      highlights: t('projects.featured.nslSubeejKisan.highlights', { returnObjects: true }),
      image: '/images/subbeej-logo.png',
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
      image: '/images/mcrc-logo.png',
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
      image: '📊',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.cortevaindia.amr&hl=en_IN',
      downloads: '1K+',
      rating: '3.8★',
      year: '2022',
      show: true
    },
    {
      title: t('projects.featured.meetHourApp.title'),
      description: t('projects.featured.meetHourApp.description'),
      role: t('projects.featured.meetHourApp.role'),
      tech: ['React Native', 'JavaScript'],
      highlights: t('projects.featured.meetHourApp.highlights', { returnObjects: true }),
      image: '🎥',
      playStoreLink: 'https://play.google.com/store/apps/details?id=go.meethour.io',
      downloads: '100K+',
      rating: '4.1★',
      year: '2020',
      show: true
    },
  ]

  const otherProjects = [
    // Projects with Play Store links (Priority) - Ordered by year
    { name: t('projects.other.mtrackerApp'), playStoreLink: 'https://play.google.com/store/apps/details?id=com.sivashakthi&hl=en_IN', year: '2019', logo: '📱', downloads: '10K+', rating: '4.2★' },
    { name: t('projects.other.cortevaFarmerConnect'), playStoreLink: 'https://play.google.com/store/apps/details?id=com.pioneer.india.directsales&hl=en_IN', year: '2021', logo: '🛒', downloads: '100K+', rating: '4.3★' },
    { name: t('projects.other.cortevaRoots'), playStoreLink: 'https://play.google.com/store/apps/details?id=com.corteva.rootsapplication&hl=en_IN', year: '2021', logo: '🌱', downloads: '10K+', rating: '4.0★' },
    { name: t('projects.other.piqyu'), playStoreLink: 'https://play.google.com/store/apps/details?id=com.ssr.piqyu&hl=en_IN', year: '2021', logo: '🚚', downloads: '1K+', rating: '3.9★' },
    { name: t('projects.other.nslKissanVikas'), playStoreLink: 'https://play.google.com/store/apps/details?id=com.Nsl.KisanVikas.farmmanagement&hl=en_IN', year: '2022', logo: '🌾', downloads: '1K+', rating: '4.1★' },
    { name: t('projects.other.nslRetailAudit'), playStoreLink: 'https://play.google.com/store/apps/details?id=com.Nsl.retailAuditSurvey.retailaudits&hl=en_IN', year: '2024', logo: '📊', downloads: '500+', rating: '4.0★' },
    
    // Projects without Play Store links - Ordered by year
    { name: t('projects.other.theatreMart'), logo: '🎭' }, // 2019
    { name: t('projects.other.wakukPartner'), logo: '🚗' }, // 2020
    { name: t('projects.other.wakukPassenger'), logo: '🚗' }, // 2020
    { name: t('projects.other.cortevaVts'), logo: '📈' }, // 2020
    { name: t('projects.other.cortevaCdUpload'), logo: '📤' }, // 2020
    { name: t('projects.other.mpConnect'), logo: '🔗' } // 2021
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title fade-in">{t('projects.title')}</h2>
          <p className="section-subtitle fade-in fade-in-delay-1">{t('projects.subtitle')}</p>
        </div>

        <div className="projects-grid">
          {featuredProjects.filter(project => project.show).map((project, index) => (
            <div key={index} className={`project-card fade-in`} style={{animationDelay: `${index * 0.2}s`}}>
              <div className="project-header">
                <div className="project-icon">
                  {project.image.startsWith('/') ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} logo`}
                      className="project-logo"
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
                      >
{t('projects.viewOnPlayStore')}
                      </a>
                    )}
                  </div>
            </div>
          ))}
        </div>

        <div className="other-projects">
          <h3 className="other-projects-title">{t('projects.otherProjects')}</h3>
        <div className="other-projects-grid">
          {otherProjects.map((project, index) => (
            <div key={index} className="other-project-item">
              <div className="project-logo">
                {project.logo}
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
