import actionTypes  from './../actions/types';
const {GET_REPOSITORIES, SET_CURRENT_REPO} = actionTypes;
export const getRepositoriesReducer = (state = {}, action) => {
    switch(action.type){
        case GET_REPOSITORIES:
            return action.payload;
        default:
            return state;
    }
}

export const setCurrentRepositoryReducer = (state = {}, action) => {
    switch(action.type){
        case SET_CURRENT_REPO:
            return action.payload;
        default:
            return state;
    }
}