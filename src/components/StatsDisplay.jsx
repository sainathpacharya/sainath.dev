import React from 'react'
import './StatsDisplay.css'
import { portfolioStats } from '../data/stats'

const StatsDisplay = ({ showTitle = true, className = '' }) => {
  return (
    <div className={`stats-display ${className}`}>
      {showTitle && <h3 className="stats-title">Portfolio Stats</h3>}
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-number">{portfolioStats.yearsExperience}+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{portfolioStats.totalProjects}+</div>
          <div className="stat-label">Projects</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{portfolioStats.companiesWorked}</div>
          <div className="stat-label">Companies</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{portfolioStats.totalPlayStoreApps}</div>
          <div className="stat-label">Play Store Apps</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{portfolioStats.totalDownloads}</div>
          <div className="stat-label">Total Downloads</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{portfolioStats.averageRating}</div>
          <div className="stat-label">Average Rating</div>
        </div>
      </div>
    </div>
  )
}

export default StatsDisplay
