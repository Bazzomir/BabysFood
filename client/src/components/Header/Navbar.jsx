import React, { useEffect, useState } from 'react';
import logoNav from '../../assets/logo/logo-nav.png';
import { NavLink } from 'react-router-dom';
import ariaLabelText from '../component/ariaLabelText';
import NavigationButton from '../component/Buttons';

export default function Navbar() {
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

    const scrollClass = isScrolled ? 'py-1' : 'py-3';


    return (
        <nav>
            <div className={`container ${scrollClass} px-0`}>
                <div className="row">
                    <div className="col-3 d-flex align-items-center justify-content-start">
                        <a className="navbar-brand" href="/home" aria-label={ariaLabelText.navAriaLabel.navIconAriaLabel}>
                            <img src={logoNav} alt="Header Logo" />
                        </a>
                    </div>
                    <div className="col-5 d-flex align-items-center justify-content-center">
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink to="/breakfast" activeclassname="active" className="nav-link" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel1}>BREAKFAST</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/brunch" activeclassname="active" className="nav-link" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel2}>BRUNCH</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/lunch" activeclassname="active" className="nav-link" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel3}>LUNCH</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/dinner" activeclassname="active" className="nav-link" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel4}>DINNER</NavLink>
                            </li>
                        </ul>
                    </div>

                    {!token ?
                        <div className="col-4 d-flex align-items-center justify-content-end gap-3">
                            {/* <NavLink to="/login" aria-label={ariaLabelText.loginAriaLabel.logInBtnAriaLabel}>
                                <button type="button" className="btn btn-grey">LOG IN</button>
                            </NavLink> */}
                            <NavigationButton to="/login" aria-label={ariaLabelText.loginAriaLabel.logInBtnAriaLabel} buttonName="Log In" className="btn btn-gray" type="button" style="textTransform: uppercase" />
                            <span className="orangeText">or</span>
                            {/* <NavLink to="/register" aria-label={ariaLabelText.createAccAriaLabel.createAccBtnAriaLabel}>
                                <button type="button" className="btn btn-green">CREATE ACCOUNT</button>
                            </NavLink> */}
                            <NavigationButton to="/register" aria-label={ariaLabelText.createAccAriaLabel.createAccBtnAriaLabel} buttonName="Create Account" className="btn btn-green" type="button" style="textTransform: uppercase" />
                        </div>
                        :
                        <div className="col-4 d-flex align-items-center justify-content-end">
                            <ul className="nav">
                                <li className="nav-button">
                                    {/* <NavLink to="/myrecipes" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel5}>
                                        <button type="button" className="btn" style={{ fontWeight: 'bold', color: '#008000', textDecoration: 'underline' }}>MY RECIPES</button>
                                    </NavLink> */}
                                    <NavigationButton to="/myrecipes" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel5} buttonName="My Recipes" className="btn" type="button"style="textTransform: uppercase; fontWeight: bold; color: #008000; textDecoration: underline" />
                                </li>
                                <li className="nav-button">
                                    {/* <NavLink to="/myprofile" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel6}>
                                        <button type="button" className="btn" style={{ fontWeight: 'bold', color: '#f96400', textDecoration: 'underline' }}>MY PROFILE</button>
                                    </NavLink> */}
                                    <NavigationButton to="/myprofile" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel6} buttonName="My Profile" className="btn" type="button" style="textTransform: uppercase; fontWeight: bold; color: #f96400; textDecoration: underline" />
                                </li>
                                <li className="nav-button">
                                    {/* <NavLink to="/" onClick={logOut} aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel7}>
                                        <button type="button" className="btn" style={{ fontWeight: 'bold', color: '#696969', textDecoration: 'underline' }}>LOG OUT</button>
                                    </NavLink> */}
                                    <NavigationButton to="/myprofile" onClick={logOut} aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel7} buttonName="Log Out" className="btn" type="button" style="textTransform: uppercase; fontWeight: bold; color: #696969; textDecoration: underline" />
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}
