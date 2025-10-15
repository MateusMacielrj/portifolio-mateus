import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portifolio-mateus/', // nome do seu repositório
  plugins: [react()],
})
