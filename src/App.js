import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Logout from './components/logout';
import auth from './services/authService';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'

console.warn = () => {}

class  App extends Component {

  state = {}

  componentDidMount() { 

   const user = auth.getCurrentUser();
   this.setState({user});
 
   }

  render(){
  return(
    <React.Fragment>
      <ToastContainer/>
      <NavBar user = {this.state.user}/>
    <main className='container'>
      <Switch>
      <Route path="/register" component={RegisterForm}></Route>
      <Route path="/login" component={LoginForm}></Route>
      <Route path="/logout" component={Logout}></Route>
      <Route path="/movies/:id" component={MovieForm}></Route>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/not-found" component={NotFound}></Route>
      <Redirect from='/' exact to='/movies'></Redirect>
      <Redirect to="not-found"></Redirect>
      </Switch>   
    </main>
    </React.Fragment>
  );
}
}

export default App;
