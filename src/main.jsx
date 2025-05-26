import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import 'boxicons/css/boxicons.min.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import AOS from 'aos';
AOS.init({duration: 1000, once: true});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
