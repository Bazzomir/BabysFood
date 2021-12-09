import React from 'react';
import logo from '../assets/logo.png';


export function Footer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="" width="150" height="70" />
                    </a>
                </div>
                <div className="col">
                    <ul className="nav justify-content-center">
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
                <p className="col-2">Baby's Food Place copyright &copy; 2021</p>
            </div>
        </div>
    )
}
