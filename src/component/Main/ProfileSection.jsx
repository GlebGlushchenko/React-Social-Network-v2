import React from 'react'
import Posts from './Posts'
import Profile from './Profile'

const ProfileSection = ({
  profilePage,
  OnAddPost,
  onChangeInput,
  onAddLike,
  onRemovePost,
  onRemoveLike,
}) => {
  return (
    <section className="content">
      <Profile />
      <Posts
        onRemoveLike={onRemoveLike}
        onRemovePost={onRemovePost}
        onAddLike={onAddLike}
        OnAddPost={OnAddPost}
        onChangeInput={onChangeInput}
        profilePage={profilePage}
      />
    </section>
  )
}

export default ProfileSection
