import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/lista/', // Base URL for GitHub Pages
  plugins: [react()],
})
