import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './styles/main.scss';
import './i18n'; // Đảm bảo rằng i18n được khởi tạo ở đây
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
    
  </StrictMode>,
)
