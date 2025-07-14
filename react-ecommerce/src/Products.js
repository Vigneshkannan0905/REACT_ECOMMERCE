import React from 'react'
import Displayproducts from './Displayproducts'
import './App.css'

const Products = ({apiData,selectedOption,setSelectedOption,handleAddtoCart}) => {
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

  return (
    <div className='recommended-products'>
        <div className='Productsheader'>
            <p style={{ fontWeight : 500,fontSize:30, marginBottom:10, marginTop:10}}>Products</p>
    
            <select 
                className='Productsheaderbutton'
                onChange={handleChange}            
            >
                <option value="default">
                    Default
                </option>
                <option value="lth">
                    Price: Low To High
                </option>
                <option value="htl" >
                    Price: High To Low
                </option>
            </select>
        </div>
        <Displayproducts
            apiData={apiData}
            selectedOption={selectedOption}
            handleAddtoCart={handleAddtoCart}
        />
    </div>
  )
}

export default Products