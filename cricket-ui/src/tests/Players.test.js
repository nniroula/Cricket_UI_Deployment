import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import CreatePlayers from "../components/players/CreatePlayers";
import DisplayPlayers from "../components/players/DisplayPlayers";
import FetchPlayers from "../api-services/FetchPlayers";
import UpdatePlayers from "../components/players/UpdatePlayers";


test('Create players Component should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
            <CreatePlayers />
        </BrowserRouter>,
    );      
});

test('Display players Component should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
            <DisplayPlayers />
        </BrowserRouter>
    );      
});

test('Fetch players Component should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
            <FetchPlayers />
        </BrowserRouter>
    );      
});

test('Update players Component should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
            <UpdatePlayers />
        </BrowserRouter>
    );      
});



