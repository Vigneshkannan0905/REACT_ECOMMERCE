import React from 'react'
import './profile.css'
import { useNavigate } from 'react-router-dom'

const Profile = ({setisLoggedin,setlogged_userName}) => {

    const navigate=useNavigate()
    const handleLogOut = () => {
        setisLoggedin(false)
        setlogged_userName('Login')
        navigate("/")
    }

  return (
    <>
    <h1 className='profil-h1'>Profile</h1>
    <div className='profilePage'>
        <section>
            <img src="https://dummyjson.com/icon/emilys/128" alt="profilepicture"/>
            <div className='logout-btn'>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
        </section>
        <section className='personal-detail-section'>
            <div>
                <b>Name : </b><p className='personal-detail'>Emily Johnson</p>
            </div>
            <div>
                <b>DOB : </b><p className='personal-detail'>31-02-1996</p>
            </div>
            <div>
                <b>Phone Number : </b>
                <p className='personal-detail'>0987654321</p>
            </div>
            <div>
                <b>Reg. Email : </b>
                <p className='personal-detail'>shopify19996@gmail.com</p>
            </div>
        </section>
        <section className='personal-detail-section'>
            <div>
                <b>Address-1 : </b>
                <p className='personal-detail'>
                    626 Main Street <br />
                    Phoenix, 29112, Mississippi
                </p>
            </div>
            <div>
                <b>Address-2 : </b>
                <p className='personal-detail'>
                    Dooley, Kozey and Cronin <br />
                    Sales Manager <br />
                    Engineering <br />
                    263 Tenth Street <br />
                    San Francisco, 37657, Wisconsin
                </p>
            </div>
        </section>
    </div>
    </>
  )
}

export default Profile