import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationButton = ({ to, ariaLabel, onClick, buttonName, className, style }) => {
    return (
        <NavLink to={to} aria-label={ariaLabel} onClick={onClick}>
            <button type="button" className={`btn ${className}`} style={{ ...style, textTransform: "uppercase", fontWeight: "bold" }} >{buttonName}</button>
        </NavLink>
    );
};

export const NavigationLInk = ({ to, linkName, ariaLabel, className }) => {
    return (
        <li className="nav-item col w-auto">
            <NavLink to={to}
                //  activeClassName="active" 
                className={`nav-link text-uppercase ${className}`} aria-label={ariaLabel}>{linkName}</NavLink>
        </li>
    )
};

export const NavigationImage = ({ to, className, ariaLabel, src, alt }) => {
    return (
        <NavLink className={className} to={to} aria-label={ariaLabel}>
            <img src={src} alt={alt} />
        </NavLink>
    )
}

export const ButtonAuth = ({ buttonName, className, ariaLabel, onClick }) => {
    return (
        <div className={`form-group`}>
            <button
                type="submit"
                variant="success"
                className={`btn ${className}`}
                aria-label={ariaLabel}
                onClick={onClick}
            >
                {buttonName}
            </button>
        </div>
    );
};

export const ButtonLink = ({ divClassName, to, ariaLabel, className, linkName }) => {
    return (
        <div className={divClassName}>
            <NavLink to={to} aria-label={ariaLabel} className={className}>{linkName}</NavLink>
        </div>
    );
};

// export default (NavigationButton, ButtonAuth, LinkButton, NavigationLInk);