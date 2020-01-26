import {getRepositories} from './../services/repositories';
import actionTypes  from './types';
const {GET_REPOSITORIES, SET_CURRENT_REPO} = actionTypes;

export const actionGetRepositories = () => dispatch => {
    getRepositories()
        .then(repos => {
            dispatch({
                type: GET_REPOSITORIES,
                payload: repos
            })
        })
}

export const actionSetCurrentRepository = (repo) => dispatch => {
    dispatch({
        type: SET_CURRENT_REPO,
        payload: repo
    })
}