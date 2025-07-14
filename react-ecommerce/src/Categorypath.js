import React from 'react'
import { useParams } from 'react-router-dom'

const Categorypath = () => {
  const {catName} =useParams()
  let categorypath=''
  if(catName===undefined){
    categorypath =`Categories`
  }
  else{
    const index=catName.indexOf('-')
    let temp_catName=''
    if(index===-1){
      temp_catName=catName[0].toUpperCase()+catName.slice(1)
    }
    else{
      const temp=catName.split('-')
      temp_catName=temp[0][0].toUpperCase()+temp[0].slice(1,temp[0].length)+' '+temp[1][0].toUpperCase()+temp[1].slice(1,temp[1].length)
    }
    categorypath=`Cateogories`+' -> '+temp_catName
  }
  return (
    <div style={{fontSize:"1.5em",margin:"1em"}}>
      {categorypath}
    </div>
  )
}

export default Categorypath