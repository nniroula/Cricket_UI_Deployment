import React from 'react';
// import { NavLink } from 'react-router-dom';
import styles from '../stylesheet/Header.module.css';
import NavLinks from './NavLinks';
// import Navbar from './Navbar';

/**
 * @name Header
 * @description Displays the navigation header
 * @return component
 */
const Header = () => (
  <div className={styles.Header}>
    {/* <div>
      <span id={styles.HeaderText}>AECC</span>
    </div> */}
    {/* <NavLink to="/patients">
      <span id={styles.PatientText}>Patients</span>
    </NavLink>
    <NavLink to="/">
      <span id={styles.HomeText}>Home</span>
    </NavLink> */}

    {/* <Navbar /> */}
    <NavLinks />
  </div>
);
export default Header;
