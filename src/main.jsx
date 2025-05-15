import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'; // Import normalize.css first
import './index.css';  // Then your custom index
import Testimonials from './components/Testimonials.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Testimonials />
  </StrictMode>,
)
