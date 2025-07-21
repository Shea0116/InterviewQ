import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {URL,fileURLToPath} from "node:url"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 路径是 https://<用户名>.github.io/<仓库名>/ ，所以 base 设为仓库名
  // base: '/TOPIK/',
  resolve: {
    alias:{
          "@":fileURLToPath(new URL("./src",import.meta.url))
        }
  }
})
