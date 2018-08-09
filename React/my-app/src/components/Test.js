import React, { Component } from 'react';

class Child extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value:''
    }
    this.emallVal = this.emallVal.bind(this)
  }
  emallVal(e){
    this.setState({
      value:e.target.value
    })
    let val = e.target.value
    val = val.replace(/[^0-9|a-z|A-Z|\@|\.]/ig,"")
    this.props.emallChange(val)
  }
  render(){
    return(
      <p>
        email:<input value={this.state.value} onChange={this.emallVal}/>
      </p>  
    ) 
  }
}

class Father extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value:''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(val){
    this.setState({
      value:val
    })
  }
  render(){
    return(
      <div>
        <p>emall为：{this.state.value}</p>
        <Child emallChange={this.handleChange}/>
      </div>
    )
  }
}

export default Father;