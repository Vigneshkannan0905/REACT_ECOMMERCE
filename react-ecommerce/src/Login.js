import React from 'react'
import { RiLockPasswordFill } from "react-icons/ri";
import { FaWindowClose } from "react-icons/fa";
import { FaUser} from "react-icons/fa";
import './login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({userName, setuserName,isLoggedin,setisLoggedin,setlogged_userName,loginModalVisibility, setloginModalVisibility,handlePopUp}) => {
  const [register,setRegister]=useState(true)
  const [passWord, setpassWord] = useState('')
  const [isChecked, setisChecked] = useState(false)
  const [showHide, setshowHide] = useState('password')

  const handleToggle=()=>{
      setRegister(!register)
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    // if(userName==='vicky' && passWord==='1234567890'){
      setlogged_userName(userName)
      setisLoggedin(true)
      setuserName('')
      setloginModalVisibility(false)
      handlePopUp("Welcome to shopify....!")
  }

  const handlevisibility =() =>{
    setisChecked(!isChecked)
    if(isChecked){
      setshowHide("password")
    }
    else{
      setshowHide("text")
    }
  }

  if(!loginModalVisibility){
    return (<></>)
  }

  return (    
    <div>
      {!isLoggedin &&
        <div className='Login-background' onClick={()=>setloginModalVisibility(false)}>
          {register &&
            <div className='Login' onClick={(e) => e.stopPropagation()}>
              <button className='cls-btn' onClick={()=>setloginModalVisibility(false)}>
                <FaWindowClose />
              </button>
              <h2>Login</h2>
              <form className='Loginform' onSubmit={(event)=>handleSubmit(event)}>
                  <section className='usernamesection no-select '>
                      <span className='icon'>
                        <FaUser />
                      </span>
                      <input type="text" value={userName} onChange={(event)=>setuserName(event.target.value)} placeholder='Username' />
                  </section>
                  <section className='usernamesection no-select '>
                      <span className="icon">
                        <RiLockPasswordFill/>
                      </span>
                      <input type={showHide} placeholder='Password' value={passWord} onChange={(event)=>setpassWord(event.target.value)}/>
                  </section>
                  <div className='show-btn no-select' onClick={handlevisibility}>
                    <input type="checkbox" 
                      checked={isChecked}
                    />
                    Show Password
                  </div>
                  <button type="submit" className='submitbtn'>Submit</button>
              </form>
              <p>
                  No Account ? 
                  <button className='rgstr-btn' onClick={handleToggle}>Register here</button>
              </p>
            </div>  
          }

          {!register &&
            <div className="register" onClick={(e) => e.stopPropagation()}>
              <Link to='/'>
                <button className='cls-btn'>
                  <FaWindowClose />
                </button>
              </Link>
              <h2>Register</h2>
              <p>
                This is a hobby project for development purpose only. No well suited backend has been used here. You Can use Anything as username
                <button onClick={handleToggle} className='rgstr-btn'>
                  Back to login
                </button>
              </p>
            </div>
          }

        </div>
      }

        
    </div>
    
  );
}
    

export default Login