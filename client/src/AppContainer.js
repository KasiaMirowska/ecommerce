import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import App from './App';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
  });
  
  const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
  })


const AppContainer = ({ checkUserSession, currentUser }) => {
    
  return (
    <App checkUserSession = {checkUserSession} currentUser={currentUser} />
  );
}



export default connect(mapStateToProps, mapDispatchToProps)(App)

