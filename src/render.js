import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './component/redux/state';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App addPost={addPost} state={state} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};
