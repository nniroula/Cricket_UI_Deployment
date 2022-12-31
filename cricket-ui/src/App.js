
import './App.css';
import React, {useState} from "react";
import StripeInfo from "./StripeData/StripeInfo";
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';


import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './components/ContactUs';
import SignUpForm from './components/SignUpForm';
import SignUpFormInModal from './components/SignUpFormInModal';

import Home from './components/Home';
import DisplayGames from './components/games/DisplayGames';
import FetchGames from './api-services/FetchGames';
import Games from './components/games/Games';
import Players from './components/players/Players';
import Admins from './components/admins/Admins';
import LoginForm from './components/auth/LoginForm';
import Logout from './components/auth/Logout';
import FetchAdmins from './api-services/FetchAdmins';
import FetchPlayers from './api-services/FetchPlayers';

// import AdminDashBoard from './components/AdminDashBoard';


const App = () => {
    // const [allGames, setAllGames] = useState();
    // const [isAdmin, setIsAdmin] = useState();
  return (
    <BrowserRouter>
        <div className="App">
            <Header />
              {/* <StripeInfo /> */}

            <Routes>
                {/*
                <Menu />
                */}
                <Route path="/games" element={<Games />} />
                <Route path="/fetchGames" element={<FetchGames />} />

                <Route path="/players" element={<Players />} />
                <Route path="/fetchPlayers" element={<FetchPlayers />} />

                <Route path="/admins" element={<Admins />} />
                <Route path="/fetchAdmins" element={<FetchAdmins />} />

                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/signup" element={<SignUpForm />} />

                <Route path="/home" element={<Home />} />

                {/* <Route path="/menu" element={<Menu />} /> */}

              
                <Route path="/donation" element={<StripeInfo />} />

               
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
  )
}

export default App;