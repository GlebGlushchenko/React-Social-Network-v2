import { Route } from 'react-router-dom';
import './App.scss';
import About from './component/About/About';

import Footer from './component/Footer/Footer';

import Header from './component/Header__nav/Header';
import Login from './component/Login/Login';
import ProfileSection from './component/Main/ProfileSection';
import Messages from './component/Messages/Messages';
import News from './component/News/News';
import Users from './component/Users/Users';

function App() {
  const posts = {
    postText: [
      { id: 1, text: 'Hi', like: 0 },
      { id: 2, text: 'Wellcome', like: 0 },
      { id: 3, text: 'lorem ipsum', like: 0 },
      { id: 4, text: 'Lorem Ipsum has been', like: 0 },
      { id: 5, text: 'Bye', like: 0 },
      { id: 6, text: 'lorem ipsum', like: 0 },
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

  return (
    <div className="main__wrapper">
      <Header />
      <Route path="/profile" render={() => <ProfileSection posts={posts} />} />
      <Route
        path="/messages"
        render={() => <Messages messagesUserName={messagesUserName} messages={messages} />}
      />
      <Route path="/news" render={() => <News />} />
      <Route path="/users" render={() => <Users />} />
      <Route path="/about" render={() => <About />} />
      <Route path="/login" render={() => <Login />} />
      <Footer />
    </div>
  );
}

export default App;
