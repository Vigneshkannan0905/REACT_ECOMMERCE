import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import './App.css'

const Navbox = () => {

  return (
    <div className='navBox'>
        <div className='navs'>
            <TbTruckDelivery/>
            <section>
                <p>Free Delivery</p>
                <p style={{ fontWeight : 200,fontSize:15 }}>Orders form all items</p>
            </section>
        </div>
        <div className='navs'>
            <FaIndianRupeeSign/>
            <section>
                <p>Return & Refund</p>
                <p style={{ fontWeight : 200,fontSize:15 }}>Money back guarantee</p>   
            </section>
        </div>
        <div className='navs'>
            <RiDiscountPercentLine/>
            <section>
                <p>Member Discount</p>
                <p style={{ fontWeight : 200,fontSize:15 }}>On order over $99</p>
            </section>
        </div>
        <div className='navs'>
            <MdOutlineSupportAgent/>
            <section>
                <p>Support 24/7</p>
                <p style={{ fontWeight : 200,fontSize:15 }}>Contact us 24 hours a day</p>
            </section>
        </div>
    </div>
  )
}

export default Navbox