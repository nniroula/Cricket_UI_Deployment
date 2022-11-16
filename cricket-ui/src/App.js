import './App.css';
import React from "react";
import StripeInfo from "./StripeData/StripeInfo";
import Header from './Header';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import Menu from './Menu';
import Navbar from './NavLinks';
import DisplayPlayers from './FetchPlayers';
import FetchPlayers from './FetchPlayers';


const App = () => {
  return (

    // <BrowserRouter>
  
        <div className="App">
          <Header />
        <StripeInfo />

        <Menu />

        {/* <Navbar /> */}
        <DisplayPlayers />

        {/* <FetchPlayers /> */}

        <Footer />
        </div>
      
   
    // </BrowserRouter>
  );
};

export default App;

