import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const posts = {
  postText: [
    { id: 1, text: 'Hi', like: 0 },
    { id: 2, text: 'Wellcome', like: 0 },
    { id: 3, text: 'lorem ipsum', like: 0 },
    { id: 4, text: 'Lorem Ipsum has been', like: 0 },
    { id: 5, text: 'Bye', like: 0 },
    { id: 6, text: 'lorem ipsum', like: 1 },
  ],
};

const messagesUserName = [
  { id: 1, name: 'Gleb' },
  { id: 2, name: 'Valera' },
  { id: 3, name: 'Vova' },
  { id: 4, name: 'Alex' },
];

const messages = {
  mess: [
    { message: 'Lorem ipsum dolor sit amet.' },
    { message: 'Lorem ipsum  sit amet.' },
    { message: 'Lorem fsdfsdfsd dolor sit amet.' },
    { message: 'Lorem ipsum et43fd sit amet.' },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} messagesUserName={messagesUserName} messages={messages} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
