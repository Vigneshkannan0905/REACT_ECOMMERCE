import React from 'react'
import Rating_star from './Rating_star'

const Reviewcard = ({review}) => {

    const date=review.date.split('T')[0]
    const time=review.date.split('T')[1].split(".")[0]
    const reviewDateTime=date+" @ "+time

  return (
    <div style={{margin:"0.3em"}}>
        <p style={{display:"flex",justifyContent:"space-between"}}>
            <b style={{marginBottom:"0"}}>{review.reviewerName}</b>
            <Rating_star
            rating={review.rating}
            />
        </p>
        <p style={{fontSize:"0.7em",marginTop:"0",verticalAlign:"center",display:"flex",justifyContent:"space-between"}}>
            <span>{review.reviewerEmail}</span>
            <span>{reviewDateTime}</span>
        </p>
        
        <p style={{paddingTop:"0.2em",paddingLeft:"0.2em"}}>
            {review.comment}     
        </p>
    </div>
  )
}

export default Reviewcard