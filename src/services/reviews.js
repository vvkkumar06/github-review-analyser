import axios from 'axios';
export const getReviews = () => {
    return axios({
        method: 'get',
        url: `https://api.github.com/repos/vvkkumar06/contact-manager/pulls/comments`,
        headers: {
            'Authorization': `token 97a0b839f5db3d27cfa8145211b534a2d3fb953e`
        }
    })
}