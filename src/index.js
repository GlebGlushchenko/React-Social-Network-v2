import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './component/redux/state';

const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          addMessages={store.addMessages.bind(store)}
          updateNewMessagesText={store.updateNewMessagesText.bind(store)}
          dispathch={store.dispathch.bind(store)}
          state={store.getState()}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};
console.log(store);

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
