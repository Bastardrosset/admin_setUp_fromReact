import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Profil from './pages/profil/Profil';
import Register from './pages/register/Register';


const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route>
          <Route exact='true' path="/" element={<Home />} />
          <Route exact='true' path="/login" element={<Login />} />
          <Route exact='true' path="/register" element={<Register />} />
          <Route exact='true' path="/profil/:username" element={<Profil />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

