import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// ...existing code...

// Add the PurgeCSS plugin to remove unused CSS during build
// Note: install with: npm install -D vite-plugin-purgecss
import PurgeCss from 'vite-plugin-purgecss'

export default defineConfig({
  plugins: [
    react(),
    PurgeCss({
      // files to scan for used selectors
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
        './public/**/*.html',
      ],
      // safelist selectors and patterns that are added/used dynamically by JS or template
      safelist: {
        standard: [
          // bootstrap / template dynamic classes
          'active', 'show', 'collapse', 'modal', 'open', 'dropdown', 'fade',
          // site-specific classes used in templates
          'scrollto', 'aos-animate', 'img-fluid', 'container', 'row', 'col-lg-6',
        ],
        // allow regex patterns for icon libraries, vendor classes, AOS, Swiper, Isotope, GLightbox
        deep: [
          /^bx/,        // Boxicons (bx, bx-*)
          /^ri/,        // Remix icons (ri-*)
          /^aos/,       // AOS classes
          /^swiper/,    // Swiper classes
          /^glightbox/, // GLightbox classes
          /^isotope/,   // Isotope-related classes if any
        ],
        // fallback patterns
        greedy: [
          // classes that might be concatenated or generated
          /-active$/, /-open$/, /show-/, /-fade$/, /-in$/
        ]
      },
      // default is to apply only for production builds; keep that behavior
      // additional options can go here if needed
    })
  ],
  // ...existing code...
})
