import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Usa el formato de módulo más nuevo
    outDir: 'dist', // Asegúrate de que el directorio de salida sea correcto
  },
  server: {
    port: parseInt(process.env.PORT) || 5173, // Utiliza el puerto de Render o un valor por defecto
    host: true, // Escucha en todas las interfaces
    headers: {
      'Cache-Control': 'no-store',
    },
  },
});
