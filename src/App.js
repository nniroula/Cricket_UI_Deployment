import './App.css';
import React from "react";
import StripeInfo from "./StripeData/StripeInfo";
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './components/ContactUs';
import SignUpForm from './components/SignUpForm';
import Home from './components/Home';
import FetchGames from './api-services/FetchGames';
import LoginForm from './components/auth/LoginForm';
import Logout from './components/auth/Logout';
import FetchAdmins from './api-services/FetchAdmins';
import FetchPlayers from './api-services/FetchPlayers';


const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Home />
            <Routes>
                <Route path="/fetchGames" element={<FetchGames />} />
                <Route path="/fetchPlayers" element={<FetchPlayers />} />
                <Route path="/fetchAdmins" element={<FetchAdmins />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/" element={<Home />} />
                <Route path="/donation" element={<StripeInfo />} />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
  )
}

export default App;