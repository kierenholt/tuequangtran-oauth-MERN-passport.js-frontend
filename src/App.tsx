import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="1069840831588-g6fqiefkrm5n0b7v50nn88jbhbosif3g.apps.googleusercontent.com"> 
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          useOneTap
        />;

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </GoogleOAuthProvider>;
    </div>
  );
}

export default App;
