import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch} from 'react-router-dom';
import HatsPage from './pages/hatspage/HatsPage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/Header/Header';
import LoginRegister from './pages/LoginRegister/LoginRegister';

function App() {
  return (
    <div>
      <Header />
      <Switch>
     
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={LoginRegister} />
      </Switch>
     </div>
  );
}

export default App;
