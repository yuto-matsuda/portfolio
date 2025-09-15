import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AccordionProvider } from './components/accordion.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AccordionProvider>
      <App />
    </AccordionProvider>
  </StrictMode>,
)
