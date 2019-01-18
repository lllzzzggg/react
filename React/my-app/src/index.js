import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import './style/index.css';
import router_test from './router/router_test';
import router2 from './router/router';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    router_test,
    document.getElementById('root'));
// registerServiceWorker();
