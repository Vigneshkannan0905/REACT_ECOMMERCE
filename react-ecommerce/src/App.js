import './App.css';
import React, { useEffect } from 'react';
import Header from './Header'
import Belowheader from './Belowheader';
import Navbox from './Navbox';
import Recommendedproducts from './Recommendedproducts';
import Advertisement from './Advertisement';
import Categories from './Categories';
import Categorypath from './Categorypath';
import { Route,Routes } from 'react-router-dom'
import Stickyfooter from './Stickyfooter';
import Displayproducts from './Displayproducts';
import Products from './Products';
import Login from './Login';
import { useState } from 'react';
import Cart from './Cart';
import api from './api/products'
import Productdetails from './Productdetails';
import Popup from './Popup'
import Profile from './Profile'

function App() {
  const [userName, setuserName] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [isLoggedin, setisLoggedin] = useState(false)
  const [logged_userName, setlogged_userName] = useState('Login')
  const [Atc, setAtc] = useState([])
  const [checkoutAmt,setcheckoutAmt] = useState(0)
  const [apiData, setapiData] = useState([])
  const [cartVisibility,setcartVisibility]=useState(false)
  const [loginModalVisibility, setloginModalVisibility] = useState(false)
  const [popupVisibility, setpopupVisibility] = useState(false)
  const [popupMsg,setpopupMsg]=useState('')


useEffect(() =>{
  const fetchPost = async () => {
    try{
      const response = await api.get('/products?limit=194&skip=0')
      setapiData(response.data.products.map((product) =>
      (
        {
          ...product,
          'prodCnt':1,
          'totalAmt':product.price
        }
      )
      ))
    }
    catch(err){
      console.log(err)
    }
    finally{
    }
  }

  (async () => fetchPost())()
  
},[])


  const handlePopUp =(message)=>{
    setpopupMsg(message)
    setpopupVisibility(true)
    setTimeout(() =>
      setpopupVisibility(false),2000)

  }

  const handleAddtoCart = (id,img,productName,newPrice,prevPrice,prodCnt,totalAmt) => {
    if(isLoggedin)
    {
      if(Atc.length==0)
      {
        Atc.push({id:id,img:img,productName:productName,newPrice:newPrice,prevPrice:prevPrice,prodCnt:prodCnt,totalAmt:totalAmt})
        setAtc(Atc)
        setcheckoutAmt((Number(checkoutAmt)+Number(newPrice)).toFixed(2))
      }
      else
      {
        let flag=true
        for(let i=0;i<Atc.length;i++)
        {
          if (Atc[i].id==id){
            flag=false
            break
          }
        }
        if (flag)
        {
          Atc.push({id:id,img:img,productName:productName,newPrice:newPrice,prevPrice:prevPrice,prodCnt:prodCnt,totalAmt})
          setAtc(Atc)
          setcheckoutAmt((Number(checkoutAmt)+Number(newPrice)).toFixed(2))
          handlePopUp("Item Successfully Added To Cart")
        }
        else{
          handlePopUp("Item Had Already Added To Cart")
        }
      }
    }
    else{
      handlePopUp('Please Do Login')
    }
}

  return (
    <>
      <div className="App">          
          <Cart 
            isLoggedin={isLoggedin}
            Atc={Atc}
            setAtc={setAtc}
            checkoutAmt={checkoutAmt}
            setcheckoutAmt={setcheckoutAmt}
            cartVisibility={cartVisibility}
            setcartVisibility={setcartVisibility}
          />
          <Login
            userName={userName}
            setuserName={setuserName}
            isLoggedin={isLoggedin}
            setisLoggedin={setisLoggedin}
            setlogged_userName={setlogged_userName}
            loginModalVisibility={loginModalVisibility}
            setloginModalVisibility={setloginModalVisibility}
            handlePopUp={handlePopUp}
          />
          <Header 
            userName={logged_userName} 
            setcartVisibility={setcartVisibility}
            setloginModalVisibility={setloginModalVisibility}
            isLoggedin={isLoggedin}
          />
          <div className="main-body">
            <Routes>
              <Route path='/' element={
                  <div>
                    <Belowheader/>
                    <Navbox/>
                    <Recommendedproducts
                      apiData={apiData}
                      Atc={Atc}
                      setAtc={setAtc}
                      handleAddtoCart={handleAddtoCart}
                    />
                    <Advertisement/>
                  </div>
                }
              />
              <Route path='/products' element={
                <Products 
                  apiData={apiData}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  handleAddtoCart={handleAddtoCart}
                />
              }/>
              <Route path='/category'>
                <Route index 
                  element ={
                    <div className='Category'>
                      <Categorypath/>
                      <Categories/>
                    </div>
                  }
                />
                <Route
                  path=':catName'
                  element={
                    <div className='Category'>
                      <Categorypath/>
                      <Displayproducts
                        apiData={apiData}
                        handleAddtoCart={handleAddtoCart}
                        Atc={Atc}
                        setAtc={setAtc}
                      />
                    </div>
                  }
                />
              </Route>
              <Route path='/profile' element={
                <Profile
                  setisLoggedin={setisLoggedin}
                  setlogged_userName={setlogged_userName}
                />
              }
              />
              <Route path='/product/:id' element={
                <Productdetails
                handleAddtoCart={handleAddtoCart}
                />
              }
              />
            </Routes>    
          </div>
      <Stickyfooter/> 
      <Popup
        popupVisibility={popupVisibility}
        popupMsg={popupMsg}
      />   
      </div>
    </>
  );
}

export default App;
