import React, { useState } from 'react'
import Message from './MessageUserName'

import styles from './messages.module.scss'
import MessageText from './MessageText'
import { addMessagesAC, updateNewMessagesTextAC } from '../redux/dialogsReducer'

const Messages = ({ messagesPage, onChangeInputText, addMessage }) => {
  const newMessageElement = React.createRef()

  // const onChangeInputText = () => {
  //   dispatch(updateNewMessagesTextAC(newMessageElement.current.value))
  // }

  // const onClickMessagesText = () => {
  //   dispatch(addMessagesAC(newMessageElement.current.value))
  // }

  const handlerChangeInputMessageText = () => {
    onChangeInputText(newMessageElement.current.value)
  }

  const handlerAddMessage = () => {
    addMessage()
  }

  return (
    <div className={styles.messages__wrapper}>
      <h1 className={styles.messages__title}>Messages</h1>
      <div className={styles.messages}>
        <div className={styles.messages__users}>
          {messagesPage.messagesUserName.map((message, index) => (
            <Message key={index} id={message.id} name={message.name} />
          ))}
        </div>
        <div className={styles.message__section}>
          {messagesPage.dialogs.map((message, index) => (
            <MessageText key={index} text={message.message} />
          ))}
          <input
            ref={newMessageElement}
            onChange={handlerChangeInputMessageText}
            value={messagesPage.newMessageText}
            type="text"
            name=""
            id=""
          />
          <button onClick={handlerAddMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Messages
