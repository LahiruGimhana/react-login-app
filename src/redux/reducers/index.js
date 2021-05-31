import { combineReducers } from 'redux';
import userReducer from './userReducer';
import visibleReducer from './visibleReducer';
import chatReducer from './chatReducer';

export default combineReducers({
    user_list: userReducer,
    visible_list: visibleReducer,
    chat_list: chatReducer,
});