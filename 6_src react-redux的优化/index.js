import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'))

// // 监测redux中状态的改变
// store.subscribe(() => {
//   ReactDOM.render(<App />, document.getElementById('root'))
// })
