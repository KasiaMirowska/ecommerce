import React, { useEffect, lazy, Suspense } from 'react';
import { GlobalStyle } from './global.styles';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';


const HomePage = lazy(() => import('./pages/homepage/HomePage'));
const ShopPage = lazy(() => import('./pages/shop/ShopPage'));
const LoginRegister = lazy(() => import('./pages/LoginRegister/LoginRegister'));
const CheckOut = lazy(() => import('./pages/checkOut/CheckOut'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]) //need to pass second argument- array in order to make effect invoke only once when mounting rather then every time state changes and rerenders.

  return (
    <div>
      <GlobalStyle />
      <Header />

      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />} >
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<LoginRegister />)} />
            <Route exact path='/checkout' component={CheckOut} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
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

