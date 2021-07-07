import './App.css';
import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
//import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
import Main from './components/main';
import Login from './components/login';
import Signup from './components/signup';
import Reset from './components/reset';
import notfound from './components/notfound';
import viewslots from './components/viewslots'
import bookslot from './components/bookslot';
import viewbooking from './components/viewbooking'
class App extends Component{
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/reset" component={Reset}></Route>
          <Route exact path="/main" component={Main}></Route>
          <Route exact path="/viewslots" component={viewslots}></Route>
          <Route exact path="/bookslot" component={bookslot}></Route>
          <Route exact path="/viewbooking" component={viewbooking}></Route>
          <Route component={notfound}></Route>
          <Redirect to="/404"></Redirect>
        </Switch>
      </Router>
    )
  }
}

export default App;
