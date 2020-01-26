import { combineReducers } from 'redux';
import reviews from './reviews';
import user from './user';
export default combineReducers({
    reviews,
    user
})