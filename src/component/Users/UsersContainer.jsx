import React from 'react'
import { connect } from 'react-redux'
import { folowAC, unFolowAC } from '../redux/usersReducer'
import Users from './Users'

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    folowAC: (id) => {
      dispatch(folowAC(id))
    },
    unFolowAC: (id) => {
      dispatch(unFolowAC(id))
    },
  }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
