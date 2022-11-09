import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Profil from './pages/profil/Profil';
import Register from './pages/register/Register';


const App = () => {
  
  const {user} = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route>
          <Route exact='true' path="/" element={user ? <Home /> : <Register/>} />
          <Route exact='true' path="/login" element={user ? <Navigate to="/"/>:<Login />} />
          <Route exact='true' path="/register" element={user ? <Navigate to="/"/>:<Register />} />
          <Route exact='true' path="/profil/:username" element={<Profil />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

