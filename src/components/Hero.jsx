import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">NagaSainath Reddy</span>
            </h1>
            <h2 className="hero-subtitle">
              React Native & Android Developer
            </h2>
            <p className="hero-description">
              9+ years of professional experience in Android application development 
              with expertise in React Native, NativeBase.io, and Redux frameworks. 
              Passionate about creating innovative mobile solutions and delivering 
              client-focused results.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  <span>NS</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>NagaSainath Reddy</h3>
                <p>Mobile App Developer</p>
                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">9+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">20+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
