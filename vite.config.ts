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
    // Split vendor code and react into separate chunks to reduce initial payload
    rollupOptions: {
      output: {
        // Keep things simple and avoid circular chunk references by grouping
        // all node_modules into a single `vendor` chunk. Splitting out a
        // separate `react-vendor` chunk previously introduced a circular
        // dependency between chunks which can cause runtime errors like
        // "useLayoutEffect is undefined" if chunk load order isn't correct.
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
})
