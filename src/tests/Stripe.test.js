import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, getByText } from "@testing-library/react";
import CheckOutForm from "../StripeData/CheckOutForm";
import StripeInfo from "../StripeData/StripeInfo";


test('Stripe Checkout Form component should render without crashing, this is Smoke Test', () => {
    render(
    );   
});

test('StripeInfo component should render without crashing, this is Smoke Test', () => {
    render('');     
});