import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="" width="150" height="70" />
                    </a>
                </div>
                <div className="col-5">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/breakfast">BREAKFAST</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/brunch">BRUNCH</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/lunch">LUNCH</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dinner">DINNER</a>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <Link to="/login">
                        <button type="button" className="btn btn-outline-secondary">LOG IN</button>
                    </Link>
                    <span id="colorText">or</span>
                    <Link to="/register">
                        <button type="button" className="btn btn-success">CREATE ACCOUNT</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}
