import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import LoginTracker from "../components/auth/LoginTracker";


test('Login Tracker should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
            <LoginTracker />
        </BrowserRouter>
    );      
});