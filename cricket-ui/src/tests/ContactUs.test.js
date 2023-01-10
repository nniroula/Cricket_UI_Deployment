import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import ContactUs from "../components/ContactUs";


test('ContactUs page should render without crashing', () => {
    render(
        <BrowserRouter>
          <ContactUs />
        </BrowserRouter>,
      );      
});

test('it should render the content', () => {
    <BrowserRouter>
        render(
            <ContactUs />
        )
  
        const $button = screen.getByText(/Close/i);
        expect(screen.queryByText(/720-499-3220/i)).not.toBeInTheDocument();
        fireEvent.click($button);
        expect(screen.queryByText(/720-499-3220/i)).toBeInTheDocument();
        
        expect(screen.queryByText(/cricketaecc@gmail.com/i)).toBeInTheDocument();
    </BrowserRouter>
})

