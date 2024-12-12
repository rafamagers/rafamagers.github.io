import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rafamagers.github.io/', // Cambia 'nombre-del-repositorio' por el nombre real de tu repo

})
