import React, { Component } from 'react'
import Count from './containers/Count'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给container组件传递store */}
        <Count />
      </div>
    )
  }
}
