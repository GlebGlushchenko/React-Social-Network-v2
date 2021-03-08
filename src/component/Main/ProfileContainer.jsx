import React from 'react'

import {
  addPostAC,
  updateNewPostTextAC,
  addLikeAC,
  onRemovePostAC,
  onRemoveLikeAC,
} from '../redux/profileReducer'
import ProfileSection from './ProfileSection'

const ProfileContainer = ({ profilePage, dispatch }) => {
  const onChangeInput = (newText) => {
    dispatch(updateNewPostTextAC(newText))
  }
  const OnAddPost = () => {
    dispatch(addPostAC())
  }

  const onAddLike = (id) => {
    dispatch(addLikeAC(id))
  }

  const onRemovePost = (id) => {
    dispatch(onRemovePostAC(id))
  }

  const onRemoveLike = (id) => {
    dispatch(onRemoveLikeAC(id))
  }

  return (
    <div className="content">
      <ProfileSection
        onRemoveLike={onRemoveLike}
        OnAddPost={OnAddPost}
        onChangeInput={onChangeInput}
        profilePage={profilePage}
        onAddLike={onAddLike}
        onRemovePost={onRemovePost}
      />
    </div>
  )
}

export default ProfileContainer
