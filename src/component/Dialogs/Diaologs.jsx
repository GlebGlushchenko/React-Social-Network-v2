import React, { useState } from 'react';
import Message from './MessageUserName';

import styles from './messages.module.scss';
import MessageText from './MessageText';

const Messages = ({ messagesPage, updateNewMessagesText, addMessages }) => {
  const newMessageElement = React.createRef();

  const onChangeInputText = () => {
    console.log(newMessageElement.current.value);
    updateNewMessagesText(newMessageElement.current.value);
  };

  const onClickMessagesText = () => {
    addMessages(newMessageElement.current.value);
  };

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
            onChange={onChangeInputText}
            value={messagesPage.newMessageText}
            type="text"
            name=""
            id=""
          />
          <button onClick={onClickMessagesText}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;