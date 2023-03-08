import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const promise = loadStripe("pk_test_51MgADhKrk7SyJm52elTwCtipGyzwzjfkZ7seK4fSVhzcNO4pUwHhrcS9BOUNGi1EmkqKL4FFLUM4pIru9FxUoQMh003H5aSdGd");

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