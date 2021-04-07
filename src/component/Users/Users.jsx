import React from 'react'

import styles from './usersPage.module.scss'

import { User } from './User'

const Users = ({ usersPage, folowAC, unFolowAC }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.users_title}>Users</h1>

      <div className={styles.users_wrapper}>
        {usersPage.users.map((user, index) => (
          <User
            unFolowAC={unFolowAC}
            folowAC={folowAC}
            folowing={user.folowing}
            userName={user.name}
            id={user.id}
            avatarLink={user.avatarLink}
            kay={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Users
