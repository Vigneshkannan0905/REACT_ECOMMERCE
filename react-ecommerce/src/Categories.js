import React, { useEffect,useState } from 'react'
import Categorycard from './Categorycard'
import api from'./api/products'
import './Categories.css'

const Categories = () => {

    const [categories,setCategories]=useState([])

    useEffect(() => {
      const fetchCategories = async () => {
        const response= await api.get('/products/category-list')
        setCategories(response.data)
      }
      fetchCategories()
    }, [])
    

  return (
    <div className="Categories">
        {
            categories.map((categoryName) => (
                <Categorycard
                    categoryName={categoryName}
                />
            ))
        }
    </div>
  )
}

export default Categories