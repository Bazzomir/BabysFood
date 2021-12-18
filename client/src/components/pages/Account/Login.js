import React from 'react'
import Navbar from '../../Header/Navbar';

export default function Login() {
    return (
        <div className="container">
            <Navbar />
            <div className="row"><h3 id="h3Title">Log In<hr /></h3></div>
            <div className="row" >
                <div className="col" id="textHeader">
                    <h1><span id="colorText" >Welcome to</span> Baby's</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    </p>
                </div>
                <div className="col" xs={4}>
                    <form style={{ width: "70%" }} >
                        <div className="form-group mb-3" controlId="formGroupEmail">
                            <label>Email address</label>
                            <input className="form-control" type="email" placeholder="user@domain.com" />
                        </div>
                        <div className="form-group mb-4" controlId="formGroupPassword">
                            <label>Password</label>
                            <input className="form-control" type="password" placeholder="*****" />
                        </div>
                        <button variant="success" className="btn btn-success" >Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
