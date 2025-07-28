import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      {/* Your app content */}
      <SpeedInsights />
    </>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
