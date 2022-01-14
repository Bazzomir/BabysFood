import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function NavbarAfterLogin() {
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
                    <Link to="/myrecipes">
                        <button type="button" className="btn btn-outline-group">MY RECIPES</button>
                    </Link>
                    <Link to="/myprofile">
                        <button type="button" className="btn btn-outline-group">MY PROFILE</button>
                    </Link>
                    <Link to="/logout">
                        <button type="button" className="btn btn-outline-group">LOG OUT</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}
