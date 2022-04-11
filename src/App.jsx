import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./css/app.css";

const App = () => {
  return (
    <div className="app">
      <h1>Let's build an Amazon Clone 🚀</h1>
      <Routes>
        <Route path="/checkout" element={<h2>Checkout Page</h2>} />
        <Route path="/login" element={<h2>Login Page</h2>} />
        <Route path="/home" element={<h2>Home Page</h2>} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </div>
  );
};

export default App;
