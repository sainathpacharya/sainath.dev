import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sainath.dev/', // Required for GitHub Pages deployment
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.spec.js',
        '**/*.spec.jsx',
        'dist/',
        'coverage/',
        'public/',
        'src/main.jsx',
        'src/i18n/index.js'
      ]
    }
  }
})
