// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//     <App />, 
//     document.getElementById('root'));
// registerServiceWorker();
import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import store from './react-redux/store'
import {Provider} from 'react-redux';
import ControlPanel from './components/ControlPanel'
render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);