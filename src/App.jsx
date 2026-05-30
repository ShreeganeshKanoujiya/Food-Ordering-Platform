import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Webpage from './pages/Webpage'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {

  return (
    <BrowserRouter>
        <Navbar cart={cart} setCart={setCart} cc/>
        <Routes>
            <Route path='/' element={<Webpage cart={cart} setCart={setCart} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
        </BrowserRouter>
  )
}

export default App
