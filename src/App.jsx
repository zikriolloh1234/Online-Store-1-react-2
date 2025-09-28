import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login'
import Signup from './pages/signup'
import Contact from './pages/contact'
import Getbyid from './pages/getbyid'
import Korzina from './pages/korzina'
import About from './pages/about'
import Account from './pages/account'
import Categories from './pages/categoriya'
import Wishlist from './pages/wishlist'


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/getbyid/:id' element={<Getbyid />}></Route>
            <Route path='/korzina' element={<Korzina />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/Account' element={<Account />}></Route>
            <Route path='/Categoriya' element={<Categories />}></Route>
            <Route path='/wishlist' element={<Wishlist />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
