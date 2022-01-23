import React, { useState } from 'react';
import { api } from '../../../RESTApi/RestApi';

const bcrypt = require("bcryptjs");

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = (event) => {
        event.preventDefault();

        const user = { email: email, password: password }

        fetch(`${api.root}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json()
                .then(data => {
                    let compareData = bcrypt.compareSync(password, `${data.password}`);
                    if (compareData === true || data.error === false) {
                        localStorage.setItem("user", JSON.stringify(user));
                        localStorage.setItem("token", data.token);
                        window.location = "/myprofile" 
                    } else { alert("Invalid credentials") }
                }))
            .catch(err => alert(err));
    }
    return (
        <div className="container">
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
                    <form style={{ width: "70%" }} onSubmit={logIn}>
                        <div className="form-group mb-3">
                            <label>Email address</label>
                            <input className="form-control" type="email" placeholder="user@domain.com" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="form-group mb-4">
                            <label>Password</label>
                            <input className="form-control" type="password" placeholder="*****" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <button variant="success" className="btn btn-success">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
