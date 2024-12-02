import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Bạn có thể thêm biến hoặc cấu hình SCSS ở đây nếu cần
        additionalData: `@import "./src/styles/variables.scss";` // (tuỳ chọn) thêm global styles
      }
    }
  }
});
