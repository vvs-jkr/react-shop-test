import { useState } from 'react'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

import { Router, Routes } from 'react-router-dom'
import './index.css'

function App() {
  const [products, setProducts] = useState([])

  function addProductToCart(newProduct) {
    if (!products.some((product) => product.id === newProduct.id)) {
      setProducts([...products, newProduct])
    }
  }

  return (
    <div class="wrapper">
      <Header productsInCart={products.length} />
      <Content addProductToCart={addProductToCart} />
      <Footer />
    </div>
  )
}

export default App
