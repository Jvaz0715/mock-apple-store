import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ShoppingBag from "./pages/ShoppingBag";

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bag" element={<ShoppingBag />} />
      </Routes>
    </Router>
  );
}

export default App;
