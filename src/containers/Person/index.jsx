import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  addPerson
} from '../../redux/actions/person'

class Person extends Component {


  addPerson = () => {
    let name = this.name.value;
    let age = this.age.value;
    this.props.addPerson({ id: this.props.personNum + 1, name, age });
    this.name.value = ""
    this.age.value = ""
  }

  render() {
    console.log("personComp", this.props)
    return (
      <div>
        <h3>上方Count组件求和：{this.props.countNum}</h3>
        <h3>总人数</h3>
        <div>用户名：<input ref={c => this.name = c}></input></div>
        <div>年龄：<input ref={c => this.age = c}></input></div>
        <button onClick={this.addPerson}>添加人员信息</button>
        <ul>
          {this.props.personList.map(v=><li key={v.id}>{v.name}:{v.age}</li>)}

        </ul>
      </div>

    )
  }
}



export default connect(
  state => ({
    personList: state.personList,
    personNum: state.personList.length,
    countNum: state.count
  }),

  //mapDispatchToProps的简写
  {
    addPerson
  }
)(Person)
