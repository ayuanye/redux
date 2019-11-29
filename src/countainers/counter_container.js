//  容器组件
import Counter from '../components/counter'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../redux/actions/counter_action'

import {connect} from 'react-redux'

//简写方式
export default connect(
  state => ({count:state.count,person:state.person}),
  {
    increment:createIncrementAction,
    decrement:createDecrementAction,
    incrementAsync:createIncrementAsyncAction
  }
)(Counter)

