import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../components/auth/LoginForm";


test('Login Form Component should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>,
      );      
});

test('it should render the content', () => {
    <BrowserRouter>
        render(
            <LoginForm />
        );
        const $button = screen.getByText(/Log In/i);
        fireEvent.click($button);
        expect(screen.queryByText(/Log In/i)).toBeInTheDocument();
    </BrowserRouter>
})

