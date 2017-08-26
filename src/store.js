import {createStore,combineReducers} from 'redux'

import {reducer as todoReducer} from './todos'

const reducer =combineReducers({
    todos:todoReducer
})

//1.createStore记得要设置初始值
export default createStore(reducer,{})