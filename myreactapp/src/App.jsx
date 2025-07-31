import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
      <div className='container'>
        <div className="heading">Header</div>
        <div className="mainSection">
          <ul className='sidebar'>
            <li>Aboutus</li>
            <li>Dashboard</li>
            <li>Register</li>
            <li>Login</li>
            <li>Contactus</li>
      </ul>
          </div>
        <div className="footer">Footer</div>
      </div>
    </>
  )
}

export default App
