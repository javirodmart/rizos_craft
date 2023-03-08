import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  CardElement,
  useStripe,
  useElements,
  AddressElement
} from "@stripe/react-stripe-js";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function CheckOutForm({  handleDeleteCart }) {
  const user = useContext(UserContext)

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState([]);
  const stripe = useStripe();
  const [total, setTotal] = useState([])
  const elements = useElements();
  const [userCarts, setUserCarts] = useState()
  const [address, setAddress] = useState([])
  const [state,setState] = useState()


  
  function handleCharge() {
    fetch(`/charges`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: total
      }),
    })
      .then(res => {
        if (res.ok) {
          res.json().then((data) => (console.log(data), setClientSecret(data.client_secret)))
        } else {
          res.json().then((errorData) => console.log)
        }

      })
  }

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
  function handleDeleteTotal(deleteTotal) {
    const updatedArray = total.filter((items) => {
      return items !== deleteTotal
    })
    setTotal(updatedArray)
  }

  const cardStyle = {
    style: {
      base: {

        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: "#eee",
        iconColor: "#eee"
      }
    }
  };
  const cartId = user.user.carts
  function handleAddressPost() {
    fetch(`/users/${user.user.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        state: address.state,
        city: address.city,
        line1: address.line1,
        line2: address.line2,
        postal_code: address.postal_code,
        country: address.country
      }),
    })
      .then(res => {
        if (res.ok) {
          res.json().then((data) => console.log(data))
        } else {
          res.json().then((errorData) => console.log(errorData.errors))
        }

      })
  }

  
  const handleChange = async (event) => {

    
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details

    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
    handleAddressPost()
    handleCharge()
  };
 

  const handleSubmit = async ev => {
    ev.preventDefault();
   handleAddressPost()
   handleCharge()
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });



    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }

    cartId.map((cart) => {

      fetch(`/purchases`, {
        method: "Post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: user.user.id,
          item_id: cart.item.id,
        }),
      }).then(res => {
        if (res.ok) {
          res.json().then((data) => console.log(data))
        } else {
          res.json().then((errorData) => console.log(errorData.errors))
        }

      })

    })



  };
  console.log(cartId.length)
  const userInfo = userCarts
  function handleTotal() {
    fetch(`/total/${user.user.id}`)
      .then(r => r.json())
      .then(data => setTotal(data))
  }
  useEffect(() => {
    handleTotal()
  }, [])

  const options = {
    mode: 'shipping',

  };
  console.log(address)
  return (
    <form className="checkout-form" id="payment-form" onSubmit={handleSubmit}>
      <div>
        {userCarts && userCarts.map((e) => {
          const cartId = user.user.carts.id
          function handleDelete() {
            fetch(`/carts/${e.id}`, { method: "DELETE" })
            handleTotal()
            handleDeleteCart(e.id)

          }

          return (
            <>
              <div className="checkout-item">
                <div className="checkout-img">
                  <img className="checkout-img" src={e.img_url} />
                </div>
                <div className="checkout-info">
                  <h1>{e.name}</h1>
                  <h4>{e.description}</h4>
                  <h6>${e.price}</h6>
                  <button onClickCapture={handleDelete}>Remove From Checkout</button>
                </div>

              </div>

            </>

          )
        })}
        <h3>Total: ${total}</h3>
        <AddressElement options={options} onChange={(event) => {

          // Extract potentially complete address
          setAddress(event.value.address);
          handleAddressPost()
         


        }} />
         {address.state && address.city && address.line1 && address.postal_code ? <div className="card-element">
         <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
         <button
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
        </div> :null} 
        
      </div>
     
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <h1 className={succeeded ? "result-message" : "result-message hidden"}>
        {user.user.first_name} Payment succeeded, Check Your Purchase in Your <Link to="/">Home</Link> Page
      </h1>
    </form>
  );
}