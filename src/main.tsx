import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Router from '@/routes/index.tsx'

import '@/assets/index.css'
import 'virtual:uno.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
