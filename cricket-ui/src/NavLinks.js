import React from 'react';
import styles from './NavLinks.module.css';

const NavLinks = () => {
    return (
 
        <div className={styles.Navlinks}>
            {/* <ul>
                <li>Home</li>
                <li>About US</li>
                 <div className={styles.Header}>
                <li>Contact Us</li>
            </ul> */}
             {/* <NavLink to="/">  */}
             <a href='/'>
                <span className={styles.navItems}>Home</span>
            </a>
                {/* </NavLink>   */}
                <span className={styles.navItems}>About Us</span>
                <span className={styles.navItems}>Contact Us</span>
                <span className={styles.navItems}>Sign Up</span>
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