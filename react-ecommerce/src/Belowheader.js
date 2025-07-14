import React from 'react'
import './Belowheader.css'
import lapImg from './imgsrc/hero.png'

const Belowheader = () => {
  return (
    <section className='body'>
        <div className='body-left'>
            <p style={{ fontWeight : 500,fontSize:20 }}>Starting at $999</p>
            <p style={{ fontWeight : 500,fontSize:50,lineHeight:1 }}>The best notebook collection 2024</p>
            <p style={{ fontWeight : 500,fontSize:30 }}>Exclusive offer <span style={{color:'red'}}>-10%</span> off this week</p>
            <button className='Belowheaderbtn'> Shop Now</button>
        </div>
        <div className='body-right'>
           <img src={lapImg} alt="Laptop" />
        </div>
    </section>
  )
}

export default Belowheader