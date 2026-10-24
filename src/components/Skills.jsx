import './Skills.css'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation()
  
  const skillGroups = [
    {
      titleKey: 'skills.groups.mobile',
      skills: ['reactNative', 'reactNativeCli', 'reactNavigation', 'reanimated', 'hermes', 'jsiFabric', 'expoEas', 'codePush', 'flutter', 'dart']
    },
    {
      titleKey: 'skills.groups.languagesNative',
      skills: ['typeScript', 'javaScript', 'swift', 'kotlin', 'java', 'nativeBridging', 'testFlight', 'xcTest']
    },
    {
      titleKey: 'skills.groups.stateData',
      skills: ['redux', 'zustand', 'contextApi', 'restApiIntegration', 'graphql', 'webSockets', 'firebaseIntegration', 'mmkv', 'sqlite', 'realm']
    },
    {
      titleKey: 'skills.groups.testingCloud',
      skills: ['jestRntl', 'tdd', 'githubActions', 'browserStack', 'fastlane', 'sentry', 'crashlytics', 'awsIam', 'awsAmplify']
    },
    {
      titleKey: 'skills.groups.architecture',
      skills: ['cleanArchitecture', 'solid', 'oauthJwt', 'hipaa', 'biometric', 'gdpr', 'mixpanel', 'amplitude', 'webrtc']
    }
  ]

  const tools = [
    { key: 'androidStudio', icon: '📱' },
    { key: 'vsCode', icon: '💻' },
    { key: 'git', icon: '🔧' },
    { key: 'jira', icon: '📋' },
    { key: 'figma', icon: '🎨' },
    { key: 'fastlane', icon: '🚀' },
    { key: 'sentry', icon: '📡' },
    { key: 'aws', icon: '☁️' }
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
          <div className="skills-groups">
            {skillGroups.map((group) => (
              <div key={group.titleKey} className="skill-category">
                <h3 className="category-title">{t(group.titleKey)}</h3>
                <div className="skills-grid">
                  {group.skills.map((skillKey) => (
                    <div key={skillKey} className="skill-tag">
                      {t(`skills.technicalSkills.${skillKey}`)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
