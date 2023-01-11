import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import NavLinks from "../components/NavLinks";


test('NavLinks page should render without crashing', () => {
    render(
        <BrowserRouter>
            <NavLinks />
        </BrowserRouter>,
      );      
});

test('it should render the content', () => {
    <BrowserRouter>
        render(
            <NavLinks />
        )
        const $button = screen.getByText(/Close/i);
        expect(screen.queryByText(/Logout/i)).not.toBeInTheDocument();
        fireEvent.click($button);
        expect(screen.queryByText(/Logout/i)).toBeInTheDocument();
        expect(screen.queryByText(/Games/i)).toBeInTheDocument();
    </BrowserRouter>
})

test('It should show content on the page', () => {
    <BrowserRouter>
        render(
            <NavLinks />
        )
        const menuSpan = screen.getByText(/span/i);
        expect(menuSpan).toHaveClass('Menu');
        expect(menuSpan).toBeInTheDocument();

        expect(screen.getByText(/Donate/)).not.toBeInTheDocument();
        fireEvent.click(menuSpan);
        expect(screen.getByText(/Donate/)).toBeInTheDocument();
    </BrowserRouter>
})

