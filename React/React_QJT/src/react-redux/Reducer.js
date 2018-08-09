import {Increment,Decrement,ChangeInput} from './Action'

export default(state,action)=>{
    const {counterCaption,value}=action
    switch (action.type){
        case Increment:
        return {...state,[counterCaption]:state[counterCaption]+1}
        case Decrement:
        return {...state,[counterCaption]:state[counterCaption]-1}
        case ChangeInput:
        return {...state,[counterCaption]:state[counterCaption] = +value}
        default:
        return state
    }
}