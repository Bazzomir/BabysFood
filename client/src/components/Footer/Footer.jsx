import React from 'react';
import logoFooter from '../../assets/logo/logo-footer.png';
import ariaLabelText from '../component/ariaLabelText';
import { NavigationLink, NavigationImage } from '../component/Buttons';

export default function Footer() {
    return (
        <footer>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-sm-6 col-md-3 d-flex align-items-center justify-content-center justify-content-md-start">
                        {/* <a className="navbar-brand" href="/home" aria-label={ariaLabelText.navAriaLabel.navIconAriaLabel}>
                            <img src={logoFooter} alt="Footer Logo" />
                        </a> */}
                        <NavigationImage to="/home" className="navbar-brand" ariaLabel={ariaLabelText.navAriaLabel.navIconAriaLabel} src={logoFooter} alt="Footer Logo" />
                    </div>
                    <div className="col-sm-6 col-md-6 d-flex py-4 py-md-0 align-items-center justify-content-center text-center text-md-start">
                        <ul className="nav flex-column flex-lg-row">
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/breakfast" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel1}>BREAKFAST</a>
                            </li> */}
                            <NavigationLink to="/breakfast" linkName="Breakfast" ariaLabel={ariaLabelText.navAriaLabel.navLinkAriaLabel1} className={(navData) => (navData.isActive ? "active-style" : 'none')} />
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/brunch" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel2}>BRUNCH</a>
                            </li> */}
                            <NavigationLink to="/brunch" linkName="Brunch" ariaLabel={ariaLabelText.navAriaLabel.navLinkAriaLabel2} className={(navData) => (navData.isActive ? "active-style" : 'none')} />
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/lunch" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel3}>LUNCH</a>
                            </li> */}
                            <NavigationLink to="/lunch" linkName="Lunch" ariaLabel={ariaLabelText.navAriaLabel.navLinkAriaLabel3} className={(navData) => (navData.isActive ? "active-style" : 'none')} />
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/dinner" aria-label={ariaLabelText.navAriaLabel.navLinkAriaLabel4}>DINNER</a>
                            </li> */}
                            <NavigationLink to="/dinner" linkName="Dinner" ariaLabel={ariaLabelText.navAriaLabel.navLinkAriaLabel4} className={(navData) => (navData.isActive ? "active-style" : 'none')} />
                        </ul>
                    </div>
                    {/* <div className="col-sm-6 col-md-3 d-flex align-items-center justify-content-center justify-content-md-end">
                        <p className="m-0">Baby's Food Place<br />Blagoj jovanovski Bazzomir <br />copyright &copy; 2024</p>
                    </div> */}
                    <div className="col-sm-12 col-md-3 d-flex align-items-center justify-content-center justify-content-md-end">
                        <p className="m-0 d-none d-lg-block">
                            Baby's Food Place<br />
                            Blagoj Jovanovski<br />
                            Bazzomir &copy; 2024
                        </p>
                        <p className="m-0 d-block d-lg-none">
                            Baby's Food Place Blagoj Jovanovski Bazzomir &copy; 2024
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
