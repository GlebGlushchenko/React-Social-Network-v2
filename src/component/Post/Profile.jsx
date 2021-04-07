import React from 'react';

import profile__avatar from '../../img/profile/profile__avatar.png';

const Profile = () => {
  return (
    <div className="profile__wrapper">
      <h2>Profile</h2>
      <div className="profile__content">
        <img src={profile__avatar} alt="" />
        <div className="profile__description">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
