import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch} from 'react-router-dom';
import HatsPage from './pages/hatspage/HatsPage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/Header/Header';
import LoginRegister from './pages/LoginRegister/LoginRegister';
import {auth} from './firebase/firebase.util';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
    }
  }
  
  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user)
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromAuth(); //making sure we sign off/expire the access
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
       
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={LoginRegister} />
        </Switch>
       </div>
    );
  }
  
}


