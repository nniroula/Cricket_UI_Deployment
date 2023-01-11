import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


export const CheckoutForm = () => {
    const [product, setProduct] = useState({name: "Size: Medium", price: 40 });
    const priceForStripe = product.price*100;

    const payNow = async token => {
        try{
            const response = await axios({
                // url: 'http://localhost:3000/stripe/payment', // To run locally
                url: `https://aecc-api.herokuapp.com/stripe/payment`,
                method:'post',
                data: {
                    amount: product.price*100,
                    token
                }
            });
            if(response.status == 200){
                toast.success("Payment success");
            }  
        }catch(e){
            toast.error(`Payment not successful! ${e.message}`);
        }
    }
    const navigate = useNavigate(); 
    const [show, setShow] = useState(true);
    const handleShow = () => {
        setShow(!show);
        navigate('/');
    }
    return (
        <div>
            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
            >
            <Modal.Header>
            <Modal.Title style={{color:'green'}}>Purchase a jersey, Donate to the AECC!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div style={{ maxWidth: '50vw', minWidth:'20vw', minHeight:'50vh', height: '70vh', 
                maxHeight: '60vh', marginTop:'1em', padding: '0.5em', marginRight:'1em', borderRadius: '2%', 
                marginLeft:'1em', backgroundColor: 'rgb(250, 90, 40)', paddingLeft: '10px'}}>
                <p><small style={{marginTop:'-0.7rem', color:'yellow', }}>Your small purchase means a big support for the AECC!</small></p>
                <p style={{color:"Highlight", textAlign:'center',  marginBottom:'0.25px', marginTop:'-1em'}}>
                    {product.name}
                </p>
                <div style={{textAlign:'center'}}>
                <img src={require('../images/aecc_jersey.jpeg')} alt="Jersey logo" style={{height:"16em", width:"12em"}}/>
                </div>
                    <p style={{color:'cyan', textAlign:'center',  marginBottom:'0.25px'}}>
                    <span>Amount:</span>
                    ${product.price}
                </p>
                <StripeCheckout 
                stripeKey = 'pk_test_51M263tFERbVgkJsuJ7eyF1Zb0cJ6ATy5XrlpClHK4fLEuRYYqyKfYzhEjDdN2ay4MK7GowZvPNh7kAHYvU6DMFTj00OWmuVqU0'
                label="Pay Now"
                amount={priceForStripe}
                description={`Your total is $${product.price}`}
                name="Pay with card"
                token={payNow}
                billingAddress
            />
            </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>Close</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </div>
    );
}