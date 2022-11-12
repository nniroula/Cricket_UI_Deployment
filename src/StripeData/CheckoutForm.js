
import axios from "axios";
import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const SECRET_KEY = process.env.PUBLIC_API_KEY;
console.log(SECRET_KEY);

export const CheckoutForm = () => {
 const [product, setProduct] = useState({name: "T-Shirt", price: 10});
 const priceForStripe = product.price*100;

//  token function
    const payNow = async token => {
        try{
            console.log("BEFORE THE LOCAL HOST URL-------");
            // const response = await axios.post({
            const response = await axios({
                url: 'http://localhost:3000/stripe/payment',
                method:'post',
                data: {
                    amount: product.price*100,
                    token
                }
            });
            if(response.status === 200){
                // do react toast with success message
                console.log("Payment success")
            }

        }catch(e){
            // do some react toast with fialed message
            console.log("NOT SUCCESSFUL");
            console.log(e)
        }
    }

  return (
    <div>
        <small>Payment GateWay!</small>
        <p>
            <span>product:</span>
            {product.name}
        </p>
        <p>
            <span>price:</span>
            {product.price}
        </p>

        {/* <StripeCheckout 
            stripeKey = 'pk_test_51M263tFERbVgkJsuJ7eyF1Zb0cJ6ATy5XrlpClHK4fLEuRYYqyKfYzhEjDdN2ay4MK7GowZvPNh7kAHYvU6DMFTj00OWmuVqU0'
            label="PayNow"
            amount={priceForStripe}
            description={`your total is $ ${product.price}`}
            name="Pay with card"
            token={payNow}
        /> */}

        <StripeCheckout 
            stripeKey = 'pk_test_51M263tFERbVgkJsuJ7eyF1Zb0cJ6ATy5XrlpClHK4fLEuRYYqyKfYzhEjDdN2ay4MK7GowZvPNh7kAHYvU6DMFTj00OWmuVqU0'
            label="PayNow"
            amount={priceForStripe}
            description={`Your total is $${product.price}`}
            name="Pay with card"
            token={payNow}
            billingAddress
        />
    </div>
  );
};


















// workging version
/*
import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
        console.log("Token generated and the payment method is: ", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:3000/stripe/payment",
          {
            amount: 999, // make this dynamic
            id: id,
            billing_details: {
                address: {country: 'USA', line1: '1234 Main st', city: 'Denver', state: 'NY', postal_code: '00000'},
                email: 'noemail@gmail.com',
                name: 'Pabi L N',
                phone: '123-456-7890'
            },
            card: {
                last4: '1234'
            }
          }
        );
        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
        }
      } catch (error) {
        // console.log("CheckoutForm.js 28 | ", error);
        console.log("CheckoutForm.js", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, height: '15vh', maxHeight: '20vh', marginTop:'1em', padding: '0.5em',
        backgroundColor: 'rgb(250, 90, 40)', paddingRight: '10px', paddingLeft: '10px'}}
    >
        <small style={{marginTop:'-0.5rem', color:'yellow'}}>Enter card credentials to make donation!</small>
        <form onSubmit={handleSubmit} style={{ marginTop:'0.8rem', padding: '10px', backgroundColor:'green'}}>
            <CardElement className="card" options={{ style: { base: { backgroundColor: "lightgrey"} },}}/>
            <button style={{ backgroundColor:"green", color:'white', marginRight:'-.6rem', float: 'right', 
                        marginTop: '1rem', border:'solid green 3px'}}
            >Pay</button>
        </form>
    </div>
  );
};
*/