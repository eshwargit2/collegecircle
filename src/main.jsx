import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import checkEnvConfig from './lib/checkEnv.js'

// Check environment configuration on app start
checkEnvConfig();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
