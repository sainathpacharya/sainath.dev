import './Skills.css'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation()
  
  const technicalSkills = [
    { name: 'React Native', category: 'Mobile Development' },
    { name: 'JavaScript', category: 'Programming Languages' },
    { name: 'TypeScript', category: 'Programming Languages' },
    { name: 'Android Development', category: 'Mobile Development' },
    { name: 'Kotlin', category: 'Programming Languages' },
    { name: 'Java', category: 'Programming Languages' },
    { name: 'REST API Integration', category: 'API Integration' },
    { name: 'Redux', category: 'State Management' },
    { name: 'Firebase Integration', category: 'API Integration' },
    { name: 'HTML', category: 'Frontend Development' },
    { name: 'CSS', category: 'Frontend Development' },
    { name: 'React.js', category: 'Frontend Development' },
    { name: 'NativeBase.io', category: 'UI Framework' },
    { name: 'Material UI', category: 'UI Framework' },
    { name: 'Retrofit', category: 'Networking' },
    { name: 'Volley', category: 'Networking' },
    { name: 'JSON Parsing', category: 'Data Handling' },
    { name: 'AsyncStorage', category: 'Data Storage' },
    { name: 'Butterknife', category: 'Android Tools' }
  ]

  const frameworks = [
    { name: 'Android Studio', icon: '📱' },
    { name: 'VS Code', icon: '💻' },
    { name: 'React Native CLI', icon: '⚛️' },
    { name: 'Git', icon: '🔧' }
  ]

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Telugu', level: 'Native' },
    { name: 'Hindi', level: 'Conversational' }
  ]

  const groupedSkills = technicalSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {})

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title fade-in">{t('skills.title')}</h2>
          <p className="section-subtitle fade-in fade-in-delay-1">{t('skills.subtitle')}</p>
        </div>

        <div className="skills-content">
          <div className="skills-main">
            {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => (
              <div key={category} className={`skill-category fade-in fade-in-delay-${(categoryIndex % 3) + 2}`}>
                <h3 className="category-title">{category}</h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className={`skill-tag bounce-in`} style={{animationDelay: `${index * 0.1}s`}}>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skills-sidebar">
            <div className="sidebar-section slide-in-right">
              <h3 className="sidebar-title">{t('skills.toolsTechnologies')}</h3>
              <div className="tools-grid">
                {frameworks.map((tool, index) => (
                  <div key={index} className={`tool-item scale-in`} style={{animationDelay: `${index * 0.2}s`}}>
                    <span className="tool-icon">{tool.icon}</span>
                    <span className="tool-name">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="sidebar-section slide-in-right">
              <h3 className="sidebar-title">{t('skills.languages')}</h3>
              <div className="languages-list">
                {languages.map((lang, index) => (
                  <div key={index} className={`language-item fade-in`} style={{animationDelay: `${index * 0.3}s`}}>
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
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
