import './Projects.css'

const Projects = () => {
  const featuredProjects = [
    {
      title: 'NSL Subeej Kisan',
      description: 'Comprehensive agricultural app empowering Nuziveedu farmers with tools, insights, and advisory services to improve farming practices.',
      role: 'Lead Developer',
      tech: ['React Native', 'JavaScript'],
      highlights: [
        'Led development team and architected the complete mobile application solution',
        'Developed weather updates and market price tracking features for farmers',
        'Implemented multi-language support for diverse farming communities',
        'Created farming calculators and product scan functionality for agricultural guidance',
        'Built knowledge centre and nearby retailers locator for comprehensive farmer support'
      ],
      image: '/images/subbeej-logo.png',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.nsl.subeejkisan&hl=en_IN'
    },
    {
      title: 'NSL VyaparaMitra',
      description: 'Connect with retailers with the NSL\'s distribution system and implement NSL\'s sales excellence Programs.',
      role: 'Developer',
      tech: ['React Native', 'JavaScript'],
      highlights: [
        'Ensured seamless functionality and UI responsiveness across diverse mobile devices and tablets',
        'Developed and integrated all app modules, including screens, logic, and backend connections',
        'Conducted precise UI enhancements to optimize user experience'
      ],
      image: '📱'
    },
    {
      title: 'MCRC App',
      description: 'Develop improved crop varieties, high-quality planting materials, and sustainable production practices for farmers.',
      role: 'Developer',
      tech: ['React Native', 'JavaScript'],
      highlights: [
        'Ensured seamless functionality and UI responsiveness across diverse mobile devices and tablets',
        'Conducted precise UI enhancements to optimize user experience and ensure consistent usability',
        'Developed farmer-friendly interface for agricultural solutions'
      ],
      image: '🌾'
    },
    {
      title: 'Corteva Daksh',
      description: 'Drive Demand Generation of Corteva products through activities conducted by Corteva field staff with standardized reporting.',
      role: 'Developer',
      tech: ['React Native', 'JavaScript'],
      highlights: [
        'Designed and developed specific application modules using React Native',
        'Implemented features facilitating standardization of activities for Corteva field staff',
        'Created tools to manage activity reporting and enhance team productivity'
      ],
      image: '📊'
    },
    {
      title: 'MeetHour App',
      description: 'Fully encrypted, 100% free video conferencing solution with scheduling, rescheduling, and whiteboard features.',
      role: 'Developer',
      tech: ['React Native', 'JavaScript'],
      highlights: [
        'Enhanced UI for version 2.0 of the MeetHour app with user-friendly interface',
        'Integrated new features like whiteboard into the application',
        'Worked on bridging native Java Modules to React-Native for improved functionality'
      ],
      image: '🎥'
    },
    {
      title: 'Wakuk-Passenger',
      description: 'Ride-hailing service application offering multiple travel options across Hyderabad and Guam.',
      role: 'Developer',
      tech: ['React Native', 'JavaScript'],
      highlights: [
        'Designed and developed user-friendly UI for multiple travel options',
        'Implemented various functionalities to ensure safety, ease, and affordability',
        'Integrated backend systems for smooth booking and traveling operations'
      ],
      image: '🚗'
    }
  ]

  const otherProjects = [
    'MTracker App',
    'Corteva VTS',
    'Corteva CD Upload tool',
    'PIQYU',
    'mpConnect',
    'TheatreMart',
    'NSL Kissan Vikas',
    'Wakuk - Partner',
    'Corteva Roots',
    'MCRC App'
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my notable work and achievements</p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-card">
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
                <button className="btn-outline">View Details</button>
                {project.playStoreLink && (
                  <a 
                    href={project.playStoreLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    View on Play Store
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="other-projects">
          <h3 className="other-projects-title">Other Projects</h3>
          <div className="other-projects-grid">
            {otherProjects.map((project, index) => (
              <div key={index} className="other-project-item">
                <span className="project-name">{project}</span>
                <span className="project-type">Mobile App</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
