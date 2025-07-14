import React from 'react'
import './popup.css'
import { TiTick  } from "react-icons/ti";import { TfiInfoAlt } from "react-icons/tfi";

const Popup = ({popupVisibility,popupMsg}) => {

  if(!popupVisibility){
    return <></>
  }

  let icon=<TiTick  style={{width:"1em",height:"1em",color:"green",fontSize:"1.6em"}}/> 

  if(popupMsg==="Please Do Login" || popupMsg==="Item Had Already Added To Cart"){
    icon=<TfiInfoAlt style={{fontSize:"1.6em",marginRight:"0.3em"}}/>
  }

  return (
    <div style={{
      display:"flex",justifyContent:"center"
    }} >
      <div className='popUp'>
            {icon}
            <p>{popupMsg}</p>
      </div>
    </div>
  )
}

export default Popup