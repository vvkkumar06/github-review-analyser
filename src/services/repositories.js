import axios from 'axios';
const baseUrl = 'https://api.github.com';
export const getRepositories = () => {
    return axios({
        method: 'get',
        url: `${baseUrl}/user/repos`,
        headers: {
            'Authorization': `TOKEN ${localStorage.getItem('token')}`
        }
    })
}
