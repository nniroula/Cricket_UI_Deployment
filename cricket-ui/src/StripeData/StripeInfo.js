import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const stripeTestPromise = loadStripe(process.env.PUBLIC_API_KEY);

const StripeInfo = () => {
    return (
        <Elements stripe={stripeTestPromise}>
        <CheckoutForm />
        </Elements>
    );
};

export default StripeInfo;