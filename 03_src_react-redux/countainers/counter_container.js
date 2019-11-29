//  容器组件
 
 
 import Counter from '../components/counter'
 import {createIncrementAction,createDecrementAction} from '../redux/action_creators'
 import {connect} from 'react-redux'


 //完整写法
//  function mapStateToProps(state) {
//    return {count:state}
//  }

// 简写方式
// let mapStateToProps = state => ({count:state}) 

//  完整写法
// function mapDispatchToProps(dispatch) {
  // return {
    // increment:(value)=>{dispatch(createIncrementAction(value))},
    // decrement:(value)=>{dispatch(createDecrementAction(value))},
  // }
// }

// 简写方式
// let mapDispatchToProps = dispatch => ({
  // increment:(value)=>{dispatch(createIncrementAction(value))},
  // decrement:(value)=>{dispatch(createDecrementAction(value))},
// })

// 完整写法
// export default connect(mapStateToProps,mapDispatchToProps)(Counter)


// 最简写法
export default connect(
  state => ({count:state}),
  {
    increment:createIncrementAction,
    decrement:createDecrementAction
  }
)(Counter)

// connect函数做了如下的事情
// function connect(createIncrementAction) {
//   return (value)=>dispatch(crementAction(value))
// }