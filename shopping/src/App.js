import React from 'react'
import Header from './component/Header'
import {BrowserRouter,Route} from "react-router-dom"
import Home from './component/Home'
import Cart from './component/Cart'
const App = () => {
  return (
    <BrowserRouter>
   <Header/>
   <Home/>
   <Cart/>

    </BrowserRouter>
  )
}

export default App
