import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import CreateGames from "../components/games/CreateGames";
import DisplayGames from "../components/games/DisplayGames";
import FetchGames from "../api-services/FetchGames";
import UpdateGames from "../components/games/UpdateGames";

test('Create game Component should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
            <CreateGames />
        </BrowserRouter>
    );      
});

test('Display games Component should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
            <DisplayGames />
        </BrowserRouter>
    );      
});

test('Fetch games Component should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
            <FetchGames />
        </BrowserRouter>
    );      
});

test('Update games Component should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
            <UpdateGames />
        </BrowserRouter>
    );      
});



