import React, { Component } from 'react';
//子组件
class Test extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        msg:'',
        fontSize:12,
        title:this.props.title,
        content:this.props.content
      }
    }
    handleChange = (e) =>{
      this.setState({
        msg:e.target.value
      })
    }
  
    handleClick = (e) =>{
      this.setState({
        content:this.state.msg
      })
      // console.log(e)
    }
    render(){
      return(
          <div>
            <h3>Hello,{this.state.title}</h3>
            <div>
              <p>{this.state.content}</p>
              <input type="text" value={this.state.msg} onChange={this.handleChange} />
              <button onClick={this.handleClick}>change</button>
              <p>{this.state.msg}</p>
            </div>
          </div>
      )
    }
}
  

//父组件
class NumberList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg:'',
            numbers:[
                {
                  id:1,
                  title:'one',
                  content:'dsadsadsadsadsdads'
                },
                {
                  id:2,
                  title:'two',
                  content:'2'
                },
            ]
        }
    }
    handleChange = (msg) =>{
        this.setState({
            msg
        })
    }
    render(){
        const listItems = this.state.numbers.map((number,index) =>
            <Test 
                key={index}
                title={number.title}
                content={number.content}
                handleChange={this.handleChange}
            />
        );
        return (
            <div>
                <ul>{listItems}</ul> 
                <h3>{this.state.msg}</h3>
            </div>
        )
    }
    
}

export default NumberList;