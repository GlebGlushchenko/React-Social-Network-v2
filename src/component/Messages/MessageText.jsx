import React from 'react';

import styles from './messages.module.scss';

const MessageText = ({ text }) => {
  return <div className={styles.messagesText}>{text}</div>;
};

export default MessageText;
