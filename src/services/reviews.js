import axios from 'axios';
export const getReviews = () => {
    return axios({
        method: 'get',
        url: `https://api.github.com/repos/vvkkumar06/contact-manager/pulls/comments`,
        headers: {
            'Authorization': 'TOKEN 88a0bc526f5d000a0adc5bc45709287857ba0aee'
        }
    })
}