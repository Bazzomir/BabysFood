import React, { useEffect, useState } from 'react';
import logoNav from '../../assets/logo/logo-nav.png';
import { NavigationButton, NavigationImage, NavigationLInk } from '../component/Buttons';
import ariaLabelText from '../component/ariaLabelText';

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
                {/* <a className="navbar-brand" href="/home" aria-label={ariaLabelText.navAriaLabel.navIconAriaLabel}>
                    <img src={logoNav} alt="Header Logo" />
                </a> */}
                <NavigationImage to="/home" className="navbar-brand" ariaLabel={ariaLabelText.navAriaLabel.navIconAriaLabel} src={logoNav} alt="Header Logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 m-lg-0 w-100 justify-content-between align-items-lg-center">
                        <ul className="row m-0 p-0 mx-auto row-cols-ms-3 row-cols-xl-5">
                            {/* <li className="nav-item col">
                                <NavLink to="/breakfast" activeClassName="active" className="nav-link" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel2}>BREAKFAST</NavLink>
                            </li> */}
                            <NavigationLInk to="/breakfast" linkName="Breakfast" ariaLabel={ariaLabelText.navAriaLabel.navLinkAriaLabel1} className={(navData) => (navData.isActive ? "active-style" : 'none')} />
                            {/* <li className="nav-item col">
                                <NavLink to="/brunch" activeClassName="active" className="nav-link" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel3}>BRUNCH</NavLink>
                            </li> */}
                            <NavigationLInk to="/brunch" linkName="Brunch" ariaLabel={ariaLabelText.navAriaLabel.navLinkAriaLabel2} className={(navData) => (navData.isActive ? "active-style" : 'none')} />
                            {/* <li className="nav-item col">
                                <NavLink to="/lunch" activeClassName="active" className="nav-link" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel4}>LUNCH</NavLink> 
                            </li> */}
                            <NavigationLInk to="/lunch" linkName="Lunch" ariaLabel={ariaLabelText.navAriaLabel.navLinkAriaLabel3} className={(navData) => (navData.isActive ? "active-style" : 'none')} />
                            {/* <li className="nav-item col">
                                <NavLink to="/dinner" activeclassname="active" className="nav-link" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel4}>DINNER</NavLink>
                            </li> */}
                            <NavigationLInk to="/dinner" linkName="Dinner" ariaLabel={ariaLabelText.navAriaLabel.navLinkAriaLabel4} className={(navData) => (navData.isActive ? "active-style" : 'none')} />
                        </ul>
                        <ul className="row m-0 p-0">
                            {!token ?
                                <div className="nav-item col d-flex align-items-center justify-content-center px-0 mx-auto gap-4">
                                    {/* <NavLink to="/login" aria-label={ariaLabelText.loginAriaLabel.logInBtnAriaLabel}>
                                        <button type="button" className="btn btn-grey">LOG IN</button>
                                    </NavLink> */}
                                    <NavigationButton to="/login" ariaLabel={ariaLabelText.loginAriaLabel.logInBtnAriaLabel} buttonName="Log In" className="btn-grey" />
                                    <span className="orangeText">or</span>
                                    {/* <NavLink to="/register" aria-label={ariaLabelText.createAccAriaLabel.createAccBtnAriaLabel}>
                                        <button type="button" className="btn btn-green">CREATE ACCOUNT</button>
                                    </NavLink> */}
                                    <NavigationButton to="/register" ariaLabel={ariaLabelText.createAccAriaLabel.createAccBtnAriaLabel} buttonName="Create Account" className="btn-green" />
                                </div>
                                :
                                <div className="nav-item col d-flex align-items-center justify-content-center px-0 mx-auto gap-4">
                                    <li className="nav-item col-4 px-auto mx-auto w-auto">
                                        {/* <NavLink to="/myrecipes" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel5}>
                                            <button type="button" className="btn px-0" style={{ fontWeight: 'bold', color: '#008000', width: '88px', textDecoration: 'underline' }}>MY RECIPES</button>
                                        </NavLink> */}
                                        <NavigationButton to="/myrecipes" ariaLabel={ariaLabelText.navAriaLabel.navLinkAriaLabel5} buttonName="My Recipes" style={{color: "#008000", textDecoration: "underline"}} />
                                    </li>
                                    <li className="nav-item col-4 px-auto mx-auto w-auto">
                                        {/* <NavLink to="/myprofile" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel6}>
                                            <button type="button" className="btn px-0" style={{ fontWeight: 'bold', color: '#f96400', width: '88px', textDecoration: 'underline' }}>MY PROFILE</button>
                                        </NavLink> */}
                                        <NavigationButton to="/myprofile" ariaLabel={ariaLabelText.navAriaLabel.navLinkAriaLabel6} buttonName="My Profile" style={{color: "#f96400", textDecoration: "underline"}} />
                                    </li>
                                    <li className="nav-item col-4 px-auto mx-auto w-auto">
                                        {/* <NavLink to="/" onClick={logOut} aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel7}>
                                            <button type="button" className="btn px-0" style={{ fontWeight: 'bold', color: '#696969', width: '70px', textDecoration: 'underline' }}>LOG OUT</button>
                                        </NavLink> */}
                                        <NavigationButton to="/myprofile" onClick={logOut} ariaLabel={ariaLabelText.navAriaLabel.navLinkAriaLabel7} buttonName="Log Out" style={{color: "#696969", textDecoration: "underline"}} />
                                    </li>
                                </div>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
