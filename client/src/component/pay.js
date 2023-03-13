import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";


// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const promise = loadStripe(`${process.env.PUBLISHABLE_KEY}`);

export default function Pay({userCarts,handleDeleteCart}) {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm
        userCarts={userCarts}
        handleDeleteCart={handleDeleteCart}
 />
      </Elements>
    </div>
  );
}