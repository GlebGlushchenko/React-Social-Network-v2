import React from 'react'
import { connect } from 'react-redux'

import {
  addPostAC,
  updateNewPostTextAC,
  addLikeAC,
  onRemovePostAC,
  onRemoveLikeAC,
} from '../redux/profileReducer'
import ProfileSection from './ProfileSection'

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInput: (newText) => {
      dispatch(updateNewPostTextAC(newText))
    },
    OnAddPost: () => {
      dispatch(addPostAC())
    },

    onAddLike: (id) => {
      dispatch(addLikeAC(id))
    },

    onRemovePost: (id) => {
      dispatch(onRemovePostAC(id))
    },

    onRemoveLike: (id) => {
      dispatch(onRemoveLikeAC(id))
    },
  }
}
const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileSection)

export default ProfileContainer
