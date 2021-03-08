import React from 'react'
import { addMessagesAC, updateNewMessagesTextAC } from '../redux/dialogsReducer'
import Messages from './Diaologs'

const DialogsContainer = ({ dispatch, messagesPage }) => {
  const onChangeInputText = (newText) => {
    dispatch(updateNewMessagesTextAC(newText))
  }

  const addMessage = () => {
    dispatch(addMessagesAC())
  }
  return (
    <div>
      <Messages
        addMessage={addMessage}
        onChangeInputText={onChangeInputText}
        messagesPage={messagesPage}
      />
    </div>
  )
}

export default DialogsContainer
