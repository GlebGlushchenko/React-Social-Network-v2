import React from 'react';
import styles from './links.module.css';

const Links = () => {
  console.log(styles);
  return (
    <nav className={styles.nav__links}>
      <a className={styles.nav__link} href="#">
        Profile
      </a>
      <a className={styles.nav__link} href="#">
        Users
      </a>
      <a className={styles.nav__link} href="#">
        Messages
      </a>
      <a className={styles.nav__link} href="#">
        News
      </a>
      <a className={styles.nav__link} href="#">
        About
      </a>
    </nav>
  );
};

export default Links;
