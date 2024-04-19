import React, { useEffect, useState } from 'react';
import logoNav from '../../assets/logo/logo-nav.png';
import { NavLink } from 'react-router-dom';
import ariaLabelText from '../component/ariaLabelText';
import {NavigationButton} from '../component/Buttons';

const Navbar = () => {
    const token = localStorage.getItem("token");

    const logOut = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.reload();
    }

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThresholdRem = 0.625;
            if (window.scrollY > scrollThresholdRem && !isScrolled) {
                setIsScrolled(true);
            } else if (window.scrollY <= scrollThresholdRem && isScrolled) {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolled]);

    const scrollClass = isScrolled ? 'py-0' : 'py-3';

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${scrollClass}`}>
            <div className="container px-0">
                <a className="navbar-brand me-lg-7 me-sm-0" href="/home">
                    <img src={logoNav} alt="Header Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 m-lg-0 w-100 justify-content-between align-items-lg-center">
                        <ul className="row m-0 p-0 ms-xl-5 ms-lg-0 row-cols-ms-3 row-cols-xl-5">
                            <li className="nav-item col">
                                <NavLink to="/breakfast" activeClassName="active" className="nav-link" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel2}>BREAKFAST</NavLink>
                            </li>
                            <li className="nav-item col">
                                <NavLink to="/brunch" activeClassName="active" className="nav-link" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel3}>BRUNCH</NavLink>
                            </li>
                            <li className="nav-item col">
                                <NavLink to="/lunch" activeClassName="active" className="nav-link" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel4}>LUNCH</NavLink>
                            </li>
                            <li className="nav-item col">
                                <NavLink to="/dinner" activeclassname="active" className="nav-link" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel4}>DINNER</NavLink>
                            </li>
                        </ul>
                        <ul className="row m-0 p-0 gap-4">
                            {!token ?
                                <div className="nav-item col d-flex align-items-center px-auto mx-auto gap-4">
                                    {/* <NavLink to="/login" aria-label={ariaLabelText.loginAriaLabel.logInBtnAriaLabel}>
                                        <button type="button" className="btn btn-grey">LOG IN</button>
                                    </NavLink> */}
                                    <NavigationButton to="/login" aria-label="loginAriaLabel.logInBtnAriaLabel" buttonName="Log In" className="btn-gray" />
                                    <span className="orangeText">or</span>
                                    {/* <NavLink to="/register" aria-label={ariaLabelText.createAccAriaLabel.createAccBtnAriaLabel}>
                                        <button type="button" className="btn btn-green">CREATE ACCOUNT</button>
                                    </NavLink> */}
                                    <NavigationButton to="/register" aria-label="createAccAriaLabel.createAccBtnAriaLabel" buttonName="Create Account" className="btn-green" />
                                </div>
                                :
                                <>
                                    <li className="nav-item col px-auto mx-auto">
                                        {/* <NavLink to="/myrecipes" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel5}>
                                            <button type="button" className="btn px-0" style={{ fontWeight: 'bold', color: '#008000', width: '88px', textDecoration: 'underline' }}>MY RECIPES</button>
                                        </NavLink> */}
                                        <NavigationButton to="/myrecipes" aria-label="navAriaLabel.navLinkAriaLabel5" buttonName="My Recipes" style="fontWeight: bold; color: #008000; textDecoration: underline" />
                                    </li>
                                    <li className="nav-item col px-auto mx-auto">
                                        {/* <NavLink to="/myprofile" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel6}>
                                            <button type="button" className="btn px-0" style={{ fontWeight: 'bold', color: '#f96400', width: '88px', textDecoration: 'underline' }}>MY PROFILE</button>
                                        </NavLink> */}
                                        <NavigationButton to="/myprofile" aria-label="navAriaLabel.navLinkAriaLabel6" buttonName="My Profile" style="fontWeight: bold; color: #f96400; textDecoration: underline" />
                                    </li>
                                    <li className="nav-item col px-auto mx-auto">
                                        {/* <NavLink to="/" onClick={logOut} aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel7}>
                                            <button type="button" className="btn px-0" style={{ fontWeight: 'bold', color: '#696969', width: '70px', textDecoration: 'underline' }}>LOG OUT</button>
                                        </NavLink> */}
                                        <NavigationButton to="/myprofile" onClick={logOut} aria-label="navAriaLabel.navLinkAriaLabel7" buttonName="Log Out" style="fontWeight: bold; color: #696969; textDecoration: underline" />
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
