import axios from 'axios';
const baseUrl = 'https://api.github.com/';
export const getReviews = (repo, username, pr ='all') => {
    return axios({
        method: 'get',
        url: pr =='all' && `${baseUrl}repos/${username}/${repo}/pulls/comments`,
        headers: {
            'Authorization': `TOKEN ${localStorage.getItem('token')}`
        }
    })
}
export const getUserDetail = () => {
    return axios({
        url: `${baseUrl}user`,
        headers: {
            'Authorization': `TOKEN ${localStorage.getItem('token')}`
        },
        type: 'get',
      });
}