import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import { QuizProvider } from './context/QuizContext.tsx';

createRoot(document.getElementById('root')!).render(
  <QuizProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </QuizProvider>
)
