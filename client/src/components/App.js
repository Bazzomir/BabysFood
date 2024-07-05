import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Ruti from './routes/Ruti';
import Footer from './Footer/Footer';
import '../assets/css/app.css';
import Navbar2 from './Header/Navbar2';
// import Navbar from "./Header/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function App() {
  return (
      <BrowserRouter>
        {/* <Navbar /> */}
        <Navbar2 />
        <Ruti />
        <Footer />
      </BrowserRouter>
  );
}