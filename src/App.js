import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login />}/>
    </Routes>
  );
}

export default App;
