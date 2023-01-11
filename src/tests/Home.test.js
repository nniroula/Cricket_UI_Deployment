import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../components/Home";


test('Home Component should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>,
    );      
});