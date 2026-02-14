import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      proxy: {
        // Ogni volta che React vede un link che inizia con "/api"...
        '/api': {
          // ...lo gira internamente a Python sulla porta 8000
          target: 'http://127.0.0.1:8000',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  })
