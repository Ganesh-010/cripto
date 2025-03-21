import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from  './pages/Home'
import Coin from  './Pages/Coin/Coin'
import Features from './Features'
import Blogs from './pages/Blogs'
import Pricing from './pages/Pricing'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/features' element={<Features/>}  />
        <Route path='/blog' element={<Blogs/>}  />
        <Route path='/pricing' element={<Pricing/>}  />
        <Route path='/coin/:coinId' element={<Coin/>}  />
      </Routes>
    </div>
  )
}

export default App
