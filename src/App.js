import React from 'react';
import ReviewList from './components/reviews/review-list/review-list';
import GitHubLogin from 'react-github-login';
import { AppBar  } from '@material-ui/core';
const onSuccess = response => {
  localStorage.setItem('token', response.code);
  console.log(response);
}
const onFailure = response => console.error(response);

function App() {
  return (
    <div className="App">
      {/* <GitHubLogin clientId="9ab5030f2bbfc507d223"
       redirectUri=''
       onSuccess={onSuccess}
       onFailure={onFailure}/> */}
      <ReviewList/>
    </div>
  );
}

export default App;
