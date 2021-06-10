import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
      <Auth0Provider
          domain='dev-0-y4vepy.us.auth0.com'
          clientId='UrdB0untbF24gfJvMSqB5LcNSyUAAiLB'
          redirectUri={window.location.origin}
          cacheLocation='localstorage'
      >
        <GithubProvider>
            <App />
        </GithubProvider>
      </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
