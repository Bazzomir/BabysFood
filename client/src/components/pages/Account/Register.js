import React from 'react';
import Navbar from '../../Header/Navbar';

export default function Register() {
    return (
        <div className="container">
            <Navbar />
            <div className="row"><h3 id="h3Title">Create Account<hr /></h3></div>
            <div className="row" >
                <div className="col" id="textHeader" xs={5}>
                    <h1><span id="colorText">Create Your</span> Account</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    </p>
                </div>
                <div className="col">
                    <form style={{ width: "80%" }} >
                        <div className="row mb-3">
                            <div className="col">
                                <label>First Name</label>
                                <input className="form-control" placeholder="John" type="text" />
                            </div>
                            <div className="col">
                                <label>Last Name</label>
                                <input className="form-control" placeholder="Smith" type="text" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label>Email</label>
                                <input className="form-control" type="email" placeholder="john@smith.com" />
                            </div>
                            <div className="col">
                                <label>Birthday</label>
                                <input className="form-control" type="date" />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <label>Password</label>
                                <input className="form-control" type="password" placeholder="*****" />
                            </div>
                            <div className="col">
                                <label>Repeat password</label>
                                <input className="form-control" type="password" placeholder="*****" />
                            </div>
                        </div>
                        <button variant="success" className="btn btn-success">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
