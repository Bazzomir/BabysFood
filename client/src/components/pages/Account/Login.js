import React, { useState } from 'react';
import { api } from '../../../RESTApi/RestApi';
import logo from '../../../assets/logo/logo.png'

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

    (() => {
        const forms = document.querySelectorAll('.needs-validation');

        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })();

    return (
        <div className="container">
            <div className="row pt-5">
                <h2 className="title">Log In<hr className='mt-2' /></h2>
            </div>
            <div className="row pt-5 pb-6">
                <div className="col-6">
                    {/* <div className="d-flex row gap-1"> */}
                    <h2><span className="orangeText">Welcome to</span> Baby's</h2>
                    {/* <img className="logo" src={logo} alt="Logo" /> */}
                    {/* </div> */}
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    </p>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <form className="col-12 needs-validation" onSubmit={logIn} novalidate>
                        <div className="form-group pb-4">
                            <label htmlFor="validationCustom01" className="form-label m-0">Email address</label>
                            <input className="form-control" type="email" placeholder="user@domain.com" id="validationCustom01" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <div class="valid-feedback">
                                Please enter your email address.
                            </div>
                        </div>
                        <div className="form-group pb-4">
                            <label htmlFor="validationCustom02" className="form-label m-0">Password</label>
                            <input className="form-control" type="password" placeholder="*****" id="validationCustom02" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <div class="valid-feedback">
                                Please enter your email address.
                            </div>
                        </div>
                        <button variant="success" className="btn btn-success">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
