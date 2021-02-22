import React from 'react';

const Nav__icon = ({ text, img }) => {
  return (
    <div className="link" href="#">
      <img className="nav__logo" src={img} alt="" />
      {text}
    </div>
  );
};

export default Nav__icon;
