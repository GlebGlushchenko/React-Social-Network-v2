import React from 'react';
import Profile from './Profile';
import Posts from './Posts';

const ProfileSection = ({ profilePage, dispathch }) => {
  return (
    <section className="content">
      <Profile />
      <Posts dispathch={dispathch} profilePage={profilePage} />
    </section>
  );
};

export default ProfileSection;
