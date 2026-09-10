import './Experience.css'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const { t } = useTranslation()
  
  const experiences = [
    {
      company: 'Independent',
      position: 'Lead / Senior React Native Engineer',
      duration: 'April 2026 - Present',
      location: 'Hyderabad, India · Open to Global Relocation',
      logo: null,
      description: 'Available immediately following completion of prior role (March 2026). Actively pursuing Lead / Senior React Native engineering opportunities — open to remote, hybrid, and on-site roles worldwide.',
      highlights: [
        'Open to remote, hybrid, and on-site Lead / Senior React Native roles worldwide',
        'Open to visa sponsorship and global relocation',
        'Prior role at Ratna Global Technologies concluded March 2026'
      ]
    },
    {
      company: 'Ratna Global Technologies Pvt. Ltd.',
      position: 'Lead React Native Engineer',
      duration: 'December 2024 - March 2026',
      location: 'Hyderabad, India',
      logo: `${import.meta.env.BASE_URL}images/ratna-global-logo.png`,
      description: 'Led the mobile engineering team across Collective Health and DMS projects while contributing hands-on in 2-week JIRA-driven sprints.',
      highlights: [
        'Collective Health (React Native): HIPAA-aligned US employee health benefits platform — 50K+ downloads, 4.4★ App Store; 85% Jest + RNTL coverage on contributed modules',
        'DMS Booth & DMS Distributor (Flutter): led Flutter SDK upgrade and module updates for Delhi Milk Scheme apps',
        'Maintained GitHub Actions CI with BrowserStack so every release was device-tested before production',
        'Led team PR reviews, mentored engineers on code quality, and collaborated with product managers, designers, and QA'
      ]
    },
    {
      company: 'Empover I-Tech Pvt. Ltd.',
      position: 'Senior React Native Developer',
      duration: 'May 2022 - December 2024',
      location: 'Hyderabad, India',
      logo: `${import.meta.env.BASE_URL}images/empover-logo.png`,
      description: 'Owned end-to-end React Native development for enterprise and agri-tech applications serving 100K+ MAU across multiple production apps.',
      highlights: [
        'Architected, built, and shipped Gold Club (50K+, 4.0★), NSL Subeej Kisan (50K+, 4.2★), and MCRC App (4.0★) from design through Play Store release',
        'Delivered feature modules across Corteva Farmer Connect (1M+), Corteva Roots (100K+), Corteva Daksh, ROOTS Employee, NSL Kissan Vikas, and NSL Retail Audit',
        'Built a reusable component library consumed across 5 production React Native apps',
        'Migrated a large codebase from class components to React Hooks + TypeScript — onboarding time reduced 40%',
        'Integrated FCM with APNs via native Swift modules — real-time feature adoption increased 50% within 30 days',
        'Improved load time 40% via Hermes tuning, FlatList optimisation, and image caching; established Jest + RNTL testing'
      ]
    },
    {
      company: 'V-Empower Solutions Pvt. Ltd.',
      position: 'React Native Developer',
      duration: 'April 2019 - May 2022',
      location: 'Hyderabad, India',
      logo: `${import.meta.env.BASE_URL}images/v-empower-logo.png`,
      description: 'Developed MeetHour from scratch in React Native and contributed native Android modules for ride-hailing apps.',
      highlights: [
        'Built MeetHour from scratch — end-to-end encrypted video conferencing, 100K+ downloads, 4.2★; owned architecture, UI, features, and store releases',
        'Designed a WebRTC native module bridge (Java → React Native) with a fully typed JS API, plus scheduling, whiteboard, and in-meeting controls',
        'Contributed booking, trip tracking, and driver/partner workflows on Wakuk Passenger and Wakuk Partner (native Android)',
        'Integrated third-party SDKs and REST APIs with caching — load times reduced 25% and offline resilience improved'
      ]
    },
    {
      company: 'Eminosoft India Pvt. Ltd.',
      position: 'Android Developer',
      duration: 'July 2018 - April 2019',
      location: 'Hyderabad, India',
      logo: `${import.meta.env.BASE_URL}images/eminosoft-logo.png`,
      description: 'Developed native Android applications in Java and Kotlin with RESTful API integration, SQLite persistence, and Material Design UI.',
      highlights: [
        'Developed native Android applications using Java and Kotlin',
        'Implemented RESTful API integration and SQLite persistence',
        'Third-party library integrations and UX improvements that drove measurable gains in downloads and ratings',
        'Created custom UI components following Material Design'
      ]
    },
    {
      company: 'Savithru Technologies',
      position: 'Android Developer',
      duration: 'July 2017 - May 2018',
      location: 'Bangalore, India',
      logo: `${import.meta.env.BASE_URL}images/savithru-logo.png`,
      description: 'Built Android apps with Firebase, UI design, and backend integration.',
      highlights: [
        'Developed Android applications from concept to deployment',
        'Worked with Firebase and cloud services',
        'Implemented modern Android development practices',
        'Collaborated on UI design and backend integration'
      ]
    },
    {
      company: 'Aven App Solutions',
      position: 'Android Developer',
      duration: 'October 2016 - July 2017',
      location: 'Hyderabad, India',
      logo: `${import.meta.env.BASE_URL}images/aven-app-logo.png`,
      description: 'Native Android development in Java with JSON/API integration and mobile testing.',
      highlights: [
        'Built native Android applications using Java',
        'Worked with JSON parsing and API integration',
        'Gained experience in mobile app testing'
      ]
    },
    {
      company: 'New MEK Solutions',
      position: 'Android Developer',
      duration: 'May 2015 - September 2016',
      location: 'Hyderabad, India',
      logo: `${import.meta.env.BASE_URL}images/new-mek-logo.png`,
      description: 'Foundational Android development across fintech, edtech, and SME client projects.',
      highlights: [
        'Started professional Android development career',
        'Learned core Android concepts and architecture',
        'Worked on fintech, edtech, and SME client projects'
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
                      {exp.logo ? (
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          loading="lazy"
                          decoding="async"
                          width="48"
                          height="48"
                          fetchpriority="low"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                      ) : null}
                      <div className="logo-placeholder" style={{display: exp.logo ? 'none' : 'flex'}}>
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
