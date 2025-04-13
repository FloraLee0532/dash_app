import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import tailwindcss from '@tailwindcss/vite'
import path from 'path'
export default defineConfig({
  resolve: {
    alias:{
      "@": path.resolve(__dirname, "src"),
    }
  },
  plugins: [
    vue(),
    tailwindcss(),
  ],
  server: {
    port:89,
    host:'192.168.2.8',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  }
})
