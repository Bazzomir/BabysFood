import React from 'react';
import footerLogo from '../assets/footerLogo.png';

export default function Footer() {
    return (
        <div id="footer" className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <a className="navbar-brand" href="/">
                            <img src={footerLogo} alt="" width="150" height="70" />
                        </a>
                    </div>
                    <div className="col-7">
                        <ul className="nav justify-content-left mt-3">
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
                    <div className="col-2">
                        <p>Baby's Food Place copyright &copy; 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
