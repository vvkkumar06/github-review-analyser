import React, { useState } from 'react';
import Dashboard from './containers/dashboard';
import { getAccessToken } from './services/github-auth';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ReactGithubAuth from './components/shared/react-github-auth';
import Constants from './utils/constants';
import PrivateRoute from './utils/private-route';

function App({ children, ...rest }) {
  const onSuccess = async (res) => {
    let access_token = await getAccessToken(res.code);
    localStorage.setItem('token', access_token);
  }

  const onFailure = (error) => {
    localStorage.setItem('token', '');
  }
  return (
    <div className="App" >
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard" >
            <Dashboard />
          </PrivateRoute>
          <Route path="" >
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
    </div>
  );
}

export default App;
