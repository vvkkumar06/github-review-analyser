import { combineReducers } from 'redux';
import reviews from './reviews';
import user from './user';
import {setCurrentRepositoryReducer, getRepositoriesReducer} from './repositories';
export default combineReducers({
    reviews,
    user,
    repos: getRepositoriesReducer,
    currentRepo: setCurrentRepositoryReducer
})