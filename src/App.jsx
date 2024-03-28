import { useState } from 'react'
import Products from './components/Products'
import Footer from './components/Footer'
import Header from './components/Header'

import {Route, Router, Routes} from 'react-router-dom'
import './index.css'
import Cart from "./components/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
