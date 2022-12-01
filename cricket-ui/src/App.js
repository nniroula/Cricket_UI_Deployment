
import './App.css';
import React from "react";
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
import DisplayGames from './components/DisplayGames';
import FetchGames from './api-services/FetchGames';
import Games from './components/Games';
import Players from './components/Players';
import Admins from './components/Admins';


const App = () => {
    // const [allGames, setAllGames] = useState();
  return (
    <BrowserRouter>
        <div className="App">
            <Header />

            <Routes>

                {/* <StripeInfo />
                <Menu />
                */}

                {/* <SignUpForm /> */}

                {/* <SignUpFormInModal /> */}

                {/* <Route path="/signup" element={<SignUpFormInModal />} /> */}
                {/* <Route path="signup" element={<SignUpForm/>} /> */}

         
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/games" element={<Games />} />
                <Route path="/players" element={<Players />} />

        
                <Route path="/admins" element={<Admins />} />


                {/* HOme page */}
                <Route path="/home" element={<Home />} />
           
                {/* <Route path="/games" element={<DisplayGames />} /> */}
                {/* <Route path="/fetchedgames" element={<DisplayGames allGames={allGames} setAllGames={setAllGames}/>} /> */}
           

            
            </Routes>

            {/* <Route path="/aboutUs" element={<AboutUs />} /> */}

            {/* <Routes exact path="/signup" render={() => <SignUpForm />} /> */}
            <Footer />

        </div>
    </BrowserRouter>
  )
}

export default App;

// 
// 
// // 
// import React, { useState } from 'react';
// import '../toast/Toast.css';
// import 'react-toastify/dist/ReactToastify.css';
// import './App.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { ToastContainer, toast, Slide } from 'react-toastify';
// import ProductPage from '../product-page/ProductPage';
// import CheckoutPage from '../checkout-page/CheckoutPage';
// import ConfirmationPage from '../confirmation-page/ConfirmationPage';
// import ToastPage from '../toast-page/ToastPage';
// import MaintenancePage from '../maintenance-page/MaintenancePage';
// import Header from '../header/Header';
// import CreateProductPage from '../create-product-page/CreateProductPage';
// import ProfilePage from '../profile-page/ProfilePage';
// import CreatePromoPage from '../create-promo-page/CreatePromoPage';
// import PurchasedHistoryPage from '../purchase-history-page/PurchasedHistoryPage';
// import Footer from '../footer/Footer';

// /**
//  * @name App
//  * @returns component
//  */
// const App = () => {
//   const [user, setUser] = useState('');
//   const [loginTracker, setLoginTracker] = useState(false);

//   return (

//     <BrowserRouter>
//       <ToastContainer
//         position={toast.POSITION.TOP_CENTER}
//         autoClose={8000}
//         transition={Slide}
//         progressStyle={{ backgroundColor: 'white' }}
//         pauseOnHover={false}
//         closeOnClick={false}
//       />
//       <Header
//         user={user}
//         setUser={setUser}
//         setLoginTracker={setLoginTracker}
//       />
//       <div className="pageBody">
//         <Switch>
//           <Route
//             exact
//             path="/"
//             render={() => (
//               <ProductPage
//                 user={user}
//                 loginTracker={loginTracker}
//                 setUser={setUser}
//               />
//             )}
//           />
//           <Route exact path="/checkout" render={() => <CheckoutPage />} />
//           <Route exact path="/confirmation" render={() => <ConfirmationPage />} />
//           <Route exact path="/toast" render={() => <ToastPage />} />
//           <Route exact path="/maintenance" render={() => <MaintenancePage />} />
//           <Route exact path="/create-promo" render={() => <CreatePromoPage />} />
//           <Route exact path="/profile" render={() => <ProfilePage />} />
//           <Route exact path="/purchase-history" render={() => <PurchasedHistoryPage />} />
//           <Route exact path="/create-product" render={() => <CreateProductPage />} />
//         </Switch>
//       </div>
//       <Footer />
//     </BrowserRouter>
//   );
// };

// export default App;
