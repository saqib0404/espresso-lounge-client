// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No need to import tailwindcss or daisyui here
export default defineConfig({
  plugins: [react()],
})