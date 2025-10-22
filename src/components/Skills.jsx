import './Skills.css'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation()
  
  const technicalSkills = [
    { name: t('skills.technicalSkills.reactNative'), category: t('skills.categories.mobileDevelopment') },
    { name: t('skills.technicalSkills.javaScript'), category: t('skills.categories.programmingLanguages') },
    { name: t('skills.technicalSkills.typeScript'), category: t('skills.categories.programmingLanguages') },
    { name: t('skills.technicalSkills.androidDevelopment'), category: t('skills.categories.mobileDevelopment') },
    { name: t('skills.technicalSkills.kotlin'), category: t('skills.categories.programmingLanguages') },
    { name: t('skills.technicalSkills.java'), category: t('skills.categories.programmingLanguages') },
    { name: t('skills.technicalSkills.restApiIntegration'), category: t('skills.categories.apiIntegration') },
    { name: t('skills.technicalSkills.redux'), category: t('skills.categories.stateManagement') },
    { name: t('skills.technicalSkills.firebaseIntegration'), category: t('skills.categories.apiIntegration') },
    { name: t('skills.technicalSkills.html'), category: t('skills.categories.frontendDevelopment') },
    { name: t('skills.technicalSkills.css'), category: t('skills.categories.frontendDevelopment') },
    { name: t('skills.technicalSkills.reactJs'), category: t('skills.categories.frontendDevelopment') },
    { name: t('skills.technicalSkills.nativeBaseIo'), category: t('skills.categories.uiFramework') },
    { name: t('skills.technicalSkills.materialUi'), category: t('skills.categories.uiFramework') },
    { name: t('skills.technicalSkills.retrofit'), category: t('skills.categories.networking') },
    { name: t('skills.technicalSkills.volley'), category: t('skills.categories.networking') },
    { name: t('skills.technicalSkills.jsonParsing'), category: t('skills.categories.dataHandling') },
    { name: t('skills.technicalSkills.asyncStorage'), category: t('skills.categories.dataStorage') },
    { name: t('skills.technicalSkills.butterknife'), category: t('skills.categories.androidTools') }
  ]

  const frameworks = [
    { name: t('skills.tools.androidStudio'), icon: '📱' },
    { name: t('skills.tools.vsCode'), icon: '💻' },
    { name: t('skills.tools.reactNativeCli'), icon: '⚛️' },
    { name: t('skills.tools.git'), icon: '🔧' }
  ]

  const languages = [
    { name: t('skills.spokenLanguages.english'), level: t('skills.spokenLanguages.fluent') },
    { name: t('skills.spokenLanguages.telugu'), level: t('skills.spokenLanguages.native') },
    { name: t('skills.spokenLanguages.hindi'), level: t('skills.spokenLanguages.conversational') }
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
