import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// 注意：如果使用 GitHub Pages，base 应该是 '/仓库名/'
// 如果使用自定义域名，base 应该是 '/'
// 可以通过环境变量 VITE_BASE_PATH 设置，例如：VITE_BASE_PATH=/my-repo/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/'
})

