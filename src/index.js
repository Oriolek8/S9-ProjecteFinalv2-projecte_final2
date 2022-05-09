import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    
    <Auth0Provider
      domain="cripto-web-react.eu.auth0.com"
      clientId="xdiko11ZbMaSfZSDkHgJSrC3lvflUnOY"
      redirectUri={window.location.origin + process.env.PUBLIC_URL + '/'}
    >
        <App />
     
    </Auth0Provider>,
    
);

