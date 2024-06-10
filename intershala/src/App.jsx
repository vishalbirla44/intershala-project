import React from 'react'
import Home from './pages/Home'
import Navbar from './componands/Navbar'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
    </div>

  )
}

export default App