import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Auth } from "./auth/authContext";
import AuthorizedRoute from './security/AuthorizedRoute';
import UnauthorizedRoute from './security/UnauthorizedRoute';
import Login from "./pages/login/login.js";
import Registration from "./pages/registration/registration.js";
import Home from "./pages/home/home.js";

function App() {
  return (
    <Auth>
    <AuthorizedRoute>
      <Routes>
      <Route path="/home" element={ <Home />}/>
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
  </Auth>
  );
}

export default App;
