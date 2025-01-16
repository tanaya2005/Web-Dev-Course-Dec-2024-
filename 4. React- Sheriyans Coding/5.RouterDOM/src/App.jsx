import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Enquire from './pages/Enquire';  
import Signup from './pages/Signup';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/enquire' element={<Enquire />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;