import actionTypes  from './../actions/types';
const {GET_REVIEWS} = actionTypes;
export default (state = [], action) => {
    switch(action.type) {
        case GET_REVIEWS:
            return action.payload;
        default: 
            return state;
    }
}