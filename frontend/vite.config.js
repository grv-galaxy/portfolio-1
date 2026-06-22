import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/portfolio-1/',   // ← add this line
  plugins: [vue()]
})