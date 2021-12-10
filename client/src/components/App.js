import React from "react";
import { BrowserRouter } from "react-router-dom";
import Ruti from './routes/Ruti';
import Navbar from './Header/Navbar';
import Footer from "./Footer/Footer";
import './assets/css/app.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Ruti />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

