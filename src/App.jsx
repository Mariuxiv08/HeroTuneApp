import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Findhero from './containers/findhero';
import NavbarMenu from './components/navbar';
import FirebaseSign from './containers/signin';
import UserProfile from './containers/profile';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavbarMenu />
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/findhero' component={Findhero}/>
          <Route path='/signin' component={FirebaseSign}/>
          <Route path='/profile' component={UserProfile}/>
        </div>
      </Router>
    );
  }
}

export default App;
