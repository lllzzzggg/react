import {Increment,Decrement,ChangeInput,DecrementSlow} from './Action'

export default(state,action)=>{
    const {counterCaption,value}=action
    switch (action.type){
        case Increment:
        return {...state,[counterCaption]:state[counterCaption]+1}
        case Decrement:
        return {...state,[counterCaption]:state[counterCaption]-1}
        case ChangeInput:
        return {...state,[counterCaption]:state[counterCaption] = +value}
        case 'redux-saga':
        console.log('延迟了1秒的saga')
        return state
        default:
        return state
    }
}