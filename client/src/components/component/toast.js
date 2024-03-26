import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Toast } from 'bootstrap'; // Import Bootstrap Toast

function Toasts() {
    useEffect(() => {
        // Initialize Bootstrap Toasts
        var toastElList = [].slice.call(document.querySelectorAll('.toast'));
        var toastList = toastElList.map(function (toastEl) {
            return new Toast(toastEl);
        });
    }, []); // Empty dependency array ensures useEffect runs only once after the initial render

    return (
        <div className="toast-container">
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <img src="..." className="rounded me-2" alt="..." />
                    <strong className="me-auto">Recipe</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    See? Just like this.
                </div>
            </div>
        </div>
    );
}

export default Toasts;
