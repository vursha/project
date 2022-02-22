import React from 'react';
//import FormValidation from './FormValidation'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Card from './components/Cart';
import SignUp from './components/Login';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <div className='App'>
       <Header/>
     </div>
    <Routes>
          
          <Route path='/' element={<SignUp/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path='/card' element={<Card/>}/>
         
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
