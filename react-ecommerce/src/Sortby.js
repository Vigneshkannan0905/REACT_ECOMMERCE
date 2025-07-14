import React from 'react'
import './App.css'

const Sortby = () => {
  return (
    <select className='Productsheaderbutton'>
        <option value=""><button className=''>Sort By</button></option>
        <option value=""><p>Price: Low To High</p></option>
        <option value=""><p>Price: High To Low</p></option>
    </select>
  )
}

export default Sortby