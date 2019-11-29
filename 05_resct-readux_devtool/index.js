import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import {Provider} from 'react-redux'  //provider供应商
import App from './App'


ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>
, document.getElementById('root'))




