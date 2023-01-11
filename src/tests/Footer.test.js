import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "../components/Footer";


test('Footer should render without crashing', () => {
    render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>,
      );      
});

test('it should render the footer content', () => {
    <BrowserRouter>
        render(
            <Footer />
        )
        const $button = screen.getByText(/Close/i);
        expect(screen.queryByText(/2020 Aurora Everest Cricket Club/i)).not.toBeInTheDocument();
        fireEvent.click($button);
        expect(screen.queryByText(/2020 Aurora Everest Cricket Club/i)).toBeInTheDocument();
    </BrowserRouter>
})

