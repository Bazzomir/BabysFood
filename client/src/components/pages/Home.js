import React from 'react'
import jajca from '../assets/jajca.jpg';

export default function Home() {
    return (
        <div>
            <h2>Fresh & New</h2>
            <div className="card row mt-5" style={{ width: '25rem' }}>
                <div className="col">
                    <img src={jajca} className="card-img-box" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button href="https://en.wikipedia.org/wiki/JavaScript" style={{ float: 'right' }}>Read more</button>
                    </div>
                </div>
            </div>
            <h2>Most Popular Recipes</h2>
        </div>
    );
}
