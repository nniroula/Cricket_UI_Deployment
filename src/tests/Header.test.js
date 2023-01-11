import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";


test('Header Component should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>,
    );      
});