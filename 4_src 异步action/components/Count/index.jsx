import React, { Component } from 'react'
// 引入store，用于获取状态
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

export default class Count extends Component {

  state = { carName: "奔驰" }

  // componentDidMount() {
  //   console.log("componentDidMount")
  //   // 监测redux中的状态的变化，只要变化，就调用render
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  increment = () => {
    let { value } = this.selectNumber;
    store.dispatch(createIncrementAction(value * 1))
  }
  decrement = () => {
    let { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value * 1))
  }
  // 奇数加
  incrementIfOdd = () => {
    let count = store.getState();
    let { value } = this.selectNumber;
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1))
    }
  }
  // 异步加
  incrementAsync = () => {
    let { value } = this.selectNumber;
    store.dispatch(createIncrementAsyncAction(value * 1, 300))
  }
  render() {
    return (
      <div>
        <h2>当前求和为：{store.getState()}</h2>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;<button onClick={this.increment}>+</button>
        &nbsp;&nbsp;<button onClick={this.decrement}>-</button>
        &nbsp;&nbsp;<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        &nbsp;&nbsp;<button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
