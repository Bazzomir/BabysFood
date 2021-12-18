import React from "react";
import { BrowserRouter } from "react-router-dom";
import Ruti from './routes/Ruti';
import Footer from "./Footer/Footer";
import './assets/css/app.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Ruti />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

