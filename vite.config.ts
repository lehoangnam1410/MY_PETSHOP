import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias cho thư mục `src`
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Import global SCSS trong mọi file SCSS
        additionalData: `@import "@/styles/variables.scss";`, 
      },
    },
  },
});
