import './App.css';
import Nav from './component/Header__nav/Nav';

import nav__logo from './img/header__nav/nav__logo.png';
import icon__login from './img/header__nav/icon__login.png';
import Nav__icon from './component/Header__nav/Nav__icon';
import Footer from './component/Footer/Footer';
import Profile from './component/Main/Profile';
import Posts from './component/Main/Posts';

function App() {
  return (
    <div className="main__wrapper">
      <header className="header">
        <Nav__icon text={'Main'} img={nav__logo} />
        <div className="container">
          <div className="app">
            <div className="app__wrapper">
              <Nav />
            </div>
          </div>
        </div>
        <Nav__icon text={'Login'} img={icon__login} />
      </header>
      <section className="content">
        <Profile />
        <Posts />
      </section>
      <Footer />
    </div>
  );
}

export default App;
