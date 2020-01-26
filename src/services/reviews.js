import axios from 'axios';
const baseUrl = 'https://api.github.com/';
export const getReviews = () => {
    return axios({
        method: 'get',
        url: `${baseUrl}repos/vvkkumar06/contact-manager/pulls/comments`,
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