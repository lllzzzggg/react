import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import './style/index.css';
import App from './App';
import Test from './components/Test';
import NumberList from './components/NumberList.js';
import registerServiceWorker from './registerServiceWorker';

const router = (
    <BrowserRouter>
        <div>
            <ul className="nav_ul">
                {/* 注意这个地方path的值要跟上面Link的to一样 */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/test">Test</Link></li>      
                <hr/>
            </ul>
            <Route exact path="/" component={App}/>
            <Route path="/test" component={Test}/>
            <h3>footer</h3>
        </div>
  </BrowserRouter>
  )
ReactDOM.render(
    router,
    document.getElementById('root'));
registerServiceWorker();
