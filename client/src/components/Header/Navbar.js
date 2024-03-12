import { React, useEffect, useState } from 'react';
import logo from '../../assets/logo/NavLogo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {

    const token = localStorage.getItem("token");

    const logOut = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.reload();
    }

    const [scrollClass, setScrollClass] = useState({ pt: 'py-3' });

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 10;
            if (window.scrollY > scrollThreshold && scrollClass.pt === 'py-3') {
                setScrollClass({ pt: 'py-1' });
            } else if (window.scrollY <= scrollThreshold && scrollClass.pt === 'py-1') {
                setScrollClass({ pt: 'py-3' });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollClass]);

    return (
        <div className="header">
            <div className={`container ${scrollClass.pt} ${scrollClass.pb}`}>
                <div className="row">
                    <div className="col-3 d-flex align-items-center justify-content-start">
                        <a href="/">
                            <img src={logo} alt="" width="130" height="50" />
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

                    {!token ?
                        <div className="col-3 d-flex align-items-center justify-content-end">
                            <Link to="/login">
                                <button type="button" className="btn btn-outline-secondary">LOG IN</button>
                            </Link>
                            <span id="colorText">or</span>
                            <Link to="/register">
                                <button type="button" className="btn btn-success">CREATE ACCOUNT</button>
                            </Link>
                        </div>
                        :
                        <div className="col-4">
                            <ul className="nav" id="header">
                                <li className="nav-button">
                                    <Link to="/myrecipes">
                                        <button type="button" className="btn text-success" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>MY RECIPES</button>
                                    </Link>
                                </li>
                                <li className="nav-button">
                                    <Link to="/myprofile">
                                        <button type="button" className="btn" style={{ fontWeight: 'bold', color: 'orange', textDecoration: 'underline' }}>MY PROFILE</button>
                                    </Link>
                                </li>
                                <li className="nav-button">
                                    <Link to="/">
                                        <button type="button" className="btn" onClick={logOut} style={{ fontWeight: 'bold', color: 'gray', textDecoration: 'underline' }}>LOG OUT</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>}
                </div>
            </div>
        </div>
    )
}
