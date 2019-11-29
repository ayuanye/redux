import couterReducer from './counter_reducer'
import personReducer from './person_reducer'
import {combineReducers} from 'redux'


/* store中保存了所有组建的状态，是一个一般对象，列入下面的格式

{
  key1:xxxx,
  key2:yyyy,
  key3:zzzz
}
*/

// combineReducers方法，接受一个对象作为参数
// 对象中的key就是store中保存该状态的key 
// 对象中的value就是store中保存该状态的value
export default combineReducers({
  count:couterReducer,
  person:personReducer
})

// store中保存的state,如下：
/*{
  count:0,
  person:[],
} */
