import React, { useState, useEffect } from 'react';
import styles from '../stylesheet/NavLinks.module.css';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logInTracker from './auth/loginTracker';


const NavLinks = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [user, setUser] = useState({});

    const buttonToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    useEffect(() => {
        setInterval(() => {
            const signedInUser = logInTracker();
            setUser(signedInUser);
            }, [])
    }, 5000);

    return (
        <div className={styles.Navlinks}>
             {user ? 
                <span className={styles.Authentication}><NavLink className={styles.SigningService} to="/logout">Logout</NavLink> </span>
                :  <span className={styles.Authentication}>
                    <span className={styles.SignUp}> <NavLink className={styles.SigningService} to="/signup">Sign Up</NavLink> </span>
                    <span> <NavLink className={styles.SigningService} to="/login">Log In</NavLink> </span>
                </span>
             }
            <div className={styles.Menu} onClick={buttonToggle}> {navbarOpen ? 
                <div className={styles.MenuContent}>
                    <MenuIcon />
                    <div><NavLink className={styles.MenuItems} to="/fetchGames">Games</NavLink> </div>
                    <div><NavLink className={styles.MenuItems} to="/fetchPlayers">Players</NavLink> </div>
                     <div><NavLink className={styles.MenuItems} to="/fetchAdmins">Admins</NavLink> </div>
                     <div><NavLink className={styles.MenuItems} to="/aboutUs"> About Us </NavLink></div>
                    <div><NavLink className={styles.MenuItems} to="/contactUs"> Contact Us </NavLink></div>
                    <div><NavLink className={styles.MenuItems} to="/donation"> Donate </NavLink></div>  
                </div>
                : <MenuIcon />}
            </div>
        </div>
    );
}

export default NavLinks;