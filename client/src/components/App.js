import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import Ruti from './routes/Ruti';
import Footer from "./Footer/Footer";
import store from '../redux/store';
import './assets/css/app.css';

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Ruti />
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

