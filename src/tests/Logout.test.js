import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import Logout from "../components/auth/Logout";


test('Logout Component should render without crashing, this is Smoke Test', () => {
    render(
        <BrowserRouter>
          <Logout />
        </BrowserRouter>,
      );      
});


