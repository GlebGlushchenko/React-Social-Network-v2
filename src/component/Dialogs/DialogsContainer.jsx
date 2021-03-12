import React from 'react'
import { connect } from 'react-redux'
import { addMessagesAC, updateNewMessagesTextAC } from '../redux/dialogsReducer'
import Messages from './Diaologs'

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInputText: (newText) => {
      dispatch(updateNewMessagesTextAC(newText))
    },

    addMessage: () => {
      dispatch(addMessagesAC())
    },
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default DialogsContainer
