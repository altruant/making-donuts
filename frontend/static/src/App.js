import React from 'react'
import RecipeInfo from './components/RecipeInfo'
import Home from './components/Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
        } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Cookies from 'js-cookie';

class App extends React.Component {

  // async handleSubmit(event, info) {
  //   event.preventdefault();
  //   const response = await fetch('/recipes/create', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // 'X-CSRFToken': Cookies.get('csrftoken'),
  //     },
  //     body: JSON.stringify(info)
  //   });
  //
  //   const data = await response.json();
  // }
  render() {
    let loggedIn
    if(Cookies.get('Authorization')) {
      loggedIn = (
        <NavItem>
          <button>Sign Out</button>
        </NavItem>
      )
    } else {
      loggedIn = (
        <Nav className='ml-auto'>
          <Link to='/login-form'>
            <NavItem className='mr-2'>Login</NavItem>
          </Link>
          <Link to='/registration-form'>
            <NavItem>Register</NavItem>
          </Link>
        </Nav>
      )
    }

    return (
      <Router>
        <React.Fragment>
          <Navbar>
            <Navbar.Brand>
              <Link className='mr-2' to='/'>Home</Link>
            </Navbar.Brand>
            <Link to='/recipes/create'>
              <NavItem>Create Recipe</NavItem>
            </Link>
            {loggedIn}
          </Navbar>
          <Switch>
            <Route path='/login-form'>

            </Route>
            <Route path='/registration-form'>

            </Route>
            <Route path='/recipes/create'>
              <RecipeInfo />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
