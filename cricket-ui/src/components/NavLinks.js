import React, {useState} from 'react';
import styles from '../stylesheet/NavLinks.module.css';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logInTracker from './auth/loginTracker';


const NavLinks = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    let isSignedIn = false;
    // const [isSignedIn, setIsSignedIn] = useState(false);
    const signedInUser = logInTracker(); 

    const buttonToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    if(signedInUser){
        isSignedIn = true;
        // setIsSignedIn(true)
    }

    return (
        <div className={styles.Navlinks}>
             {isSignedIn ? <span className={styles.Authentication}><NavLink className={styles.SigningService} to="/logout">Logout</NavLink> </span>
                :  <span className={styles.Authentication}>
                    <span className={styles.SignUp}> <NavLink className={styles.SigningService} to="/signup">Sign Up</NavLink> </span>
                    <span> <NavLink className={styles.SigningService} to="/login">Log In</NavLink> </span>
                </span>
             }
            <button className={styles.Menu} onClick={buttonToggle}> {navbarOpen ? 
                <div className={styles.MenuContent}>
                    <MenuIcon />
                    <div><NavLink className={styles.MenuItems} to="/admins">Admins</NavLink> </div>
                    <div><NavLink className={styles.MenuItems} to="/games">Games</NavLink> </div>
                    <div><NavLink className={styles.MenuItems} to="/players">Players</NavLink> </div>
                    <div><NavLink className={styles.MenuItems} to="/aboutUs"> About Us </NavLink></div>
                    <div><NavLink className={styles.MenuItems} to="/contactUs"> Contact Us </NavLink></div>
                    <div><NavLink className={styles.MenuItems} to="/donation"> Donate </NavLink></div>
                </div>
                : <MenuIcon />}

            </button>
        </div>
    );
}

export default NavLinks;