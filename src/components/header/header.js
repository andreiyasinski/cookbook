import React from 'react';
import styles from './header.module.css';
import {NavLink} from 'react-router-dom';

const Header = props => {
  return (
    <header className={styles.header}>
      <NavLink to="/" exact className={styles.logo}>CookBook</NavLink>
      <NavLink to="/profile" className={styles.profileLink} activeClassName={styles.active}>Profile</NavLink>
    </header>
  )
}

export default Header;