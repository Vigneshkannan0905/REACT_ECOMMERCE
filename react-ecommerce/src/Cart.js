import React from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import './Cart.css'
import Cart_card from './Cart_card'
import { FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Cart = ({isLoggedin,Atc,setAtc,checkoutAmt,setcheckoutAmt,cartVisibility,setcartVisibility}) => {

  let totalProductCount=Atc.length

  if (!cartVisibility){
    return (<></>)
  }

  return (
      <div className='cart-background'  onClick={()=> setcartVisibility(false)}>
        {isLoggedin && 
          <div className="my-cart" onClick={(e) => e.stopPropagation()}>
            <div className='cart-title'>
              <h2>Your Cart</h2>
                <button className='close-btn' onClick={()=> setcartVisibility(false)}>
                  <FaWindowClose />
                </button>
            </div>

            { Atc.length===0 &&
              
                <p>NO ITEMS IN CART</p>

            }

            { Atc.length>0 &&
            
              <div className='my_cart'>
                {Atc.map(({id,img,productName,newPrice,prevPrice,prodCnt,totalAmt}) => (
                  <Cart_card
                    Atc={Atc}
                    setAtc={setAtc}
                    id={id}
                    img={img}
                    productName={productName}
                    newPrice={newPrice}
                    prevPrice={prevPrice}
                    checkoutAmt={checkoutAmt}
                    setcheckoutAmt={setcheckoutAmt}
                    prodCnt={prodCnt}
                    totalAmt={totalAmt}
                  />
                ))
                }
              
                  <div className='cart-count'><b>Total Product count : {totalProductCount}</b></div>
                  <h2>Total : {'$'+checkoutAmt} </h2>
                  <button className='checkout-btn'>
                    Checkout
                  </button>
              </div>
            }
          </div>
        }
        {!isLoggedin &&
          <div className='my-cart' onClick={(e)=>e.stopPropagation()}>
            <div className='cart-title'>
              <h2>Your Cart</h2>
                <button className='close-btn' onClick={()=> setcartVisibility(false)}>
                  <FaWindowClose />
                </button>
            </div>
            <p>Please Do Login</p>
          </div>
        }
      </div>
  )
}

export default Cart