import React, { useState } from 'react'
import Popup from './Popup';

export default function PopupButton() {

    const [popupShow, setPopupShow] = useState(false);

    return (
        <>
            <button id="iconsButton" variant="success" onClick={() => setPopupShow(true)}>
                <svg id="icons" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                    <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>

            <Popup show={popupShow} onHide={() => setPopupShow(false)} />
        </>
    )
}
