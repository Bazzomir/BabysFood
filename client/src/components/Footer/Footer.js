import React from 'react';
import footerLogo from '../../assets/footerLogo.png';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-3 d-flex align-items-center justify-content-start">
                        <a className="navbar-brand" href="/">
                            <img src={footerLogo} alt="" width="150" height="70" />
                        </a>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
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
                    <div className="col-3 d-flex align-items-center justify-content-end">
                        <p>Baby's Food Place <br/> copyright &copy; 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
