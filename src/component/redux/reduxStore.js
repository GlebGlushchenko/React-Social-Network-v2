import { combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

let redusers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
});

const store = createStore(redusers);

export default store;
window.store = store;
