import React from 'react';
import { Route, Routes } from "react-router-dom";

import shopPage from './component/pages/shop/shop.component';

import HomePage from './component/pages/homepage/homepage.component';
import './App.css';


 
function App() {
  return (
    <div >
      <Routes>
        <Route  path='/' Component={HomePage} />
        <Route  path='/shop' Component={shopPage} />
      </Routes>
    </div>
  );
}

export default App;
