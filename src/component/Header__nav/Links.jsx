import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './links.module.css';

const Links = () => {
  console.log(styles);
  return (
    <nav className={styles.nav__links}>
      <NavLink to="/profile" className={styles.nav__link} href="#">
        Profile
      </NavLink>
      <NavLink to="/users" className={styles.nav__link} href="#">
        Users
      </NavLink>
      <NavLink to="messages" className={styles.nav__link} href="#">
        Messages
      </NavLink>
      <NavLink to="news" className={styles.nav__link} href="#">
        News
      </NavLink>
      <NavLink to="about" className={styles.nav__link} href="#">
        About
      </NavLink>
    </nav>
  );
};

export default Links;
