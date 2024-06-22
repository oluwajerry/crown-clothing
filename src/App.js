import React from 'react';
import { Route, Routes } from "react-router-dom";

import HomePage from './component/pages/homepage/homepage.component';
import './App.css';



const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
 
function App() {
  return (
    <div >
      <Routes>
        <Route  path='/' Component={HomePage} />
        <Route  path='/shop/hats' Component={HatsPage} />
      </Routes>
    </div>
  );
}

export default App;
