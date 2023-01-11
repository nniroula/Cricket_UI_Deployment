import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, cleanup, waitForElement } from "@testing-library/react";
import SignUpForm from "../components/SignUpForm";


afterEach(cleanup);

/* in __mocks__/axios.js, the data is empty object to fake axios */
test('Signup Form should render without crashing', async () => {
    const {getByText} = render(
        <BrowserRouter>
            <SignUpForm />
        </BrowserRouter>
    ); 
    expect(getByText(/Sign Up/i)).toBeInTheDocument();
});





