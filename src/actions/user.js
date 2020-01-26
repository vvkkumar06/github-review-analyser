import {getUserDetail} from './../services/reviews';
export const actionGetUser = () => dispatch => {
    getUserDetail()
        .then(user => {
            dispatch({
                type: 'SET_USER',
                payload: user
            })
        })
}