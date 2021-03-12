import { Route } from 'react-router-dom'
import './App.scss'

import About from './component/About/About'
import Footer from './component/Footer/Footer'
import Header from './component/Header__nav/Header'
import Login from './component/Login/Login'

import News from './component/News/News'
import Users from './component/Users/Users'
import DialogsContainer from './component/Dialogs/DialogsContainer'
import ProfileContainer from './component/Main/ProfileContainer'

function App() {
  return (
    <div className="main__wrapper">
      <Header />
      <Route path="/profile" render={() => <ProfileContainer />} />
      <Route path="/messages" render={() => <DialogsContainer />} />
      <Route path="/news" render={() => <News />} />
      <Route path="/users" render={() => <Users />} />
      <Route path="/about" render={() => <About />} />
      <Route path="/login" render={() => <Login />} />
      <Footer />
    </div>
  )
}

export default App
