import React from 'react';

const Nav__icon = ({ text, img }) => {
  return (
    <a className="link" href="#">
      <img className="nav__logo" src={img} alt="" />
      {text}
    </a>
  );
};

export default Nav__icon;
