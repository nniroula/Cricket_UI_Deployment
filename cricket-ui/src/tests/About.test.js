import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import AboutUs from "../components/AboutUs";


test('it should render without crashing', () => {
    render(
        <BrowserRouter>
          <AboutUs />
        </BrowserRouter>,
      );      
});

test('it should the state', () => {
    <BrowserRouter>
        render(
            <AboutUs />
        )
        const $button = screen.getByText(/Close/i);
        expect(screen.queryByText(/The Aurora Everest Cricket Club/i)).not.toBeInTheDocument();
        fireEvent.click($button);
        expect(screen.queryByText(/The Aurora Everest Cricket Club/i)).toBeInTheDocument();
        
        expect(screen.queryByText(Club Logo)).toBeInTheDocument();
        const image = screen.getByText('Club Logo');
        expect(image).toHaveAttribute('src', "../images/AECC_LOGO.png");
    </BrowserRouter>
})

