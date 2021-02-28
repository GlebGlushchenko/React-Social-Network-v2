import React, { useState } from 'react';
import Message from './MessageUserName';

import styles from './messages.module.scss';
import MessageText from './MessageText';

const Messages = ({ messagesPage }) => {
  const [messageInputText, setMessageInputText] = useState('');

  const onChangeINputText = (event) => {
    setMessageInputText(event.currentTarget.value);
  };

  const [messagesText, setMessagesText] = useState(messagesPage);

  const onClickMessagesText = () => {
    setMessagesText({
      ...messagesText,
      dialogs: [...messagesText.dialogs, { message: messageInputText }],
    });
    setMessageInputText(' ');
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
          {messagesText.dialogs.map((message, index) => (
            <MessageText key={index} text={message.message} />
          ))}
          <input onChange={onChangeINputText} value={messageInputText} type="text" name="" id="" />
          <button onClick={onClickMessagesText}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
