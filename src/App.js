import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/Header/Header';
import LoginRegister from './pages/LoginRegister/LoginRegister';
import {auth, createUserProfileDocument} from './firebase/firebase.util';

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => { //calling for a snapshot of user object being created or that already is inside the db. This method allows us to check and get properties of user object with .data()method
          this.props.setCurrentUser({
              id: snapshot.id,
              name: snapshot.displayName,
              email: snapshot.email,
              ...snapshot.data()
          })
        }) 
      } 
        this.props.setCurrentUser(userAuth) //when user is signed out it return null so we need to update the state/redux to rerender
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromAuth(); //making sure we sign off/expire the access
  }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
       
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<LoginRegister />)} />
        </Switch>
       </div>
    );
  }
  
}
//bringing user reducer from redux
const mapStateToPops = ({user}) => ({
  setCurrentUser: user.setCurrentUser,
})

const mapDispatchToPops = dispatch => ({
  //dispatch is a mwthod that takes whatever argument passed and makes it available to every reducer, here a user object being set though userAuth
  setCurrentUser: user=>dispatch(setCurrentUser(user))
})


//we put null becasue app.js does not need/take anything from root-reducer;
export default connect(
  mapStateToPops, 
  mapDispatchToPops)(App)

