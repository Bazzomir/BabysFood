import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Navbar  from './Header/Navbar';
import { Footer } from "./Footer/Footer";
import  Home  from './pages/Home';
import  Breakfast  from "./pages/Breakfast";
import  Brunch  from "./pages/Brunch";
import  Lunch  from "./pages/Lunch";
import  Dinner from "./pages/Dinner";
import  Login  from "./pages/Login";
import  Register from "./pages/Register";

import './assets/css/app.css';

export default function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/brunch" element={<Brunch />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

