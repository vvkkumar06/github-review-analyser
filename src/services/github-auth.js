import axios from 'axios';
import Constants from './../utils/constants';

export const getAccessToken= (code) => {
    return axios({
        url: 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
        params: {
          client_id: Constants.GITHUB.CLIENT_ID,
          client_secret: Constants.GITHUB.CLIENT_SECRET,
          code: code
        },
        type: 'get'
      }).then(res => {
          console.log(res);
        let access_token = res.data.slice(res.data.indexOf('access_token=') + 'access_token='.length, res.data.indexOf('&'));
        return access_token;
      });
}
