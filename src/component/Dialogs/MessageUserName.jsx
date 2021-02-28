import React from 'react';

import { NavLink } from 'react-router-dom';

import profile__avatar from '../../img/profile/profile__avatar.png';
import styles from './messages.module.scss';

const Message = ({ id, name }) => {
  const path = '/messages/' + id;
  return (
    <NavLink activeClassName={styles.messages__user__active} to={path} className={styles.user}>
      <img src={profile__avatar} alt="" />
      <div className={styles.messages__user}>{name}</div>
    </NavLink>
  );
};

export default Message;
