import axios from 'axios';
const clientId = '9ab5030f2bbfc507d223';
const secret = '0fe3c938c389fcc52e720bf8802832d9cc03cd2b';
export const getReviews = () => {
    return axios({
        method: 'get',
        url: `https://api.github.com/repos/vvkkumar06/contact-manager/pulls/comments`,
        headers: {
            'Authorization': `token 350313340e329c19f3c7a6514fe902119185e041`
        }
    })
}