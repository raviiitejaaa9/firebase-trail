import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import { auth } from './firebase';
// import app from './firebase';
import Register from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path = "/Register" element = {<Register/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/" element = {<Home/>} />
      </Routes>
    </Router>
  )
}

export default App;
