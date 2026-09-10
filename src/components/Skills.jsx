import './Skills.css'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation()
  
  const skillKeys = [
    'reactNative',
    'typeScript',
    'javaScript',
    'flutter',
    'dart',
    'swift',
    'kotlin',
    'java',
    'redux',
    'zustand',
    'restApiIntegration',
    'graphql',
    'firebaseIntegration',
    'jestRntl',
    'jsiFabric',
    'hermes',
    'githubActions',
    'webrtc',
    'cleanArchitecture',
    'oauthJwt'
  ]

  const tools = [
    { key: 'androidStudio', icon: '📱' },
    { key: 'vsCode', icon: '💻' },
    { key: 'reactNativeCli', icon: '⚛️' },
    { key: 'git', icon: '🔧' },
    { key: 'jira', icon: '📋' },
    { key: 'figma', icon: '🎨' },
    { key: 'githubActions', icon: '🚀' },
    { key: 'browserStack', icon: '🧪' }
  ]

  const spokenLanguages = [
    { nameKey: 'english', levelKey: 'c1Professional' },
    { nameKey: 'telugu', levelKey: 'native' },
    { nameKey: 'hindi', levelKey: 'conversational' }
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
            <h3 className="skills-section-title">{t('skills.technicalSkillsTitle')}</h3>
            <div className="skills-grid">
              {skillKeys.map((skillKey, index) => {
                const animationDelay = index * 0.12
                return (
                  <div 
                    key={skillKey} 
                    className="skill-tag bounce-skill"
                    style={{
                      animationDelay: `${animationDelay}s`
                    }}
                  >
                    {t(`skills.technicalSkills.${skillKey}`)}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="skills-sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">{t('skills.toolsTechnologies')}</h3>
              <div className="tools-grid">
                {tools.map((tool) => (
                  <div key={tool.key} className="tool-item">
                    <span className="tool-icon">{tool.icon}</span>
                    <span className="tool-name">{t(`skills.tools.${tool.key}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">{t('skills.languages')}</h3>
              <div className="languages-list">
                {spokenLanguages.map((language) => (
                  <div key={language.nameKey} className="language-item">
                    <span className="language-name">{t(`skills.spokenLanguages.${language.nameKey}`)}</span>
                    <span className="language-level">{t(`skills.spokenLanguages.${language.levelKey}`)}</span>
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
