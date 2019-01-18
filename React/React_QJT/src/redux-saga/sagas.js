import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'

function* helloSaga(){
    console.log('hello,sage!')
}
function* incrementAsync() {
    // use the call Effect
    yield call(delay, 1000)
    yield put({ type: 'redux-saga' })
}


function* watchIncrementAsync() {
    yield takeEvery('decrementSlow', incrementAsync)
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}