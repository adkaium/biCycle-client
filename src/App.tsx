
import { Outlet } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/header/NavBar'
import Footer from './components/footer/Footer'

function App() {
  
  return (
    <>
      <NavBar/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
