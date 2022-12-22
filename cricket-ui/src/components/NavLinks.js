import React, {useState} from 'react';
import styles from '../stylesheet/NavLinks.module.css';
import SignUpFormInModal from './SignUpFormInModal';
// import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';

import SignUpForm from './SignUpForm';


const NavLinks = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className={styles.Navlinks}>
            <NavLink to="/admins">Admins</NavLink>
            <NavLink to="/games">Games</NavLink>
            <NavLink to="/players">Players</NavLink>

            <NavLink to="/aboutUs">
                <span className={styles.navItems}> About Us</span>
            </NavLink>
            <NavLink to="/contactUs">
                <span className={styles.navItems}> Contact Us</span>
            </NavLink>

            {/* {loggedIn ? <NavLink to="/logout">Logout</NavLink>: 
                <span>
                <NavLink to="/login">Log In</NavLink> 
                <NavLink to="/signup">Sign Up</NavLink> 
                </span>
            } */}

            <NavLink to="/signup"><span className={styles.navItems}>Sign Up</span></NavLink>
            <NavLink to="/login"><span className={styles.navItems}>Log In</span></NavLink>
            <NavLink to="/logout"><span className={styles.navItems}>Logout</span></NavLink> 

            <NavLink to="/adminDashBoard">Admin Dash Board</NavLink>

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