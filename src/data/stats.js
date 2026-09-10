// Centralized stats data for the portfolio
export const portfolioStats = {
  // Experience stats
  yearsExperience: 10,
  totalProjects: 15,
  companiesWorked: 7,
  languagesKnown: 3,
  
  // Project stats
  totalPlayStoreApps: 15,
  totalDownloads: '1M+',
  averageRating: '4.2★',
  
  // Featured projects count
  featuredProjects: 8,
  
  // Other projects count
  otherProjects: 9,
  
  // Skills count
  technicalSkills: 20,
  toolsAndFrameworks: 8,
  
  // Experience timeline
  experienceYears: [
    { year: 2015, company: 'New MEK Solutions' },
    { year: 2016, company: 'Aven App Solutions' },
    { year: 2017, company: 'Savithru Technologies' },
    { year: 2018, company: 'Eminosoft India Pvt. Ltd.' },
    { year: 2019, company: 'V-Empower Solutions Pvt. Ltd.' },
    { year: 2022, company: 'Empover I-Tech Pvt. Ltd.' },
    { year: 2024, company: 'Ratna Global Technologies Pvt. Ltd.' }
  ]
}

// Helper functions
export const getFormattedYears = () => `${portfolioStats.yearsExperience}+`
export const getFormattedProjects = () => `${portfolioStats.totalProjects}+`
export const getFormattedCompanies = () => `${portfolioStats.companiesWorked}`
export const getFormattedLanguages = () => `${portfolioStats.languagesKnown}`
export const getFormattedDownloads = () => portfolioStats.totalDownloads
export const getFormattedRating = () => portfolioStats.averageRating
