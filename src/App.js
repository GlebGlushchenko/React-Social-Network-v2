import { Route } from 'react-router-dom';
import './App.scss';

import About from './component/About/About';
import Footer from './component/Footer/Footer';
import Header from './component/Header__nav/Header';
import Login from './component/Login/Login';
import ProfileSection from './component/Main/ProfileSection';
import Messages from './component/Dialogs/Diaologs';
import News from './component/News/News';
import Users from './component/Users/Users';

function App({ state, addPost, updateNewPostText, updateNewMessagesText, addMessages }) {
  return (
    <div className="main__wrapper">
      <Header />
      <Route
        path="/profile"
        render={() => (
          <ProfileSection
            updateNewPostText={updateNewPostText}
            addPost={addPost}
            profilePage={state.profilePage}
          />
        )}
      />
      <Route
        path="/messages"
        render={() => (
          <Messages
            updateNewMessagesText={updateNewMessagesText}
            addMessages={addMessages}
            messagesPage={state.messagesPage}
          />
        )}
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
