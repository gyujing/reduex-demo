/*
  1、该文件是用于创建一个为Count组件服务的reducer，reducer本质是一个函数
  2、reducer函数会接到两个参数，分别为：之前的状态(preState),动作对象（action)
*/
import { INCREMENT, DECREMENT } from '../contant'

const initState = 0; //初始化状态
export default function countReducer(preState = initState, action) {
  // console.log(preState, action)
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      // console.log("@",preState + data)
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState
  }
}