import {createStore} from 'redux'
import reducer from './Reducer' 
const initValue={
    'First':0,
    'Second':0,
    'Third':0
}
const store = createStore(reducer,initValue)
export default store