import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route ,Link} from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import style from '../styles/home_page.less';

class App extends Component {
  render() {
    return (
        <div className={style.welcome}>
          Welcome
        </div> 
    );
  }
}

export default App;
