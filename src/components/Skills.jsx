import './Skills.css'

const Skills = () => {
  const technicalSkills = [
    { name: 'React Native', level: 95, category: 'Mobile Development' },
    { name: 'JavaScript', level: 90, category: 'Programming' },
    { name: 'Android Development', level: 88, category: 'Mobile Development' },
    { name: 'Kotlin', level: 85, category: 'Programming' },
    { name: 'REST API', level: 90, category: 'Backend' },
    { name: 'Redux', level: 85, category: 'State Management' },
    { name: 'NativeBase.io', level: 80, category: 'UI Framework' },
    { name: 'Firebase', level: 75, category: 'Backend Services' },
    { name: 'Retrofit', level: 80, category: 'Networking' },
    { name: 'Volley', level: 75, category: 'Networking' },
    { name: 'Butterknife', level: 70, category: 'Android Tools' },
    { name: 'JSON Parsing', level: 90, category: 'Data Handling' }
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
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technical skills and technologies I work with</p>
        </div>

        <div className="skills-content">
          <div className="skills-main">
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <div key={category} className="skill-category">
                <h3 className="category-title">{category}</h3>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skills-sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">Development Tools</h3>
              <div className="tools-grid">
                {frameworks.map((tool, index) => (
                  <div key={index} className="tool-item">
                    <span className="tool-icon">{tool.icon}</span>
                    <span className="tool-name">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">Languages</h3>
              <div className="languages-list">
                {languages.map((lang, index) => (
                  <div key={index} className="language-item">
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
