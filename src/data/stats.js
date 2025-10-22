// Centralized stats data for the portfolio
export const portfolioStats = {
  // Experience stats
  yearsExperience: 10,
  totalProjects: 20,
  companiesWorked: 7,
  languagesKnown: 3,
  
  // Project stats
  totalPlayStoreApps: 11,
  totalDownloads: '280K+',
  averageRating: '4.1★',
  
  // Featured projects count
  featuredProjects: 5,
  
  // Other projects count
  otherProjects: 12,
  
  // Skills count
  technicalSkills: 19,
  toolsAndFrameworks: 4,
  
  // Experience timeline
  experienceYears: [
    { year: 2015, company: 'New MEK Solutions Pvt. Ltd' },
    { year: 2016, company: 'Aven App Solutions Pvt. Ltd.' },
    { year: 2017, company: 'Savithru Technologies' },
    { year: 2018, company: 'Eminosoft India Pvt Ltd' },
    { year: 2019, company: 'V-Empower Solutions Pvt. Ltd' },
    { year: 2022, company: 'Empover I-Tech Pvt. Ltd' },
    { year: 2025, company: 'Ratna Global Technologies Private Limited' }
  ]
}

// Helper functions
export const getFormattedYears = () => `${portfolioStats.yearsExperience}+`
export const getFormattedProjects = () => `${portfolioStats.totalProjects}+`
export const getFormattedCompanies = () => `${portfolioStats.companiesWorked}`
export const getFormattedLanguages = () => `${portfolioStats.languagesKnown}`
export const getFormattedDownloads = () => portfolioStats.totalDownloads
export const getFormattedRating = () => portfolioStats.averageRating
