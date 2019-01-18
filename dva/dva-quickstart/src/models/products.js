import { delay } from 'redux-saga'

export default {
    namespace: 'products',
    state: [],
    reducers: {
      delete(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
    },
    effects:{
      *deleteAfter1Second ({ payload: id },{ call, put }) {
        console.log('effect')
        yield call(delay, 1000);
        yield put({ 
          type: 'delete', 
          payload: id 
        });
        
      },
    }
  };