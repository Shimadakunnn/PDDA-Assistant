import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/PDDA-Assistant/',
  server: {
    port: 5173,
    open: true
  }
})
