import React, { useState } from 'react'
import { useEffect } from 'react'
import api from './api/products'
import { useParams } from 'react-router-dom'
import Displayproducts from './Displayproducts'
import Rating_star from './Rating_star'
import './Productdetails.css'
import { BsCartPlus } from "react-icons/bs";
import Reviewcard from './Reviewcard'



const Productdetails = ({handleAddtoCart}) => {

  const [isHover, setisHover] = useState(false)
  const {id}=useParams();
  const [singleItem, setsingleItem] = useState({})
  const [category, setcategory] = useState('')
  const [similarProducts,setsimilarProducts]=useState([])
  const [mainImgUrl, setmainImgUrl] = useState("")
  const [rating,setRating]=useState(0)
  const [reviews,setreviews]=useState([])

  const newPrice=singleItem.price
  const prevPrice=Number(newPrice+(newPrice*(singleItem.discountPercentage/100))).toFixed(2)
  const lorem =
  "It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding."

  
  useEffect(() => {
    const fetchItems = async ()=>{
      const response= await api.get(`/products/${id}`)
      setsingleItem(
        (
          {
            ...response.data,
            'prodCnt':1,
            'totalAmt':response.data.price
          }
        )
        )
      setcategory(response.data.category)
      setmainImgUrl(response.data.images[0])
      setreviews(response.data.reviews)
      setRating(response.data.rating)
    }
    fetchItems()
  },[id])

  useEffect(() => {
    const fetchSimilarProducts = async ()=>{
      if (!category) return;
      try{
      const response = await api.get(`/products/category/${category}`)
      setsimilarProducts(
        response.data.products.filter((product) => product.id!=id)
        )
      }
      catch(err){
        return
      }
    }
    fetchSimilarProducts()
  },[category,id])



  return (
    <>
      <section className='productdetails'>
        <div>
          <div className='mainImg'>
              <img src={mainImgUrl} alt="" />
          </div>
          <div className='smallImgs'>
              { Object.keys(singleItem).length > 0 &&
                (
                  singleItem.images.map((img,index) => (
                    <img key={index} src={img} alt="Image Preview" onClick={()=>setmainImgUrl(img)}/>
                  ))
                )
              }
          </div>
        </div>
        <div style={{
          display:"flex",
          flexDirection:"column",
          gap:"1em"
        }}>
          <div>
            <h2>{singleItem.title}</h2>
            <Rating_star
              rating={rating}
            />
          </div>
          <div>
            <p style={{color: "rgb(67, 206, 230)",fontSize: "1em"}}>
              {"$"+newPrice}
              <span style={{color:"gray",marginLeft:"1em",fontSize:"0.7em",textDecorationLine:"line-through"}}>{"$"+prevPrice}</span>
              </p>
          </div>
          <div>
            <table>
              <tr>
                <th>Brand</th>
                <td>{singleItem.brand}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{category}</td>
              </tr>
              <tr>
                <th>Stock Details</th>
                <td>{singleItem.stock}</td>
              </tr>
            </table>
          </div>
          <div>
            <h3>About the product</h3>
            <p>{singleItem.description}{lorem}</p>
          </div>
        </div>
        <div>
          <h1 style={{marginBottom:"1em"}} >Ratings</h1>
          { 
            reviews && 
            (
              reviews.map((review) => (
                <div style={{marginBottom:"1em"}}>
                  <Reviewcard
                    review={review}
                  />
                </div>
              ))
            )
          }
          <button style={{
              color:isHover?"rgb(244, 147, 163)":"black",
              cursor:isHover?"pointer":"auto",
              backgroundColor:"transparent",
              border: "none",
              fontSize: "1.5em",
              padding:"0.5em"
              }}
              onMouseEnter={()=>setisHover(true)}
              onMouseLeave={()=>setisHover(false)} //id,img,productName,newPrice,prevPrice,prodCnt,totalAmt
              onClick={()=>handleAddtoCart(id,singleItem.thumbnail,singleItem.title,newPrice,prevPrice,singleItem.prdCnt,singleItem.totalAmt)}>
              <BsCartPlus />
          </button>
        </div>
      </section>
      <section>
        <h1>Similar Products</h1>
        <Displayproducts 
          apiData={similarProducts}
          handleAddtoCart={handleAddtoCart}
        />
      </section>
    </>
  )
}

export default Productdetails