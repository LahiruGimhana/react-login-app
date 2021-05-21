import { combineReducers } from 'redux';
import userReducer from './userReducer';
import visibleReducer from './visibleReducer';

export default combineReducers({
    user_list: userReducer,
    visible_list: visibleReducer,
});