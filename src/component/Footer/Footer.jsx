import React from 'react';

import styles from './footer.module.css';
import logo__footer from '../../img/footer/logo__footer.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__links}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <a className={styles.footer__link} href="">
            <img className={styles.lofo__footer} src={logo__footer} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
