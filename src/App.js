import React,{Component} from 'react'
<<<<<<< HEAD
import CounterContainer from './containers/counter_container'


export default class App extends Component {
   render(){
    return (
      <CounterContainer/>
=======
import {Route,Switch} from 'react-router-dom'
import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin'

export default class App extends Component{
  render(){
    return (
      <div className="app">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/admin" component={Admin}/>
        </Switch>
      </div>
>>>>>>> origin/master
    )
  }
}


