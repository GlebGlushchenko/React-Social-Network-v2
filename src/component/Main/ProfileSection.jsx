import React from 'react';
import Profile from './Profile';
import Posts from './Posts';

const ProfileSection = ({ profilePage }) => {
  return (
    <section className="content">
      <Profile />
      <Posts profilePage={profilePage} />
    </section>
  );
};

export default ProfileSection;
