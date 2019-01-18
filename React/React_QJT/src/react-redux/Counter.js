import React, { Component } from 'react'
import {increment,decrement,changeInput,decrementSlow} from './Action'
import {connect} from 'react-redux';
const buttonStyle = {
    margin: "20px"
}

function Counter(){
    return{
        render(){
            const {caption, Increment, Decrement, DecrementSlow, ChangeInput, value} = this.props
            return (
                <div>
                    <button style={buttonStyle} onClick={Increment}>+</button>
                    <button style={buttonStyle} onClick={Decrement}>-</button>
                    <button style={buttonStyle} onClick={DecrementSlow}>延迟1秒</button>
                    <input type="number" value={value} onChange={(e) => ChangeInput(e.target.value)}/>
                    <span>{caption} : {value}</span>
                </div>
            )
        }
    }
  
}
function mapState(state,ownProps){
    return{
        value:state[ownProps.caption],
    }
}
function mapDispatch(dispatch,ownProps){
    return {
        Increment:()=>{
            dispatch(increment(ownProps.caption))
        },
        Decrement:()=>{
            dispatch(decrement(ownProps.caption))
        },
        DecrementSlow:()=>{
            dispatch(decrementSlow(ownProps.caption))
        },
        ChangeInput:(value)=>{
            dispatch(changeInput(ownProps.caption,value))         
        }
    }
}

export default connect(mapState,mapDispatch)(Counter)