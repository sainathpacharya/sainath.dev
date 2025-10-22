import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Passionate Mobile Developer</h3>
              <p>
                I'm a dedicated React Native and Android Developer with over 9 years of professional 
                experience in mobile application development. Currently working at Empover I-Tech Pvt Ltd, 
                I specialize in creating innovative mobile solutions that deliver exceptional user experiences.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>Quick Learner</h4>
                  <p>Enthusiastic about adopting new technologies and implementing them in real-time applications</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🤝</div>
                <div className="highlight-content">
                  <h4>Team Player</h4>
                  <p>Proven ability to work effectively both as a team member and individual contributor</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">💡</div>
                <div className="highlight-content">
                  <h4>Problem Solver</h4>
                  <p>Strong ability to understand business logic and deliver client-focused solutions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">9+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">6</div>
              <div className="stat-label">Companies Worked</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
