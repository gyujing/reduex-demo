import { combineReducers } from 'redux'

// 引入为Count组件服务的reducer
import count from './count'
import personList from './person'

export default combineReducers({
  // count的值
  count,
  // peson列表
  personList
})
