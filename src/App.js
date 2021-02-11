import './App.css';
import Nav from './component/Nav';

import nav__logo from './img/header__nav/nav__logo.png';
import icon__login from './img/header__nav/icon__login.png';
import Nav__icon from './component/Nav__icon';

function App() {
  return (
    <div className="main__wrapper">
      <Nav__icon text={'Main'} img={nav__logo} />
      <div className="container">
        <div className="app">
          <div className="app__wrapper">
            <Nav />
          </div>
        </div>
      </div>
      <Nav__icon text={'Login'} img={icon__login} />
    </div>
  );
}

export default App;
