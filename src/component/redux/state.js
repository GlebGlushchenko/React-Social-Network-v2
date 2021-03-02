let store = {
  state: {
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
  },

  getState() {
    return this.state;
  },
  rerenderEntireTree() {},
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  updateNewMessagesText(newText) {
    this.state.messagesPage.newMessageText = newText;
    this.rerenderEntireTree(this.state);
  },

  addMessages() {
    const newMessage = {
      message: this.state.messagesPage.newMessageText,
    };
    this.state.messagesPage.dialogs.push(newMessage);
    this.state.messagesPage.newMessageText = '';
    this.rerenderEntireTree(this.state);
  },
  dispathch(action) {
    if (action.type === 'ADD_POST') {
      const newPost = {
        id: 5,
        text: this.state.profilePage.newPostText,
        like: 0,
      };

      this.state.profilePage.posts.push(newPost);
      this.state.profilePage.newPostText = '';
      this.rerenderEntireTree(this.state);
    } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
      this.state.profilePage.newPostText = action.newText;
      this.rerenderEntireTree(this.state);
    }
  },
};

window.store = store;

export default store;
