import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "components": path.resolve(__dirname, "src", "components"),
      "hooks": path.resolve(__dirname, "src", "hooks"),
      "services": path.resolve(__dirname, "src", "services"),
      "assets": path.resolve(__dirname, "src", "assets"),
      "context": path.resolve(__dirname, "src", "context"),
      "utils": path.resolve(__dirname, "src", "utils"),
    }
  },
  plugins: [react(), svgr()],
})
