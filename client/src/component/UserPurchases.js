import React from "react";
import Rating from "./Rating";

const UserPurchases = ({id, name, description, price, image,rating,getUserPurchase,userId,timestamp }) => {
    const timestamps = timestamp
//     const date = new Date(timestamp)
//    const  dateFormat = date.getHours() +  ":" + date.getMinutes() + "," + date.toDateString
//     console.log(dateFormat)

    const date = new Date(timestamp)
    const purchaseDate = date.getMonth() + '/' + date.getDate()  + '/' + date.getFullYear()
    console.log(purchaseDate)
  
    return (
        <>
            <div className="purchase-item">
                <div className="purchase-img">
                    <img className="purchase-img" src={image} />
                </div>
                <div className="purchase-info">
                    <h1>{name}</h1>
                    <h4>{description}</h4>
                    <h6>${price}</h6>
                    {purchaseDate}
                    <Rating id={id} rating={rating} getUserPurchase={getUserPurchase} userId={userId}/>
                    
                </div>
            </div>
        </>
    )
}

export default UserPurchases