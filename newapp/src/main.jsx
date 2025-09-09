// Import StrictMode from React → helps highlight potential problems in the app during development
import { StrictMode } from 'react'

// Import createRoot from React DOM Client → creates a root for rendering components in React 18+
import { createRoot } from 'react-dom/client'

// Import global styles → applies the styles written in index.css file
import './index.css'

// Import the main App component → this is the root component of your React app
import App from './App.jsx'

// Get the container element from index.html by its id 'root' → this is where React will render
const root = document.getElementById('root')

// Create a React root linked to the container and render inside it
createRoot(root).render(
  // StrictMode wraps the App → activates extra checks/warnings in development
  <StrictMode>
    {/* The main App component → your whole app starts here */}
    <App />
  </StrictMode>,
)
