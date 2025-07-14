import React from 'react'
import { Link } from 'react-router-dom'

const Categorycard = ({categoryName}) => {

  const index=categoryName.indexOf('-')
  let temp_catName=''
  if(index===-1){
    temp_catName=categoryName[0].toUpperCase()+categoryName.slice(1)
  }
  else{
    const temp=categoryName.split('-')
    temp_catName=temp[0][0].toUpperCase()+temp[0].slice(1,temp[0].length)+' '+temp[1][0].toUpperCase()+temp[1].slice(1,temp[1].length)
  }


  return (
    <section className='Categorycard'>
      <p>{temp_catName}</p>
      <Link to={categoryName.toLowerCase()} className='link'>
          View products
      </Link>
    </section>
  )
}

export default Categorycard