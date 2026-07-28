import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 设为相对路径，保证在 github.io 下正常加载静态资源
})
