import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import HotelApp from './HotelApp'
// import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HotelApp />
    </BrowserRouter>
  </StrictMode>,
)
