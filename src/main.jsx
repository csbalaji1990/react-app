import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { UserCard } from './components/UserCard'
import './style/UserCard.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserCard />
  </StrictMode>,
)