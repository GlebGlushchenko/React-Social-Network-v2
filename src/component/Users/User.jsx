import React from 'react'

import styles from './usersPage.module.scss'

export const User = ({ userName, id, avatarLink, folowing, folowAC, unFolowAC }) => {
  console.log(folowing)
  const onFollow = () => {
    folowAC(id)
  }
  const onUnfollow = () => {
    unFolowAC(id)
  }

  return (
    <div className={styles.users_item}>
      <img width="50px" src={avatarLink} alt="avatar" />
      <p className={styles.users_item_name}>{userName}</p>
      <button onClick={folowing ? onUnfollow : onFollow}>
        {!folowing ? 'follow' : 'unfollow'}
      </button>
    </div>
  )
}
