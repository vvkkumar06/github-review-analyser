import React from 'react';
import Dashboard from './containers/dashboard';

// const onSuccess = response => {

// }
// const onFailure = response => console.error(response);

function App() {
  return (
    <div className="App" >
      {/* <GitHubLogin clientId="9ab5030f2bbfc507d223
"
       redirectUri=''
       onSuccess={onSuccess}
       onFailure={onFailure}/> */}
      <Dashboard />
    </div>
  );
}

export default App;
