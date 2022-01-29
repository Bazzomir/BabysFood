import React from "react";
import { BrowserRouter } from "react-router-dom";
import Ruti from './routes/Ruti';
import Footer from "./Footer/Footer";
import './assets/css/app.css';
import Navbar from "./Header/Navbar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Ruti />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

