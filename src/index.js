import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Router from "./containers/Router";
import "./styles/main.css";

ReactDOM.render(
    <Router/>, document.getElementById('root'));
registerServiceWorker();
