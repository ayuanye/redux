<<<<<<< HEAD
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


=======
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
, document.getElementById('root'));
>>>>>>> origin/master


