import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/actions/count'

class Count extends Component {

  state = { carName: "奔驰" }

  increment = () => {
    let { value } = this.selectNumber;
    this.props.jia(value * 1)
  }
  decrement = () => {
    let { value } = this.selectNumber;
    this.props.jian(value * 1)
  }
  // 奇数加
  incrementIfOdd = () => {
    let count = this.props.countNum;
    let { value } = this.selectNumber;
    if (count % 2 !== 0) {
      this.props.jia(value * 1)
    }
  }
  // 异步加
  incrementAsync = () => {
    let { value } = this.selectNumber;
    this.props.jiaAsync(value * 1, 500)
  }
  render() {
    console.log("countComp",this.props)
    return (
      <div>
        <h2>当前求和为：{this.props.countNum}</h2>
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


export default connect(
  state => ({ 
    countNum: state.count 
  }),

  //mapDispatchToProps的简写
	{
		jia:createIncrementAction,
		jian:createDecrementAction,
		jiaAsync:createIncrementAsyncAction,
	}
)(Count)
