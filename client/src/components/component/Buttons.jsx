// import React from 'react';

// const LoginButton = () => {
//     return (
//         <button type="button" className="btn btn-grey">LOG IN</button>
//     );
// }

// const CreateAccountButton = () => {
//     return (
//         <button type="button" className="btn btn-green">CREATE ACCOUNT</button>
//     );
// }

// export { LoginButton, CreateAccountButton };

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationButton = ({ to, ariaLabel, onClick, type, buttonName, className, style }) => {
    return (
        <NavLink to={to} aria-label={ariaLabel} onClick={onClick}>
            <button type={type} className={className} style={style}>{buttonName}</button>
        </NavLink>
    );
}

export default NavigationButton;