import React from 'react';

export const InputClassic = ({ htmlFor, labelName, classNameDiv, classNameInput, type, placeholder, id, value, onChange, feedback }) => {
    return (
        <div className={`form-group ${classNameDiv}`}>
            <label htmlFor={htmlFor} className="form-group m-0">{labelName}</label>
            <input
                className={`form-control ${classNameInput}`}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                type={type}
                required
                id={id}
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
            <label className="form-check-label" htmlFor={htmlFor} >
                {labelName}
            </label>
            <div className="invalid-feedback">
                {feedback}
            </div>
        </div>
    )
}

export const InputTextArea = ({ classNameDiv, htmlFor, labelName, id, classNameTextArea, rows, value, onChange, feedback }) => {
    return (
        <div className={`form-group ${classNameDiv}`}>
            <label htmlFor={htmlFor} >{labelName}</label>
            <textarea className={`form-control ${classNameTextArea}`} id={id} rows={rows} value={value} required
                onChange={onChange} />
            <div className="invalid-feedback">
                {feedback}
            </div>
        </div>
    )
}

export const InputImage = ({classNameDiv, classNameDivImg, classNameImg, alt, src, classNameDivLabel, labelName, htmlFor, onClick, ariaLabel, inputId, onChange }) => {
    return (
        <div className={`col-sm-12 ${classNameDiv}`}>
            <div className={classNameDivLabel}>
                <label htmlFor={htmlFor}>{labelName}</label>
            </div>
            <div className={`col-12 mx-auto ${classNameDivImg}`}>
                <img className={`mx-auto ${classNameImg}`} alt={alt} src={src} />
            </div>
            <div className="col mt-4 text-center">
                <button onClick={onClick} type="submit" className="btn btn-grey" aria-label={ariaLabel}>UPLOAD IMAGE</button>
                <input id={inputId} onChange={onChange} type="file" accept="image/*" style={{ display: "none" }} />
            </div>
        </div>
    )
}
