import './Experience.css'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const { t } = useTranslation()
  
  const experiences = [
    {
      company: 'Ratna Global Technologies Private Limited',
      position: 'Lead Engineer',
      duration: 'December 2025 - Present',
      location: 'Hyderabad',
      logo: '/images/ratna-global-logo.svg',
      description: 'Leading engineering teams and mobile application development using React Native and Android technologies. Working on enterprise-level applications and delivering high-quality solutions.',
      highlights: [
        'Leading engineering teams and technical architecture decisions',
        'Developing cutting-edge mobile applications for enterprise clients',
        'Mentoring development teams and conducting code reviews',
        'Implementing best practices for mobile app development and team processes'
      ]
    },
    {
      company: 'Empover I-Tech Pvt. Ltd',
      position: 'Android/React-Native Developer',
      duration: 'May 2022 - December 2025',
      location: 'Hyderabad',
      logo: '/images/empover-logo.svg',
      description: 'Led mobile application development using React Native and Android technologies. Worked on enterprise-level applications and delivered high-quality solutions.',
      highlights: [
        'Developed multiple React Native applications for enterprise clients',
        'Led technical architecture decisions for mobile projects',
        'Mentored junior developers and conducted code reviews',
        'Implemented best practices for mobile app development'
      ]
    },
    {
      company: 'V-Empower Solutions Pvt. Ltd',
      position: 'Android/React-Native Developer',
      duration: 'April 2019 - May 2022',
      location: 'Hyderabad',
      logo: '/images/v-empower-logo.svg',
      description: 'Specialized in cross-platform mobile development using React Native and native Android development. Worked on various client projects across different industries.',
      highlights: [
        'Built cross-platform mobile applications using React Native',
        'Integrated third-party libraries and APIs',
        'Optimized app performance and user experience',
        'Collaborated with cross-functional teams'
      ]
    },
    {
      company: 'Eminosoft India Pvt Ltd',
      position: 'Android Developer',
      duration: 'July 2018 - April 2019',
      location: 'Hyderabad',
      logo: '/images/eminosoft-logo.svg',
      description: 'Focused on native Android development using Java and Kotlin. Developed custom Android applications with complex business logic.',
      highlights: [
        'Developed native Android applications using Java and Kotlin',
        'Implemented RESTful API integration',
        'Worked with SQLite databases and data persistence',
        'Created custom UI components and animations'
      ]
    },
    {
      company: 'Savithru Technologies',
      position: 'Android Developer',
      duration: 'July 2017 - May 2018',
      location: 'Bangalore',
      logo: '/images/savithru-logo.svg',
      description: 'Worked on Android application development with focus on user interface design and backend integration.',
      highlights: [
        'Developed Android applications from concept to deployment',
        'Implemented modern Android development practices',
        'Worked with Firebase and cloud services',
        'Collaborated with UI/UX designers'
      ]
    },
    {
      company: 'Aven App Solutions Pvt. Ltd.',
      position: 'Android Developer',
      duration: 'Oct 2016 - July 2017',
      location: 'Hyderabad',
      logo: '/images/aven-app-logo.svg',
      description: 'Started professional Android development career, working on various client projects and learning industry best practices.',
      highlights: [
        'Built Android applications using Java',
        'Learned Android SDK and development tools',
        'Worked with JSON parsing and API integration',
        'Gained experience in mobile app testing'
      ]
    },
    {
      company: 'New MEK Solutions Pvt. Ltd',
      position: 'Android Developer',
      duration: 'May 2015 - Sep 2016',
      location: 'Hyderabad',
      logo: '/images/new-mek-logo.svg',
      description: 'Began professional career in mobile development, working on Android applications and learning the fundamentals of mobile app development.',
      highlights: [
        'Started Android development career',
        'Learned core Android concepts and architecture',
        'Worked on small to medium scale projects',
        'Gained foundational knowledge in mobile development'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('experience.title')}</h2>
          <p className="section-subtitle">{t('experience.subtitle')}</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="company-info">
                    <div className="company-logo">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div className="logo-placeholder" style={{display: 'none'}}>
                        <span>{exp.company.charAt(0)}</span>
                      </div>
                    </div>
                    <h3 className="company-name">{exp.company}</h3>
                  </div>
                  <span className="duration">{exp.duration}</span>
                </div>
                <h4 className="position">{exp.position}</h4>
                <p className="location">📍 {exp.location}</p>
                <p className="description">{exp.description}</p>
                <ul className="highlights">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
