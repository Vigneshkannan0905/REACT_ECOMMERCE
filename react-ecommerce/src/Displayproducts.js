import React from 'react'
import Card from './Card'
import { useParams } from 'react-router-dom'

const Displayproducts = ({apiData,selectedOption,handleAddtoCart}) => {
    const {catName}=useParams()
    let filteredData=apiData
    if(catName){
        filteredData=filteredData.filter((pd) => pd.category===catName)
    }
    if (selectedOption=='default'){
        filteredData.sort((a,b)=>a.id-b.id)            
    }
    if(selectedOption=='lth'){
        filteredData.sort((a,b) => a.price-b.price)
    }

    if(selectedOption=='htl'){
        filteredData.sort((a,b) => b.price-a.price)
    }



  return (
    <div className='products-display-section'>
        {
            filteredData.map((product) => 
            (
                <Card
                    product={product}
                    handleAddtoCart={handleAddtoCart}
                />
            )
                ) 
       } 
    </div>
  )
}

export default Displayproducts