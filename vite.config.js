// import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      find: './runtimeConfig', // Vite Config
      replacement: './runtimeConfig.browser', // Vite Config
      
      // '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
