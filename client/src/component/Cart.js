import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";




export default function Payment() {
  const [message, setMessage] = useState("");
  const [error, setErrors] = useState([])
  const [data,setData] = useState([])

  useEffect(() => {

    fetch(`/charges`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 2
      }),
    })
      .then(res => {
        if (res.ok) {
          res.json().then((data) => (setData(data)))
        } else {
          res.json().then((errorData) => setErrors(errorData.errors))
        }

      })
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <section>
      <p>{message}</p>
    </section>
  ) : (
    <section>
      <CartItem />

      <form >
        <button type="submit">
         <a href={data.url}  >Checkout</a> </button>
       
        
      </form>
      {error ? <div>{error}</div> : null}
    </section>
  );
}