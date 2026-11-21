import {Routes, Route} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'


function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path ="/" element = {<Home/>} />
        <Route path ="/products" element = {<Products/>} />
        <Route path ="/cart" element = {<Cart/>} />
      </Routes>
    </MainLayout>
  )
}

export default App