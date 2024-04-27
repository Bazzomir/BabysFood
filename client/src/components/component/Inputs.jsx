import React from 'react';

export const InputAuth = ({ htmlFor, labelName, inputName, type, value, onChange, placeholder, inputClassName }) => {
    return (
        <div className="form-group p-2 col-sm-12 col-md-6">
            <label htmlFor={htmlFor} className="form-label m-0">{labelName}</label>
            <input
                className={`form-control ${inputClassName}`}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                type={type}
                name={inputName}
            />
        </div>
    );
}

export const InputUser = ({ htmlFor, labelName, classNameDiv, type, placeholder, id, value, onChange, feedback }) => {
    return (
        <div className={classNameDiv}>
            <label htmlFor={htmlFor} className="form-label m-0">{labelName}</label>
            <input className="form-control"
                type={type}
                placeholder={placeholder}
                id={id}
                required
                value={value}
                onChange={onChange}
            />
            <div className="invalid-feedback">
                {feedback}
            </div>
        </div>
    )
}

export const InputCheck = ({ value, onChange, id, htmlFor, ariaLabel, labelName, feedback, required }) => {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value={value} id={id} required={required} onChange={onChange} aria-label={ariaLabel} />
            <label className="form-check-label" htmlFor={htmlFor}>
                {labelName}
            </label>
            <div className="invalid-feedback">
                {feedback}
            </div>
        </div>
    )
}

// export default InputAuth;
