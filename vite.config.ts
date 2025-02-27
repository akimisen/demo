import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import dynamicImport from 'vite-plugin-dynamic-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dynamicImport()],
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      }
    },
    watch: {
      // 忽略特定文件
      ignored: [
        '**/.specstory/**',
        '**/node_modules/**',
        // 添加其他需要忽略的文件或目录
      ]
    }
  },
  build: {
    outDir: 'build'
  }
})
