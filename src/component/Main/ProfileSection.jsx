import React from 'react';
import Profile from './Profile';
import Posts from './Posts';

const ProfileSection = ({ posts }) => {
  return (
    <section className="content">
      <Profile />
      <Posts posts={posts} />
    </section>
  );
};

export default ProfileSection;
