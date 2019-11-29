import {DECREMENT,INCREMENT} from './action_types'

//创建increment的action
export const createIncrementAction = value=>({type:INCREMENT,data:value})

export const createDecrementAction = value=>({type:DECREMENT,data:value})
export const createDecrementAsyncAction = (value,delay)=>{
  // setTimeout(() => {
  //   return {type:INCREMENT,data:value}
  // }, delay);

  return (dispatch) =>{
    setTimeout(() => {
      dispatch(createIncrementAction(value))
    }, delay);
    
  }
}