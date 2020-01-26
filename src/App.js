import React from 'react';
import Dashboard from './containers/dashboard';
import { getAccessToken } from './services/github-auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGithubAuth from './components/shared/react-github-auth';
import Constants from './utils/constants';

function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route path="">
            <ReactGithubAuth 
              title='Login with github' 
              onSuccess={onSuccess} 
              onFailure={onFailure} 
              client_id={Constants.GITHUB.CLIENT_ID}
              client_secret={Constants.GITHUB.CLIENT_SECRET}
              width='800' 
              height='800' />
          </Route>
        </Switch>
      </Router>
      {/* <Dashboard /> */}
    </div>
  );
}

const onSuccess = async (res) => {
  let access_token = await getAccessToken(res.code);
  localStorage.setItem('token', access_token);
  console.log('success', res)
}

const onFailure = (error) => {
  console.log('error', error);
}

export default App;
