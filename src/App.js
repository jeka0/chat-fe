import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Auth } from "./auth/authContext";
import { Socket } from './socketContext/socketContext';
import AuthorizedRoute from './security/AuthorizedRoute';
import UnauthorizedRoute from './security/UnauthorizedRoute';
import Login from "./components/login/login.js";
import Registration from "./components/registration/registration.js";
import Home from "./components/home/home.js";
import "./style.css";

function App() {
  return (
  <Auth>
    <div className="Background">
    <AuthorizedRoute>
      <Routes>
      <Route path="/home" element={ 
        <Socket>
          <Home />
        </Socket>
      }/>
      <Route path="*" element={ <Navigate to="/home"/> }/>
      </Routes>
    </AuthorizedRoute>
    <UnauthorizedRoute>
      <Routes>
        <Route path="/login" element={ <Login />}/>
        <Route path="/registration" element={ <Registration />}/>
        <Route path="*" element={ <Navigate to="/login"/> }/>
      </Routes>
    </UnauthorizedRoute>
    </div>
  </Auth>
  );
}

export default App;
