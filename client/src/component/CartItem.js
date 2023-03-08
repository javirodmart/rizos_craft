import React, { useContext,useEffect } from "react";
import { UserContext } from "../context/UserContext";
import Payment from "./Cart";


const CartItem = ({  handleTotal,id, name, price, img, description , handleDeleteCart}) => {

  
    function handleDelete() {
        fetch(`/carts/${id}`, { method: "DELETE" })
        handleTotal()
        handleDeleteCart(id)
    }
 
    return (
        <>
            <div className="checkout-item">
                <div className="checkout-img">
                  <img className="checkout-img" src={img}/>
                </div>
                <div className="checkout-info">
                <h1>{name}</h1>
                <h4>{description}</h4>
                <h6>${price}</h6>
                <button onClickCapture={handleDelete}>Remove From Checkout</button>
                </div>

              </div>

        </>

    )
}

export default CartItem