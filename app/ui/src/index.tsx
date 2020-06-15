import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ServiceContainer } from './services/ServiceContainer';
import { IModuleService } from '@mutant/interface/services/IModuleService';
import * as qs from 'qs';

const queryParameters = qs.parse(window.location.search);

const apiBaseUrl = queryParameters['?apiBaseUrl']?.toString() || queryParameters['apiBaseUrl']?.toString() || 'http://localhost:3000';

ServiceContainer.configure(apiBaseUrl);
const inst = ServiceContainer.resolve<IModuleService>('IModuleService');

console.log(inst.getModules());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
