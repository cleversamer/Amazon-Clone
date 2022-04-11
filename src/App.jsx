import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import "./css/app.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/checkout" element={<h1>Checkout Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/home" element={<Home />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </div>
  );
};

export default App;
