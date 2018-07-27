import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//时钟
class Test extends Component {
  constructor(props){
    super(props);
    this.state = {date:new Date()}
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentWillMount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date:new Date()
    })
  }
  render(){
    return (
      <div>
        <h3>Hello,React!</h3>
        <h3>It is {this.state.date.toLocaleTimeString()}</h3>
        <Toggle />
      </div>
    )
  }

}

//双向绑定
class Test extends React.Component{
  constructor(){
    super()
    this.state = {
      msg:''
    }
  }
  handleChange = (e) =>{
    this.setState({
      msg:e.target.value
    })
  }
  render(){
    return(
      <div>
          <input type="text" value={this.state.msg} onChange={this.handleChange}/>
          <h3>Hello,{this.state.msg}</h3>
      </div>
    )
  }
}
//简单切换
class Toggle extends React.Component{
  constructor(props){
    super(props)
    this.state = {isToggleOn:false}

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render(){
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}


//条件渲染
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
class LoginControl extends React.Component{
  constructor(props){
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick(){
    this.setState({
      isLoggedIn:true
    })
  }

  handleLogoutClick(){
    this.setState({
      isLoggedIn:false
    })
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if(isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

//遍历渲染
function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number,index) =>
      <li key={index} className="listItem">
          {number}
      </li>
  );
  return (
      <ul>{listItems}</ul>
  )
}
const numbers = [1, 2, 3, 4, 5];


//react-router-dom路由
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link} from 'react-router-dom';

const router = (
  <BrowserRouter>
      <ul>
          {/* 注意这个地方path的值要跟上面Link的to一样 */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/test">Test</Link></li>
          <Route exact path="/" component={App}/>
          <Route path="/test" component={Test}/>
          <hr/>
      </ul>
  </BrowserRouter>
)

export default Test;
