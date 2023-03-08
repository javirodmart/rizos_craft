import React, { useState, useEffect, useContext } from "react"
import CartItem from "./CartItem";
import { UserContext } from "../context/UserContext";
import CheckoutForm from "./CheckOutForm";
import Pay from "./pay";
import Home from "./Home"
import { Link } from "react-router-dom";





const Cart = ({setShow,handleTotal,total}) => {
  const user = useContext(UserContext)
  const [message, setMessage] = useState("");
  const [error, setErrors] = useState([])
  const [data, setData] = useState([])
  const [id, setId] = useState([])
  const [userCarts,setUserCarts]= useState()
 

  
  useEffect(() => {
    handleTotal()
  }, [])
 
 
  useEffect(() => {
    fetch(`/user_carts/${user.user.id}`)
    .then(res => res.json())
    .then(data => setUserCarts(data))
  }, [])

  function handleDeleteCart(deleteCart) {
    const updatedArray = userCarts.filter((items) => {
      return items.id !== deleteCart
    })
    setUserCarts(updatedArray)
  }

  const userArray = userCarts && userCarts.map((e) => {
    return <CartItem key={e.id}
      id={e.id}
      name={e.name}
      price={e.price}
      img={e.img_url}
      description={e.description}
      setData={setData}
      handleDeleteCart={handleDeleteCart}
      handleTotal={handleTotal}

    />
  })

  return (
    <>
    

      {userArray}
  

      <form >
      <Link to="checkout"><button onClick={()=>{setShow(false)}} className="checkout-button" type="submit"> <h4>CheckOut</h4> </button></Link>
        <h4 className="total">Total: ${total}</h4>

      </form>
      {error ? <div>{error}</div> : null}

    </>
  )
}
export default Cart