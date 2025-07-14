import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const Rating_star = ({rating}) => {
    const fullStar=Math.floor(rating)
    const stars=[]
    const mtStars=[]
    for(let i=0;i<fullStar;i++)
    {
        stars.push(<AiFillStar style={{color:"ffb21d"}}/>)
    }
    for(let i=0;i<5-fullStar;i++)
    {
        mtStars.push(<AiOutlineStar style={{color:"ffb21d"}}/>)
    }


  return (
    <div style={{display:"flex",alignContent:"center",alignItems:"center",justifyItems:"center"}}>
        {stars}
        {mtStars}
        <p style={{marginLeft:"0.4em",paddingBottom:"0.3em",fontSize:"0.8em"}}>({fullStar})</p>
    </div>
  )
}

export default Rating_star