import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Payment from "./Cart";


const CartItem = () => {
    const user = useContext(UserContext)
    console.log(user.user.items[0].id)
    const userCart = user.user.items
    return (
        <>
            <div>
                {userCart.length && userCart.map((items) => {
                    return <>

                        <div className="cart-item">

                            <div className="cart-img">
                                <img src={items.img_url} />
                                <span className="cart-info">
                                    <h1>{items.name}</h1>
                                    <h6>{items.description}</h6>
                                    <h6>${items.price}</h6>
                                <span>...fdfsdf</span>
                                </span>
                            </div>


                        </div>
                    </>
                })}
                <button className="pay-button">Proceed To Payment</button>
              
            </div>

        </>

    )
}

export default CartItem