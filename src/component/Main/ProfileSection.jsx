import React from 'react';
import Profile from './Profile';
import Posts from './Posts';

const ProfileSection = ({ profilePage, addPost, updateNewPostText }) => {
  return (
    <section className="content">
      <Profile />
      <Posts updateNewPostText={updateNewPostText} addPost={addPost} profilePage={profilePage} />
    </section>
  );
};

export default ProfileSection;
