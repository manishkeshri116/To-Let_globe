import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div >
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>

    </Routes>
    
    </div>
  )
}

export default App