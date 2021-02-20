import React from 'react';

import nav__logo from '../../img/header__nav/nav__logo.png';
import icon__login from '../../img/header__nav/icon__login.png';
import Nav__icon from './Nav__icon';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <NavLink className="link" to="profile">
        <Nav__icon text={'Main'} img={nav__logo} />
      </NavLink>
      <div className="container">
        <div className="app">
          <div className="app__wrapper">
            <Nav />
          </div>
        </div>
      </div>
      <NavLink className="link" to="login">
        <Nav__icon text={'Login'} img={icon__login} />
      </NavLink>
    </header>
  );
};

export default Header;
