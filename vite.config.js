import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Use '/' for custom domain (collegecircle.app)
  // If deploying to GitHub Pages without custom domain, use: base: '/repository-name/'
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://clg-server.vercel.app',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'docs',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', 'react-hot-toast'],
        },
      },
    },
  },
})
