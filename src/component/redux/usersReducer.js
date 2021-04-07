import avatarLink from '../../img/users/user.png'
const FOLOW = 'FOLOW'
const UNFOLOW = 'UNFOLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
  users: [
    { id: 1, name: 'Gleb', avatarLink, folowing: true },
    { id: 2, name: 'Valera', avatarLink, folowing: true },
    { id: 3, name: 'Vova', avatarLink, folowing: false },
    { id: 4, name: 'Alex', avatarLink, folowing: false },
    { id: 5, name: 'German', avatarLink, folowing: false },
    { id: 6, name: 'Olga', avatarLink, folowing: false },
    { id: 7, name: 'Natasha', avatarLink, folowing: false },
    { id: 8, name: 'Roman', avatarLink, folowing: false },
  ],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, folowing: true } : user,
        ),
      }

    case UNFOLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, folowing: false } : user,
        ),
      }

    case SET_USERS:
      return {}
    default:
      return state
  }
}

export const folowAC = (id) => ({
  type: FOLOW,
  id: id,
})

export const unFolowAC = (id) => ({
  type: UNFOLOW,
  id: id,
})

export default usersReducer
