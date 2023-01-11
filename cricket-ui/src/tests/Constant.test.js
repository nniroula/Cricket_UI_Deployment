import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import Constant from "../components/Constant";


test('NavLinks page should render without crashing', () => {
    render(
        <BrowserRouter>
            <Constant />
        </BrowserRouter>,
      );      
});

test('it should render the content', () => {
    <BrowserRouter>
        render(
            <Constant />
        )
        expect(screen.queryByText(/LOGIN_ENDPOINT/i)).toBeInTheDocument();
    </BrowserRouter>
})




