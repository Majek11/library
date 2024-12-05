import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Loginform/Login.jsx'
import { LogIn } from 'lucide-react'
import Herosection from './components/Herosection/Herosection.jsx'
import AboutUs from './pages/About/About.jsx'


const App = () => {
  return (
    <div>
       <Navbar />
      <Login />
      <Herosection />
      <AboutUs />
    </div>
  )
}

export default App