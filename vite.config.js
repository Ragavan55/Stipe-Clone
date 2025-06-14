import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        'custom-blue': '#635bff', // Define your custom color here
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})



