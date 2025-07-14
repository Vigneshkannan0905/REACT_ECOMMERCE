import React from 'react'
import './App.css'
import './Belowheader.css'

const Advertisement = () => {
  return (
    <div className='Ad'>
        <img src="https://shopify-xrh7.onrender.com/banner.jpg" alt="" />
        <div className='offer-details'>
            <h1>Don't miss the offer</h1>
            <h3>Grab it now</h3>
            <button className='Belowheaderbtn'>Shop Now</button>
        </div>
    </div>
  )
}

export default Advertisement