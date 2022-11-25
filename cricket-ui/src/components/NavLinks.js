import React, {useState} from 'react';
import styles from '../stylesheet/NavLinks.module.css';
import SignUpFormInModal from './SignUpFormInModal';
// import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';

import SignUpForm from './SignUpForm';
import TrialComponent from './TrialComponent';



const NavLinks = () => {

    return (
 
        <div className={styles.Navlinks}>
             {/* <a href='/'>
                <span className={styles.navItems}>Home</span>
            </a> */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>

                {/* <span className={styles.navItems}>About Us</span> */}
            <NavLink to="/aboutUs">
                <span className={styles.navItems}> About Us</span>
            </NavLink>
                {/* <span className={styles.navItems}>Contact Us</span> */}
                <span className={styles.navItems}><ContactUs /></span>
                {/* <NavLink to='/signup'><SignUpFormInModal /></NavLink> */}


                <NavLink to="/trial"> 
                    Trial
                </NavLink>
           
        
                <span className={styles.navItems}>Log In</span>
                <span className={styles.navItems}>Log out</span>
  

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