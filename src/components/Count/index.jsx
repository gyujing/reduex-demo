import React, { Component } from 'react'

export default class Count extends Component {
  state = { count: 0 }
  increment = () => {
    let { count } = this.state;
    let { value } = this.selectNumber;
    this.setState({ count: count + value*1 })
  }
  decrement = () => {
    let { count } = this.state;
    let { value } = this.selectNumber;
    this.setState({ count: count -  parseInt(value)  })
  }
  // 奇数加
  incrementIfOdd = () => {
    let { count } = this.state;
    let { value } = this.selectNumber;
    if (count % 2 !== 0) {
      this.setState({ count: count +  parseInt(value)  })
    }
  }
  // 异步加
  incrementAsync = () => {
    let { count } = this.state;
    let { value } = this.selectNumber;
    setTimeout(()=>{
      this.setState({ count: count +  parseInt(value)  })
    },500)
  }
  render() {
    return (
      <div>
        <div>当前求和为：{this.state.count}</div>
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
