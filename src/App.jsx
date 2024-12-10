import { useState } from 'react'
import ItemComponent from './components/ItemComponent'
import './App.css'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Main from './components/Main/Main'
import SecondSection from './components/SecondSection'

//TODO: Remove unused imports and components throughout whole application. Isn't it to senseless to add some unused lines of code?

function App() {
  const items = [
    {name: "Buty unisex New Balance U991VS2, szare", price: "1099,02", img: "./public/vite.svg"},
    {name: "Buty damskie New Balance Fresh Foam 1080 v14 W1080M14 zielone", price: "482,99", img: "./public/vite.svg"},
    {name: "Buty unisex New Balance M1000EB, szare", price: "689,99", img: "./public/vite.svg"}
  ]

  return (
    <>
    <BrowserRouter>
    <Navbar />
    {/* <Shop /> */}
    <Main />
     <SecondSection />
    <Routes>
      <Route path='/' element={<Shop />}/>
      <Route path='/men' element={<ShopCategory category="men"/>}/>
      <Route path='/women' element={<ShopCategory  category="women"/>}/>
      <Route path='/kids' element={<ShopCategory  category="kids"/>}/>
    </Routes>
    </BrowserRouter>
    
    </> 
  )
}

export default App
