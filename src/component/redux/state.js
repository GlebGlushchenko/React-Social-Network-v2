const state = {
  profilePage: {
    posts: [
      { id: 1, text: 'Hi', like: 0 },
      { id: 2, text: 'Wellcome', like: 0 },
      { id: 3, text: 'lorem ipsum', like: 0 },
      { id: 4, text: 'Lorem Ipsum has been', like: 0 },
      { id: 5, text: 'Bye', like: 0 },
      { id: 6, text: 'lorem ipsum', like: 1 },
    ],
    newPostText: '',
  },

  messagesPage: {
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
  },
};
export let rerenderEntireTree = () => {};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export const addPost = () => {
  const newPost = {
    id: 5,
    text: state.profilePage.newPostText,
    like: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const updateNewMessagesText = (newText) => {
  state.messagesPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export const addMessages = () => {
  const newMessage = {
    message: state.messagesPage.newMessageText,
  };
  state.messagesPage.dialogs.push(newMessage);
  state.messagesPage.newMessageText = '';
  rerenderEntireTree(state);
};

export default state;
