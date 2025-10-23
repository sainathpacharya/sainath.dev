import './Skills.css'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation()
  
  const skills = [
    'React Native',
    'JavaScript',
    'TypeScript',
    'Android Development',
    'iOS Development',
    'Kotlin',
    'Java',
    'REST API Integration',
    'Redux',
    'Firebase Integration',
    'HTML',
    'CSS',
    'React.js',
    'Material UI',
    'Retrofit',
    'Volley',
    'JSON Parsing',
    'AsyncStorage',
    'SQLite',
    'Git'
  ]

  const tools = [
    { name: 'Android Studio', icon: '📱' },
    { name: 'VS Code', icon: '💻' },
    { name: 'React Native CLI', icon: '⚛️' },
    { name: 'Git', icon: '🔧' },
    { name: 'Jira', icon: '📋' },
    { name: 'Figma', icon: '🎨' }
  ]


  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title fade-in">{t('skills.title')}</h2>
          <p className="section-subtitle fade-in fade-in-delay-1">{t('skills.subtitle')}</p>
        </div>

        <div className="skills-content">
          <div className="skills-main">
            <h3 className="skills-section-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => {
                const animationDelay = index * 0.2; // Sequential delay: 0s, 0.2s, 0.4s, etc.
                return (
                  <div 
                    key={index} 
                    className="skill-tag bounce-skill"
                    style={{
                      animationDelay: `${animationDelay}s`
                    }}
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="skills-sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">Tools & Technologies</h3>
              <div className="tools-grid">
                {tools.map((tool, index) => (
                  <div key={index} className="tool-item">
                    <span className="tool-icon">{tool.icon}</span>
                    <span className="tool-name">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
