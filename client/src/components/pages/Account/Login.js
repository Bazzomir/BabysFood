import React, { useState } from 'react';
import { api } from '../../../RESTApi/RestApi';
import logo from '../../../assets/logo/logo.png';

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

        const forms = document.querySelectorAll('.needs-validation')

        Array.prototype.slice.call(forms)
            .forEach((form) => {
                form.addEventListener('submit', (e) => {
                    if (!form.checkValidity()) {
                        e.preventDefault()
                        e.stopPropagation()
                    }
                    form.classList.add('was-validated')
                }, false)
            })
    })()

    return (
        // <section className="login">
        <div className="container">
            <div className="row pt-5">
                <h2 className="title">Sigh In<hr className="mt-2" /></h2>
            </div>
            <div className="row pt-3 pb-6">
                <div className="col-7">
                    <h2><span className="orangeText">Welcome to</span><span className="greyText"> Baby's</span></h2>
                    <div className="d-flex col gap-5 pt-3">
                        <p className="greyText"><img className="logo" src={logo} alt="Logo" />
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div>
                <div className="col-5 d-flex justify-content-end">
                    <div className="row d-flex justify-content-center align-items-center w-100">
                        <form className="needs-validation col-12" onSubmit={logIn} noValidate>
                            <div className="form-group pb-4 col">
                                <label htmlFor="validationCustom01" className="form-label m-0">Email address</label>
                                <input className="form-control" type="email" placeholder="user@domain.com" id="validationCustom01" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                <div className="invalid-feedback">
                                    Please enter your email address.
                                </div>
                            </div>
                            <div className="form-group pb-4 col">
                                <label htmlFor="validationCustom02" className="form-label m-0">Password</label>
                                <input className="form-control" type="password" placeholder="********" id="validationCustom02" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                <div className="invalid-feedback">
                                    Please enter your password.
                                </div>
                            </div>
                            <div className="form-group pb-4 col-12 d-flex justify-content-between align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">
                                        Remember Me
                                    </label>
                                </div>
                                <h6>Forgot Password</h6>
                            </div>
                            <div className="form-group pb-4 col-12">
                                <button variant="success" className="btn btn-green" type="submit">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        // </section>
    )
}
