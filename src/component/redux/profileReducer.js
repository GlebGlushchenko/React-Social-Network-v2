const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

const initialState = {
  posts: [
    { id: 1, text: 'Hi', like: 0 },
    { id: 2, text: 'Wellcome', like: 0 },
    { id: 3, text: 'lorem ipsum', like: 0 },
    { id: 4, text: 'Lorem Ipsum has been', like: 0 },
    { id: 5, text: 'Bye', like: 0 },
    { id: 6, text: 'lorem ipsum', like: 1 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({ id: 6, text: state.newPostText, like: 0 });
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostAC = () => ({ type: ADD_POST });

export const updateNewPostTextAC = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText,
});

export default profileReducer;
