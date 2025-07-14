import React, { useState } from 'react'
import { BsCartPlus } from "react-icons/bs";
import './Card.css'
import { Link } from 'react-router-dom';
import Rating_star from './Rating_star';

const Card = ({product,handleAddtoCart}) => {
    const id=product.id
    const img=product.thumbnail
    const productName=product.title
    const newPrice=product.price
    const prevPrice=Number(newPrice+(newPrice*(product.discountPercentage/100))).toFixed(2)
    const category=product.category
    const prodCnt=product.prodCnt
    const totalAmt=product.totalAmt

  return (
    <div className='productCard'>
        <section>
            <Link to={`/product/${id}`}>
                <img src={img} alt='Advertisement' className='productImg'/>
            </Link>
        </section>
        <section className='productDetails'>
            <p className='categoryName'>{category}</p>
            <p className='productName'>
                <Link to={`/product/${id}`}>
                    {productName}
                </Link>
            </p>
            <Rating_star
                rating={product.rating}
            />
            <div className='priceSection'>
                <section style={{display:"flex",alignItems:"center",gap:"0.5em"}}>
                    <p className='sellingPrice'>{"$"+newPrice}</p>
                    <p className='actualPrice'>{"$"+prevPrice}</p>
                </section>
                <button className='atcbtn' onClick={()=>handleAddtoCart(id,img,productName,newPrice,prevPrice,prodCnt,totalAmt)}>
                    <BsCartPlus/>
                </button>
            </div>
        </section>
    </div>
  )
}

export default Card