import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as RouterOutlet, Link, NavLink, Redirect} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import User from './components/User'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       loggedIn: false
    }
  }
  
  render (){

    return (
    
      <RouterOutlet>
        <div className='App'>

          <ul>
            <li>
              <NavLink exact={true} activeClassName='active' to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink exact={true} activeClassName='active' to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink exact={true} activeClassName='active' to='/user/Teboho'>User Teboho</NavLink>
            </li>
            <li>
              <NavLink exact={true} activeClassName='active' to='/user/Nozipho'>User Nozipho</NavLink>
            </li>
          </ul>

          <button onClick = {this.loginHandler}>Log In</button>

          <Route path='/' exact={true} render = {
            () => {
              return (<h1>Home Component</h1>)
            }
          } />

          <Route path='/about' render = {
            () => {
              return (<h1>About Component</h1>)
            }
          } />

          <Route path='/user/:username' component={User} /> 

        </div>
      </RouterOutlet>
    )


  }

      
}

export default App;
