import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../redux-saga/sagas'
import reducer from './Reducer' 

const middleware = createSagaMiddleware(rootSaga)
const middlewareApply = applyMiddleware(middleware)
const initValue={
    'First':0,
    'Second':0,
    'Third':0
}
const store = createStore(
    reducer,
    initValue,
    applyMiddleware(middleware)
)
middleware.run(rootSaga)
export default store