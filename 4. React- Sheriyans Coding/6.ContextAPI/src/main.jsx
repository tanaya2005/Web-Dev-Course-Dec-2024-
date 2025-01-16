import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <App/> 
      {/* we wrapped teh app aroun dusercontext// now app is the child of usercontext */}
    </UserContext>
  </StrictMode>,
)
