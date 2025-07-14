import React from 'react'
import './App.css'
import Displayproducts from './Displayproducts'


const Recommendedproducts = ({apiData,Atc,setAtc,handleAddtoCart}) => {
  
  return (

    <div className='recommended-products'>

        <p style={{ fontWeight : 500,fontSize:30, marginBottom:10, marginTop:10}}>Recommended Products</p>
        
        <div className='products-display-section'>
            <Displayproducts
              apiData={apiData.slice(0,16)}
              Atc={Atc}
              setAtc={setAtc}
              handleAddtoCart={handleAddtoCart}
            />
        </div>
    </div>
  )
}

export default Recommendedproducts