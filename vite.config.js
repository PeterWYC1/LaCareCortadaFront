import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Usa el formato de módulo más nuevo
    outDir: 'dist', // Asegúrate de que el directorio de salida sea correcto
  },
  server: {
    headers: {
      'Cache-Control': 'no-store',
    },
  },
})
