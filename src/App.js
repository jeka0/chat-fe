import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Auth } from "./auth/authContext";
import AuthorizedRoute from './security/AuthorizedRoute';
import UnauthorizedRoute from './security/UnauthorizedRoute';
import Login from "./pages/login/login.js";

function App() {
  return (
    <Auth>
    <AuthorizedRoute>
      <Routes>
      <Route path="/" element={ <div>login</div>}/>
      </Routes>
    </AuthorizedRoute>
    <UnauthorizedRoute>
      <Routes>
        <Route path="/" element={ <Login />}/>
      </Routes>
    </UnauthorizedRoute>
  </Auth>
  );
}

export default App;
