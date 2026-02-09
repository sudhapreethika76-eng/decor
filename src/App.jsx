import React from 'react';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';

import About from './components/About';

import Contact from './components/Contact';





import { HashRouter,Routes,Route } from 'react-router-dom';

function App() {


  return (
    <>
      
       <HashRouter> <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        
        
        
        </Routes></HashRouter>
    </>
  );
}

export default App;
