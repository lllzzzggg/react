import React, { Component } from 'react';

class TodoList extends React.Component{
  render(){
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
}

class Test extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items:[],
      text:''
    }
  }
  handleChange = (e) =>{
    this.setState({
      text:e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    if(!this.state.text.length){
      return;
    }
    const newItem = {
      text:this.state.text,
      id: Date.now()
    }
    this.setState(prevState =>({
      items:prevState.items.concat(newItem),
      text:''
    }))
  }
  render(){
    return (
      <div>
        <TodoList items={this.state.items} />
        <form >
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input 
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button onClick={this.handleSubmit}>
            Add Number.{this.state.items.length + 1}
          </button>
        </form>
      </div>
    )
  }
}

export default Test;