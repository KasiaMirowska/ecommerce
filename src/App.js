import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/Header/Header';
import LoginRegister from './pages/LoginRegister/LoginRegister';
import CheckOut from './pages/checkOut/CheckOut';
import {selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.props.checkUserSession();
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
          <Route exact path='/checkout' component={CheckOut} />
        </Switch>
      </div>
    );
  }

}
//bringing user reducer from redux
// const mapStateToProps = ({ user }) => {
//   return ({
//     currentUser: user.setCurrentUser,
//   })
// }
const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

