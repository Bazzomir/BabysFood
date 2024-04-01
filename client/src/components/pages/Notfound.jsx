import React from 'react'

export default function Notfound() {
    return (
        <div className="container">
            <div className="col-12 py-6 notFound justify-content-center align-items-center gap-5">
                <h2 className="title m-0 py-5">Sorry, this page isn't available.</h2>
                <h3 id="colorText" className="m-0 pb-5">The link you followed may be broken, or the page may have been removed.</h3>
                <a href="/home">Go back to Baby's Food Recipes</a>
            </div>
        </div>
    )
}
