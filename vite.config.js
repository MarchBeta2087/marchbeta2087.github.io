import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: '/', // 个人主站必须是 '/'，如果是项目站则是 '/项目名/'
})
