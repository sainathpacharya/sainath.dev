# NagaSainath Reddy - Portfolio Website

A high-performance, accessible, and SEO-optimized portfolio website built with React and Vite, designed to achieve Lighthouse scores of 95+ across all categories.

## 🚀 Performance Optimizations

### Image Optimization

- ✅ Added `loading="lazy"` to all `<img>` tags
- ✅ Added `decoding="async"` for better performance
- ✅ Implemented proper alt text for all images
- ✅ Added error handling for failed image loads

### Resource Preloading

- ✅ Added `<link rel="preload">` for critical fonts
- ✅ Implemented preconnect to external domains (Google Fonts)
- ✅ Added critical CSS inline for above-the-fold content
- ✅ Optimized font loading with `display=swap`

### Build Optimizations

- ✅ Configured Vite for production builds with Terser minification
- ✅ Implemented code splitting for vendor and i18n chunks
- ✅ Enabled CSS code splitting
- ✅ Disabled sourcemaps for production
- ✅ Added console.log removal in production

## ♿ Accessibility Improvements

### Semantic HTML

- ✅ Added proper `<main>` wrapper for content
- ✅ Implemented semantic `<article>` tags for project cards
- ✅ Added proper heading hierarchy (H1 → H2 → H3)
- ✅ Used `<nav>` with proper ARIA labels

### ARIA Implementation

- ✅ Added `role="banner"` to header
- ✅ Added `role="navigation"` with aria-label
- ✅ Implemented `role="menubar"` and `role="menuitem"`
- ✅ Added `role="grid"` and `role="gridcell"` for project layouts
- ✅ Added `role="list"` and `role="listitem"` for other projects
- ✅ Added `role="complementary"` for profile information

### Keyboard Navigation

- ✅ Converted div to button for mobile menu toggle
- ✅ Added proper ARIA attributes (`aria-expanded`, `aria-controls`)
- ✅ Added descriptive `aria-label` attributes
- ✅ Implemented proper focus management

## 🔍 SEO Optimizations

### Meta Tags

- ✅ Added comprehensive meta description
- ✅ Implemented Open Graph tags for social sharing
- ✅ Added Twitter Card meta tags
- ✅ Added canonical URL
- ✅ Added robots meta tag
- ✅ Added author and keywords meta tags

### Structured Data

- ✅ Implemented JSON-LD schema for Person
- ✅ Added professional information and skills
- ✅ Included social media links
- ✅ Added organization information

### Site Files

- ✅ Created `robots.txt` with sitemap reference
- ✅ Generated `sitemap.xml` with proper structure
- ✅ Added `manifest.json` for PWA compliance

## 🛡️ Best Practices

### PWA Implementation

- ✅ Added VitePWA plugin with Workbox
- ✅ Implemented service worker for caching
- ✅ Added runtime caching for Google Fonts
- ✅ Created PWA manifest with proper icons
- ✅ Added offline support

### Security Headers

- ✅ Added `.htaccess` with security headers
- ✅ Implemented Content Security Policy
- ✅ Added X-Frame-Options and X-Content-Type-Options
- ✅ Added Referrer-Policy and Permissions-Policy

### Code Quality

- ✅ Removed unused imports
- ✅ Added proper error handling
- ✅ Implemented proper link attributes (`rel="noopener noreferrer"`)
- ✅ Added comprehensive ARIA labels

## 📊 Performance Metrics

### Lighthouse Scores (Target: 95+)

- **Performance**: 95+ (lazy loading, critical CSS, code splitting)
- **Accessibility**: 95+ (ARIA labels, semantic HTML, keyboard navigation)
- **Best Practices**: 95+ (HTTPS, security headers, PWA)
- **SEO**: 100 (structured data, meta tags, sitemap)

### Core Web Vitals

- **LCP**: < 2.5s (critical CSS, font preloading)
- **FID**: < 100ms (optimized JavaScript)
- **CLS**: < 0.1 (proper image dimensions, font loading)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sainathpacharya/sainath.dev.git
cd sainath.dev

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
```

### Production Build

```bash
# Build optimized version
npm run build:production
# or
yarn build:production

# Deploy to GitHub Pages
npm run deploy
# or
yarn deploy
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:production` - Build with production optimizations
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run test` - Run tests
- `npm run test:coverage` - Run tests with coverage
- `npm run deploy` - Deploy to GitHub Pages

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section
│   ├── About.jsx        # About section
│   ├── Skills.jsx       # Skills section
│   ├── Experience.jsx   # Work experience
│   ├── Projects.jsx     # Featured projects
│   ├── Testimonials.jsx # Client testimonials
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Site footer
├── data/                # Static data
├── i18n/                # Internationalization
└── test/                 # Test files
```

## 🌐 Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React i18next** - Internationalization
- **EmailJS** - Contact form handling
- **PWA** - Progressive Web App features
- **Workbox** - Service worker and caching

## 📱 Features

- **Responsive Design** - Mobile-first approach
- **Multi-language Support** - English, Spanish, French, German, Portuguese, Finnish
- **PWA Ready** - Installable and offline support
- **SEO Optimized** - Structured data and meta tags
- **Accessible** - WCAG 2.1 compliant
- **Fast Loading** - Optimized for Core Web Vitals

## 🔧 Configuration

### Vite Configuration

The project uses Vite with the following optimizations:

- Terser minification
- Code splitting
- CSS code splitting
- PWA plugin with Workbox
- Production optimizations

### Build Output

- **Total Bundle**: ~350KB (274KB main + 64KB vendor/i18n)
- **Gzip Compression**: ~82KB total
- **PWA Assets**: Service worker and manifest
- **Code Splitting**: Vendor and i18n chunks separated

## 📈 Monitoring

### Tools for Validation

- **Lighthouse**: Chrome DevTools or PageSpeed Insights
- **WebPageTest**: Detailed performance analysis
- **Accessibility**: axe-core browser extension
- **PWA**: Chrome DevTools Application tab

### Key Metrics to Monitor

- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)
- Time to Interactive (TTI)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**NagaSainath Reddy**

- Lead Engineer at Ratna Global Technologies
- React Native & Android Developer
- 10+ years of experience in mobile app development

## 🔗 Links

- **Portfolio**: [thepalles.co.in](https://thepalles.co.in)
- **LinkedIn**: [linkedin.com/in/naga-sainath-reddy-palle-32935a166](https://www.linkedin.com/in/naga-sainath-reddy-palle-32935a166/)
- **Email**: sainathp.acharya@gmail.com
