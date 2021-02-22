import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './links.module.css';

const Links = () => {
  return (
    <nav className={styles.nav__links}>
      <NavLink
        activeClassName={styles.link__active}
        to="/profile"
        className={styles.nav__link}
        href="#">
        Profile
      </NavLink>
      <NavLink
        activeClassName={styles.link__active}
        to="/users"
        className={styles.nav__link}
        href="#">
        Users
      </NavLink>
      <NavLink
        activeClassName={styles.link__active}
        to="messages"
        className={styles.nav__link}
        href="#">
        Messages
      </NavLink>
      <NavLink
        activeClassName={styles.link__active}
        to="news"
        className={styles.nav__link}
        href="#">
        News
      </NavLink>
      <NavLink
        activeClassName={styles.link__active}
        to="about"
        className={styles.nav__link}
        href="#">
        About
      </NavLink>
    </nav>
  );
};

export default Links;
