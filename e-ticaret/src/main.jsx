import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {

  return (
    <div>
      
    </div>
  )
}

function Navbar() {
    return (
      <h1>Navbar</h1>
    )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
