import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { transitions, Provider as AlertProvider } from 'react-alert'
import buildLDProvider from './Providers/LaunchDarkly/index.js';
import AlertTemplate from './Components/AlertTemplate.js';
import { getLDUser } from './Utils/utils.js';

const alertOptions = {
  timeout: 4000,
  transition: transitions.FADE
};

const addUserContext = {
  custom: {
    // Enter custom attributes here
  }
};

(async () => {
  const LDProvider = await buildLDProvider({
    user: { ...addUserContext, ...getLDUser() },
    clientSideID: process.env.REACT_APP_LD_CLIENTSIDE_ID,
  });

  ReactDOM.render(
      <LDProvider>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <App/>
        </AlertProvider>
      </LDProvider>,
    document.getElementById('root')
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
