import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home.jsx'
import Four_0_Four from './page/Four_0_Four.jsx'
import Login from './page/Login.jsx'
import Sign_Up from './page/Sign_Up.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Sign_Up />} />
      <Route path="*" element={<Four_0_Four />} />
    </Routes>
    
  )
}

export default App
