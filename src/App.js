import React from 'react';
import { Route, Routes } from "react-router-dom";

import shopPage from './component/pages/shop/shop.component';

import HomePage from './component/pages/homepage/homepage.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './component/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from "./firebase/firebase.utils";
import './App.css';


 
class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

unsubscribeFromAuth = null;
  
componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {this.setState({currentUser: user})


  console.log(user);});

 
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    return (
      <div >
        <Header currentUser = {this.state.currentUser}/>
        <Routes>
          <Route  path='/' Component={HomePage} />
          <Route  path='/shop' Component={shopPage} />
          <Route  path='/signin' Component={SignInAndSignUpPage} />
        </Routes>
      </div>
    );
  }
  
}

export default App;
