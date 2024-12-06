// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, combineReducers } from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'


// redux存的总状态为一个对象
const allReducer = combineReducers({
  // count的值
  count: countReducer,
  // peson列表
  personList: personReducer,
})

// 暴露store ，applyMiddleware：异步action
export default createStore(allReducer, applyMiddleware(thunk))
