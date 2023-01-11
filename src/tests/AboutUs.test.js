import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import AboutUs from "../components/AboutUs";

/*This is a Smoke test: it tests if the component is rendered.
 SnapShot test tests if the rendering changed.
 */
test('it should render without crashing', () => {
    render(
        <BrowserRouter>
          <AboutUs />
        </BrowserRouter>,
    );      
});

test('it should show the content', () => {
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

// Snapshot test 
test("it matches snapshot", () => {
    const {asFragment} =  render(
    <BrowserRouter>
       <AboutUs />;
    </BrowserRouter>
    )
    expect(asFragment()).toMatchSnapshot();
})


