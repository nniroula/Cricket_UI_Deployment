import React from 'react';
import styles from '../stylesheet/Header.module.css';
import NavLinks from './NavLinks';

/**
 * @name Header
 * @description Displays the navigation header
 * @return component
 */
const Header = () => (
  <div className={styles.Header}>
    <NavLinks />
  </div>
);

export default Header;
