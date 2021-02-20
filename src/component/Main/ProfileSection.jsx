import React from 'react';
import Profile from './Profile';
import Posts from './Posts';

const ProfileSection = () => {
  return (
    <section className="content">
      <Profile />
      <Posts />
    </section>
  );
};

export default ProfileSection;
