import React from 'react'
import './Cart.css'
import { AiOutlineDelete } from "react-icons/ai";

const Cart_card = ({Atc,setAtc,id,img,productName,newPrice,prevPrice,checkoutAmt,setcheckoutAmt,prodCnt,totalAmt}) => {

  const incproductCount = (id) => {
    setcheckoutAmt((Number(checkoutAmt)+Number(newPrice)).toFixed(2))
    setAtc(Atc.map((item) => {
      if(item.id==id){
        return {...item,prodCnt: Number(item.prodCnt)+1,totalAmt:(Number(totalAmt)+Number(item.newPrice)).toFixed(2)
        }
      }
      return item
    }))
  }

  const decproductCount = (id) => {
    setAtc(Atc.map((item) => {
      if(item.id===id && item.prodCnt>1){
        setcheckoutAmt((Number(checkoutAmt)-Number(newPrice)).toFixed(2))
        return {...item,prodCnt: item.prodCnt-1,
          totalAmt:(Number(totalAmt)-Number(item.newPrice)).toFixed(2)}
      }
      return item
    }))
  }

  const handleDelete = (id) => {
    setAtc(Atc.filter(item => item.id!=id))
    setcheckoutAmt((Number(checkoutAmt)-Number(totalAmt)).toFixed(2))
  }

  return (
      <div className='cart-card'>
          <section className='sec1'>
              <img src={img} alt="" />
          </section>
          <section className='sec2'>
              <p className='cart-productName'>{productName}</p>
              <span className='cart-price-section'>
                  <p className='cart-sellingPrice'>{'$'+newPrice}</p>
                  <p className='cart-actualPrice'>{'$'+prevPrice}</p>
              </span>
              <div className='cart-productCount'> 
                  <button onClick={()=>decproductCount(id)}>-</button>  
                  {prodCnt}
                  <button onClick={()=>incproductCount(id)}>+</button>
              </div>
          </section>
          <section className='sec3'>
              <p>{'$'+totalAmt}</p> 
              <button className='del-btn' onClick={()=>handleDelete(id)}>
                <AiOutlineDelete />
              </button>
          </section>
      </div>
  )
}

export default Cart_card