// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux'
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
import reducer from './reducers'

// 暴露store ，applyMiddleware：异步action
// export default createStore(allReducer, composeWithDevTools()) //没有第二参数
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
