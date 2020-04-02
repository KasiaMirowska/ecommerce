import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch} from 'react-router-dom';
import HatsPage from './pages/hatspage/HatsPage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/Header/Header';
import LoginRegister from './pages/LoginRegister/LoginRegister';
import {auth, createUserProfileDocument} from './firebase/firebase.util';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
    }
  }
  
  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => { //calling for a snapshot of user object being created or that already is inside the db. This method allows us to check and get properties of user object with .data()method
          this.setState({
            currentUser: {
              id: snapshot.id,
              name: snapshot.data().displayName,
              email: snapshot.data().email,
              ...snapshot.data()
            }
          })
        }) 
      } else {
        this.setState({ currentUser: userAuth}) //when user is signed out it return null so we need to update the state
      }
     
      
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromAuth(); //making sure we sign off/expire the access
  }
  
  render() {
    console.log(this.state, "STATE", 'STATE?????????????')
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


