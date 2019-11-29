//  容器组件
 import Counter from '../components/counter'
 import {
   createIncrementAction,
   createDecrementAction,
   createIncrementAsyncAction
  } from '../redux/action_creators'

 import {connect} from 'react-redux'

// 最简写法
export default connect(
  state => ({count:state}),
  {
    increment:createIncrementAction,
    decrement:createDecrementAction,
    incrementAsync:createIncrementAsyncAction,
  }
)(Counter)

