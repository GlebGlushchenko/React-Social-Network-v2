const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'

const initialState = {
  messagesUserName: [
    { id: 1, name: 'Gleb' },
    { id: 2, name: 'Valera' },
    { id: 3, name: 'Vova' },
    { id: 4, name: 'Alex' },
  ],

  dialogs: [
    { message: 'Lorem ipsum dolor sit amet.' },
    { message: 'Lorem ipsum  sit amet.' },
    { message: 'Lorem fsdfsdfsd dolor sit amet.' },
    { message: 'Lorem ipsum et43fd sit amet.' },
  ],
  newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      }

    case ADD_MESSAGE:
      return {
        ...state,
        dialogs: [...state.dialogs, { message: state.newMessageText }],
        newMessageText: '',
      }

    default:
      return state
  }
}

export const updateNewMessagesTextAC = (newText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: newText,
})

export const addMessagesAC = () => ({ type: ADD_MESSAGE })

export default dialogsReducer
