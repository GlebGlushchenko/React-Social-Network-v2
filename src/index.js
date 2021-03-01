import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state, {
  addPost,
  updateNewPostText,
  addMessages,
  updateNewMessagesText,
  subscribe,
} from './component/redux/state';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          addMessages={addMessages}
          updateNewMessagesText={updateNewMessagesText}
          updateNewPostText={updateNewPostText}
          addPost={addPost}
          state={state}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
