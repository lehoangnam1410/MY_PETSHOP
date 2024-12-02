// src/env.d.ts or in the root directory

interface ImportMetaEnv {
    VITE_API_URL: string;
    // Các biến khác nếu cần
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }