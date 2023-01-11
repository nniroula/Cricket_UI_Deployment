import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import CreateAdmins from "../components/admins/CreateAdmins";
import DisplayAdmins from "../components/admins/DisplayAdmins";
import FetchAdmins from "../api-services/FetchAdmins";
import UpdateAdmins from "../components/admins/UpdateAdmins";


test('Create admins Component should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
            <CreateAdmins />
        </BrowserRouter>,
    );      
});

test('Display admins Component should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
            <DisplayAdmins />
        </BrowserRouter>
    );      
});

test('Fetch admins Component should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
            <FetchAdmins />
        </BrowserRouter>
    );      
});

test('Update admins Component should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
            <UpdateAdmins />
        </BrowserRouter>
    );      
});



