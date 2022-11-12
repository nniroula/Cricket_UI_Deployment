/*
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";
import SECRET_API_KEY from "../config";  // secret api key

const stripeTestPromise = loadStripe(SECRET_API_KEY);

const StripeInfo = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeInfo;
*/

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";
import SECRET_API_KEY from "../config";  // secret api key

const stripeTestPromise = loadStripe(SECRET_API_KEY);

const StripeInfo = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeInfo;