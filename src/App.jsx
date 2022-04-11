import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Navbar from "./components/navbar";
import Home from "./components/home";
import NotFound from "./components/common/not-found";
import "./css/app.css";

const store = configureStore();

const App = () => {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {});

    return () => {
      unsubscribe();
    };
  });

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
