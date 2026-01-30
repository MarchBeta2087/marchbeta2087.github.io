import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 👇 1. 引入 Tailwind v4 插件
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 👇 2. 把它加在这里
    tailwindcss(),
  ],
})
