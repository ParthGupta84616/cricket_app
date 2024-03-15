import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from "./Components/Small_Components/Navbar"
import Footer from "./Components/Small_Components/Footer"

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
