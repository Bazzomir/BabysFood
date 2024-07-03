import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationButton = ({ to, ariaLabel, onClick, buttonName, className, style }) => {
    return (
        <NavLink to={to} aria-label={ariaLabel} onClick={onClick}>
            <button type="button" className={`btn text-uppercase fw-bold ${className}`} style={style}>{buttonName}</button>
        </NavLink>
    );
};

export const NavigationLink = ({ to, linkName, ariaLabel, className }) => {
    return (
        <li className="nav-item col w-auto">
            <NavLink to={to}
                className={`nav-link text-uppercase ${className}`} aria-label={ariaLabel}>{linkName}</NavLink>
        </li>
    )
};

export const NavigationImage = ({ to, classNameLink, classNameImg, ariaLabel, src, alt }) => {
    return (
        <NavLink className={classNameLink} to={to} aria-label={[ariaLabel]}>
            <img src={src} alt={alt} className={classNameImg} />
        </NavLink>
    )
}

export const ButtonAuth = ({ buttonName, classNameBtn, classNameDiv, ariaLabel, onClick }) => {
    return (
        <div className={`form-group ${classNameDiv}`}>
            <button
                type="submit"
                variant="success"
                className={`btn ${classNameBtn}`}
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


export const ButtonCircle = ({ to, ariaLabel, viewBox, d }) => {
    return (
        <div className="col-auto position-absolute end-0 top-79">
            <NavLink to={to} aria-label={ariaLabel} >
                <button type="button" className="btn btn-outline-light" id="plusAndBack" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} fill="currentColor" className="plusAndBackIcon">
                        <path d={d} />
                    </svg>
                </button>
            </NavLink>
        </div>
    );
};

// export default (NavigationButton, ButtonAuth, LinkButton, NavigationLink);