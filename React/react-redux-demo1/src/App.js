import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Content from './components/Content'
import './index.css'

import createStore from './redux/store'
import themeReducer from './redux/reducer'

const store = createStore(themeReducer)

class App extends Component {
  static childContextTypes = {
    store:PropTypes.object
  }
  getChildContext(){
    return { store }
  }
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

export default App
