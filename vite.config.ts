import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
  base: './',
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        projects: './projects.html',
        contact: './contact.html',
      },
    },
  },
});
