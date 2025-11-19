import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JoshuaApp from './JoshuaApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JoshuaApp />
  </StrictMode>,
)


