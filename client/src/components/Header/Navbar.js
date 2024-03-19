import React, { useEffect, useState } from 'react';
import logoNav from '../../assets/logo/logo-nav.png';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const token = localStorage.getItem("token");

    const logOut = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.reload();
    }

    const [scrollClass, setScrollClass] = useState('py-3');

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 10;
            if (window.scrollY > scrollThreshold && scrollClass === 'py-3') {
                setScrollClass('py-1');
            } else if (window.scrollY <= scrollThreshold && scrollClass === 'py-1') {
                setScrollClass('py-3');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollClass]);

    return (
        <nav className="header">
            <div className={`container ${scrollClass}`}>
                <div className="row">
                    <div className="col-3 d-flex align-items-center justify-content-start">
                        <a href="/">
                            <img src={logoNav} alt="" width="130" height="50" />
                        </a>
                    </div>
                    <div className="col-5 d-flex align-items-center justify-content-center">
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink exact to="/breakfast" activeClassName="active" className="nav-link">BREAKFAST</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/brunch" activeClassName="active" className="nav-link">BRUNCH</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/lunch" activeClassName="active" className="nav-link">LUNCH</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/dinner" activeClassName="active" className="nav-link">DINNER</NavLink>
                            </li>
                        </ul>
                    </div>

                    {!token ?
                        <div className="col-4 d-flex align-items-center justify-content-end gap-3">
                            <NavLink to="/login">
                                <button type="button" className="btn btn-outline-secondary">LOG IN</button>
                            </NavLink>
                            <span className="orangeText">or</span>
                            <NavLink to="/register">
                                <button type="button" className="btn btn-success">CREATE ACCOUNT</button>
                            </NavLink>
                        </div>
                        :
                        <div className="col-4 d-flex align-items-center justify-content-end">
                            <ul className="nav">
                                <li className="nav-button">
                                    <NavLink to="/myrecipes">
                                        <button type="button" className="btn" style={{ fontWeight: 'bold', color: '#008000', textDecoration: 'underline' }}>MY RECIPES</button>
                                    </NavLink>
                                </li>
                                <li className="nav-button">
                                    <NavLink to="/myprofile">
                                        <button type="button" className="btn" style={{ fontWeight: 'bold', color: '#f3b254', textDecoration: 'underline' }}>MY PROFILE</button>
                                    </NavLink>
                                </li>
                                <li className="nav-button">
                                    <NavLink to="/" onClick={logOut}>
                                        <button type="button" className="btn" style={{ fontWeight: 'bold', color: '#696969', textDecoration: 'underline' }}>LOG OUT</button>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}
