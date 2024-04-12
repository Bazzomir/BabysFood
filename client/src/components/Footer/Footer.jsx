import React from 'react';
import logoFooter from '../../assets/logo/logo-footer.png';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-3 d-flex align-items-center justify-content-start">
                        <a className="navbar-brand" href="/home">
                            <img src={logoFooter} alt="Footer Logo" />
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
                        <p className="m-0">Baby's Food Place<br />Blagoj jovanovski Bazzomir <br />copyright &copy; 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
