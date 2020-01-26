import actionTypes  from './../actions/types';
const {SET_USER} = actionTypes;
export default (state = {}, action) => {
    switch(action.type){
        case SET_USER:
            return action.payload;
        default:
            return state;
    }
}