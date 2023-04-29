import React from 'react'
import { CartState } from '../context/Context'

const Home = () => {
const {
  state: {products},
} =  CartState()
 
  return (
    <div className='home'>
     
     /*filter */
     <div className='productContainer'>
      {
        products.map((prod) =>{
         return <span>{prod.name}</span>
        })
      }
     </div>
    </div>
  )
}

export default Home

