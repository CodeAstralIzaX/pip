import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    // Image optimization: pure-JS, no native binaries — works on Netlify CI
    ViteImageOptimizer({
      png:  { quality: 75 },
      jpeg: { quality: 75 },
      jpg:  { quality: 75 },
      webp: { lossless: false, quality: 75 },
      svg: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: true },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          // lucide-react is a large pure-static icon library (~400KB raw).
          // Isolating it means the main app bundle doesn't grow when new icons
          // are added, and browsers can cache it independently.
          if (id.includes('/lucide-react/')) return 'icons';
          // Everything else (React, Radix, router, etc.) stays in vendor.
          // Splitting React into its own chunk previously caused a circular
          // chunk dependency (vendor → react-vendor → vendor), so we keep
          // all remaining node_modules together.
          return 'vendor';
        },
      },
    },
  },
})
