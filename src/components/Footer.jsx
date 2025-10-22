import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="brand-name">NagaSainath Reddy</h3>
              <p className="brand-tagline">React Native & Android Developer</p>
              <p className="brand-description">
                Passionate about creating innovative mobile solutions that deliver 
                exceptional user experiences. 9+ years of professional experience 
                in mobile application development.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="footer-list">
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4 className="footer-title">Technologies</h4>
                <ul className="footer-list">
                  <li>React Native</li>
                  <li>JavaScript</li>
                  <li>Android Development</li>
                  <li>Kotlin</li>
                  <li>REST API</li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4 className="footer-title">Connect</h4>
                <div className="social-links">
                  <a href="https://linkedin.com/in/nagasainath" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span className="social-icon">💼</span>
                    LinkedIn
                  </a>
                  <a href="https://github.com/nagasainath" target="_blank" rel="noopener noreferrer" className="social-link">
                    <span className="social-icon">🐙</span>
                    GitHub
                  </a>
                  <a href="mailto:nagasainath@example.com" className="social-link">
                    <span className="social-icon">📧</span>
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; {currentYear} NagaSainath Reddy. All rights reserved.</p>
            </div>
            <div className="footer-credits">
              <p>Built with ❤️ using React & Vite</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
