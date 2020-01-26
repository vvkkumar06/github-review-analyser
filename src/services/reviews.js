import axios from 'axios';
export const getReviews = () => {
    return axios({
        method: 'get',
        url: `https://api.github.com/repos/vvkkumar06/contact-manager/pulls/comments`,
        headers: {
            'Authorization': `TOKEN ${localStorage.getItem('token')}`
        }
    })
}