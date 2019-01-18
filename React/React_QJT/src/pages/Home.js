import React, { Component } from 'react';
import style from '../styles/home_page.less';

class App extends Component {
  render() {
    const name = 'React'
    return (
        <div className={style.welcome}>
            Welcome {name}
        </div> 
    );
  }
}

export default App;
