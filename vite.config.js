import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use subfolder path for github.io domain
  base: process.env.NODE_ENV === 'production' ? '/bpb_website/' : '/',
  server: {
    host: true, // Allow external connections
    port: 3000, // Set a consistent port
    open: true, // Automatically open browser
  },
  preview: {
    host: true,
    port: 4173,
    open: true,
  }
})
