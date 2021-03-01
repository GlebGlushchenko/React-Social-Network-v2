import React from 'react';
import Profile from './Profile';
import Posts from './Posts';

const ProfileSection = ({ profilePage, addPost }) => {
  return (
    <section className="content">
      <Profile />
      <Posts addPost={addPost} profilePage={profilePage} />
    </section>
  );
};

export default ProfileSection;
