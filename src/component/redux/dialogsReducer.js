const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;

    case ADD_MESSAGE:
      state.dialogs.push({ message: state.newMessageText });
      state.newMessageText = ' ';
      return state;
    default:
      return state;
  }
};

export const updateNewMessagesTextAC = (newText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: newText,
});

export const addMessagesAC = () => ({ type: ADD_MESSAGE });

export default dialogsReducer;
