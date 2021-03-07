import React from 'react';
import Profile from './Profile';
import Posts from './Posts';

const ProfileSection = ({ profilePage, dispatch }) => {
  return (
    <section className="content">
      <Profile />
      <Posts dispatch={dispatch} profilePage={profilePage} />
    </section>
  );
};

export default ProfileSection;
