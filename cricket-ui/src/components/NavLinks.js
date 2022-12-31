import React, {useState} from 'react';
import styles from '../stylesheet/NavLinks.module.css';
import SignUpFormInModal from './SignUpFormInModal';
// import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';

import SignUpForm from './SignUpForm';

import MenuIcon from '@mui/icons-material/Menu';


const NavLinks = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);

    const closeMenu = () => {
        setNavbarOpen(true)
    }

    const buttonToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <div className={styles.Navlinks}>
          
            {/* 
            <NavLink to="/aboutUs">
                <span className={styles.navItems}> About Us</span>
            </NavLink>
          
             */}

            <NavLink to="/signup"><span className={styles.navItems}>Sign Up</span></NavLink>
            <NavLink to="/login"><span className={styles.navItems}>Log In</span></NavLink>
            <NavLink to="/logout"><span className={styles.navItems}>Logout</span></NavLink> 

            <button onClick={buttonToggle}> {navbarOpen ? 
                <div>
                    <MenuIcon />
                    <div><NavLink to="/admins">Admins</NavLink> </div>
                    <div><NavLink to="/games">Games</NavLink> </div>
                    <div><NavLink to="/players">Players</NavLink> </div>

                    <div><NavLink to="/aboutUs"> About Us </NavLink></div>
                    <div><NavLink to="/contactUs"> Contact Us </NavLink></div>

                    <div><NavLink to="/donation"> Donate </NavLink></div>
                </div>
                : <MenuIcon />}

            </button>

            {/* <style jsx> {`
                .navBar{
                    height: 50px;
                    widht: 100%
                }
                .nvaBar ul{
                    display: flex;
                    flex-wrap: wrap;
                    float: right
                }
                .navBar Ul li{
                    list-style-type: none
                }
                `}

            </style> */}
        </div>
    );
}

export default NavLinks;